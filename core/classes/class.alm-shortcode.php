<?php
/**
 * Ajax Load More Shortcode
 *
 * Returns [ajax_load_more {params}] shortcode.
 *
 * @author   Darren Cooney
 * @since    2.10.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( !class_exists('ALM_SHORTCODE') ):

   class ALM_SHORTCODE {

      static $counter = 0;


      /**
	    * alm_render_shortcode
	    * Parse & render ALM shortcode.
   	 *
   	 * @since         2.10.1
   	 * @param $atts   Shortcode attributes
   	 * @return        $ajaxloadmore
   	 */

      public static function alm_render_shortcode($atts){

         global $post;

   		$options = get_option( 'alm_settings' );
   		self::$counter++;

   		// Define page slug
   		$slug = apply_filters('alm_page_slug', alm_get_page_slug($post));

   		// Define post ID
   		$post_id = apply_filters('alm_page_id', alm_get_page_id($post));

   		// Custom CSS for Layouts - Only run this once.
   		if(has_action('alm_layouts_custom_css')){
      		do_action('alm_layouts_custom_css', self::$counter);
         }

   		extract(shortcode_atts(array(
				'acf' => false,
				'acf_post_id' => '',
				'acf_field_type' => 'repeater',
				'acf_field_name' => '',
   			'restapi' => false,
   			'restapi_base' => '/wp-json',
   			'restapi_namespace' => 'ajaxloadmore',
   			'restapi_endpoint' => 'posts',
   			'restapi_template_id' => '',
   			'restapi_debug' => false,
   			'users' => false,
   			'users_role' => '',
   			'users_include' => '',
   			'users_exclude' => '',
   			'users_per_page' => '5',
   			'users_order' => 'ASC',
   			'users_orderby' => 'login',
   			'comments' => false,
   			'comments_per_page' => '5',
   			'comments_type' => 'comment',
   			'comments_style' => 'ol',
   			'comments_template' => 'none',
   			'comments_callback' => '',
   			'comments_post_id' => 'null',
      		'nextpage' => false,
      		'nextpage_post_id' => 'null',
      		'nextpage_urls' => 'true',
      		'nextpage_scroll' => '250:30',
      		'nextpage_pageviews' => 'true',
      		'nextpage_start' => 1,
      		'previous_post' => false,
      		'previous_post_id' => 'null',
      		'previous_post_taxonomy' => '',
      		'previous_post_excluded_terms' => '',
   			'cache' => 'false',
   			'cache_id' => '',
   			'paging' => 'false',
   			'paging_controls' => 'false',
   			'paging_show_at_most' => '7',
   			'paging_classes' => '',
   			'preloaded' => 'false',
   			'preloaded_amount' => '5',
   			'seo' => 'false',
   			'repeater' => 'default',
   			'theme_repeater' => 'null',
   			'cta' => false,
   			'cta_position' => 'before:1',
   			'cta_repeater' => 'null',
   			'cta_theme_repeater' => 'null',
   			'masonry' => '',
   			'post_type' => 'post',
   			'sticky_posts' => false,
   			'post_format' => '',
   			'category' => '',
   			'category__not_in' => '',
   			'tag' => '',
   			'tag__not_in' => '',
   			'taxonomy' => '',
   			'taxonomy_terms' => '',
   			'taxonomy_operator' => '',
   			'taxonomy_relation' => '',
   			'meta_key' => '',
   			'meta_value' => '',
   			'meta_compare' => '',
   			'meta_relation' => '',
   			'meta_type' => '',
   			'year' => '',
   			'month' => '',
   			'day' => '',
   			'author' => '',
   			'search' => '',
   			'custom_args' => '',
   			'post_status' => '',
   			'order' => 'DESC',
   			'orderby' => 'date',
   			'post__in' => '',
   			'post__not_in' => '',
   			'exclude' => '',
   			'offset' => '0',
   			'posts_per_page' => '5',
   			'scroll' => 'true',
   			'scroll_distance' => '150',
   			'scroll_container' => '',
   			'max_pages' => '0',
   			'pause_override' => 'false',
   			'pause' => 'false',
   			'destroy_after' => '',
   			'transition' => 'slide',
   			'transition_speed' => '250',
   			'transition_container' => 'true',
   			'transition_container_classes' => '',
   			'masonry_selector' => '',
   			'masonry_animation' => '',
   			'masonry_horizontalorder' => '',
   			'progress_bar' => 'false',
   			'progress_bar_color' => 'ed7070',
   			'images_loaded' => 'false',
   			'button_label' => apply_filters('alm_button_label', __('Older Posts', 'ajax-load-more')),
   			'button_loading_label' => '',
   			'container_type' => '',
   			'css_classes' => '',
   			'id' => '',
   			'primary' => false
   		), $atts));


			// Start Enqueue Scripts
   		
   		
   		// Inline CSS
   		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_disable_css') && self::$counter === 1 ){
		   	$file = ALM_PATH . '/core/dist/css/'. ALM_SLUG .'.min.css'; // Core Ajax Load More
	         echo ALM_ENQUEUE::alm_inline_css(ALM_SLUG, $file, ALM_URL);
   		}

			// Masonry
         if($transition === 'masonry'){
      		wp_enqueue_script( 'imagesloaded' ); // Enqueue before core ALM
      		wp_enqueue_script( 'masonry' ); // Enqueue before core ALM
         }

   		// Core ALM
      	wp_enqueue_script( 'ajax-load-more' );

			// Progress Bar
			if($progress_bar === 'true'){ // Enqueue bar JS
				wp_add_inline_script( 'ajax-load-more', 'window.paceOptions = {restartOnPushState: false};' );
         	wp_enqueue_script( 'ajax-load-more-progress' );
			}

         // Next Page
         if(has_action('alm_nextpage_installed') && $nextpage === 'true'){
      		wp_enqueue_script( 'ajax-load-more-nextpage' );
         }

   		// Paging
   		if(has_action('alm_paging_installed') && $paging === 'true'){
      		wp_enqueue_script( 'ajax-load-more-paging' );
      		
      		// Inline paging CSS      		
      		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_paging_disable_css') && self::$counter === 1 ){
	      		if(defined('ALM_PAGING_PATH') && defined('ALM_PAGING_URL')){
	      			$file = ALM_PAGING_PATH.'/core/css/ajax-load-more-paging.min.css';
						echo ALM_ENQUEUE::alm_inline_css('ajax-load-more-paging', $file, ALM_PAGING_URL);
		         }
	      	}
         }

         // Previous Post
         if(has_action('alm_prev_post_installed') && $previous_post === 'true'){
      		wp_enqueue_script( 'ajax-load-more-previous-post' );
         }

   		// SEO
   		if(has_action('alm_seo_installed') && $seo === 'true'){
      		wp_enqueue_script( 'ajax-load-more-seo' );
   		}
         


         /*
	   	 *	alm_enqueue_external_scripts
	   	 *
	   	 * ALM Core Action
	   	 * Load JavaScript located in external add-ons and extensions
	   	 *
	   	 */
   		do_action('alm_enqueue_external_scripts', $atts);


   		// End Enqueue Scripts


         if($previous_post === 'true'){
            $previous_post = true;
   		}

   		if($seo === "true" || $previous_post){
            $transition_container = "true";
         }
			if(!empty($transition_container_classes)){
				$transition_container_classes = ' '. $transition_container_classes;
			}
			
         if($restapi === 'true'){
            $restapi = true;
            $preloaded = false;
         }

         // Get container elements (ul | div)

   		$container_element = 'ul';
   		if($options['_alm_container_type'] == '2' || $previous_post){
   			$container_element = 'div';
         }
         
         $css_classes = (!empty($css_classes)) ? ' ' . $css_classes : '';

   		// override shortcode param
   		if($container_type){
      		$container_element = $container_type;
   		}

   		// Previous Post
   		if($previous_post){
      		$posts_per_page = 1;
   			$container_element = 'div';
   		}
   		
   		// Users
   		$users = ($users === 'true') ? true : false;   	

   		// Comments
   		if($comments === 'true'){
   			$container_element = $comments_style;
   		}

   		// Get extra classnames
   		$classname = '';
   		if(isset($options['_alm_classname'])){
   			$classname = $options['_alm_classname'];
   			$classname = (empty($classname)) ? '' : ' '.$classname;
   		}

   		// Get button color
   		$btn_color = '';
   		if(isset($options['_alm_btn_color'])){
   			$btn_color = ' '.$options['_alm_btn_color'];
   		}

   		// Get paging color
   		$paging_color = '';
   		if(isset($options['_alm_paging_color']) && has_action('alm_paging_installed')){
   			$paging_color = ' paging-'.$options['_alm_paging_color'];
   		}

   		// Get Layouts activated
   		$alm_layouts = '';
   		if(has_action('alm_layouts_installed')){
   			$alm_layouts = ' alm-layouts';
   		}

   		// Get btn classnames
   		$button_classname = '';
   		if(isset($options['_alm_btn_classname'])){
   			$button_classname = ' '.$options['_alm_btn_classname'];
   		}

   		// Language support
   		$lang = defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : ''; // WPML - http://wpml.org
   		if (function_exists('pll_current_language')){ // Polylang - https://wordpress.org/plugins/polylang/
   		   $lang = pll_current_language();
         }
         if (function_exists('qtrans_getLanguage')){ // qTranslate - https://wordpress.org/plugins/qtranslate/
   		   $lang = qtrans_getLanguage();
   		}
			
			// Global Posts Per Page
   		$wp_posts_per_page = get_option( 'posts_per_page' ); // Posts per page	- settings -> reading

   		/* If $wp_posts_per_page > than shortcode value then $posts_per_page to $wp_posts_per_page */
   		if(has_action('alm_seo_installed') && $wp_posts_per_page > $posts_per_page && $seo === 'true'){
      		$posts_per_page = $wp_posts_per_page;
      	}

      	// Paging
      	$paging_container_class = '';
      	if($paging === 'true'){
         	$paging_container_class = ' alm-paging-wrap';

            // If Preloaded & Paging, pause loading by default.
            // Added in 2.14.0
         	if($preloaded === 'true'){
            	$pause = 'true';
            	$pause_override = 'false';
         	}
         }

   		// Start ALM object
   		$ajaxloadmore = '';



			/*
	   	 *	alm_before_container
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return html;
	   	 */
         $ajaxloadmore .= apply_filters('alm_before_container', '');

         // Build Canonical URL
         $canonicalURL = apply_filters('alm_canonical_url', alm_get_canonical_url());

			// Generate ALM ID
         $div_id = (self::$counter > 1) ? 'ajax-load-more-'.self::$counter : 'ajax-load-more';

			// Custom unique ALM ID (shortcode)
         $unique_id = (!empty($id)) ? 'data-id="'.$id.'"' : '';

			// Search atts - Used with SEO
         $is_search = (is_search()) ? 'data-search="true"' : '';


			// Start #ajax-load-more
   		$ajaxloadmore .= '<div id="'. $div_id .'" class="ajax-load-more-wrap'. $btn_color .''. $paging_color .''. $alm_layouts .'" '. $unique_id .' data-alm-id="" data-canonical-url="'. $canonicalURL .'" data-slug="'. $slug .'" data-post-id="'. $post_id .'" '. $is_search .'>';


				//	Masonry Hook (Before)
				$ajaxloadmore .= apply_filters('alm_masonry_before', $transition);


	   		// Previous Post Add-on
	   		// - Set other add-on params to false
	   		if($previous_post){
	      		$preloaded = false;
	      		$seo = false;
	      		$paging = false;
	      		$comments = false;
	      		$acf = false;
	   		}


	   		// Comments Add-on
	   		// - Set other add-on params to false
	   		if($comments){
	      		$previous_post = false;
	      		$seo = false;
	      		$cache = false;
	      		$acf = false;
	      		$posts_per_page = $comments_per_page;
	   		}


	   		// Nextpage Add-on
	   		// - Set other add-on params to false
	   		if($nextpage){
	      		$previous_post = false;
	      		$seo = false;
	      		$preloaded = false;
	      		$comments = false;
	      		$acf = false;
	      		$pause = 'true';
	   		}


	   		// ********************************
	   		// Preloaded Add-on
	   		// - Get preloaded posts and append to ajax load more object
	   		if(has_action('alm_preload_installed') && $preloaded === 'true'){

	   		   $preloaded_output = '';
	   		   $preload_offset = $offset;

	   		   // If SEO, set $preloaded_amount to $posts_per_page
	   		   if(has_action('alm_seo_installed') && $seo === 'true' && !$users){
	   		      $preloaded_amount = $posts_per_page;
	            }

	   		   // Paging Add-on
	   		   // - Set $preloaded_amount to $posts_per_page
	            if($paging === 'true'){
	   		      $preloaded_amount = $posts_per_page;
	   		      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	   		      if($paged > 1){
	      		      $preload_offset = $preloaded_amount * ($paged - 1);
	   		      }
	            }

	            // CTA Add-on
	            // - Parse $cta_position
	            if($cta){
						$cta_pos_array = explode(":", $cta_position);
						$cta_pos = (string)$cta_pos_array[0];
						$cta_val = (string)$cta_pos_array[1];
						if($cta_pos != 'after'){
	                  $cta_pos = 'before';
	               }
					}		
					
								
					// Create preloaded data array
	      		$preloaded_arr = array( 
						'post_id'        		=> $post_id,
						'acf'           		=> $acf,
						'acf_post_id'   		=> $acf_post_id,
						'acf_field_type'  	=> $acf_field_type,
						'acf_field_name'     => $acf_field_name,
	         		'users' 					=> $users,
	         		'users_include' 		=> $users_include,
	         		'users_exclude' 		=> $users_exclude,
	         		'users_per_page' 		=> $users_per_page,
	         		'users_order' 			=> $users_order,
	         		'users_orderby' 		=> $users_orderby,
	      			'comments_per_page'  => $comments_per_page,
	      			'comments_type'      => $comments_type,
	      			'comments_style'     => $comments_style,
	      			'comments_template'  => $comments_template,
	      			'comments_callback'  => $comments_callback,
	      			'comments_post_id'   => $comments_post_id,
	         		'post_type'          => $post_type,
	         		'sticky_posts'			=> $sticky_posts,
	         		'post_format'        => $post_format,
	         		'category'           => $category,
	         		'category__not_in'   => $category__not_in,
	         		'tag'                => $tag,
	         		'tag__not_in'        => $tag__not_in,
	         		'taxonomy'           => $taxonomy,
	         		'taxonomy_terms'     => $taxonomy_terms,
	         		'taxonomy_operator'  => $taxonomy_operator,
	         		'taxonomy_relation'  => $taxonomy_relation,
	         		'meta_key'           => $meta_key,
	         		'meta_value'         => $meta_value,
	         		'meta_compare'       => $meta_compare,
	               'meta_relation'      => $meta_relation,
	               'meta_type'          => $meta_type,
	         		'year'               => $year,
	         		'month'              => $month,
	         		'day'                => $day,
	         		'author'             => $author,
	         		'post__in'           => $post__in,
	         		'post__not_in'       => $post__not_in,
	         		's'             		=> $search,
	               'custom_args'        => $custom_args,
	         		'post_status'        => $post_status,
	         		'order'              => $order,
	         		'orderby'            => $orderby,
	         		'exclude'            => $exclude,
	         		'offset'             => $preload_offset,
	         		'posts_per_page'     => $preloaded_amount,
	         		'lang'               => $lang,
	               'css_classes'        => $css_classes,
	            );

	            $type = alm_get_repeater_type($repeater);

	            if($comments){ // Comments

	         		if(has_action('alm_comments_installed') && $comments){

		         		/*
					   	 *	alm_comments_preloaded
					   	 *
					   	 * Preloaded Comments Filter
					   	 *
					   	 * @return $preloaded_comments;
					   	 */
	         		   $preloaded_comments = apply_filters('alm_comments_preloaded', $preloaded_arr); // located in comments add-on
	                  $preloaded_output .= '<'.$comments_style.' class="alm-listing alm-preloaded commentlist alm-comments-preloaded'. $classname . $css_classes .'">';
	                  if($seo === "true"){
		                  $preloaded_output .= '<div class="alm-reveal alm-seo'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
		               }
		               $preloaded_output .= $preloaded_comments;
	                  if($seo === "true"){
		                  $preloaded_output .= '</div>';
		               }
	                  $preloaded_output .= '</'.$container_element.'>';
	               }

		         }
		         
		         elseif($users){ // Users
			         
			         if(has_action('alm_users_preloaded') && $users){		         
							
							// Encrypt User Role
			            if(!empty($users_role) && function_exists('alm_role_encrypt')){
				            $preloaded_arr['users_role'] = alm_role_encrypt($users_role);
				         }
				         
				         
				      
				      	/*
					   	 *	alm_users_preloaded
					   	 *
					   	 * Preloaded Users Filter
					   	 *
					   	 * @return $preloaded_users;
					   	 */
	         		   $preloaded_users = apply_filters('alm_users_preloaded', $preloaded_arr, $preloaded_amount, $repeater, $theme_repeater); // located in Users add-on
	                  $preloaded_output .= '<'.$container_element.' class="alm-listing alm-preloaded alm-users-preloaded'. $classname . $css_classes .'">';
	                  if($seo === "true"){
		                  $preloaded_output .= '<div class="alm-reveal alm-seo'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
		               }
		               $preloaded_output .= $preloaded_users;
	                  if($seo === "true"){
		                  $preloaded_output .= '</div>';
		               }
	                  $preloaded_output .= '</'.$container_element.'>';  
				     
						}
			      }

		         elseif($acf && ($acf_field_type !== 'relationship')){ // Advanced Custom Fields

	         		if(has_action('alm_acf_installed') && $acf){

		         		/*	alm_acf_preloaded
					   	 *
					   	 * Preloaded ACF Filter
					   	 *
					   	 * @return $preloaded_acf;
					   	 */
	         		   $preloaded_acf = apply_filters('alm_acf_preloaded', $preloaded_arr, $repeater, $theme_repeater); //located in ACF add-on

	                  $preloaded_output .= '<'.$container_element.' class="alm-listing alm-preloaded alm-acf-preloaded'. $classname . $css_classes .'" data-total-posts="'. apply_filters('alm_acf_total_rows', $preloaded_arr) .'">';
	                  if($seo === "true"){
		                  $preloaded_output .= '<div class="alm-reveal alm-seo'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
		               }

	                  $preloaded_output .= $preloaded_acf;

	                  if($seo === "true"){
		                  $preloaded_output .= '</div>';
		               }

	                  $preloaded_output .= '</'.$container_element.'>';
	               }

			      }

			      else { // Standard


		            /*
				   	 *	alm_preload_args
				   	 *
				   	 * ALM Preloaded Filter Hook
				   	 *
				   	 * @return $args;
				   	 */
	               $args = apply_filters('alm_preload_args', $preloaded_arr); // Create preloaded $args



						/*
				   	 *	alm_modify_query_args
				   	 *
				   	 * ALM Core Filter Hook
				   	 *
				   	 * @return $args;
				   	 * Deprecated 2.10
				   	 */
	               $args = apply_filters('alm_modify_query_args', $args, $slug);



	         		/*
	      	   	 *	alm_query_args_[id]
	      	   	 *
	      	   	 * ALM Core Filter Hook
	      	   	 *
	      	   	 * @return $args;
	      	   	 */
	               $args = apply_filters('alm_query_args_'.$id, $args, $post_id);


	      			$alm_preload_query = new WP_Query($args);
	      			
	      			$alm_total_posts = $alm_preload_query->found_posts - $offset;
	               $output = '';
	               $noscript = '';

	      			if ($alm_preload_query->have_posts()) :
	      				$alm_item = 0; // Count var
	      				$alm_page = 0; // Set page to 0
	      				$alm_found_posts = $alm_total_posts;
	      				$alm_current = 0;
	      			   while ($alm_preload_query->have_posts()) : $alm_preload_query->the_post();

	      			   	$alm_item++;
	         	         $alm_current++;

	         	         // Call to Action [Before]
			   				if($cta && has_action('alm_cta_inc') && $cta_pos == 'before'){
		   	   	         if($alm_current == $cta_val){
			   	   	         $output .= apply_filters('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, true);
		      	   	      }
		      			   }

	      			   	$output .= apply_filters('alm_preload_inc', $repeater, $type, $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current);

	      			   	// Call to Action [After]
			   				if($cta && has_action('alm_cta_inc') && $cta_pos == 'after'){
		   	   	         if($alm_current == $cta_val){
			   	   	         $output .= apply_filters('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, true);
		      	   	      }
		      			   }

	                  endwhile; wp_reset_query();

	                  if(has_action('alm_seo_installed') && $seo === 'true'){ // If SEO, add noscript paging
	                     // Create noscript paging for SEO if preload and seo are enabled
	                     $noscript = alm_paging_no_script($alm_preload_query);
	                  }

	      			endif;

	      			$preloaded_output .= '<'.$container_element.' class="alm-listing alm-preloaded'. $classname . $css_classes .'" data-total-posts="'. $alm_total_posts .'">';

	      			if($seo === "true" && $paging === 'false'){
	         			if(is_search()){
	            			// If search, append slug (?s=term) to data-url
	         			   $preloaded_output .= '<div class="alm-reveal alm-seo'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.''. $slug .'">';
	         			}else{
	         			   $preloaded_output .= '<div class="alm-reveal alm-seo'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
	         			}
	               }
	               if($seo === "false" && $paging === 'true' || $seo === "true" && $paging === 'true'){
	                  $preloaded_output .= '<div class="alm-reveal'. $transition_container_classes .'">';
	               }

	      			$preloaded_output .= $output;

	      			if($seo === "false" && $paging === 'true'){
	                  $preloaded_output .= '</div>';
	               }
	      			if($seo === "true" && $paging === 'false' || $seo === "true" && $paging === 'true'){
	         			$preloaded_output .= '</div>';
	               }

	      			$preloaded_output .= '</'.$container_element.'>';

	      			if(has_action('alm_seo_installed')){ // If SEO, add noscript paging
	      			   $preloaded_output .= $noscript;
	      			}
	            }

	   			$ajaxloadmore .= $preloaded_output; // Add $preloaded_output data to $ajaxloadmore
	         }
	         // End Preload Posts
	         // ********************************


	         $listing_class = 'alm-listing';

	         // If comments
	   		if($comments === 'true'){
	      		$listing_class = 'commentlist alm-comments';
	   		}

	   		$ajaxloadmore .= '<'.$container_element.' class="'.$listing_class.' alm-ajax'. $paging_container_class . $classname . $css_classes .'"'; // Build ALM container


	   		// Cache Add-on
	   		if(has_action('alm_cache_installed') && $cache === 'true'){
	   		   $cache_return = apply_filters(
	   		   	'alm_cache_shortcode',
	   		   	$cache,
	   		   	$cache_id,
	   		   	$options
	   		   );
	   			$ajaxloadmore .= $cache_return;
	         }


	   		// CTA Add-on
	   		if(has_action('alm_cta_installed') && $cta === 'true'){
	   		   $cta_return = apply_filters(
	   		   	'alm_cta_shortcode',
	   		   	$cta,
	   		   	$cta_position,
	   		   	$cta_repeater,
	   		   	$cta_theme_repeater
	   		   );
	   			$ajaxloadmore .= $cta_return;
	         }
	         

	   		// Advanced Custom Fields Extension
	   		if(has_action('alm_acf_installed') && $acf === 'true'){
	   		   $acf_return = apply_filters(
	   		   	'alm_acf_shortcode',
	      		   $acf,
	      		   $acf_field_type,
	      		   $acf_field_name,
	      		   $acf_post_id,
	      		   $post_id
	   		   );
	   			$ajaxloadmore .= $acf_return;
	         }
	         

	   		// Comments Add-on
	   		if(has_action('alm_comments_installed') && $comments === 'true'){
	   		   $comments_return = apply_filters(
	   		   	'alm_comments_shortcode',
	      		   $comments,
	      		   $comments_per_page,
	      		   $comments_type,
	      		   $comments_style,
	      		   $comments_template,
	      		   $comments_callback,
	      		   $comments_post_id
	   		   );
	   			$ajaxloadmore .= $comments_return;
	         }


	   		// REST API Add-on
	   		if(has_action('alm_rest_api_installed') && $restapi === true){
	   		   $restapi_return = apply_filters(
	   		   	'alm_rest_api_shortcode',
	      		   'true',
	      		   $restapi_base,
	      		   $restapi_namespace,
	      		   $restapi_endpoint,
	      		   $restapi_template_id,
	      		   $restapi_debug
	   		   );
	   			$ajaxloadmore .= $restapi_return;
	         }


	   		// Paging Add-on
	         if(has_action('alm_paging_installed') && $paging === 'true'){
	   		   $paging_return = apply_filters(
	   		   	'alm_paging_shortcode',
	   		   	$paging,
	   		   	$paging_controls,
	   		   	$paging_show_at_most,
	   		   	$paging_classes,
	   		   	$options
	   		   );
	   			$ajaxloadmore .= $paging_return;
	         }


	   		// Preloaded Add-on
	         if(has_action('alm_preload_installed') && $preloaded === 'true'){
	   		   $ajaxloadmore .= ' data-preloaded="'.$preloaded.'"';
	            $ajaxloadmore .= ' data-preloaded-amount="'.$preloaded_amount.'"';
	   		}


	   		// SEO Add-on
	   		if(has_action('alm_seo_installed') && $seo === 'true'){
	   		   $seo_return = apply_filters(
	   		      'alm_seo_shortcode',
	   		      $seo,
	   		      $preloaded,
	   		      $options
	            );
	   			$ajaxloadmore .= $seo_return;
	         }


	   		// Previous Post Post Add-on
	   		if(has_action('alm_prev_post_installed') && $previous_post){
	   		   $prev_post_return = apply_filters(
	   		   	'alm_prev_post_shortcode',
	   		   	$previous_post_id,
	   		   	$previous_post_taxonomy,
	   		   	$previous_post_excluded_terms,
	   		   	$options
	   		   );
	   			$ajaxloadmore .= $prev_post_return;
	         }


	   		// Nextpage Post Add-on
	   		if(has_action('alm_nextpage_installed') && $nextpage){
	   		   $nextpage_return = apply_filters(
	   		   	'alm_nextpage_shortcode',
	   		   	$nextpage_urls,
	   		   	$nextpage_pageviews,
	   		   	$nextpage_post_id,
	   		   	$nextpage_scroll,
	   		   	$options
	   		   );
	   			$ajaxloadmore .= $nextpage_return;
	         }
	         
	         
	         // Users Add-on
	         if(has_action('alm_users_installed') && $users){   
   	         	         
	   			$posts_per_page = $users_per_page; // Update $posts_per_page var to be $users_per_page
	   			
	   		   $users_return = apply_filters(
	   		   	'alm_users_shortcode',
	   		   	$users_role,
	   		   	$users_include,
	   		   	$users_exclude,
	   		   	$posts_per_page,
	   		   	$users_order,
	   		   	$users_orderby,
	   		   	$options
	   		   );
	   			$ajaxloadmore .= $users_return;	   			
	         }


	   		$ajaxloadmore .= ' data-repeater="'.$repeater.'"';
	   		if($theme_repeater != 'null'){
	      		$ajaxloadmore .= ' data-theme-repeater="'.$theme_repeater.'"';
	         }
	   		$ajaxloadmore .= ' data-post-type="'.$post_type.'"';
	   		$ajaxloadmore .= ' data-sticky-posts="'.$sticky_posts.'"';
	   		$ajaxloadmore .= ' data-post-format="'.$post_format.'"';
	   		$ajaxloadmore .= ' data-category="'.$category.'"';
	   		$ajaxloadmore .= ' data-category-not-in="'.$category__not_in.'"';
	   		$ajaxloadmore .= ' data-tag="'.$tag.'"';
	   		$ajaxloadmore .= ' data-tag-not-in="'.$tag__not_in.'"';
	   		$ajaxloadmore .= ' data-taxonomy="'.$taxonomy.'"';
	   		$ajaxloadmore .= ' data-taxonomy-terms="'.$taxonomy_terms.'"';
	   		$ajaxloadmore .= ' data-taxonomy-operator="'.$taxonomy_operator.'"';
	   		$ajaxloadmore .= ' data-taxonomy-relation="'.$taxonomy_relation.'"';
	   		$ajaxloadmore .= ' data-meta-key="'.$meta_key.'"';
	   		$ajaxloadmore .= ' data-meta-value="'.$meta_value.'"';
	   		$ajaxloadmore .= ' data-meta-compare="'.$meta_compare.'"';
	   		$ajaxloadmore .= ' data-meta-relation="'.$meta_relation.'"';
	   		$ajaxloadmore .= ' data-meta-type="'.$meta_type.'"';
	   		$ajaxloadmore .= ' data-year="'.$year.'"';
	   		$ajaxloadmore .= ' data-month="'.$month.'"';
	   		$ajaxloadmore .= ' data-day="'.$day.'"';
	   		$ajaxloadmore .= ' data-author="'.$author.'"';
	   		$ajaxloadmore .= ' data-post-in="'.$post__in.'"';
	   		$ajaxloadmore .= ' data-post-not-in="'.$post__not_in.'"';
	   		$ajaxloadmore .= ' data-exclude="'.$exclude.'"';
	   		$ajaxloadmore .= ' data-search="'.$search.'"';
	   		$ajaxloadmore .= ' data-custom-args="'.$custom_args.'"';
	   		$ajaxloadmore .= ' data-post-status="'.$post_status.'"';
	   		$ajaxloadmore .= ' data-order="'.$order.'"';
	   		$ajaxloadmore .= ' data-orderby="'.$orderby.'"';
	   		$ajaxloadmore .= ' data-offset="'.$offset.'"';
	   		$ajaxloadmore .= ' data-posts-per-page="'.$posts_per_page.'"';
	   		$ajaxloadmore .= ' data-lang="'.$lang.'"';
	   		$ajaxloadmore .= ' data-scroll="'.$scroll.'"';
	   		if($scroll === 'true'){
   	   		$ajaxloadmore .= ' data-scroll-distance="'.$scroll_distance.'"';
   	   		$ajaxloadmore .= ' data-scroll-container="'.$scroll_container.'"';
   	   		$ajaxloadmore .= ' data-max-pages="'.$max_pages.'"';
   	   		$ajaxloadmore .= ' data-pause-override="'.$pause_override.'"';
	   		}
	   		$ajaxloadmore .= ' data-pause="'.$pause.'"';
	   		$ajaxloadmore .= ' data-button-label="'.$button_label.'"';
	   		if(!empty($button_loading_label)){
	   		   $ajaxloadmore .= ' data-button-loading-label="'.$button_loading_label.'"';
	   		}
	   		$ajaxloadmore .= ' data-destroy-after="'.$destroy_after.'"';
	   		$ajaxloadmore .= ' data-transition="'.$transition.'"';
	   		if($transition_speed !== '250'){
	   		   $ajaxloadmore .= ' data-transition-speed="'.$transition_speed.'"';
	         }
	   		if($transition_container === 'false'){
	   		   $ajaxloadmore .= ' data-transition-container="'.$transition_container.'"';
	         }
	   		if(!empty($transition_container_classes)){
	   		   $ajaxloadmore .= ' data-transition-container-classes="'.$transition_container_classes.'"';
	         }
	   		if(!empty($masonry_selector)){
	   		   $ajaxloadmore .= ' data-masonry-selector="'.$masonry_selector.'"';
	         }
	   		if(!empty($masonry_animation)){
	   		   $ajaxloadmore .= ' data-masonry-animation="'.$masonry_animation.'"';
	         }
	   		if(!empty($masonry_horizontalorder)){
	   		   $ajaxloadmore .= ' data-masonry-horizontalorder="'.$masonry_horizontalorder.'"';
	         }
	   		$ajaxloadmore .= ' data-images-loaded="'.$images_loaded.'"';

	   		if($primary !== false){
	   		   $ajaxloadmore .= ' data-primary="true"';
	         }
	   		$ajaxloadmore .= '>';


	   		// Previous Post Add-on
	         // - Get first post, append data to ajax load more object
	   		if(has_action('alm_prev_post_installed') && $previous_post){
	      		$repeater_type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater at number to retrieve type
	      		$repeater_type = $repeater_type[0]; // (default | repeater | template_)
	      		if($theme_repeater != 'null' && has_filter('alm_get_theme_repeater')){
	               $repeater_type = null;
	            }
	            // Get current permalink - (including querystring)
					$previous_post_permanlink =  ($_SERVER["QUERY_STRING"]) ? get_permalink($previous_post_id) .'?'. $_SERVER["QUERY_STRING"] : get_permalink($previous_post_id);

	            // Get previous post include, build output from the next post filter
	            $previous_post_output = '<div class="alm-reveal alm-previous-post post-'. $previous_post_id .'" data-url="'. $previous_post_permanlink .'" data-title="'. get_the_title($previous_post_id) .'" data-id="'. $previous_post_id .'" data-page="0">'; // Set the post id .alm-reveal div


	            /*
			   	 *	alm_prev_post_inc
			   	 *
			   	 * Previous Post Add-on hook
			   	 *
			   	 * @return $args;
			   	 */
	      		$previous_post_output .= apply_filters('alm_prev_post_inc', $repeater, $repeater_type, $theme_repeater, $previous_post_id, $post_type);

	            $previous_post_output .= '</div>';
	   			$ajaxloadmore .= $previous_post_output; // Add $previous_post_output data to $ajaxloadmore

	         }
	         // End Previous Post Add-on


	         // Next Page Add-on
	         if(has_action('alm_nextpage_installed') && $nextpage){

	            $nextpage_start = alm_get_startpage();

	            $nextpage_is_paged = false;
	            if($nextpage_start > 1){
	               $nextpage_is_paged = true;
	            }

	            $alm_nextpage_output = apply_filters('alm_init_nextpage', $nextpage_post_id, $nextpage_start,$nextpage_is_paged, $paging);
	            $ajaxloadmore .= $alm_nextpage_output;

	         }
	   		// End Next Page Add-on


				//	Masonry Hook (After)
				$ajaxloadmore .= apply_filters('alm_masonry_after', $transition);

	   		$ajaxloadmore .= '</'.$container_element.'>';


				/*
		   	 *	alm_before_button
		   	 *
		   	 * ALM Core Filter Hook
		   	 *
		   	 * @return html;
		   	 */
	         $ajaxloadmore .= apply_filters('alm_before_button', '');
	         
	         
	         
	         // Create Load More button
	         $ajaxloadmore .= '<div class="alm-btn-wrap">';
	         
	         if($paging !== 'true'){
   	         
   	         $btn_element = 'button';
   	         $btn_href = '';
   	         if($seo === 'true'){
      	         $btn_element = 'a'; // Convert to link for SEO
      	         $btn_href = ' href="'.$canonicalURL.'"';
   	         }
   	         
   	         
   	         $ajaxloadmore .= '<'. $btn_element .' class="alm-load-more-btn more'. $button_classname .'"'. $btn_href .'>'. $button_label .'</'. $btn_element .'>';
   	         
	         }	         
	         
	         $ajaxloadmore .= '</div>';
	         


			// Close #ajax-load-more
   		$ajaxloadmore .= '</div>';


			/*
	   	 *	alm_after_container
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return html;
	   	 */
         $ajaxloadmore .= apply_filters('alm_after_container', '');


         $ajaxloadmore .= apply_filters('alm_progress_css', self::$counter, $progress_bar, $progress_bar_color); //  ALM Core Filter Hook


   		// REST API Add-on (add template to page)
   		if(has_action('alm_rest_api_installed') && $restapi){
      		if($theme_repeater != 'null' && has_action('alm_get_rest_theme_repeater')){
         		do_action('alm_get_rest_theme_repeater', $theme_repeater);
            } else {
   			   $rest_type = alm_get_repeater_type($repeater);
   			   do_action('alm_get_rest_api_template', $repeater, $rest_type);
   			}
   		}
   		// End REST API Add-on

   		return $ajaxloadmore; // End ALM object
      }

   }

endif;

