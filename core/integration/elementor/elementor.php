<?php

/**
 * Add custom ALM widget category
 * https://developers.elementor.com/widget-categories/
 *
 */
function alm_add_elementor_widget_category( $elements_manager ) {

	$elements_manager->add_category(
		'ajax-load-more',
		[
			'title' => __( 'Ajax Load More', 'plugin-name' ),
			'icon' => 'fa fa-plug',
		]
	);

}
add_action( 'elementor/elements/categories_registered', 'alm_add_elementor_widget_category' );


add_action( 'plugins_loaded', function() {
	if ( in_array( 'elementor/elementor.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
		require_once( __DIR__ . '/module/plugin.php');
	}
});
