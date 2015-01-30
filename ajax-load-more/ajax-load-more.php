<?php
/*
Plugin Name: Ajax Load More
Plugin URI: http://connekthq.com/plugins/ajax-load-more
Description: A simple solution for lazy loading WordPress posts and pages with Ajax
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: http://connekthq.com
Version: 2.4.1
License: GPL
Copyright: Darren Cooney & Connekt Media
*/		
define('ALM_VERSION', '2.4.1');
define('ALM_RELEASE', 'January 13, 2015');
/*
*  alm_install
*  Create table for storing repeater
*
*  @since 2.0.0
*/

register_activation_hook( __FILE__, 'alm_install' );
function alm_install() {   	
	global $wpdb;	
	$table_name = $wpdb->prefix . "alm";
	$defaultRepeater = '<li><?php if ( has_post_thumbnail() ) { the_post_thumbnail(array(100,100));}?><h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3><p class="entry-meta"><?php the_time("F d, Y"); ?></p><?php the_excerpt(); ?></li>';	
		
	//Create table, if it doesn't already exist.	
	if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {	
		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			name text NOT NULL,
			repeaterDefault longtext NOT NULL,
			pluginVersion text NOT NULL,
			UNIQUE KEY id (id)
		);";		
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
		
		//Insert default data in newly created table
		$wpdb->insert($table_name , array('name' => 'default', 'repeaterDefault' => $defaultRepeater, 'pluginVersion' => ALM_VERSION));
	}			
}



if( !class_exists('AjaxLoadMore') ):
	class AjaxLoadMore {	
	function __construct(){	   
		define('ALM_PATH', plugin_dir_path(__FILE__));
		define('ALM_URL', plugins_url('', __FILE__));
		define('ALM_ADMIN_URL', plugins_url('admin/', __FILE__));
		define('ALM_NAME', '_ajax_load_more');
		define('ALM_TITLE', 'Ajax Load More');		
		
		add_action('wp_ajax_ajax_load_more_init', array(&$this, 'alm_query_posts'));
		add_action('wp_ajax_nopriv_ajax_load_more_init', array(&$this, 'alm_query_posts'));
		add_action('wp_enqueue_scripts', array(&$this, 'alm_enqueue_scripts'));		
		add_action('alm_get_repeater', array(&$this, 'alm_get_current_repeater'));		
		add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), array(&$this, 'alm_action_links'));

		add_shortcode('ajax_load_more', array(&$this, 'alm_shortcode'));		
		
		// Allow shortcodes in widget areas
		add_filter('widget_text', 'do_shortcode');
		
		// load text domain
		load_plugin_textdomain( 'ajax-load-more', false, dirname( plugin_basename( __FILE__ ) ) . '/lang/' );
		
		// includes Admin  core
		$this->alm_before_theme();		
		
		// set up variables
		$total = 0;					
	}	
		
	
	/*
	*  alm_before_theme
	*  Load these files before the theme loads
	*
	*  @since 2.0.0
	*/
	
	function alm_before_theme(){
		if( is_admin()){
			include_once('admin/editor.php');
			include_once('admin/admin.php');
		}		
   }
   
	/*
	*  alm_action_links
	*  Add plugin action links to WP plugin screen
	*
	*  @since 2.2.3
	*/   
   
   function alm_action_links( $links ) {
      $links[] = '<a href="'. get_admin_url(null, 'admin.php?page=ajax-load-more') .'">Settings</a>';
      $links[] = '<a href="'. get_admin_url(null, 'admin.php?page=ajax-load-more-shortcode-builder') .'">Shortcode  Builder</a>';
      return $links;
   }



	/*
	*  alm_enqueue_scripts
	*  Enqueue our scripts and create our localize variables
	*
	*  @since 2.0.0
	*/

	function alm_enqueue_scripts(){
		$options = get_option( 'alm_settings' );
		//wp_enqueue_script( 'ajax-load-more', plugins_url( '/core/js/ajax-load-more.js', __FILE__ ), array('jquery'),  '1.1', true );
		wp_enqueue_script( 'ajax-load-more', plugins_url( '/core/js/ajax-load-more.min.js', __FILE__ ), array('jquery'),  '1.1', true );
		wp_localize_script(
			'ajax-load-more',
			'alm_localize',
			array(
				'ajaxurl'   => admin_url('admin-ajax.php'),
				'alm_nonce' => wp_create_nonce( "ajax_load_more_nonce" ),
				'pluginurl' => ALM_URL
			)
		);
		if(!isset($options['_alm_disable_css']) || $options['_alm_disable_css'] != '1'){
			wp_enqueue_style( 'ajax-load-more-css', plugins_url('/core/css/ajax-load-more.css', __FILE__ ));
		}
	}


	/*
	*  alm_shortcode
	*  The AjaxLoadMore shortcode
	*
	*  @since 2.0.0
	*/

	function alm_shortcode( $atts, $content = null ) {
		$options = get_option( 'alm_settings' ); //Get plugin options
		extract(shortcode_atts(array(
				'seo' => 'false',
				'repeater' => 'default',
				'post_type' => 'post',
				'post_format' => '',
				'category' => '',
				'taxonomy' => '',
				'taxonomy_terms' => '',
				'taxonomy_operator' => '',	
				'meta_key' => '',
				'meta_value' => '',
				'meta_compare' => '',	
				'tag' => '',
				'year' => '',
				'month' => '',
				'day' => '',
				'author' => '',
				'search' => '',						
				'post_status' => 'publish',					
				'order' => '',
				'orderby' => '',
				'exclude' => '',
				'offset' => '0',
				'posts_per_page' => '5',
				'scroll' => 'true',
				'max_pages' => '5',
				'pause' => 'false',
				'transition' => 'slide',
				'button_label' => 'Older Posts',			
			),
      $atts));
         
      // Get container elements (ul | div)
		$container_element = 'ul';
		if($options['_alm_container_type'] == '2'){
			$container_element = 'div';
		}
		// Get extra classnames
		$classname = '';
		if(isset($options['_alm_classname'])){
			$classname = ' '.$options['_alm_classname'];
		}
		// Get button color
		$btn_color = '';
		if(isset($options['_alm_btn_color'])){
			$btn_color = ' '.$options['_alm_btn_color'];
		}
		// Get btn classnames
		$button_classname = '';
		if(isset($options['_alm_btn_classname'])){
			$button_classname = $options['_alm_btn_classname'];
		}
		
		// Language support 
		
		// WPML - http://wpml.org
		$lang = defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : ''; // WPML
		
		// Polylang - https://wordpress.org/plugins/polylang/
		if (function_exists('pll_current_language'))
		   $lang = pll_current_language();
		   
      // qTranslate - https://wordpress.org/plugins/qtranslate/
		if (function_exists('qtrans_getLanguage'))
		   $lang = qtrans_getLanguage();      
		
		
		$ajaxloadmore = '<div id="ajax-load-more" class="ajax-load-more-wrap '. $btn_color .'">';
		$ajaxloadmore .= '<'.$container_element.' class="alm-listing alm-ajax'. $classname . '"';
		$ajaxloadmore .= ' data-repeater="'.$repeater.'"';
		$ajaxloadmore .= ' data-post-type="'.$post_type.'"';
		$ajaxloadmore .= ' data-post-format="'.$post_format.'"';
		$ajaxloadmore .= ' data-category="'.$category.'"';
		$ajaxloadmore .= ' data-taxonomy="'.$taxonomy.'"';
		$ajaxloadmore .= ' data-taxonomy-terms="'.$taxonomy_terms.'"';
		$ajaxloadmore .= ' data-taxonomy-operator="'.$taxonomy_operator.'"';
		$ajaxloadmore .= ' data-tag="'.$tag.'"';
		$ajaxloadmore .= ' data-meta-key="'.$meta_key.'"';
		$ajaxloadmore .= ' data-meta-value="'.$meta_value.'"';
		$ajaxloadmore .= ' data-meta-compare="'.$meta_compare.'"';
		$ajaxloadmore .= ' data-year="'.$year.'"';
		$ajaxloadmore .= ' data-month="'.$month.'"';
		$ajaxloadmore .= ' data-day="'.$day.'"';
		$ajaxloadmore .= ' data-author="'.$author.'"';
		$ajaxloadmore .= ' data-search="'.$search.'"';
		$ajaxloadmore .= ' data-post-status="'.$post_status.'"';
		$ajaxloadmore .= ' data-order="'.$order.'"';
		$ajaxloadmore .= ' data-orderby="'.$orderby.'"';
		$ajaxloadmore .= ' data-exclude="'.$exclude.'"';
		$ajaxloadmore .= ' data-offset="'.$offset.'"';	
		
		// Posts per page	
		$wp_posts_per_page = get_option( 'posts_per_page' );
		
		/* If posts per page on settings -> reading is great than shortcode value
		   & the SEO add-on is installed. 
         Set $posts_per_page to be new value
		*/
		if($wp_posts_per_page > $posts_per_page && has_action('alm_seo_installed') && $seo === 'true')
   		$posts_per_page = $wp_posts_per_page;
		
      $ajaxloadmore .= ' data-posts-per-page="'.$posts_per_page.'"';
      
		$ajaxloadmore .= ' data-lang="'.$lang.'"';
		$ajaxloadmore .= ' data-scroll="'.$scroll.'"';
		$ajaxloadmore .= ' data-max-pages="'.$max_pages.'"';
		$ajaxloadmore .= ' data-pause="'.$pause.'"';
		$ajaxloadmore .= ' data-button-label="'.$button_label.'"';
		$ajaxloadmore .= ' data-button-class="'.$button_classname.'"';
		$ajaxloadmore .= ' data-transition="'.$transition.'"';
		
		if(has_action('alm_seo_installed') && $seo === 'true'){
		   
		   // Get scroll speed
		   $seo_scroll_speed = '1000';
   		if(isset($options['_alm_seo_speed'])){
   			$seo_scroll_speed = ''.$options['_alm_seo_speed'];
   		}
   		
		   // Enabled Scrolling
			$ajaxloadmore .= ' data-test-seo-scroll="'.$options['_alm_seo_scroll'].'"';			
			$seo_enable_scroll = $options['_alm_seo_scroll'];
   		if(!isset($seo_enable_scroll) || empty($seo_enable_scroll)){
   			$seo_enable_scroll = 'true';   
         }else{	
      		if($seo_enable_scroll == '1'){
      		   $seo_enable_scroll = 'true';
            }else{
      		   $seo_enable_scroll = 'false';
      		}
   		}
   		
   		// Permalink Structure
   		$seo_permalink = 'pretty';
   		if(isset($options['_alm_seo_permalinks'])){
   			$seo_permalink = ''.$options['_alm_seo_permalinks'];
   		}
		   
		   // Get $paged var from WP
		   if ( get_query_var('paged') ) {
           $current_page = get_query_var('paged');
         } elseif ( get_query_var('page') ) {
           $current_page = get_query_var('page');
         } else {
           $current_page = 1;
         }	
			$ajaxloadmore .= ' data-seo="'.$seo.'"';		
			$ajaxloadmore .= ' data-seo-start-page="'.$current_page.'"';	
			$ajaxloadmore .= ' data-seo-scroll="'.$seo_enable_scroll.'"';
			$ajaxloadmore .= ' data-seo-scroll-speed="'.$seo_scroll_speed.'"';
			$ajaxloadmore .= ' data-seo-permalink="'.$seo_permalink.'"';	
					
      }      
		
		$ajaxloadmore .= '></'.$container_element.'>';
		$ajaxloadmore .= '</div>';
		
		return $ajaxloadmore;
	}


	/*
	*  alm_query_posts
	*  Ajax Load More Query
	*
	*  @since 2.0.0
	*/

	function alm_query_posts() {
		
		$nonce = $_GET['nonce'];
		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'ajax_load_more_nonce' ))
			die('Error, could not verify WP nonce.');

		$repeater = (isset($_GET['repeater'])) ? $_GET['repeater'] : 'default';		
		$type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater vale at number to determine type
		$type = $type[0]; // default | repeater | template_	
		
		$postType = (isset($_GET['postType'])) ? $_GET['postType'] : 'post';
		$postFormat = (isset($_GET['postFormat'])) ? $_GET['postFormat'] : '';
		$category = (isset($_GET['category'])) ? $_GET['category'] : '';
		$tag = (isset($_GET['tag'])) ? $_GET['tag'] : '';
		$author_id = (isset($_GET['author'])) ? $_GET['author'] : '';
		
		$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';
		$taxonomy_terms = (isset($_GET['taxonomy_terms'])) ? $_GET['taxonomy_terms'] : '';
		$taxonomy_operator = $_GET['taxonomy_operator'];
		if($taxonomy_operator == ''){
			$taxonomy_operator = 'IN';
		}
		
		$post_format = (isset($_GET['postFormat'])) ? $_GET['postFormat'] : '';
		$s = (isset($_GET['search'])) ? $_GET['search'] : '';
		
		$meta_key = (isset($_GET['meta_key'])) ? $_GET['meta_key'] : '';
		$meta_value = (isset($_GET['meta_value'])) ? $_GET['meta_value'] : '';
		$meta_compare = (isset($_GET['meta_compare'])) ? $_GET['meta_compare'] : '=';
		
		$year = (isset($_GET['year'])) ? $_GET['year'] : '';
		$month = (isset($_GET['month'])) ? $_GET['month'] : '';
		$day = (isset($_GET['day'])) ? $_GET['day'] : '';
		
		$post_status = (isset($_GET['post_status'])) ? $_GET['post_status'] : 'publish';
		$order = (isset($_GET['order'])) ? $_GET['order'] : 'DESC';
		$orderby = (isset($_GET['orderby'])) ? $_GET['orderby'] : 'date';
		$exclude = (isset($_GET['exclude'])) ? $_GET['exclude'] : '';
		$numPosts = (isset($_GET['numPosts'])) ? $_GET['numPosts'] : 5;
		$page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;
		$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;		
		$lang = (isset($_GET['lang'])) ? $_GET['lang'] : '';

		// Set up initial args      
      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$args = array(
			'post_type' => $postType,
			'posts_per_page' => $numPosts,
			'offset' => $offset + ($numPosts*$page),
			'order' => $order,
			'orderby' => $orderby,	
			'post_status' => $post_status,
			'ignore_sticky_posts' => false,
			'paged' => $paged,
		);
      
      // Category
		if(!empty($category)){
			$args['category_name'] = $category;
		}
      
      // Tag
		if(!empty($tag)){
			$args['tag'] = $tag;
		}
      
      // Author
		if(!empty($author_id)){
			$args['author'] = $author_id;
		}
      
      // Search Term
		if(!empty($s)){
			$args['s'] = $s;
		}
      
      // Language
		if(!empty($lang)){
			$args['lang'] = $lang;
		}

		// Exclude posts
		// - Please see plugin examples for more info on excluding posts
		
		if(!empty($exclude)){
			$exclude = explode(",",$exclude);
			$args['post__not_in'] = $exclude;
		}

      // Post Format
		if(!empty($postFormat)){	
		   $format = "post-format-$postFormat";
		   //If query is for standard then we need to filter by NOT IN
		   if($format == 'post-format-standard'){		   
	      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
               $terms = array();
               foreach ($post_formats[0] as $format) {
                  $terms[] = 'post-format-'.$format;
               }
            }		      
		      $args['tax_query'] = array(
   		   	array(
                  'taxonomy' => 'post_format',
                  'terms' => $terms,
                  'field' => 'slug',
                  'operator' => 'NOT IN'
               )
            );
		   }else{
   			$args['tax_query'] = array(
   				array(
   			        'taxonomy' => 'post_format',
   			        'field' => 'slug',
   			        'terms' => array($format),
   				)
   			);
			}
	   }
      
		// Taxonomy
		if(!empty($taxonomy)){	
			$the_terms = explode(", ", $taxonomy_terms);	
			$args['tax_query'] = array(
				array(
			        'taxonomy' => $taxonomy,
			        'field' => 'slug',
			        'terms' => $the_terms,
			        'operator' => $taxonomy_operator
				),
			);
	   }
	    
	   // Meta Query
		if(!empty($meta_key) && !empty($meta_value)){
			$args['meta_query'] = array(
				array(
			        'key' => $meta_key,
			        'value' => $meta_value,
			        'compare' => $meta_compare,
				),
			);
	   }
	   
      // Meta_key, used for ordering by meta value
      if(!empty($meta_key)){
         $args['meta_key'] = $meta_key;
      }     
	    
	   // Date Archives
	   // Not using date_query for now. Issue with year/month archives
		if(!empty($year)){
   		$args['year'] = $year;
	   } 
	   if(!empty($month)){
   		$args['monthnum'] = $month;
	   }  
	   if(!empty($day)){
   		$args['day'] = $day;
	   }       
      
		
		// Set current page number for determining item number		
		if($page == 0){
         $alm_page_count = 1;
		}else{   		
		   $alm_page_count = $page + 1;
		}
		

		// WP_Query()
		$alm_query = new WP_Query( $args );
		$total = $alm_query->found_posts - $offset;
		// Run the loop
		if ($alm_query->have_posts()) :
		
		   $alm_loop_count = 0;
		   
			while ($alm_query->have_posts()): $alm_query->the_post();			
			$template = $repeater;
			$include = '';
			$found = false;			
			//array_push($exclude, $post->ID); // Push post IDs into exclude array
			
			// If is Custom Repeaters add-on
			if( $type == 'repeater' && has_action('alm_repeater_installed' ))
			{ 
				$include = ALM_REPEATER_PATH . 'repeaters/'. $template .'.php';      					
   			
   			if(!file_exists($include)){ //confirm file exists        			
   			   $include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php'; 
   			}	
   			
			}
         // If is Unlimited add-ons
			elseif( $type == 'template_' && has_action('alm_unlimited_installed' ))
			{
				$include = ALM_UNLIMITED_REPEATER_PATH. ''.$template.'.php';      					
   			
   			if(!file_exists($include)){ //confirm file exists        			
   			   $include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php'; 
   			}
			
			}
			// Default repeater
			else
			{				
				$include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';
			}				
			
			// Get page number and current item in overall loop				
			$alm_loop_count++;         
         $alm_page = $alm_page_count;         
         $alm_item = ($alm_page_count * $numPosts) - $numPosts + $alm_loop_count;	         
         $alm_found_posts = $total;
							
			//Include repeater template	
			include( $include );	
					
         endwhile;
		endif;
		wp_reset_query();
		exit;
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

	if( !isset($ajax_load_more) )
	{
		$ajax_load_more = new AjaxLoadMore();
	}

	return $ajax_load_more;
}


// initialize
AjaxLoadMore();

endif; // class_exists check
