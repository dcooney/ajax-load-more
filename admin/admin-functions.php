<?php

/*
*  alm_is_admin_screen
*  Determine whether user is on an ALM admin screen
*
*  @return boolean
*  @since 2.12.0
*/

function alm_is_admin_screen(){
	$return = false;
	$screen = get_current_screen();
	if($screen->parent_base === 'ajax-load-more'){
		$return = true;
	}
	return $return;
}



/*
*  alm_get_addons
*  An array of add-on parameters
*
*  @return array
*  @since 3.3.0
*/
function alm_get_addons(){
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/cache/',
         'item_id' => ALM_CACHE_ITEM_NAME
      ),
      array(
         'name' => __('Call to Actions', 'ajax-load-more'),
         'intro' => __('Ajax Load More extension for displaying advertisements and call to actions.', 'ajax-load-more'),
         'desc' => __('The Call to Actions add-on will provide the ability to inject a custom CTA template within each Ajax Load More loop.', 'ajax-load-more'),
         'action' => 'alm_cta_installed',
         'key' => 'alm_cta_license_key',
         'status' => 'alm_cta_license_status',
         'settings_field' => 'alm_cta_license',
         'img' => 'img/add-ons/cta-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/call-to-actions/',
         'item_id' => ALM_CTA_ITEM_NAME
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/comments/',
         'item_id' => ALM_COMMENTS_ITEM_NAME
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/custom-repeaters/',
         'item_id' => ALM_UNLIMITED_ITEM_NAME
      ),
      array(
         'name' => __('Layouts', 'ajax-load-more'),
         'intro' => __('Predefined layouts for your repeater templates.', 'ajax-load-more'),
         'desc' => __('The Layouts add-on provides a collection of unique, well designed and fully responsive templates.', 'ajax-load-more'),
         'action' => 'alm_layouts_installed',
         'key' => 'alm_layouts_license_key',
         'status' => 'alm_layouts_license_status',
         'settings_field' => 'alm_layouts_license',
         'img' => 'img/add-ons/layouts-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/layouts/',
         'item_id' => ALM_LAYOUTS_ITEM_NAME
      ),
      array(
         'name' => __('Next Page', 'ajax-load-more'),
         'intro' => __('Load and display multipage WordPress content.', 'ajax-load-more'),
         'desc' => __('The Next Page add-on will provide functionality for infinite scrolling paginated posts and pages.', 'ajax-load-more'),
         'action' => 'alm_nextpage_installed',
         'key' => 'alm_nextpage_license_key',
         'status' => 'alm_nextpage_license_status',
         'settings_field' => 'alm_nextpage_license',
         'img' => 'img/add-ons/next-page-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/nextpage/',
         'item_id' => ALM_NEXTPAGE_ITEM_NAME
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/paging/',
         'item_id' => ALM_PAGING_ITEM_NAME
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/preloaded/',
         'item_id' => ALM_PRELOADED_ITEM_NAME
      ),
      array(
         'name' => __('Previous Post', 'ajax-load-more'),
         'intro' => __('An add-on to enable infinite scrolling of single posts.', 'ajax-load-more'),
         'desc' => __('The Previous Post add-on will load single posts as you scroll and update the browser URL to the current post.', 'ajax-load-more'),
         'action' => 'alm_prev_post_installed',
         'key' => 'alm_prev_post_license_key',
         'status' => 'alm_prev_post_license_status',
         'settings_field' => 'alm_prev_post_license',
         'img' => 'img/add-ons/prev-post-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/preloaded/',
         'item_id' => ALM_PREV_POST_ITEM_NAME
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
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/search-engine-optimization/',
         'item_id' => ALM_SEO_ITEM_NAME
      ),
      array(
         'name' => __('Theme Repeaters', 'ajax-load-more'),
         'intro' => __('Manage repeater templates within your current theme directory.', 'ajax-load-more'),
         'desc' => __('The Theme Repeater add-on will allow you load, edit and maintain templates from your current theme directory.', 'ajax-load-more'),
         'action' => 'alm_theme_repeaters_installed',
         'key' => 'alm_seo_license_key',
         'status' => 'alm_seo_license_status',
         'settings_field' => 'alm_seo_license',
         'img' => 'img/add-ons/theme-repeater-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/',
         'item_id' => ALM_THEME_REPEATERS_ITEM_NAME
      ),
      array(
         'name' => __('Users', 'ajax-load-more'),
         'intro' => __('Enable infinite scrolling of WordPress users.', 'ajax-load-more'),
         'desc' => __('The Users add-on will allow lazy loading of users by role using a WP_User_Query.', 'ajax-load-more'),
         'action' => 'alm_users_installed',
         'key' => 'alm_theme_repeaters_license_key',
         'status' => 'alm_theme_repeaters_license_status',
         'settings_field' => 'alm_theme_repeaters_license',
         'img' => 'img/add-ons/users-add-on.jpg',
         'url' => 'https://connekthq.com/plugins/ajax-load-more/add-ons/users/',
         'item_id' => ALM_USERS_ITEM_NAME
      )
   );
   return $addons;
}



/*
*  alm_has_addon
*  Does user have add-ons installed and activated
*  License Page
*
*  @return boolean
*  @since 2.13.0
*  @depreacted 3.3.0
*/

function alm_has_addon(){
	if(has_action('alm_cta_installed') || has_action('alm_comments_installed') || has_action('alm_unlimited_installed') || has_action('alm_layouts_installed') || has_action('alm_nextpage_installed') || has_action('alm_preload_installed') || has_action('alm_paging_installed') || has_action('alm_prev_post_installed') || has_action('alm_rest_api_installed') || has_action('alm_seo_installed') || has_action('alm_theme_repeaters_installed') || has_action('alm_users_installed')) {
   	return true;
	} else {
   	return false;
	}
}



/*
*  alm_has_addon_shortcodes
*  Does user have an add-ons or extensions for shortcode builder installed and activated?
*
*  @return boolean
*  @since 2.13.0.1
*/

function alm_has_addon_shortcodes(){
   $installed = false;   
   $actions = array(
      'alm_acf_installed',
      'alm_cache_installed',
      'alm_cache_installed',
      'alm_cta_installed',
      'alm_comments_installed',
      'alm_unlimited_installed',
      'alm_nextpage_installed',
      'alm_preload_installed',
      'alm_paging_installed',    
      'alm_prev_post_installed',   
      'alm_rest_api_installed',    
      'alm_seo_installed',    
      'alm_theme_repeaters_installed',    
      'alm_users_installed'   
   );
   // Loop actions to determine if add-on/extension is installed   
   foreach($actions as $action){
      if(has_action($action)) $installed = true;
   }  
   
   
	if($installed) {
   	return true;
	} else {
   	return false;
	}
}
