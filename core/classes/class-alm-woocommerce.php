<?php
/**
 * ALM_WOOCOMMERCE
 * WooCommerce Helper
 *
 * @author   Darren Cooney
 * @since    5.1.8
 */

if (!defined( 'ABSPATH')){
	exit;
}

if(!class_exists('ALM_WOOCOMMERCE')):

   class ALM_WOOCOMMERCE {
	   
	   
	   /**
	    * hide_pagination
	    * Hide the woocommerce pagination on ALM pages
   	 *
   	 * @param $woocommerce boolean
   	 * @since 5.1.8
   	 */      
      public static function hide_pagination($woocommerce){
	   	if(!$woocommerce){
		   	return false;
	   	}  
	   	$hide_pagination = apply_filters('alm_woo_hide_pagination', true);
	   	$classname = apply_filters('alm_woo_pagination_class', 'woocommerce-pagination');		   	
	   	return ($classname && $hide_pagination) ? '<style>.'. $classname .'{display:none;}</style>' : '';     
	   }	
	   
	   
	   /**
	    * hide_orderby
	    * Hide the woocommerce orderby filter on ALM pages
   	 *
   	 * @param $woocommerce boolean
   	 * @since 5.1.8
   	 */      
      public static function hide_orderby($woocommerce){
	   	if(!$woocommerce){
		   	return false;
	   	}  
	   	
	   	$hide_ordering = apply_filters('alm_woo_hide_orderby', false);
	   	$classname = apply_filters('alm_woo_ordering_class', 'woocommerce-ordering');		   	
	   	return ($hide_ordering) ? '<style>.'. $classname .'{display:none;}</style>' : '';     
	   }  
	   
	   
	   
	   /**
	    * get_loop_prop
	    * Get default WooCommerce props
   	 *
   	 * @param $type string Prop name
   	 * @param $default string Default value
   	 * @since 5.1.8
   	 */  
	   public static function get_loop_prop($type = '', $default = ''){
		   if(function_exists('wc_get_loop_prop') && !empty($type)){
			   $prop = wc_get_loop_prop($type);
			   $value = ($prop) ? $prop : $default;
			   return $value;
		   }
	   }		 
	   
	   
	   
	   /**
	    * get_wrapper_class
	    * Get default wrapper class
   	 *
   	 * @since 5.1.8
   	 */
	   public static function get_wrapper_class(){
		   return 'alm-woocommerce woocommerce';
	   }   
	    
   }  
    
endif;