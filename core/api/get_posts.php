<?php

// Register REST API Route
add_action( 'rest_api_init', function () {
   $namespace = ALM_REST_NAMESPACE;
   $endpoint = '/get_posts';
   register_rest_route( $namespace, $endpoint,
      array(
         'methods' => 'GET',
         'callback' => 'alm_get_posts_query',
      )
   );
});



/**
 * alm_get_posts_query
 * Main Ajax Load More Query
 *
 * @param $req $_GET
 * @since 5.1
 * @return JSON
 */
function alm_get_posts_query( WP_REST_Request $req ) {
   	
	if(!isset($req)){ return false; }
   
	error_reporting(E_ALL|E_STRICT);	
	
	// WPML fix for category/tag/taxonomy archives
	if ( (isset( $req['category'] ) && $req['category']) || (isset($req['taxonomy']) && $req['taxonomy']) ) {
		unset($_REQUEST['post_id']);
	}

	$id = (isset($req['id'])) ? $req['id'] : '';
	$post_id = (isset($req['post_id'])) ? $req['post_id'] : '';
	$slug = (isset($req['slug'])) ? $req['slug'] : '';
	$canonical_url = (isset($req['canonical_url'])) ? $req['canonical_url'] : $_SERVER['HTTP_REFERER'];


	// Ajax Query Type
	$queryType = (isset($req['query_type'])) ? $req['query_type'] : 'standard';	// 'standard' or 'totalposts'; totalposts returns $alm_found_posts


	// Cache
	$cache_id = (isset($req['cache_id'])) ? $req['cache_id'] : '';
	$cache_logged_in = (isset($req['cache_logged_in'])) ? $req['cache_logged_in'] : false;
	$do_create_cache = ($cache_logged_in === 'true' && is_user_logged_in()) ? false : true;


	// Offset
	$offset = (isset($req['offset'])) ? $req['offset'] : 0;


	// Repeater Templates
	$repeater = (isset($req['repeater'])) ? $req['repeater'] : 'default';
	$type = alm_get_repeater_type($repeater);
	$theme_repeater = (isset($req['theme_repeater'])) ? $req['theme_repeater'] : 'null';


	// Post Type
	$postType = (isset($req['post_type'])) ? $req['post_type'] : 'post';


	// Page Parameters
	$posts_per_page = (isset($req['posts_per_page'])) ? $req['posts_per_page'] : 5;
	$page = (isset($req['page'])) ? $req['page'] : 0;


	// Advanced Custom Fields
	$acfData = (isset($req['acf'])) ? $req['acf'] : false;
	if($acfData){
      $acf = (isset($acfData['acf'])) ? $acfData['acf'] : false; // true / false
      $acf_post_id = (isset($acfData['post_id'])) ? $acfData['post_id'] : ''; // Post ID
      $acf_field_type = (isset($acfData['field_type'])) ? $acfData['field_type'] : ''; // ACF Field Type
      $acf_field_name = (isset($acfData['field_name'])) ? $acfData['field_name'] : ''; // ACF Field Type
   }


	// Paging Add-on
	$paging = (isset($req['paging'])) ? $req['paging'] : 'false';


	// Preload Add-on
	$preloaded = (isset($req['preloaded'])) ? $req['preloaded'] : 'false';
	$preloaded_amount = (isset($req['preloaded_amount'])) ? $req['preloaded_amount'] : '5';
	if(has_action('alm_preload_installed') && $preloaded === 'true'){
	   // If preload - offset the ajax posts by posts_per_page + preload_amount val
	   $old_offset = $preloaded_amount;
	   $offset = $offset + $preloaded_amount;
   }


	// CTA Add-on
   $cta = false;
   $ctaData = (isset($req['cta'])) ? $req['cta'] : false;
   if($ctaData){
      $cta = true;
	   $cta_position = (isset($ctaData['cta_position'])) ? $ctaData['cta_position'] : 'before:1';
      $cta_position_array = explode(":", $cta_position);
		$cta_pos = (string)$cta_position_array[0];
		$cta_val = (string)$cta_position_array[1];
      $cta_pos = ($cta_pos != 'after') ? 'before' : $cta_pos;
	   $cta_repeater = (isset($ctaData['cta_repeater'])) ? $ctaData['cta_repeater'] : 'null';
	   $cta_theme_repeater = (isset($ctaData['cta_theme_repeater'])) ? $ctaData['cta_theme_repeater'] : 'null';
   }


   // Single Post Add-on
   $single_post = false;
	$single_post_data = (isset($req['single_post'])) ? $req['single_post'] : false;
	if($single_post_data){
		$single_post = true;
		$single_post_id = (isset($single_post_data['id'])) ? $single_post_data['id'] : '';
		$single_post_slug = (isset($single_post_data['slug'])) ? $single_post_data['slug'] : '';
   }


   // SEO Add-on
	$seo_start_page = (isset($req['seo_start_page'])) ? $req['seo_start_page'] : 1;


   // Set up initial WP_Query $args
   $args = ALM_QUERY_ARGS::alm_build_queryargs($req, true);   
	$args['paged'] = (get_query_var('paged')) ? get_query_var('paged') : 1;
	$args['offset'] = $offset + ($posts_per_page*$page);


	// Get current page number for determining item number
	$alm_page_count = ($page == 0) ? 1 : $page + 1;


	/*
	 *	alm_single_post_args
	 *
	 * Single Post Add-on hook
	 * Hijack $args and and return single post only $args
	 *
	 * @return $args;
	 */
	$args = ($single_post && has_action('alm_single_post_installed')) ? apply_filters('alm_single_post_args', $single_post_id, $postType) : $args;



	/*
	 *	alm_modify_query_args
	 *
	 * ALM Core Filter Hook
	 *
	 * @return $args;
	 * Deprecated 2.10
	 */
   $args = apply_filters('alm_modify_query_args', $args, $slug); // ALM Core Filter Hook



	/*
	 *	alm_query_args_{id}
	 *
	 * ALM Core Filter Hook
	 *
	 * @return $args;
	 */
   $args = apply_filters('alm_query_args_'.$id, $args, $post_id); // ALM Core Filter Hook



	/*
    * Set custom `alm_action` parameter in the WP_Query
	 * Value is accessed elsewhere for filters & hooks etc.
	 */ 
   $args['alm_query'] = ($single_post) ? 'single_posts' : 'alm';



	/*
	 *	WP_Query || ALM Query
	 *
	 * @return $alm_query;
	 */
	$alm_query = new WP_Query( $args );


	// If preloaded, update our loop count and total posts
   if(has_action('alm_preload_installed') && $preloaded === 'true'){
      $alm_total_posts = $alm_query->found_posts - $offset + $preloaded_amount;
      if($old_offset > 0)
         $alm_loop_count = $old_offset;
      else
         $alm_loop_count = $offset;
   }else {
      $alm_total_posts = $alm_query->found_posts - $offset;
      $alm_loop_count = 0;
   }



   /*
	 *	alm_cache_create_dir
	 *
	 * Cache Add-on hook
	 * Create cache directory + meta .txt file
	 *
	 * @return null
	 */
   if(!empty($cache_id) && has_action('alm_cache_create_dir') && $do_create_cache){
      apply_filters('alm_cache_create_dir', $cache_id, $canonical_url);
   }


   if($queryType === 'standard'){

		// Run the loop

		if ($alm_query->have_posts()) {

         $alm_found_posts = $alm_total_posts;
         $alm_post_count = $alm_query->post_count;
         $alm_current = 0;
         $alm_has_cta = false;

         $cta_array = Array();
         if($cta && has_action('alm_cta_pos_array')){ // Build CTA Position Array
            $cta_array = apply_filters('alm_cta_pos_array', $seo_start_page, $page, $posts_per_page, $alm_post_count, $cta_val, $paging);
         }

         ob_start();

         // ALM Loop
			while ($alm_query->have_posts()): $alm_query->the_post();

				$alm_loop_count++;
				$alm_current++; // Current item in loop
	         $alm_page = $alm_page_count; // Get page number
	         $alm_item = ($alm_page_count * $posts_per_page) - $posts_per_page + $alm_loop_count; // Get current item            

			   // Call to Action [Before]
				if($cta && has_action('alm_cta_inc') && $cta_pos === 'before' && in_array($alm_current, $cta_array)){
	   	   	do_action('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, false);
	   	   	$alm_has_cta = true;
			   }

			   // Repeater Template
				if($theme_repeater != 'null' && has_action('alm_get_theme_repeater')){  // Theme Repeater
   				do_action('alm_get_theme_repeater', $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current);
				}else{
					include(alm_get_current_repeater( $repeater, $type )); // Repeater
				}
				// End Repeater Template

				// Call to Action [After]
				if($cta && has_action('alm_cta_inc') && $cta_pos === 'after' && in_array($alm_current, $cta_array)){
	   	   	do_action('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, false);
	   	   	$alm_has_cta = true;
			   }

         endwhile; wp_reset_query();
         // End ALM Loop

         $data = ob_get_clean();


         /*
	   	 *	alm_cache_file
	   	 *
	   	 * Cache Add-on hook
	   	 * If Cache is enabled, check the cache file
	   	 *
	   	 * @param $cache_id          String     ID of the ALM cache
	   	 * @param $do_create_cache   Boolean    Should cache be created for this user
	   	 *
	   	 * @updated 3.2.1
	   	 * @return null
	   	 */
         if(!empty($cache_id) && has_action('alm_cache_installed') && $do_create_cache){
	         if($single_post){
   	         // Single Post Cache
               apply_filters('alm_previous_post_cache_file', $cache_id, $single_post_id, $data);
	         }else{
   	         // Standard Cache
               apply_filters('alm_cache_file', $cache_id, $page, $seo_start_page, $data, $preloaded);
            }
         }



         /*
	   	 *	alm_debug
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return $alm_query/false;
	   	 */
         $debug = (apply_filters('alm_debug', false)) ? $alm_query : false;


         $return = array(
            'html' => $data,
            'meta' => array(
               'postcount'  => $alm_post_count,
               'totalposts' => $alm_found_posts,
               'debug' 		 => $debug
            )
         );
         wp_send_json($return);

		 } else {

		   $return = array(
            'html' => null,
            'meta' => array(
               'postcount'  => 0,
               'totalposts' => 0,
               'debug'		 => null
            )
         );
         
         wp_send_json($return);

		}

	}
	
	elseif($queryType === 'totalposts'){ // Paging add-on
		
		// Paging add-on
		wp_send_json(array(
			'totalposts' => $alm_total_posts
		));

	}

	wp_die();

}
