
/*
 * Ajax Load More
 * http://wordpress.org/plugins/ajax-load-more/
 * https://github.com/dcooney/wordpress-ajax-load-more/
 *
 * Copyright 2015 Connekt Media - http://connekthq.com
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos
 */
 
(function ($) {	
   "use strict";   
      
   $.ajaxloadmore = function (el) {
      
      //Prevent loading of unnessasry posts - move user to top of page
      if(alm_localize.scrolltop === 'true'){
         $(window).scrollTop(0); 
      }
      
      //Set variables
      var alm = this;
      alm.AjaxLoadMore = {};
      alm.page = 0;
      alm.speed = 250;
      alm.proceed = false;
      alm.disable_ajax = false;
      alm.init = true;
      alm.loading = true;
      alm.finished = false;
      alm.window = $(window);
      alm.button_label = '';
      alm.data;
      alm.el = el;
      alm.content = $('.alm-listing.alm-ajax', alm.el);
      alm.content_preloaded = $('.alm-listing.alm-preloaded', alm.el);
      alm.prefix = 'alm-';
      
      alm.cache = alm.content.attr('data-cache'); // cache (true/false) 
      alm.cache_id = alm.content.attr('data-cache-id'); // cache value 
      alm.cache_path = alm.content.attr('data-cache-path'); // cache path 
      alm.cache_logged_in = alm.content.attr('data-cache-logged-in'); // cache logged in (settings) 
      alm.repeater = alm.content.attr('data-repeater');
      
      alm.scroll_distance = parseInt(alm.content.attr('data-scroll-distance'));
      alm.max_pages = parseInt(alm.content.attr('data-max-pages'));
      alm.pause = alm.content.attr('data-pause'); // true | false  
      alm.transition = alm.content.attr('data-transition');
      alm.destroy_after = alm.content.attr('data-destroy-after');
      alm.lang = alm.content.attr('data-lang');
      alm.orginal_posts_per_page = alm.content.attr('data-posts-per-page'); // Used for paging add-on
      alm.posts_per_page = alm.content.attr('data-posts-per-page');  
      
      alm.seo = alm.content.attr('data-seo'); // true | false   
      
      alm.preloaded = alm.content.attr('data-preloaded'); // true | false 
      alm.preloaded_amount = alm.content.attr('data-preloaded-amount'); // 0 - ?   
      
      alm.paging = alm.content.attr('data-paging'); // is paging enabled 
      alm.paging_controls = alm.content.attr('data-paging-controls');
      alm.paging_show_at_most = alm.content.attr('data-paging-show-at-most');
      alm.paging_classes = alm.content.attr('data-paging-classes');

      
		/* Paging */
		if(alm.paging === 'true'){
			alm.paging = true;	
			if(alm.paging_show_at_most === undefined){
   			alm.paging_show_at_most = 7;
			}	
		}else{
			alm.paging = false;
		}
		
		if(alm.paging_controls === 'true'){
			alm.paging_controls = true;		
		}else{
			alm.paging_controls = false;
		}
		
		if($(".ajax-load-more-wrap").length > 1){ // if ALM is greater than 1, paging is false.
		   //alm.paging = false;
      }
      /* /end Paging  */
      
      
      /* Cache */
      if (alm.cache === undefined){
         alm.cache = false;
      }
           
      if (alm.cache_logged_in === undefined){
         alm.cache_logged_in = false;      
      }
      /* /end Cache  */
         
         
      /* Preloaded */
      /* Check preloaded posts to ensure posts_per_page > alm.total_posts - if posts_per_page <= total_posts disable ajax load more */
      if (alm.preloaded === 'true'){
         alm.preload_wrap = alm.content.prev('.alm-preloaded');
         alm.total_posts = parseInt(alm.preload_wrap.attr('data-total-posts'));
         if (alm.preloaded_amount === undefined){
            alm.preloaded_amount = false;
         }
         if (alm.total_posts <= alm.preloaded_amount){
            alm.disable_ajax = true;
         }
      }else{
	      alm.preloaded = 'false';
      }
      /* /end Preloaded  */
       
      
      /* SEO */                 	   
      if (alm.seo === undefined){
         alm.seo = false;      
      }
      if (alm.seo === 'true'){
         alm.seo = true; // Convert string to boolean  
      }       
      
      alm.permalink = alm.content.attr('data-seo-permalink');
      alm.pageview = alm.content.attr('data-seo-pageview');
      alm.start_page = alm.content.attr('data-seo-start-page');
      
      if(alm.start_page){      
	      
         alm.seo_scroll = alm.content.attr('data-seo-scroll');
         alm.seo_scroll_speed = alm.content.attr('data-seo-scroll-speed');
         alm.seo_scrolltop = alm.content.attr('data-seo-scrolltop');
         
	      alm.isPaged = false; 	      
	      
	      if (alm.start_page > 1) {
	         alm.isPaged = true; // Is this a $paged page > 1 ?	      
            alm.posts_per_page = alm.start_page * alm.posts_per_page;   
	      }
	      // If paging is enabled, reset our posts_per_page
	      if(alm.paging){
   	      alm.posts_per_page = alm.orginal_posts_per_page; 
	      }  
	       
      }else{
         alm.start_page = 1; 
      }
      /* /end SEO  */ 
      

      /* Define offset */
      if (alm.content.attr('data-offset') === undefined){
         alm.offset = 0;
      }else{
         alm.offset = alm.content.attr('data-offset');
      }
      
      
      /* Check for pause on init
       * Pause could be used to hold the loading of posts for a button click.
       */
      if (alm.pause === undefined || (alm.seo && alm.start_page > 1)){// SEO only
         alm.pause = false;  
      }   
      if (alm.preloaded === 'true' && alm.seo && alm.start_page > 0){ // SEO + Preloaded
         alm.pause = false;
      }


      /* Select the repeater template */
      if (alm.repeater === undefined){
         alm.repeater = 'default';
      }
            

      /* Max number of pages to load while scrolling */
      if (alm.max_pages === undefined){
         alm.max_pages = 5;
      }
         
      if (alm.max_pages === 0){
         alm.max_pages = 10000;
      }
      
      
      /* Scroll Distance */
      if (alm.scroll_distance === undefined){
         alm.scroll_distance = 150;
      }
      

      /* Select the transition */ 
      if (alm.transition === undefined){
         alm.transition = 'slide';
      }else if (alm.transition === "fade"){
         alm.transition = 'fade';
      }else if (alm.transition === "none"){ 
         alm.transition = 'none';
      }else {
         alm.transition = 'slide';
      }
      

      /* Destroy After */ 
      if (alm.destroy_after !== undefined) {}
      

      /* Button Label */
      if (alm.content.attr('data-button-label') === undefined){
         alm.button_label = 'Older Posts';
      }else{
         alm.button_label = alm.content.attr('data-button-label');
      }  
         
      /* Button Class */  
      if (alm.content.attr('data-button-class') === undefined){
         alm.button_class = '';
      }else{
         alm.button_class = ' ' + alm.content.attr('data-button-class');
      }

      /* Define scroll event */
      if (alm.content.attr('data-scroll') === undefined){
         alm.scroll = true;
      }else if (alm.content.attr('data-scroll') === 'false'){
         alm.scroll = false;
      }else{
         alm.scroll = true;
      }

      /* Parse multiple Post Types */  
      alm.post_type = alm.content.attr('data-post-type');
      alm.post_type = alm.post_type.split(",");
      

      /* Append 'load More' button to .ajax-load-more-wrap */
      alm.el.append('<div class="' + alm.prefix + 'btn-wrap"/>');
      alm.btnWrap = $('.' + alm.prefix + 'btn-wrap', alm.el);
      if(!alm.paging){ 
         // If paging is false      
      	$('.'+ alm.prefix + 'btn-wrap', alm.el).append('<button id="load-more" class="' + alm.prefix + 'load-more-btn more'+ alm.button_class +'">' + alm.button_label + '</button>');
			alm.button = $('.alm-load-more-btn', alm.el);
		}else{		
   		// Paging add-on	
      	alm.content.parent().addClass('loading'); // add loading class to main container
		}



      /*  alm.AjaxLoadMore.loadPosts()
       * 
       *  The function to get posts via Ajax
       *  @since 2.0.0
       */
       
      alm.AjaxLoadMore.loadPosts = function () {      
         
         if(!alm.disable_ajax){ // Check for ajax blocker
	         if(!alm.paging){
            	alm.button.addClass('loading');
            }
            alm.loading = true;            
            
            // If cache = true && cache_logged_in setting is false
            if(alm.cache === 'true' && !alm.cache_logged_in){
               
               if(alm.init && alm.seo && alm.isPaged){ 
                  
                  // if alm.init = true, SEO = true and SEO page > 1
                  // - skip cache build process because we can't build cache from multiple loaded queries
                  alm.AjaxLoadMore.ajax('standard');
                  
               } else {
                  // Build and/or get cache
                  
                  var cachePage = alm.cache_path + '/page-' + alm.page +'.html';
                         
                  $.get(cachePage, function( data ) {       
                                                  
                     alm.AjaxLoadMore.success(data); // data contains whatever the request has returned
                     
                  }).fail(function() { 
                     
                     alm.AjaxLoadMore.ajax('standard');   
                       
                  });
                  
               }
               
            } else { // Standard ALM query
               
               alm.AjaxLoadMore.ajax('standard');
               
            }
         }
         
      };
      
      
      
      /*  alm.AjaxLoadMore.ajax()
       * 
       *  Ajax Load Moe Ajax function
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.ajax = function (queryType) {
         $.ajax({
            type: "GET",
            url: alm_localize.ajaxurl,
            data: {
               action: 'alm_query_posts',
	            query_type: queryType,
               nonce: alm_localize.alm_nonce,
               cache_id: alm.cache_id,
               repeater: alm.repeater,
               post_type: alm.post_type,
               post_format: alm.content.attr('data-post-format'),
               category: alm.content.attr('data-category'),
               category__not_in: alm.content.attr('data-category-not-in'),
               tag: alm.content.attr('data-tag'),
               tag__not_in: alm.content.attr('data-tag-not-in'),
               taxonomy: alm.content.attr('data-taxonomy'),
               taxonomy_terms: alm.content.attr('data-taxonomy-terms'),
               taxonomy_operator: alm.content.attr('data-taxonomy-operator'),
               meta_key: alm.content.attr('data-meta-key'),
               meta_value: alm.content.attr('data-meta-value'),
               meta_compare: alm.content.attr('data-meta-compare'),
               meta_relation: alm.content.attr('data-meta-relation'), 
               author: alm.content.attr('data-author'),
               year: alm.content.attr('data-year'),
               month: alm.content.attr('data-month'),
               day: alm.content.attr('data-day'),
               post_status: alm.content.attr('data-post-status'),
               order: alm.content.attr('data-order'),
               orderby: alm.content.attr('data-orderby'),
               post__in: alm.content.attr('data-post-in'),
               exclude: alm.content.attr('data-exclude'),
               search: alm.content.attr('data-search'),
               custom_args: alm.content.attr('data-custom-args'),
               posts_per_page: alm.posts_per_page,
               pageNumber: alm.page,
               offset: alm.offset,
               preloaded: alm.preloaded,
               preloaded_amount: alm.preloaded_amount,
               seo_start_page: alm.start_page,
               lang: alm.lang
            },
            dataType: "html",
            // parse the data as html
            beforeSend: function () {
               if (alm.page != 1 && !alm.paging) {
                  alm.button.addClass('loading');
               }
            },
            success: function (data) {
	            if(queryType === 'standard'){
               	alm.AjaxLoadMore.success(data);
               }
               else if(queryType === 'totalposts' && alm.paging){	  
	               if($.isFunction($.fn.almBuildPagination)){   
               		$.fn.almBuildPagination(data, alm);
               	}
               }
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alm.AjaxLoadMore.error(jqXHR, textStatus, errorThrown);
            }
         });
      };      
      
      // If pagination enabled, run totalposts query
      if(alm.paging){ 
         alm.AjaxLoadMore.ajax('totalposts'); // Create paging menu and query for total posts
      }
      
      
      
      /*  alm.AjaxLoadMore.success()
       * 
       *  Success function after loading data
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.success = function (data) {
         
         alm.data = $(data); // Convert data to an object                  
         if (alm.init) {
	         if(!alm.paging){
            	alm.button.text(alm.button_label);
            } else
            { // Is pagination
               if (alm.data.length > 0) {                  
                  alm.el = $('<div class="alm-reveal"/>');
                  alm.el.append('<div class="alm-paging-content"></div><div class="alm-paging-loading"></div>');
                  $('.alm-paging-content', alm.el).append(alm.data).hide();
                  alm.content.append(alm.el);                  
               	alm.content.parent().removeClass('loading'); // Remove loading class from main container
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
            
            // ALM Empty - triggers if zero results were returned 
            if(!alm.data.length > 0){
               if ($.isFunction($.fn.almEmpty)) {
                  $.fn.almEmpty(alm);
               }
            }
            
            if(alm.isPaged){ 
               alm.posts_per_page = alm.content.attr('data-posts-per-page'); // Reset our posts per page variable
               alm.page = alm.start_page - 1; // Set our new page #
            }                    
         }
         
         
         
         if (alm.data.length > 0) {
            if(!alm.paging){
               alm.el = $('<div class="alm-reveal"/>');
               alm.el.append(alm.data).hide();
               alm.content.append(alm.el);
               if (alm.transition === 'fade') { // Fade transition
                  alm.el.fadeIn(alm.speed, 'alm_easeInOutQuad', function () {
                     alm.loading = false;
                     if(!alm.paging){
                     	alm.button.delay(alm.speed).removeClass('loading');
                     }
                     if (alm.data.length < alm.posts_per_page) {
                        alm.finished = true;
                        if(!alm.paging){
                        	alm.button.addClass('done');
                        }
                     }
                  });
               }else if(alm.transition === 'none') { // Fade transition
                  alm.el.show();
                  alm.loading = false;
                  if(!alm.paging){
                  	alm.button.delay(alm.speed).removeClass('loading');
                  }
                  if (alm.data.length < alm.posts_per_page) {
                     alm.finished = true;
                     if(!alm.paging){
                     	alm.button.addClass('done');
                     }
                  }                        
               }else { // Slide transition
                  alm.el.slideDown(alm.speed, 'alm_easeInOutQuad', function () {
                     alm.loading = false;
                     if(!alm.paging){
                     	alm.button.delay(alm.speed).removeClass('loading');
                     }
                     if (alm.data.length < alm.posts_per_page) {
                        alm.finished = true;
                        if(!alm.paging){
                        	alm.button.addClass('done');
                        }
                     }
                  });
               }
            } else { 
               // Is Paging
               if(!alm.init){
                  $('.alm-paging-content', alm.el).html('').append(alm.data).almWaitForImages().done(function(){  // Remove loading class and append data
                     $('.alm-paging-loading', alm.el).fadeOut(alm.speed); // Fade out loader
                     if ($.isFunction($.fn.almOnPagingComplete)){
                        $.fn.almOnPagingComplete(alm);     
                     }
                  });
               }               
            }            
				
				// ALM Complete 
            if ($.isFunction($.fn.almComplete)) {
               $.fn.almComplete(alm);
            }      
            
            
            
                  
            
            // ALM SEO
            // - Only run if a single instance is on the page.
            if($(".ajax-load-more-wrap").length === 1){	
               if ($.isFunction($.fn.almSEO) && alm.seo) {
                  $.fn.almSEO(alm);
               }
            }

         } else {
	         if(!alm.paging){
            	alm.button.delay(alm.speed).removeClass('loading').addClass('done');
            }
            alm.loading = false;
            alm.finished = true;
         }
         
         // Destroy After param
         if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
            var currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
            
            if(alm.preload){
               currentPage++;
            }
            
            if(currentPage == alm.destroy_after){ // - Disable ALM is page = alm.destroy_after value
               alm.disable_ajax = true;
               if(!alm.paging){
               	alm.button.delay(alm.speed).fadeOut(alm.speed);
               }
            }
         }
         
         alm.init = false; 
         
      };
      
      
      
      /*  alm.AjaxLoadMore.error()
       * 
       *  Error function after failed data
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.error = function (jqXHR, textStatus, errorThrown) {
         alm.loading = false;
         if(!alm.paging){
         	alm.button.removeClass('loading');
         }
         console.log(errorThrown);
      };
      
      

      /*  Button onClick()
       * 
       *  Load more button click event
       *  @since 1.0.0
       */
       
      if(!alm.paging){
	      alm.button.on('click', function () {
	         if (alm.pause === 'true') {
	            alm.pause = false;
	            alm.AjaxLoadMore.loadPosts();
	         }
	         if (!alm.loading && !alm.finished && !$(this).hasClass('done')) {
	            alm.loading = true;
	            alm.page++;
	            alm.AjaxLoadMore.loadPosts();
	         }
	      });
      }
      
      
      
      if(alm.paging){
         alm.window.resize(function() {
            if ($.isFunction($.fn.almOnWindowResize)){
               setTimeout(function(){ 
                  $.fn.almOnWindowResize(alm); 
               }, 250);  
            }   
         });               
      }



      /* alm.AjaxLoadMore.isVisible()
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
      
      

      /* Window scroll and touchmove events
       * 
       *  Load posts as user scrolls the page
       *  @since 1.0
       */
      if (alm.scroll && !alm.paging) {
         alm.window.bind("scroll touchstart", function () {
            if (alm.AjaxLoadMore.isVisible()) {
               var content_offset = alm.button.offset();               
               if (!alm.loading && !alm.finished && (alm.window.scrollTop() >= Math.round(content_offset.top - (alm.window.height() - alm.scroll_distance))) && alm.page < (alm.max_pages - 1) && alm.proceed && alm.pause !== 'true') {                  
                  alm.page++;
                  alm.AjaxLoadMore.loadPosts();
               }
            }
         });
      }
      
      

      /* Init Ajax load More
       * 
       *  Load posts as user scrolls the page
       *  @since 2.0
       */
      if(!alm.paging){
         if(alm.disable_ajax){
            alm.finished = true;
            alm.button.addClass('done');
         }else{
            if (alm.pause === 'true') {
               alm.button.text(alm.button_label);
               alm.loading = false;
            } else {
               alm.AjaxLoadMore.loadPosts();
            }
         }
      }


      //flag to prevent unnecessary loading of post on init. Hold for 1 second
      setTimeout(function () {
         alm.proceed = true;
      }, 500);
      
      
      
      /*  $.fn.almUpdateCurrentPage()
       * 
       *  Update current page - triggered from paging add-on
       *  @since 2.7.0
       */
       
      $.fn.almUpdateCurrentPage = function(current){
         alm.page = current;
         alm.AjaxLoadMore.loadPosts();
      };
      
      
      
      /* $.fn.almGetParentContainer()
       * 
       *  return the parent ALM container
       *
       *  @since 2.7.0
        * @return element
       */
      $.fn.almGetParentContainer = function(){
         return alm.el.closest('#ajax-load-more'); // Return the parent #ajax-load-more div 
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
      


      //Custom easing function
      $.easing.alm_easeInOutQuad = function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return c / 2 * t * t + b;
         return -c / 2 * ((--t) * (t - 2) - 1) + b;
      };
      
   };

   // End $.ajaxloadmore
   
   
   
   /* $.fn.almFilter(type, speed, data)
    * 
    *  Filter Ajax Load More
    *  @type ('slide', 'fade', null);
    *  @speed '300';
    *  @data obj; 
    *
    *  @since 2.6.1
    */
   $.fn.almFilter = function (transition, speed, data) {
      
      $(".ajax-load-more-wrap").each(function (e) {
         var el = $(this);         
         if(transition === 'slide'){ // Slide transition
            el.slideUp(speed, function(){
               $('.alm-listing', el).html(''); // Clear listings
               $('.alm-btn-wrap', el).remove(); // remove buttons   
               el.fadeIn(speed);    
                
               $.fn.almSetFilters(el, data);
                  
            });
         }else if(transition === 'fade'){ // Fade transition
            el.fadeOut(speed, function(){
               $('.alm-listing', el).html(''); // Clear listings 
               $('.alm-btn-wrap', el).remove(); // remove buttons   
               el.fadeIn(speed);     
               
               $.fn.almSetFilters(el, data);
                          
            });
         }else{
            $('.alm-listing', el).html(''); // Clear listings
            $('.alm-btn-wrap', el).remove(); // remove buttons   
            el.fadeIn(speed);     
            
            $.fn.almSetFilters(el, data);
                
         }        
         
      });
   };
   
   
   
   /* $.fn.almSetFilters(el, data)
    * 
    *  Set filter parameters on .alm-listing element
    *
    *  @since 2.6.1
    */
   $.fn.almSetFilters = function(el, data){
      $.each(data, function(key, value) {
         key = key.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2'); // Convert camelCase data() object back to dash (-)
         $('.alm-listing', el).attr('data-'+key, value);
      });
      
      if ($.isFunction($.fn.almFilterComplete)){
         $.fn.almFilterComplete();
      }
         
      $(".ajax-load-more-wrap").ajaxloadmore(); // re-initiate Ajax Load More
   };
      
   

   /* $.fn.ajaxloadmore()
    * 
    *  Initiate all instances of Ajax load More
    *  @since 2.1.2
    */
   $.fn.ajaxloadmore = function () {
      return this.each(function () {
         $(this).data('alm', new $.ajaxloadmore($(this)));
      });
   };
   
   

   /* 
    *  Initiate Ajax load More if div is present on screen
    *  @since 2.1.2
    */
   if ($(".ajax-load-more-wrap").length){
      $(".ajax-load-more-wrap").ajaxloadmore();
   }
      

})(jQuery);



/*! almWaitForImages 
    jQuery Plugin
    v2.0.2
    Based on https://github.com/alexanderdickson/almWaitForImages
*/
// Include almWaitForImages() for paging add-on
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Namespace all events.
    var eventNamespace = 'almWaitForImages';

    // CSS properties which contain references to images.
    $.almWaitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find all `img` elements with a valid `src` attribute.
    $.expr[':']['has-src'] = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        return $(obj).is('img[src][src!=""]');
    };

    // Custom selector to find images which are not already cached by the
    // browser.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is(':has-src')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.almWaitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.almWaitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = $.almWaitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:has-src')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        $.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:has-src')
                    .each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                  'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                $(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    $(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));
