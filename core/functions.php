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
	if( $type == 'repeater' && has_action('alm_repeater_installed' ))
	{ 
		$include = ALM_REPEATER_PATH . 'repeaters/'. $template .'.php';      					
		
		if(!file_exists($include)) //confirm file exists        			
		   $include = ALM_PATH . 'core/repeater/default.php'; 
		
	}
   // If is Unlimited Repeaters (Custom Repeaters v2)
	elseif( $type == 'template_' && has_action('alm_unlimited_installed' ))
	{
		$include = ALM_UNLIMITED_REPEATER_PATH. ''.$template.'.php';      					
		
		if(!file_exists($include)) //confirm file exists        			
		   $include = ALM_PATH . 'core/repeater/default.php'; 			
	
	}
	// Default repeater
	else
	{				
		$include = ALM_PATH . 'core/repeater/default.php';
	}
	
	return $include;
}



/*
*  alm_get_post_format
*  Query by post format
*  
*  @return $args = array();
*  @since 2.5.0
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
}



/*
*  alm_get_taxonomy
*  Query by custom taxonomy values
*  
*  @return $args = array();
*  @since 2.5.0
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
*  alm_get_tax_query
*  Query by custom taxonomy values
*  
*  @return $args = array();
*  @since 2.5.0
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
function alm_get_meta_query($meta_key, $meta_value, $meta_compare){
   if(!empty($meta_key) && !empty($meta_value)){ 
      
         $meta_values = alm_parse_meta_value($meta_value, $meta_compare); 
         $return = array('key' => $meta_key,'value' => $meta_values,'compare' => $meta_compare); 
      
      return $return; 
         
   }
		
}



/*
*  alm_parse_meta_value
*  Parse the meta value for multiple vals
*  
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

