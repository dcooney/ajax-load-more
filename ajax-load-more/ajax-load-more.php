<?php
/*
Plugin Name: Ajax Load More
Plugin URI: http://connekthq.com/plugins/ajax-load-more
Description: A simple solution for Ajax lazy loading of WordPress Posts and Pages.
Author: Darren Cooney
Twitter: @KaptonKaos
Author URI: http://connekthq.com
Version: 2.0.12
License: GPL
Copyright: Darren Cooney & Connekt Media
*/

		
define('ALM_VERSION', '2.0.12');
define('ALM_RELEASE', 'June 18, 2014');

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
		// Removed in 2.0.11
		/*
		   add_filter('widget_text', array(&$this, 'shortcode_unautop'));
		*/
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
				'tag' => '',
				'author' => '',
				'search' => '',
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
		
		return '<'.$wrap_element.' id="ajax-load-more" class="'. $btn_color .'"><'.$container_element.' class="alm-listing'. $classname . '" data-repeater="'.$repeater.'" data-post-type="'.$post_type.'" data-category="'.$category.'" data-taxonomy="'.$taxonomy.'" data-tag="'.$tag.'" data-author="'.$author.'" data-exclude="'.$exclude.'" data-offset="'.$offset.'" data-posts-per-page="'.$posts_per_page.'" data-search="'.$search.'" data-scroll="'.$scroll.'" data-max-pages="'.$max_pages.'"  data-pause="'. $pause .'" data-button-label="'.$button_label.'" data-transition="'.$transition.'"></'.$container_element.'></'.$wrap_element.'>';
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
		$tag = (isset($_GET['tag'])) ? $_GET['tag'] : '';
		$s = (isset($_GET['search'])) ? $_GET['search'] : '';
		$exclude = (isset($_GET['exclude'])) ? $_GET['exclude'] : '';
		$numPosts = (isset($_GET['numPosts'])) ? $_GET['numPosts'] : 6;
		$page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;
		$offset = (isset($_GET['offset'])) ? $_GET['offset'] : 0;


		// Set up initial args

		$args = array(
			'post_type' => $postType,
			'category_name' => $category,
			'author' => $author_id,
			'posts_per_page' => $numPosts,
			'offset' => $offset + ($numPosts*$page),
			's' => $s,
			'orderby' => 'date',
			'order' => 'DESC',
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
		);


		// Exclude posts if needed - See plugin examples for more info on excluding posts

		if(!empty($exclude)){
			$exclude=explode(",",$exclude);
			$args['post__not_in'] = $exclude;
		}


		// Query by Taxonomy/Tag - Taxonomy is deprecated for now

		if(empty($taxonomy)){
			$args['tag'] = $tag;
		}else{
			$args[$taxonomy] = $tag;
		}


		// Query by $args

		$alm_query = new WP_Query( $args );


		// the WP loop

		if ($alm_query->have_posts()) :
			while ($alm_query->have_posts()): $alm_query->the_post();	
		
			$file = $repeater;
			$include = '';
			if (has_action('alm_repeater_installed')){ // If Custom Repeaters is installed
				if($file == 'repeater1'){
					$include = ALM_REPEATER_PATH . 'repeaters/repeater1.php';
				}elseif($file == 'repeater2'){
					$include = ALM_REPEATER_PATH . 'repeaters/repeater2.php';
				}elseif($file == 'repeater3'){
					$include = ALM_REPEATER_PATH . 'repeaters/repeater3.php';
				}elseif($file == 'repeater4'){
					$include = ALM_REPEATER_PATH . 'repeaters/repeater4.php';
				}elseif($file == 'repeater5'){
					$include = ALM_REPEATER_PATH . 'repeaters/repeater5.php';
				}else{
					$include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';
				}				
			}else{				
				$include = plugin_dir_path( __FILE__ ) . 'core/repeater/default.php';
			}
						
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
