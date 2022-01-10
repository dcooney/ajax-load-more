<?php
// @codingStandardsIgnoreStart

add_action( 'init', 'alm_core_update' ); // Core Update.
add_action( 'admin_init', 'alm_admin_hooks' );
add_action( 'wp_ajax_alm_save_repeater', 'alm_save_repeater' ); // Ajax Save Repeater.
add_action( 'wp_ajax_alm_update_repeater', 'alm_update_repeater' ); // Ajax Update Repeater.
add_action( 'wp_ajax_alm_get_tax_terms', 'alm_get_tax_terms' ); // Ajax Get Taxonomy Terms.
add_action( 'wp_ajax_alm_delete_cache', 'alm_delete_cache' ); // Delete Cache.
add_action( 'wp_ajax_alm_layouts_dismiss', 'alm_layouts_dismiss' ); // Dismiss Layouts CTA.
add_action( 'wp_ajax_alm_license_activation', 'alm_license_activation' ); // Activate Add-on.
add_action( 'alm_get_layouts', 'alm_get_layouts' ); // Add layout selection.
add_action( 'wp_ajax_alm_get_layout', 'alm_get_layout' ); // Get layout.
add_action( 'wp_ajax_alm_dismiss_sharing', 'alm_dismiss_sharing' ); // Dismiss sharing.
add_action( 'wp_ajax_alm_set_transient', 'alm_set_transient' ); // Set transient.
add_filter( 'admin_footer_text', 'alm_filter_admin_footer_text' ); // Admin menu text.
add_action( 'after_plugin_row', 'alm_plugin_row' );

/**
 * Setup the admin hooks
 *
 * @return void
 */
function alm_admin_hooks() {
	require_once( plugin_dir_path( __FILE__ ) . '/classes/class-nag.php' );
}

/**
 *  Create custom update notifications.
 *
 *  @since 5.2
 */
function alm_plugin_update_messages(){
	$addons = alm_get_addons();
	foreach($addons as $addon){
		$path = $addon['path'];
		$hook = "in_plugin_update_message-{$path}/{$path}.php";
		add_action( $hook, 'alm_prefix_plugin_update_message', 10, 2);
	}
}
alm_plugin_update_messages();

/**
 * Add extra message to plugin updater about expired/inactive licenses
 *
 * @since 5.2
 */
function alm_prefix_plugin_update_message( $data, $response ) {
	$addons = alm_get_addons();
	$slug = $response->slug;
	$version = $response->new_version;

	foreach($addons as $key=>$addon){
		if($addon['path'] === $slug){
			$index = $key;
		}
	}

	if(isset($index)){
		$style = 'display: block; padding: 10px 5px 2px;';
		$addon = $addons[$index];

		if(isset($addon)){
			$name = '<strong>'. $addon['name'] .'</strong>';
			$status = get_option($addon['status']);

			// Expired
			if($status === 'expired' ){
				printf( '<span style="'. $style .'">%s %s</span>',
					__( 'Looks like your subscription has expired.', 'ajax-load-more' ),
					__( 'Please login to your <a href="https://connekthq.com/account/" target="_blank">Account</a> to renew the license.', 'ajax-load-more' )
				);
			}

			// Invalid/Inactive
			if($status === 'invalid' || $status === 'disabled' ){
				printf( '<span style="'. $style .'">%s %s</span>',
					__( 'Looks like your license is inactive and/or invalid.', 'ajax-load-more' ),
					__( 'Please activate the <a href="admin.php?page=ajax-load-more-licenses" target="_blank">license</a> or login to your <a href="https://connekthq.com/account/" target="_blank">Account</a> to renew the license.', 'ajax-load-more' )
				);
			}

			// Deactivated
			if($status === 'deactivated' ){
				printf( '<span style="'. $style .'">%s %s</span>',
					__( 'Looks like your license has been deactivated.', 'ajax-load-more' ),
					__( 'Please activate the <a href="admin.php?page=ajax-load-more-licenses" target="_blank">license</a> to update.', 'ajax-load-more' )
				);
			}

		}
	}
}

/**
 * Create a notification in the plugin row
 *
 * @since 5.2
 */
function alm_plugin_row( $plugin_name ) {

	$addons = alm_get_addons();
	$pro_addons = alm_get_pro_addon();

	$addons = array_merge(alm_get_addons(), alm_get_pro_addon());
	foreach($addons as $addon){
		if ( $plugin_name == $addon['path'].'/'.$addon['path'].'.php' ) {

			$status = get_option($addon['status']);
			$style = 'margin: 5px 20px 6px 40px;';

			// !valid
			if($status !== 'valid' ){
				$name = ($addon['name'] === 'Ajax Load More Pro' ) ? '<strong>'. $addon['name'] .'</strong>' : '<strong>'. 'Ajax Load More: '. $addon['name'] .'</strong>';

				$row = '</tr><tr class="plugin-update-tr"><td colspan="3" class="plugin-update"><div class="update-message" style="'. $style .'">';
				$row .= sprintf(__( '%sRegister%s your copy of %s to receive access to automatic upgrades and support. Need a license key? %sPurchase one now%s.' ), '<a href="admin.php?page=ajax-load-more-licenses">', '</a>', $name, '<a href="'. $addon['url'] .'" target="blank">', '</a>' );
				$row .= '</div></td>';
				echo $row;
			}

		}
	}
}

/**
 * Render a notification in the dashboard.
 *
 * @since 4.0
 */
function alm_render_transient_notification() {
	if ( ! has_action( 'alm_pro_installed' ) ) {
		$msg = '🔥&nbsp; <strong><a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank">Ajax Load More Pro</a></strong>: Get instant access to all 15 add-ons in a single installation! &nbsp; <strong><a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank" class="button button-primary">Upgrade Now</a></strong>';
		alm_transient_notification( $msg, 'alm_pro_upgrade', 'YEAR_IN_SECONDS', true );
	}
}

/**
 * Display a notification on pages with transient
 *
 * @since 4.0
*/
function alm_transient_notification($message = '', $transient = '', $duration = 'YEAR_IN_SECONDS', $dismissible = true, $type = 'info' ){
   if(!empty($transient)){
      $transient_value = get_transient( $transient );
      $dismissible = ($dismissible) ? ' is-dismissible' : '';
      if(!isset($transient_value) || empty($transient_value) && !empty($message)){
      ?>
         <div class="alm-admin-notice notice-<?php echo $type; ?> notice<?php echo $dismissible; ?> alm-transient" data-transient="<?php echo $transient; ?>" data-duration="<?php echo $duration; ?>"><p><?php echo $message; ?></p></div>
      <?php
      }
   }
}

/**
 * Set transient via Ajax.
 *
 * @since 4.0
 */
function alm_set_transient(){

   if ( current_user_can( 'edit_theme_options' ) ) {

		$nonce = $_POST["nonce"];
		$transient = $_POST["transient_name"];
		$duration = $_POST["duration"];

		$duration = (!isset($duration)) ? 'YEAR_IN_SECONDS' : $duration;

		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
			die(__( 'Error - unable to verify nonce, please try again.', 'ajax-load-more' ));

      if($transient){
         set_transient( $transient, 'true', constant($duration) );
         echo __( 'Transient set successfully', 'ajax-load-more' );
      }

      wp_die();
   }
}

/**
 * This function will export a repeater template and force download.
 *
 * @since 3.6
 */
function alm_repeaters_export() {
	if ( isset( $_POST['alm_repeaters_export'] ) && ( ! wp_doing_ajax() ) ) {
		if ( current_user_can( 'edit_theme_options' ) ) {
			$file = $_POST['alm_repeaters_export'];
			if ( file_exists( $file ) ) {
				header( 'Content-Description: File Transfer' );
				header( 'Content-Type: application/octet-stream' );
				header( 'Content-Disposition: attachment; filename="' . basename( $file ) . '"' );
				readfile( $file );
				exit();
			}
		}
	}
}
add_action( 'admin_init', 'alm_repeaters_export' );

/**
 * Activate Add-on licenses.
 *
 * @since 2.8.3
 */
function alm_license_activation(){

	if (! current_user_can( 'edit_theme_options' )){
		return;
	}

	$nonce   = $_GET['nonce'];
	$type    = $_GET['type']; // activate / deactivate.
	$item_id = $_GET['item'];
	$license = $_GET['license'];
	$url     = $_GET['url'];
	$upgrade = $_GET['upgrade'];
	$status  = $_GET['status'];
	$key     = $_GET['key'];

	// Check our nonce, if they don't match then bounce!
	if ( ! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ) ) {
		die( 'Error - unable to verify nonce, please try again.' );
	}

	// API Action.
	if ( 'activate' === $type || 'check' === $type ) {
		$action = 'activate_license';
	} else {
		$action = 'deactivate_license';
	}

	// Create the params for the request.
	$api_params = array(
		'edd_action'  => $action,
		'license'     => $license,
		'item_id'     => $item_id, // the ID of our product in EDD.
		'url'         => home_url(),
		'environment' => function_exists( 'wp_get_environment_type' ) ? wp_get_environment_type() : 'production',
	);

	// Call API.
	$response = wp_remote_post( ALM_STORE_URL,
		array(
			'method'    => 'POST',
			'body'      => $api_params,
			'timeout'   => 30,
			'sslverify' => false,
			//'blocking'  => true
		)
	);

	// Make sure the response came back okay.
	if ( is_wp_error( $response ) ) {
		wp_send_json( $response );
		//return false;
	}

	$license_data = $response['body'];
	$license_data = json_decode( $license_data ); // decode the license data.

	$return['success'] = $license_data->success;

	$msg = '';
	if ( 'activate' === $type ) {
		$return['license_limit'] = $license_data->license_limit;
		$return['expires'] = $license_data->expires;
		$return['site_count'] = $license_data->site_count;
		$return['activations_left'] = $license_data->activations_left;
		$return['item_name'] = $license_data->item_name;

		if ( $license_data->activations_left === 0 && $license_data->success === false ) {
			$msg = '<strong>You\'re out of available licenses <em>( '. $license_data->license_limit . ' / ' . $license_data->site_count . ' )</em>.</strong>Please visit the <a href="' . $upgrade . '" target="_blank">' . $license_data->item_name . '</a> website to add additional licenses.';
		}
	}
	$return['msg'] = $msg;

	// If error, make error the status of the license.
	$license_status = ( isset( $license_data->error )) ? $license_data->error : $license_data->license;

	$return['license'] = $license_status;

	// Update the options table.
	update_option( $status, $license_status );
	update_option( $key, $license );

	// Set transient value to store license status.
	set_transient( "alm_{$item_id}_{$license}", $license_status, 96 * HOUR_IN_SECONDS ); // 4 days

	// Send the response.
	wp_send_json( $return );

}

/**
 * Invalid license notifications.
 *
 * @since 3.3.0
 */
function alm_admin_notice_errors() {

   $screen = get_current_screen();
   $alm_is_admin_screen = alm_is_admin_screen();

   // Exit if screen is not dashboard, plugins, settings or ALM admin.
	if(!$alm_is_admin_screen && $screen->id !== 'dashboard' && $screen->id !== 'plugins' && $screen->id !== 'options-general' && $screen->id !== 'options' ){
		return;
	}

   $class = 'notice error alm-err-notice';
   $message = '';
   $count = 0;

   if(has_action( 'alm_pro_installed' )){ // Pro
	   $addons = alm_get_pro_addon();
	   $message = __( 'You have an invalid or expired <a href="admin.php?page=ajax-load-more"><b>Ajax Load More Pro</b></a> license key - please visit the <a href="admin.php?page=ajax-load-more-licenses">License</a> section to input your key or <a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank">purchase</a> one now.', 'ajax-load-more' );

   } else { // Other Addons
	   $addons = alm_get_addons();
	   $message = __( 'You have invalid or expired <a href="admin.php?page=ajax-load-more"><b>Ajax Load More</b></a> license keys - please visit the <a href="admin.php?page=ajax-load-more-licenses">Licenses</a> section and input your keys.', 'ajax-load-more' );
	}

	 // Loop each addon
   foreach($addons as $addon){

      if (has_action($addon['action'])){
         $key = $addon['key']; // Option key
         $status = get_option($addon['status']); // license status

         // Check license
         $license_status = alm_license_check($addon['item_id'], get_option($key), $status);

         if( !isset($status) || empty($status) || $license_status !== 'valid' ) {
            $count++;
         }
      }
   }

	// Print result
	if( $count > 0 ) {
		printf( '<div class="%1$s"><p>%2$s</p></div>', $class, $message );
	}
}
add_action( 'admin_notices', 'alm_admin_notice_errors' );



/**
 * Check the status of a license.
 *
 * @param {String} $item_id The ID of the product
 * @param {String} $license The actual license key
 * @param {String} $status The status of the license
 * @updated 5.1.7
 * @since 2.8.3
 */
function alm_license_check( $item_id = null, $license = null, $status = null ) {

	if ( ! $item_id || ! $license || ! $status ) {
		return false;
	}

	// Get plugin transient for license status.
	if ( get_transient( "alm_{$item_id}_{$license}" ) ) {

		// Transient exists.
		return get_transient( "alm_{$item_id}_{$license}" );

	} else {
		$api_params = array(
			'edd_action' => 'check_license',
			'license'    => $license,
			'item_id'    => $item_id,
			'url'        => home_url()
		);
		$response = wp_remote_post( ALM_STORE_URL,
			array(
				'body'      => $api_params,
				'timeout'   => 15,
				'sslverify' => false
			)
		);
		if ( is_wp_error( $response ) ) {
			return false;
		}

		// Get Data.
		$license_data = json_decode( wp_remote_retrieve_body( $response ) );

		// Update the options table.
		update_option( $status, $license_data->license );

		// Set transient value to store license status.
		set_transient( "alm_{$item_id}_{$license}", $license_data->license, 168 * HOUR_IN_SECONDS ); // 7 days

		// Return the status.
		return $license_data->license;
	}
}

/**
 * Get layout and return value to repeater template.
 *
 * @since 2.8.3
 * @updated 2.14.0
 */
function alm_get_layout() {
	if ( current_user_can( 'edit_theme_options' ) ) {

		$nonce = sanitize_text_field( $_GET["nonce"] );
		$type = sanitize_text_field( $_GET["type"] );
		$custom = sanitize_text_field( $_GET["custom"] ) ;

		// Check our nonce, if they don't match then bounce!
		if ( ! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ) ) {
			wp_die( 'Error - unable to verify nonce, please try again.' );
		}

		if ( $type === 'default' ) {
			// Default Layout.
			$content =  file_get_contents( ALM_PATH . 'admin/includes/layout/' . $type.'.php' );

		} else {
			// Custom Layout.
			if ( $custom == 'true' ) {
				$dir = 'alm_layouts';
				if ( is_child_theme() ) {
					$path = get_stylesheet_directory() . '/' . $dir . '/' . $type;
					// if child theme does not have the layout, check the parent theme.
					if ( ! file_exists( $path ) ) {
						$path = get_template_directory() . '/' . $dir . '/' . $type;
					}
				} else {
					$path = get_template_directory() . '/' . $dir . '/' . $type;
				}
				$content = file_get_contents( $path );

			}
			// Layouts Add-on.
			else {
				$content = file_get_contents( ALM_LAYOUTS_PATH . 'layouts/' . $type . '.php' );
			}

		}

		$return['value'] = $content;
		echo json_encode( $return );

	} else {
		echo __( 'You don\'t belong here.', 'ajax-load-more' );
	}
	wp_die();
}

/**
 * Get the list of layout templates.
 *
 * @since 2.8.7
 */
function alm_get_layouts() {
   include ALM_PATH . 'admin/includes/components/layout-list.php';
}

/**
 * Create admin variables and ajax nonce.
 *
 * @since 2.0.0
 */
function alm_admin_vars() { ?>
   <script type='text/javascript'>
	 /* <![CDATA[ */
	var alm_admin_localize = <?php echo json_encode( array(
		'ajax_admin_url'   => admin_url( 'admin-ajax.php' ),
		'ajax_load_more'   => __( 'Ajax Load More', 'ajax-load-more' ),
		'active'           => __( 'Active', 'ajax-load-more' ),
		'inactive'         => __( 'Inactive', 'ajax-load-more' ),
		'applying_layout'  => __( 'Applying layout', 'ajax-load-more' ),
		'template_updated' => __( 'Template Updated', 'ajax-load-more' ),
		'alm_admin_nonce'  => wp_create_nonce( 'alm_repeater_nonce' ),
		'select_authors'   => __( 'Select Author(s)', 'ajax-load-more' ),
		'select_cats'      => __( 'Select Categories', 'ajax-load-more' ),
		'select_tags'      => __( 'Select Tags', 'ajax-load-more' ),
		'select'           => __( 'Select', 'ajax-load-more' ),
		'jump_to_option'   => __( 'Jump to Option', 'ajax-load-more' ),
		'jump_to_template' => __( 'Jump to Template', 'ajax-load-more' ),
		'install_now'      => __( 'Are you sure you want to install this Ajax Load More extension?', 'ajax-load-more' ),
		'install_btn'      => __( 'Install Now', 'ajax-load-more' ),
		'activate_btn'     => __( 'Activate', 'ajax-load-more' ),
		'settings_saving'  => '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> ' . __( 'Saving Settings', 'ajax-load-more' ),
		'settings_saved'   => '<i class="fa fa-check" aria-hidden="true"></i> ' . __( 'Settings Saved Successfully', 'ajax-load-more' ),
		'settings_error'   => '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' . __( 'Error Saving Settings', 'ajax-load-more' ),
		'shortcode_max'    => __( 'There is a maximum of 3 tax_query objects while using the shortcode builder', 'ajax-load-more' ),
		'restapi' => array(
			'url'        => function_exists( 'get_rest_url' ) ? get_rest_url() : '',
			'namespace'  => ALM_REST_NAMESPACE
		),
   )); ?>
   /* ]]> */
   </script>
<?php }

/**
 * Create admin nonce on ALM pages only.
 *
 * @since 2.8.2
 */
function alm_set_admin_nonce() {
   add_action( 'admin_head', 'alm_admin_vars' );
}

/**
 *  Update default repeater on plugin update.
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
	if(!get_option( 'alm_version' )){
		add_option( 'alm_version', ALM_VERSION );
	}

	$alm_installed_ver = get_option( "alm_version" );
	if ( $alm_installed_ver !== ALM_VERSION ) {
		delete_transient( 'alm_dismiss_sharing' ); // Delete ALM transients.
		alm_run_update(); // Update repeaters.
	}
}

/**
 * Run the update on all 'blogs'.
 *
 * @since 2.7.2
 */
function alm_run_update() {
   global $wpdb;

   if ( is_multisite() ) {
		$blog_ids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs" );
		// Loop all blogs and run update routine
		foreach ( $blog_ids as $blog_id ) {
			switch_to_blog( $blog_id );
			alm_update_template_files();
			restore_current_blog();
		}
	} else {
		alm_update_template_files();
	}

   update_option( "alm_version", ALM_VERSION ); // Update the WP Option tbl with the new version num.
}


/**
 * Update routine for template files.
 *
 * @since 2.7.2
 */
function alm_update_template_files() {
   global $wpdb;
	$table_name = $wpdb->prefix . "alm";

	// Get all rows where name is 'default'
   $rows = $wpdb->get_results( "SELECT * FROM $table_name WHERE name = 'default'" );

   if ( $rows ) {

		foreach( $rows as $row ) {

			$data = $wpdb->get_var( "SELECT repeaterDefault FROM $table_name WHERE name = 'default'" );

			// Create Base Repeater Dir (alm_templates).
			$base_dir = AjaxLoadMore::alm_get_repeater_path();
			AjaxLoadMore::alm_mkdir( $base_dir );

			$file = $base_dir . '/default.php';

         // Wrap is file_exists to avoid updating without cause.
			if ( ! file_exists( $file ) ) {
				try {
					$o = fopen($file, 'w+' ); //Open file.
					if ( ! $o ) {
						throw new Exception( __( '[Ajax Load More] Error opening default repeater template - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files within the /ajax-load-more/core/repeater directory', 'ajax-load-more' ) );
					}
					$w = fwrite( $o, $data ); //Save the file.
					if ( ! $w ) {
						throw new Exception( __( '[Ajax Load More] Error updating default repeater template - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files within the /ajax-load-more/core/repeater directory.', 'ajax-load-more' ) );
					}
					fclose($o); // Close file.

				} catch ( Exception $e ) { // Display error message in console.
					if(!isset($options['_alm_error_notices']) || $options['_alm_error_notices'] == '1' ){
						echo '<script>console.log("' .$e->getMessage(). '");</script>';
					}
				}
			}

      }
   }
}

/**
* Create Admin Menu.
*
* @since 2.0.0
*/
add_action( 'admin_menu', 'alm_admin_menu' );
function alm_admin_menu() {
   $icon = 'dashicons-plus-alt';
   $icon = ALM_ADMIN_URL . "/img/alm-logo-16x16.svg";

   $alm_page = add_menu_page(
		'Ajax Load More',
		'Ajax Load More',
		'edit_theme_options',
		'ajax-load-more',
		'alm_settings_page',
		$icon
   );

   $alm_settings_page = add_submenu_page(
		'ajax-load-more',
		__( 'Settings', 'ajax-load-more' ),
		__( 'Settings', 'ajax-load-more' ),
		'edit_theme_options',
		'ajax-load-more',
		'alm_settings_page'
   );

   $alm_template_page = add_submenu_page(
		'ajax-load-more',
		__( 'Repeater Templates', 'ajax-load-more' ),
		__( 'Repeater Templates', 'ajax-load-more' ),
		'edit_theme_options',
		'ajax-load-more-repeaters',
		'alm_repeater_page'
   );

   $alm_shortcode_page = add_submenu_page(
		'ajax-load-more',
		__( 'Shortcode Builder', 'ajax-load-more' ),
		__( 'Shortcode Builder', 'ajax-load-more' ),
		'edit_theme_options',
		'ajax-load-more-shortcode-builder',
		'alm_shortcode_builder_page'
   );

	if ( ! has_action( 'alm_pro_installed' ) ) { // Not Pro.
	   $alm_addons_page = add_submenu_page(
			'ajax-load-more',
			__( 'Add-ons', 'ajax-load-more' ),
			__( 'Add-ons', 'ajax-load-more' ),
			'edit_theme_options',
			'ajax-load-more-add-ons',
			'alm_add_ons_page'
	   );
   }

   $alm_extensions_page = add_submenu_page(
      'ajax-load-more',
      __( 'Extensions', 'ajax-load-more' ),
      __( 'Extensions', 'ajax-load-more' ),
      'edit_theme_options',
      'ajax-load-more-extensions',
      'alm_extensions_page'
   );

   $alm_help_page = add_submenu_page(
      'ajax-load-more',
      __( 'Help', 'ajax-load-more' ),
      __( 'Help', 'ajax-load-more' ),
      'edit_theme_options',
      'ajax-load-more-help',
      'alm_help_page'
   );

	$license_title = ( has_action( 'alm_pro_installed' ) ) ? __( 'License', 'ajax-load-more' ) : __( 'Licenses', 'ajax-load-more' );
   $alm_licenses_page = add_submenu_page(
      'ajax-load-more',
      $license_title,
      $license_title,
      'edit_theme_options',
      'ajax-load-more-licenses',
      'alm_licenses_page'
   );

   $before_link = '<span style="display:block; border-top: 1px solid #555; padding-top: 8px;">';
	$after_link = '</span>';
	$style_link_icon = 'style="opacity: 0.6; font-size: 18px; height: 18px; width: 18px; position: relative; left: -2px;"';

	// Pro.
	if ( has_action( 'alm_pro_installed' ) ) {
	   $alm_pro_page = add_submenu_page(
	      'ajax-load-more',
	      __( 'Pro', 'ajax-load-more' ),
	      $before_link . '<span class="dashicons dashicons-plus-alt" ' . $style_link_icon . '></span> ' .  __( 'Pro', 'ajax-load-more' ) . $after_link,
	      'edit_theme_options',
	      'ajax-load-more-pro',
	      'alm_pro_page'
	   );
   } else {
	   $alm_go_pro_page = add_submenu_page(
	      'ajax-load-more',
	      __( 'Pro', 'ajax-load-more' ),
	      $before_link . '<span class="dashicons dashicons-plus-alt" ' . $style_link_icon . '></span> ' . __( 'Go Pro', 'ajax-load-more' ) . $after_link,
	      'edit_theme_options',
	      'ajax-load-more-go-pro',
	      'alm_go_pro_page'
	   );
   }

	// Cache.
   if ( has_action( 'alm_cache_installed' ) ) {
      $alm_cache_page = add_submenu_page(
         'ajax-load-more',
         __( 'Cache', 'ajax-load-more' ),
         $before_link . '<span class="dashicons dashicons-admin-generic" '.$style_link_icon.'></span> ' .__( 'Cache', 'ajax-load-more' ) . $after_link,
         'edit_theme_options',
         'ajax-load-more-cache',
         'alm_cache_page'
      );
      add_action( 'load-' . $alm_cache_page, 'alm_load_admin_js' );
      add_action( 'load-' . $alm_cache_page, 'alm_load_cache_admin_js' );
      add_action( 'load-' . $alm_cache_page, 'alm_set_admin_nonce' );
   }

	// Filters.
   if ( has_action( 'alm_filters_installed' ) ) {

	   if ( has_action( 'alm_cache_installed' ) ) {
		   $before_link = '<span style="display:block;">';
		}

      $alm_filters_page = add_submenu_page(
         'ajax-load-more',
         __( 'Filters', 'ajax-load-more' ),
         $before_link . '<span class="dashicons dashicons-filter" '.$style_link_icon.'></span> '. __( 'Filters', 'ajax-load-more' ) . $after_link,
         'edit_theme_options',
         'ajax-load-more-filters',
         'alm_filters_page'
      );
      add_action( 'load-' . $alm_filters_page, 'alm_load_admin_js' );
      add_action( 'load-' . $alm_filters_page, 'alm_load_filters_admin_scripts' );
      add_action( 'load-' . $alm_filters_page, 'alm_set_admin_nonce' );
   }

	// WooCommerce.
   if ( has_action( 'alm_woocommerce_installed' ) && in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

	   if(has_action( 'alm_cache_installed' ) || has_action( 'alm_filters_installed' )){
		   $before_link = '<span style="display:block;">';
		}
		$wooIcon = '<style>.dashicons.alm-woo:before{font-family: WooCommerce!important; content: "\e03d"; font-size: 16px; margin-top: 2px;}</style>';

      $alm_woocommerce_page = add_submenu_page(
         'ajax-load-more',
         __( 'WooCommerce', 'ajax-load-more' ),
         $before_link . $wooIcon . '<span class="dashicons dashicons-before dashicons-admin-generic alm-woo" '.$style_link_icon.'></span> '. __( 'WooCommerce', 'ajax-load-more' ) . $after_link,
         'edit_theme_options',
         'ajax-load-more-woocommerce',
         'alm_woocommerce_page'
      );
      add_action( 'load-' . $alm_woocommerce_page, 'alm_load_admin_js' );
      add_action( 'load-' . $alm_woocommerce_page, 'alm_set_admin_nonce' );
   }

   //Add our admin scripts
   add_action( 'load-' . $alm_settings_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_settings_page, 'alm_set_admin_nonce' );
   add_action( 'load-' . $alm_template_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_template_page, 'alm_set_admin_nonce' );
   add_action( 'load-' . $alm_shortcode_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_shortcode_page, 'alm_set_admin_nonce' );
   add_action( 'load-' . $alm_help_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_help_page, 'alm_set_admin_nonce' );

   // Pro
   if ( has_action( 'alm_pro_installed' ) ) {
   	add_action( 'load-' . $alm_pro_page, 'alm_load_admin_js' );
      add_action( 'load-' . $alm_pro_page, 'alm_load_pro_admin_js' );
		add_action( 'load-' . $alm_pro_page, 'alm_set_admin_nonce' );

   } else {
   	add_action( 'load-' . $alm_addons_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_addons_page, 'alm_set_admin_nonce' );
	   add_action( 'load-' . $alm_go_pro_page, 'alm_load_admin_js' );
	   add_action( 'load-' . $alm_go_pro_page, 'alm_set_admin_nonce' );
   }
   add_action( 'load-' . $alm_extensions_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_extensions_page, 'alm_set_admin_nonce' );
	add_action( 'load-' . $alm_licenses_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_licenses_page, 'alm_set_admin_nonce' );

}

/**
 * Settings page.
 *
 * @since 2.0.0
 */
function alm_settings_page(){
   include_once ALM_PATH . 'admin/views/settings.php';
}

/**
 *  Custom Repeaters.
 *
 *  @since 2.0.0
 */
function alm_repeater_page(){
   include_once ALM_PATH . 'admin/views/repeater-templates.php';
}

/**
 * Shortcode Builder.
 *
 * @since 2.0.0
 */
function alm_shortcode_builder_page(){
   include_once ALM_PATH . 'admin/views/shortcode-builder.php';
}

/**
 * Ajax Load More Add-ons
 *
 * @since 2.0.0
 */
function alm_add_ons_page(){
   include_once ALM_PATH . 'admin/views/add-ons.php';
}

/**
 *  Ajax Load More Extensions
 *
 *  @since 3.0.0
 */
function alm_extensions_page(){
   include_once ALM_PATH . 'admin/views/extensions.php';
}

/**
 *  Ajax Load More Pro.
 *
 *  @since 4.0.0
 */
function alm_go_pro_page(){
   include_once ALM_PATH . 'admin/views/go-pro.php';
}

/**
 * Examples Page
 *
 * @since 2.0.0
 */
function alm_examples_page(){
   include_once ALM_PATH . 'admin/views/examples.php';
}

/**
 * Help Page (Implementation Inforgraphic).
 *
 * @since 2.8.7
 */

function alm_help_page(){
   include_once ALM_PATH . 'admin/views/help.php';
}

/**
 * Ajax Load More Licenses
 *
 * @since 2.7.0
 */
function alm_licenses_page(){
   include_once ALM_PATH . 'admin/views/licenses.php';
}

/**
 *  Cache Add-on page
 *
 *  @since 3.6.0
 */
function alm_pro_page(){
   include_once ALM_PRO_ADMIN_PATH . 'admin/views/pro.php';
}

/**
 * Cache Add-on page
 *
 * @since 2.6.0
 */
function alm_cache_page(){
   include_once ALM_CACHE_ADMIN_PATH . 'admin/views/cache.php';
}

/**
 *  Filters Add-on page.
 *
 *  @since 3.4.0
 */
function alm_filters_page(){
   include_once ALM_FILTERS_PATH . 'admin/functions.php';
   include_once ALM_FILTERS_PATH . 'admin/views/filters.php';
}

/**
 * WooCommerce Add-on page.
 *
 * @since 5.3.0
 */
function alm_woocommerce_page(){
   include_once ALM_WOO_PATH. 'admin/views/woocommerce.php';
}



/**
* alm_load_admin_js
* Load Admin JS
*
* @since 2.0.15
*/

function alm_load_admin_js(){
	add_action( 'admin_enqueue_scripts', 'alm_enqueue_admin_scripts' );
}
// Pro Scripts
function alm_load_pro_admin_js(){
	if(class_exists( 'ALMPro' )){
   	ALMPro::alm_enqueue_pro_admin_scripts();
   }
}
// Cache Scripts
function alm_load_cache_admin_js(){
	if(class_exists( 'ALMCache' )){
   	ALMCache::alm_enqueue_cache_admin_scripts();
   }
}
// Filters Scripts
function alm_load_filters_admin_scripts(){
	if(class_exists( 'ALMFilters' )){
   	ALMFilters::alm_enqueue_filters_admin_scripts();
   }
}



/**
* alm_enqueue_admin_scripts
* Enqueue Admin JS
*
* @since 2.0.15
*/

function alm_enqueue_admin_scripts(){

   // Admin CSS
   wp_enqueue_style( 'alm-admin', ALM_ADMIN_URL. 'dist/css/admin.css', '', ALM_VERSION);
   wp_enqueue_style( 'alm-core', ALM_URL. '/core/dist/css/ajax-load-more.css', '', ALM_VERSION);

	// disable ACF select2 on ALM pages
   wp_dequeue_style( 'acf-input' );

   // CodeMirror Syntax Highlighting if on Repater Template page
   $screen = get_current_screen();
   if ( in_array( $screen->id, array( 'ajax-load-more_page_ajax-load-more-repeaters' ) ) ){

      //CodeMirror CSS
      wp_enqueue_style( 'alm-codemirror-css', ALM_ADMIN_URL. 'codemirror/lib/codemirror.css' );

      //CodeMirror JS
      wp_enqueue_script( 'alm-codemirror', ALM_ADMIN_URL. 'codemirror/lib/codemirror.js' );
      wp_enqueue_script( 'alm-codemirror-matchbrackets', ALM_ADMIN_URL. 'codemirror/addon/edit/matchbrackets.js' );
      wp_enqueue_script( 'alm-codemirror-htmlmixed', ALM_ADMIN_URL. 'codemirror/mode/htmlmixed/htmlmixed.js' );
      wp_enqueue_script( 'alm-codemirror-xml', ALM_ADMIN_URL. 'codemirror/mode/xml/xml.js' );
      wp_enqueue_script( 'alm-codemirror-javascript', ALM_ADMIN_URL. 'codemirror/mode/javascript/javascript.js' );
      wp_enqueue_script( 'alm-codemirror-mode-css', ALM_ADMIN_URL. 'codemirror/mode/css/css.js' );
      wp_enqueue_script( 'alm-codemirror-clike', ALM_ADMIN_URL. 'codemirror/mode/clike/clike.js' );
      wp_enqueue_script( 'alm-codemirror-php', ALM_ADMIN_URL. 'codemirror/mode/php/php.js' );

   }

   // Admin JS
   wp_enqueue_script( 'jquery-form' );
   wp_enqueue_script( 'alm-admin', ALM_ADMIN_URL. 'dist/js/admin.js', array( 'jquery' ), ALM_VERSION);
   wp_enqueue_script( 'alm-shortcode-builder', ALM_ADMIN_URL. 'shortcode-builder/js/shortcode-builder.js', array( 'jquery' ), ALM_VERSION);

}



/*
*  alm_save_repeater
*  Repeater Save function
*
*  @return   response
*  @since 2.0.0
*  @updated 3.5
*/

function alm_save_repeater(){

	if (current_user_can( 'edit_theme_options' )){

		global $wpdb;
		$table_name = $wpdb->prefix . "alm";
		$blog_id = $wpdb->blogid;
		$options = get_option( 'alm_settings' ); //Get plugin options
		$nonce = $_POST["nonce"];

		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' )){ // Check our nonce
			die( 'Error - unable to verify nonce, please try again.' );
      }

	   // Get _POST Vars
		$c = Trim(stripslashes($_POST["value"])); // Repeater Value
		$n = Trim(stripslashes($_POST["repeater"])); // Repeater name
		$t = Trim(stripslashes($_POST["type"])); // Repeater name
		$a = Trim(stripslashes($_POST["alias"])); // Repeater alias


		// Default
		if($t === 'default' ){

         // Create Base Repeater Dir (alm-templates)
         $base_dir = AjaxLoadMore::alm_get_repeater_path();
         AjaxLoadMore::alm_mkdir($base_dir);

		   $f = $base_dir .'/default.php';

	   }

	   // Custom Repeaters v2
	   elseif($t === 'unlimited' ){

         // Custom Repeaters 2.5+
         if(ALM_UNLIMITED_VERSION >= '2.5' ){

   			// Get path to repeater dir (alm_templates)
   			$base_dir = AjaxLoadMore::alm_get_repeater_path();
   			AjaxLoadMore::alm_mkdir($base_dir);
   			$f = $base_dir .'/'. $n .'.php';

         } else {

            $f = ($blog_id > 1) ? ALM_UNLIMITED_PATH. 'repeaters/'. $blog_id .'/'. $n .'.php' : ALM_UNLIMITED_PATH. 'repeaters/'. $n .'.php';

         }

	   }

	   // Custom Repeaters v1
		else{

			$f = ALM_REPEATER_PATH. 'repeaters/'.$n .'.php';

	   }


      // Write Repeater Template
	   try {
	      $o = fopen($f, 'w+' ); //Open file
	      if ( !$o ) {
	        throw new Exception(__( '[Ajax Load More] Unable to open repeater template - '.$f.' - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files.', 'ajax-load-more' ));
	      }
	      $w = fwrite($o, $c); //Save the file
	      if ( !$w ) {
	        throw new Exception(__( '[Ajax Load More] Error saving repeater template - '.$f.' - Please check your file path and ensure your server is configured to allow Ajax Load More to read and write files.', 'ajax-load-more' ));
	      }
	      fclose($o); //now close it

	   } catch ( Exception $e ) {
	      // Display error message in console.
	      if(!isset($options['_alm_error_notices']) || $options['_alm_error_notices'] == '1' ){
	         echo '<script>console.log("' .$e->getMessage(). '");</script>';
	      }
	   }


		// Save to database

		if($t === 'default' )	{
		   $data_update = array( 'repeaterDefault' => "$c", 'pluginVersion' => ALM_VERSION);
		   $data_where = array( 'name' => "default");
	   }
	   elseif($t === 'unlimited' ){ // Custom Repeaters v2
	      $table_name = $wpdb->prefix . "alm_unlimited";
		   $data_update = array( 'repeaterDefault' => "$c", 'alias' => "$a", 'pluginVersion' => ALM_UNLIMITED_VERSION);
		   $data_where = array( 'name' => $n);
	   }
	   else{ // Custom Repeaters
		   $data_update = array( 'repeaterDefault' => "$c", 'alias' => "$a", 'pluginVersion' => ALM_REPEATER_VERSION);
	      $data_where = array( 'name' => $n);
	   }

		$wpdb->update($table_name , $data_update, $data_where);

		//Our results
		if($w){
		    echo '<span class="saved">'. __( 'Template Saved Successfully', 'ajax-load-more' ) .'</span>';
		} else {
		    echo '<span class="saved-error"><b>'. __( 'Error Writing File', 'ajax-load-more' ) .'</b></span><br/>'. __( 'Something went wrong and the data could not be saved.', 'ajax-load-more' );
		}

		wp_die();

	}else {
		echo __( 'You don\'t belong here.', 'ajax-load-more' );
	}
}



/*
*  alm_update_repeater
*  Update repeater template from database
*  User case: User deletes plugin, then installs again and the version has not change. Click 'Update from DB' option to load template.
*
*  @return Database value
*  @since 2.5.0
*/

function alm_update_repeater(){

	if (current_user_can( 'edit_theme_options' )){

		$nonce = $_POST["nonce"];
		// Check our nonce
		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' )){ // Check our nonce
			die( 'Error - unable to verify nonce, please try again.' );
      }

	   // Get _POST Vars
		$n = Trim(stripslashes($_POST["repeater"])); // Repeater name
		$t = Trim(stripslashes($_POST["type"])); // Repeater type (default | unlimited)


		// Get value from database
		global $wpdb;
		$table_name = $wpdb->prefix . "alm";

		if($t === 'default' )	$n = 'default';
	   if($t === 'unlimited' ) $table_name = $wpdb->prefix . "alm_unlimited";

	   //$the_repeater = $wpdb->get_var("SELECT repeaterDefault FROM " . $table_name . " WHERE name = '$n'");
	   $the_repeater = $wpdb->get_var("SELECT repeaterDefault FROM " . $table_name . " WHERE name = '".esc_sql($n)."'");

	   echo $the_repeater; // Return repeater value

		die();

	} else {

		echo __( 'You don\'t belong here.', 'ajax-load-more' );

	}
}



/*
*  alm_get_tax_terms
*  Get taxonomy terms for shortcode builder
*
*  @return   Taxonomy Terms
*  @since 2.1.0
*/

function alm_get_tax_terms(){
	if (current_user_can( 'edit_theme_options' )){

		$nonce = $_GET["nonce"];
		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
			die( 'Get Bounced!' );

		$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';
		$index = (isset($_GET['index'])) ? $_GET['index'] : '1';

		$tax_args = array(
			'orderby'       => 'name',
			'order'         => 'ASC',
			'hide_empty'    => false
		);
		$terms = get_terms($taxonomy, $tax_args);
		$returnVal = '';
		if ( !empty( $terms ) && !is_wp_error( $terms ) ){
			$returnVal .= '<ul>';
			foreach ( $terms as $term ) {

				$returnVal .='<li><input type="checkbox" class="alm_element" name="tax-term-'.$term->slug.'" id="tax-term-'.$term->slug.'-'.$index.'" data-type="'.$term->slug.'"><label for="tax-term-'.$term->slug.'-'.$index.'">'.$term->name.'</label></li>';

			}
			$returnVal .= '</ul>';
			echo $returnVal;

			die();
		}else{
			echo "<p class='warning'>No terms exist within this taxonomy</p>";
			die();
		}

	} else {
		echo __( 'You don\'t belong here.', 'ajax-load-more' );
	}
}

/*
*  alm_layouts_dismiss
*  Dismiss Add Layouts CTA in repeater templates.
*
*  @since 2.8.2.1
*/
function alm_layouts_dismiss(){
   if (current_user_can( 'edit_theme_options' )){
		$nonce = $_POST["nonce"];

		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
			die( 'Error - unable to verify nonce, please try again.' );

      update_option( 'alm_layouts_dismiss', 'true' );
      echo 'Success';

      die();
   }
}

/*
*  alm_dismiss_sharing
*  Dismiss sharing widget on plugin settings page.
*
*  @since 2.8.2.1
*/
function alm_dismiss_sharing(){

   if (current_user_can( 'edit_theme_options' )){

		$nonce = $_POST["nonce"];

		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
			die(__( 'Error - unable to verify nonce, please try again.', 'ajax-load-more' ));

      set_transient( 'alm_dismiss_sharing', 'true', YEAR_IN_SECONDS );
      echo 'ALM sharing dismissed successfully.';

      wp_die();
   }
}

/*
*  alm_filter_admin_footer_text
*  Filter the WP Admin footer text only on ALM pages
*
*  @since 2.12.0
*/

function alm_filter_admin_footer_text( $text ) {
	$screen = alm_is_admin_screen();
	if(!$screen){
		return;
	}

	echo '<strong>Ajax Load More</strong> is made with <span style="color: #e25555;">♥</span> by <a href="https://connekthq.com" target="_blank" style="font-weight: 500;">Connekt</a> | <a href="https://wordpress.org/support/plugin/ajax-load-more/reviews/" target="_blank" style="font-weight: 500;">Leave a Review</a> | <a href="https://connekthq.com/plugins/ajax-load-more/support/" target="_blank" style="font-weight: 500;">Get Support</a>';

	if(!has_action( 'alm_pro_installed' )){
		echo ' | <a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank" style="font-weight: 500;">Go Pro</a>';
	}
}

/*
*  admin_init
*  Initiate the plugin, create our setting variables.
*
*  @since 2.0.0
*/

add_action( 'admin_init', 'alm_admin_init' );
function alm_admin_init(){

	register_setting(
		'alm-setting-group',
		'alm_settings',
		'alm_sanitize_settings'
	);

	add_settings_section(
		'alm_general_settings',
		'Global Settings',
		'alm_general_settings_callback',
		'ajax-load-more'
	);

	add_settings_section(
		'alm_admin_settings',
		'Admin Settings',
		'alm_admin_settings_callback',
		'ajax-load-more'
	);

	add_settings_field( // Container type
	    '_alm_container_type',
	    __( 'Container Type', 'ajax-load-more' ),
	    'alm_container_type_callback',
	    'ajax-load-more',
	    'alm_general_settings'
	);

	add_settings_field(  // Classnames
		'_alm_classname',
		__( 'Container Classes', 'ajax-load-more' ),
		'alm_class_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Disbale CSS
		'_alm_disable_css',
		__( 'Disable CSS', 'ajax-load-more' ),
		'alm_disable_css_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Btn color
		'_alm_btn_color',
		__( 'Button/Loading Style', 'ajax-load-more' ),
		'alm_btn_color_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Inline CSS
		'_alm_inline_css',
		__( 'Load CSS Inline', 'ajax-load-more' ),
		'alm_inline_css_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Button classes
		'_alm_btn_classname',
		__( 'Button Classes', 'ajax-load-more' ),
		'alm_btn_class_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

/*
	add_settings_field(  // Disable REST API
		'_alm_use_rest_api',
		__( 'REST API', 'ajax-load-more' ),
		'_alm_use_rest_api_callback',
		'ajax-load-more',
		'alm_general_settings'
	);
*/

	add_settings_field(  // Legacy Callbacks
		'_alm_legacy_callbacks',
		__( 'Legacy Callbacks', 'ajax-load-more' ),
		'_alm_legacy_callbacks_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Load dynamic queries
		'_alm_disable_dynamic',
		__( 'Dynamic Content', 'ajax-load-more' ),
		'alm_disable_dynamic_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	add_settings_field(  // Display error notices
		'_alm_error_notices',
		__( 'Error Notices', 'ajax-load-more' ),
		'_alm_error_notices_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	add_settings_field(  // Uninstall
		'_alm_uninstall',
		__( 'Delete on Uninstall', 'ajax-load-more' ),
		'_alm_uninstall_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	// CACHE
	if(has_action( 'alm_cache_settings' )){
   	do_action( 'alm_cache_settings' );
   }

	// CUSTOM REPEATERS
	if(has_action( 'alm_unlimited_settings' )){
   	do_action( 'alm_unlimited_settings' );
   }

	// FILTERS
	if(has_action( 'alm_filters_settings' )){
   	do_action( 'alm_filters_settings' );
   }

	// LAYOUTS
	if(has_action( 'alm_layouts_settings' )){
   	do_action( 'alm_layouts_settings' );
   }

	// NEXT PAGE
	if(has_action( 'alm_nextpage_settings' )){
   	do_action( 'alm_nextpage_settings' );
   }

	// PAGINATION
	if(has_action( 'alm_paging_settings' )){
   	do_action( 'alm_paging_settings' );
   }

	// PRELOADED
	if(has_action( 'alm_preloaded_settings' )){
   	do_action( 'alm_preloaded_settings' );
   }

	// REST API
	if(has_action( 'alm_rest_api_settings' )){
   	do_action( 'alm_rest_api_settings' );
   }

	// SEO
	if(has_action( 'alm_seo_settings' )){
		do_action( 'alm_seo_settings' );
	}

	// SINGLE POST
	if(has_action( 'alm_prev_post_settings' )){
   	do_action( 'alm_prev_post_settings' );
	}

	// TABS
	if(has_action( 'alm_tabs_settings' )){
   	do_action( 'alm_tabs_settings' );
   }

	// THEME REPEATERS
	if(has_action( 'alm_theme_repeaters_settings' )){
   	do_action( 'alm_theme_repeaters_settings' );
	}

}

/**
 * Some general settings text.
 *
 * @since 2.0.0
 */
function alm_general_settings_callback() {
    echo '<p>' . __( 'Customize the user experience of Ajax Load More by updating the fields below.', 'ajax-load-more' ) . '</p>';
}

/**
 * Some general admin settings text.
 *
 * @since 2.0.0
 */
function alm_admin_settings_callback() {
    echo '<p>' . __( 'The following settings affect the WordPress admin area only.', 'ajax-load-more' ) . '</p>';
}

/**
 * Sanitize our form fields.
 *
 * @since 2.0.0
 */
function alm_sanitize_settings( $input ) {
    return $input;
}

/**
 * Diabale Ajax Load More CSS.
 *
 * @since 2.0.0
 */
function alm_disable_css_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_disable_css']))
	   $options['_alm_disable_css'] = '0';

	$html = '<input type="hidden" name="alm_settings[_alm_disable_css]" value="0" />';
	$html .= '<input type="checkbox" id="alm_disable_css_input" name="alm_settings[_alm_disable_css]" value="1"'. (($options['_alm_disable_css']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="alm_disable_css_input">'.__( 'I want to use my own CSS styles.', 'ajax-load-more' ).'<br/><span style="display:block;"><i class="fa fa-file-text-o"></i> &nbsp;<a href="'.ALM_URL.'/core/dist/css/ajax-load-more.css" target="blank">'.__( 'View Ajax Load More CSS', 'ajax-load-more' ).'</a></span></label>';

	echo $html;
}

/**
 * Disbale the ALM shortcode button in the WordPress content editor.
 *
 * @since 2.2.1
 * @deprecated 5.4.2
 */
function alm_hide_btn_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_hide_btn']))
	   $options['_alm_hide_btn'] = '0';

	$html = '<input type="hidden" name="alm_settings[_alm_hide_btn]" value="0" /><input type="checkbox" id="alm_hide_btn" name="alm_settings[_alm_hide_btn]" value="1"'. (($options['_alm_hide_btn']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="alm_hide_btn">'.__( 'Hide shortcode button in WYSIWYG editor.', 'ajax-load-more' ).'</label>';

	echo $html;
}

/**
 * Display admin error notices in browser console.
 *
 * @since 2.7.2
 */
function _alm_error_notices_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_error_notices']))
	   $options['_alm_error_notices'] = '1';

	$html =  '<input type="hidden" name="alm_settings[_alm_error_notices]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_error_notices]" id="_alm_error_notices" value="1"'. (($options['_alm_error_notices']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_error_notices">'.__( 'Display error messaging regarding repeater template updates in the browser console.', 'ajax-load-more' ).'</label>';

	echo $html;
}

/**
 * Disable the dynamic population of categories, tags and authors
 *
 * @since 2.6.0
 */
function alm_disable_dynamic_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_disable_dynamic']))
	   $options['_alm_disable_dynamic'] = '0';

	$html =  '<input type="hidden" name="alm_settings[_alm_disable_dynamic]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_disable_dynamic]" id="_alm_disable_dynamic" value="1"'. (($options['_alm_disable_dynamic']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_disable_dynamic">'.__( 'Disable dynamic population of categories, tags and authors in the Shortcode Builder.<span style="display:block">Recommended if you have a large number of categories, tags and/or authors.', 'ajax-load-more' ).'</label>';

	echo $html;
}

/**
 * The type of container ul or div
 *
 * @since 2.0.0
 */
function alm_container_type_callback() {

    $options = get_option( 'alm_settings' );

    if(!isset($options['_alm_container_type']))
	   $options['_alm_container_type'] = '1';

    $html = '<input type="radio" id="_alm_container_type_one" name="alm_settings[_alm_container_type]" value="1"' . checked( 1, $options['_alm_container_type'], false ) . '/>';
    $html .= '<label for="_alm_container_type_one">&lt;ul&gt; <span style="padding-top: 2px;">&lt;!-- '.__( 'Ajax Posts Here', 'ajax-load-more' ).' --&gt;</span> &lt;/ul&gt;</label><br/>';

    $html .= '<input type="radio" id="_alm_container_type_two" name="alm_settings[_alm_container_type]" value="2"' . checked( 2, $options['_alm_container_type'], false ) . '/>';
    $html .= '<label for="_alm_container_type_two">&lt;div&gt; <span style="padding-top: 2px;">&lt;!-- '.__( 'Ajax Posts Here', 'ajax-load-more' ).' --&gt;</span> &lt;/div&gt;</label>';

    $html .= '<label style="cursor: default !important"><span style="display:block">'.__( 'You can modify the container type when building a shortcode.', 'ajax-load-more' ).'</span></label>';

    echo $html;

}

/**
 * Add classes to the Ajax Load More wrapper.
 *
 * @since 2.0.0
 */
function alm_class_callback(){
	$options = get_option( 'alm_settings' );

	$class = isset( $options ) && isset($options['_alm_classname']) ? $options['_alm_classname'] : '';

	$html = '<label for="alm_settings[_alm_classname]">'.__( 'Add custom classes to the <i>.alm-listing</i> container - classes are applied globally and will appear with every instance of Ajax Load More. <span style="display:block">You can also add classes when building a shortcode.</span>', 'ajax-load-more' ).'</label><br/>';
	$html .= '<input type="text" id="alm_settings[_alm_classname]" name="alm_settings[_alm_classname]" value="' . $class . '" placeholder="posts listing etc..." /> ';

	echo $html;
}

/**
 * Get button color.
 *
 * @since 2.0.0
 */
function alm_btn_color_callback() {

	$options = get_option( 'alm_settings' );

	$type = isset( $options ) && isset($options['_alm_btn_color']) ? $options['_alm_btn_color'] : '';

	if(!isset($type)) $options['_alm_btn_color'] = '0';

	$selected0 = '';
	if($type == 'default' ) $selected0 = 'selected="selected"';

	$selected1 = '';
	if($type == 'blue' ) $selected1 = 'selected="selected"';

	$selected2 = '';
	if($type == 'green' ) $selected2 = 'selected="selected"';

	$selected3 = '';
	if($type == 'red' ) $selected3 = 'selected="selected"';

	$selected4 = '';
	if($type == 'purple' ) $selected4 = 'selected="selected"';

	$selected5 = '';
	if($type == 'grey' ) $selected5 = 'selected="selected"';

	$selected6 = '';
	if($type == 'white' ) $selected6 = 'selected="selected"';

	$selected13 = '';
	if($type == 'light-grey' ) $selected13 = 'selected="selected"';

	$selected7 = '';
	if($type == 'infinite classic' ) $selected7 = 'selected="selected"';

	$selected8 = '';
	if($type == 'infinite skype' ) $selected8 = 'selected="selected"';

	$selected9 = '';
	if($type == 'infinite ring' ) $selected9 = 'selected="selected"';

	$selected10 = '';
	if($type == 'infinite fading-blocks' ) $selected10 = 'selected="selected"';

	$selected11 = '';
	if($type == 'infinite fading-circles' ) $selected11 = 'selected="selected"';

	$selected12 = '';
	if($type == 'infinite chasing-arrows' ) $selected12 = 'selected="selected"';

	$html =  '<label for="alm_settings_btn_color">'.__( 'Select an Ajax loading style - you can choose between a <strong>Button</strong> or <strong>Infinite Scroll</strong>', 'ajax-load-more' );
	$html .= '.<br/><span style="display:block">Selecting an Infinite Scroll style will remove the click interaction and load content on scroll <u>only</u>.</span>';
	$html .= '</label>';
	$html .= '<select id="alm_settings_btn_color" name="alm_settings[_alm_btn_color]">';

		$html .= '<optgroup label="'. __( 'Button Style (Dark)', 'ajax-load-more' ) .'">';
			$html .= '<option value="default" class="alm-color default" ' . $selected0 .'>Default</option>';
			$html .= '<option value="blue" class="alm-color blue" ' . $selected1 .'>Blue</option>';
			$html .= '<option value="green" class="alm-color green" ' . $selected2 .'>Green</option>';
			$html .= '<option value="purple" class="alm-color purple" ' . $selected4 .'>Purple</option>';
			$html .= '<option value="grey" class="alm-color grey" ' . $selected5 .'>Grey</option>';
		$html .= '</optgroup>';
		$html .= '<optgroup label="'. __( 'Button Style (Light)', 'ajax-load-more' ) .'">';
			$html .= '<option value="white" class="alm-color white" ' . $selected6 .'>White</option>';
			$html .= '<option value="light-grey" class="alm-color light-grey" ' . $selected13 .'>Light Grey</option>';
		$html .= '</optgroup>';

		$html .= '<optgroup label="'. __( 'Infinite Scroll (No Button)', 'ajax-load-more' ) .'">';
			$html .= '<option value="infinite classic" class="infinite classic" ' . $selected7 .'>Classic</option>';
			$html .= '<option value="infinite skype" class="infinite skype" ' . $selected8 .'>Skype</option>';
			$html .= '<option value="infinite ring" class="infinite ring" ' . $selected9 .'>Circle Fill</option>';
			$html .= '<option value="infinite fading-blocks" class="infinite fading-blocks" ' . $selected10 .'>Fading Blocks</option>';
			$html .= '<option value="infinite fading-circles" class="infinite fading-circles" ' . $selected11 .'>Fading Circles</option>';
			$html .= '<option value="infinite chasing-arrows" class="infinite chasing-arrows" ' . $selected12 .'>Chasing Arrows</option>';
		$html .= '</optgroup>';

   $html .= '</select>';

   // Set loading class for infinite type only
	$loadingClass = (strpos($type, 'infinite' ) !== false) ? ' loading' : '';

   $html .= '<div class="clear"></div>';
	$html .= '<div class="ajax-load-more-wrap core '.$type.'">';
	$html .='<span>'.__( 'Click to Preview', 'ajax-load-more' ) .'</span>';
	$html .= '<div class="alm-btn-wrap">';
	$html .= '<button style="cursor: pointer;" type="button" class="alm-load-more-btn'. $loadingClass .'" id="test-alm-button">'.apply_filters( 'alm_button_label', __( 'Load More', 'ajax-load-more' )).'</button>';
	$html .= '</div>';
	$html .= '</div>';

   echo $html;
}

/**
 * Load CSS Inline vs the head
 *
 * @since 3.3.1
 */
function alm_inline_css_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_inline_css']))
	   $options['_alm_inline_css'] = '1';

	$html =  '<input type="hidden" name="alm_settings[_alm_inline_css]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_inline_css]" id="alm_inline_css" value="1"'. (($options['_alm_inline_css']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="alm_inline_css">'.__( 'Improve site performance by loading Ajax Load More CSS inline.', 'ajax-load-more' ).'</label>';

	echo $html;
}

/**
 * Add classes to the Ajax Load More button
 *
 * @since 2.4.1
 */
function alm_btn_class_callback(){
	$options = get_option( 'alm_settings' );

    if(!isset($options['_alm_btn_classname']))
	   $options['_alm_btn_classname'] = '';

	$html = '<label for="alm_settings[_alm_btn_classname]">'.__( 'Add classes to your <strong>Load More</strong> button.', 'ajax-load-more' ).'</label>';
	$html .= '<input type="text" class="btn-classes" id="alm_settings[_alm_btn_classname]" name="alm_settings[_alm_btn_classname]" value="'.$options['_alm_btn_classname'].'" placeholder="button bg-black rounded etc..." /> ';

	echo $html;
	?>
    <script>

		// Check if Disable CSS  === true
		if(jQuery( 'input#alm_disable_css_input' ).is(":checked")){
	      jQuery( 'select#alm_settings_btn_color' ).parent().parent().hide(); // Hide button color
	      jQuery( 'input#alm_inline_css' ).parent().parent().hide(); // Hide inline css
    	}
    	jQuery( 'input#alm_disable_css_input' ).change(function() {
    		var el = jQuery(this);
	      if(el.is(":checked")) {
	      	el.parent().parent( 'tr' ).next( 'tr' ).hide(); // Hide button color
	      	el.parent().parent( 'tr' ).next( 'tr' ).next( 'tr' ).hide(); // Hide inline css
	      }else{
	      	el.parent().parent( 'tr' ).next( 'tr' ).show(); // show button color
	      	el.parent().parent( 'tr' ).next( 'tr' ).next( 'tr' ).show(); // show inline css
	      }
	   });

    </script>
	<?php
}

/**
 * Move window to top of screen on page load.
 *
 * @since 2.6.0
*/
function _alm_scroll_top_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_scroll_top']))
	   $options['_alm_scroll_top'] = '0';

	$html =  '<input type="hidden" name="alm_settings[_alm_scroll_top]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_scroll_top]" id="_alm_scroll_top" value="1"'. (($options['_alm_scroll_top']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_scroll_top">';
	   $html .= __( 'On initial page load, move the user\'s browser window to the top of the screen.', 'ajax-load-more' );
	   $html .= '<span style="display:block">'. __( 'This may help prevent the loading of unnecessary posts.', 'ajax-load-more' ) .'</span>';
	$html .= '</label>';

	echo $html;
}

/**
 * Disable REST API in favor of admin-ajax.php.
 *
 * @since 5.1
 */
function _alm_use_rest_api_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_use_rest_api']))
	   $options['_alm_use_rest_api'] = '0';

	$html =  '<input type="hidden" name="alm_settings[_alm_use_rest_api]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_use_rest_api]" id="_alm_use_rest_api" value="1"'. (($options['_alm_use_rest_api']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_use_rest_api">';
	   $html .= __( 'Disable REST API.', 'ajax-load-more' );
	   $html .= '<span style="display:block">'. __( 'Use `admin-ajax.php` in favour of the WordPress REST API for all Ajax requests.', 'ajax-load-more' ) .'</span>';
	$html .= '</label>';

	echo $html;
}

/**
 * Load legacy callback actions.
 *
 * @since 5.0.0
 */
function _alm_legacy_callbacks_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_legacy_callbacks']))
	   $options['_alm_legacy_callbacks'] = '0';

	$html =  '<input type="hidden" name="alm_settings[_alm_legacy_callbacks]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_legacy_callbacks]" id="_alm_legacy_callbacks" value="1"'. (($options['_alm_legacy_callbacks']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_legacy_callbacks">';
	   $html .= __( 'Load legacy JavaScript callback functions.', 'ajax-load-more' );
	   $html .= '<span style="display:block">'. __( 'Ajax Load More <a href="https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/" target="_blank">callback functions</a> were updated in 5.0. Users who were using callbacks prior to ALM 5.0 can load this helper library to maintain compatibility.', 'ajax-load-more' ) .'</span>';
	$html .= '</label>';

	echo $html;
}

/**
 * Remove all ALM data on uninstall.
 *
 * @since 4.1.0
 */
function _alm_uninstall_callback(){
	$options = get_option( 'alm_settings' );

	if(!isset($options['_alm_uninstall']))
	   $options['_alm_uninstall'] = '0';

	$html =  '<input type="hidden" name="alm_settings[_alm_uninstall]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_uninstall]" id="_alm_uninstall" value="1"'. (($options['_alm_uninstall']) ? ' checked="checked"' : '' ) .' />';
	$html .= '<label for="_alm_uninstall">'.__( 'Check this box if Ajax Load More should remove all of its data* when the plugin is deleted.', 'ajax-load-more' );
	$html .= '<span style="display:block"><em>'. __( '* Database Tables, Options and Repeater Templates', 'ajax-load-more' ) .'</em></span>';
	$html .= '</label>';

	echo $html;
}
