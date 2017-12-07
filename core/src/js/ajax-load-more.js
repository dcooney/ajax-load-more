/*
 * Ajax Load More
 * http://wordpress.org/plugins/ajax-load-more/
 * https://connekthq.com/plugins/ajax-load-more/
 *
 * Copyright 2017 Connekt Media - https://connekthq.com
 * Free to use under the GPLv2 license. 
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos, @ajaxloadmore, @connekthq 
 */

(function ($) {
   "use strict"; 

   $.ajaxloadmore = function (el, e) {

      //Prevent loading of unnessasry posts - move user to top of page
      if(alm_localize.scrolltop === 'true'){
         $(window).scrollTop(0);
      }
      
      //Set ALM Variables
      let alm = this;
      alm.AjaxLoadMore = {}; 
      alm.window = $(window);
      alm.page = 0;
      alm.posts = 0;
      alm.totalposts = 0;
      alm.proceed = false;
      alm.disable_ajax = false;
      alm.init = true;
      alm.loading = true;
      alm.finished = false;
      alm.el = el;
      alm.container = el;
      alm.container.addClass('alm-'+e).attr('data-alm-id', e); // Add unique classname and data id
      alm.content = $('.alm-ajax', alm.container);
      alm.content_preloaded = $('.alm-listing.alm-preloaded', alm.container);
      alm.canonical_url = alm.el.attr('data-canonical-url');
      alm.is_search = alm.el.attr('data-search');
      alm.slug = alm.el.attr('data-slug');
      alm.post_id = alm.el.attr('data-post-id');
      alm.prefix = 'alm-';

      alm.repeater = alm.content.attr('data-repeater'); // Repeaters
      alm.theme_repeater = alm.content.attr('data-theme-repeater');
      
      alm.post_type = alm.content.attr('data-post-type');
      alm.post_type = alm.post_type.split(",");
      alm.sticky_posts = alm.content.attr('data-sticky-posts');
      alm.btnWrap = $('.alm-btn-wrap', alm.container);
		alm.button_label = alm.content.attr('data-button-label');
      alm.button_loading_label = alm.content.attr('data-button-loading-label');
      alm.scroll_distance = parseInt(alm.content.attr('data-scroll-distance'));      
      alm.scroll_container = alm.content.attr('data-scroll-container'); 
      alm.max_pages = parseInt(alm.content.attr('data-max-pages'));
      alm.pause_override = alm.content.attr('data-pause-override'); // true | false
      alm.pause = alm.content.attr('data-pause'); // true | false
      alm.transition = alm.content.attr('data-transition'); // Transition
      alm.transition_container = alm.content.attr('data-transition-container'); // Transition Container
      alm.tcc = alm.content.attr('data-transition-container-classes'); // Transition Container Classes
      alm.speed = alm.content.attr('data-transition-speed');
      alm.images_loaded = alm.content.attr('data-images-loaded');
      alm.destroy_after = alm.content.attr('data-destroy-after');
      alm.lang = alm.content.attr('data-lang');
      alm.orginal_posts_per_page = alm.content.attr('data-posts-per-page'); // Used for paging add-on
      alm.posts_per_page = alm.content.attr('data-posts-per-page');
      alm.offset = alm.content.attr('data-offset');
      
      alm.cache = alm.content.attr('data-cache'); // Cache add-on
      alm.cache_id = alm.content.attr('data-cache-id'); // cache value
      alm.cache_path = alm.content.attr('data-cache-path'); // cache path 
      alm.cache_logged_in = alm.content.attr('data-cache-logged-in'); // cache logged in (settings)

      alm.cta = alm.content.attr('data-cta'); // CTA add-on
      alm.cta_position = alm.content.attr('data-cta-position');
      alm.cta_repeater = alm.content.attr('data-cta-repeater');
      alm.cta_theme_repeater = alm.content.attr('data-cta-theme-repeater'); 

      alm.acf = alm.content.attr('data-acf'); // ACF add-on
      alm.acf_field_type = alm.content.attr('data-acf-field-type'); // Field Type
      alm.acf_field_name = alm.content.attr('data-acf-field-name'); // Field Name
      alm.acf_post_id = alm.content.attr('data-acf-post-id'); // Get the Post ID

      alm.nextpage = alm.content.attr('data-nextpage'); // Nextpage add-on
      alm.nextpage_urls = alm.content.attr('data-nextpage-urls'); // Update url
      alm.nextpage_scroll = alm.content.attr('data-nextpage-scroll'); // Scroll
      alm.nextpage_pageviews = alm.content.attr('data-nextpage-pageviews'); // pageviews
      alm.nextpage_post_id = alm.content.attr('data-nextpage-post-id'); // Get the nextpage id
      alm.nextpage_startpage = alm.content.attr('data-nextpage-startpage'); // nextpage startpage

      alm.previous_post = alm.content.attr('data-previous-post'); // Previous Post add-on
      alm.previous_post_id = alm.content.attr('data-previous-post-id'); // Get the post id
      alm.previous_post_taxonomy = alm.content.attr('data-previous-post-taxonomy'); // Get the post taxonomy
      alm.previous_post_excluded_terms = alm.content.attr('data-previous-post-excluded-terms'); // Get the post excluded terms

      alm.comments = alm.content.attr('data-comments'); // true | false
      if(alm.comments === 'true'){ // if comments, then set alm.content to comments wrap
         alm.content = $('.alm-comments', alm.container);
      }
      alm.comments_post_id = alm.content.attr('data-comments_post_id'); // current post id
      alm.comments_per_page = alm.content.attr('data-comments_per_page');
      alm.comments_type = alm.content.attr('data-comments_type');
      alm.comments_style = alm.content.attr('data-comments_style');
      alm.comments_template = alm.content.attr('data-comments_template');
      alm.comments_callback = alm.content.attr('data-comments_callback');

      alm.restapi = alm.content.attr('data-restapi');
      alm.restapi_base_url = alm.content.attr('data-restapi-base-url');
      alm.restapi_namespace = alm.content.attr('data-restapi-namespace');
      alm.restapi_endpoint = alm.content.attr('data-restapi-endpoint');
      alm.restapi_template_id = alm.content.attr('data-restapi-template-id');
      alm.restapi_debug = alm.content.attr('data-restapi-debug');

      alm.seo = alm.content.attr('data-seo'); // true | false

      alm.preloaded = alm.content.attr('data-preloaded'); // true | false
      alm.preloaded_amount = alm.content.attr('data-preloaded-amount'); // 0

      alm.paging = alm.content.attr('data-paging'); // is paging enabled
      alm.paging_controls = alm.content.attr('data-paging-controls');
      alm.paging_show_at_most = alm.content.attr('data-paging-show-at-most');
      alm.paging_classes = alm.content.attr('data-paging-classes');
      alm.paging_init = true;
      
      alm.users = (alm.content.attr('data-users') === 'true') ? true : false; // Users add-on
      if(alm.users){
         // Override paging params for users
         alm.orginal_posts_per_page = alm.content.attr('data-users-per-page');
         alm.posts_per_page = alm.content.attr('data-users-per-page');
      }
		

      /* REST API */
		if(alm.restapi === 'true'){
			alm.restapi = true;
			if(alm.restapi_debug === undefined){
   			alm.restapi_debug = false;
			}
			if(alm.restapi_template_id === ''){
   			alm.restapi = false;
			}
		}else{
   		alm.restapi = false;
		}
      /* End REST API  */


		/* Paging */
		if(alm.paging === 'true'){
			alm.paging = true;
			if(alm.paging_show_at_most === undefined){
   			alm.paging_show_at_most = 7;
			}
			if(alm.preloaded === 'true'){ // If preloaded, pause ALM
				alm.pause = true;
			}
		}else{
			alm.paging = false;
		}

		alm.paging_controls = (alm.paging_controls === 'true') ? true : false;
      /* End Paging  */


      /* Cache */
      if (alm.cache === undefined){
         alm.cache = false;
      }
      if (alm.cache_logged_in === undefined){
         alm.cache_logged_in = false;
      }
      /* End Cache  */


      /* Comments */
      if (alm.comments_per_page === undefined){
         alm.comments_per_page = '5';
      }
      /* End Comments  */


      /* Preloaded */
      /* If posts_per_page <= preloaded_total_posts disable ajax load more */
      if (alm.preloaded === 'true'){
         alm.preload_wrap = alm.content.prev('.alm-preloaded');
         alm.preloaded_total_posts = parseInt(alm.preload_wrap.attr('data-total-posts'));
         if (alm.preloaded_amount === undefined){
            alm.preloaded_amount = false;
         }
         if (alm.preloaded_total_posts <= alm.preloaded_amount){
            alm.disable_ajax = true;
         }
      }else{
	      alm.preloaded = 'false';
      }
      /* End Preloaded  */


      /* SEO */
      if (alm.seo === undefined){
         alm.seo = false;
      } 
      if (alm.seo === 'true'){
         alm.seo = true; // Convert string to boolean
      }
      if (alm.is_search === undefined){
         alm.is_search = false;
      }
      alm.search_value = (alm.is_search === 'true') ? alm.slug : ''; // Convert to value of slug for appending to seo url

      alm.permalink = alm.content.attr('data-seo-permalink');
      alm.pageview = alm.content.attr('data-seo-pageview');
      alm.start_page = alm.content.attr('data-seo-start-page');
      alm.trailing_slash = (alm.content.attr('data-seo-trailing-slash') === 'false') ? '' : '/';

      if(alm.start_page){
         alm.seo_scroll = alm.content.attr('data-seo-scroll');
         alm.seo_scroll_speed = alm.content.attr('data-seo-scroll-speed');
         alm.seo_scrolltop = alm.content.attr('data-seo-scrolltop');
         alm.seo_controls = alm.content.attr('data-seo-controls');

	      alm.isPaged = false;

	      if (alm.start_page > 1) {
	         alm.isPaged = true; // Is this a $paged page > 1 ?
            alm.posts_per_page = alm.start_page * alm.posts_per_page;
	      }
	      if(alm.paging){ // If paging, reset posts_per_page
   	      alm.posts_per_page = alm.orginal_posts_per_page;
	      }
      }else{
         alm.start_page = 1;
      }
      /* End SEO  */


      /* Nextpage */
      if (alm.nextpage === 'true'){
         alm.nextpage = true;
         alm.posts_per_page = 1;
      }else{
         alm.nextpage = false;
      }
      if (alm.nextpage_urls === undefined){
         alm.nextpage_urls = 'true';
      }
      if (alm.nextpage_scroll === undefined){
         alm.nextpage_scroll = '250:30';
      }
      if (alm.nextpage_pageviews === undefined){
         alm.nextpage_pageviews = 'true';
      }
      if (alm.nextpage_post_id === undefined){
         alm.nextpage = false;
         alm.nextpage_post_id = null;
      }
      if (alm.nextpage_startpage === undefined){
         alm.nextpage_startpage = 1;
      }
      if (alm.nextpage_startpage > 1) {
         alm.isPaged = true;
	   }
      /* End Nextpage  */


      /* Advanced Custom Fields */
      alm.acf = (alm.acf === 'true') ? true : false;
      // if field type, name or post ID is empty
      if (alm.acf_field_type === undefined || alm.acf_field_name === undefined || alm.acf_post_id === undefined){
         alm.acf = false;
      }
      /* End Advanced Custom Fields  */


      /* Previous Post */
      if (alm.previous_post === 'true'){
         alm.previous_post = true;
         alm.previous_post_permalink = '';
         alm.previous_post_title = '';
         alm.previous_post_slug = '';
      }else{
         alm.previous_post = false;
      }
      if (alm.previous_post_id === undefined){
         alm.previous_post_id = '';
      }
      if (alm.previous_post_taxonomy === undefined){
         alm.previous_post_taxonomy = '';
      }
      if (alm.previous_post_excluded_terms === undefined){
         alm.previous_post_excluded_terms = '';
      }
      alm.previous_post_title_template = alm.content.attr('data-previous-post-title-template');
      alm.siteTitle = alm.content.attr('data-previous-post-site-title');
      alm.siteTagline = alm.content.attr('data-previous-post-site-tagline');
      alm.previous_post_pageview = alm.content.attr('data-previous-post-pageview');
      alm.previous_post_scroll = alm.content.attr('data-previous-post-scroll');
      alm.previous_post_scroll_speed = alm.content.attr('data-previous-post-scroll-speed');
      alm.previous_post_scroll_top = alm.content.attr('data-previous-post-scrolltop');
      alm.previous_post_controls = alm.content.attr('data-previous-post-controls');
      /* End Previous Post */

      /* Offset */
      alm.offset = (alm.offset === undefined) ? 0 : alm.offset;

      /* Pause */
      if (alm.pause === undefined || (alm.seo && alm.start_page > 1)){// SEO only
         alm.pause = false;
      }
      if (alm.preloaded === 'true' && alm.seo && alm.start_page > 0){ // SEO + Preloaded
         alm.pause = false;
      }
      if(alm.preloaded === 'true' && alm.paging){
         alm.pause = true;
      }

      /* Repeater and Theme Repeater */
      if (alm.repeater === undefined){
         alm.repeater = 'default';
      }
      if (alm.theme_repeater === undefined){
         alm.theme_repeater = 'null';
      }

      /* Max Pages (while scrolling) */
      alm.max_pages = (alm.max_pages === undefined || alm.max_pages === 0) ? 10000 : alm.max_pages;

      /* Scroll Distance */
      alm.scroll_distance = (alm.scroll_distance === undefined) ? 150 : alm.scroll_distance;

      /* Scroll Container */
      alm.scroll_container = (alm.scroll_container === undefined) ? '' : alm.scroll_container;

      /* Transition */
      alm.transition = (alm.transition === undefined) ? 'slide' : alm.transition;
      
      /* Transition Container Class */
      alm.tcc = (alm.tcc === undefined) ? '' : alm.tcc;
      
		/* Masonry */
      alm.is_masonry_preloaded = false;
      if(alm.transition === 'masonry'){
      	alm.masonry_selector = alm.content.attr('data-masonry-selector');
      	alm.masonry_animation = alm.content.attr('data-masonry-animation');
      	alm.masonry_horizontalorder = alm.content.attr('data-masonry-horizontalorder');
      	if (alm.masonry_animation === undefined){
         	alm.masonry_animation = 'standard';
         }
      	if (alm.masonry_horizontalorder === undefined){
         	alm.masonry_horizontalorder = 'true';
         }
			alm.masonry_wrap = alm.content;
			alm.transition_container = false;
			if(document.body.contains(alm.content_preloaded.get(0))){
				alm.masonry_wrap = alm.content_preloaded;
				alm.is_masonry_preloaded = true;
			}
      }

      /* Speed */      
      alm.speed = (alm.speed === undefined || alm.speed === '') ? 250 : parseInt(alm.speed);
            
      /* Scroll */
      if (alm.content.attr('data-scroll') === undefined){
         alm.scroll = true;
      }else if (alm.content.attr('data-scroll') === 'false'){
         alm.scroll = false;
      }else{
         alm.scroll = true;
      }

      /* Transition Container */
      alm.transition_container = (alm.transition_container === undefined || alm.transition_container === 'true') ? true : false;

      /* Images Loaded */
      alm.images_loaded = (alm.images_loaded === undefined) ? 'false' : alm.images_loaded;

      /* Button Labels */
      alm.button_label = (alm.button_label === undefined) ? 'Older Posts' : alm.button_label;
      alm.button_loading_label = (alm.button_loading_label === undefined) ? false : alm.button_loading_label;
      

      // Paging add-on
      if(alm.paging){ 
	      alm.content.parent().addClass('loading'); // add loading class to main container
		}else{
			alm.button = $('.alm-load-more-btn', alm.container); // Set button element	 	
		}



      /*  loadPosts()
       *
       *  The function to get posts via Ajax
       *  @since 2.0.0
       */

      alm.AjaxLoadMore.loadPosts = function () {
         if(!alm.disable_ajax){ // Check for ajax blocker
	         if(!alm.paging){
            	alm.button.addClass('loading');
            	if(alm.button_loading_label !== false){
               	alm.button.html(alm.button_loading_label);
            	}
            }
            alm.container.addClass('alm-loading');
            alm.loading = true;

            // If cache = true && cache_logged_in setting is false
            if(alm.cache === 'true' && !alm.cache_logged_in){

               var cache_page;

               if(alm.init && alm.seo && alm.isPaged){
                  // SEO Add-on
                  // If the request a paged URL (/page/3/)
                  var firstpage = '1';
                  cache_page = alm.cache_path + alm.cache_id + '/page-' + firstpage +'-'+ alm.start_page +'.html';
               }

               else if(alm.nextpage){
                  // Nextpage add-on
                  var nextpage_cache_page;
                  if(alm.paging){
                     nextpage_cache_page = parseInt(alm.page) + 1;
                  }else{
                     nextpage_cache_page = parseInt(alm.page) + 2;
                     if(alm.isPaged){
                        // If the request a paged URL (/page/3/)
                        nextpage_cache_page = parseInt(alm.page) + parseInt(alm.nextpage_startpage) + 1;
                     }
                  }
                  cache_page = alm.cache_path + alm.cache_id + '/page' +'-'+ nextpage_cache_page +'.html';
               }

               else if(alm.previous_post){
                  // Previous Post
                  cache_page = alm.cache_path + alm.cache_id + '/' + alm.previous_post_id +'.html';
               }

               else {
                  // Standard ALM URL request
                  cache_page = alm.cache_path + alm.cache_id + '/page-' + (alm.page + 1) +'.html';
               }

               $.get(cache_page, function( data ) {
                  alm.AjaxLoadMore.success(data, true); // data contains whatever the request has returned
               }).fail(function() {
                  alm.AjaxLoadMore.ajax('standard');
               });

            } else { // Standard ALM query

               alm.AjaxLoadMore.ajax('standard');

            }
         }

      };


      /*  ajax()
       *  Ajax Load Moe Ajax function
       *
       *  @param queryType The type of Ajax request (standard/totalposts)
       *  @since 2.6.0
       */

      alm.AjaxLoadMore.ajax = function (queryType) {

         // Default action
         var action = 'alm_query_posts'; 

         // ACF Params
         alm.acf_array = '';
         if(alm.acf){
            // Custom query for the Repeater / Gallery / Flexible Content field types
            if(alm.acf_field_type !== 'relationship'){
               action = 'alm_acf_query';
            }
            alm.acf_array = {
               'acf' 			: 'true',
               'post_id' 		: alm.acf_post_id,
               'field_type' 	: alm.acf_field_type,
               'field_name' 	: alm.acf_field_name
            };
         } 

         // Nextpage Params
         alm.nextpage_array = '';
         if(alm.nextpage){
            action = 'alm_nextpage_query';
            alm.nextpage_array = {
               'nextpage' 	: 'true',
               'urls' 	   : alm.nextpage_urls,
               'scroll'    : alm.nextpage_scroll,
               'pageviews' : alm.nextpage_pageviews,
               'post_id' 	: alm.nextpage_post_id,
               'startpage' : alm.nextpage_startpage
            };
         }

         // Previous Post Params
         alm.previous_post_array = '';
         if(alm.previous_post){
            alm.previous_post_array = {
               'previous_post' : 'true',
               'id'            : alm.previous_post_id,
               'slug'          : alm.previous_post_slug,
            };
         }

         // Comment query
         alm.comments_array = '';
         if(alm.comments === 'true'){
            action = 'alm_comments_query';
            alm.posts_per_page = alm.comments_per_page;
            alm.comments_array = {
               'comments': 'true',
               'post_id': alm.comments_post_id,
               'per_page': alm.comments_per_page,
               'type': alm.comments_type,
               'style': alm.comments_style,
               'template': alm.comments_template,
               'callback': alm.comments_callback,
            };
         }
         
         // Users query
         alm.users_array = ''; 
         if(alm.users){
            action = 'alm_users_query';
            alm.users_array = {
               'users': 'true',
               'role': alm.content.attr('data-users-role'),
               'include': alm.content.attr('data-users-include'),
               'exclude': alm.content.attr('data-users-exclude'),
               'per_page': alm.posts_per_page,
               'order': alm.content.attr('data-users-order'),
               'orderby': alm.content.attr('data-users-orderby'),
            };
         }           
            
         // CTA Add-on Query params
         alm.cta_array = '';
         if(alm.cta === 'true'){
            alm.cta_array = {
               'cta': 'true',
               'cta_position': alm.cta_position,
               'cta_repeater': alm.cta_repeater,
               'cta_theme_repeater': alm.cta_theme_repeater,
            };
         }
         

         // REST API
         if(alm.restapi){
            var alm_template = wp.template(alm.restapi_template_id),
                rest_url = alm.restapi_base_url + '/' + alm.restapi_namespace + '/' + alm.restapi_endpoint,
                rest_data = {
   	            id						: el.attr('data-id'),
   	            post_id				: alm.post_id,
                  posts_per_page    : alm.posts_per_page,
                  page              : alm.page,
                  offset            : alm.offset,
   	            slug              : alm.slug,
   	            canonical_url     : alm.canonical_url,
                  post_type         : alm.post_type,
                  post_format       : alm.content.attr('data-post-format'),
                  category          : alm.content.attr('data-category'),
                  category__not_in  : alm.content.attr('data-category-not-in'),
                  tag               : alm.content.attr('data-tag'),
                  tag__not_in       : alm.content.attr('data-tag-not-in'),
                  taxonomy          : alm.content.attr('data-taxonomy'),
                  taxonomy_terms    : alm.content.attr('data-taxonomy-terms'),
                  taxonomy_operator : alm.content.attr('data-taxonomy-operator'),
                  taxonomy_relation : alm.content.attr('data-taxonomy-relation'),
                  meta_key          : alm.content.attr('data-meta-key'),
                  meta_value        : alm.content.attr('data-meta-value'),
                  meta_compare      : alm.content.attr('data-meta-compare'),
                  meta_relation     : alm.content.attr('data-meta-relation'),
                  meta_type         : alm.content.attr('data-meta-type'),
                  author            : alm.content.attr('data-author'),
                  year              : alm.content.attr('data-year'),
                  month             : alm.content.attr('data-month'),
                  day               : alm.content.attr('data-day'),
                  post_status       : alm.content.attr('data-post-status'),
                  order             : alm.content.attr('data-order'),
                  orderby           : alm.content.attr('data-orderby'),
                  post__in          : alm.content.attr('data-post-in'),
                  post__not_in      : alm.content.attr('data-post-not-in'),
                  search            : alm.content.attr('data-search'),
                  custom_args       : alm.content.attr('data-custom-args'),
                  lang              : alm.lang,
                  preloaded         : alm.preloaded,
                  preloaded_amount  : alm.preloaded_amount,
                  seo_start_page    : alm.start_page
               };

            $.ajax({
               type : "GET",
               url : rest_url,
               data: rest_data,
               dataType: "JSON",
               beforeSend: function () {
                  if (alm.page != 1 && !alm.paging) {
                     alm.button.addClass('loading');
                  }
               },
               success: function (results) {
                  var data = '',
                  	 html = results.html,
                  	 meta = results.meta,
                  	 postcount = meta.postcount,
                  	 totalposts = meta.totalposts;

                  // loop results to get data from each
                  $.each(html, function(e){
                     var result = html[e];
                     if(alm.restapi_debug === 'true'){ // If debug
                        console.log(result);
                     }
                     data += alm_template(result);
                  });

                  // Create object to pass to success()
                  var obj = {
	                  'html' : data,
	                  'meta' : {
		                  'postcount' : postcount,
		                  'totalposts' : totalposts
	                  },
	               };
                  alm.AjaxLoadMore.success(obj, false); // Send data
               }
            });
         }
         // Standard ALM
         else {
            $.ajax({
               type: "GET",
               url: alm_localize.ajaxurl,
               dataType: "JSON",
               data: {
                  action               : action,
                  nonce						: alm_localize.alm_nonce,
   	            query_type           : queryType,
   	            post_id					: alm.post_id,
   	            id							: el.attr('data-id'),
   	            slug                 : alm.slug,
   	            canonical_url        : alm.canonical_url,
                  cache_id             : alm.cache_id,
                  cache_logged_in      : alm.cache_logged_in,
                  repeater             : alm.repeater,
                  theme_repeater       : alm.theme_repeater,
                  acf           			: alm.acf_array,
                  nextpage           	: alm.nextpage_array,
                  cta            		: alm.cta_array,
                  comments             : alm.comments_array,
                  users						: alm.users_array,
                  post_type            : alm.post_type,
                  sticky_posts         : alm.sticky_posts,
                  post_format          : alm.content.attr('data-post-format'),
                  category             : alm.content.attr('data-category'),
                  category__not_in     : alm.content.attr('data-category-not-in'),
                  tag                  : alm.content.attr('data-tag'),
                  tag__not_in          : alm.content.attr('data-tag-not-in'),
                  taxonomy             : alm.content.attr('data-taxonomy'),
                  taxonomy_terms       : alm.content.attr('data-taxonomy-terms'),
                  taxonomy_operator    : alm.content.attr('data-taxonomy-operator'),
                  taxonomy_relation    : alm.content.attr('data-taxonomy-relation'),
                  meta_key             : alm.content.attr('data-meta-key'),
                  meta_value           : alm.content.attr('data-meta-value'),
                  meta_compare         : alm.content.attr('data-meta-compare'),
                  meta_relation        : alm.content.attr('data-meta-relation'),
                  meta_type            : alm.content.attr('data-meta-type'),
                  author               : alm.content.attr('data-author'),
                  year                 : alm.content.attr('data-year'),
                  month                : alm.content.attr('data-month'),
                  day                  : alm.content.attr('data-day'),
                  post_status          : alm.content.attr('data-post-status'),
                  order                : alm.content.attr('data-order'),
                  orderby              : alm.content.attr('data-orderby'),
                  post__in             : alm.content.attr('data-post-in'),
                  post__not_in         : alm.content.attr('data-post-not-in'),
                  exclude              : alm.content.attr('data-exclude'), // Deprecate soon in favor of post__not_in
                  search               : alm.content.attr('data-search'),
                  custom_args          : alm.content.attr('data-custom-args'),
                  posts_per_page       : alm.posts_per_page,
                  page           		: alm.page,
                  offset               : alm.offset,
                  preloaded            : alm.preloaded,
                  preloaded_amount     : alm.preloaded_amount,
                  seo_start_page       : alm.start_page,
                  paging               : alm.paging,
                  previous_post        : alm.previous_post_array,
                  lang                 : alm.lang
               },

               beforeSend: function () {
                  if (alm.page != 1 && !alm.paging) {
                     alm.button.addClass('loading');
                  }
               },

               success: function (data) {
	               // Standard Query
   	            if(queryType === 'standard'){
                  	alm.AjaxLoadMore.success(data, false);
                  }
                  else if(queryType === 'totalpages' && alm.paging && alm.nextpage){
	                  // Next Page and Paging
	                  if($.isFunction($.fn.almBuildPagination)){
                  		$.fn.almBuildPagination(data, alm);
                  	}
	               }
                  else if(queryType === 'totalposts' && alm.paging){
	                  // Paging
   	               if($.isFunction($.fn.almBuildPagination)){
                  		$.fn.almBuildPagination(data, alm);
                  	}
                  }

               },

               error: function (jqXHR, textStatus, errorThrown) {
                  alm.AjaxLoadMore.error(jqXHR, textStatus, errorThrown);
               }

            });
         }
      };



      // If pagination enabled, run totalposts query
      if(alm.paging){
	      if(alm.nextpage){
		      alm.AjaxLoadMore.ajax('totalpages'); // Create paging menu and query for total pages
	      } else {
         	alm.AjaxLoadMore.ajax('totalposts'); // Create paging menu and query for total posts
         }
      }



      /*  success()
       *
       *  Success function after loading data
       *
       *  @param data     The results of the Ajax request
       *  @param is_cache Are results of the Ajax request coming from cache
       *  @since 2.6.0
       */

      alm.AjaxLoadMore.success = function (data, is_cache) {

         if(alm.previous_post){ // Get previous page data
            alm.AjaxLoadMore.getPreviousPost();
         }

         var html, meta, total;

         if(is_cache){
            // If content is cached don't look for json data - we won't be querying the DB.
            html = data;
         }else{
	         // Standard ALM query results
            html = data.html;
            meta = data.meta;
            alm.posts = alm.posts + meta.postcount;
	         total = meta.postcount;
            alm.totalposts = meta.totalposts;
            if(alm.preloaded === 'true'){
	            alm.totalposts = alm.totalposts - alm.preloaded_amount;
            }
         }

         alm.data = $(html); // data converted to an object

         if(is_cache){ // If cache, get the length of the data object
	      	total = alm.data.length;
	      }

         // First Run
         if (alm.init) {

	         if(!alm.paging){

            	alm.button.html(alm.button_label);

            } else {

               // Is pagination
               if (total > 0) {
                  alm.el = $('<div class="alm-reveal'+alm.tcc+'"/>');
                  alm.el.append('<div class="alm-paging-content"></div><div class="alm-paging-loading"></div>');
                  $('.alm-paging-content', alm.el).append(alm.data).hide();
                  alm.content.append(alm.el);
               	alm.content.parent().removeClass('loading'); // Remove loading class from main container
						alm.AjaxLoadMore.resetBtnText();

                  $('.alm-paging-content', alm.el).fadeIn( alm.speed, 'alm_easeInOutQuad', function(){
	                  var paddingT = parseInt(alm.content.css('padding-top')),
								 paddingB = parseInt(alm.content.css('padding-bottom'));
                     alm.content.css('height', alm.el.height() + paddingT + paddingB + 'px');
                     if ($.isFunction($.fn.almFadePageControls)){
                        $.fn.almFadePageControls(alm.btnWrap);
                     }
                  });
               }
            }

            // ALM Empty
            if(total === 0){
               if ($.isFunction($.fn.almEmpty)) {
                  $.fn.almEmpty(alm);
               }
            }

            // isPaged
            if(alm.isPaged){
               // Reset our posts per page variable
               if(alm.users){
                  alm.posts_per_page = alm.content.attr('data-users-per-page');         
               } else {
                  alm.posts_per_page = alm.content.attr('data-posts-per-page');
               }
               alm.page = alm.start_page - 1; // Set our new page #
            }

         }
         

         if (total > 0) {

            // Results!
            if(!alm.paging){

               if(alm.previous_post){ // If Previous Post, create container and append data

               	alm.el = $('<div class="alm-reveal alm-previous-post post-'+alm.previous_post_id+'" data-id="'+alm.previous_post_id+'" data-title="'+alm.previous_post_title+'" data-url="'+alm.previous_post_permalink+'" data-page="'+alm.page+'"/>');
               	alm.el.append(alm.data).hide();

               } else {

                  if(!alm.transition_container){ // No transition container

                     alm.data.hide();
                     alm.el = alm.data;

                  } else { // Standard container

							var pagenum;

                     // SEO
                     if (alm.init && alm.start_page > 1){
                        // loop through items and break into separate alm-reveal divs for paging

                        var seo_data = [],
                            posts_per_page = parseInt(alm.posts_per_page);

                        if(alm.cta === 'true'){
                           // If CTA, +1 to posts_per_page to offset the CTA template and correct the display
                           posts_per_page = posts_per_page + 1;
                        }

                        var pages = Math.ceil(total/posts_per_page); // slice seo_data array into pages
                        for (var i = 0; i < total; i += posts_per_page) {
                           seo_data.push(alm.data.slice(i, posts_per_page + i));
                        }

                        alm.el = alm.content; // Set alm.el to be alm-listing div
                        for (var k = 0; k < seo_data.length; k++){

                           var p = (alm.preloaded === 'true') ? 1 : 0; // Add 1 page if items are preloaded.
                           var div;

                           if(k > 0 || alm.preloaded === 'true'){ // > Paged
                              pagenum = (k + 1 + p);
                              if(alm.permalink === 'default'){
                                 div = $('<div class="alm-reveal alm-seo'+alm.tcc+'" data-url="'+alm.canonical_url+''+ alm.search_value +'&paged='+ pagenum+'" data-page="'+ pagenum +'" />');
                              }else{
                                 div = $('<div class="alm-reveal alm-seo'+alm.tcc+'" data-url="'+alm.canonical_url+'page/'+ pagenum + alm.trailing_slash + alm.search_value +'" data-page="'+ pagenum +'" />');
                              }
                           }else{ // First Page
                              div = $('<div class="alm-reveal alm-seo'+alm.tcc+'"  data-url="'+alm.canonical_url+''+ alm.search_value +'" data-page="1" />');
                           }

                           div.append(seo_data[k]);
                           div = $(div); // convert to object
                           alm.el.append(div).hide(); // Append data to .alm-listing wrapper

                        }
                     }
                     // End SEO -- /

                     else {
                        // If is SEO and paged, or preloaded.
                        if(alm.seo && alm.page > 0 || alm.preloaded === 'true'){

                           var p2 = (alm.preloaded === 'true') ? 1 : 0; // Add 1 page if items are preloaded.

                           // SEO [Paged]
                           pagenum = (alm.page + 1 + p2);

                           if(alm.seo){
                              if(alm.permalink === 'default'){
                                 alm.el = $('<div class="alm-reveal alm-seo'+alm.tcc+'" data-url="'+alm.canonical_url+''+ alm.search_value +'&paged='+ pagenum+'" data-page="'+ pagenum +'" />');
                              }else{
                                 alm.el = $('<div class="alm-reveal alm-seo'+alm.tcc+'" data-url="'+alm.canonical_url+'page/'+ pagenum + alm.trailing_slash + alm.search_value +'" data-page="'+ pagenum +'" />');
                              }
                           }else{
                              // Basic ALM
                              alm.el = $('<div class="alm-reveal'+alm.tcc+'" />');
                           }

                        }else{

                           if(alm.seo){
                              // SEO [Page 1]
                              alm.el = $('<div class="alm-reveal alm-seo'+alm.tcc+'" data-url="'+alm.canonical_url+''+ alm.search_value +'" data-page="1" />');
                           }else{
                              // Basic ALM
                              alm.el = $('<div class="alm-reveal'+alm.tcc+'" />');
                           }

                        }

                        alm.el.append(alm.data).hide();
                     }
               	}
               }

               // Append alm.el to ALM container
               // Do not append when transtion == masonry OR init and !preloaded
               if (alm.transition !== 'masonry' || (alm.init && !alm.is_masonry_preloaded)){
               	alm.content.append(alm.el);
					}

               // Transition
               if (alm.transition === 'fade') { // Fade
	               if(alm.images_loaded === 'true'){
		               alm.el.almWaitForImages().done(function(){
			               alm.el.fadeIn(alm.speed, 'alm_easeInOutQuad', function () {
		                     alm.loading = false;
		                     if(!alm.paging){
		                     	alm.button.delay(alm.speed).removeClass('loading');
		                     	alm.AjaxLoadMore.resetBtnText();
		                     }
		                     alm.container.removeClass('alm-loading');
				               alm.AjaxLoadMore.triggerAddons(alm);
		                  });
	                  });
	               }else{
		               alm.el.fadeIn(alm.speed, 'alm_easeInOutQuad', function () {
	                     alm.loading = false;
	                     if(!alm.paging){
	                     	alm.button.delay(alm.speed).removeClass('loading');
	                     	alm.AjaxLoadMore.resetBtnText();
	                     }
	                     alm.container.removeClass('alm-loading');
			               alm.AjaxLoadMore.triggerAddons(alm);
	                  });
	               }

               }else if(alm.transition === 'masonry') { // masonry

						almMasonry(alm.masonry_wrap, alm.el, alm.masonry_selector, alm.masonry_animation, alm.masonry_horizontalorder, alm.speed, alm.init, alm_is_filtering);
						

                  if(!alm.paging){
                  	alm.button.delay(alm.speed).removeClass('loading');
                  	alm.AjaxLoadMore.resetBtnText();
                  }
                  alm.loading = false;
                  alm.container.removeClass('alm-loading');
                  alm.AjaxLoadMore.triggerAddons(alm);

               }else if(alm.transition === 'none') { // None
	               if(alm.images_loaded === 'true'){
		               alm.el.almWaitForImages().done(function(){
			               alm.el.show();
			               alm.AjaxLoadMore.triggerAddons(alm);
			            });
		            }else{
			            alm.el.show();
		               alm.AjaxLoadMore.triggerAddons(alm);
                  }
                  alm.loading = false;
                  if(!alm.paging){
                  	alm.button.delay(alm.speed).removeClass('loading');
                  	alm.AjaxLoadMore.resetBtnText();
                  }

               }else { // Slide
	               if(alm.images_loaded === 'true'){
		               alm.el.almWaitForImages().done(function(){
		                  alm.el.slideDown(alm.speed, 'alm_easeInOutQuad', function () {
		                     alm.loading = false;
		                     if(!alm.paging){
		                     	alm.button.delay(alm.speed).removeClass('loading');
		                     	alm.AjaxLoadMore.resetBtnText();
		                     }
		                     alm.container.removeClass('alm-loading');
				               alm.AjaxLoadMore.triggerAddons(alm);
		                  });
	                  });
	               }else{
	                  alm.el.slideDown(alm.speed, 'alm_easeInOutQuad', function () {
	                     alm.loading = false;
	                     if(!alm.paging){
	                     	alm.button.delay(alm.speed).removeClass('loading');
	                     	alm.AjaxLoadMore.resetBtnText();
	                     }
	                     alm.container.removeClass('alm-loading');
                        alm.AjaxLoadMore.triggerAddons(alm);
	                  });
                  }
               }
               // End Transition

            } else {

               // Paging
               if(!alm.init){
                  $('.alm-paging-content', alm.el).html('').append(alm.data).almWaitForImages().done(function(){  // Remove loading class and append data
                     $('.alm-paging-loading', alm.el).fadeOut(alm.speed); // Fade out loader
                     if ($.isFunction($.fn.almOnPagingComplete)){
                        $.fn.almOnPagingComplete(alm);
                     }
                     alm.container.removeClass('alm-loading');
		               alm.AjaxLoadMore.triggerAddons(alm);
                  });
               } else {
	               alm.container.removeClass('alm-loading');
	               alm.AjaxLoadMore.triggerAddons(alm);
               }
               // End Paging

            }


            // ALM Complete
            if ($.isFunction($.fn.almComplete)) {
	            if(alm.images_loaded === 'true'){
	               alm.el.almWaitForImages().done(function(){
							$.fn.almComplete(alm);
						});
					}else{
						$.fn.almComplete(alm);
					}
            }
            // End ALM Complete


            // ALM Done
            if(!alm.cache){
	            // Not Cache & Previous Post
	            if(alm.posts >= alm.totalposts && !alm.previous_post){
	               alm.AjaxLoadMore.triggerDone();
	            }
            }else{ // Cache 
	            if(total < alm.posts_per_page){
	               alm.AjaxLoadMore.triggerDone();
	            }
            }
            // End ALM Done


         } else { 

	         // No Results!
	         if(!alm.paging){
            	alm.button.delay(alm.speed).removeClass('loading').addClass('done');
            	alm.AjaxLoadMore.resetBtnText();
            }
            alm.AjaxLoadMore.triggerDone(); // ALM Done

         }


         // Destroy After
         if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
            var currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
            if(alm.preload){
               currentPage++;
            }
            if(currentPage == alm.destroy_after){ // - Disable ALM is page = alm.destroy_after value
               alm.disable_ajax = true;
               if(!alm.paging){
               	alm.button.delay(alm.speed).fadeOut(alm.speed);
               	if ($.isFunction($.fn.almDestroyed)) {
							$.fn.almDestroyed(alm);
						}
               }
            }
         }
         // End Destroy After

			alm_is_filtering = false;
         alm.init = false;

      };




      /*  pagingPreloadedInit()
       *
       *  First run for Paging + Preloaded add-ons
       *  Moves preloaded content into ajax container
       *
       *  @param data     The results of the Ajax request
       *  @since 2.11.3
       */
      alm.AjaxLoadMore.pagingPreloadedInit = function(data){

         alm.el = $('<div class="alm-reveal'+alm.tcc+'"/>');
         alm.el.append('<div class="alm-paging-content">'+data+'</div><div class="alm-paging-loading"></div>');
         alm.content.append(alm.el);
      	alm.content.parent().removeClass('loading'); // Remove loading class from main container
			alm.AjaxLoadMore.resetBtnText();

         var paddingT = parseInt(alm.content.css('padding-top')),
				 paddingB = parseInt(alm.content.css('padding-bottom'));
         alm.content.css('height', alm.el.height() + paddingT + paddingB + 'px');

         if ($.isFunction($.fn.almFadePageControls)){
            $.fn.almFadePageControls(alm.btnWrap);
         }
      };



      /*  pagingNextpageInit()
       *
       *  First run for Paging + Next Page add-ons
       *  Moves .alm-nextpage content into ajax container
       *
       *  @param data     The results of the Ajax request
       *  @since 2.14.0
       */
      alm.AjaxLoadMore.pagingNextpageInit = function(data){
         alm.el = $('<div class="alm-reveal alm-nextpage"/>');
         alm.el.append('<div class="alm-paging-content">'+data+'</div><div class="alm-paging-loading"></div>');
         alm.el.appendTo(alm.content);
      	alm.content.parent().removeClass('loading'); // Remove loading class from main container
			alm.AjaxLoadMore.resetBtnText();

         var paddingT = parseInt(alm.content.css('padding-top')),
				 paddingB = parseInt(alm.content.css('padding-bottom'));
         alm.content.css('height', alm.el.height() + paddingT + paddingB + 'px');

         if ($.isFunction($.fn.almSetNextPageVars)){
         	$.fn.almSetNextPageVars(alm); // Next Page Add-on
         }

         // Delay the following to avoid positioning
         setTimeout(function(){
            if ($.isFunction($.fn.almFadePageControls)){
               $.fn.almFadePageControls(alm.btnWrap); // Paging Add-on
            }

            if ($.isFunction($.fn.almOnWindowResize)){
               $.fn.almOnWindowResize(alm); // Paging Add-on
            }
         }, 200);
      };




      /*  getPreviousPost()
       *
       *  Get the previous post ID via ajax
       *  @since 2.7.4
       */
      alm.fetchingPreviousPost = false;

      alm.AjaxLoadMore.getPreviousPost = function () {
	      alm.fetchingPreviousPost = true;

	      let data = {
				action: 'alm_query_previous_post',
				id: alm.previous_post_id,
				taxonomy: alm.previous_post_taxonomy,
				excluded_terms: alm.previous_post_excluded_terms
	      };

         $.ajax({
            type: "GET",
            dataType: "JSON",
            url: alm_localize.ajaxurl,
            data: data,
            success: function (data) {
               if(data.has_previous_post){
                  alm.content.attr('data-previous-post-id', data.prev_id); // update previous-post-id on ALM element
                  alm.previous_post_id = data.prev_id;
                  alm.previous_post_permalink = data.prev_permalink;
                  alm.previous_post_title = data.prev_title;
                  alm.previous_post_slug = data.prev_slug;

               }else{
                  if(!data.has_previous_post){
                     alm.AjaxLoadMore.triggerDone();
                  }
               }
               if($.isFunction($.fn.almSetPreviousPost)){
            		$.fn.almSetPreviousPost(alm, data.current_id, data.permalink, data.title);
            	}
            	alm.fetchingPreviousPost = false;
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alm.AjaxLoadMore.error(jqXHR, textStatus, errorThrown);
               alm.fetchingPreviousPost = false;
            }

         });
      };



      /*  loadComplete()
       *
       *  Fires various add-on functions (if available) after load complete.
       *  @since 2.14.0
       */
      alm.AjaxLoadMore.triggerAddons = function(alm){
         if ($.isFunction($.fn.almSEO) && alm.seo) {
            $.fn.almSEO(alm, false);
         }
         if($.isFunction($.fn.almSetNextPage)){
            $.fn.almSetNextPage(alm);
         }
      };



      /*  triggerDone()
       *
       *  Fires the almDone() function (if available).
       *  @since 2.11.3
       */
      alm.AjaxLoadMore.triggerDone = function(){
	      alm.loading = false;
         alm.finished = true;
         if(!alm.paging){
         	alm.button.addClass('done');
         }
			if ($.isFunction($.fn.almDone)) {
				// Delay done until after animation
				setTimeout(function(){
					$.fn.almDone(alm);
				}, alm.speed + 10);
			}
      };



      /*  resetBtnText()
       *
       *  Resets the loading button text after loading has completed
       *  @since 2.8.4
       */
      alm.AjaxLoadMore.resetBtnText = function(){

	      if(alm.button_loading_label !== false){ // Reset button text
   	      if(!alm.paging){
               alm.button.html(alm.button_label);
            }
         }

      };



      /* error()
       *
       *  Error function after failed data
       *  @since 2.6.0
       */

      alm.AjaxLoadMore.error = function (jqXHR, textStatus, errorThrown) {
         alm.loading = false;
         if(!alm.paging){
         	alm.button.removeClass('loading');
         	alm.AjaxLoadMore.resetBtnText();
         }
         console.log(errorThrown);
      };



      /*  Button onClick()
       *
       *  Load more button click event
       *  @since 1.0.0
       */

      if(!alm.paging && !alm.fetchingPreviousPost){
	      alm.button.unbind( "click" ); // Remove past event (when filtering data)
	      alm.button.on('click', function (e) {
   	      e.preventDefault();
	         if (alm.pause === 'true') {
	            alm.pause = false;
	            alm.pause_override = false;
	            alm.AjaxLoadMore.loadPosts();
	         }
	         if (!alm.loading && !alm.finished && !$(this).hasClass('done')) {
	            alm.loading = true;
	            alm.page++;
	            alm.AjaxLoadMore.loadPosts();
	         }
	      });
      }


 
      /*  Window Resize
       *
       *  Add resize function for Paging add-on only.
       *  @since 2.1.2
       */
      if(alm.paging){
			
			alm.window.unbind('resizeEnd'); // Remove past event (when filtering data)
         alm.window.bind('resizeEnd', function() {
            if ($.isFunction($.fn.almOnWindowResize)){
               $.fn.almOnWindowResize(alm);
            }
         });
			
			alm.window.unbind('resize');
         alm.window.bind('resize', function() {
            if(this.resizeTO){
               clearTimeout(this.resizeTO);
            }
            this.resizeTO = setTimeout(function() {
               $(this).trigger('resizeEnd');
            }, 250);
         });

      }



      /*  alm.AjaxLoadMore.isVisible()
       *
       *  Check to see if element is visible before loading posts
       *  @since 2.1.2
       */

      alm.AjaxLoadMore.isVisible = function () {
         alm.visible = false;
         if (alm.el.is(":visible")) {
            alm.visible = true;
         }
         return alm.visible;
      };



      /*  Window scroll and touchmove events
       *
       *  Load posts as user scrolls the page
       *  @since 1.0
       *  @updated 3.2.0
       */
      if (alm.scroll && !alm.paging) {
         
         // If scroll_container specified, set window object to container.
         if(alm.scroll_container !== ''){
            alm.window = $(alm.scroll_container);
         }       
         
         alm.window.bind("scroll touchstart", function () {             
            
            if (alm.AjaxLoadMore.isVisible() && !alm.fetchingPreviousPost) {
               
               let content_offset = alm.button.offset().top,
               	 top = Math.round(content_offset - (alm.window.height() - alm.scroll_distance)),
               	 scrollTrigger = (alm.window.scrollTop() >= top) ? true : false;
               
               
               // If scroll_container specified
               if(alm.scroll_container !== ''){
                  scrollTrigger = ((alm.button.offset().top - (alm.window.height() - alm.scroll_distance)) < alm.window.offset().top) ? true : false;
               }
               
                   
               // If Pause && Pause Override
	            if(!alm.loading && !alm.finished && scrollTrigger && alm.page < (alm.max_pages - 1) && alm.proceed && alm.pause === 'true' && alm.pause_override === 'true'){
		            alm.button.trigger('click');
	            }

	            // Standard Scroll event
	            else{
	               if (!alm.loading && !alm.finished && scrollTrigger && alm.page < (alm.max_pages - 1) && alm.proceed && alm.pause !== 'true') {
	                  alm.page++;
	                  alm.AjaxLoadMore.loadPosts();
	               }
               }
            }
         });
      }



      /*  Init Ajax load More
       *
       *  Load posts as user scrolls the page
       *  @since 2.0
       */
      alm.AjaxLoadMore.init = function(){

	      if(!alm.paging && !alm.previous_post){
	         if(alm.disable_ajax){
	            alm.finished = true;
	            alm.button.addClass('done');

	         }else{
	            if (alm.pause === 'true') {
	               alm.button.html(alm.button_label);
	               alm.loading = false;
	            } else {
	               alm.AjaxLoadMore.loadPosts();
	            }
	         }
	      }

			// Previous Post Add-on
	      if(alm.previous_post){
	         alm.AjaxLoadMore.getPreviousPost(); // Set next post on load
	         alm.loading = false;
	      }
	      
	      // Preloaded + SEO && !Paging
	      if(alm.preloaded === 'true' && alm.seo && !alm.paging){
   	      setTimeout(function () {     
      	      if ($.isFunction($.fn.almSEO) && alm.start_page < 1) {
         	      $.fn.almSEO(alm, true);
               } 
            }, 300);
         }

			// Next Page Add-on
	      if(alm.nextpage){
   	      if($('.alm-nextpage').length > 1){
      	      // If alm-nextpage is greater than 1, check that posts remain.
      	      // triggerDone is total equals total-pages
      	      var alm_nextpage_pages = $('.alm-nextpage').length,
      	          alm_nextpage_total = $('.alm-nextpage').eq(0).data('total-pages');

      	      if(alm_nextpage_pages == alm_nextpage_total){
         	      alm.AjaxLoadMore.triggerDone();
      	      }
   	      }
	      }

			// Masonry + Preloaded
			alm.window.bind('load', function(){
		      if(alm.is_masonry_preloaded){
			      almMasonry(alm.masonry_wrap, alm.el, alm.masonry_selector, alm.masonry_animation, alm.masonry_horizontalorder, alm.speed, true, false);
		      }
	      });

      };
      alm.AjaxLoadMore.init();



      //flag to prevent unnecessary loading of post on init. Hold for 3/10 of a second
      setTimeout(function () {
         alm.proceed = true;
      }, 300);



      /*  $.fn.almUpdateCurrentPage()
       *
       *  Update current page - triggered from paging add-on
       *  @since 2.7.0
       */
      $.fn.almUpdateCurrentPage = function(current, obj, alm){
         alm.page = current;

         // Next Page add-on
         if(alm.nextpage && !alm.paging){
   	      alm.page = alm.page - 1; // Remove 1 from next page since it starts at 0
         }

         var data = '';

         /*
	         Paging + Preloaded & Paging + Next Page
	         If is paging init and preloaded, grab preloaded data, and append it .alm-reveal
	       */

	      if(alm.paging_init && alm.preloaded === 'true'){

   	      // Paging + Preloaded Firstrun
		      data = $('.alm-preloaded .alm-reveal', alm.el).html(); // Content of preloaded page
		      $('.alm-preloaded', alm.el).remove();
		      alm.preloaded_amount = 0; // Reset
		      //alm.AjaxLoadMore.success(data, true); // Skip post loading and go right to success() for display
		      alm.AjaxLoadMore.pagingPreloadedInit(data);
		      alm.paging_init = false;
		      alm.init = false;

	      }
	      else if(alm.paging_init && alm.nextpage){

   	      // Paging + Next Page Firstrun
		      data = $('.alm-nextpage', alm.el).html();
		      $('.alm-nextpage', alm.el).remove();
		      alm.AjaxLoadMore.pagingNextpageInit(data);
		      alm.paging_init = false;
		      alm.init = false;

	      }
	      else{

   	      // Standard Paging
         	alm.AjaxLoadMore.loadPosts();

	      }
      };



      /*  $.fn.almGetParentContainer()
       *
       *  return the parent ALM container
       *
       *  @since 2.7.0
        * @return element
       */
      $.fn.almGetParentContainer = function(){
         return alm.el.closest('#ajax-load-more');
      };



      /* $.fn.almGetObj()
       *
       *  return the current ALM obj
       *
       *  @since 2.7.0
       *  @return object
       */
      $.fn.almGetObj = function(){
         return alm; // Return the entire alm object
      };



      /*  $.fn.almTriggerClick()
       *
       *  Trigger ajaxloadmore from any element on page
       *
       *  @since 2.12.0
       *  @return null
       */
      $.fn.almTriggerClick = function(){
         alm.button.trigger('click');
      };
      


      //Custom easing function
      $.easing.alm_easeInOutQuad = function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) { return c / 2 * t * t + b; }
         return -c / 2 * ((--t) * (t - 2) - 1) + b;
      };

   };

   // End $.ajaxloadmore
   
   


	/* $.fn.ajaxloadmore()
    *
    *  Initiate all instances of Ajax load More
    *  @since 2.1.2
    */
   $.fn.ajaxloadmore = function () {
      return this.each(function (e) {
         new $.ajaxloadmore($(this), e);
      });
   };



   /*
    *  Initiate Ajax load More if div is present on screen
    *  @since 2.1.2
    */

   let ajaxloadmore = document.querySelectorAll('.ajax-load-more-wrap');
   if(ajaxloadmore.length){
	   [...ajaxloadmore].forEach((alm, e) => {
		   //$(alm).data('alm', new $.ajaxloadmore($(alm), e));		   
		   new $.ajaxloadmore($(alm), e);
	   });
   }
   


	/*
	   if ($(".ajax-load-more-wrap").length){
	      $(".ajax-load-more-wrap").ajaxloadmore();
	   }
	*/



})(jQuery);