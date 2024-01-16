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
		}


		/**
		 * Register the Ajax Load More WP Block.
		 *
		 * @return void
		 */
		public function alm_register_block() {
			register_block_type( ALM_PATH . 'build/block/' );
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
	}

	new ALM_BLOCK();
endif;
