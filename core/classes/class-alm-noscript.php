<?php
/**
 * Class that generates a wp_query for injection into <noscript />.
 *
 * @package  ajaxloadmore
 * @since    3.7
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'ALM_NOSCRIPT' ) ) :

	class ALM_NOSCRIPT {

		/**
		 * Element tag.
		 */
		static $element = 'noscript';

		/**
		 * This function will return a generated query for the noscript.
		 *
		 * @since 1.8
		 * @param array  $q
		 * @param string $container
		 * @return HTMLElement
		 */
		public static function alm_get_noscript( $q, $container = 'ul', $css_classes = '', $transition_container_classes = '' ) {

			$paged   = $q['paged'] ? $q['paged'] : 1;
			$filters = $q['filters'] ? $q['filters'] : false;

			// Comments.
			if ( $q['comments'] ) {
				if ( has_action( 'alm_comments_installed' ) && $q['comments'] ) {
					// SEO does not support comments at this time
				}
			}

			// Users.
			elseif ( $q['users'] ) {

				if ( has_action( 'alm_users_preloaded' ) && $q['users'] ) {

					// Encrypt User Role
					if ( ! empty( $q['users_role'] ) && function_exists( 'alm_role_encrypt' ) ) {
						$q['users_role'] = alm_role_encrypt( $q['users_role'] );
					}

					// Update offset
					$q['offset'] = self::set_offset( $paged, $q['users_per_page'], $q['offset'] );

					// Build output
					$output = apply_filters( 'alm_users_preloaded', $q, $q['users_per_page'], $q['repeater'], $q['theme_repeater'] ); // located in Users add-on

					return self::render( $output['data'], $container, '', $css_classes, $transition_container_classes );
				}
			}

			// Advanced Custom Fields (Repeater, Gallery, Flex Content.
			elseif ( $q['acf'] && ( $q['acf_field_type'] !== 'relationship' ) ) {
				if ( has_action( 'alm_acf_installed' ) && $q['acf'] ) {

					// Update offset
					$q['offset'] = self::set_offset( $paged, $q['posts_per_page'], $q['offset'] );

					// Build output
					$output = apply_filters( 'alm_acf_preloaded', $q, $q['repeater'], $q['theme_repeater'] ); // located in ACF add-on

					return self::render( $output, $container, '', $css_classes, $transition_container_classes );
				}
			}

			// Standard ALM.
			else {

				// Build the $args array to use with this WP_Query.
				$query_args = ALM_QUERY_ARGS::alm_build_queryargs( $q, false );

				/**
				 * ALM Core Filter Hook
				 *
				 * @return $query_args;
				*/
				$query_args = apply_filters( 'alm_query_args_' . $q['id'], $query_args, $q['post_id'] );

				$posts_per_page = $query_args['posts_per_page'];
				$type           = alm_get_repeater_type( $q['repeater'] );

				// Update offset.
				$query_args['paged']  = $paged;
				$query_args['offset'] = self::set_offset( $paged, $posts_per_page, $q['offset'] );

				$output = '';
				$i      = 0;

				$noscript_query = new WP_Query( $query_args );

				if ( $noscript_query->have_posts() ) :

					$alm_found_posts = $noscript_query->found_posts;
					$alm_page        = $paged;

					while ( $noscript_query->have_posts() ) :
						$noscript_query->the_post();
						$i++;
						$alm_current = $i;
						$alm_item    = $query_args['offset'] + $i;

						$output .= alm_loop( $q['repeater'], $type, $q['theme_repeater'], $alm_found_posts, $alm_page, $alm_item, $alm_current, $query_args );

					endwhile;
					wp_reset_query();

				endif;

				$paging = self::build_noscript_paging( $noscript_query, $filters );

				return self::render( $output, $container, $paging, $css_classes, $transition_container_classes );

			}
		}

		/**
		 * Create paging navigation.
		 *
		 * @since 2.8.3
		 * @param array   $query The current query array.
		 * @param boolean $filters Is this a Filters add-on URL.
		 * @return HTMLElement
		 */
		public static function build_noscript_paging( $query = [], $filters = false ) {
			global $post;

			// Set up function variables.
			$paged          = empty( get_query_var( 'paged' ) ) ? 1 : get_query_var( 'paged' );
			$numposts       = $query->found_posts;
			$max_page       = $query->max_num_pages;
			$posts_per_page = $query->query_vars['posts_per_page'];
			$total          = ceil( $numposts / $posts_per_page );
			$permalink      = get_permalink();
			$start_page     = 1;
			$content        = '';

			// Get existing querystring and build array.
			parse_str( $_SERVER['QUERY_STRING'], $querystring );

			if ( $total > 1 ) {

				$content .= '<div class="alm-paging">';
				$content .= __( 'Pages: ', 'ajax-load-more' );

				// Loop pages.
				for ( $i = $start_page; $i <= $total; $i++ ) {
					if ( $filters ) {
						$querystring['pg'] = $i;
						$url               = $permalink . '?' . http_build_query( $querystring );
					} else {
						$url = get_pagenum_link( $i );
					}
					$content .= '<span class="page"><a href="' . $url . '">' . $i . '</a></span>';
				}

				$content .= '</div>';
			}

			return $content;

		}

		/**
		 * This function will return the HTML output of the <noscript/>.
		 *
		 * @since 1.8
		 * @param string $output The noscript output.
		 * @param string $container The ALM container.
		 * @param string $paging ALM paging.
		 * @param string $css_classes Custom CSS classes.
		 * @param string $transition_container_classes Transition classes.
		 * @return HTMLElement
		 */
		public static function render( $output, $container, $paging, $css_classes, $transition_container_classes ) {
			return ( ! empty( $output ) ) ? '<' . self::$element . '><' . $container . ' class="alm-listing alm-noscript' . $css_classes . '"><div class="alm-reveal' . $transition_container_classes . '">' . $output . '</div></' . $container . '>' . $paging . '</' . self::$element . '>' : '';
		}

		/**
		 * This function will set the offset of the noscript query
		 *
		 * @since 1.8
		 * @param string $paged
		 * @param string $per_page
		 * @param string $offset
		 * @return int
		 */
		public static function set_offset( $paged, $per_page, $offset ) {
			return ( $paged * $per_page ) - $per_page + $offset;
		}

	}

endif;
