<?php
/*
Plugin Name: Ajax Load More
Plugin URI: http://connekthq.com/plugins/ajax-load-more
Description: The ultimate solution to add infinite scroll functionality to your website.
Text Domain: ajax-load-more
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: http://connekthq.com
Version: 2.11.1
License: GPL
Copyright: Darren Cooney & Connekt Media
*/	  

   		
define('ALM_VERSION', '2.11.1');
define('ALM_RELEASE', 'May 30, 2016');
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
	
	$defaultRepeater = '<li <?php if (!has_post_thumbnail()) { ?> class="no-img"<?php } ?>><?php if ( has_post_thumbnail() ) { the_post_thumbnail(array(150,150));}?><h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3><p class="entry-meta"><?php the_time("F d, Y"); ?></p><?php the_excerpt(); ?></li>';	
	
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
         
         if (!defined('ALM_ALTERNATING_ITEM_NAME')) define('ALM_ALTERNATING_ITEM_NAME', '14456');
         if (!defined('ALM_CACHE_ITEM_NAME')) define('ALM_CACHE_ITEM_NAME', '4878');
         if (!defined('ALM_COMMENTS_ITEM_NAME')) define('ALM_COMMENTS_ITEM_NAME', '12172');
         if (!defined('ALM_UNLIMITED_ITEM_NAME')) define('ALM_UNLIMITED_ITEM_NAME', '3118');
         if (!defined('ALM_LAYOUTS_ITEM_NAME')) define('ALM_LAYOUTS_ITEM_NAME', '11398');
         if (!defined('ALM_PAGING_ITEM_NAME')) define('ALM_PAGING_ITEM_NAME', '6898');
         if (!defined('ALM_PRELOADED_ITEM_NAME')) define('ALM_PRELOADED_ITEM_NAME', '4293');
         if (!defined('ALM_PREV_POST_ITEM_NAME')) define('ALM_PREV_POST_ITEM_NAME', '9686');
         if (!defined('ALM_RESTAPI_ITEM_NAME')) define('ALM_RESTAPI_ITEM_NAME', '17105');
         if (!defined('ALM_SEO_ITEM_NAME')) define('ALM_SEO_ITEM_NAME', '3482');
         if (!defined('ALM_THEME_REPEATERS_ITEM_NAME')) define('ALM_THEME_REPEATERS_ITEM_NAME', '8860');
      	
      }
   		
   	
   	/*
   	*  alm_includes
   	*  Load these files before the theme loads
   	*
   	*  @since 2.0.0
   	*/
   	
   	public function alm_includes(){
      	
      	include_once( ALM_PATH . 'core/functions.php'); // Functions
      	include_once( ALM_PATH . 'core/classes/class.alm-shortcode.php'); // Shortcode
      	include_once( ALM_PATH . 'core/classes/class.alm-enqueue.php'); // Enqueue
      	
   		if( is_admin() ){
   			include_once('admin/editor/editor.php');
   			include_once('admin/admin.php');
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
   		$options = get_option( 'alm_settings' ); 
   		
   		// Load JS   		   		
   		//wp_register_script( 'ajax-load-more', plugins_url( '/core/js/ajax-load-more.js', __FILE__ ), array('jquery'),  ALM_VERSION, true );
   		wp_register_script( 'ajax-load-more', plugins_url( '/core/js/ajax-load-more.min.js', __FILE__ ), array('jquery'),  ALM_VERSION, true );    
   				  		
   		
   		// Load CSS   	 	  		
   		if(!isset($options['_alm_disable_css']) || $options['_alm_disable_css'] != '1'){   		
      		
         	//$file = plugins_url('/core/css/ajax-load-more.css', __FILE__ );
         	$file = plugins_url('/core/css/ajax-load-more.min.css', __FILE__ );
         	
         	$filename = 'ajax-load-more';
            ALM_ENQUEUE::alm_enqueue_css($filename, $file);
         	 			
   		} 
   		
   		// Prevent loading of unnessasry posts - move user to top of page
   		$scrolltop = 'false';
   		if(!isset($options['_alm_scroll_top']) || $options['_alm_scroll_top'] != '1'){ // if unset or false
   			$scrolltop = 'false';
   		}else{ // if checked
      		$scrolltop = 'true';
   		}
   		
   		wp_localize_script(
   			'ajax-load-more', 'alm_localize',
   			array(
   				'ajaxurl'   => admin_url('admin-ajax.php'),
   				'alm_nonce' => wp_create_nonce( "ajax_load_more_nonce" ),
   				'pluginurl' => ALM_URL,
   				'scrolltop' => $scrolltop,
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
      	   		
   		$nonce = $_GET['nonce'];   		
   		$options = get_option( 'alm_settings' );   		
   		if(!is_user_logged_in()){ // Skip nonce verification if user is logged in      		   
   		   $options = get_option( 'alm_settings' );   		   
   		   // check alm_settings for _alm_nonce_security
   		   if(isset($options['_alm_nonce_security']) & $options['_alm_nonce_security'] == '1'){        		   		   
      		   if (! wp_verify_nonce( $nonce, 'ajax_load_more_nonce' )) // Check our nonce, if they don't match then bounce!
      		      die('Error, could not verify WP nonce.');      		      
            }
         }     
   		
   		$slug = (isset($_GET['slug'])) ? $_GET['slug'] : '';
   		$canonical_url = (isset($_GET['canonical_url'])) ? $_GET['canonical_url'] : $_SERVER['HTTP_REFERER'];
   
   		$queryType = (isset($_GET['query_type'])) ? $_GET['query_type'] : 'standard';	// 'standard' or 'totalposts'; totalposts returns $alm_found_posts
   		
   		$cache_id = (isset($_GET['cache_id'])) ? $_GET['cache_id'] : '';	
   		
   		$repeater = (isset($_GET['repeater'])) ? $_GET['repeater'] : 'default';		
   		$type = alm_get_repeater_type($repeater);
   		$theme_repeater = (isset($_GET['theme_repeater'])) ? $_GET['theme_repeater'] : 'null';	
   		
   		// Alternate Template data array - from ajax-load-more.js
         $alternate = false;
         $alternateData = (isset($_GET['alternate'])) ? $_GET['alternate'] : '';
         if($alternateData){
            $alternate = true;
   		   $alternate_sequence = (isset($alternateData['alternate_sequence'])) ? $alternateData['alternate_sequence'] : '';
   		   $alternate_sequence_max = (isset($alternateData['alternate_sequence_max'])) ? $alternateData['alternate_sequence_max'] : '9999';
            if($alternate_sequence_max === '0')
               $alternate_sequence_max = '9999';
   		   $alternate_repeater = (isset($alternateData['alternate_repeater'])) ? $alternateData['alternate_repeater'] : 'null';
   		   $alternate_theme_repeater = (isset($alternateData['alternate_theme_repeater'])) ? $alternateData['alternate_theme_repeater'] : 'null';
         }
   		
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
   		$author_id = (isset($_GET['author'])) ? $_GET['author'] : '';
   		
   		// Ordering
   		$order = (isset($_GET['order'])) ? $_GET['order'] : 'DESC';
   		$orderby = (isset($_GET['orderby'])) ? $_GET['orderby'] : 'date';
   		
   		// Include, Exclude, Offset, Status
   		$post__in = (isset($_GET['post__in'])) ? $_GET['post__in'] : '';
   		$post__not_in = (isset($_GET['post__not_in'])) ? $_GET['post__not_in'] : '';	
   		$exclude = (isset($_GET['exclude'])) ? $_GET['exclude'] : '';		
   		$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;
   		$post_status = $_GET['post_status'];
   		if($post_status == '') $post_status = 'publish';   		
   		if($post_status != 'publish'){
      		// If not 'publish', confirm user has rights to view these old posts.
      		if (current_user_can( 'edit_theme_options' )){
         		$post_status = $post_status;
            } else {
               $post_status = 'publish';
            }
         }
   		
   		
   		// Page
   		$posts_per_page = (isset($_GET['posts_per_page'])) ? $_GET['posts_per_page'] : 5;		
   		$page = (isset($_GET['page'])) ? $_GET['page'] : 0;
   		
   		// Preload Add-on
   		$preloaded = (isset($_GET['preloaded'])) ? $_GET['preloaded'] : 'false'; 
   		$preloaded_amount = (isset($_GET['preloaded_amount'])) ? $_GET['preloaded_amount'] : '5';  
   		if(has_action('alm_preload_installed') && $preloaded === 'true'){   		
   		   // If preload - offset the ajax posts by posts_per_page + preload_amount val	 
   		   $old_offset = $preloaded_amount;  	
   		   $offset = $offset + $preloaded_amount;	
         }
         
         //Previous Post Add-on
   		$is_previous_post = (isset($_GET['previous_post'])) ? $_GET['previous_post'] : false;
   		$previous_post_id = (isset($_GET['previous_post_id'])) ? $_GET['previous_post_id'] : '';
         
         // Paging Add-on
         $paging = (isset($_GET['paging'])) ? $_GET['paging'] : false;
         
         //SEO Add-on
   		$seo_start_page = (isset($_GET['seo_start_page'])) ? $_GET['seo_start_page'] : 1;         
   		
   		// Language (Is this needed?)   			
   		$lang = (isset($_GET['lang'])) ? $_GET['lang'] : '';
   
   		// Set up initial args      
         $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
   		$args = array(
   			'post_type'                => $postType,
   			'posts_per_page'           => $posts_per_page,
   			'offset'                   => $offset + ($posts_per_page*$page),
   			'order'                    => $order,
   			'orderby'                  => $orderby,	
   			'post_status'              => $post_status,
   			'ignore_sticky_posts'      => false,
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
               
               // Taxonomy and possibly Post Formats
            
      		   if($tax_query_total === 1){
         			$args['tax_query'] = array(
            			'relation' => $taxonomy_relation,
         			   alm_get_post_format($post_format),
         			   alm_get_taxonomy_query($taxonomy[0], $taxonomy_terms[0], $taxonomy_operator[0]),
         			);
      			}
      			
      			if($tax_query_total === 2){
         			$args['tax_query'] = array(
            			'relation' => $taxonomy_relation,
         			   alm_get_post_format($post_format),
         			   alm_get_taxonomy_query($taxonomy[0], $taxonomy_terms[0], $taxonomy_operator[0]),	
         			   alm_get_taxonomy_query($taxonomy[1], $taxonomy_terms[1], $taxonomy_operator[1]),		
         			);
      			}
      			
      			if($tax_query_total === 3){
         			$args['tax_query'] = array(
            			'relation' => $taxonomy_relation,
         			   alm_get_post_format($post_format),
         			   alm_get_taxonomy_query($taxonomy[0], $taxonomy_terms[0], $taxonomy_operator[0]),	
         			   alm_get_taxonomy_query($taxonomy[1], $taxonomy_terms[1], $taxonomy_operator[1]),	
         			   alm_get_taxonomy_query($taxonomy[2], $taxonomy_terms[2], $taxonomy_operator[2]),		
         			);
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
            
            if($meta_query_total == 1){
      			$args['meta_query'] = array(
      			   alm_get_meta_query($meta_keys[0], $meta_value[0], $meta_compare[0], $meta_type[0]),
      			);
   			}
   			if($meta_query_total == 2){
      			$args['meta_query'] = array(
         			'relation' => $meta_relation,
      			   alm_get_meta_query($meta_keys[0], $meta_value[0], $meta_compare[0], $meta_type[0]),	
      			   alm_get_meta_query($meta_keys[1], $meta_value[1], $meta_compare[1], $meta_type[1]),		
      			);
   			}
   			if($meta_query_total == 3){
      			$args['meta_query'] = array(
         			'relation' => $meta_relation,
      			   alm_get_meta_query($meta_keys[0], $meta_value[0], $meta_compare[0], $meta_type[0]),	
      			   alm_get_meta_query($meta_keys[1], $meta_value[1], $meta_compare[1], $meta_type[1]),	
      			   alm_get_meta_query($meta_keys[2], $meta_value[2], $meta_compare[2], $meta_type[2]),		
      			);
   			}
   			if($meta_query_total == 4){
      			$args['meta_query'] = array(
         			'relation' => $meta_relation,
      			   alm_get_meta_query($meta_keys[0], $meta_value[0], $meta_compare[0], $meta_type[0]),	
      			   alm_get_meta_query($meta_keys[1], $meta_value[1], $meta_compare[1], $meta_type[1]),	
      			   alm_get_meta_query($meta_keys[2], $meta_value[2], $meta_compare[2], $meta_type[2]),	
      			   alm_get_meta_query($meta_keys[3], $meta_value[3], $meta_compare[3], $meta_type[3]),		
      			);
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
   		if(!empty($author_id)){
   			$args['author'] = $author_id;
   		}     
         
   		// Include posts
   		if(!empty($post__in)){
   			$post__in = explode(",",$post__in);
   			$args['post__in'] = $post__in;
   		}  
         
   		// Exclude posts
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
   		
   		// Set current page number for determining item number		
   		if($page == 0){
            $alm_page_count = 1;
   		}else{   		
   		   $alm_page_count = $page + 1;
   		}   	   		
   		
   		
   		// Previous Post Add-on
   		// Hijack $args and and return previous post only   		
   		if($is_previous_post == 'true' && has_action('alm_prev_post_installed')){
      		$args = apply_filters('alm_prev_post_args', $previous_post_id, $postType);
         }
   		
         $args = apply_filters('alm_modify_query_args', $args, $slug); // ALM Core Filter Hook
         
   		// WP_Query()
   		$alm_query = new WP_Query( $args );	
   		
   		// If preload, set our loop count and total posts to
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
         
         // Create cache directory 
         if(!empty($cache_id) && has_action('alm_cache_create_dir')){    
            apply_filters('alm_cache_create_dir', $cache_id, $canonical_url);            
            $page_cache = ''; // set our page cache variable
         } 
         
         // Alternating Templates
         if($alternate && has_action('alm_alternating_installed')){
            $alternate_sequence_array = '';
            if($alternate_sequence === 'even'){
               $alternate_sequence_array = 'even';
            }else{
               $alternate_sequence_array = explode(',', $alternate_sequence);
            }
				$global_repeater = $repeater;
				$global_type = $type;
				$global_theme_repeater = $theme_repeater;
			}
         
         
         if($queryType === 'standard'){   		
	   		
	   		// Run the loop
	   		if ($alm_query->have_posts()) : 
	            $alm_found_posts = $alm_total_posts;  
	            $alm_current = 0; 	
	            
	            ob_start();
	            	     		   
	   			while ($alm_query->have_posts()): $alm_query->the_post();	
	   			
	   				$alm_loop_count++;  
	   				$alm_current++;	   
	   	         $alm_page = $alm_page_count; // Get page number      
	   	         $alm_item = ($alm_page_count * $posts_per_page) - $posts_per_page + $alm_loop_count; // Get current item            
	   				
	   				// Alternating Templates
	   				if($alternate && has_action('alm_alternating_installed') && $alm_page <= $alternate_sequence_max){
   	   				if (function_exists('alm_alternate_is_in_array')) {
      	   	         if(alm_alternate_is_in_array($alm_current, $alternate_sequence_array)){ // If $alm_current is found in array
         	   	         if($alternate_theme_repeater != 'null' && has_filter('alm_get_theme_repeater')){
            	   	         $theme_repeater = $alternate_theme_repeater;
               			   }else{
                  			   $repeater = $alternate_repeater;
                  			   $type = alm_get_repeater_type($repeater);
               			   }  
            			   }else{ // Reset $repeater values
               			   $repeater = $global_repeater;
               			   $type = $global_type;
               			   $theme_repeater = $global_theme_repeater;
            			   } 
         			   }
      			   }  
	   				
	   				if($theme_repeater != 'null' && has_action('alm_get_theme_repeater')){
		   				do_action('alm_get_theme_repeater', $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current); // Theme Repeater
						}else{
							include( alm_get_current_repeater($repeater, $type) ); //Include repeater template
						}
	   					   					
	            endwhile; wp_reset_query();
	            
	            $data = ob_get_clean();
               
   	         // If Cache is enabled and seo_start_page is 1 (meaning, a user has not requested /page/12/)
   	         // - Only create cached files if the user visits pages in order 1, 2, 3 etc.   	         
   	         if(!empty($cache_id) && has_action('alm_cache_installed') && $seo_start_page <= 1){ 
   	            apply_filters('alm_cache_file', $cache_id, $page, $data);
   	         }   	         
   	                  
   	         $return = array(
                  'html' => $data
               );
               
               wp_send_json($return);
	         
	   		else :
	   		   
	   		   $return = array(
                  'html' => null
               );
               wp_send_json($return);
	   		
	   		endif;
   		
   		}elseif($queryType === 'totalposts'){
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
   // initialize
   AjaxLoadMore();
   

endif; // class_exists check
