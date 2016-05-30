<?php


/*
*  alm_get_current_repeater
*  Get the current repeater template file
*
*  @return $include (file path)
*  @since 2.5.0
*/

function alm_get_current_repeater($repeater, $type) {
   
	$template = $repeater;
	$include = '';
		
	// If is Custom Repeaters (Custom Repeaters v1)
	if( $type == 'repeater' && has_action('alm_repeater_installed' )){ 
		$include = ALM_REPEATER_PATH . 'repeaters/'. $template .'.php';      					
		
		if(!file_exists($include)) //confirm file exists        			
		   alm_get_default_repeater(); 
		
	}
   // If is Unlimited Repeaters (Custom Repeaters v2)
	elseif( $type == 'template_' && has_action('alm_unlimited_installed' )){
		global $wpdb;
		$blog_id = $wpdb->blogid;
		
		if($blog_id > 1){	
			$include = ALM_UNLIMITED_PATH. 'repeaters/'. $blog_id .'/'.$template .'.php';
		}else{
			$include = ALM_UNLIMITED_PATH. 'repeaters/'.$template .'.php';		
		}   		
				
		if(!file_exists($include)) //confirm file exists        			
		   $include = alm_get_default_repeater(); 			
	
	}
	// Default repeater
	else{				
		$include = alm_get_default_repeater();
	}
	
	return $include;
	
}



/*
*  alm_get_default_repeater
*  Get the default repeater template for current blog
*
*  @return $include (file path)
*  @since 2.5.0
*/

function alm_get_default_repeater() {
	global $wpdb;
	$file = null;
	$template_dir = 'alm_templates';	
	
	// Allow user to load template from theme directory
	// Since 2.8.5
	 
    // load repeater template from current theme folder
	if(is_child_theme()){
		$template_theme_file = get_stylesheet_directory().'/'. $template_dir .'/default.php';
		// if child theme does not have repeater template, then use the parent theme dir
		if(!file_exists($template_theme_file)){
			$template_theme_file = get_template_directory().'/'. $template_dir .'/default.php';
		}
	}
	else{
		$template_theme_file = get_template_directory().'/'. $template_dir .'/default.php';
	}
	// if theme or child theme contains the template, use that file
	if(file_exists($template_theme_file)){
		$file = $template_theme_file;
	}
	
	// Since 2.0
	// otherwise use pre-defined plug-in templates
	if($file == null){		
		$blog_id = $wpdb->blogid;
		if($blog_id > 1){	
			$file = ALM_PATH. 'core/repeater/'. $blog_id .'/default.php'; // File
		}else{
			$file = ALM_PATH. 'core/repeater/default.php';			
		}
	}
	
	return $file;
}



/*
*  alm_get_taxonomy
*  Query by custom taxonomy values
*  
*  @return $args = array();
*  @since 2.5.0
*
*  @deprecated in 2.5.0
*/
function alm_get_taxonomy($taxonomy, $taxonomy_terms, $taxonomy_operator){
   if(!empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator)){
      $the_terms = explode(",", $taxonomy_terms);
      $args = array(
		   'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,				
		);
		return $args;
	}
}



/*
*  alm_get_post_format
*  Query by post format
*  
*  @return $args = array();
*  @since 2.5.0
*  @updated 2.8.5
*/
function alm_get_post_format($post_format){
   if(!empty($post_format)){
	   $format = "post-format-$post_format";
	   //If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){		   
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }		      
	      $return = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$return = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);			
		}
		return $return; 
	}
}



/*
*  alm_get_taxonomy_query
*  Query for custom taxonomy
*  
*  @return $args = array();
*  @since 2.8.5
*/
function alm_get_taxonomy_query($taxonomy, $taxonomy_terms, $taxonomy_operator){
   if(!empty($taxonomy) && !empty($taxonomy_terms)){       
      $taxonomy_term_values = alm_parse_tax_terms($taxonomy_terms); 
      $return = array(
         'taxonomy' => $taxonomy, 
         'field' => 'slug', 
         'terms' => $taxonomy_term_values, 
         'operator' => $taxonomy_operator
      );       
      return $return;          
   }
}



/*
*  alm_parse_tax_terms
*  Parse the taxonomy terms for multiple vals
*  
*  @helper function @alm_get_taxonomy_query()
*  @return array;
*  @since 2.8.5
*/
function alm_parse_tax_terms($taxonomy_terms){
	// Remove all whitespace for $taxonomy_terms because it needs to be an exact match
	$taxonomy_terms = preg_replace('/\s+/', ' ', $taxonomy_terms); // Trim whitespace 
	$taxonomy_terms = str_replace(', ', ',', $taxonomy_terms); // Replace [term, term] with [term,term]
	$taxonomy_terms = explode(",", $taxonomy_terms);	            
   return $taxonomy_terms;
}



/*
*  alm_get_tax_query
*  Query by custom taxonomy values
*  
*  @return $args = array();
*  @since 2.5.0

*  @deprecated in 2.8.5
*/
function alm_get_tax_query($post_format, $taxonomy, $taxonomy_terms, $taxonomy_operator){
   
   // Taxonomy [ONLY]
   if(!empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator) && empty($post_format)){
      $the_terms = explode(",", $taxonomy_terms);
      $args = array(
		   'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,				
		);
		return $args;
	}
	
	// Post Format [ONLY]
   if(!empty($post_format) && empty($taxonomy)){
	   $format = "post-format-$post_format";
	   
	   //If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){		   
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }		      
	      $args = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$args = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);			
		}
		return $args;
	}
	
	// Taxonomy && Post Format [COMBINED]
	if(!empty($post_format) && !empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator)){
   	$the_terms = explode(",", $taxonomy_terms);
	   $args = array(
			'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,
		);		
	   $format = "post-format-$post_format";
		//If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){		   
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }		      
	      $format_args = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$format_args = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);			
		}
		$args[] = $format_args; // Combined format and tax $args
		return $args;	
	}
}



/*
*  alm_get_meta_query
*  Query by custom field values
*  
*  @return $args = array();
*  @since 2.5.0
*/
function alm_get_meta_query($meta_key, $meta_value, $meta_compare, $meta_type){
   if(!empty($meta_key)){ 
      
      $meta_values = alm_parse_meta_value($meta_value, $meta_compare); 
      if(!empty($meta_values)){
         
         $return = array(
            'key' => $meta_key,
            'value' => $meta_values,
            'compare' => $meta_compare,
            'type' => $meta_type
         );          
      }else{
         // If $meta_values is empty, don't query for 'value'
         $return = array(
            'key' => $meta_key,
            'compare' => $meta_compare,
            'type' => $meta_type
         ); 
         
      }
      
      return $return; 
         
   }
		
}



/*
*  alm_parse_meta_value
*  Parse the meta value for multiple vals
*  
*  @helper function @alm_get_meta_query()
*  @return array;
*  @since 2.6.4
*/
function alm_parse_meta_value($meta_value, $meta_compare){
   // See the docs (http://codex.wordpress.org/Class_Reference/WP_Meta_Query)
   if($meta_compare === 'IN' || $meta_compare === 'NOT IN' || $meta_compare === 'BETWEEN' || $meta_compare === 'NOT BETWEEN'){
   	// Remove all whitespace for meta_value because it needs to be an exact match
   	$mv_trimmed = preg_replace('/\s+/', ' ', $meta_value); // Trim whitespace 
   	$meta_values = str_replace(', ', ',', $mv_trimmed); // Replace [term, term] with [term,term]
   	$meta_values = explode(",", $meta_values);	   
   }else{	
   	$meta_values = $meta_value;
   }         
   return $meta_values;
}



/*
*  alm_get_repeater_type
*  Get type of repeater
*  
*  @return $type;
*  @since 2.9
*/
function alm_get_repeater_type($repeater){
	$type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater value at number to determine type
   $type = $type[0]; // default | repeater | template_	
	return $type;
}



/*
*  alm_paging_no_script
*  Create paging navigation
*  
*  @return html;
*  @since 2.8.3
*/
function alm_paging_no_script($alm_preload_query){
   $numposts = $alm_preload_query->found_posts;
   $max_page = $alm_preload_query->max_num_pages;   
   if(empty($paged) || $paged == 0) {
      $paged = 1;
   }
   $pages_to_show = 8;
   $pages_to_show_minus_1 = $pages_to_show-1;
   $half_page_start = floor($pages_to_show_minus_1/2);
   $half_page_end = ceil($pages_to_show_minus_1/2);
   $start_page = $paged - $half_page_start;
   if($start_page <= 0) {
      $start_page = 1;
   }
   $end_page = $paged + $half_page_end;
   if(($end_page - $start_page) != $pages_to_show_minus_1) {
      $end_page = $start_page + $pages_to_show_minus_1;
   }
   if($end_page > $max_page) {
      $start_page = $max_page - $pages_to_show_minus_1;
      $end_page = $max_page;
   }
   if($start_page <= 0) {
      $start_page = 1;
   }
   $content = '';
   if ($max_page > 1) {
      $content .= '<noscript>';
      $content .= '<div>';
      $content .= '<span>'.__('Pages:', 'ajax-load-more').'  </span>';
      if ($start_page >= 2 && $pages_to_show < $max_page) {
         $first_page_text = "&laquo;";
         $content .= '<span class="page"><a href="'.get_pagenum_link().'">'.$first_page_text.'</a></span>';
      }
      for($i = $start_page; $i  <= $end_page; $i++) {
      if($i == $paged) {
         $content .= ' <span class="page current">'.$i.'</span> ';
      } else {
         $content .= ' <span class="page"><a href="'.get_pagenum_link($i).'">'.$i.'</a></span>';
      }
   }
   if ($end_page < $max_page) {
      $last_page_text = "&raquo;";
      $content .= '<span><a href="'.get_pagenum_link($max_page).'" title="'.$last_page_text.'">'.$last_page_text.'</a></span>';
   }
      $content .= '</div>';
      $content .= '</noscript>';
   }
   
   return $content;
}


