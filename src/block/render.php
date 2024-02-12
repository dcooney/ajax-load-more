<?php
/**
 * Ajax Load More Block Render
 *
 * @package AjaxLoadMore
 */

$shortcode = $attributes['shortcode'];
if ( $shortcode ) {
	echo do_shortcode( $shortcode );
} else {
	echo '<p>Enter a shortcode.</p>';
}
