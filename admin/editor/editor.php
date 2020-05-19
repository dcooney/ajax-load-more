<?php

/* Create shortcode builder button in WYSIWYG editor */

add_action('init','alm_editor_init');


// Enqueue jQuery in editor
function alm_editor_init() {
	wp_enqueue_script( 'jquery' );
}


//Check for permissions
add_action('wp_ajax_alm_lightbox', 'alm_ajax_tinymce' );
function alm_ajax_tinymce(){
	// check for rights
	if ( ! current_user_can('edit_pages') && ! current_user_can('edit_posts') )
		die( __("You are not allowed to be here", 'ajax-load-more') );

	$window = dirname(__FILE__) . '/editor-build.php';
	include_once( $window );

	die();
}


// filters the tinyMCE buttons and adds our custom buttons
add_action('admin_head', 'alm_shortcode_buttons');
function alm_shortcode_buttons() {
	// Don't bother doing this stuff if the current user lacks permissions
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
		return;

	// Check options for hiding shortcode builder
   $options = get_option( 'alm_settings' );

   if(!isset($options['_alm_hide_btn'])) // Check if '_alm_hide_btn isset
	   $options['_alm_hide_btn'] = '0';

	if($options['_alm_hide_btn'] != '1'){
   	// Add only in Rich Editor mode
   	if ( get_user_option('rich_editing') == 'true') {
   		// filter the tinyMCE buttons and add our own
   		add_filter("mce_external_plugins", "alm_tinymce_plugin");
   		add_filter('mce_buttons', 'alm_friendly_buttons');
   	}
	}
}



// registers the buttons for use
function alm_friendly_buttons($buttons) {
	array_push($buttons, 'alm_shortcode_button');
	return $buttons;
}



// add the button to the tinyMCE bar
function alm_tinymce_plugin($plugin_array) {
	$plugin_array['alm_shortcode_button'] = plugins_url( '/js/editor-btn.js' , __FILE__ );
	return $plugin_array;
}
