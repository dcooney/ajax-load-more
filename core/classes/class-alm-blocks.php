<?php
/**
 * Class for WP Block related functionality.
 *
 * @package AjaxLoadMore
 * @since   8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'ALM_BLOCK' ) ) :

	/**
	 * Initiate the class.
	 */
	class ALM_BLOCK {

		/**
		 * Class Constructor.
		 */
		public function __construct() {
			add_action( 'init', [ $this, 'alm_register_block' ] );
			add_filter( 'block_categories_all', [ $this, 'alm_add_block_category' ] );
			add_action( 'enqueue_block_editor_assets', [ $this, 'alm_block_editor_assets' ] );
		}

		/**
		 * Enqueue block editor assets.
		 *
		 * @return void
		 */
		public function alm_block_editor_assets() {
			// Load Core ALM assets.
			if ( ! alm_css_disabled( '_alm_disable_css' ) ) {
				ALM_ENQUEUE::alm_enqueue_css(
					ALM_SLUG,
					ALM_CSS_URL,
					false
				);
			}
			wp_register_script( 'ajax-load-more', ALM_CORE_JS_URL, [], ALM_VERSION, true ); // Register Core ALM JS.
			wp_localize_script(
				'ajax-load-more',
				'alm_localize',
				AjaxLoadMore::alm_get_localized_defaults()
			); // Localized JS variables.

			// Filters.
			if ( has_action( 'alm_filters_installed' ) && class_exists( 'ALMFilters') ) {
				if ( ! alm_css_disabled( '_alm_filters_disable_css' ) ) {
					ALM_ENQUEUE::alm_enqueue_css(
						ALM_FILTERS_SLUG,
						ALM_FILTERS_URL . '/dist/css/styles.css',
						false
					);
				}
				wp_localize_script(
					'ajax-load-more',
					'alm_filters_localize',
					[
						'filters' => ALMFilters::alm_get_all_filters(),
						'prefix'  => ALM_FILTERS_PREFIX,
					]
				); // Localized JS variables.
			}

			// Layouts.
			if ( has_action( 'alm_layouts_installed' ) && class_exists( 'ALMLayouts') ) {
				ALM_ENQUEUE::alm_enqueue_css(
					'ajax-load-more-layouts',
					ALM_LAYOUTS_URL . '/core/css/ajax-load-more-layouts.css',
					false
				);
			}

			// Paging.
			if ( has_action( 'alm_paging_installed' ) && class_exists( 'ALM_Paging') ) {
				if ( ! alm_css_disabled( '_alm_paging_disable_css' ) ) {
					ALM_ENQUEUE::alm_enqueue_css(
						'ajax-load-more-paging',
						ALM_PAGING_URL . '/core/css/ajax-load-more-paging.css',
						false
					);
				}
				wp_register_script( 'ajax-load-more-paging', ALM_PAGING_URL . '/core/js/alm-paging.js', [], ALM_PAGING_VERSION, true ); // Register Core ALM JS.
			}
		}

		/**
		 * Register the Ajax Load More WP Block.
		 *
		 * @return void
		 */
		public function alm_register_block() {
			register_block_type( ALM_PATH . 'build/blocks/core/' );
			register_block_type( ALM_PATH . 'build/blocks/filter/' );
		}

		/**
		 * Add custom block category.
		 *
		 * @param  array $categories The existing block categories.
		 * @return array             New array of categories.
		 */
		public function alm_add_block_category( $categories ) {
			return array_merge(
				[
					[
						'slug'  => 'ajax-load-more',
						'title' => 'Ajax Load More',
					],
				],
				$categories
			);
		}

		/**
		 * Display a block editor message for site editors.
		 *
		 * @param string $title The title of the message.
		 * @param string $desc  The description of the message.
		 * @return void
		 */
		public static function alm_block_editor_message( $title, $desc ) {
			if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			?>
				<div class="ajax-load-more-block-selector">
					<h3><?php echo esc_attr( $title ); ?></h3>
					<div>
						<span class="dashicons dashicons-warning"></span>
						<?php echo esc_attr( $desc ); ?>
					</div>
				</div>
				<?php
			}
		}
	}

	new ALM_BLOCK();
endif;
