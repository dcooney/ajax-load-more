<?php
/**
 * A class for adding localize ALM JS variables to the screen.
 *
 * @package  ajaxloadmore
 * @since    3.7
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'ALM_LOCALIZE' ) ) :

	/**
	 * Initiate the class.
	 */
	class ALM_LOCALIZE {

		/**
		 * Variable array.
		 *
		 * @var $vars
		 */
		public static $vars = [];

		/**
		 * Create <script> variables for use with Preloaded addon.
		 *
		 * @param string $key   The array key.
		 * @param string $value The value.
		 * @param string $id The ALM id.
		 * @param string $position Array key for nesting of params.
		 * @since 3.7
		 */
		public static function add_localized_var( $key = '', $value = '', $id = 'ajax-load-more', $position = '' ) {
			if ( $position ) {
				// Add key & value.
				self::$vars[ $id ][ $position ][ $key ] = $value;
			} else {
				// Add key & value.
				self::$vars[ $id ][ $key ] = $value;
			}
		}

		/**
		 *  Create <script> variables for use with Preloaded addon.
		 *
		 *  @param string $id The ALM ID.
		 *  @since 3.7
		 */
		public static function create_script_vars( $id ) {
			if ( ! empty( self::$vars ) && isset( self::$vars[ $id ] ) && is_array( self::$vars[ $id ] ) ) {
				// Render wp_localize_script vars with 'ajax-load-more' script handle.
				wp_localize_script( 'ajax-load-more', alm_convert_dashes_to_underscore( $id ) . '_vars', self::$vars[ $id ] );
			}
		}

	}
endif;
