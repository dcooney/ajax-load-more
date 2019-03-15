<?php
   
// Preloaded
// Get preloaded posts and append to alm object


// Initial vars
$preloaded_output = '';
$preload_offset = $offset;


// .alm-reveal default
$alm_reveal = '<div class="alm-reveal alm-preloaded'. $transition_container_classes .'">';


// If $seo or $filters, set $preloaded_amount to $posts_per_page
if((has_action('alm_seo_installed') && $seo === 'true' && !$users) || $filters){
   $preloaded_amount = $posts_per_page;
}	            


// Paging Add-on
// Set $preloaded_amount to $posts_per_page
if($paging === 'true'){
   $preloaded_amount = $posts_per_page;
   $preload_offset = ($query_args['paged'] > 1) ? $preloaded_amount * ($query_args['paged'] - 1) : $preload_offset;
}


// CTA Add-on
// Parse $cta_position
if($cta){
	$cta_pos_array = explode(":", $cta_position);
	$cta_pos = (string)$cta_pos_array[0];
	$cta_val = (string)$cta_pos_array[1];
	if($cta_pos != 'after'){
      $cta_pos = 'before';
   }
}	

			
// Modify $query_args with new offset and posts_per_page
$query_args['offset'] = $preload_offset;
$query_args['posts_per_page'] = $preloaded_amount;


// Get Repeater Template Type
$type = alm_get_repeater_type($repeater);


// Comments
if($comments){ 

	if(has_action('alm_comments_installed') && $comments){

		/*
   	 *	alm_comments_preloaded
   	 *
   	 * Preloaded Comments Filter
   	 *
   	 * @return $preloaded_comments;
   	 */
	   $preloaded_comments = apply_filters('alm_comments_preloaded', $query_args); // located in comments add-on
      
      $total_comments = wp_count_comments( $comments_post_id );
      
		// Add total_posts to localized ALM JS variables
		ALM_LOCALIZE::add_localized_var('total_posts', $total_comments->approved, $div_id);
         
      // Open .alm-reveal      
      $preloaded_output .= $alm_reveal;
      
	      // Append content
	      $preloaded_output .= $preloaded_comments;
      
      // Close .alm-reveal
      $preloaded_output .= '</div>';
   }

}

// Users
elseif($users){ 
   
   if(has_action('alm_users_preloaded') && $users){		         
		
		// Encrypt User Role
      if(!empty($users_role) && function_exists('alm_role_encrypt')){
         $query_args['users_role'] = alm_role_encrypt($users_role);
      }
      
      
   
   	/*
   	 *	alm_users_preloaded
   	 *
   	 * Preloaded Users Filter
   	 *
   	 * @return $preloaded_users;
   	 */
	   $preloaded_users = apply_filters('alm_users_preloaded', $query_args, $preloaded_amount, $repeater, $theme_repeater); // located in Users add-on
	   
	   $preloaded_users_data = $preloaded_users['data'];
	   $preloaded_users_total = $preloaded_users['total'];
	   
		
		// Add total_posts to localized ALM JS variables
		ALM_LOCALIZE::add_localized_var('total_posts', $preloaded_users_total, $div_id);
		
		
		// Open .alm-reveal
		
      if($seo === 'true'){
         $alm_reveal = '<div class="alm-reveal alm-seo alm-preloaded'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
      }
         
      // Open .alm-reveal      
      $preloaded_output .= $alm_reveal;
      	
	   	// Append content
	   	$preloaded_output .= $preloaded_users_data;
      
      // Close .alm-reveal
      $preloaded_output .= ($seo === "true" || $transition_container_classes !== 'false') ? '</div>' : '';
  
	}
}

// Advanced Custom Fields (Repeater, Gallery, Flex Content
elseif($acf && ($acf_field_type !== 'relationship')){ 

	if(has_action('alm_acf_installed') && $acf){

		/*	alm_acf_preloaded
   	 *
   	 * Preloaded ACF Filter
   	 *
   	 * @return $preloaded_acf;
   	 */
	   $preloaded_acf = apply_filters('alm_acf_preloaded', $query_args, $repeater, $theme_repeater); //located in ACF add-on
	  	
	  	
	  	// Add total_posts to localized ALM JS variables		
	  	ALM_LOCALIZE::add_localized_var('total_posts', apply_filters('alm_acf_total_rows', $query_args), $div_id);
		
		// Open .alm-reveal
      if($seo === 'true'){
         $alm_reveal = '<div class="alm-reveal alm-seo alm-preloaded'. $transition_container_classes .'" data-page="1" data-url="'.$canonicalURL.'">';
      }
         
      // Open .alm-reveal      
      $preloaded_output .= $alm_reveal;
      
	      // Append content
			$preloaded_output .= $preloaded_acf;
			
      // Close .alm-reveal
		$preloaded_output .=  ($seo === "true" || $transition_container_classes !== 'false') ? '</div>' : '';

   }

}

// Standard ALM
else {    			      


   /*
	 *	alm_preload_args
	 * ALM Preloaded add-on Hook
	 *
	 * @return $args;
	 * @deprecated in 3.7
	 */
   //$args = apply_filters('alm_preload_args', $query_args); // Create preloaded $args
   
   
   
   /*
	 *	alm_get_queryargs
	 * This function will return an $args array for the ALM WP_Query 
	 *
	 * @return $args;
	 * @since in 3.7
	 */
   if(class_exists('ALM_QUERY_ARGS')){
      $args = ALM_QUERY_ARGS::alm_build_queryargs($query_args, false);
   }



   /*
	 *	alm_filters_preloaded_args
	 *
	 * ALM Filters add-on Hook
	 *
	 * @return $args;
	 */
	
	if($filters && has_action('alm_filters_preloaded_args')){
   	// $args = apply_filters('alm_filters_preloaded_args', $args); // Create filters $args
   }



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

	if ($alm_preload_query->have_posts()) :
	
		$alm_item = $alm_page = $alm_current = 0;
		$alm_found_posts = $alm_total_posts;
		
		// Filters Wrap [Open] 
		if($filters && has_filter('alm_filters_reveal_open')){   				
         $output .= apply_filters('alm_filters_reveal_open', $transition_container_classes, $canonicalURL, true);
		}
		
	   while ($alm_preload_query->have_posts()) : $alm_preload_query->the_post();

	   	$alm_item++;
         $alm_current++;	 
         
         // Call to Action [Before]
			if($cta && has_action('alm_cta_inc') && $cta_pos === 'before'){
	          $output .= ($alm_current == $cta_val) ? apply_filters('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, true) : '';
		   }	   

			// Repeater Template
			$output .= alm_loop($repeater, $type, $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current);

	   	// Call to Action [After]
			if($cta && has_action('alm_cta_inc') && $cta_pos === 'after'){
	         $output .= ($alm_current == $cta_val) ? apply_filters('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, true) : '';
		   }

      endwhile; wp_reset_query();
      
      // Filters Wrap [close]
	   if($filters && has_filter('alm_filters_reveal_close')){
		   $output .= apply_filters('alm_filters_reveal_close', '</div>');
      }
		
		
		// If SEO, create noscript pagination
      if(has_action('alm_seo_installed') && $seo === 'true'){   	
      	$noscript_pagingnav = apply_filters('alm_noscript_pagination', $alm_preload_query); // Build pagination         
      }
      

	endif;


	// Add total_posts to localized ALM JS variables
	ALM_LOCALIZE::add_localized_var('viewing', $alm_preload_query->post_count, $div_id);
	ALM_LOCALIZE::add_localized_var('total_posts', $alm_total_posts, $div_id);
	
	
	if($seo === "true"){ // SEO, not Paging
		
		// Get querystring to append to URL		
		$querystring = $_SERVER['QUERY_STRING'];
		
		// If search, append slug (?s=term) to data-url
		$search_slug = (is_search()) ? $slug : '';
   				
		// Append querystring to data-url
      $querystring = ($querystring) ? '?'.$querystring : '';
            
      $alm_reveal = '<div class="alm-reveal alm-seo alm-preloaded'. $transition_container_classes .'" data-page="1" data-url="'. $canonicalURL .''. $querystring .'" data-total-posts="'. $alm_preload_query->found_posts .'">';
      
   } else {
	   
	   $alm_reveal= '<div class="alm-reveal alm-preloaded'. $transition_container_classes .'" data-total-posts="'. $alm_preload_query->found_posts .'">';
	   
   }
   
   // Open .alm-reveal
   $preloaded_output .= $alm_reveal;
   	
   // Append content	
   $preloaded_output .= $output;
	
	// Close .alm-reveal
	$preloaded_output .= '</div>';
	
}

$ajaxloadmore .= $preloaded_output; // Add $preloaded_output data to $ajaxloadmore
