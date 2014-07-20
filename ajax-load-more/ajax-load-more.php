<?php
/*
Plugin Name: Ajax Load More
Plugin URI: http://connekthq.com/plugins/ajax-load-more
Description: A simple yet powerful solution for lazy loading WordPress posts and pages with Ajax.
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: http://connekthq.com
Version: 2.1.1
License: GPL
Copyright: Darren Cooney & Connekt Media
*/

		
define('ALM_VERSION', '2.1.1');
define('ALM_RELEASE', 'July 20, 2014');

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
	
	// Updated 2.0.5
	// Check column 'name' exists in $wpdb - this is an upgrade checker.	
	$row = $wpdb->get_results("SELECT COLUMN_NAME FROM $table_name.COLUMNS WHERE column_name = 'name'");
	if(empty($row)){
      $wpdb->query("ALTER TABLE $table_name ADD name text NOT NULL");
      $wpdb->update($table_name , array('name' => 'default'), array('id' => 1));
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
		add_shortcode('ajax_load_more', array(&$this, 'alm_shortcode'));
		
		// Allow shortcodes in widget areas
		add_filter('widget_text', 'do_shortcode');
		
		// load text domain
		load_plugin_textdomain( 'ajax-load-more', false, dirname( plugin_basename( __FILE__ ) ) . '/lang/' );
		
		// includes Admin  core
		$this->alm_before_theme();	
			
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
	*  alm_enqueue_scripts
	*  Enqueue our scripts and create our localize variables
	*
	*  @since 2.0.0
	*/

	function alm_enqueue_scripts(){
		$options = get_option( 'alm_settings' );
		wp_enqueue_script( 'ajax-load-more', plugins_url( '/core/js/ajax-load-more.js', __FILE__ ), array('jquery'),  '1.1', true );
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
				'repeater' => 'default',
				'post_type' => 'post',
				'category' => '',
				'taxonomy' => '',
				'taxonomy_terms' => '',
				'taxonomy_operator' => '',
				'tag' => '',
				'author' => '',
				'search' => '',
				'order' => '',
				'orderby' => '',
				'exclude' => '',
				'offset' => '0',
				'posts_per_page' => '5',
				'scroll' => 'true',
				'max_pages' => '5',
				'pause' => 'false',
				'transition' => 'slide',
				'button_label' => 'Older Posts'
			),
			$atts));

		// Use HTML5 elements?
		$wrap_element = 'div';
		if(isset($options['_alm_html5']) ||  $options['_alm_html5'] == '1'){
			$wrap_element = 'section';
		}
		$container_element = 'ul';
		if($options['_alm_container_type'] == '2'){
			$container_element = 'div';
		}
		$classname = '';
		if(isset($options['_alm_classname'])){
			$classname = ' '.$options['_alm_classname'];
		}
		
		$btn_color = '';
		if(isset($options['_alm_btn_color'])){
			$btn_color = ' '.$options['_alm_btn_color'];
		}
		
		return '<'.$wrap_element.' id="ajax-load-more" class="'. $btn_color .'"><'.$container_element.' class="alm-listing'. $classname . '" data-repeater="'.$repeater.'" data-post-type="'.$post_type.'" data-category="'.$category.'" data-taxonomy="'.$taxonomy.'" data-taxonomy-terms="'.$taxonomy_terms.'" data-taxonomy-operator="'.$taxonomy_operator.'" data-tag="'.$tag.'" data-author="'.$author.'" data-search="'.$search.'" data-order="'.$order.'" data-orderby="'.$orderby.'" data-exclude="'.$exclude.'" data-offset="'.$offset.'" data-posts-per-page="'.$posts_per_page.'" data-scroll="'.$scroll.'" data-max-pages="'.$max_pages.'"  data-pause="'. $pause .'" data-button-label="'.$button_label.'" data-transition="'.$transition.'"></'.$container_element.'></'.$wrap_element.'>';
	}


	/*
	*  alm_query_posts
	*  Ajax Load More Public Query
	*
	*  @since 2.0.0
	*/

	function alm_query_posts() {

		$nonce = $_GET['nonce'];

		// Check our nonce, if they don't match then bounce!
		if (! wp_verify_nonce( $nonce, 'ajax_load_more_nonce' ))
			die('Get Bounced!');

		$repeater = (isset($_GET['repeater'])) ? $_GET['repeater'] : 'default';
		$postType = (isset($_GET['postType'])) ? $_GET['postType'] : 'post';
		$category = (isset($_GET['category'])) ? $_GET['category'] : '';
		$author_id = (isset($_GET['author'])) ? $_GET['author'] : '';
		
		$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';
		$taxonomy_terms = (isset($_GET['taxonomy_terms'])) ? $_GET['taxonomy_terms'] : '';
		$taxonomy_operator = $_GET['taxonomy_operator'];
		if($taxonomy_operator == ''){
			$taxonomy_operator = 'IN';
		}
		
		$post_format = (isset($_GET['postFormat'])) ? $_GET['postFormat'] : '';
		$tag = (isset($_GET['tag'])) ? $_GET['tag'] : '';
		$s = (isset($_GET['search'])) ? $_GET['search'] : '';
		$order = (isset($_GET['order'])) ? $_GET['order'] : 'DESC';
		$orderby = (isset($_GET['orderby'])) ? $_GET['orderby'] : 'date';
		$exclude = (isset($_GET['exclude'])) ? $_GET['exclude'] : '';
		$numPosts = (isset($_GET['numPosts'])) ? $_GET['numPosts'] : 6;
		$page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;
		$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;


		// Set up initial args

		$args = array(
			'post_type' => $postType,
			'category_name' => $category,
			'tag' => $tag,
			'author' => $author_id,
			'posts_per_page' => $numPosts,
			'offset' => $offset + ($numPosts*$page),
			's' => $s,
			'order' => $order,
			'orderby' => $orderby,
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
		);


		// Exclude posts if needed - See plugin examples for more info on excluding posts

		if(!empty($exclude)){
			$exclude=explode(",",$exclude);
			$args['post__not_in'] = $exclude;
		}


		// Taxonomy query
		if(!empty($taxonomy)){	
			$the_terms = explode(", ", $taxonomy_terms);	
			$args['tax_query'] = array(
				'relation' => 'OR',
				array(
			        'taxonomy' => $taxonomy,
			        'field' => 'slug',
			        'terms' => $the_terms,
			        'operator' => $taxonomy_operator
				),
			);
	    }
		

		// Query by $args

		$alm_query = new WP_Query( $args );


		// the WP loop

		if ($alm_query->have_posts()) :
			while ($alm_query->have_posts()): $alm_query->the_post();			
			$file = $repeater;
			$include = '';
			$found = false;
			if (has_action('alm_repeater_installed')){// If Custom Repeaters is installed
			   $repeaterLength = ALM_REPEATER_LENGTH;
			   if(!defined('ALM_REPEATER_LENGTH')){
   			   $repeaterLength = 6;
			   }
			   for ($i = 2; $i <= $repeaterLength + 2; $i++) {
			      $repeaterVal = 'repeater' . $i;
   				if($file == $repeaterVal){
   					$include = ALM_REPEATER_PATH . 'repeaters/'. $file .'.php';      					
         			//confirm file exists
         			if(!file_exists($include)){		
         			   $include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';   
         			}					   
   					$found = true;
   				}
				}
				if(!$found){
   				$include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';
				}	
			}else{				
				$include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';
			}		
						
			//Include file	
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
