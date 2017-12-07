<?php
/*
Plugin Name: Ajax Load More
Plugin URI: https://connekthq.com/plugins/ajax-load-more
Description: The ultimate solution to add infinite scroll functionality to your website.
Text Domain: ajax-load-more
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: https://connekthq.com
Version: 3.3.1
License: GPL
Copyright: Darren Cooney & Connekt Media
*/



define('ALM_VERSION', '3.3.1');
define('ALM_RELEASE', 'December 7, 2017');
define('ALM_STORE_URL', 'https://connekthq.com');



/*
*  alm_install
*
*  Activation hook
*  Create table for storing repeater
*
*  @since 2.0.0
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



/*
*  alm_create_table
*
*  Create new table and repeater template
*
*  @since 2.0.0
*/
function alm_create_table(){

	global $wpdb;
	$table_name = $wpdb->prefix . "alm";
	$blog_id = $wpdb->blogid;

	$defaultRepeater = '<li <?php if (!has_post_thumbnail()) { ?> class="no-img"<?php } ?>><?php if ( has_post_thumbnail() ) { the_post_thumbnail(\'alm-thumbnail\');}?><h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3><p class="entry-meta"><?php the_time("F d, Y"); ?></p><?php the_excerpt(); ?></li>';

	/* MULTISITE */
   /* if this is a multisite blog and it's not id = 1, create default template */
   if($blog_id > 1){

	   $dir = ALM_PATH. 'core/repeater/'. $blog_id;
	   if( !is_dir($dir) ){
	      mkdir($dir);
	   }

	   $file = ALM_PATH. 'core/repeater/'. $blog_id .'/default.php';
   	if( !file_exists($file) ){
         $tmp = fopen($file, 'w');
			$w = fwrite($tmp, $defaultRepeater);
			fclose($tmp);
   	}

	}

	//Create table, if it doesn't already exist.
	if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {

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

		//Insert the default data in created table
		$wpdb->insert($table_name , array('name' => 'default', 'repeaterDefault' => $defaultRepeater, 'repeaterType' => 'default', 'pluginVersion' => ALM_VERSION));

	}

}


if( !class_exists('AjaxLoadMore') ):

	class AjaxLoadMore {

   	function __construct(){

         $this->alm_define_constants();
         $this->alm_includes();

   		add_action( 'wp_ajax_alm_query_posts', array(&$this, 'alm_query_posts') );
   		add_action( 'wp_ajax_nopriv_alm_query_posts', array(&$this, 'alm_query_posts') );
   		add_action( 'wp_ajax_alm_query_total', array(&$this, 'alm_query_total') );
   		add_action( 'wp_ajax_nopriv_alm_query_total', array(&$this, 'alm_query_total') );
   		add_action( 'wp_enqueue_scripts', array(&$this, 'alm_enqueue_scripts') );
   		add_action( 'after_setup_theme',  array(&$this, 'alm_image_sizes') );
   		add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), array(&$this, 'alm_action_links') );
   		add_filter( 'plugin_row_meta', array(&$this, 'alm_plugin_meta_links'), 10, 2 );
   		add_shortcode( 'ajax_load_more', array(&$this, 'alm_shortcode') );
   		add_filter( 'widget_text', 'do_shortcode' ); // Allow shortcodes in widget areas
   		load_plugin_textdomain( 'ajax-load-more', false, dirname(plugin_basename( __FILE__ )).'/lang/'); //load text domain

   	}



      /*
   	*  alm_define_constants
   	*  Define plugin constants
   	*
   	*  @since 2.10.1
   	*/

   	public function alm_define_constants(){

      	define('ALM_PATH', plugin_dir_path(__FILE__));
   		define('ALM_URL', plugins_url('', __FILE__));
   		define('ALM_ADMIN_URL', plugins_url('admin/', __FILE__));
   		define('ALM_NAME', '_ajax_load_more');
   		define('ALM_TITLE', 'Ajax Load More');
   		define('ALM_SLUG', 'ajax-load-more');

         if (!defined('ALM_CACHE_ITEM_NAME')) define('ALM_CACHE_ITEM_NAME', '4878');
         if (!defined('ALM_CTA_ITEM_NAME')) define('ALM_CTA_ITEM_NAME', '14456');
         if (!defined('ALM_COMMENTS_ITEM_NAME')) define('ALM_COMMENTS_ITEM_NAME', '12172');
         if (!defined('ALM_UNLIMITED_ITEM_NAME')) define('ALM_UNLIMITED_ITEM_NAME', '3118');
         if (!defined('ALM_LAYOUTS_ITEM_NAME')) define('ALM_LAYOUTS_ITEM_NAME', '11398');
         if (!defined('ALM_NEXTPAGE_ITEM_NAME')) define('ALM_NEXTPAGE_ITEM_NAME', '24540');
         if (!defined('ALM_PAGING_ITEM_NAME')) define('ALM_PAGING_ITEM_NAME', '6898');
         if (!defined('ALM_PRELOADED_ITEM_NAME')) define('ALM_PRELOADED_ITEM_NAME', '4293');
         if (!defined('ALM_PREV_POST_ITEM_NAME')) define('ALM_PREV_POST_ITEM_NAME', '9686');
         if (!defined('ALM_RESTAPI_ITEM_NAME')) define('ALM_RESTAPI_ITEM_NAME', '17105');
         if (!defined('ALM_SEO_ITEM_NAME')) define('ALM_SEO_ITEM_NAME', '3482');
         if (!defined('ALM_THEME_REPEATERS_ITEM_NAME')) define('ALM_THEME_REPEATERS_ITEM_NAME', '8860');
         if (!defined('ALM_USERS_ITEM_NAME')) define('ALM_USERS_ITEM_NAME', '32311');

      }


   	/*
   	*  alm_includes
   	*  Load these files before the theme loads
   	*
   	*  @since 2.0.0
   	*/

   	public function alm_includes(){
      	include_once( ALM_PATH . 'core/functions.php'); // Core Functions
      	include_once( ALM_PATH . 'core/classes/class.alm-shortcode.php'); // Shortcode Class
      	include_once( ALM_PATH . 'core/classes/class.alm-enqueue.php'); // Enqueue Class

   		if( is_admin() ){
   			include_once('admin/editor/editor.php');
   			include_once('admin/admin.php');
   			include_once('admin/admin-functions.php');
            include_once('vendor/connekt-plugin-installer/class-connekt-plugin-installer.php');
            if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
               include( dirname( __FILE__ ) . '/vendor/EDD_SL_Plugin_Updater.php' );
            }
   		}
      }



   	/*
   	*  alm_action_links
   	*  Add plugin action links to WP plugin screen
   	*
   	*  @since 2.2.3
   	*/

      public function alm_action_links( $links ) {
         $links[] = '<a href="'. get_admin_url(null, 'admin.php?page=ajax-load-more') .'">'.__('Settings', 'ajax-load-more').'</a>';
         return $links;
      }



      /*
   	*  alm_plugin_meta_links
   	*  Add plugin meta links to WP plugin screen
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



		/*
		*  alm_image_sizes
		*  Add default image size
		*
		*  @since 2.8.3
		*/

		public function alm_image_sizes(){
			add_image_size( 'alm-thumbnail', 150, 150, true); // Custom ALM thumbnail size
		}



   	/*
   	*  alm_enqueue_scripts
   	*  Enqueue our scripts and create our localize variables
   	*
   	*  @since 2.0.0
   	*/

   	public function alm_enqueue_scripts(){

      	// Get ALM Options
   		$options = get_option( 'alm_settings' );


   		/*
	   	 *	alm_js_dependencies
	   	 *
	   	 * ALM Core Filter
	   	 *
	   	 * @return Boolean
	   	 */
			$dependencies = apply_filters( 'alm_js_dependencies', array('jquery') );


   		// Core ALM JS
   		wp_register_script( 'ajax-load-more', plugins_url( '/core/dist/js/ajax-load-more.min.js', __FILE__ ), $dependencies,  ALM_VERSION, true );

   		// Progress Bar JS
   		wp_register_script( 'ajax-load-more-progress', plugins_url( '/core/src/js/vendor/pace/pace.min.js', __FILE__ ), 'ajax-load-more',  ALM_VERSION, true );

   		// Load Core CSS
   		if( !alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_disable_css')){ // Not inline or disabled
	         $file = plugins_url('/core/dist/css/'. ALM_SLUG .'.min.css', __FILE__ );
	         ALM_ENQUEUE::alm_enqueue_css(ALM_SLUG, $file);
   		}

   		// Prevent loading of unnessasry posts - move user to top of page
   		$scrolltop = 'false';
   		if(!isset($options['_alm_scroll_top']) || $options['_alm_scroll_top'] != '1'){ // if unset or false
   			$scrolltop = 'false';
   		}else{ // if checked
      		$scrolltop = 'true';
   		}

   		wp_localize_script(
   			'ajax-load-more',
   			'alm_localize',
   			array(
   				'ajaxurl'   => admin_url('admin-ajax.php'),
   				'alm_nonce' => wp_create_nonce( "ajax_load_more_nonce" ),
   				'pluginurl' => ALM_URL,
   				'scrolltop' => $scrolltop,
   				'ajax_object' => array('is_single' => true, 'is_singular' => true )
   			)
   		);

   	}



   	/*
   	*  alm_shortcode
   	*  The AjaxLoadMore shortcode
   	*
   	*  @since 2.0.0
   	*/

   	public function alm_shortcode($atts) {
      	return ALM_SHORTCODE::alm_render_shortcode($atts);
   	}



   	/*
   	*  alm_query_posts
   	*  Ajax Load More Query
   	*
   	*  @since 2.0.0
   	*/

   	public function alm_query_posts() {

   		$options = get_option( 'alm_settings' );

   		$id = (isset($_GET['id'])) ? $_GET['id'] : '';
   		$post_id = (isset($_GET['post_id'])) ? $_GET['post_id'] : '';
   		$slug = (isset($_GET['slug'])) ? $_GET['slug'] : '';
   		$canonical_url = (isset($_GET['canonical_url'])) ? $_GET['canonical_url'] : $_SERVER['HTTP_REFERER'];

   		$queryType = (isset($_GET['query_type'])) ? $_GET['query_type'] : 'standard';	// 'standard' or 'totalposts'; totalposts returns $alm_found_posts

   		$cache_id = (isset($_GET['cache_id'])) ? $_GET['cache_id'] : '';
   		$cache_logged_in = (isset($_GET['cache_logged_in'])) ? $_GET['cache_logged_in'] : false;
   		$do_create_cache = true;
   		if($cache_logged_in === 'true' && is_user_logged_in()){
      		$do_create_cache = false;
   		}

   		$repeater = (isset($_GET['repeater'])) ? $_GET['repeater'] : 'default';
   		$type = alm_get_repeater_type($repeater);
   		$theme_repeater = (isset($_GET['theme_repeater'])) ? $_GET['theme_repeater'] : 'null';

   		$postType = (isset($_GET['post_type'])) ? $_GET['post_type'] : 'post';
   		$post_format = (isset($_GET['post_format'])) ? $_GET['post_format'] : '';

   		$category = (isset($_GET['category'])) ? $_GET['category'] : '';
   		$category__not_in = (isset($_GET['category__not_in'])) ? $_GET['category__not_in'] : '';
   		$tag = (isset($_GET['tag'])) ? $_GET['tag'] : '';
   		$tag__not_in = (isset($_GET['tag__not_in'])) ? $_GET['tag__not_in'] : '';

   		// Taxonomy
   		$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';
   		$taxonomy_terms = (isset($_GET['taxonomy_terms'])) ? $_GET['taxonomy_terms'] : '';
   		$taxonomy_operator = $_GET['taxonomy_operator'];
   		if(empty($taxonomy_operator)) $taxonomy_operator = 'IN';
   		$taxonomy_relation = (isset($_GET['taxonomy_relation'])) ? $_GET['taxonomy_relation'] : 'AND';
   		if($taxonomy_relation == '') $taxonomy_relation = 'AND';

   		// Date
   		$year = (isset($_GET['year'])) ? $_GET['year'] : '';
   		$month = (isset($_GET['month'])) ? $_GET['month'] : '';
   		$day = (isset($_GET['day'])) ? $_GET['day'] : '';

   		// Custom Fields
   		$meta_key = (isset($_GET['meta_key'])) ? $_GET['meta_key'] : '';
   		$meta_value = (isset($_GET['meta_value'])) ? $_GET['meta_value'] : '';
   		$meta_compare = $_GET['meta_compare'];
   		if($meta_compare == '') $meta_compare = 'IN';
   		if($meta_compare === 'lessthan') $meta_compare = '<'; // do_shortcode fix (shortcode was rendering as HTML)
   		if($meta_compare === 'lessthanequalto') $meta_compare = '<='; // do_shortcode fix (shortcode was rendering as HTML)
   		$meta_relation = $_GET['meta_relation'];
   		if($meta_relation == '') $meta_relation = 'AND';
   		$meta_type = $_GET['meta_type'];
   		if($meta_type == '') $meta_type = 'CHAR';

   		$s = (isset($_GET['search'])) ? $_GET['search'] : '';
   		$custom_args = (isset($_GET['custom_args'])) ? $_GET['custom_args'] : '';

   		// Author
         $author = (isset($_GET['author'])) ? $_GET['author'] : '';

   		// Ordering
   		$order = (isset($_GET['order'])) ? $_GET['order'] : 'DESC';
   		$orderby = (isset($_GET['orderby'])) ? $_GET['orderby'] : 'date';

   		// Sticky, Include, Exclude, Offset, Status
   		$sticky = (isset($_GET['sticky_posts'])) ? $_GET['sticky_posts'] : '';
   		$sticky = ($sticky === 'true') ? true : false;
   		$post__in = (isset($_GET['post__in'])) ? $_GET['post__in'] : '';
   		$post__not_in = (isset($_GET['post__not_in'])) ? $_GET['post__not_in'] : '';
   		$exclude = (isset($_GET['exclude'])) ? $_GET['exclude'] : '';
   		$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;
   		$post_status = $_GET['post_status'];
   		if($post_status == '') $post_status = 'publish';
   		if($post_status != 'publish' && $post_status != 'inherit'){
      		// If not 'publish', OR 'inherit' confirm user has rights to view these old posts.
      		if (current_user_can( 'edit_theme_options' )){
         		$post_status = $post_status;
            } else {
               $post_status = 'publish';
            }
         }


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
            if($cta_pos != 'after'){
               $cta_pos = 'before';
            }
   		   $cta_repeater = (isset($ctaData['cta_repeater'])) ? $ctaData['cta_repeater'] : 'null';
   		   $cta_theme_repeater = (isset($ctaData['cta_theme_repeater'])) ? $ctaData['cta_theme_repeater'] : 'null';
         }


         // Previous Post Add-on
         $previous_post = false;
   		$pp_data = (isset($_GET['previous_post'])) ? $_GET['previous_post'] : false;
   		if($pp_data){
      		$previous_post = true;
      		$previous_post_id = (isset($pp_data['id'])) ? $pp_data['id'] : '';
      		$previous_post_slug = (isset($pp_data['slug'])) ? $pp_data['slug'] : '';
         }


         // Paging Add-on
         $paging = (isset($_GET['paging'])) ? $_GET['paging'] : false;


         // SEO Add-on
   		$seo_start_page = (isset($_GET['seo_start_page'])) ? $_GET['seo_start_page'] : 1;


   		// Language (Is this required?)
   		$lang = (isset($_GET['lang'])) ? $_GET['lang'] : '';

   		// Set up initial query arguments
         $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
   		$args = array(
   			'post_type'                => $postType,
   			'posts_per_page'           => $posts_per_page,
   			'offset'                   => $offset + ($posts_per_page*$page),
   			'order'                    => $order,
   			'orderby'                  => $orderby,
   			'post_status'              => $post_status,
   			'ignore_sticky_posts'      => true,
   			'paged'                    => $paged,
   		);


   		// Paging
   		// If !paging, turn off pagination information to improve wp_query performance
   		if(!$paging){
   			$args['no_found_rows'] = true;
   		}

   	   // Post Format & Taxonomy
   	   // - Both use tax_query, so we combine these queries
   		if(!empty($post_format) || !empty($taxonomy)){

            $tax_query_total = count(explode(":", $taxonomy)); // Total $taxonomy objects
            $taxonomy = explode(":", $taxonomy); // convert to array
            $taxonomy_terms = explode(":", $taxonomy_terms); // convert to array
            $taxonomy_operator = explode(":", $taxonomy_operator); // convert to array

            if(empty($taxonomy)){

               // Post Format only
               $args['tax_query'] = array(
      			   alm_get_post_format($post_format),
      			);

            }else{

               // Post Formats
					$args['tax_query'] = array(
						'relation' => $taxonomy_relation,
						alm_get_post_format( $post_format )
					);

					// Loop Taxonomies
					for($tax_i = 0; $tax_i < $tax_query_total; $tax_i++){
						$args['tax_query'][] = alm_get_taxonomy_query($taxonomy[$tax_i], $taxonomy_terms[$tax_i], $taxonomy_operator[$tax_i]);
					}
   			}

   	   }

         // Category
   		if(!empty($category)){
   			$args['category_name'] = $category;
   		}

         // Category Not In
   		if(!empty($category__not_in)){
   		   $exclude_cats = explode(",",$category__not_in);
   			$args['category__not_in'] = $exclude_cats;
   		}

         // Tag
   		if(!empty($tag)){
   			$args['tag'] = $tag;
   		}

         // Tag Not In
   		if(!empty($tag__not_in)){
   		   $exclude_tags = explode(",",$tag__not_in);
   			$args['tag__not_in'] = $exclude_tags;
   		}

   	   // Date (not using date_query as there was issue with year/month archives)
   		if(!empty($year)){
      		$args['year'] = $year;
   	   }
   	   if(!empty($month)){
      		$args['monthnum'] = $month;
   	   }
   	   if(!empty($day)){
      		$args['day'] = $day;
   	   }

   	   // Meta Query
   		if(!empty($meta_key) && !empty($meta_value) || !empty($meta_key) && $meta_compare !== "IN"){

      		// Parse multiple meta query
            $meta_query_total = count(explode(":", $meta_key)); // Total meta_query objects
            $meta_keys = explode(":", $meta_key); // convert to array
            $meta_value = explode(":", $meta_value); // convert to array
            $meta_compare = explode(":", $meta_compare); // convert to array
            $meta_type = explode(":", $meta_type); // convert to array

            // Loop Meta Query
            $args['meta_query'] = array(
				   'relation' => $meta_relation
            );
				for($mq_i = 0; $mq_i < $meta_query_total; $mq_i++){
					$args['meta_query'][] = alm_get_meta_query($meta_keys[$mq_i], $meta_value[$mq_i], $meta_compare[$mq_i], $meta_type[$mq_i]);
				}

   	   }

         // Meta_key
         if(!empty($meta_key)){ // ordering by meta value
	         if (strpos($orderby, 'meta_value') !== false) { // Only order by meta_key, if $orderby is set to meta_value{_num}
	            $meta_key_single = explode(":", $meta_key);
               $args['meta_key'] = $meta_key_single[0];
            }
         }

         // Author
   		if(!empty($author)){
   			$args['author'] = $author;
   		}

   		// Include Posts
   		if(!empty($post__in)){
   			$post__in = explode(",",$post__in);
   			$args['post__in'] = $post__in;
   		}

   		// Exclude Posts
   		if(!empty($post__not_in)){
   			$post__not_in = explode(",",$post__not_in);
   			$args['post__not_in'] = $post__not_in;
   		}
   		if(!empty($exclude)){ // Deprecate this soon - 2.8.5 */
   			$exclude = explode(",",$exclude);
   			$args['post__not_in'] = $exclude;
   		}

         // Search Term
   		if(!empty($s)){
   			$args['s'] = $s;
   		}

         // Custom Args
   		if(!empty($custom_args)){
   			$custom_args_array = explode(";",$custom_args); // Split the $custom_args at ','
   			foreach($custom_args_array as $argument){ // Loop each $argument

      			$argument = preg_replace('/\s+/', '', $argument); // Remove all whitespace
   			   $argument = explode(":",$argument);  // Split the $argument at ':'
   			   $argument_arr = explode(",", $argument[1]);  // explode $argument[1] at ','
   			   if(sizeof($argument_arr) > 1){
   			      $args[$argument[0]] = $argument_arr;
   			   }else{
   			      $args[$argument[0]] = $argument[1];
   			   }
   			}
   		}

         // Language
   		if(!empty($lang)){
   			$args['lang'] = $lang;
   		}

         // Sticky Posts
         if($sticky){
            $sticky_posts = get_option( 'sticky_posts' ); // Get all sticky post ids

            $sticky_query_args = $args;
            $sticky_query_args['post__not_in'] = $sticky_posts;
            $sticky_query_args['posts_per_page'] = -1;
            $sticky_query_args['fields'] = 'ids';

            $sticky_query = new WP_Query($sticky_query_args); // Query all non sticky posts

            // If has sticky and regular posts
            if($sticky_posts && $sticky_query->posts){
               $standard_posts = $sticky_query->posts;
               if($standard_posts){
                  $sticky_ids = array_merge($sticky_posts, $standard_posts); // merge regular posts with sticky
                  $args['post__in'] = $sticky_ids;
                  $args['orderby'] = 'post__in'; // set orderby to order by post__in.
               }
            }
         }

   		// Advanced Custom Fields
   		if(!empty($acf) && !empty($acf_post_id) && !empty($acf_field_type) && !empty($acf_field_name)){
      		if($acf_field_type === 'relationship'){ // Relationship Field
               $acf_post_ids = get_field($acf_field_name, $acf_post_id); // Get field value from ACF
               if($acf_post_ids){
                  $args['post__in'] = $acf_post_ids;
               }
            }
         }


   		// Get current page number for determining item number
   		$alm_page_count = ($page == 0) ? 1 : $page + 1;



   		/*
	   	 *	alm_prev_post_args
	   	 *
	   	 * Previous Post Add-on hook
	   	 * Hijack $args and and return previous post only $args
	   	 *
	   	 * @return $args;
	   	 */
   		if($previous_post && has_action('alm_prev_post_installed')){
      		$args = apply_filters('alm_prev_post_args', $previous_post_id, $postType);
         }



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
         $args = apply_filters('alm_query_args_'.$id, $args, $post_id); // ALM Core Filter Hook



   		/*
	   	 *	WP_Query
	   	 *
	   	 * ALM Query
	   	 *
	   	 * @return $alm_query;
	   	 */

   		$alm_query = new WP_Query( $args );


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

	   		// Run the loop

	   		if ($alm_query->have_posts()) {

		         $alm_found_posts = $alm_total_posts;
	            $alm_post_count = $alm_query->post_count;
	            $alm_current = 0;
	            $alm_has_cta = false;

               $cta_array = Array();
	            if($cta && has_action('alm_cta_pos_array')){ // Build CTA Position Array
		            $cta_array = apply_filters('alm_cta_pos_array', $seo_start_page, $page, $posts_per_page, $alm_post_count, $cta_val, $cta_repeat);
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
      	         if($previous_post){
         	         // Previous Post Cache
   	               apply_filters('alm_previous_post_cache_file', $cache_id, $previous_post_id, $data);
      	         }else{
         	         // Standard Cache
   	               apply_filters('alm_cache_file', $cache_id, $page, $seo_start_page, $data, $preloaded);
   	            }
   	         }



   	         /*
			   	 *	alm_debug
			   	 *
			   	 * ALM Core Filter Hook
			   	 *
			   	 * @return $alm_query/false;
			   	 */
   	         $debug = (apply_filters('alm_debug', false)) ? $alm_query : false;


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
                     'debug'		 => null
                  )
               );
               wp_send_json($return);

	   		}

   		}
   		elseif($queryType === 'totalposts'){ // Paging add-on

	   		echo $alm_total_posts;

	   	}

	   	wp_die();
   	}

   }


   /*
   *  AjaxLoadMore
   *  The main function responsible for returning the one true AjaxLoadMore Instance to functions everywhere.
   *
   *  @since 2.0.0
   */

   function AjaxLoadMore(){
   	global $ajax_load_more;

   	if( !isset($ajax_load_more))
   		$ajax_load_more = new AjaxLoadMore();

   	return $ajax_load_more;
   }
   AjaxLoadMore(); // initialize


endif; // class_exists check
