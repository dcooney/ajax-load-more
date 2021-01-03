<?php
/**
 * A class for adding localize ALM JS variables to the screen.
 *
 * @package  ajaxloadmore
 * @since    3.7
 */

// @codingStandardsIgnoreStart

if (!defined( 'ABSPATH')){
	exit;
}

if(!class_exists('ALM_LOCALIZE')):

   class ALM_LOCALIZE {

	   static $vars = array();

		/**
		 *  add_localized_var
		 *  Create <script> variables for use with Preloaded addon
		 *
		 *  @param $key   string
		 *  @param $value string
		 *  @return $array
		 *  @return $position string (meta, param) This allows for nesting of params.
		 *  @since 3.7
		 */
		public static function add_localized_var($key = '', $value = '', $id = 'ajax-load-more', $position = ''){

			if($position){
				self::$vars[$id][$position][$key] = $value; // Add key & val
			} else {
				self::$vars[$id][$key] = $value; // Add key & val
			}
		}

		/**
		 *  create_script_vars
		 *  Create <script> variables for use with Preloaded addon
		 *
		 *  @param $id   string
		 *  @param $vars array
		 *  @since 3.7
		 */
		public static function create_script_vars($id){
			if(!empty(self::$vars) && isset(self::$vars[$id]) && is_array(self::$vars[$id])){

				// Render wp_localize_script vars with 'ajax-load-more' script handle.
				wp_localize_script( 'ajax-load-more', alm_convert_dashes_to_underscore($id) .'_vars', self::$vars[$id] );

			}
		}

   }

endif;
