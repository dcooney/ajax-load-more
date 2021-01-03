<?php
/**
 * Functions related to Masonry integration.
 *
 * @package ajaxloadmore
 * @version 5.4.2
 */

/**
 * Masonry HTML wrapper open.
 *
 * @param string $transition
 * @since 3.1.0
 */
function alm_masonry_before( $transition ) {
	return ( $transition === 'masonry' ) ? '<div class="alm-masonry" style="opacity: 0;">' : '';
}
add_filter( 'alm_masonry_before', 'alm_masonry_before' );

/**
 * Masonry HTML wrapper close.
 *
 * @param $transition string
 * @since 3.1.0
 */
function alm_masonry_after( $transition ){
	return ( $transition === 'masonry' ) ? '</div>' : '';
}
add_filter( 'alm_masonry_after', 'alm_masonry_after' );
