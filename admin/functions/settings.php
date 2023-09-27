<?php
/**
 * Register and save ALM plugin settings.
 *
 * @package AjaxLoadMore
 * @since   5.6
 */

/**
 * Initiate the plugin settings and create setting variables.
 *
 * @since 2.0.0
 */
function alm_admin_init() {
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

	add_settings_field( // Container type.
		'_alm_container_type',
		__( 'Container Type', 'ajax-load-more' ),
		'alm_container_type_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Classnames.
		'_alm_classname',
		__( 'Container Classes', 'ajax-load-more' ),
		'alm_class_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Disbale CSS.
		'_alm_disable_css',
		__( 'Disable CSS', 'ajax-load-more' ),
		'alm_disable_css_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Btn color.
		'_alm_btn_color',
		__( 'Button/Loading Style', 'ajax-load-more' ),
		'alm_btn_color_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Inline CSS.
		'_alm_inline_css',
		__( 'Load CSS Inline', 'ajax-load-more' ),
		'alm_inline_css_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Button classes.
		'_alm_btn_classname',
		__( 'Button Classes', 'ajax-load-more' ),
		'alm_btn_class_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Custom JavaScript.
		'_alm_custom_js',
		__( 'Custom JavaScript', 'ajax-load-more' ),
		'alm_custom_js_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	/* // phpcs:ignore
	add_settings_field(  // Disable REST API.
		'_alm_use_rest_api',
		__( 'REST API', 'ajax-load-more' ),
		'alm_use_rest_api_callback',
		'ajax-load-more',
		'alm_general_settings'
	);
	*/

	add_settings_field(  // Legacy Callbacks.
		'_alm_legacy_callbacks',
		__( 'Legacy Callbacks', 'ajax-load-more' ),
		'alm_legacy_callbacks_callback',
		'ajax-load-more',
		'alm_general_settings'
	);

	add_settings_field(  // Load dynamic queries.
		'_alm_disable_dynamic',
		__( 'Dynamic Content', 'ajax-load-more' ),
		'alm_disable_dynamic_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	add_settings_field(  // Display error notices.
		'_alm_error_notices',
		__( 'Error Notices', 'ajax-load-more' ),
		'alm_error_notices_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	add_settings_field(  // Uninstall.
		'_alm_uninstall',
		__( 'Delete on Uninstall', 'ajax-load-more' ),
		'alm_uninstall_callback',
		'ajax-load-more',
		'alm_admin_settings'
	);

	// CACHE.
	if ( has_action( 'alm_cache_settings' ) ) {
		do_action( 'alm_cache_settings' );
	}

	// CUSTOM REPEATERS.
	if ( has_action( 'alm_unlimited_settings' ) ) {
		do_action( 'alm_unlimited_settings' );
	}

	// FILTERS.
	if ( has_action( 'alm_filters_settings' ) ) {
		do_action( 'alm_filters_settings' );
	}

	// LAYOUTS.
	if ( has_action( 'alm_layouts_settings' ) ) {
		do_action( 'alm_layouts_settings' );
	}

	// NEXT PAGE.
	if ( has_action( 'alm_nextpage_settings' ) ) {
		do_action( 'alm_nextpage_settings' );
	}

	// PAGINATION.
	if ( has_action( 'alm_paging_settings' ) ) {
		do_action( 'alm_paging_settings' );
	}

	// PRELOADED.
	if ( has_action( 'alm_preloaded_settings' ) ) {
		do_action( 'alm_preloaded_settings' );
	}

	// REST API.
	if ( has_action( 'alm_rest_api_settings' ) ) {
		do_action( 'alm_rest_api_settings' );
	}

	// SEO.
	if ( has_action( 'alm_seo_settings' ) ) {
		do_action( 'alm_seo_settings' );
	}

	// SINGLE POST.
	if ( has_action( 'alm_prev_post_settings' ) ) {
		do_action( 'alm_prev_post_settings' );
	}

	// TABS.
	if ( has_action( 'alm_tabs_settings' ) ) {
		do_action( 'alm_tabs_settings' );
	}

	// THEME REPEATERS.
	if ( has_action( 'alm_theme_repeaters_settings' ) ) {
		do_action( 'alm_theme_repeaters_settings' );
	}

}
add_action( 'admin_init', 'alm_admin_init' );

/**
 * Some general settings text.
 *
 * @since 2.0.0
 */
function alm_general_settings_callback() {
	echo '<p>' . esc_html__( 'Customize the user experience of Ajax Load More by updating the fields below.', 'ajax-load-more' ) . '</p>';
}

/**
 * Some general admin settings text.
 *
 * @since 2.0.0
 */
function alm_admin_settings_callback() {
	echo '<p>' . esc_html__( 'The following settings affect the WordPress admin area only.', 'ajax-load-more' ) . '</p>';
}

/**
 * Sanitize our form fields.
 *
 * @param mixed $input The input values.
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
function alm_disable_css_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_disable_css'] ) ) {
		$options['_alm_disable_css'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_disable_css]" value="0" />';
	$html .= '<input type="checkbox" id="alm_disable_css_input" name="alm_settings[_alm_disable_css]" value="1"' . ( ( $options['_alm_disable_css'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="alm_disable_css_input">' . __( 'I want to use my own CSS styles.', 'ajax-load-more' ) . '<br/><span style="display:block;"><i class="fa fa-file-text-o"></i> &nbsp;<a href="' . ALM_URL . '/build/frontend/ajax-load-more.css" target="blank">' . __( 'View Ajax Load More CSS', 'ajax-load-more' ) . '</a></span></label>';

	echo $html; // phpcs:ignore
}

/**
 * Display admin error notices in browser console.
 *
 * @since 2.7.2
 */
function alm_error_notices_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_error_notices'] ) ) {
		$options['_alm_error_notices'] = '1';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_error_notices]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_error_notices]" id="_alm_error_notices" value="1"' . ( ( $options['_alm_error_notices'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_error_notices">' . __( 'Display error messaging regarding repeater template updates in the browser console.', 'ajax-load-more' ) . '</label>';

	echo $html; // phpcs:ignore
}

/**
 * Disable the dynamic population of categories, tags and authors
 *
 * @since 2.6.0
 */
function alm_disable_dynamic_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_disable_dynamic'] ) ) {
		$options['_alm_disable_dynamic'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_disable_dynamic]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_disable_dynamic]" id="_alm_disable_dynamic" value="1"' . ( ( $options['_alm_disable_dynamic'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_disable_dynamic">' . __( 'Disable dynamic population of categories, tags and authors in the Shortcode Builder.<span style="display:block">Recommended if you have a large number of categories, tags and/or authors.', 'ajax-load-more' ) . '</label>';

	echo $html; // phpcs:ignore
}

/**
 * The type of container ul or div
 *
 * @since 2.0.0
 */
function alm_container_type_callback() {

	$options = get_option( 'alm_settings' );

	if ( ! isset( $options['_alm_container_type'] ) ) {
		$options['_alm_container_type'] = '1';
	}

	$html  = '<input type="radio" id="_alm_container_type_one" name="alm_settings[_alm_container_type]" value="1"' . checked( 1, $options['_alm_container_type'], false ) . '/>';
	$html .= '<label for="_alm_container_type_one">&lt;ul&gt; <span style="padding-top: 2px;">&lt;!-- ' . __( 'Ajax Posts Here', 'ajax-load-more' ) . ' --&gt;</span> &lt;/ul&gt;</label><br/>';

	$html .= '<input type="radio" id="_alm_container_type_two" name="alm_settings[_alm_container_type]" value="2"' . checked( 2, $options['_alm_container_type'], false ) . '/>';
	$html .= '<label for="_alm_container_type_two">&lt;div&gt; <span style="padding-top: 2px;">&lt;!-- ' . __( 'Ajax Posts Here', 'ajax-load-more' ) . ' --&gt;</span> &lt;/div&gt;</label>';

	$html .= '<label style="cursor: default !important"><span style="display:block">' . __( 'You can modify the container type when building a shortcode.', 'ajax-load-more' ) . '</span></label>';

	echo $html; // phpcs:ignore

}

/**
 * Add classes to the Ajax Load More wrapper.
 *
 * @since 2.0.0
 */
function alm_class_callback() {
	$options = get_option( 'alm_settings' );
	$class   = isset( $options ) && isset( $options['_alm_classname'] ) ? $options['_alm_classname'] : '';

	$html  = '<label for="alm_settings[_alm_classname]">' . __( 'Add custom classes to the <i>.alm-listing</i> container - classes are applied globally and will appear with every instance of Ajax Load More. <span style="display:block">You can also add classes when building a shortcode.</span>', 'ajax-load-more' ) . '</label><br/>';
	$html .= '<input type="text" id="alm_settings[_alm_classname]" name="alm_settings[_alm_classname]" value="' . $class . '" placeholder="posts listing etc..." /> ';

	echo $html; // phpcs:ignore
}

/**
 * Get button color.
 *
 * @since 2.0.0
 */
function alm_btn_color_callback() {

	$options = get_option( 'alm_settings' );
	$type    = isset( $options ) && isset( $options['_alm_btn_color'] ) ? $options['_alm_btn_color'] : '';

	if ( ! isset( $type ) ) {
		$options['_alm_btn_color'] = '0';
	}

	$selected0 = '';
	if ( $type === 'default' ) {
		$selected0 = 'selected="selected"';
	}

	$selected1 = '';
	if ( $type === 'blue' ) {
		$selected1 = 'selected="selected"';
	}

	$selected2 = '';
	if ( $type === 'green' ) {
		$selected2 = 'selected="selected"';
	}

	$selected3 = '';
	if ( $type === 'red' ) {
		$selected3 = 'selected="selected"';
	}

	$selected4 = '';
	if ( $type === 'purple' ) {
		$selected4 = 'selected="selected"';
	}

	$selected5 = '';
	if ( $type === 'grey' ) {
		$selected5 = 'selected="selected"';
	}

	$selected6 = '';
	if ( $type === 'white' ) {
		$selected6 = 'selected="selected"';
	}

	$selected13 = '';
	if ( $type === 'light-grey' ) {
		$selected13 = 'selected="selected"';
	}

	$selected7 = '';
	if ( $type === 'infinite classic' ) {
		$selected7 = 'selected="selected"';
	}

	$selected8 = '';
	if ( $type === 'infinite skype' ) {
		$selected8 = 'selected="selected"';
	}

	$selected9 = '';
	if ( $type === 'infinite ring' ) {
		$selected9 = 'selected="selected"';
	}

	$selected10 = '';
	if ( $type === 'infinite fading-blocks' ) {
		$selected10 = 'selected="selected"';
	}

	$selected11 = '';
	if ( $type === 'infinite fading-circles' ) {
		$selected11 = 'selected="selected"';
	}

	$selected12 = '';
	if ( $type === 'infinite chasing-arrows' ) {
		$selected12 = 'selected="selected"';
	}

	$html  = '<label for="alm_settings_btn_color">' . __( 'Select an Ajax loading style - you can choose between a <strong>Button</strong> or <strong>Infinite Scroll</strong>', 'ajax-load-more' );
	$html .= '.<br/><span style="display:block">Selecting an Infinite Scroll style will remove the click interaction and load content on scroll <u>only</u>.</span>';
	$html .= '</label>';
	$html .= '<select id="alm_settings_btn_color" name="alm_settings[_alm_btn_color]">';

	$html .= '<optgroup label="' . __( 'Button Style (Dark)', 'ajax-load-more' ) . '">';
	$html .= '<option value="default" class="alm-color default" ' . $selected0 . '>Default</option>';
	$html .= '<option value="blue" class="alm-color blue" ' . $selected1 . '>Blue</option>';
	$html .= '<option value="green" class="alm-color green" ' . $selected2 . '>Green</option>';
	$html .= '<option value="purple" class="alm-color purple" ' . $selected4 . '>Purple</option>';
	$html .= '<option value="grey" class="alm-color grey" ' . $selected5 . '>Grey</option>';
	$html .= '</optgroup>';
	$html .= '<optgroup label="' . __( 'Button Style (Light)', 'ajax-load-more' ) . '">';
	$html .= '<option value="white" class="alm-color white" ' . $selected6 . '>White</option>';
	$html .= '<option value="light-grey" class="alm-color light-grey" ' . $selected13 . '>Light Grey</option>';
	$html .= '</optgroup>';

		$html .= '<optgroup label="' . __( 'Infinite Scroll (No Button)', 'ajax-load-more' ) . '">';
		$html .= '<option value="infinite classic" class="infinite classic" ' . $selected7 . '>Classic</option>';
		$html .= '<option value="infinite skype" class="infinite skype" ' . $selected8 . '>Skype</option>';
		$html .= '<option value="infinite ring" class="infinite ring" ' . $selected9 . '>Circle Fill</option>';
		$html .= '<option value="infinite fading-blocks" class="infinite fading-blocks" ' . $selected10 . '>Fading Blocks</option>';
		$html .= '<option value="infinite fading-circles" class="infinite fading-circles" ' . $selected11 . '>Fading Circles</option>';
		$html .= '<option value="infinite chasing-arrows" class="infinite chasing-arrows" ' . $selected12 . '>Chasing Arrows</option>';
		$html .= '</optgroup>';

	$html .= '</select>';

	// Set loading class for infinite type only.
	$loading_class = strpos( $type, 'infinite' ) !== false ? ' loading' : '';

	$html .= '<div class="clear"></div>';
	$html .= '<div class="ajax-load-more-wrap core ' . $type . '">';
	$html .= '<span>' . __( 'Click to Preview', 'ajax-load-more' ) . '</span>';
	$html .= '<div class="alm-btn-wrap">';
	$html .= '<button style="cursor: pointer;" type="button" class="alm-load-more-btn' . $loading_class . '" id="test-alm-button">' . apply_filters( 'alm_button_label', __( 'Load More', 'ajax-load-more' ) ) . '</button>';
	$html .= '</div>';
	$html .= '</div>';

	echo $html; // phpcs:ignore
}

/**
 * Load CSS Inline vs the head
 *
 * @since 3.3.1
 */
function alm_inline_css_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_inline_css'] ) ) {
		$options['_alm_inline_css'] = '1';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_inline_css]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_inline_css]" id="alm_inline_css" value="1"' . ( ( $options['_alm_inline_css'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="alm_inline_css">' . __( 'Improve site performance by loading Ajax Load More CSS inline.', 'ajax-load-more' ) . '</label>';

	echo $html; // phpcs:ignore
}

/**
 * Add classes to the Ajax Load More button
 *
 * @since 2.4.1
 */
function alm_btn_class_callback() {
	$options = get_option( 'alm_settings' );

	if ( ! isset( $options['_alm_btn_classname'] ) ) {
		$options['_alm_btn_classname'] = '';
	}

	$html  = '<label for="alm_settings[_alm_btn_classname]">' . __( 'Add classes to your <strong>Load More</strong> button.', 'ajax-load-more' ) . '</label>';
	$html .= '<input type="text" class="btn-classes" id="alm_settings[_alm_btn_classname]" name="alm_settings[_alm_btn_classname]" value="' . $options['_alm_btn_classname'] . '" placeholder="button bg-black rounded etc..." /> ';

	echo $html; // phpcs:ignore
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
 * Custom JS to the shortcode output.
 *
 * @since 5.5.4
 */
function alm_custom_js_callback() {
	$options = get_option( 'alm_settings' );
	$html    = '<label for="_alm_layouts_css">' . __( 'Enter custom JavaScript code.', 'ajax-load-more' ) . '</label>';
	$html   .= '<textarea id="_alm_custom_js" name="alm_settings[_alm_custom_js]" rows="5">';
	$html   .= isset( $options['_alm_custom_js'] ) ? $options['_alm_custom_js'] : '';
	$html   .= '</textarea>';
	$html   .= '<label><span style="display:block;">' . __( 'JavaScript will be rendered with every Ajax Load More instance.', 'ajax-load-more' ) . '</span></label>';

	echo $html; // phpcs:ignore
}

/**
 * Move window to top of screen on page load.
 *
 * @since 2.6.0
 */
function alm_scroll_top_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_scroll_top'] ) ) {
		$options['_alm_scroll_top'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_scroll_top]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_scroll_top]" id="_alm_scroll_top" value="1"' . ( ( $options['_alm_scroll_top'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_scroll_top">';
	$html .= __( 'On initial page load, move the user\'s browser window to the top of the screen.', 'ajax-load-more' );
	$html .= '<span style="display:block">' . __( 'This may help prevent the loading of unnecessary posts.', 'ajax-load-more' ) . '</span>';
	$html .= '</label>';

	echo $html; // phpcs:ignore
}

/**
 * Disable REST API in favor of admin-ajax.php.
 *
 * @since 5.1
 */
function alm_use_rest_api_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_use_rest_api'] ) ) {
		$options['_alm_use_rest_api'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_use_rest_api]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_use_rest_api]" id="_alm_use_rest_api" value="1"' . ( ( $options['_alm_use_rest_api'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_use_rest_api">';
	$html .= __( 'Disable REST API.', 'ajax-load-more' );
	$html .= '<span style="display:block">' . __( 'Use `admin-ajax.php` in favour of the WordPress REST API for all Ajax requests.', 'ajax-load-more' ) . '</span>';
	$html .= '</label>';

	echo $html; // phpcs:ignore
}

/**
 * Load legacy callback actions.
 *
 * @since 5.0.0
 */
function alm_legacy_callbacks_callback() {
	$options = get_option( 'alm_settings' );
	if ( ! isset( $options['_alm_legacy_callbacks'] ) ) {
		$options['_alm_legacy_callbacks'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_legacy_callbacks]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_legacy_callbacks]" id="_alm_legacy_callbacks" value="1"' . ( ( $options['_alm_legacy_callbacks'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_legacy_callbacks">';
	$html .= __( 'Load legacy JavaScript callback functions.', 'ajax-load-more' );
	$html .= '<span style="display:block">' . __( 'Ajax Load More <a href="https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/" target="_blank">callback functions</a> were updated in 5.0. Users who were using callbacks prior to ALM 5.0 can load this helper library to maintain compatibility.', 'ajax-load-more' ) . '</span>';
	$html .= '</label>';

	echo $html; // phpcs:ignore
}

/**
 * Remove all ALM data on uninstall.
 *
 * @since 4.1.0
 */
function alm_uninstall_callback() {
	$options = get_option( 'alm_settings' );

	if ( ! isset( $options['_alm_uninstall'] ) ) {
		$options['_alm_uninstall'] = '0';
	}

	$html  = '<input type="hidden" name="alm_settings[_alm_uninstall]" value="0" />';
	$html .= '<input type="checkbox" name="alm_settings[_alm_uninstall]" id="_alm_uninstall" value="1"' . ( ( $options['_alm_uninstall'] ) ? ' checked="checked"' : '' ) . ' />';
	$html .= '<label for="_alm_uninstall">' . __( 'Check this box if Ajax Load More should remove all of its data* when the plugin is deleted.', 'ajax-load-more' );
	$html .= '<span style="display:block"><em>' . __( '* Database Tables, Options and Repeater Templates', 'ajax-load-more' ) . '</em></span>';
	$html .= '</label>';

	echo $html; // phpcs:ignore
}
