<?php
/**
 * ALM layout functions and helpers.
 *
 * @package AjaxLoadMore
 * @since   5.6
 */

/**
 * Get layout and return value to repeater template.
 *
 * @since 2.8.3
 */
function alm_get_layout() {
	$form_data = filter_input_array( INPUT_GET );

	if ( ! current_user_can( apply_filters( 'alm_user_role', 'edit_theme_options' ) ) || ! isset( $form_data['nonce'] ) ) {
		wp_die( esc_attr__( 'You don\'t belong here.', 'ajax-load-more' ) ); // Bail early if missing WP capabilities or nonce.
	}

	if ( ! wp_verify_nonce( $form_data['nonce'], 'alm_repeater_nonce' ) ) {
		// Verify nonce.
		wp_die( esc_attr__( 'Error - unable to verify nonce, please try again.', 'ajax-load-more' ) );
	}

	$type   = sanitize_text_field( $form_data['type'] );
	$custom = sanitize_text_field( $form_data['custom'] );

	if ( $type === 'default' ) {
		// Default Layout.
		$path = ALM_PATH . 'admin/includes/layout/' . $type . '.php';

		// Security check.
		if ( ! alm_is_valid_path( $path ) ) {
			wp_die( esc_attr__( 'This doesn\'t look right, what are you trying to do?', 'ajax-load-more' ) );
		}

		$content = AjaxLoadMore::alm_get_default_repeater_markup();

	} elseif ( $custom === 'true' ) {
		// Custom Layout.
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

		// Security check.
		if ( ! alm_is_valid_path( $path ) ) {
			wp_die( esc_attr__( 'This doesn\'t look right, what are you trying to do?', 'ajax-load-more' ) );
		}

		// phpcs:ignore
		$content = file_get_contents( $path );

	} else {
		// Layouts Add-on.
		$path = ALM_LAYOUTS_PATH . 'layouts/' . $type . '.php';

		// Security check.
		if ( ! alm_is_valid_path( $type ) ) {
			wp_die( esc_attr__( 'This doesn\'t look right, what are you trying to do?', 'ajax-load-more' ) );
		}

		// phpcs:ignore
		$content = file_get_contents( ALM_LAYOUTS_PATH . 'layouts/' . $type . '.php' );
	}

	$return['value'] = $content;
	echo wp_json_encode( $return );
	wp_die();
}
add_action( 'wp_ajax_alm_get_layout', 'alm_get_layout' );

/**
 * Get the list of layout templates.
 *
 * @since 2.8.7
 */
function alm_get_layouts() {
	include ALM_PATH . 'admin/includes/components/layout-list.php';
}
add_action( 'alm_get_layouts', 'alm_get_layouts' );
