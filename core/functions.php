<?php

/*
*  alm_get_pro_addon
*  An array of pro addon parameters
*
*  @return array
*  @since 3.6
*/

function alm_get_pro_addon(){
	$path_prefix = 'ajax-load-more-';
	$url_prefix = 'https://connekthq.com/plugins/ajax-load-more/pro/';

   $addons = array(
      array(
         'name' => __('Ajax Load More Pro', 'ajax-load-more'),
         'intro' => __('Get instant access to all premium add-ons in a single installation.', 'ajax-load-more'),
         'desc' => __('The Pro bundle is installed as a single product with one license key and contains immediate access all premium add-ons.', 'ajax-load-more'),
         'action' => 'alm_pro_installed',
         'key' => 'alm_pro_license_key',
         'status' => 'alm_pro_license_status',
         'settings_field' => 'alm_pro_license',
         'img' => 'img/add-ons/pro-bundle-add-on.png',
         'url' => $url_prefix,
         'item_id' => ALM_PRO_ITEM_NAME,
         'version' => 'ALM_PRO_VERSION',
	   	'path' => $path_prefix .'pro',
	   	'slug' => 'pro'
      )
   );
   return $addons;
}


/*
*  alm_get_addons
*  An array of add-on parameters
*
*  @return array
*  @since 3.3.0
*/

function alm_get_addons(){
	$path_prefix = 'ajax-load-more-';
	$url_prefix = 'https://connekthq.com/plugins/ajax-load-more/add-ons/';

   $addons = array(
      array(
         'name' => __('Cache', 'ajax-load-more'),
         'intro' => __('Improve performance with the Ajax Load More caching engine.', 'ajax-load-more'),
         'desc' => __('The Cache add-on creates static HTML files of Ajax Load More requests then delivers those static files to your visitors.', 'ajax-load-more'),
         'action' => 'alm_cache_installed',
         'key' => 'alm_cache_license_key',
         'status' => 'alm_cache_license_status',
         'settings_field' => 'alm_cache_license',
         'img' => 'img/add-ons/cache-add-on.jpg',
         'url' => $url_prefix .'cache/',
         'item_id' => ALM_CACHE_ITEM_NAME,
         'version' => 'ALM_CACHE_VERSION',
	   	'path' => $path_prefix .'cache',
	   	'slug' => 'cache'
      ),
      array(
         'name' => __('Call to Actions', 'ajax-load-more'),
         'intro' => __('Ajax Load More extension for displaying advertisements and call to actions.', 'ajax-load-more'),
         'desc' => __('The Call to Actions add-on provides the ability to inject a custom CTA template within each Ajax Load More loop.', 'ajax-load-more'),
         'action' => 'alm_cta_installed',
         'key' => 'alm_cta_license_key',
         'status' => 'alm_cta_license_status',
         'settings_field' => 'alm_cta_license',
         'img' => 'img/add-ons/cta-add-on.jpg',
         'url' => $url_prefix .'/call-to-actions/',
         'item_id' => ALM_CTA_ITEM_NAME,
         'version' => 'ALM_CTA_VERSION',
	   	'path' => $path_prefix .'call-to-actions',
	   	'slug' => 'call-to-actions'
      ),
      array(
         'name' => __('Comments', 'ajax-load-more'),
         'intro' => __('Load blog comments on demand with Ajax Load More.', 'ajax-load-more'),
         'desc' => __('The Comments add-on will display your blog comments with Ajax Load More\'s infinite scroll functionality.', 'ajax-load-more'),
         'action' => 'alm_comments_installed',
         'key' => 'alm_comments_license_key',
         'status' => 'alm_comments_license_status',
         'settings_field' => 'alm_comments_license',
         'img' => 'img/add-ons/comments-add-on.jpg',
         'url' => $url_prefix .'comments/',
         'item_id' => ALM_COMMENTS_ITEM_NAME,
         'version' => 'ALM_COMMENTS_VERSION',
	   	'path' => $path_prefix .'comments',
	   	'slug' => 'comments'
      ),
      array(
         'name' => __('Custom Repeaters', 'ajax-load-more'),
         'intro' => __('Extend Ajax Load More with unlimited repeater templates.', 'ajax-load-more'),
         'desc' => __('Create, delete and modify repeater templates as you need them with absolutely zero restrictions.', 'ajax-load-more'),
         'action' => 'alm_unlimited_installed',
         'key' => 'alm_unlimited_license_key',
         'status' => 'alm_unlimited_license_status',
         'settings_field' => 'alm_unlimited_license',
         'img' => 'img/add-ons/unlimited-add-ons.jpg',
         'url' => $url_prefix .'custom-repeaters/',
         'item_id' => ALM_UNLIMITED_ITEM_NAME,
         'version' => 'ALM_UNLIMITED_VERSION',
	   	'path' => $path_prefix .'repeaters-v2',
	   	'slug' => 'repeaters-v2'
      ),
      array(
         'name' => __('Filters', 'ajax-load-more'),
         'intro' => __('Create custom Ajax Load More filters in seconds.', 'ajax-load-more'),
         'desc' => __('The Filters add-on provides front-end and admin functionality for building and managing Ajax filters.', 'ajax-load-more'),
         'action' => 'alm_filters_installed',
         'key' => 'alm_filters_license_key',
         'status' => 'alm_filters_license_status',
         'settings_field' => 'alm_filters_license',
         'img' => 'img/add-ons/filters-add-on.jpg',
         'url' => $url_prefix .'filters/',
         'item_id' => ALM_FILTERS_ITEM_NAME,
         'version' => 'ALM_FILTERS_VERSION',
	   	'path' => $path_prefix .'filters',
	   	'slug' => 'filters'
      ),
      array(
         'name' => __('Layouts', 'ajax-load-more'),
         'intro' => __('Predefined layouts for repeater templates.', 'ajax-load-more'),
         'desc' => __('The Layouts add-on provides a collection of unique, well designed and fully responsive templates.', 'ajax-load-more'),
         'action' => 'alm_layouts_installed',
         'key' => 'alm_layouts_license_key',
         'status' => 'alm_layouts_license_status',
         'settings_field' => 'alm_layouts_license',
         'img' => 'img/add-ons/layouts-add-on.jpg',
         'url' => $url_prefix .'layouts/',
         'item_id' => ALM_LAYOUTS_ITEM_NAME,
         'version' => 'ALM_LAYOUTS_VERSION',
	   	'path' => $path_prefix .'layouts',
	   	'slug' => 'layouts'
      ),
      array(
         'name' => __('Next Page', 'ajax-load-more'),
         'intro' => __('Load and display multipage WordPress content.', 'ajax-load-more'),
         'desc' => __('The Next Page add-on provides functionality for infinite scrolling paginated posts and pages.', 'ajax-load-more'),
         'action' => 'alm_nextpage_installed',
         'key' => 'alm_nextpage_license_key',
         'status' => 'alm_nextpage_license_status',
         'settings_field' => 'alm_nextpage_license',
         'img' => 'img/add-ons/next-page-add-on.jpg',
         'url' => $url_prefix .'nextpage/',
         'item_id' => ALM_NEXTPAGE_ITEM_NAME,
         'version' => 'ALM_NEXTPAGE_VERSION',
	   	'path' => $path_prefix .'next-page',
	   	'slug' => 'next-page'
      ),
      array(
         'name' => __('Paging', 'ajax-load-more'),
         'intro' => __('Extend Ajax Load More with a numbered navigation.', 'ajax-load-more'),
         'desc' => __('The Paging add-on will transform the default infinite scroll functionality into a robust ajax powered navigation system.', 'ajax-load-more'),
         'action' => 'alm_paging_installed',
         'key' => 'alm_paging_license_key',
         'status' => 'alm_paging_license_status',
         'settings_field' => 'alm_paging_license',
         'img' => 'img/add-ons/paging-add-ons.jpg',
         'url' => $url_prefix .'paging/',
         'item_id' => ALM_PAGING_ITEM_NAME,
         'version' => 'ALM_PAGING_VERSION',
	   	'path' => $path_prefix .'paging',
	   	'slug' => 'paging'
      ),
      array(
         'name' => __('Preloaded', 'ajax-load-more'),
         'intro' => __('Load an initial set of posts before making Ajax requests to the server.', 'ajax-load-more'),
         'desc' => __('The Preloaded add-on will display content quicker and allow caching of the initial query which can reduce stress on your server.', 'ajax-load-more'),
         'action' => 'alm_preload_installed',
         'key' => 'alm_preloaded_license_key',
         'status' => 'alm_preloaded_license_status',
         'settings_field' => 'alm_preloaded_license',
         'img' => 'img/add-ons/preloaded-add-ons.jpg',
         'url' => $url_prefix .'preloaded/',
         'item_id' => ALM_PRELOADED_ITEM_NAME,
         'version' => 'ALM_PRELOADED_VERSION',
	   	'path' => $path_prefix .'preloaded',
	   	'slug' => 'preloaded'
      ),
      array(
         'name' => __('Search Engine Optimization', 'ajax-load-more'),
         'intro' => __('Generate unique paging URLs with every Ajax Load More query.', 'ajax-load-more'),
         'desc' => __('The SEO add-on will optimize your ajax loaded content for search engines by generating unique URLs with every query.', 'ajax-load-more'),
         'action' => 'alm_seo_installed',
         'key' => 'alm_seo_license_key',
         'status' => 'alm_seo_license_status',
         'settings_field' => 'alm_seo_license',
         'img' => 'img/add-ons/seo-add-ons.jpg',
         'url' => $url_prefix .'search-engine-optimization/',
         'item_id' => ALM_SEO_ITEM_NAME,
         'version' => 'ALM_SEO_VERSION',
	   	'path' => $path_prefix .'seo',
	   	'slug' => 'seo'
      ),
      array(
         'name' => __('Single Posts', 'ajax-load-more'),
         'intro' => __('An add-on to enable infinite scrolling of single posts.', 'ajax-load-more'),
         'desc' => __('The Single Posts add-on will load full posts as you scroll and update the browser URL to the current post.', 'ajax-load-more'),
         'action' => 'alm_prev_post_installed',
         'key' => 'alm_prev_post_license_key',
         'status' => 'alm_prev_post_license_status',
         'settings_field' => 'alm_prev_post_license',
         'img' => 'img/add-ons/prev-post-add-on.jpg',
         'url' => $url_prefix .'single-post/',
         'item_id' => ALM_PREV_POST_ITEM_NAME,
         'version' => 'ALM_PREV_POST_VERSION',
	   	'path' => $path_prefix .'previous-post',
	   	'slug' => 'previous-post'
      ),
      array(
         'name' => __('Theme Repeaters', 'ajax-load-more'),
         'intro' => __('Manage repeater templates within your current theme directory.', 'ajax-load-more'),
         'desc' => __('The Theme Repeater add-on will allow you load, edit and maintain templates from your current theme directory.', 'ajax-load-more'),
         'action' => 'alm_theme_repeaters_installed',
         'key' => 'alm_theme_repeaters_license_key',
         'status' => 'alm_theme_repeaters_license_status',
         'settings_field' => 'alm_theme_repeaters_license',
         'img' => 'img/add-ons/theme-repeater-add-on.jpg',
         'url' => $url_prefix .'theme-repeaters/',
         'item_id' => ALM_THEME_REPEATERS_ITEM_NAME,
         'version' => 'ALM_THEME_REPEATERS_VERSION',
	   	'path' => $path_prefix .'theme-repeaters',
	   	'slug' => 'theme-repeaters'
      ),
      array(
         'name' => __('Users', 'ajax-load-more'),
         'intro' => __('Enable infinite scrolling of WordPress users.', 'ajax-load-more'),
         'desc' => __('The Users add-on will allow lazy loading of users by role using a WP_User_Query.', 'ajax-load-more'),
         'action' => 'alm_users_installed',
         'key' => 'alm_users_license_key',
         'status' => 'alm_users_license_status',
         'settings_field' => 'alm_users_license',
         'img' => 'img/add-ons/users-add-on.jpg',
         'url' => $url_prefix .'users/',
         'item_id' => ALM_USERS_ITEM_NAME,
         'version' => 'ALM_USERS_VERSION',
	   	'path' => $path_prefix .'users',
	   	'slug' => 'users'
      )
   );
   return $addons;
}


/*
*  alm_masonry_after
*  Masonry HTML wrapper open
*
*  @param $transition string
*  @since 3.1.0
*/
function alm_masonry_before($transition){
	return ($transition === 'masonry') ? '<div class="alm-masonry" style="opacity: 0;">' : '';
}
add_filter('alm_masonry_before', 'alm_masonry_before');



/*
*  alm_masonry_after
*  Masonry HTML wrapper close
*
*  @param $transition string
*  @since 3.1.0
*/
function alm_masonry_after($transition){
	return ($transition === 'masonry') ? '</div>' : '';
}
add_filter('alm_masonry_after', 'alm_masonry_after');



/*
*  alm_progress_css
*  If progress bar, add the CSS styles for the bar.
*
*  @param $counter              int
*  @param $progress_bar         string
*  @param $progress_bar_color   string
*  @since 3.1.0
*/
function alm_progress_css($counter, $progress_bar, $progress_bar_color){
	if($counter == 1 && $progress_bar === 'true'){
		$style = '
<style>
.pace { -webkit-pointer-events: none; pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; }
.pace-inactive { display: none; }
.pace .pace-progress { background: #'. $progress_bar_color .'; position: fixed; z-index: 2000; top: 0; right: 100%; width: 100%; height: 5px; -webkit-box-shadow: 0 0 3px rgba(255, 255, 255, 0.3); box-shadow: 0 0 2px rgba(255, 255, 255, 0.3); }
</style>';
		return $style;
	}
}
add_filter('alm_progress_css', 'alm_progress_css', 10, 3);



/*
*  alm_css_disabled
*  Has core ALM CSS disabled?
*
*  @param $setting name of the setting field
*  @return boolean
*  @since 3.3.1
*/

function alm_css_disabled($setting) {
	$options = get_option( 'alm_settings' );
	$disabled = true;
	if(!isset($options[$setting]) || $options[$setting] != '1'){
		$disabled = false;
	}
	return $disabled;
}



/*
*  alm_do_inline_css
*  Load ALM CSS inline
*
*
*  @param $setting name of the setting field
*  @return boolean
*  @since 3.3.1
*/

function alm_do_inline_css($setting) {

	// Exit if this is a REST API request
	if(defined('REST_REQUEST')){
		if(REST_REQUEST) return false;
	}

	$options = get_option( 'alm_settings' );
	$inline = false;
	if(!isset($options[$setting]) || $options[$setting] === '1'){
		$inline = true;
	}
	return $inline;
}

/*
* alm_loop
* This function will return HTML of a looped item
*
* @param $repeater        string
* @param $type            string
* @param $theme_repeater  string
* @return                 html
* @since 3.7
*/
function alm_loop($repeater, $type, $theme_repeater, $alm_found_posts = '', $alm_page = '', $alm_item = '', $alm_current = ''){
   ob_start();
   
   // Theme Repeater
	if($theme_repeater !== 'null' && has_filter('alm_get_theme_repeater')){
		do_action('alm_get_theme_repeater', $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current); // Returns an include file
	}
	// Standard Repeater Templates
	else {
		$file = alm_get_current_repeater($repeater, $type);
      include($file);
	}

	$return = ob_get_contents();
	ob_end_clean();
	return $return;
}



/*
*  alm_get_current_repeater
*  Get the current repeater template file
*
*  @param string $repeater current repater name
*  @param string $type Type of template
*
*  @return $include (file path)
*  @since 2.5.0
*  @updated 3.5.1
*/

function alm_get_current_repeater($repeater, $type) {

	$template = $repeater;
	$include = '';

	// Custom Repeaters v1
	if( $type == 'repeater' && has_action('alm_repeater_installed' )){
		$include = ALM_REPEATER_PATH . 'repeaters/'. $template .'.php';

		if(!file_exists($include)){ //confirm file exists
		   alm_get_default_repeater();
		}

	}

   // Custom Repeaters v2
	elseif( $type == 'template_' && has_action('alm_unlimited_installed' )){


   	// Custom Repeaters 2.5+
   	if(ALM_UNLIMITED_VERSION >= '2.5'){

      	// Get path to repeater (alm_templates)
			$base_dir = AjaxLoadMore::alm_get_repeater_path();
			$include = $base_dir .'/'. $template .'.php';

   	} else {

   		global $wpdb;
   		$blog_id = $wpdb->blogid;

   		$include = ($blog_id > 1) ? ALM_UNLIMITED_PATH. 'repeaters/'. $blog_id .'/'. $template .'.php' : ALM_UNLIMITED_PATH. 'repeaters/'. $template .'.php';

		}

		if(!file_exists($include)){ //confirm file exists
		   $include = alm_get_default_repeater();
		}
	}

	// Default repeater
	else{
		$include = alm_get_default_repeater();
	}

	// Security check
	// Confirm $template does NOT contains relative path
	if ( false !== strpos( $template, './' ) ) {
	   $include = alm_get_default_repeater();
	}

	return $include;
}



/*
*  alm_get_default_repeater
*  Get the default repeater template for current blog
*
*  @return $include (file path)
*  @since 2.5.0
*/

function alm_get_default_repeater() {

	global $wpdb;
	$file = null;
	$template_dir = apply_filters( 'alm_template_path', 'alm_templates' );

	// Allow user to load template from theme directory
	// Since 2.8.5

    // load repeater template from current theme folder
	if(is_child_theme()){
		$template_theme_file = get_stylesheet_directory().'/'. $template_dir .'/default.php';
		// if child theme does not have repeater template, then use the parent theme dir
		if(!file_exists($template_theme_file)){
			$template_theme_file = get_template_directory().'/'. $template_dir .'/default.php';
		}
	}
	else{
		$template_theme_file = get_template_directory().'/'. $template_dir .'/default.php';
	}
	// if theme or child theme contains the template, use that file
	if(file_exists($template_theme_file)){
		$file = $template_theme_file;
	}

	// Since 2.0
	// Updated 3.5
	if($file == null){
   	$file = AjaxLoadMore::alm_get_repeater_path() .'/default.php';
	}

	return $file;
}



/*
*  alm_get_taxonomy
*  Query by custom taxonomy values
*
*  @return $args = array();
*  @since 2.5.0
*
*  @deprecated in 2.5.0
*/
function alm_get_taxonomy($taxonomy, $taxonomy_terms, $taxonomy_operator){
   if(!empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator)){
      $the_terms = explode(",", $taxonomy_terms);
      $args = array(
		   'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,
		);
		return $args;
	}
}



/*
*  alm_get_post_format
*  Query by post format
*
*  @return $args = array();
*  @since 2.5.0
*  @updated 2.8.5
*/
function alm_get_post_format($post_format){
   if(!empty($post_format)){
	   $format = "post-format-$post_format";
	   //If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }
	      $return = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$return = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);
		}
		return $return;
	}
}



/*
*  alm_get_taxonomy_query
*  Query for custom taxonomy
*
*  @return $args = array();
*  @since 2.8.5
*/
function alm_get_taxonomy_query($taxonomy, $taxonomy_terms, $taxonomy_operator){
   if(!empty($taxonomy) && !empty($taxonomy_terms)){
      $taxonomy_term_values = alm_parse_tax_terms($taxonomy_terms);
      $return = array(
         'taxonomy' => $taxonomy,
         'field' => 'slug',
         'terms' => $taxonomy_term_values,
         'operator' => $taxonomy_operator
      );
      return $return;
   }
}



/*
*  alm_parse_tax_terms
*  Parse the taxonomy terms for multiple vals
*
*  @helper function @alm_get_taxonomy_query()
*  @return array;
*  @since 2.8.5
*/
function alm_parse_tax_terms($taxonomy_terms){
	// Remove all whitespace for $taxonomy_terms because it needs to be an exact match
	$taxonomy_terms = preg_replace('/\s+/', ' ', $taxonomy_terms); // Trim whitespace
	$taxonomy_terms = str_replace(', ', ',', $taxonomy_terms); // Replace [term, term] with [term,term]
	$taxonomy_terms = explode(",", $taxonomy_terms);
   return $taxonomy_terms;
}



/*
*  alm_get_tax_query
*  Query by custom taxonomy values
*
*  @return $args = array();
*  @since 2.5.0

*  @deprecated in 2.8.5
*/
function alm_get_tax_query($post_format, $taxonomy, $taxonomy_terms, $taxonomy_operator){

   // Taxonomy [ONLY]
   if(!empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator) && empty($post_format)){
      $the_terms = explode(",", $taxonomy_terms);
      $args = array(
		   'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,
		);
		return $args;
	}

	// Post Format [ONLY]
   if(!empty($post_format) && empty($taxonomy)){
	   $format = "post-format-$post_format";

	   //If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }
	      $args = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$args = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);
		}
		return $args;
	}

	// Taxonomy && Post Format [COMBINED]
	if(!empty($post_format) && !empty($taxonomy) && !empty($taxonomy_terms) && !empty($taxonomy_operator)){
   	$the_terms = explode(",", $taxonomy_terms);
	   $args = array(
			'taxonomy' => $taxonomy,
			'field' => 'slug',
			'terms' => $the_terms,
			'operator' => $taxonomy_operator,
		);
	   $format = "post-format-$post_format";
		//If query is for standard then we need to filter by NOT IN
	   if($format == 'post-format-standard'){
      	if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
            $terms = array();
            foreach ($post_formats[0] as $format) {
               $terms[] = 'post-format-'.$format;
            }
         }
	      $format_args = array(
            'taxonomy' => 'post_format',
            'terms' => $terms,
            'field' => 'slug',
            'operator' => 'NOT IN',
         );
	   }else{
			$format_args = array(
			   'taxonomy' => 'post_format',
			   'field' => 'slug',
			   'terms' => array($format),
			);
		}
		$args[] = $format_args; // Combined format and tax $args
		return $args;
	}
}



/*
*  alm_get_meta_query
*  Query by custom field values
*
*  @return $args = array();
*  @since 2.5.0
*/
function alm_get_meta_query($meta_key, $meta_value, $meta_compare, $meta_type){
   if(!empty($meta_key)){
      $meta_values = alm_parse_meta_value($meta_value, $meta_compare);
      if(!empty($meta_values)){
         $return = array(
            'key' => $meta_key,
            'value' => $meta_values,
            'compare' => $meta_compare,
            'type' => $meta_type
         );
      }else{
         // If $meta_values is empty, don't query for 'value'
         $return = array(
            'key' => $meta_key,
            'compare' => $meta_compare,
            'type' => $meta_type
         );
      }
      return $return;
   }
}



/*
*  alm_parse_meta_value
*  Parse the meta value for multiple vals
*
*  @helper function @alm_get_meta_query()
*  @return array;
*  @since 2.6.4
*/
function alm_parse_meta_value($meta_value, $meta_compare){
   // See the docs (http://codex.wordpress.org/Class_Reference/WP_Meta_Query)
   if($meta_compare === 'IN' || $meta_compare === 'NOT IN' || $meta_compare === 'BETWEEN' || $meta_compare === 'NOT BETWEEN'){
   	// Remove all whitespace for meta_value because it needs to be an exact match
   	$mv_trimmed = preg_replace('/\s+/', ' ', $meta_value); // Trim whitespace
   	$meta_values = str_replace(', ', ',', $mv_trimmed); // Replace [term, term] with [term,term]
   	$meta_values = explode(",", $meta_values);
   }else{
   	$meta_values = $meta_value;
   }
   return $meta_values;
}



/*
*  alm_get_repeater_type
*  Get type of repeater
*
*  @return $type;
*  @since 2.9
*/
function alm_get_repeater_type($repeater){
	$type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater value at number to determine type
   $type = $type[0]; // default | repeater | template_
	return $type;
}



/*
*  alm_get_canonical_url
*  Get current page base URL
*
*  @return $canonicalURL;
*  @since 2.12
*/
function alm_get_canonical_url(){

	$canonicalURL = '';

	// Date
   if(is_date()){
      // Is archive page
      $archive_year = get_the_date('Y');
      $archive_month = get_the_date('m');
      $archive_day = get_the_date('d');
      if(is_year()){
        $canonicalURL = get_year_link( $archive_year );
      }
      if(is_month()){
        $canonicalURL = get_month_link( $archive_year, $archive_month );
      }
      if(is_day()){
        $canonicalURL = get_month_link( $archive_year, $archive_month, $archive_day );
      }
   }
   // Frontpage
   elseif(is_front_page()){
	   if(function_exists('pll_home_url')){ // Polylang support
		   $canonicalURL = pll_home_url();
	   }else{
      	$canonicalURL = get_home_url().'/';
      }
   }
   // Home (Blog Default)
   elseif(is_home()){
      $canonicalURL = get_permalink(get_option('page_for_posts'));
   }
   // Category
   elseif(is_category()){
      $cat_id = get_query_var( 'cat' );
      $canonicalURL = get_category_link($cat_id);
   }
   // Tag
   elseif(is_tag()){
      $tag_id = get_query_var('tag_id');
      $canonicalURL = get_tag_link($tag_id);
   }
   // Author
   elseif(is_author()){
      $author_id = get_the_author_meta('ID');
      $canonicalURL = get_author_posts_url($author_id);
   }
   // Taxonomy
   elseif(is_tax()){
      $tax_term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy' ));
      $tax_id = $tax_term->term_id;
      $canonicalURL = get_term_link($tax_id);
   }
   // Post Type
   elseif(is_post_type_archive()){
      $post_type_archive = get_post_type();
      $canonicalURL = get_post_type_archive_link($post_type_archive);
   }
   // Search
   elseif(is_search()){
      $canonicalURL = get_home_url().'/';
   }
   else{
      $canonicalURL = get_permalink();
   }

	return $canonicalURL;
}



/*
*  alm_get_page_slug
*  Get current page slug
*
*  @return slug;
*  @since 2.13.0
*/
function alm_get_page_slug($post){

   // Exit if admin
   if(is_admin()) return false;

	if(!is_archive()){
   	// If not archive, set the post slug
		if(is_front_page() || is_home()){
			$slug = 'home';
		}else{
   		// Search
   		if(is_search()){
      		$search_query = get_search_query();
      		if($search_query){
         		$slug = "?s=$search_query";
      		}else{
         		$slug = '?s=';
      		}
         }else{
		      $slug = $post->post_name;
		   }
      }
	}else{
		// Tax
		if(is_tax()){
			$queried_object = get_queried_object();
			$slug = $queried_object->slug;
		}
		// Category
		elseif(is_category()){
	      $cat = get_query_var('cat');
			$category = get_category($cat);
			$slug = $category->slug;
	   }
	   // Tag
	   elseif(is_tag()){
	      $slug = get_query_var('tag');
	   }
		// Author
		elseif(is_author()){
	      $slug = get_the_author_meta('ID');
	   }
		// Post Type Archive
		elseif(is_post_type_archive()){
			$slug = get_post_type();
		}
		elseif(is_date()){
			// Is archive page
	      $archive_year = get_the_date('Y');
	      $archive_month = get_the_date('m');
	      $archive_day = get_the_date('d');
	      if(is_year()){
	        $slug = $archive_year;
	      }
	      if(is_month()){
	        $slug = $archive_year.'-'.$archive_month;
	      }
	      if(is_day()){
	        $slug = $archive_year.'-'.$archive_month.'-'.$archive_day;
	      }
		}
		else{
			$slug = '';
		}
	}

	return $slug;
}


/*
*  alm_get_page_id
*  Get current page ID
*
*  @return $post_id;
*  @since 3.0.1
*/
function alm_get_page_id($post){

   // Exit if admin
   if(is_admin()) return false;

   $post_id = '';

	if(!is_archive()){
		// If not an archive page, set the post slug
		if(is_front_page() || is_home()){
			$post_id = '0';
		}else{
   		// Search
   		if(is_search()){
      		$search_query = get_search_query();
      		if($search_query){
         		$post_id = "$search_query";
      		}
         }else{
		      $post_id = $post->ID;
		   }
      }
	}else{
		// Tax
		if(is_tax() || is_tag() || is_category()){
			$queried_object = get_queried_object();
			$post_id = $queried_object->term_id;
		}
		// Author
		elseif(is_author()){
	      $post_id = get_the_author_meta('ID');
	   }
		// Post Type Archive
		elseif(is_post_type_archive()){
			$post_id = get_post_type();
		}
		elseif(is_date()){
			// Is archive page
	      $archive_year = get_the_date('Y');
	      $archive_month = get_the_date('m');
	      $archive_day = get_the_date('d');
	      if(is_year()){
	        $post_id = $archive_year;
	      }
	      if(is_month()){
	        $post_id = $archive_year.'-'.$archive_month;
	      }
	      if(is_day()){
	        $post_id = $archive_year.'-'.$archive_month.'-'.$archive_day;
	      }
		}
	}

	return $post_id;
}



/*
*  alm_get_startpage
*  Get query param of start page (paged, page)
*
*  @since 2.14.0
*/
function alm_get_startpage(){
   if ( get_query_var('paged') ) {
      $start_page = get_query_var('paged');
   } elseif ( get_query_var('page') ) {
      $start_page = get_query_var('page');
   } else {
      $start_page = 1;
   }
   return $start_page;
}




/*
*  alm_pretty_print
*  Debug helper for printing variables to screen
*
*  @since 3.7
*/
function alm_pretty_print($query){
	if($query){
		echo '<pre>';
		print_r($query);
		echo '</pre>';
	}
}



/*
*  alm_convert_dashes_to_underscore
*  Convert dashes to underscores
*
*  @param $string string
*  @return string
*  @since 3.7
*/
function alm_convert_dashes_to_underscore($string = ''){
	return str_replace('-', '_', $string);
}



/*
*  alm_sticky_post__not_in
*  Remove posts if post__not_in is set in the ALM shortcode
*
*  @param $ids    array
*  @param $not_in array
*  @return array
*  @since 3.7
*/
function alm_sticky_post__not_in($ids = '', $not_in = ''){

   if(!empty($not_in)){
      $new_array = array();
      foreach($ids as $id){
         if(!in_array($id, $not_in)){
            array_push($new_array, $id);
         }
      }
      $ids = $new_array;

   }

   return $ids;
}
