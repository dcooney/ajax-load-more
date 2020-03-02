<?php
/*
Plugin Name: Ajax Load More
Plugin URI: https://connekthq.com/plugins/ajax-load-more
Description: The ultimate solution to add infinite scroll functionality to your website.
Text Domain: ajax-load-more
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: https://connekthq.com
Version: 5.1.8
License: GPL
Copyright: Darren Cooney & Connekt Media
*/


define('ALM_VERSION', '5.1.8');
define('ALM_RELEASE', 'March 2, 2020');
define('ALM_STORE_URL', 'https://connekthq.com');



/**
 * alm_install
 * Activation hook - Create table & repeater
 *
 * @since 2.0.0
 */

function alm_install($network_wide) {

   global $wpdb;
	add_option( "alm_version", ALM_VERSION ); // Add to WP Option tbl
   if ( is_multisite() && $network_wide ) {
      // Get all blogs in the network and activate plugin on each one
      $blog_ids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs" );
      foreach ( $blog_ids as $blog_id ) {
         switch_to_blog( $blog_id );
         alm_create_table();
         restore_current_blog();
      }
   } else {
      alm_create_table();
   }

}
register_activation_hook( __FILE__, 'alm_install' );
add_action( 'wpmu_new_blog', 'alm_install' );



/**
 * alm_create_table
 * Create new table and repeater template
 *
 * @since 2.0.0
 * @updated 3.5
 */
function alm_create_table(){

	global $wpdb;
	$table_name = $wpdb->prefix . "alm";
	$blog_id = $wpdb->blogid;

	$defaultRepeater = '<li <?php if (!has_post_thumbnail()) { ?> class="no-img"<?php } ?>>'. PHP_EOL .'   <?php if ( has_post_thumbnail() ) { the_post_thumbnail(\'alm-thumbnail\'); }?>'. PHP_EOL .'   <h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>'. PHP_EOL .'   <p class="entry-meta"><?php the_time("F d, Y"); ?></p>'. PHP_EOL .'   <?php the_excerpt(); ?>'. PHP_EOL .'</li>';

   // Create Base Repeater Directory
   $base_dir = AjaxLoadMore::alm_get_repeater_path();
   AjaxLoadMore::alm_mkdir($base_dir);

   $file = $base_dir .'/default.php';
	if( !file_exists($file) ){
      $tmp = fopen($file, 'w+');
		$w = fwrite($tmp, $defaultRepeater);
		fclose($tmp);
	}

	// Exit if Repeater Templates are disbaled, we don't want to create the table
	if( defined('ALM_DISABLE_REPEATER_TEMPLATES') && ALM_DISABLE_REPEATER_TEMPLATES ){
		return false;
	}

	// Create table, if it doesn't already exist.
	if( $wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name ) {
		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			name text NOT NULL,
			repeaterDefault longtext NOT NULL,
			repeaterType text NOT NULL,
			pluginVersion text NOT NULL,
			UNIQUE KEY id (id)
		);";
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
		// Insert the default data in created table
		$wpdb->insert($table_name , array('name' => 'default', 'repeaterDefault' => $defaultRepeater, 'repeaterType' => 'default', 'pluginVersion' => ALM_VERSION));
	}

}



/*
*  alm_render
*  Render Ajax Load More public function
*
*  @param {array} $args
*  @since 4.2.0
*/
function alm_render($args){
	echo AjaxLoadMore::alm_shortcode($args);
}



if( !class_exists('AjaxLoadMore') ):

	class AjaxLoadMore {

		static $shortcode_atts = null;

   	function __construct(){

         $this->alm_define_constants();
         $this->alm_includes();

   		add_action( 'wp_ajax_alm_get_posts', array(&$this, 'alm_query_posts') );
   		add_action( 'wp_ajax_nopriv_alm_get_posts', array(&$this, 'alm_query_posts') );
   		add_action( 'wp_enqueue_scripts', array(&$this, 'alm_enqueue_scripts') );
   		add_action( 'after_setup_theme',  array(&$this, 'alm_image_sizes') );
   		add_filter( 'alm_noscript', array(&$this, 'alm_noscript'), 10, 5 );
   		add_filter( 'alm_noscript_pagination', array(&$this, 'alm_noscript_pagination'), 10, 2 );
   		add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), array(&$this, 'alm_action_links') );
   		add_filter( 'plugin_row_meta', array(&$this, 'alm_plugin_meta_links'), 10, 2 );
   		add_shortcode( 'ajax_load_more', array(&$this, 'alm_shortcode') );
   		add_filter( 'widget_text', 'do_shortcode' ); // Allow shortcodes in widget areas
   		load_plugin_textdomain( 'ajax-load-more', false, dirname(plugin_basename( __FILE__ )).'/lang'); //load text domain

   	}



      /**
   	 * alm_define_constants
   	 * Define plugin constants
   	 *
   	 * @since 2.10.1
   	 */

   	public function alm_define_constants(){

      	define('ALM_PATH', plugin_dir_path(__FILE__));
   		define('ALM_URL', plugins_url('', __FILE__));
   		define('ALM_ADMIN_URL', plugins_url('admin/', __FILE__));
   		define('ALM_NAME', '_ajax_load_more');
   		define('ALM_TITLE', 'Ajax Load More');
   		define('ALM_SLUG', 'ajax-load-more');
   		define('ALM_REST_NAMESPACE', 'ajaxloadmore');

         if (!defined('ALM_CACHE_ITEM_NAME')) define('ALM_CACHE_ITEM_NAME', '4878');
         if (!defined('ALM_CTA_ITEM_NAME')) define('ALM_CTA_ITEM_NAME', '14456');
         if (!defined('ALM_COMMENTS_ITEM_NAME')) define('ALM_COMMENTS_ITEM_NAME', '12172');
         if (!defined('ALM_UNLIMITED_ITEM_NAME')) define('ALM_UNLIMITED_ITEM_NAME', '3118');
         if (!defined('ALM_FILTERS_ITEM_NAME')) define('ALM_FILTERS_ITEM_NAME', '35992');
         if (!defined('ALM_LAYOUTS_ITEM_NAME')) define('ALM_LAYOUTS_ITEM_NAME', '11398');
         if (!defined('ALM_NEXTPAGE_ITEM_NAME')) define('ALM_NEXTPAGE_ITEM_NAME', '24540');
         if (!defined('ALM_PAGING_ITEM_NAME')) define('ALM_PAGING_ITEM_NAME', '6898');
         if (!defined('ALM_PRELOADED_ITEM_NAME')) define('ALM_PRELOADED_ITEM_NAME', '4293');
         if (!defined('ALM_PREV_POST_ITEM_NAME')) define('ALM_PREV_POST_ITEM_NAME', '9686');
         if (!defined('ALM_RESTAPI_ITEM_NAME')) define('ALM_RESTAPI_ITEM_NAME', '17105'); // Deprecated
         if (!defined('ALM_SEO_ITEM_NAME')) define('ALM_SEO_ITEM_NAME', '3482');
         if (!defined('ALM_TABS_ITEM_NAME')) define('ALM_TABS_ITEM_NAME', '54855');
         if (!defined('ALM_THEME_REPEATERS_ITEM_NAME')) define('ALM_THEME_REPEATERS_ITEM_NAME', '8860');
         if (!defined('ALM_USERS_ITEM_NAME')) define('ALM_USERS_ITEM_NAME', '32311');
         if (!defined('ALM_PRO_ITEM_NAME')) define('ALM_PRO_ITEM_NAME', '42166');

      }



   	/**
   	 * alm_noscript
   	 * This function will build an query for users without JS enabled
   	 *
   	 * @return $return string
   	 * @since 3.7
   	 */
   	function alm_noscript($args, $container_element, $css_classes = '', $transition_container_classes = ''){
      	if(is_admin()){
         	return false;
         }
         $return = '';
         include_once( ALM_PATH . 'core/classes/class.alm-noscript.php'); // Load Noscript Class
      	$return = ALM_NOSCRIPT::alm_get_noscript($args, $container_element, $css_classes, $transition_container_classes);

         return $return;
   	}



   	/**
   	 * alm_noscript_pagination
   	 * This function will build an pagination for users without JS enabled
   	 *
   	 * @return $return string
   	 * @since 3.7
   	 */
   	function alm_noscript_pagination($query){
      	if(is_admin()){
         	return false;
         }
         $return = '';
         include_once( ALM_PATH . 'core/classes/class.alm-noscript.php'); // Load Noscript Class
      	$return = ALM_NOSCRIPT::build_noscript_paging($query);

      	return '<noscript>'. $return .'</noscript>';
   	}



   	/**
       * alm_get_repeater_base_path
       * Get absolute path to repeater directory base
       *
       * Multisite installs directories will be `uploads/sites/{id}/alm_templates`
       *
       * @return $path;
       * @since 3.5
       */
      public static function alm_get_repeater_path(){
         $upload_dir = wp_upload_dir();
         $path = apply_filters( 'alm_repeater_path', $upload_dir['basedir']. '/alm_templates' );
         return $path;
      }



      /**
       * alm_mkdir
       * Create repeater template directory
       *
       * @since 3.5
       */
      public static function alm_mkdir($dir){

	      // Does $dir exist?
	      if( !is_dir($dir) ) {
		      wp_mkdir_p($dir);

	      	// Check again after creating it (permission checker)
		      if( !is_dir($dir) ) {
			      echo __('Error creating repeater template directory', 'ajax-load-more') . ' - '. $dir;
			   }
	      }
      }



   	/**
   	 * alm_includes
   	 * Load these files before the theme loads
   	 *
   	 * @since 2.0.0
   	 */
   	public function alm_includes(){

      	include_once( ALM_PATH . 'core/functions.php'); // Load Core Functions
      	include_once( ALM_PATH . 'core/classes/class.alm-shortcode.php'); // Load Shortcode Class
      	include_once( ALM_PATH . 'core/classes/class.alm-woocommerce.php'); // Load Woocommerce Class
      	include_once( ALM_PATH . 'core/classes/class.alm-enqueue.php'); // Load Enqueue Class
      	include_once( ALM_PATH . 'core/classes/class.alm-queryargs.php'); // Load Query Args Class
      	include_once( ALM_PATH . 'core/classes/class.alm-localize.php'); // Load Localize Class

   		if( is_admin() ){
   			require_once('admin/editor/editor.php');
   			require_once('admin/admin.php');
   			require_once('admin/admin-functions.php');
            require_once('vendor/connekt-plugin-installer/class-connekt-plugin-installer.php');
            if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
               include( dirname( __FILE__ ) . '/vendor/EDD_SL_Plugin_Updater.php' );
            }
   		}

      }



      /**
   	 * alm_return_addons
   	 * Returns add-on data (admin/admin-functions.php)
   	 *
   	 * @since 2.0.0
   	 */

      public function alm_return_addons(){
	      return alm_get_addons();
      }



   	/**
   	 * alm_action_links
   	 * Add plugin action links to WP plugin screen
   	 *
   	 * @since 2.2.3
   	 */

      public function alm_action_links( $links ) {
	      $settings = '<a href="'. get_admin_url(null, 'admin.php?page=ajax-load-more') .'">'.__('Settings', 'ajax-load-more').'</a>';
			array_unshift( $links, $settings );
         return $links;
      }



      /**
   	 * alm_plugin_meta_links
   	 * Add plugin meta links to WP plugin screen
   	 *
   	 *  @since 2.7.2.1
   	 */

      public function alm_plugin_meta_links( $links, $file ) {
         if ( strpos( $file, 'ajax-load-more.php' ) !== false ) {
      		$new_links = array(
					'<a href="admin.php?page=ajax-load-more-shortcode-builder">Shortcode  Builder</a>',
					'<a href="admin.php?page=ajax-load-more-add-ons">Add-ons</a>',
				);
      		$links = array_merge( $links, $new_links );
      	}
         return $links;
	   }



		/**
		 * alm_image_sizes
		 * Add default image size
		 *
		 * @since 2.8.3
		 */

		public function alm_image_sizes(){
			add_image_size( 'alm-thumbnail', 150, 150, true); // Custom ALM thumbnail size
		}



   	/**
   	 * alm_enqueue_scripts
   	 * Enqueue scripts and create localized variables
   	 *
   	 * @since 2.0.0
   	 */

   	public function alm_enqueue_scripts(){

      	// Get ALM Options
   		$options = get_option( 'alm_settings' );


   		// Core ALM JS
         $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min'; // Use minified libraries if SCRIPT_DEBUG is turned off
   		wp_register_script( 'ajax-load-more', plugins_url( '/core/dist/js/ajax-load-more'. $suffix .'.js', __FILE__ ), '',  ALM_VERSION, true );

   		// Progress Bar JS
   		wp_register_script( 'ajax-load-more-progress', plugins_url( '/vendor/js/pace/pace.min.js', __FILE__ ), 'ajax-load-more',  ALM_VERSION, true );

   		// Masonry JS
   		wp_register_script( 'ajax-load-more-masonry', plugins_url( '/vendor/js/masonry/masonry.pkgd.min.js', __FILE__ ), 'ajax-load-more',  '4.2.1', true );

   		// Callback Helpers
   		wp_register_script( 'ajax-load-more-legacy-callbacks', plugins_url( '/vendor/js/alm/legacy-callbacks.js', __FILE__ ), 'jquery', '', false);


   		// Core CSS
   		if( !alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_disable_css')){ // Not inline or disabled
	         $file = plugins_url('/core/dist/css/'. ALM_SLUG .'.min.css', __FILE__ );
	         ALM_ENQUEUE::alm_enqueue_css(ALM_SLUG, $file);
   		}

   		// Prevent loading of unnessasry posts - move user to top of page
   		$scrolltop = (!isset($options['_alm_scroll_top']) || $options['_alm_scroll_top'] != '1') ? 'false' : 'true';


   		// Localized JS variables
   		wp_localize_script(
   			'ajax-load-more',
   			'alm_localize',
   			array(
   				'ajaxurl' => admin_url('admin-ajax.php'),
   				'alm_nonce' => wp_create_nonce( "ajax_load_more_nonce" ),
   				'pluginurl' => ALM_URL,
   				'scrolltop' => $scrolltop,
   				'speed' => apply_filters('alm_speed', 200),
   				'ga_debug' => apply_filters('alm_ga_debug', 'false'),
   				'results_text' => apply_filters('alm_display_results', __('Viewing {post_count} of {total_posts} results.', 'ajax-load-more')),
   				'no_results_text' => apply_filters('alm_no_results_text', __('No results found.', 'ajax-load-more')),
   				'alm_debug' => apply_filters('alm_debug', false)
   			)
   		);
   	}



   	/**
   	 *  alm_shortcode
   	 *  The AjaxLoadMore shortcode
   	 *
   	 *  @since 2.0.0
   	 *  @updated 3.2.0
   	 */
   	public static function alm_shortcode($atts) {
	   	self::$shortcode_atts = $atts;
      	return ALM_SHORTCODE::alm_render_shortcode($atts);
   	}



   	/**
   	 *  alm_return_shortcode_atts
   	 *  Return the ALM shortcode atts
   	 *
   	 *  @since 3.2.0
   	 */
   	public static function alm_return_shortcode_atts(){
	   	return self::$shortcode_atts;
   	}



   	/**
   	 * alm_query_posts
   	 * Core Ajax Load More Query
   	 *
   	 * @since 2.0.0
   	 */
   	public function alm_query_posts() {

   		// WPML fix for category/tag/taxonomy archives
			if ( (isset( $_GET['category'] ) && $_GET['category']) || (isset($_GET['taxonomy']) && $_GET['taxonomy']) || (isset($_GET['tag']) && $_GET['tag']) ) {
				unset($_REQUEST['post_id']);
			}

			$id = (isset($_GET['id'])) ? $_GET['id'] : '';
			$post_id = (isset($_GET['post_id'])) ? $_GET['post_id'] : '';
			$slug = (isset($_GET['slug'])) ? $_GET['slug'] : '';
			$canonical_url = (isset($_GET['canonical_url'])) ? esc_url($_GET['canonical_url']) : esc_url($_SERVER['HTTP_REFERER']);

			// Ajax Query Type
			$queryType = (isset($_GET['query_type'])) ? $_GET['query_type'] : 'standard';	// 'standard' or 'totalposts'; totalposts returns $alm_found_posts

			// Cache
			$cache_id = (isset($_GET['cache_id'])) ? $_GET['cache_id'] : '';
			$cache_logged_in = (isset($_GET['cache_logged_in'])) ? $_GET['cache_logged_in'] : false;
			$do_create_cache = ($cache_logged_in === 'true' && is_user_logged_in()) ? false : true;

			// Offset
			$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;

			// Repeater Templates
			$repeater = (isset($_GET['repeater'])) ? $_GET['repeater'] : 'default';
			$type = alm_get_repeater_type($repeater);
			$theme_repeater = (isset($_GET['theme_repeater'])) ? $_GET['theme_repeater'] : 'null';

			// Post Type
			$postType = (isset($_GET['post_type'])) ? $_GET['post_type'] : 'post';

			// Page Parameters
			$posts_per_page = (isset($_GET['posts_per_page'])) ? $_GET['posts_per_page'] : 5;
			$page = (isset($_GET['page'])) ? $_GET['page'] : 0;

			// Advanced Custom Fields
			$acfData = (isset($_GET['acf'])) ? $_GET['acf'] : false;
			if($acfData){
		      $acf = (isset($acfData['acf'])) ? $acfData['acf'] : false; // true / false
		      $acf_post_id = (isset($acfData['post_id'])) ? $acfData['post_id'] : ''; // Post ID
		      $acf_field_type = (isset($acfData['field_type'])) ? $acfData['field_type'] : ''; // ACF Field Type
		      $acf_field_name = (isset($acfData['field_name'])) ? $acfData['field_name'] : ''; // ACF Field Type
		   }

			// Paging Add-on
			$paging = (isset($_GET['paging'])) ? $_GET['paging'] : 'false';

			// Preload Add-on
			$preloaded = (isset($_GET['preloaded'])) ? $_GET['preloaded'] : 'false';
			$preloaded_amount = (isset($_GET['preloaded_amount'])) ? $_GET['preloaded_amount'] : '5';
			if(has_action('alm_preload_installed') && $preloaded === 'true'){
			   // If preload - offset the ajax posts by posts_per_page + preload_amount val
			   $old_offset = $preloaded_amount;
			   $offset = $offset + $preloaded_amount;
		   }

			// CTA Add-on
		   $cta = false;
		   $ctaData = (isset($_GET['cta'])) ? $_GET['cta'] : false;
		   if($ctaData){
		      $cta = true;
			   $cta_position = (isset($ctaData['cta_position'])) ? $ctaData['cta_position'] : 'before:1';
		      $cta_position_array = explode(":", $cta_position);
				$cta_pos = (string)$cta_position_array[0];
				$cta_val = (string)$cta_position_array[1];
		      $cta_pos = ($cta_pos != 'after') ? 'before' : $cta_pos;
			   $cta_repeater = (isset($ctaData['cta_repeater'])) ? $ctaData['cta_repeater'] : 'null';
			   $cta_theme_repeater = (isset($ctaData['cta_theme_repeater'])) ? $ctaData['cta_theme_repeater'] : 'null';
		   }

		   // Single Post Add-on
		   $single_post = false;
			$single_post_data = (isset($_GET['single_post'])) ? $_GET['single_post'] : false;
			if($single_post_data){
				$single_post = true;
				$single_post_id = (isset($single_post_data['id'])) ? $single_post_data['id'] : '';
				$single_post_slug = (isset($single_post_data['slug'])) ? $single_post_data['slug'] : '';
		   }

		   // SEO Add-on
			$seo_start_page = (isset($_GET['seo_start_page'])) ? $_GET['seo_start_page'] : 1;

		   // Set up initial WP_Query $args
		   $args = ALM_QUERY_ARGS::alm_build_queryargs($_GET, true);
			$args['paged'] = (get_query_var('paged')) ? get_query_var('paged') : 1;
			$args['offset'] = $offset + ($posts_per_page*$page);


			// Get current page number for determining item number
			$alm_page_count = ($page == 0) ? 1 : $page + 1;


			/*
			 *	alm_single_post_args
			 *
			 * Single Post Add-on hook
			 * Hijack $args and and return single post only $args
			 *
			 * @return $args;
			 */
			$args = ($single_post && has_action('alm_single_post_installed')) ? apply_filters('alm_single_post_args', $single_post_id, $postType) : $args;



			/*
			 *	alm_modify_query_args
			 *
			 * ALM Core Filter Hook
			 *
			 * @return $args;
			 * Deprecated 2.10
			 */
		   $args = apply_filters('alm_modify_query_args', $args, $slug); // ALM Core Filter Hook



			/*
			 *	alm_query_args_{id}
			 *
			 * ALM Core Filter Hook
			 *
			 * @return $args;
			 */
		   $args = apply_filters('alm_query_args_'. $id, $args, $post_id); // ALM Core Filter Hook



			/*
		    * Custom `alm_query` parameter in the WP_Query
			 * Value is accessed elsewhere for filters & hooks etc.
			 */
		   $args['alm_query'] = ($single_post) ? 'single_posts' : 'alm';



			/*
			 *	WP_Query
			 *
			 * @return $alm_query;
			 */
			$alm_query = new WP_Query( $args );



			/*
			 *	alm_query_after_{id}
			 *
			 * ALM Core Filter Hook to modify the returned query
			 *
			 * @return $alm_query;
			 */
		   $alm_query = apply_filters('alm_query_after_'. $id, $alm_query, $post_id); // ALM Core Filter Hook


			// If preloaded, update our loop count and total posts
		   if(has_action('alm_preload_installed') && $preloaded === 'true'){
		      $alm_total_posts = $alm_query->found_posts - $offset + $preloaded_amount;
		      if($old_offset > 0)
		         $alm_loop_count = $old_offset;
		      else
		         $alm_loop_count = $offset;
		   }else {
		      $alm_total_posts = $alm_query->found_posts - $offset;
		      $alm_loop_count = 0;
		   }



		   /*
			 *	alm_cache_create_dir
			 *
			 * Cache Add-on hook
			 * Create cache directory + meta .txt file
			 *
			 * @return null
			 */
		   if(!empty($cache_id) && has_action('alm_cache_create_dir') && $do_create_cache){
		      apply_filters('alm_cache_create_dir', $cache_id, $canonical_url);
		   }


		   if($queryType === 'standard'){

			   /*
		   	 *	alm_debug
		   	 *
		   	 * ALM Core Filter Hook
		   	 *
		   	 * @return $alm_query/false;
		   	 */
	         $debug = (apply_filters('alm_debug', false)) ? $args : false;

				// Run the loop

				if ($alm_query->have_posts()) {

		         $alm_found_posts = $alm_total_posts;
		         $alm_post_count = $alm_query->post_count;
		         $alm_current = 0;
		         $alm_has_cta = false;

		         $cta_array = Array();
		         if($cta && has_action('alm_cta_pos_array')){ // Build CTA Position Array
		            $cta_array = apply_filters('alm_cta_pos_array', $seo_start_page, $page, $posts_per_page, $alm_post_count, $cta_val, $paging);
		         }

		         ob_start();

		         // ALM Loop
					while ($alm_query->have_posts()): $alm_query->the_post();

						$alm_loop_count++;
						$alm_current++; // Current item in loop
			         $alm_page = $alm_page_count; // Get page number
			         $alm_item = ($alm_page_count * $posts_per_page) - $posts_per_page + $alm_loop_count; // Get current item

					   // Call to Action [Before]
						if($cta && has_action('alm_cta_inc') && $cta_pos === 'before' && in_array($alm_current, $cta_array)){
			   	   	do_action('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, false);
			   	   	$alm_has_cta = true;
					   }
					   // End Call to Action [Before]

					   // Repeater Template
						if($theme_repeater != 'null' && has_action('alm_get_theme_repeater')){  // Theme Repeater
		   				do_action('alm_get_theme_repeater', $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current);
						}else{
							include(alm_get_current_repeater( $repeater, $type )); // Repeater
						}
						// End Repeater Template

						// Call to Action [After]
						if($cta && has_action('alm_cta_inc') && $cta_pos === 'after' && in_array($alm_current, $cta_array)){
			   	   	do_action('alm_cta_inc', $cta_repeater, $cta_theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current, false);
			   	   	$alm_has_cta = true;
					   }
					   // End Call to Action [After]

		         endwhile; wp_reset_query();
		         // End ALM Loop

		         $data = ob_get_clean();


		         /*
			   	 *	alm_cache_file
			   	 *
			   	 * Cache Add-on hook
			   	 * If Cache is enabled, check the cache file
			   	 *
			   	 * @param $cache_id          String     ID of the ALM cache
			   	 * @param $do_create_cache   Boolean    Should cache be created for this user
			   	 *
			   	 * @updated 3.2.1
			   	 * @return null
			   	 */
		         if(!empty($cache_id) && has_action('alm_cache_installed') && $do_create_cache){
			         if($single_post){
		   	         // Single Post Cache
		               apply_filters('alm_previous_post_cache_file', $cache_id, $single_post_id, $data);
			         }else{
		   	         // Standard Cache
		               apply_filters('alm_cache_file', $cache_id, $page, $seo_start_page, $data, $preloaded);
		            }
		         }

					$return = array(
		            'html' => $data,
		            'meta' => array(
		               'postcount'  => $alm_post_count,
		               'totalposts' => $alm_found_posts,
		               'debug' 		 => $debug
		            )
		         );
		         wp_send_json($return);

				 } else {

				   $return = array(
		            'html' => null,
		            'meta' => array(
		               'postcount'  => 0,
		               'totalposts' => 0,
		               'debug'		 => $debug
		            )
		         );

		         wp_send_json($return);

				}

			}

			elseif($queryType === 'totalposts'){ // Paging add-on

				// Paging add-on
				wp_send_json(array(
					'totalposts' => $alm_total_posts
				));

			}

			wp_die();

   	}

   }



   /**
    * AjaxLoadMore
    * The main function responsible for returning the one true AjaxLoadMore instance.
    *
    * @since 2.0.0
    */

   function AjaxLoadMore(){
   	global $ajax_load_more;
   	if( !isset($ajax_load_more) ){
   		$ajax_load_more = new AjaxLoadMore();
      }
   	return $ajax_load_more;
   }

   AjaxLoadMore(); // initialize



endif; // class_exists check
