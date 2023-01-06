<?php
/**
 * ALM plugin admin update routines.
 *
 * @package AjaxLoadMore
 * @since   5.6
 */

/**
 * Update default repeater on plugin update.
 * If plugin versions do not match or the plugin has been updated and we need to update our repeaters.
 *
 * @since 2.0.5
 */
function alm_core_update() {
	// Exit if Repeater Templates are disbaled.
	if ( defined( 'ALM_DISABLE_REPEATER_TEMPLATES' ) && ALM_DISABLE_REPEATER_TEMPLATES ) {
		return false;
	}

	// Add 'alm_version' to WP options table if it does not exist.
	if ( ! get_option( 'alm_version' ) ) {
		add_option( 'alm_version', ALM_VERSION );
	}

	$alm_installed_ver = get_option( 'alm_version' );
	if ( $alm_installed_ver !== ALM_VERSION ) {
		alm_run_update(); // Update repeaters.
	}
}
add_action( 'init', 'alm_core_update' );

/**
 * Run the plugin update on all blogs.
 *
 * @since 2.7.2
 */
function alm_run_update() {
	global $wpdb;

	if ( is_multisite() ) {
		$blog_ids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs" );

		// Loop all blogs and run update routine.
		foreach ( $blog_ids as $blog_id ) {
			switch_to_blog( $blog_id );
			alm_update_template_files();
			update_option( 'alm_version', ALM_VERSION );
			restore_current_blog();
		}
	} else {
		alm_update_template_files();
		update_option( 'alm_version', ALM_VERSION );
	}
}

/**
 * Update routine for template files.
 *
 * @throws Exception Unable to write to template file.
 * @since 2.7.2
 */
function alm_update_template_files() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'alm';

	// Get all rows where name is 'default'.
	$rows = $wpdb->get_results( "SELECT * FROM $table_name WHERE name = 'default'" ); // phpcs:ignore

	if ( $rows ) {

		foreach ( $rows as $row ) {
			$data = $wpdb->get_var( "SELECT repeaterDefault FROM $table_name WHERE name = 'default'" ); // phpcs:ignore

			// If required: Create base directory (alm_templates).
			$base_dir = AjaxLoadMore::alm_get_repeater_path();
			AjaxLoadMore::alm_mkdir( $base_dir );

			$file = $base_dir . '/default.php';

			/**
			 * Create template only if the template does not exist.
			 *
			 * Note: This should never ever run, but this is used as a fallback incase for some reason Repeater
			 *       have been deleted or cleaned by another plugin.
			 */
			if ( ! file_exists( $file ) ) {
				try {
					// phpcs:ignore
					$o = fopen( $file, 'w+' ); // Open file.
					if ( ! $o ) {
						throw new Exception( '[Ajax Load More] Error opening default repeater template - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files within the `' . $base_dir . '` directory.' );
					}
					// phpcs:ignore
					$w = fwrite( $o, $data ); // Save the file.
					if ( ! $w ) {
						throw new Exception( '[Ajax Load More] Error updating default repeater template - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files within the `' . $base_dir . '` directory.' );
					}
					// phpcs:ignore
					fclose( $o ); // Close file.

				} catch ( Exception $e ) { // Display error message in console.
					if ( ! isset( $options['_alm_error_notices'] ) || $options['_alm_error_notices'] === '1' ) {
						echo '<script>console.log("' . wp_kses_post( $e->getMessage() ) . '");</script>';
					}
				}
			}
		}
	}
}
