<?php
/**
 * Ajax Load More Shortcode
 *
 * Returns [ajax_load_more {params}] shortcode.
 *
 * @author   Darren Cooney
 * @since    2.10.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( !class_exists('ALM_SHORTCODE') ):

   class ALM_SHORTCODE {

      static $counter = 0;


      /**
	    * alm_render_shortcode
	    * Parse & render ALM shortcode.
   	 *
   	 * @since         2.10.1
   	 * @param $atts   Shortcode attributes
   	 * @return        $ajaxloadmore
   	 */

      public static function alm_render_shortcode($atts){
         
         
			// Get global $post obj
         global $post;


			// Get ALM options
   		$options = get_option( 'alm_settings' );
   		
   		
   		/*
	   	 *	alm_settings
	   	 * Override default ALM Settings
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return $options;
	   	 */
   		$options = (has_filter('alm_settings')) ? apply_filters('alm_settings', $options) : $options;
   		
   		
   		// Add count
   		self::$counter++;

   		// Define page slug
   		$slug = apply_filters('alm_page_slug', alm_get_page_slug($post));

   		// Define post ID
   		$post_id = apply_filters('alm_page_id', alm_get_page_id($post));

   		// Custom CSS for Layouts - Only run this once.
   		if(has_action('alm_layouts_custom_css')){
      		do_action('alm_layouts_custom_css', self::$counter);
         }   
         
         
         
         /*
	   	 *	alm_shortcode_defaults
	   	 * Set default shortcode values that can be over written via shortcode atts
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return $atts;
	   	 */
   		$default_atts = apply_filters('alm_shortcode_defaults', '');  
   		
   		// Merge arrays. Allows for defaults to be overwritten by the actual shortcode.
   		$atts = ($default_atts) ? array_merge($default_atts, $atts) : $atts;
   		
   		
         
         // Extact shortcode arrtibutes
   		extract(shortcode_atts(array(
	   		'nested' => false,
	   		'tabs' => false,
	   		'tab_template' => '',
	   		'filters' => false,
	   		'target' => '',
	   		'filters_url' => 'true',
	   		'filters_paging' => 'true',
	   		'filters_scroll' => 'false',
	   		'filters_scrolltop' => '30',
	   		'filters_analytics' => 'true',
	   		'filters_debug' => false,
	   		'term_query' => false,
	   		'term_query_taxonomy' => '',
	   		'term_query_fields' => 'all',
	   		'term_query_number' => '5',
				'acf' => false,
				'acf_post_id' => '',
				'acf_field_type' => 'repeater',
				'acf_field_name' => '',
				'acf_parent_field_name' => '',
   			'restapi' => false,
   			'restapi_base' => '/wp-json',
   			'restapi_namespace' => 'ajaxloadmore',
   			'restapi_endpoint' => 'posts',
   			'restapi_template_id' => '',
   			'restapi_debug' => false,
   			'users' => false,
   			'users_role' => '',
   			'users_include' => '',
   			'users_exclude' => '',
   			'users_per_page' => '5',
   			'users_order' => 'ASC',
   			'users_orderby' => 'login',
   			'comments' => false,
   			'comments_per_page' => '5',
   			'comments_type' => 'comment',
   			'comments_style' => 'ol',
   			'comments_template' => 'none',
   			'comments_callback' => '',
   			'comments_post_id' => '',
      		'nextpage' => false,
      		'nextpage_post_id' => '',      		
      		'nextpage_urls' => 'true',
      		'nextpage_scroll' => 'true:30',
      		'nextpage_pageviews' => 'true',
      		'nextpage_start' => 1,
      		'previous_post' => false,
      		'previous_post_id' => '',
      		'previous_post_order' => 'previous',
      		'previous_post_taxonomy' => '',
      		'previous_post_excluded_terms' => '',
      		'single_post' => false,
      		'single_post_id' => '',
      		'single_post_order' => 'previous',
      		'single_post_taxonomy' => '',
      		'single_post_excluded_terms' => '',
      		'single_post_progress_bar' => '',
   			'cache' => 'false',
   			'cache_id' => '',
   			'paging' => 'false',
   			'paging_controls' => 'false',
   			'paging_show_at_most' => '7',
   			'paging_classes' => '',
   			'paging_first_label' => apply_filters('alm_paging_first_label', ''),
   			'paging_last_label' => apply_filters('alm_paging_last_label', ''),
   			'paging_previous_label' => apply_filters('alm_paging_previous_label', '&laquo;'),
   			'paging_next_label' => apply_filters('alm_paging_next_label', '&raquo;'),
   			'preloaded' => 'false',
   			'preloaded_amount' => '5',
   			'seo' => 'false',
   			'repeater' => 'default',
   			'theme_repeater' => 'null',
   			'cta' => false,
   			'cta_position' => 'before:1',
   			'cta_repeater' => 'null',
   			'cta_theme_repeater' => 'null',
   			'masonry' => '',
   			'post_type' => 'post',
   			'sticky_posts' => false,
   			'post_format' => '',
   			'category' => '',
   			'category__and' => '',
   			'category__not_in' => '',
   			'tag' => '',
   			'tag__and' => '',
   			'tag__not_in' => '',
   			'taxonomy' => '',
   			'taxonomy_terms' => '',
   			'taxonomy_operator' => '',
   			'taxonomy_relation' => '',
   			'meta_key' => '',
   			'meta_value' => '',
   			'meta_compare' => '',
   			'meta_relation' => '',
   			'meta_type' => '',
   			'year' => '',
   			'month' => '',
   			'day' => '',
   			'author' => '',
   			'search' => '',
   			'custom_args' => '',
   			'post_status' => '',
   			'order' => 'DESC',
   			'orderby' => 'date',
   			'post__in' => '',
   			'post__not_in' => '',
   			'exclude' => '',
   			'offset' => '0',
   			'posts_per_page' => '5',
   			'scroll' => 'true',
   			'scroll_distance' => '100',
   			'scroll_container' => '',
   			'max_pages' => '0',
   			'pause_override' => 'false',
   			'pause' => 'false',
   			'destroy_after' => '',
   			'transition' => 'fade',
   			'transition_speed' => '250',
   			'transition_container' => 'true',
   			'transition_container_classes' => '',
   			'masonry_selector' => '',
   			'masonry_columnwidth' => '',
   			'masonry_animation' => '',
   			'masonry_horizontalorder' => '',
   			'progress_bar' => 'false',
   			'progress_bar_color' => 'ed7070',
   			'images_loaded' => 'false',
   			'button_label' => apply_filters('alm_button_label', __('Older Posts', 'ajax-load-more')),
   			'button_loading_label' => '',
   			'container_type' => '',
   			'css_classes' => '',
   			'loading_style' => '',
   			'id' => '',
   			'primary' => false,
   			'no_results_text' => '',
   			'placeholder' => '',
   			'archive' => false,
   			'woocommerce' => false,
   			'elementor' => false,
   		), $atts));  		
   			
   		
   		// Elementor
   		$elementor = ($elementor === 'true') ? true : false;
			if($elementor){				
				// If Elementor && not on a singular page, exit ALM.
				if(!is_singular($post_type)){
					return false;
				}
				$container_element = 'div';
				$offset = '1';
			} 
			
			
			// WooCommerce
			$woocommerce = ($woocommerce === 'true') ? true : false;
			
			
			// Archives
			$archive = ($archive === 'true') ? true : false;
   		
   		
   		// Backwards compat
   		// If $previous_post_ is true, set the $single_post_{value} params
   		if($previous_post === 'true'){
	   		$single_post = 'true';
	   		$single_post_id = $previous_post_id;
	   		$single_post_order = $previous_post_order;
	   		$single_post_taxonomy = $previous_post_taxonomy;
	   		$single_post_excluded_terms = $previous_post_excluded_terms;	   		
   		}


			// Start Enqueue Scripts
   		
   		
   		// Inline Core CSS
   		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_disable_css') && self::$counter === 1 ){
		   	$file = ALM_PATH . '/core/dist/css/'. ALM_SLUG .'.min.css'; // Core Ajax Load More
	         echo ALM_ENQUEUE::alm_inline_css(ALM_SLUG, $file, ALM_URL);
   		}

   		// Legacy Callback Helpers
   		if(isset($options['_alm_legacy_callbacks']) && $options['_alm_legacy_callbacks'] == '1'){ // Load if active
      	   wp_enqueue_script( 'ajax-load-more-legacy-callbacks' );
      	}
      	
   		// Core ALM
      	wp_enqueue_script( 'ajax-load-more' );

   		// Layouts
   		if(has_action('alm_layouts_installed')){      		
      		// Inline Layouts CSS      		
      		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && self::$counter === 1 ){
	      		if(defined('ALM_LAYOUTS_PATH') && defined('ALM_LAYOUTS_URL')){
	      			$file = ALM_LAYOUTS_PATH.'/core/css/ajax-load-more-layouts.min.css';
						echo ALM_ENQUEUE::alm_inline_css('ajax-load-more-layouts', $file, ALM_LAYOUTS_URL);
		         }
	      	}
         }
      	
			// Masonry
         if($transition === 'masonry'){
      		wp_enqueue_script( 'ajax-load-more-masonry' ); // Enqueue before core ALM
         }

         // Next Page
         if(has_action('alm_nextpage_installed') && $nextpage === 'true'){
      		wp_enqueue_script( 'ajax-load-more-nextpage' );
         }

   		// Paging
   		if(has_action('alm_paging_installed') && $paging === 'true'){
      		wp_enqueue_script( 'ajax-load-more-paging' );
      		wp_enqueue_script( 'ajax-load-more-images-loaded' ); // Required for Paging
      		
      		// Inline paging CSS      		
      		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_paging_disable_css') ){
	      		if(defined('ALM_PAGING_PATH') && defined('ALM_PAGING_URL')){
	      			$file = ALM_PAGING_PATH.'/core/css/ajax-load-more-paging.min.css';
						echo ALM_ENQUEUE::alm_inline_css('ajax-load-more-paging', $file, ALM_PAGING_URL);
		         }
	      	}
         }

			// Progress Bar
			if($progress_bar === 'true'){ // Enqueue bar JS
				wp_add_inline_script( 'ajax-load-more', 'window.paceOptions = {restartOnPushState: false};' );
         	wp_enqueue_script( 'ajax-load-more-progress' );
			}

         // Previous Post
         if(has_action('alm_single_post_installed') && $single_post === 'true'){
      		wp_enqueue_script( 'ajax-load-more-single-posts' );
         }

   		// SEO
   		if(has_action('alm_seo_installed') && $seo === 'true'){
      		wp_enqueue_script( 'ajax-load-more-seo' );
   		}

   		// Tabs
   		if(has_action('alm_tabs_installed') && $tabs === 'true'){
      		wp_enqueue_script( 'ajax-load-more-tabs' );
      		
      		// Inline tabs CSS      		
      		if( !is_admin() && alm_do_inline_css('_alm_inline_css') && !alm_css_disabled('_alm_tabs_disable_css') ){
	      		if(defined('ALM_TABS_PATH') && defined('ALM_TABS_URL')){
	      			$file = ALM_TABS_PATH.'/core/css/ajax-load-more-tabs.min.css';
						echo ALM_ENQUEUE::alm_inline_css('ajax-load-more-tabs', $file, ALM_TABS_URL);
		         }
	      	}
         }
   		         


         /*
	   	 *	alm_enqueue_external_scripts
	   	 *
	   	 * ALM Core Action
	   	 * Load JavaScript located in external add-ons and extensions
	   	 *
	   	 */
   		do_action('alm_enqueue_external_scripts', $atts);


   		// End Enqueue Scripts
   		
   		
   		// Filters - Set initial shortcode state
   		$filters = ($filters === 'true' && class_exists('ALMFilters')) ? true : false;
   		if($filters){      		
      		$single_post = $seo = $nextpage = false;
      		$transition_container = "true"; // required
      		if(defined('ALM_FILTERS_PATH')){
	   			include(ALM_FILTERS_PATH .'includes/initial-state-params.php');
	   		}
   		}   			
			
         $single_post = ($single_post === 'true') ? true : false;  

   		$transition_container = ($seo === "true" || $single_post || $filters) ? 'true' : $transition_container;         
         
         // Transition Container Classes
			$transition_container_classes = (!empty($transition_container_classes)) ? ' '. $transition_container_classes : '';
			
			
			// REST API
         if($restapi === 'true'){
            $restapi = true;
            $preloaded = false;
         }

         // Get container elements (ul | div)
   		$container_element = 'ul';
   		if($options['_alm_container_type'] == '2' || $single_post){
   			$container_element = 'div';
         }
         
         // CSS Classes
         $css_classes = (!empty($css_classes)) ? ' ' . $css_classes : '';

   		// override shortcode param
   		$container_element = ($container_type) ? $container_type : $container_element;

   		// Previous Post
   		if($single_post){
      		$posts_per_page = 1;
   			$container_element = 'div';   
   			$seo = false;		 
   		}
   		
   		// Users
   		$users = ($users === 'true') ? true : false;   	
   		
   		// Terms Query
   		$term_query = ($term_query === 'true') ? true : false; 
   		
   		// Comments
   		$container_element = ($comments === 'true') ? $comments_style : $container_element;

   		// Get extra classnames
   		$classname = '';
   		if(isset($options['_alm_classname'])){
   			$classname = $options['_alm_classname'];
   			$classname = (empty($classname)) ? '' : ' '.$classname;
   		}

   		// Get loading style (color/style)
   		$alm_loading_style = (isset($options['_alm_btn_color'])) ? ' '.$options['_alm_btn_color'] : ' default';
   		$alm_loading_style = ($loading_style !== '') ? ' ' . $loading_style : $alm_loading_style;

   		// Get paging color
   		$paging_color = (isset($options['_alm_paging_color']) && has_action('alm_paging_installed') && $paging === 'true') ? ' paging-'.$options['_alm_paging_color'] : '';

   		// Layouts Class
   		$alm_layouts = (has_action('alm_layouts_installed')) ? ' alm-layouts' : '';

   		// Tabs Class
   		$alm_tabs = (has_action('alm_tabs_installed') && $tabs === 'true') ? ' alm-tabs' : '';

   		// Get btn classnames
   		$button_classname = (isset($options['_alm_btn_classname'])) ? ' '.$options['_alm_btn_classname'] : '';

   		// Language support
   		$lang = defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : ''; // WPML - http://wpml.org
   		if (function_exists('pll_current_language')){ // Polylang - https://wordpress.org/plugins/polylang/
   		   $lang = pll_current_language();
         }
         if (function_exists('qtrans_getLanguage')){ // qTranslate - https://wordpress.org/plugins/qtranslate/
   		   $lang = qtrans_getLanguage();
   		}
			
			// Global Posts Per Page
   		$wp_posts_per_page = get_option( 'posts_per_page' ); // Posts per page	- settings -> reading

   		/* If $wp_posts_per_page > than shortcode value then $posts_per_page to $wp_posts_per_page */
   		if(has_action('alm_seo_installed') && $wp_posts_per_page > $posts_per_page && $seo === 'true'){
      		$posts_per_page = $wp_posts_per_page;
      	}

      	// Paging
      	$paging_container_class = '';
      	$paging_transition = '';
      	if($paging === 'true'){
         	$paging_container_class = ' alm-paging-wrap';
            $paging_transition = ' style="-webkit-transition: height 0.25s ease; transition: height 0.25s ease;"';
            // If Preloaded & Paging, pause loading by default.
         	if($preloaded === 'true'){
            	$pause = 'true';
            	$pause_override = 'false';
         	}
         }
         

   		// Start ALM object
   		$ajaxloadmore = '';		
   		
   		
   		$ajaxloadmore .= ALM_WOOCOMMERCE::hide_pagination($woocommerce);
   		$ajaxloadmore .= ALM_WOOCOMMERCE::hide_orderby($woocommerce);	
			

			/*
	   	 *	alm_before_container
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return html;
	   	 */
         $ajaxloadmore .= apply_filters('alm_before_container', '');

			// Generate ALM ID
         $div_id = (self::$counter > 1) ? 'ajax-load-more-'.self::$counter : 'ajax-load-more';
         
         // Localized ID - ID used for storin glocalized variables
   		$localize_id = (empty($id)) ? $div_id : 'ajax-load-more-'.$id;
   		
   		// Master ID - Manual or generated ALM ID
   		$master_id = (empty($id)) ? $div_id : $id;
   		
			// Custom unique ALM ID (shortcode)
         $unique_id = (!empty($id)) ? 'data-id="'.$id.'"' : '';

			// Search atts - Used with SEO
         $is_search = (is_search()) ? 'data-search="true"' : '';

			// Nested Instance
         $is_nested = ($nested === 'true') ? ' data-nested="true"' : '';

         // Build Canonical URL
         $canonicalURL = apply_filters('alm_canonical_url_'.$id, alm_get_canonical_url());
			
			// ALM Wrapper Class
			$alm_wrapper_class = ($woocommerce) ? 'ajax-load-more-wrap '. ALM_WOOCOMMERCE::get_wrapper_class() : 'ajax-load-more-wrap';

			// Start .alm-listing
   		$ajaxloadmore .= '<div id="'. $div_id .'" class="'. $alm_wrapper_class . $alm_loading_style .''. $paging_color .''. $alm_layouts . $alm_tabs .'" '. $unique_id .' data-alm-id="" data-canonical-url="'. $canonicalURL .'" data-slug="'. $slug .'" data-post-id="'. $post_id .'" '. $is_search . $is_nested .' data-localized="'. alm_convert_dashes_to_underscore($localize_id) .'_vars' .'">';


				//	Masonry Hook (Before)
				$ajaxloadmore .= apply_filters('alm_masonry_before', $transition);
				
				
				/**
				 * WooCommerce
				 * Set required WooCommerce config options
				 */
				if($woocommerce){
					$container_element = apply_filters('alm_woo_container_element', 'ul');
					$post_type = 'product';
					
					$woo_config = array(
						'classes' => apply_filters('alm_woo_classes', 'products'),
						'columns' => ALM_WOOCOMMERCE::get_loop_prop('columns', '4'),
						'per_page' => ALM_WOOCOMMERCE::get_loop_prop('per_page', $posts_per_page),
					);
					
					/**
					 *	alm_woo_config
					 *
					 * WooCommerce hook to filter columns, per_page, classes etc
					 *
					 * @return $config;
					 */	
					$woo_config = apply_filters('alm_woo_config', $woo_config);

					$css_classes = $css_classes . ' ' . $woo_config['classes'] . ' columns-'. $woo_config['columns'];
					$posts_per_page = $preloaded_amount = $woo_config['per_page'];
									
					if(is_archive()){
						$obj = get_queried_object();
						if(isset($obj->taxonomy) && isset($obj->slug)){
						   $taxonomy = $obj->taxonomy;
						   $taxonomy_terms = $obj->slug;
						   $taxonomy_operator = 'IN';
						}
					}					
					
					if(!$filters){
						// Do not run if ALM filters are active
						
						$woo_orderby_value = (function_exists('wc_clean') && isset($_GET['orderby'])) ? wc_clean($_GET['orderby']) : apply_filters( 'woocommerce_default_catalog_orderby', get_option( 'woocommerce_default_catalog_orderby' ) );
						
						switch( $woo_orderby_value ){ 							
							
							case 'popularity' :
	   						$meta_key = 'total_sales';    
	   						$orderby = 'meta_value_num'; 
	   						$order = "DESC"; 						
							break;
	                  
	                  case 'rating' :
	   						$meta_key = '_wc_average_rating';  
	   						$orderby = 'meta_value_num';
	   						$order = "DESC";
	                  break;
							
							case 'price-desc' :
	   						$meta_key = '_price';  
	   						$orderby = 'meta_value_num';
	   						$order = "DESC";
	   					break;
	                  
							case 'price' :
								$meta_key = '_price';  
	   						$orderby = 'meta_value_num';
	   						$order = "ASC";
	                  break;
	                  
	                  default : 
	                  	
	                  	$custom_options = apply_filters('alm_woo_orderby_options', '');
	                  	if(!empty($custom_options)){
		                  	foreach($custom_options as $option){
			                  	if(isset($option['name']) && $option['name'] === $woo_orderby_value){
				                  	$meta_key = (isset($option['meta_key'])) ? wc_clean($option['meta_key']) : $meta_key;
				                  	$orderby = (isset($option['orderby'])) ? wc_clean($option['orderby']) : $orderby;
				                  	$order = (isset($option['order'])) ? wc_clean($option['order']) : $order;
			                  	}
		                  	}
	                  	}
	                  	
	                  break;
						}
					}
				}
				
				
				/**
				 * Archive
				 * Set required archive config options
				 */
				if($archive &&is_archive()){
					if(is_date()){
						$archive_year = get_the_date('Y');
						$archive_month = get_the_date('m');
						$archive_day = get_the_date('d');
						if(is_year()){
							$year = $archive_year;
						}
						if(is_month()){
							$month = $archive_month;
							$year = $archive_year;
						}
						if(is_day()){
							$year = $archive_year;
							$month = $archive_month;
							$day = $archive_day;
						}
					}
					if(is_author()){
						$author = get_the_author_meta('ID');
					}
					if(is_tax() || is_category() || is_tag()){
						$obj = get_queried_object();
						$taxonomy = $obj->taxonomy;
						$taxonomy_terms = $obj->slug;
						$taxonomy_operator = 'IN';
					}
				}


	   		// Single Post Add-on
	   		if($single_post){
	      		$preloaded = false;
	      		$seo = false;
	      		$paging = false;
	      		$comments = false;
	      		$acf = false;
	   		}


	   		// Comments Add-on
	   		if($comments){
	      		$single_post = false;
	      		$seo = false;
	      		$cache = false;
	      		$acf = false;
	      		$posts_per_page = $comments_per_page;
	      		if($preloaded === 'true'){
	      			$preloaded_amount = $comments_per_page;
	      		}
	   		}


	   		// Users Add-on
	   		if($users){
	      		$posts_per_page = $users_per_page;
	   		}
	   		
	   		// Term Query
	   		if($term_query){
		   		$posts_per_page = $term_query_number;
	   		}


	   		// Nextpage Add-on
	   		if($nextpage){
	      		$single_post = false;
	      		$seo = false;
	      		$preloaded = false;
	      		$comments = false;
	      		$acf = false;
	      		$pause = 'true';
	   		}
	   		
	   		// If SEO, set preloaded_amount to posts_per_page
	   		if($seo === 'true' || $filters){
            	$preloaded_amount = $posts_per_page;
	   		}
	   		
	   		// If Filters & Filters Paging, set preloaded_amount to posts_per_page
	   		if($filters && $filters_paging === 'true'){
	   		   $preloaded_amount = $posts_per_page;
	   		}
	   		
	   		
	   		// $query_args array to store global ALM variables
            $query_args = array( 
            	'post_id'        		=> $post_id,
            	'preloaded'				=> $preloaded,
            	'preloaded_amount'	=> $preloaded_amount,
            	'acf'           		=> $acf,
            	'acf_post_id'   		=> $acf_post_id,
            	'acf_field_type'  	=> $acf_field_type,
            	'acf_field_name'     => $acf_field_name,
            	'acf_parent_field_name' => $acf_parent_field_name,
            	'term_query'			=> array(
						'taxonomy' 		=> $term_query_taxonomy,
						'fields'			=> $term_query_fields,
						'number'			=> $term_query_number,
      		   ),
            	'nextpage' 				=> $nextpage,
            	'users' 					=> $users,
            	'users_role' 			=> $users_role,
            	'users_include' 		=> $users_include,
            	'users_exclude' 		=> $users_exclude,
            	'users_per_page' 		=> $users_per_page,
            	'users_order' 			=> $users_order,
            	'users_orderby' 		=> $users_orderby,
            	'comments'           => $comments,
            	'comments_per_page'  => $comments_per_page,
            	'comments_type'      => $comments_type,
            	'comments_style'     => $comments_style,
            	'comments_template'  => $comments_template,
            	'comments_callback'  => $comments_callback,
            	'comments_post_id'   => $comments_post_id,
            	'post_type'          => $post_type,
            	'sticky_posts'			=> $sticky_posts,
            	'post_format'        => $post_format,
            	'category'           => $category,
            	'category__and'      => $category__and,
            	'category__not_in'   => $category__not_in,
            	'tag'                => $tag,
            	'tag__and'        	=> $tag__and,
            	'tag__not_in'        => $tag__not_in,
            	'taxonomy'           => $taxonomy,
            	'taxonomy_terms'     => $taxonomy_terms,
            	'taxonomy_operator'  => $taxonomy_operator,
            	'taxonomy_relation'  => $taxonomy_relation,
            	'meta_key'           => $meta_key,
            	'meta_value'         => $meta_value,
            	'meta_compare'       => $meta_compare,
               'meta_relation'      => $meta_relation,
               'meta_type'          => $meta_type,
            	'year'               => $year,
            	'month'              => $month,
            	'day'                => $day,
            	'author'             => $author,
            	'post__in'           => $post__in,
            	'post__not_in'       => $post__not_in,
            	'search'        		=> $search,
               'custom_args'        => $custom_args,
            	'post_status'        => $post_status,
            	'order'              => $order,
            	'orderby'            => $orderby,
            	'exclude'            => $exclude,
            	'offset'             => $offset,
            	'posts_per_page'     => $posts_per_page,
            	'lang'               => $lang,
               'css_classes'        => $css_classes,
               'id'                 => $id,
               'repeater'           => $repeater,
               'theme_repeater'     => $theme_repeater,
               'paged'              => (get_query_var('paged')) ? get_query_var('paged') : 1
            );
            
            
				$listing_class = ($comments === 'true') ? 'commentlist alm-comments' : 'alm-listing'; // If Comments
            
            
            // Open #ajax-load-more
            
	   		$ajaxloadmore .= '<'.$container_element.' aria-live="polite" aria-atomic="true"';   	   		
					$ajaxloadmore .= ' class="'.$listing_class.' alm-ajax'. $paging_container_class . $classname . $css_classes .'"'.$paging_transition.'';

					// Build container data atts

   	   		// Advanced Custom Fields Extension
   	   		if(has_action('alm_acf_installed') && $acf === 'true'){
   	   		   $acf_return = apply_filters(
   	   		   	'alm_acf_shortcode',
   	      		   $acf,
   	      		   $acf_field_type,
   	      		   $acf_field_name,
   	      		   $acf_post_id,
   	      		   $post_id,
   	      		   $acf_parent_field_name
   	   		   );
   	   			$ajaxloadmore .= $acf_return;
   	         }
   	         
   
   	   		// Cache Add-on
   	   		if(has_action('alm_cache_installed') && $cache === 'true'){
   	   		   $cache_return = apply_filters(
   	   		   	'alm_cache_shortcode',
   	   		   	$cache,
   	   		   	$cache_id,
   	   		   	$options
   	   		   );
   	   			$ajaxloadmore .= $cache_return;
   	         }
   
   
   	   		// CTA Add-on
   	   		if(has_action('alm_cta_installed') && $cta === 'true'){
   	   		   $cta_return = apply_filters(
   	   		   	'alm_cta_shortcode',
   	   		   	$cta,
   	   		   	$cta_position,
   	   		   	$cta_repeater,
   	   		   	$cta_theme_repeater
   	   		   );
   	   			$ajaxloadmore .= $cta_return;
   	         }
   	         
   
   	   		// Comments Add-on
   	   		if(has_action('alm_comments_installed') && $comments === 'true'){
   	   		   $comments_return = apply_filters(
   	   		   	'alm_comments_shortcode',
   	      		   $comments,
   	      		   $comments_per_page,
   	      		   $comments_type,
   	      		   $comments_style,
   	      		   $comments_template,
   	      		   $comments_callback,
   	      		   $comments_post_id
   	   		   );
   	   			$ajaxloadmore .= $comments_return;
   	         }
   	         
   	         
   	   		// Filters Add-on
   	   		if(has_action('alm_filters_installed') && $filters){
   	   		   $filters_return = apply_filters(
   	   		   	'alm_filters_shortcode_params',
   	   		   	$filters,
   	   		   	$target,
   	   		   	$filters_url,
   	   		   	$filters_paging,
   	   		   	$filters_scroll,
   	   		   	$filters_scrolltop,
   	   		   	$filters_analytics,
   	   		   	$filters_debug,
   	   		   	$options
   	   		   );
   	   			$ajaxloadmore .= $filters_return;
   	         }
   
   
   	   		// Paging Add-on
   	         if(has_action('alm_paging_installed') && $paging === 'true'){
   	   		   $paging_return = apply_filters(
   	   		   	'alm_paging_shortcode',
   	   		   	$paging,
   	   		   	$paging_controls,
   	   		   	$paging_show_at_most,
   	   		   	$paging_classes,   	   		   	
                     $paging_first_label,
                     $paging_last_label,
                     $paging_previous_label,
                     $paging_next_label,
                     $options
   	   		   );
   	   			$ajaxloadmore .= $paging_return;
   	         }
   
   
   	   		// Tabs Add-on 
   	         if(has_action('alm_tabs_installed') && $tabs === 'true'){
   	   		   $tabs_return = apply_filters(
   	   		   	'alm_tabs_shortcode',
   	   		   	$tabs,
   	   		   	$tab_template, 
                     $options
   	   		   );
   	   			$ajaxloadmore .= $tabs_return;
   	   			
   	   			$transition_container = "true"; // required
   	   			
   	   			// Set `pause` true for tabs and preloaded
   	   			if($preloaded === 'true'){
	   	   			$pause = "true";
   	   			}
   	         }
   	         
   	         
   	         // Term Query
   	   		if(has_action('alm_terms_installed') && $term_query){
   	   		   $term_query_return = apply_filters(
   	   		   	'alm_terms_shortcode',
   	      		   $term_query,
   	      		   $term_query_taxonomy,
   	      		   $term_query_fields,
   	      		   $term_query_number
   	   		   );
   	   			$ajaxloadmore .= $term_query_return;
   	         }
   
   
   	   		// Preloaded Add-on
   	         if(has_action('alm_preload_installed') && $preloaded === 'true'){	   	         
	   	         
	   	         $preloaded = ($seo === 'true' && (int)$query_args['paged'] < 1 && $paging !== 'true') ? 'true' : $preloaded; // SEO page 1	   	         
	   	         
	   	         // SEO > page 1
	   	         $preloaded = ($seo === 'true' && $query_args['paged'] > 1 && $paging !== 'true') ? false : $preloaded; // SEO page > 1
	   	         
	   	         // Filters
	   	         if($filters && $_SERVER['QUERY_STRING']){
		   	         $querystring = $_SERVER['QUERY_STRING'];
		   	         if(isset($_GET['pg'])){
			   	         $pg = $_GET['pg'];
			   	         $preloaded = ($pg > 1) ? false : $preloaded;
			   	         $ajaxloadmore .= ' data-is-preloaded="true"';
		   	         }
	   	         }
	   	         
	   	         // Set `is-preloaded` attribute to add `.alm-preloaded` class to first `.alm-reveal` div
   	   		   $ajaxloadmore .= ($seo === 'true' && $query_args['paged'] > 1) ? ' data-is-preloaded="true"' : '';
   	   		   
   	   		   // Add `preloaded` atts   	   		   
	   		   	$ajaxloadmore .= ' data-preloaded="'.$preloaded.'"';   	   		   
						$ajaxloadmore .= ' data-preloaded-amount="'.$preloaded_amount.'"';						
   	   		}
   
   
   	   		// REST API Extension
   	   		if(has_action('alm_rest_api_installed') && $restapi === true){
   	   		   $restapi_return = apply_filters(
   	   		   	'alm_rest_api_shortcode',
   	      		   'true',
   	      		   $restapi_base,
   	      		   $restapi_namespace,
   	      		   $restapi_endpoint,
   	      		   $restapi_template_id,
   	      		   $restapi_debug
   	   		   );
   	   			$ajaxloadmore .= $restapi_return;
   	         }
   
   
   	   		// SEO Add-on
   	   		if(has_action('alm_seo_installed') && $seo === 'true'){
   	   		   $seo_return = apply_filters(
   	   		      'alm_seo_shortcode',
   	   		      $seo,
   	   		      $preloaded,
   	   		      $options
   	            );
   	   			$ajaxloadmore .= $seo_return;
   	         }
   
   
   	   		// Single Posts Add-on
   	   		if(has_action('alm_single_post_installed') && $single_post){	   	   		
	   	   		
	   	   		// Get post ID if null
	   	   		if(!$single_post_id){
			   			global $post;
			   			$single_post_id = $post->ID;
			   		}
			   		
   	   		   $single_post_return = apply_filters(
   	   		   	'alm_single_post_shortcode',
   	   		   	$single_post_id,
   	   		   	$single_post_order,
   	   		   	$single_post_taxonomy,
   	   		   	$single_post_excluded_terms,
   	   		   	$single_post_progress_bar,
   	   		   	$options
   	   		   );
   	   			$ajaxloadmore .= $single_post_return;
   	         }
   
   
   	   		// Nextpage Post Add-on
   	   		if(has_action('alm_nextpage_installed') && $nextpage){
	   	   		
	   	   		// Get post ID if null
	   	   		if(!$nextpage_post_id){
			   			global $post;
			   			$nextpage_post_id = $post->ID;
			   		}
			   		
   	   		   $nextpage_return = apply_filters(
   	   		   	'alm_nextpage_shortcode',
   	   		   	$nextpage_urls,
   	   		   	$nextpage_pageviews,
   	   		   	$nextpage_post_id,
   	   		   	$nextpage_scroll,
   	   		   	$options
   	   		   );
   	   			$ajaxloadmore .= $nextpage_return;
   	         }
   	         
   	         
   	         // Users Add-on
   	         if(has_action('alm_users_installed') && $users){      	         	         
   	   			$posts_per_page = $users_per_page; // Update $posts_per_page var to be $users_per_page	   			
   	   		   $users_return = apply_filters(
   	   		   	'alm_users_shortcode',
   	   		   	$users_role,
   	   		   	$users_include,
   	   		   	$users_exclude,
   	   		   	$posts_per_page,
   	   		   	$users_order,
   	   		   	$users_orderby,
   	   		   	$options
   	   		   );
   	   			$ajaxloadmore .= $users_return;	   			
   	         }
   	         
   	   		$ajaxloadmore .= ' data-container-type="'.$container_element.'"';	   
					
					// Archive
					$ajaxloadmore .= ($archive) ? ' data-archive="true"' : '';
					
					// Woocommerce
					$ajaxloadmore .= ($woocommerce) ? ' data-woocommerce="true"' : '';
   
					// Repeaters
   	   		$ajaxloadmore .= ($theme_repeater === 'null') ? ' data-repeater="'.$repeater.'"' : '';	   		
               $ajaxloadmore .= ($theme_repeater !== 'null') ? ' data-theme-repeater="'.$theme_repeater.'"' : ''; 
               
               // Post Type	                 
   	   		$ajaxloadmore .= ' data-post-type="'.$post_type.'"';
   	   		
   	   		// Sticky posts
               $ajaxloadmore .= ($sticky_posts === 'true') ? ' data-sticky-posts="'.$sticky_posts.'"' : '';
               
               // Post Format
               $ajaxloadmore .= (!empty($post_format)) ? ' data-post-format="'.$post_format.'"' : '';
               
               // Category
               $ajaxloadmore .= (!empty($category)) ? ' data-category="'.$category.'"' : '';
               $ajaxloadmore .= (!empty($category__and)) ? ' data-category-and="'.$category__and.'"' : '';
               $ajaxloadmore .= (!empty($category__not_in)) ? ' data-category-not-in="'.$category__not_in.'"' : '';
               
               // Tag
               $ajaxloadmore .= (!empty($tag)) ? ' data-tag="'.$tag.'"' : '';
               $ajaxloadmore .= (!empty($tag__and)) ? ' data-tag-and="'.$tag__and.'"' : '';
               $ajaxloadmore .= (!empty($tag__not_in)) ? ' data-tag-not-in="'.$tag__not_in.'"' : '';
               
               // Taxonomy
   	   		$ajaxloadmore .= (!empty($taxonomy)) ? ' data-taxonomy="'.$taxonomy.'"' : '';
   	   		$ajaxloadmore .= (!empty($taxonomy_terms)) ? ' data-taxonomy-terms="'.$taxonomy_terms.'"' : '';
   	   		$ajaxloadmore .= (!empty($taxonomy_operator)) ? ' data-taxonomy-operator="'.$taxonomy_operator.'"' : '';
   	   		$ajaxloadmore .= (!empty($taxonomy_relation)) ? ' data-taxonomy-relation="'.$taxonomy_relation.'"' : '';
   	   		
   	   		// Meta Query
   	   		$ajaxloadmore .= (!empty($meta_key)) ? ' data-meta-key="'.$meta_key.'"' : '';
   	   		$ajaxloadmore .= (!empty($meta_value) || $meta_value === '0') ? ' data-meta-value="'.$meta_value.'"' : '';
   	   		$ajaxloadmore .= (!empty($meta_compare)) ? ' data-meta-compare="'.$meta_compare.'"' : '';
   	   		$ajaxloadmore .= (!empty($meta_relation)) ? ' data-meta-relation="'.$meta_relation.'"' : '';
   	   		$ajaxloadmore .= (!empty($meta_type)) ? ' data-meta-type="'.$meta_type.'"' : '';
   	   		
   	   		// Dates
   	   		$ajaxloadmore .= (!empty($year)) ? ' data-year="'.$year.'"' : '';
   	   		$ajaxloadmore .= (!empty($month)) ? ' data-month="'.$month.'"' : '';
   	   		$ajaxloadmore .= (!empty($day)) ? ' data-day="'.$day.'"' : '';
   	   		
   	   		// Author
   	   		$ajaxloadmore .= (!empty($author)) ? ' data-author="'.$author.'"' : '';
   	   		
   	   		// Post Parameters
   	   		$ajaxloadmore .= (!empty($post__in)) ? ' data-post-in="'.$post__in.'"' : '';
   	   		$ajaxloadmore .= (!empty($post__not_in)) ? ' data-post-not-in="'.$post__not_in.'"' : '';
   	   		$ajaxloadmore .= (!empty($exclude)) ? ' data-exclude="'.$exclude.'"' : '';
   	   		
   	   		// Search
   	   		$ajaxloadmore .= (!empty($search)) ? ' data-search="'.$search.'"' : '';
   	   		
   	   		// Custom Args
   	   		$ajaxloadmore .= (!empty($custom_args)) ? ' data-custom-args="'.$custom_args.'"' : '';
   	   		
   	   		// Status
   	   		$ajaxloadmore .= (!empty($post_status)) ? ' data-post-status="'.$post_status.'"' : '';
   	   		
   	   		// Order
   	   		$ajaxloadmore .= ' data-order="'.$order.'"';
   	   		$ajaxloadmore .= ' data-orderby="'.$orderby.'"';
   	   		
   	   		// Offset
   	   		$ajaxloadmore .= ' data-offset="'.$offset.'"';
   	   		
   	   		// Posts Per Page
   	   		$ajaxloadmore .= ' data-posts-per-page="'.$posts_per_page.'"';
   	   		
   	   		// Lang
   	   		$ajaxloadmore .= (!empty($lang)) ? ' data-lang="'.$lang.'"' : '';
   	   		
   	   		// Scroll
   	   		$ajaxloadmore .= ' data-scroll="'.$scroll.'"';
   	   		if($scroll === 'true'){
      	   		$ajaxloadmore .= ' data-scroll-distance="'.$scroll_distance.'"';
      	   		$ajaxloadmore .= (!empty($scroll_container)) ? ' data-scroll-container="'.$scroll_container.'"' : '';
      	   		$ajaxloadmore .= ' data-max-pages="'.$max_pages.'"';
      	   		$ajaxloadmore .= (!empty($pause_override)) ? ' data-pause-override="'.$pause_override.'"' : '';
   	   		}
   	   		
   	   		// Pause
   	   		$ajaxloadmore .= ' data-pause="'.$pause.'"';
   	   		
   	   		// Button
   	   		$ajaxloadmore .= ' data-button-label="'.$button_label.'"';	   		
   	   		$ajaxloadmore .= (!empty($button_loading_label)) ? ' data-button-loading-label="'.$button_loading_label.'"' : '';
   	   		
   	   		// Destroy After
   	   		$ajaxloadmore .= (!empty($destroy_after)) ? ' data-destroy-after="'.$destroy_after.'"' : '';
   	   		
   	   		// Transition
   	   		$ajaxloadmore .= ($transition !== 'fade') ? ' data-transition="'.$transition.'"' : '';
   	   		$ajaxloadmore .= ($transition_container === 'false') ? ' data-transition-container="'.$transition_container.'"' : '';
   	   		$ajaxloadmore .= (!empty($transition_container_classes)) ? ' data-transition-container-classes="'.$transition_container_classes.'"' : '';
   	   		   
   	   		// Masonry
   	   		$ajaxloadmore .= (!empty($masonry_selector)) ? ' data-masonry-selector="'.$masonry_selector.'"' : '';
   	   		$ajaxloadmore .= (!empty($masonry_columnwidth)) ? ' data-masonry-columnwidth="'.$masonry_columnwidth.'"' : '';
   	   		$ajaxloadmore .= (!empty($masonry_animation)) ? ' data-masonry-animation="'.$masonry_animation.'"' : '';
   	   		$ajaxloadmore .= (!empty($masonry_horizontalorder)) ? ' data-masonry-horizontalorder="'.$masonry_horizontalorder.'"' : '';
   	         
   	         // Images Loaded
   	   		$ajaxloadmore .= ($images_loaded !== 'false') ? ' data-images-loaded="'.$images_loaded.'"' : '';
   
               // Primary
   	   		$ajaxloadmore .= ($primary !== false) ? ' data-primary="true"' : '';
	         
	   		$ajaxloadmore .= '>';
	   		// End .alm-listing data 
	   		
	   		
   			// Preloaded  			
   			// Add Preloaded Posts
   			$noscript_pagingnav = '';
				if(has_action('alm_preload_installed') && $preloaded === 'true'){
	   		   include(ALM_PATH .'core/classes/includes/preloaded.php');
	   		}
	   		

	   		// Single Post
	         // Get first post and append to alm object
	   		if(has_action('alm_single_post_installed') && $single_post){
   	   		
   	   		
	      		$repeater_type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater at number to retrieve type
	      		$repeater_type = $repeater_type[0]; // (default | repeater | template_)
	      		
	      		if($theme_repeater != 'null' && has_filter('alm_get_theme_repeater')){
	               $repeater_type = null;
	            }
	            // Get current permalink - (including querystring)
					$single_post_permanlink =  ($_SERVER["QUERY_STRING"]) ? get_permalink($single_post_id) .'?'. $_SERVER["QUERY_STRING"] : get_permalink($single_post_id);

	            // Get previous post include, build output from the next post filter
	            $single_post_output = '<div class="alm-reveal alm-single-post post-'. $single_post_id .'" data-url="'. $single_post_permanlink .'" data-title="'. strip_tags(get_the_title($single_post_id)) .'" data-id="'. $single_post_id .'" data-page="0">'; // Set the post id .alm-reveal div


   	            /*
   			   	 *	alm_single_post_inc
   			   	 * Previous Post Add-on hook
   			   	 *
   			   	 * @return $args;
   			   	 */
   			   	 
                  if($offset < 1){
                     // Only render include if offset is zero
   	      		   $single_post_output .= apply_filters('alm_single_post_inc', $repeater, $repeater_type, $theme_repeater, $single_post_id, $post_type);
   	      		}
   	      		

	            $single_post_output .= '</div>';
	   			$ajaxloadmore .= $single_post_output; // Add $single_post_output data to $ajaxloadmore

	         }
	         // End Previous Post


	         // Next Page Add-on
	         if(has_action('alm_nextpage_installed') && $nextpage){

	            $nextpage_start = alm_get_startpage(); // core/functions.php

	            $nextpage_is_paged = ($nextpage_start > 1) ? true : false;
	            
	            /*
			   	 *	alm_nextpage_paged
			   	 * Next Page Add-on hook
			   	 *
			   	 * @return boolean;
			   	 */
	            $nextpage_is_paged = apply_filters('alm_nextpage_paged', $nextpage_is_paged);
					
	            $alm_nextpage_output = apply_filters('alm_init_nextpage', $nextpage_post_id, $nextpage_start, $nextpage_is_paged, $paging, $div_id, $id);
	            	            
	            $ajaxloadmore .= $alm_nextpage_output;

	         }
	   		// End Next Page Add-on


				//	Masonry Hook (After)
				$ajaxloadmore .= apply_filters('alm_masonry_after', $transition);
				
				
				// Close ALM container element
	   		$ajaxloadmore .= '</'.$container_element.'>';	 	
	   		
	   		
	   		// Create Placeholder
	         $ajaxloadmore .= self::alm_render_placeholder($placeholder, $paging);	   
		   
		   
			   /*
		   	 *	alm_noscript (Generates <noscript/> element of current query)
		   	 *
		   	 * ALM Core Filter Hook 
		   	 *
		   	 * @return html;
		   	 */
	   		if(($seo === 'true' || $filters) && $preloaded !== 'true' && !$restapi){
	            $ajaxloadmore .= apply_filters('alm_noscript', $query_args, $container_element, $css_classes, $transition_container_classes);
	         }
	         
	         // Render <noscript> pagination for SEO and Preloaded (./preloaded.php)
	         $ajaxloadmore .= (!empty($noscript_pagingnav)) ? $noscript_pagingnav : '';


				/*
		   	 *	alm_before_button
		   	 *
		   	 * ALM Core Filter Hook
		   	 *
		   	 * @return html;
		   	 */
	         $ajaxloadmore .= apply_filters('alm_before_button', '');	         
	         
	         
	         // Create Load More button
	         $ajaxloadmore .= self::alm_render_button($seo, $paging, $button_classname, $button_label, $canonicalURL);  	 


				/*
		   	 *	alm_after_button
		   	 *
		   	 * ALM Core Filter Hook
		   	 *
		   	 * @return html;
		   	 */
	         $ajaxloadmore .= apply_filters('alm_after_button', '');	
	                     
		      
		      // No results text
		      if($no_results_text !== '' && !empty($no_results_text)){
					$ajaxloadmore .= '<div class="alm-no-results" style="display: none;">'. html_entity_decode($no_results_text) .'</div>';
		      }
	         
	         
	         // Render <noscript> pagination for Nextpage addon		
	         if(has_action('alm_nextpage_installed') && $nextpage){   
		      	$ajaxloadmore .= apply_filters( 'alm_nextpage_noscript_paging', $query_args['post_id'], $query_args['id'] ); // located in Nextpage add-on
		      }	
            
            
			// Close #ajax-load-more
   		$ajaxloadmore .= '</div>';  		


			/*
	   	 *	alm_after_container
	   	 *
	   	 * ALM Core Filter Hook
	   	 *
	   	 * @return html;
	   	 */
         $ajaxloadmore .= apply_filters('alm_after_container', '');


         // Progress Bar CSS
         $ajaxloadmore .= apply_filters('alm_progress_css', self::$counter, $progress_bar, $progress_bar_color); //  ALM Core Filter Hook


   		// REST API Add-on
   		// - add <script/> template to page
   		if(has_action('alm_rest_api_installed') && $restapi){
      		if($theme_repeater != 'null' && has_action('alm_get_rest_theme_repeater')){
         		do_action('alm_get_rest_theme_repeater', $theme_repeater);
            } else {
   			   $rest_type = alm_get_repeater_type($repeater);
   			   do_action('alm_get_rest_api_template', $repeater, $rest_type);
   			}
   		}
   		// End REST API Add-on
   		
   		
   		
   		// Add localized vars
   		ALM_LOCALIZE::add_localized_var('id', $master_id, $localize_id);
         
         
         
         /*
	   	 *	alm_create_script_vars
	   	 *
	   	 * Build localized script vars for each ALM instance.
	   	 *
	   	 * @return <script>
	   	 */
	      ALM_LOCALIZE::create_script_vars($localize_id);      
	         		
         
   		return $ajaxloadmore; // End $ajaxloadmore object
   		
      }
      
      
      
      /**
	    * alm_render_button
	    * Render the load more button.
   	 *
   	 * @since         3.3.2
   	 * @return        $html
   	 */
      public static function alm_render_button($seo, $paging, $button_classname, $button_label, $canonicalURL){
         
         $html = '<div class="alm-btn-wrap" style="visibility: hidden;">';	         
         if($paging !== 'true'){            	         
	         $btn_element = 'button';
	         $btn_href = '';
	         $btn_rel = ' rel="next"';      	         
	         $html .= '<'. $btn_element .' class="alm-load-more-btn more'. $button_classname .'"'. $btn_href . $btn_rel .'>'. $button_label .'</'. $btn_element .'>';	         
         }         
         $html .= '</div>';
         
         return $html;         
         
      }  
      
      
      
      /**
	    * alm_render_placeholder
	    * Render a placeholder loader.
   	 *
   	 * @since         5.1.7
   	 * @return        $html
   	 */
      public static function alm_render_placeholder($placeholder, $paging){
         
         if(isset($placeholder) && !empty($placeholder) && $paging !== 'true'){
            $placeholder_url = ($placeholder === 'true') ? ALM_URL .'/core/img/placeholder.png' : $placeholder;
            if($placeholder_url){
               $html = '<div class="alm-placeholder"><img src="'. $placeholder_url .'" alt=""></div>';               
               return $html; 
            }
         }   
         
      }
      
      

   }
   
endif;

