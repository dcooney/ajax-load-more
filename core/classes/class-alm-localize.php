<?php
/**
 * A class for adding localized ALM JS variables to the screen.
 * Note: Localized data is used by the ALM JS to access information about the query instance.
 *       Post count, total posts etc are all stored in localized variables.
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
		 * Return the localized data.
		 *
		 * @return array The localized data.
		 */
		public static function return_localized_data() {
			return self::$vars;
		}

	}
endif;
