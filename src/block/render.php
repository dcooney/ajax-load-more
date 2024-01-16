<?php
/**
 * Ajax Load More Block Render
 *
 * @package AjaxLoadMore
 */

$ids = 'farts1';
echo do_shortcode( '[ajax_load_more id="' . esc_attr( $ids ) . '"]' );
