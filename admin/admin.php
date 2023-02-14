<?php
/**
 * ALM admin functions and helpers.
 *
 * @package AjaxLoadMore
 * @since   2.0.0
 */

/**
 * Include these files.
 */
require_once ALM_PATH . 'admin/functions/layouts.php';
require_once ALM_PATH . 'admin/functions/licensing.php';
require_once ALM_PATH . 'admin/functions/plugin-updates.php';
require_once ALM_PATH . 'admin/functions/repeater-templates.php';
require_once ALM_PATH . 'admin/functions/settings.php';

/**
 * Setup the admin hooks
 *
 * @return void
 * @deprecated 5.6
 */
function alm_admin_hooks() {
	require_once plugin_dir_path( __FILE__ ) . '/classes/class-nag.php';
}
// phpcs:ignore
// add_action( 'admin_init', 'alm_admin_hooks' );

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
 * Display a notification on pages with transients.
 *
 * @param string  $message The message to display.
 * @param string  $transient The transient name.
 * @param string  $duration The length to store transient.
 * @param boolean $dismissible Is this dissmissable.
 * @param string  $type The tpe of notification.
 * @since 4.0
 */
function alm_transient_notification( $message = '', $transient = '', $duration = 'YEAR_IN_SECONDS', $dismissible = true, $type = 'info' ) {
	if ( ! empty( $transient ) ) {
		$transient_value = get_transient( $transient );
		$dismissible     = $dismissible ? ' is-dismissible' : '';
		if ( ! isset( $transient_value ) || empty( $transient_value ) && ! empty( $message ) ) {
			?>
		<div class="alm-admin-notice notice-<?php echo esc_html( $type ); ?> notice<?php echo esc_html( $dismissible ); ?> alm-transient" data-transient="<?php echo esc_html( $transient ); ?>" data-duration="<?php echo esc_html( $duration ); ?>">
			<p><?php echo wp_kses_post( $message ); ?></p>
		</div>
			<?php
		}
	}
}

/**
 * Set plugin transient via Ajax.
 *
 * @since 4.0
 */
function alm_set_transient() {
	$form_data = filter_input_array( INPUT_POST );

	if ( ! current_user_can( 'edit_theme_options' ) || ! isset( $form_data['nonce'] ) ) {
		// Bail early if missing WP capabilities or nonce.
		wp_die( esc_attr__( 'You don\'t belong here.', 'ajax-load-more' ) );
	}

	if ( ! wp_verify_nonce( $form_data['nonce'], 'alm_repeater_nonce' ) ) {
		// Verify nonce.
		wp_die( esc_attr__( 'Error - unable to verify nonce, please try again.', 'ajax-load-more' ) );
	}

	$transient = $form_data['transient_name'];
	$duration  = ! isset( $form_data['duration'] ) ? 'YEAR_IN_SECONDS' : $form_data['duration'];

	if ( $transient ) {
		set_transient( $transient, 'true', constant( $duration ) );
		echo esc_html__( 'Transient set successfully', 'ajax-load-more' );
	}

	wp_die();
}
add_action( 'wp_ajax_alm_set_transient', 'alm_set_transient' ); // Set transient.

/**
 * Create admin variables and ajax nonce.
 *
 * @since 2.0.0
 */
function alm_admin_vars() {
	?>
<script type='text/javascript'>
	/* <![CDATA[ */
	var alm_admin_localize =
	<?php
	echo wp_json_encode(
		array(
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
			'restapi'          => array(
				'url'       => function_exists( 'get_rest_url' ) ? get_rest_url() : '',
				'namespace' => ALM_REST_NAMESPACE,
			),
		)
	);
	?>
	/* ]]> */
</script>
	<?php
}

/**
 * Add script localization variables to the `<head/>` on admin pages.
 *
 * @since 2.8.2
 */
function alm_set_admin_vars() {
	add_action( 'admin_head', 'alm_admin_vars' );
}

/**
 * Create Admin Menu.
 *
 * @since 2.0.0
 */
function alm_admin_menu() {
	$icon = ALM_ADMIN_URL . '/img/alm-logo-16x16.svg';

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

	$license_title     = ( has_action( 'alm_pro_installed' ) ) ? __( 'License', 'ajax-load-more' ) : __( 'Licenses', 'ajax-load-more' );
	$alm_licenses_page = add_submenu_page(
		'ajax-load-more',
		$license_title,
		$license_title,
		'edit_theme_options',
		'ajax-load-more-licenses',
		'alm_licenses_page'
	);

	$before_link     = '<span style="display:block; border-top: 1px solid #555; padding-top: 8px;">';
	$after_link      = '</span>';
	$style_link_icon = 'style="opacity: 0.6; font-size: 18px; height: 18px; width: 18px; position: relative; left: -2px;"';

	// Pro.
	if ( has_action( 'alm_pro_installed' ) ) {
		$alm_pro_page = add_submenu_page(
			'ajax-load-more',
			__( 'Pro', 'ajax-load-more' ),
			$before_link . '<span class="dashicons dashicons-plus-alt" ' . $style_link_icon . '></span> ' . __( 'Pro', 'ajax-load-more' ) . $after_link,
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
			$before_link . '<span class="dashicons dashicons-admin-generic" ' . $style_link_icon . '></span> ' . __( 'Cache', 'ajax-load-more' ) . $after_link,
			'edit_theme_options',
			'ajax-load-more-cache',
			'alm_cache_page'
		);
		add_action( 'load-' . $alm_cache_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_cache_page, 'alm_load_cache_admin_js' );
		add_action( 'load-' . $alm_cache_page, 'alm_set_admin_vars' );
	}

	// Filters.
	if ( has_action( 'alm_filters_installed' ) ) {

		if ( has_action( 'alm_cache_installed' ) ) {
			$before_link = '<span style="display:block;">';
		}

		$alm_filters_page = add_submenu_page(
			'ajax-load-more',
			__( 'Filters', 'ajax-load-more' ),
			$before_link . '<span class="dashicons dashicons-filter" ' . $style_link_icon . '></span> ' . __( 'Filters', 'ajax-load-more' ) . $after_link,
			'edit_theme_options',
			'ajax-load-more-filters',
			'alm_filters_page'
		);
		add_action( 'load-' . $alm_filters_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_filters_page, 'alm_load_filters_admin_scripts' );
		add_action( 'load-' . $alm_filters_page, 'alm_set_admin_vars' );
	}

	// WooCommerce.
	if ( has_action( 'alm_woocommerce_installed' ) && in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) { // phpcs:ignore

		if ( has_action( 'alm_cache_installed' ) || has_action( 'alm_filters_installed' ) ) {
			$before_link = '<span style="display:block;">';
		}
		$woo_icon = '<style>.dashicons.alm-woo:before{font-family: WooCommerce!important; content: "\e03d"; font-size: 16px; margin-top: 2px;}</style>';

		$alm_woocommerce_page = add_submenu_page(
			'ajax-load-more',
			__( 'WooCommerce', 'ajax-load-more' ),
			$before_link . $woo_icon . '<span class="dashicons dashicons-before dashicons-admin-generic alm-woo" ' . $style_link_icon . '></span> ' . __( 'WooCommerce', 'ajax-load-more' ) . $after_link,
			'edit_theme_options',
			'ajax-load-more-woocommerce',
			'alm_woocommerce_page'
		);
		add_action( 'load-' . $alm_woocommerce_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_woocommerce_page, 'alm_set_admin_vars' );
	}

	// Add admin scripts.
	add_action( 'load-' . $alm_settings_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_settings_page, 'alm_set_admin_vars' );
	add_action( 'load-' . $alm_template_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_template_page, 'alm_set_admin_vars' );
	add_action( 'load-' . $alm_shortcode_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_shortcode_page, 'alm_set_admin_vars' );
	add_action( 'load-' . $alm_help_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_help_page, 'alm_set_admin_vars' );

	// Pro.
	if ( has_action( 'alm_pro_installed' ) ) {
		add_action( 'load-' . $alm_pro_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_pro_page, 'alm_load_pro_admin_js' );
		add_action( 'load-' . $alm_pro_page, 'alm_set_admin_vars' );

	} else {
		add_action( 'load-' . $alm_addons_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_addons_page, 'alm_set_admin_vars' );
		add_action( 'load-' . $alm_go_pro_page, 'alm_load_admin_js' );
		add_action( 'load-' . $alm_go_pro_page, 'alm_set_admin_vars' );
	}
	add_action( 'load-' . $alm_extensions_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_extensions_page, 'alm_set_admin_vars' );
	add_action( 'load-' . $alm_licenses_page, 'alm_load_admin_js' );
	add_action( 'load-' . $alm_licenses_page, 'alm_set_admin_vars' );
}
add_action( 'admin_menu', 'alm_admin_menu' );

/**
 * Settings page.
 *
 * @since 2.0.0
 */
function alm_settings_page() {
	include_once ALM_PATH . 'admin/views/settings.php';
}

/**
 *  Custom Repeaters.
 *
 *  @since 2.0.0
 */
function alm_repeater_page() {
	include_once ALM_PATH . 'admin/views/repeater-templates.php';
}

/**
 * Shortcode Builder.
 *
 * @since 2.0.0
 */
function alm_shortcode_builder_page() {
	include_once ALM_PATH . 'admin/views/shortcode-builder.php';
}

/**
 * Ajax Load More Add-ons
 *
 * @since 2.0.0
 */
function alm_add_ons_page() {
	include_once ALM_PATH . 'admin/views/add-ons.php';
}

/**
 *  Ajax Load More Extensions
 *
 *  @since 3.0.0
 */
function alm_extensions_page() {
	include_once ALM_PATH . 'admin/views/extensions.php';
}

/**
 *  Ajax Load More Pro.
 *
 *  @since 4.0.0
 */
function alm_go_pro_page() {
	include_once ALM_PATH . 'admin/views/go-pro.php';
}

/**
 * Examples Page
 *
 * @since 2.0.0
 */
function alm_examples_page() {
	include_once ALM_PATH . 'admin/views/examples.php';
}

/**
 * Help Page (Implementation Inforgraphic).
 *
 * @since 2.8.7
 */
function alm_help_page() {
	include_once ALM_PATH . 'admin/views/help.php';
}

/**
 * Ajax Load More Licenses
 *
 * @since 2.7.0
 */
function alm_licenses_page() {
	include_once ALM_PATH . 'admin/views/licenses.php';
}

/**
 *  Cache Add-on page
 *
 *  @since 3.6.0
 */
function alm_pro_page() {
	include_once ALM_PRO_ADMIN_PATH . 'admin/views/pro.php';
}

/**
 * Cache Add-on page
 *
 * @since 2.6.0
 */
function alm_cache_page() {
	include_once ALM_CACHE_ADMIN_PATH . 'admin/views/cache.php';
}

/**
 *  Filters Add-on page.
 *
 *  @since 3.4.0
 */
function alm_filters_page() {
	if ( ! function_exists( 'alm_list_all_filters' ) ) {
		include_once ALM_FILTERS_PATH . 'admin/functions.php'; // Deprecated: This is loaded in Filters add-on.
	}
	include_once ALM_FILTERS_PATH . 'admin/views/filters.php';
}

/**
 * WooCommerce Add-on page.
 *
 * @since 5.3.0
 */
function alm_woocommerce_page() {
	include_once ALM_WOO_PATH . 'admin/views/woocommerce.php';
}

/**
 * Load Admin JS
 *
 * @since 2.0.15
 */
function alm_load_admin_js() {
	add_action( 'admin_enqueue_scripts', 'alm_enqueue_admin_scripts' );
}

/**
 * Load Pro add-on scripts.
 *
 * @return void
 */
function alm_load_pro_admin_js() {
	if ( class_exists( 'ALMPro' ) ) {
		ALMPro::alm_enqueue_pro_admin_scripts();
	}
}
/**
 * Load Cache add-on scripts.
 *
 * @return void
 */
function alm_load_cache_admin_js() {
	if ( class_exists( 'ALMCache' ) ) {
		ALMCache::alm_enqueue_cache_admin_scripts();
	}
}

/**
 * Load Filters add-on scripts.
 *
 * @return void
 */
function alm_load_filters_admin_scripts() {
	if ( class_exists( 'ALMFilters' ) ) {
		ALMFilters::alm_enqueue_filters_admin_scripts();
	}
}

/**
 * Enqueue Admin CSS & JS.
 *
 * @since 2.0.15
 */
function alm_enqueue_admin_scripts() {
	// Admin CSS.
	wp_enqueue_style( 'alm-admin', ALM_ADMIN_URL . 'dist/css/admin.css', '', ALM_VERSION );
	wp_enqueue_style( 'alm-core', ALM_URL . '/core/dist/css/ajax-load-more.css', '', ALM_VERSION );

	// Disable ACF select2 on ALM pages.
	wp_dequeue_style( 'acf-input' );

	// CodeMirror Syntax Highlighting if on Repater Template page.
	$screen = get_current_screen();
	if ( in_array( $screen->id, array( 'ajax-load-more_page_ajax-load-more-repeaters' ), true ) ) {

		// CodeMirror CSS.
		wp_enqueue_style( 'alm-codemirror-css', ALM_ADMIN_URL . 'codemirror/lib/codemirror.css', '', ALM_VERSION );

		// CodeMirror JS.
		wp_enqueue_script( 'alm-codemirror', ALM_ADMIN_URL . 'codemirror/lib/codemirror.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-matchbrackets', ALM_ADMIN_URL . 'codemirror/addon/edit/matchbrackets.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-htmlmixed', ALM_ADMIN_URL . 'codemirror/mode/htmlmixed/htmlmixed.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-xml', ALM_ADMIN_URL . 'codemirror/mode/xml/xml.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-javascript', ALM_ADMIN_URL . 'codemirror/mode/javascript/javascript.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-mode-css', ALM_ADMIN_URL . 'codemirror/mode/css/css.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-clike', ALM_ADMIN_URL . 'codemirror/mode/clike/clike.js', '', ALM_VERSION, false );
		wp_enqueue_script( 'alm-codemirror-php', ALM_ADMIN_URL . 'codemirror/mode/php/php.js', '', ALM_VERSION, false );

	}

	// Admin JS.
	wp_enqueue_script( 'jquery-form' );
	wp_enqueue_script( 'alm-admin', ALM_ADMIN_URL . 'dist/js/admin.js', array( 'jquery' ), ALM_VERSION, false );
	wp_enqueue_script( 'alm-shortcode-builder', ALM_ADMIN_URL . 'shortcode-builder/js/shortcode-builder.js', array( 'jquery' ), ALM_VERSION, false );

}

/**
 * Get taxonomy terms for shortcode builder and return HTML markup.
 *
 * @since 2.1.0
 */
function alm_get_tax_terms() {
	$form_data = filter_input_array( INPUT_GET );

	if ( ! current_user_can( 'edit_theme_options' ) || ! isset( $form_data['nonce'] ) ) {
		// Bail early if missing WP capabilities or nonce.
		wp_die( esc_attr__( 'You don\'t belong here.', 'ajax-load-more' ) );
	}

	if ( ! wp_verify_nonce( $form_data['nonce'], 'alm_repeater_nonce' ) ) {
		// Verify nonce.
		wp_die( esc_attr__( 'Error - unable to verify nonce, please try again.', 'ajax-load-more' ) );
	}

	$taxonomy = isset( $form_data['taxonomy'] ) ? esc_attr( $form_data['taxonomy'] ) : '';
	$index    = isset( $form_data['index'] ) ? esc_attr( $form_data['index'] ) : '1';
	$tax_args = array(
		'orderby'    => 'name',
		'order'      => 'ASC',
		'hide_empty' => false,
	);

	$terms = get_terms( $taxonomy, $tax_args );
	$value = '';
	if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
		$value .= '<ul>';
		foreach ( $terms as $term ) {
			$value .= '<li><input type="checkbox" class="alm_element" name="tax-term-' . $term->slug . '" id="tax-term-' . $term->slug . '-' . $index . '" data-type="' . $term->slug . '">';
			$value .= '<label for="tax-term-' . $term->slug . '-' . $index . '">' . $term->name . '</label>';
			$value .= '</li>';
		}
		$value .= '</ul>';
		echo $value; // phpcs:ignore
		wp_die();
	} else {
		echo "<p class='warning'>No terms exist within this taxonomy</p>";
		wp_die();
	}
}
add_action( 'wp_ajax_alm_get_tax_terms', 'alm_get_tax_terms' );

/**
 * Filter the WP Admin footer text only on ALM pages
 *
 * @param string $text The existing footer text.
 * @since 2.12.0
 */
function alm_filter_admin_footer_text( $text ) {
	$screen = alm_is_admin_screen();

	if ( ! $screen ) {
		return;
	}

	echo '<strong>Ajax Load More</strong> is made with <span style="color: #e25555;">♥</span> by <a href="https://connekthq.com" target="_blank" style="font-weight: 500;">Connekt</a> | <a href="https://wordpress.org/support/plugin/ajax-load-more/reviews/" target="_blank" style="font-weight: 500;">Leave a Review</a> | <a href="https://connekthq.com/plugins/ajax-load-more/support/" target="_blank" style="font-weight: 500;">Get Support</a>';
	if ( ! has_action( 'alm_pro_installed' ) ) {
		echo ' | <a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank" style="font-weight: 500;">Go Pro</a>';
	}
}
add_filter( 'admin_footer_text', 'alm_filter_admin_footer_text' ); // Admin menu text.
