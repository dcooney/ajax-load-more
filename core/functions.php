<?php
/**
 * ALM functions and core helpers.
 *
 * @package  AjaxLoadMore
 * @since    2.0.0
 */

/**
 * Include these files.
 */
require_once ALM_PATH . 'core/functions/addons.php';
require_once ALM_PATH . 'core/functions/masonry.php';
require_once ALM_PATH . 'core/functions/deprecated.php';

/**
 * If progress bar, add the CSS styles for the bar.
 *
 * @param int    $counter  The current ALM instance count.
 * @param string $progress Is progress bar enabled.
 * @param string $color    The progress bar color.
 * @return string          Style tag as raw HTML.
 * @since 3.1.0
 */
function alm_progress_css( $counter, $progress, $color ) {
	if ( $counter === 1 && $progress === 'true' ) {
		$style = '
<style>
.pace { -webkit-pointer-events: none; pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; }
.pace-inactive { display: none; }
.pace .pace-progress { background: #' . esc_attr( $color ) . '; position: fixed; z-index: 2000; top: 0; right: 100%; width: 100%; height: 5px; -webkit-box-shadow: 0 0 3px rgba(255, 255, 255, 0.3); box-shadow: 0 0 2px rgba(255, 255, 255, 0.3); }
</style>';
		return $style;
	}
}
add_filter( 'alm_progress_css', 'alm_progress_css', 10, 3 );

/**
 * Is ALM CSS disabled.
 *
 * @param  string $setting The name of the setting field.
 * @return boolean         Is it enabed or disabled.
 * @since 3.3.1
 */
function alm_css_disabled( $setting ) {
	$options  = get_option( 'alm_settings' );
	$disabled = true;
	if ( ! isset( $options[ $setting ] ) || $options[ $setting ] !== '1' ) {
		$disabled = false;
	}
	return $disabled;
}

/**
 * Load ALM CSS inline.
 *
 * @param string $setting The name of the setting field.
 * @return boolean         Is it inline or in a file.
 * @since 3.3.1
 */
function alm_do_inline_css( $setting ) {
	if ( defined( 'REST_REQUEST' ) ) {
		// Exit if this is a REST API request.
		if ( REST_REQUEST ) {
			return false;
		}
	}

	$options = get_option( 'alm_settings' );
	$inline  = false;
	if ( ! isset( $options[ $setting ] ) || $options[ $setting ] === '1' ) {
		$inline = true;
	}
	return $inline;
}

/**
 * This function will return HTML of a looped item.
 *
 * @param string  $repeater        The repeater name.
 * @param string  $type            Type of template.
 * @param string  $theme_repeater  Theme repeater name.
 * @param string  $alm_found_posts Total posts found.
 * @param string  $alm_page        The page number.
 * @param string  $alm_item        Current item in loop.
 * @param string  $alm_current     Current item in page.
 * @param array   $args            The ALM Args.
 * @param boolean $ob              Should the loop return as an output buffer.
 * @return string
 * @since 3.7
 */
function alm_loop( $repeater, $type, $theme_repeater, $alm_found_posts = '', $alm_page = '', $alm_item = '', $alm_current = '', $args = [], $ob = true ) {
	if ( $ob ) { // If Output Buffer is true.
		ob_start();
	}

	if ( $theme_repeater !== 'null' && has_filter( 'alm_get_theme_repeater' ) ) {
		// Theme Repeaters.
		do_action( 'alm_get_theme_repeater', $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, $args );

	} else {
		// Standard Repeater Template.
		$file = alm_get_current_repeater( $repeater, $type );
		include $file;
	}

	if ( $ob ) { // If Output Buffer is true.
		$html = ob_get_contents();
		ob_end_clean();
		return $html;
	}
}

/**
 * Get the current repeater template file.
 *
 * @param string $repeater current repater name.
 * @param string $type Type of template.
 * @return $include (file path)
 * @since 2.5.0
 */
function alm_get_current_repeater( $repeater, $type ) {

	$template = $repeater;
	$include  = '';

	if ( 'repeater' === $type && has_action( 'alm_repeater_installed' ) ) {
		// Custom Repeaters v1.
		$include = ALM_REPEATER_PATH . 'repeaters/' . $template . '.php';
		if ( ! file_exists( $include ) ) {
			alm_get_default_repeater(); // Confirm file exists.
		}
	} elseif ( 'template_' === $type && has_action( 'alm_unlimited_installed' ) ) {
		// Custom Repeaters 2.5+.
		if ( ALM_UNLIMITED_VERSION >= '2.5' ) {
			// Get path to repeater (alm_templates).
			$base_dir = AjaxLoadMore::alm_get_repeater_path();
			$include  = $base_dir . '/' . $template . '.php';

		} else {
			global $wpdb;
			$blog_id = $wpdb->blogid;
			$include = ( $blog_id > 1 ) ? ALM_UNLIMITED_PATH . 'repeaters/' . $blog_id . '/' . $template . '.php' : ALM_UNLIMITED_PATH . 'repeaters/' . $template . '.php';

		}

		if ( ! file_exists( $include ) ) {
			$include = alm_get_default_repeater(); // Confirm file exists.
		}
	} else {
		// Default repeater.
		$include = alm_get_default_repeater();

	}

	// Security check.
	// Confirm $template does NOT contains relative path.
	if ( false !== strpos( $template, './' ) ) {
		$include = alm_get_default_repeater();
	}

	return $include;
}

/**
 * Get the default repeater template for current blog.
 *
 * @return $include (file path)
 * @since 2.5.0
 */
function alm_get_default_repeater() {

	global $wpdb;
	$file         = null;
	$template_dir = apply_filters( 'alm_template_path', 'alm_templates' );

	// Allow user to load template from theme directory.

	// Load repeater template from current theme folder.
	if ( is_child_theme() ) {
		$template_theme_file = get_stylesheet_directory() . '/' . $template_dir . '/default.php';
		// If child theme does not have repeater template, then use the parent theme dir.
		if ( ! file_exists( $template_theme_file ) ) {
			$template_theme_file = get_template_directory() . '/' . $template_dir . '/default.php';
		}
	} else {
		$template_theme_file = get_template_directory() . '/' . $template_dir . '/default.php';
	}

	// If theme or child theme contains the template, use that file.
	if ( file_exists( $template_theme_file ) ) {
		$file = $template_theme_file;
	}

	// @since 2.0.
	// @updated 3.5.
	if ( $file === null ) {
		$file = AjaxLoadMore::alm_get_repeater_path() . '/default.php';
	}

	return $file;
}

/**
 * Query by post format.
 *
 * @since 2.5.0
 * @param string $post_format The current post format.
 * @return array The WP_Query args.
 */
function alm_get_post_format( $post_format ) {
	if ( ! empty( $post_format ) ) {
		$format = "post-format-$post_format";
		// If query is for standard then we need to filter by NOT IN.
		if ( 'post-format-standard' === $format ) {
			$post_formats = get_theme_support( 'post-formats' );
			if ( $post_formats && is_array( $post_formats[0] ) && count( $post_formats[0] ) ) {
				$terms = array();
				foreach ( $post_formats[0] as $format ) {
					$terms[] = 'post-format-' . $format;
				}
			}
			$return = array(
				'taxonomy' => 'post_format',
				'terms'    => $terms,
				'field'    => 'slug',
				'operator' => 'NOT IN',
			);
		} else {
			$return = array(
				'taxonomy' => 'post_format',
				'field'    => 'slug',
				'terms'    => array( $format ),
			);
		}
		return $return;
	}
}

/**
 * Query for custom taxonomy.
 *
 * @see https://developer.wordpress.org/reference/classes/wp_query/#taxonomy-parameters
 *
 * @param  string  $taxonomy Taxonomy slug.
 * @param  string  $terms    Taxonomy terms.
 * @param  string  $operator Taxonomy operator.
 * @param  boolean $children Taxonomy include_children.
 * @return array             Taxonomy query array.
 * @since 2.8.5
 */
function alm_get_taxonomy_query( $taxonomy = '', $terms = '', $operator = 'IN', $children = true ) {
	if ( ! empty( $taxonomy ) && ! empty( $terms ) ) {
		$values           = alm_parse_tax_terms( $terms );
		$include_children = $children !== 'false' ? true : false;
		$query            = [
			'taxonomy'         => $taxonomy,
			'field'            => 'slug',
			'terms'            => $values,
			'operator'         => $operator,
			'include_children' => $include_children,
		];
		return $query;
	}
}

/**
 * Parse the taxonomy terms for multiple vals.
 *
 * @since 2.8.5
 * @param string $terms The taxonomy terms.
 * @return array
 */
function alm_parse_tax_terms( $terms ) {
	// Remove all whitespace for $taxonomy_terms because it needs to be an exact match.
	$terms = preg_replace( '/\s+/', ' ', $terms );
	// Remove all spaces by replacing [term, term] with [term,term].
	$terms = str_replace( ', ', ',', $terms );
	// Create array from string.
	$terms = explode( ',', $terms );
	return $terms;
}

/**
 * Query by custom field values.
 *
 * @since 2.5.0
 * @param  array $array The array of meta query parameters.
 * @return array        The WP_Query args.
 */
function alm_get_meta_query( $array ) {
	$meta_key     = esc_sql( $array['key'] );
	$meta_value   = esc_sql( $array['value'] );
	$meta_compare = esc_sql( $array['compare'] );
	$meta_type    = esc_sql( $array['type'] );

	if ( ! empty( $meta_key ) ) {
		// do_shortcode fix (shortcode was rendering as HTML when using < OR  <==).
		$meta_compare = 'lessthan' === $meta_compare ? '<' : $meta_compare;
		$meta_compare = 'lessthanequalto' === $meta_compare ? '<=' : $meta_compare;
		$meta_compare = 'greaterthan' === $meta_compare ? '>' : $meta_compare;
		$meta_compare = 'greatthanequalto' === $meta_compare ? '>=' : $meta_compare;

		// Get optimized `meta_value` parameter.
		$meta_values = alm_parse_meta_value( $meta_value, $meta_compare );

		// Clear $meta_values if empty.
		if ( $meta_values === '' ) {
			unset( $meta_values );
		}

		if ( isset( $meta_values ) ) {
			$args = [
				'key'     => $meta_key,
				'value'   => $meta_values,
				'compare' => $meta_compare,
				'type'    => $meta_type,
			];
		} else {
			// If $meta_values is empty, don't query for 'value'.
			$args = [
				'key'     => $meta_key,
				'compare' => $meta_compare,
				'type'    => $meta_type,
			];
		}
		return $args;
	}
}

/**
 * Create the name for the meta query.
 * Note: This is required to use custom ordering.
 * eg. `Country Code` = `country_code_clause`
 *
 * @see https://wordpress.stackexchange.com/questions/246355/order-by-multiple-meta-key-and-meta-value/246358#246358
 *
 * @param string $key The meta key name.
 * @return string     Formatted meta name.
 */
function alm_create_meta_clause( $key ) {
	$key = preg_replace( '/\s+/', '_', $key );
	return strtolower( $key . '_clause' );
}

/**
 * Parse the meta value for multiple values.
 *
 * @since 2.6.4
 * @param string $meta_value   The meta value.
 * @param string $meta_compare The compare operator.
 * @return array
 */
function alm_parse_meta_value( $meta_value, $meta_compare ) {
	// Meta Query Docs (http://codex.wordpress.org/Class_Reference/WP_Meta_Query).
	$meta_array = array( 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN' );

	if ( in_array( $meta_compare, $meta_array, true ) ) {
		// Remove all whitespace for meta_value because it needs to be an exact match.
		$mv_trimmed  = preg_replace( '/\s+/', ' ', $meta_value ); // Trim whitespace.
		$meta_values = str_replace( ', ', ',', $mv_trimmed ); // Replace [term, term] with [term,term].
		$meta_values = '' === $meta_values ? '' : explode( ',', $meta_values );
	} else {
		$meta_values = $meta_value;
	}
	return $meta_values;
}

/**
 * Get type of repeater.
 *
 * @since 2.9
 * @param string $repeater The Repeater Template name.
 * @return string          The Repeater Template type.
 */
function alm_get_repeater_type( $repeater ) {
	$type = preg_split( '/(?=\d)/', $repeater, 2 ); // Split $repeater value at number to determine type.
	$type = $type[0]; // default | repeater | template_.
	return $type;
}

/**
 * Get current page base URL.
 *
 * @since 2.12
 * @return string The URL.
 */
function alm_get_canonical_url() {

	$canonical_url = '';

	if ( is_date() ) {
		// Date Archive.
		$archive_year  = get_the_date( 'Y' );
		$archive_month = get_the_date( 'm' );
		$archive_day   = get_the_date( 'd' );
		if ( is_year() ) {
			$canonical_url = get_year_link( $archive_year );
		}
		if ( is_month() ) {
			$canonical_url = get_month_link( $archive_year, $archive_month );
		}
		if ( is_day() ) {
			$canonical_url = get_month_link( $archive_year, $archive_month, $archive_day );
		}
	} elseif ( is_front_page() ) {
		// Frontpage.
		if ( function_exists( 'pll_home_url' ) ) { // Polylang support.
			$canonical_url = pll_home_url();
		} else {
			$canonical_url = get_home_url() . apply_filters( 'alm_canonical_frontpage_trailing_slash', true ) ? '/' : '';
			// e.g. add_filter('alm_canonical_frontpage_trailing_slash', '__return_false').
		}
	} elseif ( is_home() ) {
		// Home (Blog Default).
		$canonical_url = get_permalink( get_option( 'page_for_posts' ) );

	} elseif ( is_category() ) {
		// Category.
		$cat_id        = get_query_var( 'cat' );
		$canonical_url = get_category_link( $cat_id );

	} elseif ( is_tag() ) {
		// Tag.
		$tag_id        = get_query_var( 'tag_id' );
		$canonical_url = get_tag_link( $tag_id );
	} elseif ( is_author() ) {
		// Author.
		$author_id     = get_the_author_meta( 'ID' );
		$canonical_url = get_author_posts_url( $author_id );

	} elseif ( is_tax() ) {
		// Taxonomy.
		$tax_term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
		if ( $tax_term ) {
			$tax_id        = $tax_term->term_id;
			$canonical_url = get_term_link( $tax_id );
		}
	} elseif ( is_post_type_archive() ) {
		// Post Type.
		$post_type_archive = get_post_type();
		$canonical_url     = get_post_type_archive_link( $post_type_archive );

	} elseif ( is_search() ) {
		// Search.
		$canonical_url = get_home_url() . apply_filters( 'alm_canonical_frontpage_trailing_slash', true ) ? '/' : '';

	} else {
		// Fallback.
		$canonical_url = get_permalink();
	}

	return $canonical_url;
}

/**
 * Get current page slug.
 *
 * @since 2.13.0
 * @param object $post The current Post object.
 * @return string The Post ID.
 */
function alm_get_page_slug( $post ) {

	// Exit if admin.
	if ( is_admin() ) {
		return false;
	}

	if ( ! is_archive() ) {
		// If not archive, set the post slug.
		if ( is_front_page() || is_home() || is_404() ) {
			$slug = 'home';
		} else {
			if ( is_search() ) {
				// Search.
				$search_query = get_search_query();
				if ( $search_query ) {
					$slug = "?s=$search_query";
				} else {
					$slug = '?s=';
				}
			} else {
				$slug = $post->post_name;
			}
		}
	} else {
		if ( is_tax() ) {
			// Tax.
			$queried_object = get_queried_object();
			$slug           = $queried_object->slug;
		} elseif ( is_category() ) {
			// Category.
			$cat      = get_query_var( 'cat' );
			$category = get_category( $cat );
			$slug     = $category->slug;
		} elseif ( is_tag() ) {
			// Tag.
			$slug = get_query_var( 'tag' );
		} elseif ( is_author() ) {
			// Author.
			$slug = get_the_author_meta( 'ID' );
		} elseif ( is_post_type_archive() ) {
			// Post Type Archive.
			$slug = get_post_type();
		} elseif ( is_date() ) {
			// Date Archive.
			$archive_year  = get_the_date( 'Y' );
			$archive_month = get_the_date( 'm' );
			$archive_day   = get_the_date( 'd' );
			if ( is_year() ) {
				$slug = $archive_year;
			}
			if ( is_month() ) {
				$slug = $archive_year . '-' . $archive_month;
			}
			if ( is_day() ) {
				$slug = $archive_year . '-' . $archive_month . '-' . $archive_day;
			}
		} else {
			$slug = '';
		}
	}

	return $slug;
}


/**
 * Get current page ID.
 *
 * @since 3.0.1
 * @param object $post The current Post object.
 * @return string The Post ID.
 */
function alm_get_page_id( $post ) {

	// Exit if admin.
	if ( is_admin() ) {
		return false;
	}

	$post_id = '';

	if ( ! is_archive() ) {
		// If not an archive page, set the post slug.
		if ( is_front_page() || is_home() || is_404() ) {
			$post_id = '0';
		} else {
			// Search.
			if ( is_search() ) {
				$search_query = get_search_query();
				if ( $search_query ) {
					$post_id = "$search_query";
				}
			} else {
				$post_id = $post->ID;
			}
		}
	} else {
		if ( is_tax() || is_tag() || is_category() ) {
			// Tax.
			$queried_object = get_queried_object();
			$post_id        = $queried_object->term_id;
		} elseif ( is_author() ) {
			// Author.
			$post_id = get_the_author_meta( 'ID' );
		} elseif ( is_post_type_archive() ) {
			// Post Type Archive.
			$post_id = get_post_type();
		} elseif ( is_date() ) {
			// Date Archive.
			$archive_year  = get_the_date( 'Y' );
			$archive_month = get_the_date( 'm' );
			$archive_day   = get_the_date( 'd' );
			if ( is_year() ) {
				$post_id = $archive_year;
			}
			if ( is_month() ) {
				$post_id = $archive_year . '-' . $archive_month;
			}
			if ( is_day() ) {
				$post_id = $archive_year . '-' . $archive_month . '-' . $archive_day;
			}
		}
	}

	return $post_id;
}

/**
 * Get query param of start page (paged, page).
 *
 * @since 2.14.0
 * @return string
 */
function alm_get_startpage() {
	if ( get_query_var( 'paged' ) ) {
		$start_page = get_query_var( 'paged' );
	} elseif ( get_query_var( 'page' ) ) {
		$start_page = get_query_var( 'page' );
	} else {
		$start_page = 1;
	}
	return $start_page;
}

/**
 * Debug helper for printing variables to screen.
 *
 * @since 3.7
 * @param object $query The current WP_Query.
 */
function alm_pretty_print( $query ) {
	if ( $query ) {
		echo '<pre>';
		print_r( $query ); // phpcs:ignore
		echo '</pre>';
	}
}

/**
 * Shorter debug helper for printing variables to screen.
 *
 * @param object $query The current WP_Query.
 * @param string $title Optional display title.
 * @since 5.5.1
 */
function alm_print( $query = '', $title = '' ) {
	if ( $title ) {
		echo esc_html( $title );
	}
	alm_pretty_print( $query );
}

/**
 * Convert dashes to underscores.
 *
 * @param string $string String to convert.
 * @return string The converted string without dashes.
 * @since 3.7
 */
function alm_convert_dashes_to_underscore( $string = '' ) {
	return str_replace( '-', '_', $string );
}

/**
 * Remove posts if post__not_in is set in the ALM shortcode.
 *
 * @param array $ids Post IDs.
 * @param array $not_in Array of not in post IDs.
 * @return array The Post IDs.
 * @since 3.7
 */
function alm_sticky_post__not_in( $ids = '', $not_in = '' ) {
	if ( ! empty( $not_in ) ) {
		$new_array = array();
		foreach ( $ids as $id ) {
			if ( ! in_array( $id, $not_in, true ) ) {
				array_push( $new_array, $id );
			}
		}
		$ids = $new_array;
	}
	return $ids;
}

/**
 * Check if the current query is an ALM query.
 *
 * @since 5.5.1
 * @return boolean
 */
function is_alm_query() {
	global $is_alm_query;
	return $is_alm_query;
}

/**
 * Get the current ALM query.
 *
 * @since 5.5.1
 * @return \WP_Query
 */
function wp_alm_query() {
	global $wp_alm_query;
	return $wp_alm_query;
}
