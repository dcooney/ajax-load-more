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

} else {
	// Block editor display messages.
	if ( ! $filter_id ) {
		ALM_BLOCK::alm_block_editor_message(
			__( 'Ajax Load More: Filters', 'ajax-load-more' ),
			__( 'Select a filter to display from the block settings.', 'ajax-load-more' )
		);
	} else {
		ALM_BLOCK::alm_block_editor_message(
			__( 'Ajax Load More: Filters', 'ajax-load-more' ),
			__( 'You must enter an Ajax Load More target for this filter.', 'ajax-load-more' )
		);
	}
}
