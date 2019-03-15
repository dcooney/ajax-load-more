/*
 * Ajax Load More
 * https://connekthq.com/plugins/ajax-load-more/
 * Author: Darren Cooney
 * Twitter: @KaptonKaos, @ajaxloadmore, @connekthq 
 * Copyright Connekt Media - https://connekthq.com
 */


// Polyfills
require("@babel/polyfill");
require('./helpers/polyfills.js');


// External Modules
let qs = require('qs');
let imagesLoaded = require('imagesloaded');
import axios from 'axios';
import smoothscroll from 'smoothscroll-polyfill'; // Smooth scrolling polyfill
smoothscroll.polyfill();


// ALM Modules
import './helpers/helpers';
import getParameterByName from './helpers/getParameterByName';
import almAppendChildren from './helpers/almAppendChildren';
import almTableWrap from './helpers/almTableWrap';
import almGetCacheUrl from './helpers/almGetCacheUrl';
import almDomParser from './helpers/almDomParser';
import * as queryParams from './helpers/queryParams';
import * as resultsText from './modules/resultsText';
import insertScript from './modules/insertScript';
import almMasonry from './modules/masonry';
import almFadeIn from './modules/fadeIn';
import almFadeOut from './modules/fadeOut';
import almFilter from './modules/filtering';


// Global filtering var
let alm_is_filtering = false;


// Start ALM
(function() {
   "use strict";

   /**
    * ajaxloadmore
    * Init Ajax Load More
    *
    * @param {*} el
    * @param {*} e
    */
   let ajaxloadmore = function(el, e) {


      // Move user to top of page to prevent loading of unnessasry posts
      if (alm_localize && alm_localize.scrolltop === 'true') {
         window.scrollTo(0, 0);
      }


      //Set ALM Variables
      let alm = this;
      alm.AjaxLoadMore = {};
      alm.addons = {};
      alm.extensions = {};
      alm.window = window;
      alm.page = 0;
      alm.posts = 0;
      alm.totalposts = 0;
      alm.proceed = false;
      alm.disable_ajax = false;
      alm.init = true;
      alm.loading = true;
      alm.finished = false;
      alm.main = el;
      alm.master_id = el.id; // the div#id of the instance 
      el.classList.add('alm-' + e); // Add unique classname
      el.setAttribute('data-alm-id', e); // Add unique data id


      // Get localized <script/> variables
      alm.master_id = alm.master_id.replace(/-/g, '_'); // Convert dashes to underscores for the var name
      alm.localize = window[alm.master_id + '_vars']; // Get localize vars


      // Main ALM Containers
      alm.main = el; // Top level DOM element
      alm.listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');
      alm.content = alm.listing;
      alm.el = alm.content;
      alm.ajax = el.querySelector('.alm-ajax');
      alm.container_type = alm.listing.dataset.containerType;


      // Instance Params
      alm.canonical_url = el.dataset.canonicalUrl;
      alm.nested = (el.dataset.nested) ? el.dataset.nested : null;
      alm.is_search = el.dataset.search;
      alm.slug = el.dataset.slug;
      alm.post_id = el.dataset.postId;
      alm.id = (el.dataset.id) ? el.dataset.id : '';


      // Shortcode Params 
      alm.repeater = alm.listing.dataset.repeater; // Repeaters
      alm.theme_repeater = alm.listing.dataset.themeRepeater;

      alm.post_type = (alm.listing.dataset.postType) ? alm.listing.dataset.postType : 'post';
      alm.sticky_posts = (alm.listing.dataset.stickyPosts) ? alm.listing.dataset.stickyPosts : null;

      alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs
      alm.btnWrap = Array.prototype.slice.call(alm.btnWrap); // Convert NodeList to array
      alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)

      alm.button_label = alm.listing.dataset.buttonLabel;
      alm.button_loading_label = alm.listing.dataset.buttonLoadingLabel;

      alm.scroll_distance = alm.listing.dataset.scrollDistance;
      alm.scroll_distance = (alm.scroll_distance) ? parseInt(alm.scroll_distance) : 100;
      alm.scroll_container = alm.listing.dataset.scrollContainer;
      alm.max_pages = (alm.listing.dataset.maxPages) ? parseInt(alm.listing.dataset.maxPages) : 0;
      alm.pause_override = alm.listing.dataset.pauseOverride; // true | false
      alm.pause = alm.listing.dataset.pause; // true | false
      alm.transition = alm.listing.dataset.transition; // Transition
      alm.transition_container = alm.listing.dataset.transitionContainer; // Transition Container
      alm.tcc = alm.listing.dataset.transitionContainerClasses; // Transition Container Classes
      alm.speed = 250;
      alm.images_loaded = (alm.listing.dataset.imagesLoaded) ? alm.listing.dataset.imagesLoaded : false;
      alm.destroy_after = (alm.listing.dataset.destroyAfter) ? alm.listing.dataset.destroyAfter : '';
      alm.orginal_posts_per_page = parseInt(alm.listing.dataset.postsPerPage); // Used for paging add-on
      alm.posts_per_page = alm.listing.dataset.postsPerPage;
      alm.offset = (alm.listing.dataset.offset) ? parseInt(alm.listing.dataset.offset) : 0;


      // Addon Shortcode Params
      alm.addons.cache = alm.listing.dataset.cache; // Cache add-on
      alm.addons.cache = (alm.addons.cache === undefined) ? false : alm.addons.cache;
      alm.addons.cache_id = alm.listing.dataset.cacheId;
      alm.addons.cache_path = alm.listing.dataset.cachePath;
      alm.addons.cache_logged_in = alm.listing.dataset.cacheLoggedIn;
      alm.addons.cache_logged_in = (alm.addons.cache_logged_in === undefined) ? false : alm.addons.cache_logged_in;

      alm.addons.cta = alm.listing.dataset.cta; // CTA add-on
      alm.addons.cta_position = alm.listing.dataset.ctaPosition;
      alm.addons.cta_repeater = alm.listing.dataset.ctaRepeater;
      alm.addons.cta_theme_repeater = alm.listing.dataset.ctaThemeRepeater;

      alm.addons.nextpage = alm.listing.dataset.nextpage; // Nextpage add-on
      alm.addons.nextpage_urls = alm.listing.dataset.nextpageUrls;
      alm.addons.nextpage_scroll = alm.listing.dataset.nextpageScroll;
      alm.addons.nextpage_pageviews = alm.listing.dataset.nextpagePageviews;
      alm.addons.nextpage_post_id = alm.listing.dataset.nextpagePostId;
      alm.addons.nextpage_startpage = alm.listing.dataset.nextpageStartpage;

      alm.addons.single_post = alm.listing.dataset.singlePost; // Previous Post add-on
      alm.addons.single_post_id = alm.listing.dataset.singlePostId;
      alm.addons.single_post_order = alm.listing.dataset.singlePostOrder;
      alm.addons.single_post_init_id = alm.listing.dataset.singlePostId;
      alm.addons.single_post_taxonomy = alm.listing.dataset.singlePostTaxonomy;
      alm.addons.single_post_excluded_terms = alm.listing.dataset.singlePostExcludedTerms;

      alm.addons.comments = alm.listing.dataset.comments; // Comments add-on      
      alm.addons.comments_post_id = alm.listing.dataset.comments_post_id; // current post id
      alm.addons.comments_per_page = alm.listing.dataset.comments_per_page;
      alm.addons.comments_per_page = (alm.addons.comments_per_page === undefined) ? '5' : alm.addons.comments_per_page;
      alm.addons.comments_type = alm.listing.dataset.comments_type;
      alm.addons.comments_style = alm.listing.dataset.comments_style;
      alm.addons.comments_template = alm.listing.dataset.comments_template;
      alm.addons.comments_callback = alm.listing.dataset.comments_callback;

      alm.addons.filters = alm.listing.dataset.filters;

      alm.addons.seo = alm.listing.dataset.seo; // SEO add-on

      alm.addons.preloaded = alm.listing.dataset.preloaded; // Preloaded add-on
      alm.addons.preloaded_amount = (alm.listing.dataset.preloadedAmount) ? alm.listing.dataset.preloadedAmount : 0;
      alm.is_preloaded = (alm.listing.dataset.isPreloaded === 'true') ? true : false;

      alm.addons.paging = alm.listing.dataset.paging; // Paging add-on      

      alm.addons.users = (alm.listing.dataset.users === 'true') ? true : false; // Users add-on
      if (alm.addons.users) { // Override paging params for users
         alm.orginal_posts_per_page = alm.listing.dataset.usersPerPage;
         alm.posts_per_page = alm.listing.dataset.usersPerPage;
      }

      // Extension Shortcode Params
      alm.extensions.restapi = alm.listing.dataset.restapi; // REST API
      alm.extensions.restapi_base_url = alm.listing.dataset.restapiBaseUrl;
      alm.extensions.restapi_namespace = alm.listing.dataset.restapiNamespace;
      alm.extensions.restapi_endpoint = alm.listing.dataset.restapiEndpoint;
      alm.extensions.restapi_template_id = alm.listing.dataset.restapiTemplateId; 
      alm.extensions.restapi_debug = alm.listing.dataset.restapiDebug;

      alm.extensions.acf = alm.listing.dataset.acf; // ACF
      alm.extensions.acf_field_type = alm.listing.dataset.acfFieldType;
      alm.extensions.acf_field_name = alm.listing.dataset.acfFieldName;
      alm.extensions.acf_post_id = alm.listing.dataset.acfPostId;
      alm.extensions.acf = (alm.extensions.acf === 'true') ? true : false;
      // if field type, name or post ID is empty
      if (alm.extensions.acf_field_type === undefined || alm.extensions.acf_field_name === undefined || alm.extensions.acf_post_id === undefined) {
         alm.extensions.acf = false;
      }
      

      /* Paging */
      if (alm.addons.paging === 'true') {
         alm.addons.paging = true;
         alm.addons.paging_controls = (alm.listing.dataset.pagingControls) ? true : false;
         alm.addons.paging_show_at_most = alm.listing.dataset.pagingShowAtMost;
         alm.addons.paging_classes = alm.listing.dataset.pagingClasses;
         alm.addons.paging_init = true;
         alm.addons.paging_show_at_most = (alm.addons.paging_show_at_most === undefined) ? 7 : alm.addons.paging_show_at_most;
         // If preloaded, pause ALM	
         alm.pause = (alm.addons.preloaded === 'true') ? true : alm.pause;
      } else {
         alm.addons.paging = false;
      }
      /* End Paging  */


      /* Filters */
      if (alm.addons.filters === 'true') {
         alm.addons.filters = true;

         alm.addons.filters_paging = (alm.listing.dataset.filtersPaging === 'true') ? true : false;
         alm.addons.filters_scroll = (alm.listing.dataset.filtersScroll === 'true') ? true : false;
         alm.addons.filters_scrolltop = (alm.listing.dataset.filtersScrolltop) ? alm.listing.dataset.filtersScrolltop : '30';
         alm.addons.filters_analtyics = alm.listing.dataset.filtersAnalytics;
         alm.addons.filters_debug = alm.listing.dataset.filtersDebug;
         alm.addons.filters_startpage = 0;

         // Get Paged Querystring Val
         let page = getParameterByName('pg');
         alm.addons.filters_startpage = (page !== null) ? parseInt(page) : 0;
         
         // If not Paging add-on
         if(!alm.addons.paging && alm.addons.filters_startpage > 0){
         	alm.posts_per_page = alm.posts_per_page * alm.addons.filters_startpage;
				alm.isPaged = (alm.addons.filters_startpage > 0) ? true : false;
         }         
         
      } else {
         alm.addons.filters = false;
      }
      /* End Filters  */


      /* REST API */
      if (alm.extensions.restapi === 'true') {
         alm.extensions.restapi = true;
         alm.extensions.restapi_debug = (alm.extensions.restapi_debug === undefined) ? false : alm.extensions.restapi_debug;
         alm.extensions.restapi = (alm.extensions.restapi_template_id === '') ? false : alm.extensions.restapi;
      } else {
         alm.extensions.restapi = false;
      }
      /* End REST API  */


      /* Preloaded */
      if (alm.addons.preloaded === 'true') {
         // Preloaded Amount
         alm.addons.preloaded_amount = (alm.addons.preloaded_amount === undefined) ? alm.posts_per_page : alm.addons.preloaded_amount;
         // Disable ALM if total_posts is less than or equal to preloaded_amount
         if (alm.localize && alm.localize.total_posts) {
            if (parseInt(alm.localize.total_posts) <= parseInt(alm.addons.preloaded_amount)) {
               alm.addons.preloaded_total_posts = alm.localize.total_posts;
               alm.disable_ajax = true;
            }
         }
      } else {
         alm.addons.preloaded = 'false';
      }
      /* End Preloaded  */


      /* SEO */
      alm.addons.seo = (alm.addons.seo === undefined) ? false : alm.addons.seo;
      alm.addons.seo = (alm.addons.seo === 'true') ? true : alm.addons.seo;
      alm.is_search = (alm.is_search === undefined) ? false : alm.is_search;
      alm.search_value = (alm.is_search === 'true') ? alm.slug : ''; // Convert to value of slug for appending to seo url
 
      alm.addons.seo_permalink = alm.listing.dataset.seoPermalink;
      alm.addons.seo_pageview = alm.listing.dataset.seoPageview;
      alm.addons.seo_trailing_slash = (alm.listing.dataset.seoTrailingSlash === 'false') ? '' : '/';
      alm.addons.seo_leading_slash = (alm.listing.dataset.seoLeadingSlash === 'true') ? '/' : '';
      alm.start_page = alm.listing.dataset.seoStartPage;

      if (alm.start_page) {
         alm.addons.seo_scroll = alm.listing.dataset.seoScroll;
         alm.addons.seo_scrolltop = alm.listing.dataset.seoScrolltop;
         alm.addons.seo_controls = alm.listing.dataset.seoControls;
         alm.isPaged = false;
         if (alm.start_page > 1) {
            alm.isPaged = true; // Is this a paged page > 1 ?
            alm.posts_per_page = alm.start_page * alm.posts_per_page;
         }
         if (alm.addons.paging) { // If paging, reset posts_per_page
            alm.posts_per_page = alm.orginal_posts_per_page;
         }
      } else {
         alm.start_page = 1;
      }
      /* End SEO  */


      /* Nextpage */
      if (alm.addons.nextpage === 'true') {
         alm.addons.nextpage = true;
         alm.posts_per_page = 1;
      } else {
         alm.addons.nextpage = false;
      }
      if (alm.addons.nextpage_urls === undefined) {
         alm.addons.nextpage_urls = 'true';
      }
      if (alm.addons.nextpage_scroll === undefined) {
         alm.addons.nextpage_scroll = '250:30';
      }
      if (alm.addons.nextpage_pageviews === undefined) {
         alm.addons.nextpage_pageviews = 'true';
      }
      if (alm.addons.nextpage_post_id === undefined) {
         alm.addons.nextpage = false;
         alm.addons.nextpage_post_id = null;
      }
      if (alm.addons.nextpage_startpage === undefined) {
         alm.addons.nextpage_startpage = 1;
      }
      if (alm.addons.nextpage_startpage > 1) {
         alm.isPaged = true;
      }
      /* End Nextpage  */


      /* Single Post */
      if (alm.addons.single_post === 'true') {
         alm.addons.single_post = true;
         alm.addons.single_post_permalink = '';
         alm.addons.single_post_title = '';
         alm.addons.single_post_slug = '';
      } else {
         alm.addons.single_post = false;
      }
      if (alm.addons.single_post_id === undefined) {
         alm.addons.single_post_id = '';
         alm.addons.single_post_init_id = '';
      }
      alm.addons.single_post_order = (alm.addons.single_post_order === undefined) ? 'previous' : alm.addons.single_post_order;
      alm.addons.single_post_taxonomy = (alm.addons.single_post_taxonomy === undefined) ? '' : alm.addons.single_post_taxonomy;
      alm.addons.single_post_excluded_terms = (alm.addons.single_post_excluded_terms === undefined) ? '' : alm.addons.single_post_excluded_terms;
      alm.addons.single_post_title_template = alm.listing.dataset.singlePostTitleTemplate;
      alm.addons.single_post_siteTitle = alm.listing.dataset.singlePostSiteTitle;
      alm.addons.single_post_siteTagline = alm.listing.dataset.singlePostSiteTagline;
      alm.addons.single_post_pageview = alm.listing.dataset.singlePostPageview;
      alm.addons.single_post_scroll = alm.listing.dataset.singlePostScroll;
      alm.addons.single_post_scroll_speed = alm.listing.dataset.singlePostScrollSpeed;
      alm.addons.single_post_scroll_top = alm.listing.dataset.singlePostScrolltop;
      alm.addons.single_post_controls = alm.listing.dataset.singlePostControls;
      /* End Single Post */


      /* Pause */
      if (alm.pause === undefined || (alm.addons.seo && alm.start_page > 1)) { // SEO only
         alm.pause = false;
      }
      if (alm.addons.preloaded === 'true' && alm.addons.seo && alm.start_page > 0) { // SEO + Preloaded
         alm.pause = false;
      }
      if (alm.addons.filters && alm.addons.filters_startpage > 0) { // Filters
         alm.pause = false;
      }
      if (alm.addons.preloaded === 'true' && alm.addons.paging) {
         alm.pause = true;
      }

      /* Repeater and Theme Repeater */
      alm.repeater = (alm.repeater === undefined) ? 'default' : alm.repeater;
      alm.theme_repeater = (alm.theme_repeater === undefined) ? false : alm.theme_repeater;

      /* Max Pages (while scrolling) */
      alm.max_pages = (alm.max_pages === undefined || alm.max_pages === 0) ? 10000 : alm.max_pages;

      /* Scroll Distance */
      alm.scroll_distance = (alm.scroll_distance === undefined) ? 150 : alm.scroll_distance;

      /* Scroll Container */
      alm.scroll_container = (alm.scroll_container === undefined) ? '' : alm.scroll_container;

      /* Transition */
      alm.transition = (alm.transition === undefined) ? 'fade' : alm.transition;

      /* Transition Container Class */
      alm.tcc = (alm.tcc === undefined) ? '' : alm.tcc;

      /* Masonry */
      alm.is_masonry_preloaded = false;
      if (alm.transition === 'masonry') {
         alm.masonry_init = true;
         alm.masonry_selector = alm.listing.dataset.masonrySelector;
         alm.masonry_columnwidth = alm.listing.dataset.masonryColumnwidth;
         alm.masonry_animation = alm.listing.dataset.masonryAnimation;
         alm.masonry_animation = (alm.masonry_animation === undefined) ? 'standard' : alm.masonry_animation;
         alm.masonry_horizontalorder = alm.listing.dataset.masonryHorizontalorder;
         alm.masonry_horizontalorder = (alm.masonry_horizontalorder === undefined) ? 'true' : alm.masonry_horizontalorder;
         alm.transition_container = false;
         alm.images_loaded = false;
         alm.is_masonry_preloaded = (alm.addons.preloaded === 'true') ? true : alm.is_masonry_preloaded;
      }

      /* Scroll */
      if (alm.listing.dataset.scroll === undefined) {
         alm.scroll = true;
      } else if (alm.listing.dataset.scroll === 'false') {
         alm.scroll = false;
      } else {
         alm.scroll = true;
      }

      /* Transition Container */
      alm.transition_container = (alm.transition_container === undefined || alm.transition_container === 'true') ? true : false;

      /* Button Labels */
      alm.button_label = (alm.button_label === undefined) ? 'Older Posts' : alm.button_label;
      alm.button_loading_label = (alm.button_loading_label === undefined) ? false : alm.button_loading_label;

      /* Paging */
      if (alm.addons.paging) {
         alm.main.classList.add('loading'); // add loading class to main container
      } else {
         let almChildren = el.childNodes; // Get child nodes of instance [nodeList]
         if (almChildren) {
            let almChildArray = Array.prototype.slice.call(almChildren); // Convert nodeList to array 

            // Filter array to find the `.alm-btn-wrap` div
            let btnWrap = almChildArray.filter(function(element) {
               if (!element.classList) { // If not element (#text node)
                  return false;
               }
               return element.classList.contains('alm-btn-wrap');
            });
            alm.button = (btnWrap) ? (btnWrap[0]).querySelector('.alm-load-more-btn') : container.querySelector('.alm-btn-wrap .alm-load-more-btn');
         } else {
            alm.button = container.querySelector('.alm-btn-wrap .alm-load-more-btn');
         }

      }


      // Results Text
      // Render "Showing x of y results" text.
      alm.resultsText = document.querySelector('.alm-results-text');
      if (alm.resultsText) {
         alm.resultsText.innerHTML = alm_localize.display_results;
      } else {
         alm.resultsText = false;
      }



      /**  
       *  LoadPosts()
       *  The function to get posts via Ajax
       *  @since 2.0.0
       */

      alm.AjaxLoadMore.loadPosts = function() {
         if (!alm.disable_ajax) { // Check for ajax blocker
            if (!alm.addons.paging) {
               alm.button.classList.add('loading');
               if (alm.button_loading_label !== false) {
                  alm.button.innerHTML = alm.button_loading_label;
               }
            }
            alm.main.classList.add('alm-loading');
            alm.loading = true;
            
            if (alm.addons.cache === 'true' && !alm.addons.cache_logged_in) {
               // Cache               
               let cache_page = almGetCacheUrl(alm);               
               if(cache_page){ 
                                
                  // Load `.html` page
                  axios.get(cache_page)
                  .then(response => {
                        // Exists
                        alm.AjaxLoadMore.success(response.data, true);
                     }                     
                  )
                  .catch(function (error) { 
                     // Error || Page does not yet exist
      					alm.AjaxLoadMore.ajax('standard');
      					//console.warn(error.message);      					
      				});
      				
   				} else {
      				// Standard ALM query
      				alm.AjaxLoadMore.ajax('standard');
   				} 
   				  	
            } else { 
               // Standard ALM query
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

      alm.AjaxLoadMore.ajax = function(queryType) {

         // Default action
         let action = 'alm_query_posts';

         // ACF Params
         alm.acf_array = '';
         if (alm.extensions.acf) {
            // Custom query for the Repeater / Gallery / Flexible Content field types
            if (alm.extensions.acf_field_type !== 'relationship') {
               action = 'alm_acf_query';
            }
            alm.acf_array = {
               'acf': 'true',
               'post_id': alm.extensions.acf_post_id,
               'field_type': alm.extensions.acf_field_type,
               'field_name': alm.extensions.acf_field_name
            };
         }

         // Nextpage Params
         alm.nextpage_array = '';
         if (alm.addons.nextpage) {
            action = 'alm_nextpage_query';
            alm.nextpage_array = {
               'nextpage': 'true',
               'urls': alm.addons.nextpage_urls,
               'scroll': alm.addons.nextpage_scroll,
               'pageviews': alm.addons.nextpage_pageviews,
               'post_id': alm.addons.nextpage_post_id,
               'startpage': alm.addons.nextpage_startpage
            };
         }

         // Previous Post Params
         alm.single_post_array = '';
         if (alm.addons.single_post) {
            alm.single_post_array = {
               'single_post': 'true',
               'id': alm.addons.single_post_id,
               'slug': alm.addons.single_post_slug,
            };
         }

         // Comment Params
         alm.comments_array = '';
         if (alm.addons.comments === 'true') {
            action = 'alm_comments_query';
            alm.posts_per_page = alm.addons.comments_per_page;
            alm.comments_array = {
               'comments': 'true',
               'post_id': alm.addons.comments_post_id,
               'per_page': alm.addons.comments_per_page,
               'type': alm.addons.comments_type,
               'style': alm.addons.comments_style,
               'template': alm.addons.comments_template,
               'callback': alm.addons.comments_callback,
            };
         }

         // Users Params
         alm.users_array = '';
         if (alm.addons.users) {
            action = 'alm_users_query';
            alm.users_array = {
               'users': 'true',
               'role': alm.listing.dataset.usersRole,
               'include': alm.listing.dataset.usersInclude,
               'exclude': alm.listing.dataset.usersExclude,
               'per_page': alm.posts_per_page,
               'order': alm.listing.dataset.usersOrder,
               'orderby': alm.listing.dataset.usersOrderby,
            };
         }

         // CTA Params
         alm.cta_array = '';
         if (alm.addons.cta === 'true') {
            alm.cta_array = {
               'cta': 'true',
               'cta_position': alm.addons.cta_position,
               'cta_repeater': alm.addons.cta_repeater,
               'cta_theme_repeater': alm.addons.cta_theme_repeater,
            };
         }

         // REST API
         if (alm.extensions.restapi) {
            alm.AjaxLoadMore.restapi(alm, action, queryType);
         }

         // Standard ALM
         else {	         
	         alm.AjaxLoadMore.adminajax(alm, action, queryType);                       
         }
         
      };
      
      
      
      /**  
	    * adminajax
       * Send request to the admin-ajax.php
       *
       * @param {*} alm | ALm object
       * @param {*} action | Ajax action
       * @param {*} queryType
       * @since 5.0.0
       */
      alm.AjaxLoadMore.adminajax = function(alm, action, queryType){
	      
	     if (alm.page != 1 && !alm.addons.paging) {
            alm.button.classList.add('loading');
         }

			// Get data params
         let params = queryParams.almGetAjaxParams(alm, action, queryType); // [./helpers/queryParams.js       
         
         // Axios Interceptor for nested data objects
			axios.interceptors.request.use(config => {
				config.paramsSerializer = params => {
					// Qs is already included in the Axios package
					return qs.stringify(params, {
						arrayFormat: 'brackets',
						encode: false
					});
				};
				return config;
			});                     
         
         // Send Ajax request
         axios.get(alm_localize.ajaxurl, {params})
         .then(function(response){
            // Success            
            let data = response.data; // Get data from response
            
            // Standard Query
            if (queryType === 'standard') {
               alm.AjaxLoadMore.success(data, false);
            } else if (queryType === 'totalpages' && alm.addons.paging && alm.addons.nextpage) {
               // Next Page and Paging
               if (typeof almBuildPagination === 'function') {
                  window.almBuildPagination(data, alm);
               }
            } else if (queryType === 'totalposts' && alm.addons.paging) {
               // Paging
               if (typeof almBuildPagination === 'function') {
                  window.almBuildPagination(data, alm);
               }
            }
            
         })
         .catch(function (error) { 
            // Error            
            alm.AjaxLoadMore.error(error.message);    
             					
			}); 
      };
      
      
      
      /**  
	    * restapi
       * Send request to the WP RESP APT
       *
       * @param {*} alm | ALm object
       * @param {*} action | Ajax action
       * @param {*} queryType
       * @since 5.0.0
       */
      alm.AjaxLoadMore.restapi = function(alm, action, queryType){
	      
	      let alm_rest_template = wp.template(alm.extensions.restapi_template_id);
         let alm_rest_url = `${alm.extensions.restapi_base_url}/${alm.extensions.restapi_namespace}/${alm.extensions.restapi_endpoint}`;         
         let params = queryParams.almGetRestParams(alm); // [./helpers/queryParams.js]

			// Axios Interceptor for nested data objects
			axios.interceptors.request.use(config => {
				config.paramsSerializer = params => {
					// Qs is already included in the Axios package
					return qs.stringify(params, {
						arrayFormat: 'brackets',
						encode: false
					});
				};
				return config;
			});                     
         
         // Send Ajax request
         axios.get(alm_rest_url, {params})
         .then(function(response){
            // Success            
            let results = response.data; // Get data from response
				let data = '',
					 html = results.html,
					 meta = results.meta,
					 postcount = meta.postcount,
					 totalposts = meta.totalposts;
            
            
            // loop results to get data from each
            for(let i = 0; i < html.length; i++){
	            let result = html[i];
               if (alm.restapi_debug === 'true') { // If debug
                  console.log(result);
               }
               data += alm_rest_template(result);
            }
            
            // Create object to pass to success()
            let obj = {
               'html': data,
               'meta': {
                  'postcount': postcount,
                  'totalposts': totalposts
               },
            };
            alm.AjaxLoadMore.success(obj, false); // Send data
            
         })
         .catch(function (error) { 
            // Error            
            alm.AjaxLoadMore.error(error.message);    
             					
			});
			
      };



      // If pagination enabled, run totalposts query
      if (alm.addons.paging) {
         if (alm.addons.nextpage) {
            alm.AjaxLoadMore.ajax('totalpages'); // Create paging menu and query for total pages
         } else {
            alm.AjaxLoadMore.ajax('totalposts'); // Create paging menu and query for total posts
         }
      }



      /**  
	    * success
       * Success function after loading data
       *
       * @param data     The results of the Ajax request
       * @param is_cache Are results of the Ajax request coming from cache
       * @since 2.6.0
       */
      alm.AjaxLoadMore.success = function(data, is_cache) {

         if (alm.addons.single_post) { // Get previous page data
            alm.AjaxLoadMore.getSinglePost();
         }

			let isPaged = false;
			         
         // Create `.alm-reveal` div                   
         let reveal = document.createElement('div');
         alm.el = reveal;
         reveal.style.opacity = 0;
         reveal.style.height = 0;
         

         var html, meta, total;

         if (is_cache) {
            // If content is cached don't look for json data - we won't be querying the DB.
            html = data;
            
         } else {
            // Standard ALM query results
            html = data.html;
            meta = data.meta; 
            alm.posts = (alm.addons.paging) ? meta.postcount : alm.posts + meta.postcount;
            total = meta.postcount;
            alm.totalposts = meta.totalposts;

            if (alm.addons.preloaded === 'true') {
               alm.totalposts = alm.totalposts - alm.addons.preloaded_amount;
            }
         }


         // Set localized vars for totalposts
         alm.AjaxLoadMore.setLocalizedVars('viewing', alm.posts);
         alm.AjaxLoadMore.setLocalizedVars('total_posts', alm.totalposts);

			// Set Results Text
         resultsText.almResultsText(alm);         

			// Set alm.html as plain text return
         alm.html = html; 

         // If cache, get the length of the html object
         total = (is_cache) ? almDomParser(html).length : total;


         // First Run
         if (alm.init) {
            if (meta) {
               if (meta.totalposts) {
	               alm.main.dataset.totalPosts = meta.totalposts;
               }
            }
            if (!alm.addons.paging) {
					// Not Paging
               alm.button.innerHTML = alm.button_label;
            } else {
               // Paging
               if (total > 0) {	               
	               // Add paging containers and content
						alm.AjaxLoadMore.pagingInit(html, 'alm-reveal');
               }
            }

            // ALM Empty
            if (total === 0) {
               if (alm.addons.paging) {
                  if (typeof almPagingEmpty === 'function') {
                     window.almPagingEmpty(alm);
                  }
               }
               if (typeof almEmpty === 'function') {
                  window.almEmpty(alm);
               }
            }

            // isPaged
            if (alm.isPaged) {

               // Reset the posts_per_page parameter
               alm.posts_per_page = (alm.users) ? alm.listing.dataset.usersPerPage : alm.listing.dataset.postsPerPage;

               // SEO add-on
               alm.page = (alm.start_page) ? alm.start_page - 1 : alm.page; // Set new page #

               // Filters add-on               
               if (alm.addons.filters) {

                  if (alm.addons.filters_startpage > 0) {
	                  
                     // Set new page #
                     alm.page = alm.addons.filters_startpage - 1;

                     // Reset filters-startpage data after the first run
                     alm.posts_per_page = alm.listing.dataset.postsPerPage;
                  }
               }               
            }
         }


         if (total > 0) {

            // We have results!            

            if (!alm.addons.paging) {
					
               if (alm.addons.single_post) { 
	               
	               // Single Posts                  
                  reveal.setAttribute('class', 'alm-reveal alm-single-post post-' + alm.addons.single_post_id + alm.tcc);
                  reveal.dataset.url = alm.addons.single_post_permalink;
                  reveal.dataset.page = alm.page;
                  reveal.dataset.id = alm.addons.single_post_id;
                  reveal.dataset.title = alm.addons.single_post_title;
                                    
                  reveal.innerHTML = alm.html;
                  
               } else {

                  if (!alm.transition_container) { // No transition container
	                 
	                 	alm.el = alm.html;                     
                     reveal = (alm.container_type === 'table') ? almTableWrap(alm.html) : almDomParser(alm.html, 'text/html');

                  } else { // Standard container

                     let pagenum;
                     let querystring = window.location.search;
                     let seo_class = (alm.addons.seo) ? ' alm-seo' : '';
                     let filters_class = (alm.addons.filters) ? ' alm-filters' : '';
                     let preloaded_class = (alm.is_preloaded) ? ' alm-preloaded' : '';

                     // SEO and Filter Paged
                     if (alm.init && (alm.start_page > 1 || alm.addons.filters_startpage > 0)) {	                     
                        // loop through items and break into separate .alm-reveal divs for paging       

                        let return_data = [];
                        let container_array = [];
                        let posts_per_page = parseInt(alm.posts_per_page);
                        let pages = Math.ceil(total / posts_per_page);
                        isPaged = true;
                        

                        // Call to Actions
                        if (alm.addons.cta === 'true') {
                           posts_per_page = posts_per_page + 1; // Add 1 to posts_per_page for CTAs
                           pages = Math.ceil(total / posts_per_page); // Update pages var with new posts_per_page
                           total = pages + total; // Get new total w/ CTAs added
                        }
                                                

                        // Parse HTML to split data into pages
                        let data = almDomParser(alm.html, 'text/html');
								
								// Slice data array into an array of individual pages
                        for (var i = 0; i < total; i += posts_per_page) {
                           return_data.push(data.slice(i, posts_per_page + i));
                        }


                        // Loop return_data array to build .alm-reveal containers
                        for (var k = 0; k < return_data.length; k++) {

                           let p = (alm.addons.preloaded === 'true') ? 1 : 0; // Add 1 page if items are preloaded.
                           let alm_reveal = document.createElement('div');

                           if (k > 0 || alm.addons.preloaded === 'true') {
                              
                              pagenum = (k + 1 + p); // > Paged

										if(alm.addons.seo){ // SEO
	                              if (alm.addons.seo_permalink === 'default') {
												// Default Permalinks
												alm_reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
												alm_reveal.dataset.url = alm.canonical_url + querystring + '&paged=' + pagenum;
												alm_reveal.dataset.page = pagenum;
	                              } else {
												// Pretty Permalinks
												alm_reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
												alm_reveal.dataset.url = alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring;
												alm_reveal.dataset.page = pagenum;
	                              }
                              }
                              
                              if(alm.addons.filters){ // Filters
                              	alm_reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
											alm_reveal.dataset.url = alm.canonical_url + alm.AjaxLoadMore.buildFilterURL(querystring, pagenum);
											alm_reveal.dataset.page = pagenum;
                              }                              

                           } else {
	                           	                           
                              // First Page                               
                              if(alm.addons.seo){
	                              // SEO
	                              alm_reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
		                           alm_reveal.dataset.url = alm.canonical_url + querystring;
		                           alm_reveal.dataset.page = '1';
		                           
                              }                              
                              if(alm.addons.filters){
	                              // Filters
                              	alm_reveal.setAttribute('class', 'alm-reveal' + filters_class + preloaded_class + alm.tcc);
											alm_reveal.dataset.url = alm.canonical_url + alm.AjaxLoadMore.buildFilterURL(querystring, 0);
											alm_reveal.dataset.page = '1';
											
                              }                              
                           } 
                           
                           
                           // Append children to `.alm-reveal` element
                           almAppendChildren(alm_reveal, return_data[k]);
                           
                           
                           // Push alm_reveal elements into container_array
                           container_array.push(alm_reveal);
                           
                        }
                        

                        // Set opacity and height of .alm-listing div to allow for fadein.
                        alm.listing.style.opacity = 0;
                        alm.listing.style.height = 0;
                        

                        // Append container_array to `.alm-listing`                        
                        almAppendChildren(alm.listing, container_array);
                        
                        reveal = alm.listing;
                        alm.el = reveal;

                     }
                     // End Init & SEO
                     
                     else {
	                     
	                     // Preloaded OR SEO (and Paged)
                        if (alm.addons.seo && alm.page > 0 || alm.addons.preloaded === 'true') {

                           let p2 = (alm.addons.preloaded === 'true') ? 1 : 0; // Add 1 page if items are preloaded.

                           // SEO [Paged]
                           pagenum = (alm.page + 1 + p2);

                           if (alm.addons.seo) {
                              // SEO
                              if (alm.addons.seo_permalink === 'default') {
	                              // Default Permalinks
	                              reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
		                           reveal.dataset.url = alm.canonical_url + querystring + '&paged=' + pagenum;
		                           reveal.dataset.page = pagenum;
                                 
                              } else {
	                              // Pretty Permalinks
	                              reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
		                           reveal.dataset.url = alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring;
		                           reveal.dataset.page = pagenum;
                                 
                              }

                           } else if (alm.addons.filters) {
                              // Filters                                                            
										reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
										reveal.dataset.url = alm.canonical_url + alm.AjaxLoadMore.buildFilterURL(querystring, pagenum);
										reveal.dataset.page = pagenum;
                              
                           } else { 
                              // Basic ALM
                              reveal.setAttribute('class', 'alm-reveal' + alm.tcc);
                              
                           }

                        } else if (alm.addons.filters) {
	                        
                           // Filters
									reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
									reveal.dataset.url = alm.canonical_url + alm.AjaxLoadMore.buildFilterURL(querystring, parseInt(alm.page) + 1);
									reveal.dataset.page = parseInt(alm.page) + 1;
                           
                        } else {

                           if (alm.addons.seo) {
                              // SEO [Page 1]                              
                              reveal.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
                              reveal.dataset.url = alm.canonical_url + querystring;
                              reveal.dataset.page = '1';
                              
                           } else {
                              // Basic ALM                 
                              reveal.setAttribute('class', 'alm-reveal' + alm.tcc);                              
                           }

                        }
								
								reveal.innerHTML = alm.html;
                        
                     }
                     
                  }
                  
               }


               // Append `reveal` div to ALM Listing container
               // Do not append when transtion == masonry OR init and !preloaded
               if (alm.transition !== 'masonry' || (alm.init && !alm.is_masonry_preloaded)) {
	               if(!isPaged){
   	               
   	               if(!alm.transition_container){ 
	   	               // No transition container      	               
      	               if (alm.images_loaded === 'true') {	                  
      	                  imagesLoaded( reveal, function() {
      		                  almAppendChildren(alm.listing, reveal);
      		               });      		               
                        } else {
                           almAppendChildren(alm.listing, reveal);
                        }      	               
      	               
   	               } else { 
	   	               // Standard container
      	               alm.listing.appendChild(reveal);
      	               
   	               }	    	                             	
	               }
               }

					
					// *****
               // Transitions	
               // *****			
					

               // Masonry
               if (alm.transition === 'masonry') {
                  alm.el = alm.listing;
                  almMasonry(alm, alm.init, alm_is_filtering);
                  alm.masonry_init = false;
                  alm.AjaxLoadMore.transitionEnd();

               }
               
               // None
               else if (alm.transition === 'none') {               
                  if (alm.images_loaded === 'true') {	              
	                  imagesLoaded( reveal, function() {
								almFadeIn(reveal, 0);
								alm.AjaxLoadMore.transitionEnd();
		               });
		               
                  } else {
                     almFadeIn(reveal, 0);
                     alm.AjaxLoadMore.transitionEnd();
                  }
               }
               
               // Fade transition (default)
               else {
                  if (alm.images_loaded === 'true') {	                  
	                  imagesLoaded( reveal, function() {
		                  if (alm.transition_container) {
                           almFadeIn(reveal, alm.speed);
                        }
                        alm.AjaxLoadMore.transitionEnd();
		               });
		               
                  } else {
                     if (alm.transition_container) {
                        almFadeIn(reveal, alm.speed);
                     }
                     alm.AjaxLoadMore.transitionEnd();
                  }
               }

            } else {

               // Paging               
               if (!alm.init) {
	               
	               let pagingContent = alm.listing.querySelector('.alm-paging-content');
	               if(pagingContent){
		               pagingContent.innerHTML = alm.html;
		               imagesLoaded( pagingContent, function() {
			               // Paging addon
	                     if (typeof almOnPagingComplete === 'function') {
	                        window.almOnPagingComplete(alm);
	                     }
	                     // Delay for effect      
	                     setTimeout(function() {
	                        alm.main.classList.remove('alm-loading');
	                        alm.AjaxLoadMore.triggerAddons(alm);
	                     }, alm.speed);
			               
							});
	               }

               } else {

                  alm.main.classList.remove('alm-loading');
                  alm.AjaxLoadMore.triggerAddons(alm);

               }
               // End Paging

            }
            
            
				// almFiltersOnload [Filters Add-on hook]
				if(typeof almFiltersOnload === 'function' && alm.init){
					window.almFiltersOnload(alm);
				}						
				
            
            // ALM Complete / Nested
            if (alm.images_loaded === 'true') {
               imagesLoaded( reveal, function() {
                  alm.AjaxLoadMore.nested(reveal); // Nested						
						insertScript.init(alm.el); // Run script inserter
                  if (typeof almComplete === 'function') {
                  	window.almComplete(alm);
                  }
               });
               
            } else {
               alm.AjaxLoadMore.nested(reveal); // Nested
					insertScript.init(alm.el); // Run script inserter
               if (typeof almComplete === 'function') {
               	window.almComplete(alm);
               }
               
            }
            // End ALM Complete / Nested


            // ALM Done
            if (!alm.addons.cache) {
	            // Not Cache & Previous Post
               if (alm.posts >= alm.totalposts && !alm.addons.single_post) {
                  alm.AjaxLoadMore.triggerDone();
               }
            } else { // Cache 
               if (total < alm.posts_per_page) {
                  alm.AjaxLoadMore.triggerDone();
               }
            }
            // End ALM Done


         } else { // No Results!	         

            if (!alm.addons.paging) {
               // Add .done class, reset btn text
               setTimeout(function() {
                  alm.button.classList.remove('loading');
                  alm.button.classList.add('done');
               }, alm.speed);
               alm.AjaxLoadMore.resetBtnText();
            }

            alm.AjaxLoadMore.triggerDone(); // ALM Done

         }


         // Destroy After
         if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
            var currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
            currentPage = (alm.addons.preloaded === 'true') ? currentPage++ : currentPage; // Add 1 for preloaded
            if (currentPage == alm.destroy_after) { // Disable ALM if page = alm.destroy_after val
               alm.AjaxLoadMore.destroyed();
            }
         }
         // End Destroy After

         alm_is_filtering = alm.init = false;

      };

		

      /**
	    * pagingPreloadedInit
       * First run for Paging + Preloaded add-ons
       * Moves preloaded content into ajax container
       *
       * @param {data} Results of the Ajax request
       * @since 2.11.3
       */
      alm.AjaxLoadMore.pagingPreloadedInit = function(data) {

         data = (data == null) ? '' : data; // Check for null data object

         // Add paging containers and content
	      alm.AjaxLoadMore.pagingInit(data, 'alm-reveal');  

         if (data === '') {
            if (typeof almPagingEmpty === 'function') {
               window.almPagingEmpty(alm);
            }
            if (typeof almEmpty === 'function') {
               window.almEmpty(alm);
            }
         }
         
      };



      /**  
	    * pagingNextpageInit
       * First run for Paging + Next Page add-ons
       * Moves .alm-nextpage content into ajax container
       *
       * @param {data} Results of Ajax request
       * @since 2.14.0
       */
      alm.AjaxLoadMore.pagingNextpageInit = function(data) {
	      
	      data = (data == null) ? '' : data; // Check for null data object
	      
	      // Add paging containers and content
	      alm.AjaxLoadMore.pagingInit(data, 'alm-reveal alm-nextpage');               
			
			// Set up Nextpage Vars
         if (typeof almSetNextPageVars === 'function') {
            window.almSetNextPageVars(alm); // Next Page Add-on
         }
         
      };
      
      
      
      /**
	    * pagingInit
       * First run for Paging + (Preloaded & Next Page) add-ons. Create required containers.
       *
       * @param {data} Ajax results
       * @param {classes} added classes
       * @since 5.0
       */
      alm.AjaxLoadMore.pagingInit = function(data, classes = 'alm-reveal'){
	      
	      data = (data == null) ? '' : data; // Check for null data object
	      
	      // Create `alm-reveal` container
	     	let reveal = document.createElement('div');
	      reveal.setAttribute('class', classes);	 
	      
	      // Create `alm-paging-loading` container
	      let content = document.createElement('div');
	      content.setAttribute('class', 'alm-paging-content' + alm.tcc);	
	      content.innerHTML = data; 	      
	      reveal.appendChild(content); 
	      
	      // Create `alm-paging-content` container
	      let loader = document.createElement('div');
	      loader.setAttribute('class', 'alm-paging-loading');	 	
	      reveal.appendChild(loader);      
	      
	      // Add div to container
	      alm.listing.appendChild(reveal); 
         
         // Get/Set height of .alm-listing div
	      let styles = window.getComputedStyle(alm.listing);
	      let pTop = parseInt(styles.getPropertyValue('padding-top').replace('px', ''));
	      let pBtm = parseInt(styles.getPropertyValue('padding-bottom').replace('px', ''));
	      let h = reveal.offsetHeight;
	      
	      // Set initial `.alm-listing` height
         alm.listing.style.height = h + pTop + pBtm + 'px';  
         
         // Reset button text
         alm.AjaxLoadMore.resetBtnText();  
         
         // Delay reveal of paging to avoid positioning issues
         setTimeout(function() {	         
            if (typeof almFadePageControls === 'function') {
               window.almFadePageControls(alm.btnWrap);
            }
            if (typeof almOnWindowResize === 'function') {
               window.almOnWindowResize(alm);
            }      	      
		      // Remove loading class from main container
	         alm.main.classList.remove('loading'); 				
         }, alm.speed);
         
      };



      /**
       *	nested
       *	Automatically trigger nested ALM instances (Requies `.alm-reveal` container
       *
       * @param {object} instance
       * @since 5.0
       */
      alm.AjaxLoadMore.nested = function(reveal) {
	      if(!reveal || !alm.transition_container){
		      return false; // Exit if not `transition_container`
	      }
         let nested = reveal.querySelectorAll('.ajax-load-more-wrap'); // Get all instances from jQuery obj
         if (nested) {
            nested.forEach(function(element) {
               window.almInit(element);
            });
         }
      };



      /**
	    *  fetchingPreviousPost
	    *  Get the previous post ID via ajax
	    *
       *  @since 2.7.4
       */

      if (alm.addons.single_post_id) {
         alm.fetchingPreviousPost = false;
         alm.addons.single_post_init = true;
      }

      alm.AjaxLoadMore.getSinglePost = function() {	      
	      
	      if(alm.fetchingPreviousPost){
		      return false;
	      }
	      
         alm.fetchingPreviousPost = true;

         let params = {
            action: 'alm_query_single_post',
            init: alm.addons.single_post_init,
            id: alm.addons.single_post_id,
            initial_id: alm.addons.single_post_init_id,
            order: alm.addons.single_post_order,
            taxonomy: alm.addons.single_post_taxonomy,
            excluded_terms: alm.addons.single_post_excluded_terms,
            post_type: alm.post_type,
         };
         
         // Send Ajax request
         axios.get(alm_localize.ajaxurl, {params})
         .then(function(response){
            // Success
            
            let data = response.data; // Get data from response
            
            if (data.has_previous_post) {
               alm.listing.dataset.singlePostId = data.prev_id; // Update single-post-id on instance
               alm.addons.single_post_id = data.prev_id;
               alm.addons.single_post_permalink = data.prev_permalink;
               alm.addons.single_post_title = data.prev_title;
               alm.addons.single_post_slug = data.prev_slug;

            } else {
               if (!data.has_previous_post) {
                  alm.AjaxLoadMore.triggerDone();
               }
            }
            if (typeof window.almSetSinglePost === 'function') {
               window.almSetSinglePost(alm, data.current_id, data.permalink, data.title);
            }
            alm.fetchingPreviousPost = false;
            alm.addons.single_post_init = false;
            
         })
         .catch(function (error) { 
            // Error
            
            alm.AjaxLoadMore.error(error.message);
            alm.fetchingPreviousPost = false;    
             					
			});

      };



      /**
	    * triggerAddons
       *
       * Triggers various add-on functions (if available) after load complete.
       * @since 2.14.0
       */
      alm.AjaxLoadMore.triggerAddons = function(alm) {
         if (typeof almSEO === "function") { // SEO
            window.almSEO(alm, false);
         }
         if (typeof almSetNextPage === 'function') { // Next Page
            window.almSetNextPage(alm);
         } 
      };



      /**  
	    * triggerDone
       *
       * Fires the almDone() function (if available).
       * @since 2.11.3
       */
      alm.AjaxLoadMore.triggerDone = function() {
         alm.loading = false;
         alm.finished = true;
         if (!alm.addons.paging) {
            alm.button.classList.add('done');
         }
         if (typeof almDone === 'function') {
            // Delay done until animations complete
            setTimeout(function() {
               window.almDone(alm);
            }, alm.speed + 10);
         }
      };



      /**  
	    * resetBtnText
       *
       * Resets the loading button text after loading has completed
       * @since 2.8.4
       */
      alm.AjaxLoadMore.resetBtnText = function() {
         if (alm.button_loading_label !== false && !alm.addons.paging) { // Reset button text
            alm.button.innerHTML = alm.button_label;
         }
      };



      /** 
       * Ajax Error
       *
       * Error function after failed data
       * @since 2.6.0
       */

      alm.AjaxLoadMore.error = function(message) {
         alm.loading = false;
         if (!alm.addons.paging) {
            alm.button.classList.remove('loading');
            alm.AjaxLoadMore.resetBtnText();
         }
         console.log(message);
      };



      /** 
       * click
       * Button click handler to load posts       
       * 
       * @since 4.2.0
       */
      alm.AjaxLoadMore.click = function(e) {
         let button = e.target || e.currentTarget;
         if (alm.pause === 'true') {
            alm.pause = false;
            alm.pause_override = false;
            alm.AjaxLoadMore.loadPosts();
         }
         if (!alm.loading && !alm.finished && !button.classList.contains('done')) {
            alm.loading = true;
            alm.page++;
            alm.AjaxLoadMore.loadPosts();
         }
      };



      /**
	    * Button Click Event
       *
       * Load more button click event 
       * @since 1.0.0
       */

      if (!alm.addons.paging && !alm.fetchingPreviousPost) {
         alm.button.onclick = alm.AjaxLoadMore.click;
      }




      /**
	    * Window Resize
       *
       * Add resize function for Paging add-on only.
       * @since 2.1.2
       * @updated 4.2
       */
      if (alm.addons.paging) {
         let pagingResize;
         alm.window.onresize = function() {
            clearTimeout(pagingResize);
            pagingResize = setTimeout(function(e) {
               if (typeof almOnWindowResize === 'function') {
                  window.almOnWindowResize(alm);
               }
            }, alm.speed);
         };
      }



      /**
	    * isVisible
       *
       * Check to see if element is visible before loading posts
       * @since 2.1.2
       */

      alm.AjaxLoadMore.isVisible = function() {
         // Check for a width and height to determine visibility     
         alm.visible = (alm.main.clientWidth > 0 && alm.main.clientHeight > 0) ? true : false;
         return alm.visible;
      };



      /**
	    * scroll 
       * Load posts as user scrolls the page
       *
       * @since 1.0
       * @updated 4.2.0
       */
      alm.timer = null;
      alm.AjaxLoadMore.scroll = function() {

         if (alm.timer) {
            clearTimeout(alm.timer);
         }

         alm.timer = setTimeout(function() {
            if (alm.AjaxLoadMore.isVisible() && !alm.fetchingPreviousPost) {
               let trigger = alm.button.getBoundingClientRect();
               let btnPos = Math.round((trigger.top - alm.button.offsetHeight) - alm.window.innerHeight) + alm.scroll_distance;
               let scrollTrigger = (btnPos <= 0) ? true : false;

               // Scroll Container
               if (alm.window !== window) {
                  let scrollInstance = alm.window.querySelector('.ajax-load-more-wrap'); // ALM inside the container
                  let scrollHeight = scrollInstance.offsetHeight; // ALM height
                  let scrollPosition = Math.round(alm.window.scrollTop + alm.window.offsetHeight - alm.scroll_distance); // How far user has scrolled	
                  scrollTrigger = (scrollHeight <= scrollPosition) ? true : false;
               }

               // If Pause && Pause Override
               if (!alm.loading && !alm.finished && scrollTrigger && alm.page < (alm.max_pages - 1) && alm.proceed && alm.pause === 'true' && alm.pause_override === 'true') {
                  alm.button.click();
               }

               // Standard Scroll
               else {
                  if (!alm.loading && !alm.finished && scrollTrigger && alm.page < (alm.max_pages - 1) && alm.proceed && alm.pause !== 'true') {
                     alm.button.click();
                  }
               }
            }
            
         }, 25);
      };

      // Add scroll eventlisteners, only when needed
      if (alm.scroll && !alm.addons.paging) {
         if (alm.scroll_container !== '') { // Scroll Container         
            alm.window = (document.querySelector(alm.scroll_container)) ? document.querySelector(alm.scroll_container) : alm.window;
         }
         alm.window.addEventListener('scroll', alm.AjaxLoadMore.scroll);
         alm.window.addEventListener('touchstart', alm.AjaxLoadMore.scroll);
      }



      /** 
	    * destroyed
       * Destroy Ajax Load More functionality
       * @since 3.4.2
       */
      alm.AjaxLoadMore.destroyed = function() {
         alm.disable_ajax = true;
         if (!alm.addons.paging) {
            alm.AjaxLoadMore.triggerDone();
            if (typeof almDestroyed === 'function') {
               window.almDestroyed(alm);
            }
         }
      };



      /**  
	    * transitionEnd
       * Set variables after loading transiton completes
       *
       * @since 3.5 
       */
      alm.AjaxLoadMore.transitionEnd = function() {
         setTimeout(function() {
            alm.main.classList.remove('alm-loading');
            alm.AjaxLoadMore.triggerAddons(alm);
            if (!alm.addons.paging) {
               setTimeout(function() {
                  alm.button.classList.remove('loading'); // Loading button
                  setTimeout(function() {
                     alm.loading = false; // Delay to prevent loading
                  }, alm.speed);
               }, alm.speed);
               alm.AjaxLoadMore.resetBtnText();
            }
         }, alm.speed);
      };



      /**  
	    * setLocalizedVars
       * Set localized variables 
       *
       * @param {string} name 
       * @param {string} value 
       * @since 4.1 
       */
      alm.AjaxLoadMore.setLocalizedVars = function(name, value) {
         if (alm.localize && name && value) {
            alm.localize[name] = value; // Set ALM localize var
            window[alm.master_id + '_vars'][name] = value; // Update global window obj vars
         }
      };
      
      
      
		/**
		* getQueryVariable
		* Get querysting value
		*
		* @param {String} variable
		* @since 5.0
		*/
		alm.AjaxLoadMore.getQueryVariable = function(variable) {
			var query = window.location.search.substring(1);
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if (decodeURIComponent(pair[0]) == variable) {
					return decodeURIComponent(pair[1]);
				}
			}
			return false;
		};
      
      
      
		/**
		* buildFilterURL
		* Build new paging URL for filters
		*
		* @param {String} querystring
		* @param {Number} page
		* @since 5.0
		*/
		alm.AjaxLoadMore.buildFilterURL = function(querystring = '', page = 0) {
			let qs = querystring;	
			
			if(alm.addons.filters_paging){	
   							
   			if(page > 1){ 
   				// Paged
               if(qs){
                  // If already has `pg` in querystring
                  if (alm.AjaxLoadMore.getQueryVariable('pg')) {
                     qs = querystring.replace(/(pg=)[^\&]+/, '$1' + page);				                        
                  } else {
                     qs = querystring + '&pg=' + page;
                  }             
                  
               } else {			                        
                  qs = '?pg=' + page;
               }
            } else { 
   	         // Not Paged	         
   	         qs = querystring.replace(/(pg=)[^\&]+/, '');	         
   	         qs = (qs === '?') ? '' : qs; // Remove `?` if only symbol in querystring
   	         qs = (qs[qs.length -1] === '&') ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols
   	         
            }  
         }   
                  
         return qs;         
		};



      /**  
	    * init
       * Init Ajax load More
       * Load posts as user scrolls the page
       * 
       * @since 2.0 
       */
      alm.AjaxLoadMore.init = function() {

         // Preloaded and destroy_after is 1  
         if (alm.addons.preloaded === 'true' && alm.destroy_after == 1) {
            alm.AjaxLoadMore.destroyed();
         }

         if (!alm.addons.paging && !alm.addons.single_post) {
            if (alm.disable_ajax) {
               alm.finished = true;
               alm.button.classList.add('done');
            } else {
               if (alm.pause === 'true') {
                  alm.button.innerHTML = alm.button_label;
                  alm.loading = false;
               } else {
                  alm.AjaxLoadMore.loadPosts();
               }
            }
         }

         // Previous Post Add-on
         if (alm.addons.single_post) {
            alm.AjaxLoadMore.getSinglePost(); // Set next post on load
            alm.loading = false;
         }

         // Preloaded + SEO && !Paging
         if (alm.addons.preloaded === 'true' && alm.addons.seo && !alm.addons.paging) {
            // Delay for scripts to load
            setTimeout(function() {
               if (typeof almSEO === "function" && alm.start_page < 1) {
                  window.almSEO(alm, true);
               }
            }, alm.speed);

            if (alm.resultsText) {
               resultsText.almInitResultsText(alm, 'preloaded');
            }

         }

         // Preloaded
         if (alm.addons.preloaded === 'true' && !alm.addons.paging) {
            // Delay for scripts to load
            setTimeout(function() {
               // triggerDone
               if (alm.addons.preloaded_total_posts <= parseInt(alm.addons.preloaded_amount)) {
                  alm.AjaxLoadMore.triggerDone();
               }
               // almEmpty
               if (alm.addons.preloaded_total_posts == 0) {
                  if (typeof almEmpty === 'function') {
                     window.almEmpty(alm);
                  }
               }
            }, alm.speed);

            if (alm.resultsText) {
               resultsText.almInitResultsText(alm, 'preloaded');
            }

         }
			
			// Paging Add-on
         if (alm.addons.paging) {
            if (alm.resultsText) {
               resultsText.almInitResultsText(alm, 'paging');
            }
         }


         // Next Page Add-on
         if (alm.addons.nextpage) {
	         	         
	        	// Check that posts remain on load
            if (alm.listing.querySelector('.alm-nextpage') && !alm.addons.paging) {
               var alm_nextpage_pages = alm.listing.querySelectorAll('.alm-nextpage'),
                   alm_nextpage_total = alm.listing.querySelector('.alm-nextpage:first-child');
               
               if(alm_nextpage_total && alm_nextpage_pages){
	               alm_nextpage_total = alm_nextpage_total.dataset.totalPosts;
	               alm_nextpage_pages = alm_nextpage_pages.length; 
						
						// Disable if on last page
	               if (alm_nextpage_pages == alm_nextpage_total) {
	                  alm.AjaxLoadMore.triggerDone();
	               }
               }
            } 
            
            if (alm.resultsText) {
               resultsText.almInitResultsText(alm, 'nextpage');
            }
            
         }


         // Window Load (Masonry + Preloaded)
         alm.window.addEventListener('load', function() {
            if (alm.is_masonry_preloaded) {
               almMasonry(alm, true, false);
               alm.masonry_init = false;
            }
         });

      };


      // Init Ajax Load More
      alm.AjaxLoadMore.init();


      // Flag to prevent unnecessary loading of posts on initial page load.
      setTimeout(function() {
         alm.proceed = true;
      }, alm.speed);



      /**  
	    * almUpdateCurrentPage
       * Update current page - triggered from paging add-on
       *
       * @since 2.7.0
       */
      window.almUpdateCurrentPage = function(current, obj, alm) {

         alm.page = current;         
         alm.page = (alm.addons.nextpage && !alm.addons.paging) ? alm.page - 1 : alm.page; // Next Page add-on

         let data = '';
         let target = '';         
                  
         if (alm.addons.paging_init && alm.addons.preloaded === 'true') {
            // Paging + Preloaded Firstrun
            target = alm.listing.querySelector('.alm-reveal') || alm.listing.querySelector('.alm-nextpage');
            if(target){
               data = target.innerHTML; // Get content 
               target.parentNode.removeChild(target); // Remove target               
               alm.addons.preloaded_amount = 0; // Reset preloaded
               alm.AjaxLoadMore.pagingPreloadedInit(data);
            }
            alm.addons.paging_init = false;
            alm.init = false;

         } else if (alm.addons.paging_init && alm.addons.nextpage) {
            // Paging + Next Page on firstrun
            target = alm.listing.querySelector('.alm-reveal') || alm.listing.querySelector('.alm-nextpage');
            if(target){
               data = target.innerHTML; // Get content 
               target.parentNode.removeChild(target); // Remove target
               alm.AjaxLoadMore.pagingNextpageInit(data);
            }
            alm.addons.paging_init = false;
            alm.init = false;

         } else {
            // Standard Paging
            alm.AjaxLoadMore.loadPosts();

         }
      };



      /**  
	    * almGetParentContainer
       * return the parent ALM container
       *
       * @since 2.7.0
       * @return element
       */
      window.almGetParentContainer = function() {
         return alm.listing;
      };



      /**
	    * almGetObj
       * Returns the current ALM obj
       *
       * @param {string} specific obj
       * @since 2.7.0
       * @return object
       */
      window.almGetObj = function(obj = '') {
	      if(obj !== ''){
		      return alm[obj]; // Return specific param
	      } else {
		      return alm; // Return the entire alm object
	      }
         
      };



      /**
	    * almTriggerClick
       * Trigger ajaxloadmore from any element on page
       *
       * @since 2.12.0
       */
      window.almTriggerClick = function() {
         alm.button.click();
      };


   };

   // End ajaxloadmore   
   


   /** 
    *  almInit
    *  Initiate instance of Ajax load More
    *
    *  @since 5.0
    */
   window.almInit = function(el, id = 0) {
      new ajaxloadmore(el, id);
   };



   /**
    * Initiate Ajax load More if div is present on screen
    * @since 2.1.2
    */

   let alm_instances = document.querySelectorAll('.ajax-load-more-wrap');
   if (alm_instances.length) {
      [...alm_instances].forEach((alm, e) => {
         new ajaxloadmore(alm, e);
      });
   }

})();



/** 
 * filter
 * Filter an Ajax Load More instance
 * 
 * @since 5.0
 * @param {*} transition
 * @param {*} speed
 * @param {*} data
 */
let filter = function(transition = 'fade', speed = '250', data = '') {
   if (!transition || !speed || !data) {
      return false;
   }
   alm_is_filtering = true;
   almFilter(transition, speed, data);
};
export { filter };



/** 
 * tracking
 * Track Page Views in Google Analytics
 *
 * @since 5.0
 * @param {*} path
 */
let tracking = function(path) {
   if (typeof gtag === 'function') { // Gtag GA Tracking
      gtag('event', 'page_view', {
         'page_path': path
      });
   }
   if (typeof ga === 'function') { // Deprecated GA Tracking
      ga('send', 'pageview', path);
   }
   if (typeof __gaTracker === 'function') { // Monster Insights
      __gaTracker('send', 'pageview', path);
   }
};
export { tracking };



/** 
 * start
 * Trigger Ajax Load More from other events
 * 
 * @since 5.0
 * @param {*} el
 */
let start = function(el) {
   if (!el) {
      return false;
   }
   window.almInit(el);
};
export { start };



/** 
 *  almScroll
 *  Scroll window to position (global function)
 *
 *  @since 5.0
 *  @param {*} position
 */
let almScroll = function(position) {
   if (!position) {
      return false;
   }
   window.scrollTo({
      top: position,
      behavior: 'smooth'
   });
};
export { almScroll };



/** 
 *  getOffset
 *  Get the current top/left coordinates of an element relative to the document.
 *
 *  @since 5.0
 *  @param {*} el
 */
let getOffset = function(el = null){
	if(!el){
		return false;
	}
	let rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
};
export { getOffset };
