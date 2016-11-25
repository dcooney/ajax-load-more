<?php
	
/*
*  alm_is_admin_screen
*  Determine whether user is on an ALM admin screen
*
*  @return boolean
*  @since 2.12.0
*/
	
function alm_is_admin_screen(){
	$return = false;
	$screen = get_current_screen();
	if($screen->parent_base === 'ajax-load-more'){
		$return = true;
	}
	return $return;
}



/*
*  alm_has_addon
*  Does user have add-ons installed and activated
*
*  @return boolean
*  @since 2.13.0
*/
	
function alm_has_addon(){
	if(has_action('alm_cache_installed') || has_action('alm_cta_installed') || has_action('alm_comments_installed') || has_action('alm_unlimited_installed') || has_action('alm_layouts_installed') || has_action('alm_preload_installed') || has_action('alm_paging_installed') || has_action('alm_prev_post_installed') || has_action('alm_rest_api_installed') || has_action('alm_seo_installed') || has_action('alm_theme_repeaters_installed')) {
   	return true;
	} else {
   	return false;
	}
}



/*
*  alm_has_addon_shortcodes
*  Does user have an add-ons for shortcode builder installed and activated
*
*  @return boolean
*  @since 2.13.0.1
*/
	
function alm_has_addon_shortcodes(){
	if(has_action('alm_cache_installed') || has_action('alm_cta_installed') || has_action('alm_comments_installed') || has_action('alm_unlimited_installed') || has_action('alm_preload_installed') || has_action('alm_paging_installed') || has_action('alm_prev_post_installed') || has_action('alm_rest_api_installed') || has_action('alm_seo_installed') || has_action('alm_theme_repeaters_installed')) {
   	return true;
	} else {
   	return false;
	}
}
	