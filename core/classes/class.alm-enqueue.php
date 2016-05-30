<?php
/**
 * Ajax Load More Enqueue
 *
 * Enqueue scripts.
 *
 * @author   Darren Cooney
 * @since    2.10.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( !class_exists('ALM_ENQUEUE') ):
   
   class ALM_ENQUEUE {      
      
      
      
      /**
   	 * alm_enqueue_css
   	 *
   	 * Load ALM CSS
   	 *
   	 * @since 2.10.1
   	 * @return wp_enqueue_style
   	 */
      public static function alm_enqueue_css($name, $file){
         $css        = '';
      	$css_path   = '';
      	$dir        = 'alm';	
      	$file_css   = $name.'.css';
      	
         // - Check theme for local ajax-load-more.css, if found, load that file         	
      	if(is_child_theme()){
      		$css = get_stylesheet_directory_uri().'/'. $dir .'/' .$file_css;
      		$css_path = get_stylesheet_directory().'/'. $dir .'/' .$file_css;
      		// if child theme does not have CSS, check the parent theme
      		if(!file_exists($css_path)){
      			$css = get_template_directory_uri().'/'. $dir .'/' .$file_css;
      			$css_path = get_template_directory().'/'. $dir .'/' .$file_css;
      		}
      	}
      	else{
      		$css = get_template_directory_uri().'/'. $dir .'/' .$file_css;
      		$css_path = get_template_directory().'/'. $dir .'/' .$file_css;
      	}
      	
      	if($css_path !== ''){ // If $css_path has been
         	if(file_exists($css_path)){                  	     	
         		$file = $css;       		
         	} 
      	}
      	   		
      	// Enqueue $file   		
      	wp_enqueue_style( $name, $file );
      }
      
   }
   
endif;