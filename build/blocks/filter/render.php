<?php
/**
 * Ajax Load More Block Render
 *
 * @package AjaxLoadMore
 */

$target    = $attributes['target'];
$filter_id = $attributes['id'];

if ( $target && $filter_id ) {
	echo do_shortcode( '[ajax_load_more_filters id="' . esc_attr( $filter_id ) . '" target="' . esc_attr( $target ) . '"]' );
}

// Block editor display messages.
if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
	if ( ! $target || ! $filter_id ) {
		if ( ! $filter_id ) {
			ALM_BLOCK::alm_block_message(
				__( 'Ajax Load More: Filters', 'ajax-load-more' ),
				__( 'Select an Ajax Load More Filter to display.', 'ajax-load-more' )
			);
		} else {
			ALM_BLOCK::alm_block_message(
				__( 'Ajax Load More: Filters', 'ajax-load-more' ),
				__( 'Enter a target for this Ajax Load More Filter instance.', 'ajax-load-more' )
			);
		}
	}
}
