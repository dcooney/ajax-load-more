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

/**
 * Does user have an add-ons for shortcode builder installed and activated?
 *
 * @return boolean
 * @since 2.13.0.1
 */
function alm_has_addon_shortcodes() {
	$installed = false;
	$actions   = array(
		'alm_cache_installed',
		'alm_filters_installed',
		'alm_comments_installed',
		'alm_nextpage_installed',
		'alm_preload_installed',
		'alm_paging_installed',
		'alm_prev_post_installed',
		'alm_seo_installed',
		'alm_single_post_installed',
		'alm_users_installed'
	);

	// Loop actions to determine if add-on/extension is installed.
	foreach ( $actions as $action ) {
		if ( has_action( $action ) ) {
			$installed = true;
		}
	}

	if ( $installed ) {
		return true;
	} else {
		return false;
	}
}

/**
 * Does user have an extensions for shortcode builder installed and activated?
 *
 * @return boolean
 * @since 5.4
 */
function alm_has_extension_shortcodes() {
	$installed = false;
	$actions   = array(
		'alm_acf_installed',
		'alm_rest_api_installed',
		'alm_terms_installed'
	);

	// Loop actions to determine if add-on/extension is installed.
	foreach ( $actions as $action ) {
		if ( has_action( $action ) ) {
			$installed = true;
		}
	}

	if ( $installed ) {
		return true;
	} else {
		return false;
	}
}




/*
*  alm_has_addon
*  Does user have add-ons installed and activated
*  License Page
*
*  @return boolean
*  @since 2.13.0
*  @depreacted 3.3.0
*/

function alm_has_addon(){
	if(has_action('alm_cta_installed') || has_action('alm_comments_installed') || has_action('alm_unlimited_installed') || has_action('alm_layouts_installed') || has_action('alm_nextpage_installed') || has_action('alm_preload_installed') || has_action('alm_paging_installed') || has_action('alm_prev_post_installed') || has_action('alm_single_post_installed') || has_action('alm_rest_api_installed') || has_action('alm_seo_installed') || has_action('alm_tabs_installed') || has_action('alm_theme_repeaters_installed') || has_action('alm_users_installed')) {
   	return true;
	} else {
   	return false;
	}
}
