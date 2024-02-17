<?php
/**
 * Ajax Load More Enqueue scripts class.
 *
 * @package  AjaxLoadMore
 * @since    2.10.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'ALM_ENQUEUE' ) ) :

	/**
	 * Initiate the class.
	 */
	class ALM_ENQUEUE {

		/**
		 * Load ALM CSS.
		 *
		 * @param string  $name     The name of the CSS to enqueue.
		 * @param string  $file     The file path.
		 * @param boolean $enqueue Enqueue or Register the styles.
		 * @since 2.10.1
		 */
		public static function alm_enqueue_css( $name, $file, $enqueue = true ) {
			$css      = '';
			$css_path = '';
			$dir      = 'alm';
			$filename = $name . '.css';

			// - Check theme for local ajax-load-more.css, if found, load that file
			if ( is_child_theme() ) {
				$css      = get_stylesheet_directory_uri() . '/' . $dir . '/' . $filename;
				$css_path = get_stylesheet_directory() . '/' . $dir . '/' . $filename;

				// if child theme does not have CSS, check the parent theme.
				if ( ! file_exists( $css_path ) ) {
					$css      = get_template_directory_uri() . '/' . $dir . '/' . $filename;
					$css_path = get_template_directory() . '/' . $dir . '/' . $filename;
				}
			} else {
				$css      = get_template_directory_uri() . '/' . $dir . '/' . $filename;
				$css_path = get_template_directory() . '/' . $dir . '/' . $filename;
			}

			// If path has been set.
			if ( $css_path !== '' ) {
				if ( file_exists( $css_path ) ) {
					$file = $css;
				}
			}

			// Enqueue/Register the CSS stylesheets.
			if ( $enqueue ) {
				wp_enqueue_style( $name, $file, [], ALM_VERSION );
			} else {
				wp_register_style( $name, $file, [], ALM_VERSION );
			}
		}

		/**
		 * Load ALM CSS Inline.
		 *
		 * @param  string $name     The name of the CSS to enqueue.
		 * @param  string $file     The file path.
		 * @param  string $url_path The URL to plugin directory.
		 * @return string           Style tag as raw HTML.
		 * @since 2.3.1
		 */
		public static function alm_inline_css( $name, $file, $url_path ) {
			$css          = '';
			$css_path     = '';
			$dir          = 'alm';
			$filename     = $name . '.css';
			$contents     = '';
			$core_alm_css = true;

			// - Check theme for local ajax-load-more.css, if found, load that file
			if ( is_child_theme() ) {
				$css      = get_stylesheet_directory_uri() . '/' . $dir . '/' . $filename;
				$css_path = get_stylesheet_directory() . '/' . $dir . '/' . $filename;

				// if child theme does not have CSS, check the parent theme.
				if ( ! file_exists( $css_path ) ) {
					$css      = get_template_directory_uri() . '/' . $dir . '/' . $filename;
					$css_path = get_template_directory() . '/' . $dir . '/' . $filename;
				}
			} else {
				$css      = get_template_directory_uri() . '/' . $dir . '/' . $filename;
				$css_path = get_template_directory() . '/' . $dir . '/' . $filename;
			}

			// If path has been set.
			if ( $css_path !== '' ) {
				if ( file_exists( $css_path ) ) {
					$file         = $css_path;
					$core_alm_css = false;
				}
			}

			if ( file_exists( $file ) ) {
				// Get the contents of the CSS file.
				$css_file = file_get_contents( $file ); // phpcs:ignore

				// Using plugin CSS, replace the `../..` img paths in the CSS file.
				if ( $core_alm_css ) {
					if ( $filename === 'ajax-load-more.css' ) {
						// Ajax Load More Core.
						$new_path = $url_path . '/build/frontend/img'; // Relative URL to image directory.
						$css_file = str_replace( '../frontend/img', $new_path, $css_file ); // Find and replace strings in CSS.
					} else {
						// Other add-ons/extensions.
						$new_path = $url_path . '/core'; // Relative URL to image directory.
						$css_file = str_replace( '../..', $new_path, $css_file ); // Find and replace strings in CSS.
					}
				}
				$contents = '<style type="text/css">' . $css_file . '</style>';

			}
			return $contents;
		}
	}
endif;
