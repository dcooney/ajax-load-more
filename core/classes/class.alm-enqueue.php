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
      
      
      
      /**
   	 * alm_inline_css
   	 *
   	 * Load ALM CSS Inline
   	 *
   	 *
   	 * @param $name  Enqueue filename
   	 * @param $file Path to file
   	 * @param $url_path URL to plugin directory 
   	 * @since 2.3.1
   	 * @return $contents
   	 */
      public static function alm_inline_css($name, $file, $url_path){
	      
         $css        = '';
      	$css_path   = '';
      	$dir        = 'alm';
      	$file_css   = $name.'.css';
      	$contents = '';
      	$core_alm_css = true;

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
         		$file = $css_path;
         		$core_alm_css = false;
         	}
      	}  
      	    	
      	if(file_exists($file)){    	
				$css_file = file_get_contents( $file );
				
				// If using core CSS, replace the `../..` path in the CSS file.
				if($core_alm_css){
					
				   $new_img_path = $url_path .'/core';
				   
				   // Find and replace strings in CSS
               $css_file = str_replace('../..', $new_img_path, $css_file);
               
				}
				
				$contents = '<style type="text/css">' . $css_file . '</style>';
			}
			
			return $contents;
						
      }      

   }

endif;
