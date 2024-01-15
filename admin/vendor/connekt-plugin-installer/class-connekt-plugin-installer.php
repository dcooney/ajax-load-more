<?php
/**
 * Connekt Plugin Installer.
 *
 * @author  Darren Cooney
 * @link    https://github.com/dcooney/wordpress-plugin-installer
 * @link    https://connekthq.com
 * @version 1.0.2
 *
 * @package Connekt_Plugin_Installer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'CNKT_INSTALLER_PATH' ) ) {
	define( 'CNKT_INSTALLER_PATH', plugins_url( '/', __FILE__ ) );
}

if ( ! defined( 'CNKT_INSTALLER_VERSION' ) ) {
	define( 'CNKT_INSTALLER_VERSION', '1.0.2' );
}

if ( ! class_exists( 'Connekt_Plugin_Installer' ) ) {

	/**
	 * Initiate the class.
	 */
	class Connekt_Plugin_Installer {

		/**
		 * Start installer functionality.
		 *
		 * @return void
		 */
		public function start() {
			add_action( 'cnkt_installer_enqueue_scripts', [ &$this, 'cnkt_installer_enqueue_scripts' ] );
			add_action( 'wp_ajax_cnkt_plugin_installer', [ &$this, 'cnkt_plugin_installer' ] );
			add_action( 'wp_ajax_cnkt_plugin_activation', [ &$this, 'cnkt_plugin_activation' ] );
		}

		/**
		 * Initialize the display of the plugins.
		 *
		 * @since 1.0
		 * @param array $plugins The array plugin data for display.
		 */
		public static function init( $plugins ) {
			// Add the required plugin scripts.
			do_action( 'cnkt_installer_enqueue_scripts' );
			?>
		<div class="cnkt-plugin-installer">
			<?php
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

			foreach ( $plugins as $plugin ) :

				$button_classes = 'install button';
				$button_text    = __( 'Install Now', 'cnkt-installer' );

				$api = plugins_api(
					'plugin_information',
					[
						'slug'   => sanitize_file_name( $plugin['slug'] ),
						'fields' => [
							'short_description' => true,
							'sections'          => false,
							'requires'          => false,
							'downloaded'        => true,
							'last_updated'      => false,
							'added'             => false,
							'tags'              => false,
							'compatibility'     => false,
							'homepage'          => false,
							'donate_link'       => false,
							'icons'             => true,
							'banners'           => true,
						],
					]
				);

				if ( ! is_wp_error( $api ) ) {
					$main_plugin_file = self::get_plugin_file( $plugin['slug'] ); // Get main plugin file.

					// Plugin is installed.
					if ( $main_plugin_file ) {
						if ( is_plugin_active( $main_plugin_file ) ) {
							// plugin activated.
							$button_classes = 'button disabled';
							$button_text    = __( 'Activated', 'cnkt-installer' );
						} else {
							// Installed, let's activate it.
							$button_classes = 'activate button button-primary';
							$button_text    = __( 'Activate', 'cnkt-installer' );
						}
					}

					// Send plugin data to template.
					self::render_template( $plugin, $api, $button_text, $button_classes );
				}
			endforeach;
			?>
		</div>
			<?php
		}

		/**
		 * Render display template for each plugin.
		 *
		 * @since 1.0
		 * @param array  $plugin         Original data passed.
		 * @param array  $api            Results from plugins_api.
		 * @param string $button_text    Text for the button.
		 * @param string $button_classes Classnames for the button.
		 */
		public static function render_template( $plugin, $api, $button_text, $button_classes ) {
			?>
		<div class="plugin">
			<div class="plugin-wrap">
				<?php if ( isset( $api->icons ) && isset( $api->icons['1x'] ) ) { ?>
					<img src="<?php echo esc_attr( $api->icons['1x'] ); ?>" alt="">
				<?php } else { ?>
					<img src="https://s.w.org/plugins/geopattern-icon/classic-widgets.svg" alt="">
				<?php } ?>
				<h2><?php echo wp_kses_post( $api->name ); ?></h2>
				<p><?php echo wp_kses_post( $api->short_description ); ?></p>
				<p class="plugin-author"><?php esc_attr_e( 'By', 'cnkt-installer' ); ?> <?php echo wp_kses_post( $api->author ); ?></p>
			</div>
				<ul class="activation-row">
					<li>
						<a class="<?php echo esc_attr( $button_classes ); ?>" data-slug="<?php echo esc_attr( $api->slug ); ?>" data-name="<?php echo esc_attr( $api->name ); ?>" href="<?php echo get_admin_url(); ?>/update.php?action=install-plugin&amp;plugin=<?php echo $api->slug; ?>&amp;_wpnonce=<?php echo wp_create_nonce( 'install-plugin_' . $api->slug ); ?>">
							<?php echo esc_attr( $button_text ); ?>
						</a>
					</li>
					<li>
						<a href="https://wordpress.org/plugins/<?php echo esc_attr( $api->slug ); ?>/" target="_blank">
							<?php esc_attr_e( 'More Details', 'cnkt-installer' ); ?>
						</a>
					</li>
				</ul>
			</div>
				<?php
		}

		/**
		 * Ajax method for installing a plugin.
		 *
		 * @since 1.0
		 * @return void|string The plugin data as JSON.
		 */
		public function cnkt_plugin_installer() {
			if ( ! current_user_can( 'install_plugins' ) ) {
				// Bail early if requirements not met.
				wp_die( esc_attr__( 'Sorry, you are not allowed to install plugins on this site.', 'cnkt-installer' ) );
			}

			// Get POST data.
			$params = filter_input_array( INPUT_POST, FILTER_SANITIZE_STRING );
			$nonce  = $params['nonce'];
			$plugin = $params['plugin'];

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( $nonce, 'cnkt_installer_nonce' ) ) {
				wp_die( esc_attr__( 'Error - unable to verify nonce, please try again.', 'cnkt-installer' ) );
			}

			// Required core libs for installation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get plugin data.
			$api = plugins_api(
				'plugin_information',
				[
					'slug'   => $plugin,
					'fields' => [
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					],
				]
			);

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$upgrader->install( $api->download_link );

			if ( $api->name ) {
				$status = 'success';
				$msg    = $api->name . ' successfully installed.';
			} else {
				$status = 'failed';
				$msg    = 'There was an error installing ' . $api->name . '.';
			}

			$json = [
				'status' => $status,
				'msg'    => $msg,
			];

			wp_send_json( $json );
		}


		/**
		 * Activate plugin via Ajax.
		 *
		 * @since 1.0
		 * @return void|string The plugin data as JSON.
		 */
		public function cnkt_plugin_activation() {
			if ( ! current_user_can( 'install_plugins' ) ) {
				// Bail early if requirements not met.
				wp_die( esc_attr__( 'Sorry, you are not allowed to activate plugins on this site.', 'cnkt-installer' ) );
			}

			// Get POST data.
			$params = filter_input_array( INPUT_POST, FILTER_SANITIZE_STRING );
			$nonce  = $params['nonce'];
			$plugin = $params['plugin'];

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( $nonce, 'cnkt_installer_nonce' ) ) {
				wp_die( esc_attr__( 'Error - unable to verify nonce, please try again.', 'cnkt-installer' ) );
			}

			// Required core WP libs for activation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get plugin data.
			$api = plugins_api(
				'plugin_information',
				[
					'slug'   => $plugin,
					'fields' => [
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					],
				]
			);

			if ( $api->name ) {
				$main_plugin_file = self::get_plugin_file( $plugin );
				$status           = 'success';
				if ( $main_plugin_file ) {
					activate_plugin( $main_plugin_file );
					$msg = $api->name . ' successfully activated.';
				}
			} else {
				$status = 'failed';
				$msg    = 'There was an error activating ' . $api->name . '.';
			}

			$json = [
				'status' => $status,
				'msg'    => $msg,
			];
			wp_send_json( $json );
		}

		/**
		 * A method to get the main plugin file.
		 *
		 * @since 1.0
		 * @param string $plugin_slug The slug of the plugin.
		 * @return void|string The plugin file.
		 */
		public static function get_plugin_file( $plugin_slug ) {
			// Load core WP plugin lib.
			require_once ABSPATH . '/wp-admin/includes/plugin.php';

			$plugins = get_plugins();
			if ( ! $plugins ) {
				return;
			}

			foreach ( $plugins as $plugin_file => $plugin_info ) {
				// Get the basename of the plugin e.g. [askismet]/askismet.php.
				$slug = dirname( plugin_basename( $plugin_file ) );
				if ( $slug ) {
					if ( $slug === $plugin_slug ) {
						return $plugin_file;
					}
				}
			}
		}

		/**
		 * Enqueue admin scripts and scripts localization.
		 *
		 * @since 1.0
		 */
		public function cnkt_installer_enqueue_scripts() {
			wp_enqueue_script( 'plugin-installer', CNKT_INSTALLER_PATH . 'assets/installer.js', [ 'jquery' ], CNKT_INSTALLER_VERSION, false );
			wp_localize_script(
				'plugin-installer',
				'cnkt_installer_localize',
				[
					'ajax_url'      => admin_url( 'admin-ajax.php' ),
					'admin_nonce'   => wp_create_nonce( 'cnkt_installer_nonce' ),
					'install_now'   => __( 'Are you sure you want to install this plugin?', 'cnkt-installer' ),
					'install_btn'   => __( 'Install Now', 'cnkt-installer' ),
					'activate_btn'  => __( 'Activate', 'cnkt-installer' ),
					'installed_btn' => __( 'Activated', 'cnkt-installer' ),
				]
			);
			wp_enqueue_style( 'plugin-installer', CNKT_INSTALLER_PATH . 'assets/installer.css', '', CNKT_INSTALLER_VERSION );
		}
	}

	// Initialize the installer class.
	$cnkt_plugin_installer = new Connekt_Plugin_Installer();
	$cnkt_plugin_installer->start();
}
