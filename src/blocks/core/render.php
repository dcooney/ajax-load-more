<?php
/**
 * Ajax Load More Block Render
 *
 * @package AjaxLoadMore
 */

$shortcode = $attributes['shortcode'];
$params    = $attributes['params'];
if ( $shortcode ) {
	echo do_shortcode( $shortcode );
}

// Block editor display messages.
if ( ! $shortcode ) {
	ALM_BLOCK::alm_block_editor_message(
		__( 'Ajax Load More', 'ajax-load-more' ),
		__( 'Enter an Ajax Load More shortcode.', 'ajax-load-more' )
	);
}
