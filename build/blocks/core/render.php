<?php
/**
 * Ajax Load More Block Render
 *
 * @package AjaxLoadMore
 */

$shortcode = $attributes['shortcode'];
if ( $shortcode ) {
	echo do_shortcode( $shortcode );
}

// Block editor display messages.
if ( ! $shortcode ) {
	ALM_BLOCK::alm_block_editor_message(
		__( 'Ajax Load More', 'ajax-load-more' ),
		__( 'You must enter an Ajax Load More shortcode.', 'ajax-load-more' )
	);
}
