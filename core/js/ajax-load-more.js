/*
 * WordPress Ajax Load More
 * http://wordpress.org/plugins/ajax-load-more/
 * https://github.com/dcooney/wordpress-ajax-load-more
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
   
  // $(window).scrollTop(0); //Prevent loading of unnessasry posts - move user to top of page
      
   $.ajaxloadmore = function (el) {
   
      //Set variables
      var alm = this;
      alm.AjaxLoadMore = {};
      alm.page = 0;
      alm.speed = 300;
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
      alm.prefix = 'alm-';
      alm.cache = alm.content.data('cache'); // cache (true/false) 
      alm.cache_id = alm.content.data('cache-id'); // cache value 
      alm.cache_path = alm.content.data('cache-path'); // cache path 
      alm.cache_logged_in = alm.content.data('cache-logged-in'); // cache logged in (settings) 
      alm.repeater = alm.content.data('repeater');
      alm.scroll_distance = alm.content.data('scroll-distance');
      alm.max_pages = alm.content.data('max-pages');
      alm.pause = alm.content.data('pause'); // true | false  
      alm.transition = alm.content.data('transition');
      alm.destroy_after = alm.content.data('destroy-after');
      alm.lang = alm.content.data('lang');
      alm.posts_per_page = alm.content.data('posts-per-page');  
      alm.seo = alm.content.data('seo'); // true | false   
      alm.preloaded = alm.content.data('preloaded'); // true | false 
      alm.preloaded_amount = alm.content.data('preloaded-amount'); // 0 - ?      


      /* Define offset */
      if (alm.content.data('offset') === undefined)
         alm.offset = 0;
      else
         alm.offset = alm.content.data('offset');
      
      
      /* Cache */
      if (alm.cache === undefined)
         alm.cache = false;
         
      if (alm.cache_logged_in === undefined)
         alm.cache_logged_in = false;      
         
         
      /* Preloaded
       * Check preloaded posts to ensure posts_per_page > alm.total_posts
       * - if posts_per_page <= total_posts disable ajax load more
       */
      if(alm.preloaded){
         alm.preload_wrap = alm.content.prev('.alm-preloaded');
         alm.total_posts = alm.preload_wrap.data('total-posts');
         if (alm.preloaded_amount === undefined)
            alm.preloaded_amount = false;
         if(alm.total_posts <= alm.preloaded_amount)
            alm.disable_ajax = true;
      }
      
      
      /* SEO  */     	   
      if (alm.seo === undefined)
         alm.seo = false;
      
      alm.permalink = alm.content.data('seo-permalink');
      alm.start_page = alm.content.data('seo-start-page');
      
      if(alm.start_page){      
	      
         alm.seo_scroll = alm.content.data('seo-scroll');
         alm.seo_scroll_speed = alm.content.data('seo-scroll-speed');
         alm.seo_scrolltop = alm.content.data('seo-scrolltop');
         
	      alm.isPaged = false; 	      
	      
	      if(alm.start_page > 1) {
	         alm.isPaged = true; // Is this a $paged page > 1 ?	      
            alm.posts_per_page = alm.start_page * alm.posts_per_page;   
	      }  
	      
      }        
      
      
      
      /* Check for pause on init
       * Pause could be used to hold the loading of posts for a button click.
       */
      if (alm.pause === undefined || (alm.seo && alm.start_page > 1)) // SEO only
         alm.pause = false;     
      if (alm.preloaded && alm.start_page >= 1) // SEO + Preloaded
         alm.pause = false;
      

      /* Select the repeater template */
      if (alm.repeater === undefined) 
         alm.repeater = 'default';
      

      /* Max number of pages to load while scrolling */
      if (alm.max_pages === undefined)
         alm.max_pages = 5;
         
      if (alm.max_pages === 0) 
         alm.max_pages = 1000;
      
      if (alm.scroll_distance === undefined) 
         alm.scroll_distance = 150;
      

      /* select the transition */ 
      if (alm.transition === undefined) 
         alm.transition = 'slide';
      else if (alm.transition === "fade")
         alm.transition = 'fade';
      else if (alm.transition === "none") 
         alm.transition = 'none';
      else 
         alm.transition = 'slide';
      

      /* Destroy After */ 
      if (alm.destroy_after !== undefined) {}

      // Button Label & classes */
      if (alm.content.data('button-label') === undefined)
         alm.button_label = 'Older Posts';
      else
         alm.button_label = alm.content.data('button-label');
         
        
      if (alm.content.data('button-class') === undefined)
         alm.button_class = '';
      else
         alm.button_class = ' ' + alm.content.data('button-class');
      

      /* Define on Scroll event */
      if (alm.content.data('scroll') === undefined)
         alm.scroll = true;
      else if (alm.content.data('scroll') === false)
         alm.scroll = false;
      else
         alm.scroll = true;
   

      /* Parse multiple Post Types */  
      alm.post_type = alm.content.data('post-type');
      alm.post_type = alm.post_type.split(",");

      /* Append 'load More' button to .ajax-load-more-wrap */
      alm.el.append('<div class="' + alm.prefix + 'btn-wrap"><button id="load-more" class="' + alm.prefix + 'load-more-btn more'+ alm.button_class +'">' + alm.button_label + '</button></div>');
      alm.button = $('.alm-load-more-btn', alm.el);



      /*  alm.AjaxLoadMore.loadPosts()
       * 
       *  The function to get posts via Ajax
       *  @since 2.0.0
       */
       
      alm.AjaxLoadMore.loadPosts = function () {
      
         if(!alm.disable_ajax){ // Check for ajax blocker
            alm.button.addClass('loading');
            alm.loading = true;
            
            if(alm.cache && !alm.cache_logged_in){ // If cache = true
               
               var cachePage = alm.cache_path + '/page-' + alm.page +'.html';       
               $.get(cachePage, function( data ) {               
                  // data contains whatever that request returned
                  alm.AjaxLoadMore.success(data);
                  
               }).fail(function() { 
                  alm.AjaxLoadMore.ajax();     
               });
               
            }else{ // Standard ALM query
               
               alm.AjaxLoadMore.ajax();
               
            }
         }
         
      };
      
      
      
      /*  alm.AjaxLoadMore.ajax()
       * 
       *  Ajax Load Moe Ajax function
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.ajax = function () {
         $.ajax({
            type: "GET",
            url: alm_localize.ajaxurl,
            data: {
               action: 'ajax_load_more_init',
               nonce: alm_localize.alm_nonce,
               cache_id: alm.cache_id,
               repeater: alm.repeater,
               postType: alm.post_type,
               post_format: alm.content.data('post-format'),
               category: alm.content.data('category'),
               category__not_in: alm.content.data('category__not_in'),
               tag: alm.content.data('tag'),
               tag__not_in: alm.content.data('tag__not_in'),
               taxonomy: alm.content.data('taxonomy'),
               taxonomy_terms: alm.content.data('taxonomy-terms'),
               taxonomy_operator: alm.content.data('taxonomy-operator'),
               meta_key: alm.content.data('meta-key'),
               meta_value: alm.content.data('meta-value'),
               meta_compare: alm.content.data('meta-compare'),
               author: alm.content.data('author'),
               year: alm.content.data('year'),
               month: alm.content.data('month'),
               day: alm.content.data('day'),
               post_status: alm.content.data('post-status'),
               order: alm.content.data('order'),
               orderby: alm.content.data('orderby'),
               search: alm.content.data('search'),
               exclude: alm.content.data('exclude'),
               posts_per_page: alm.posts_per_page,
               pageNumber: alm.page,
               offset: alm.offset,
               preloaded: alm.preloaded,
               preloaded_amount: alm.preloaded_amount,
               lang: alm.lang
            },
            dataType: "html",
            // parse the data as html
            beforeSend: function () {
               if (alm.page != 1) {
                  alm.button.addClass('loading');
               }
            },
            success: function (data) {
               alm.AjaxLoadMore.success(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alm.AjaxLoadMore.error(jqXHR, textStatus, errorThrown);
            }
         });
      };
      
      
      
      /*  alm.AjaxLoadMore.success()
       * 
       *  Success function after loading data
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.success = function (data) {
         alm.data = $(data); // Convert data to an object                  
         if (alm.init) {
            alm.button.text(alm.button_label);
            alm.init = false;
            
            // ALM Empty - triggers if zero results were returned 
            if(!alm.data.length > 0){
               if ($.isFunction($.fn.almEmpty)) {
                  $.fn.almEmpty(alm);
               }
            }
            
            if(alm.isPaged){ 
               alm.posts_per_page = alm.content.data('posts-per-page'); // Reset our posts per page variable
               alm.page = alm.start_page - 1; // Set our new page #
            }                     
         }
         
         if (alm.data.length > 0) {
            alm.el = $('<div class="' + alm.prefix + 'reveal"/>');
            alm.el.append(alm.data);
            alm.el.hide();
            alm.content.append(alm.el);
            if (alm.transition === 'fade') { // Fade transition
               alm.el.fadeIn(alm.speed, 'alm_easeInOutQuad', function () {
                  alm.loading = false;
                  alm.button.delay(alm.speed).removeClass('loading');
                  if (alm.data.length < alm.posts_per_page) {
                     alm.finished = true;
                     alm.button.addClass('done');
                  }
               });
            }else if(alm.transition === 'none') { // Fade transition
               alm.el.show();
               alm.loading = false;
               alm.button.delay(alm.speed).removeClass('loading');
               if (alm.data.length < alm.posts_per_page) {
                  alm.finished = true;
                  alm.button.addClass('done');
               }                        
            }else { // Slide transition
               alm.el.slideDown(alm.speed, 'alm_easeInOutQuad', function () {
                  alm.loading = false;
                  alm.button.delay(alm.speed).removeClass('loading');
                  if (alm.data.length < alm.posts_per_page) {
                     alm.finished = true;
                     alm.button.addClass('done');
                  }
               });
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
            alm.button.delay(alm.speed).removeClass('loading').addClass('done');
            alm.loading = false;
            alm.finished = true;
         }
         
         // Destroy After param
         if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
            var currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
            if(alm.preload) currentPage++;
            
            if(currentPage === alm.destroy_after){ // - Disable ALM is page = alm.destroy_after value
               alm.disable_ajax = true;
               alm.button.delay(alm.speed).fadeOut(alm.speed);
            }
         }
      };
      
      
      
      /*  alm.AjaxLoadMore.error()
       * 
       *  Error function after failed data
       *  @since 2.6.0
       */
       
      alm.AjaxLoadMore.error = function (jqXHR, textStatus, errorThrown) {
         alm.loading = false;
         alm.button.removeClass('loading');
         console.log(errorThrown);
      };
      
      

      /* Button onClick()
       * 
       *  Load more button click event
       *  @since 1.0.0
       */
       
      alm.button.on('click', function () {
         if (alm.pause === true) {
            alm.pause = false;
            alm.AjaxLoadMore.loadPosts();
         }
         if (!alm.loading && !alm.finished && !$(this).hasClass('done')) {
            alm.loading = true;
            alm.page++;
            alm.AjaxLoadMore.loadPosts();
         }
      });



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
      if (alm.scroll) {
         alm.window.bind("scroll touchstart", function () {
            if (alm.AjaxLoadMore.isVisible()) {
               var content_offset = alm.button.offset();               
               if (!alm.loading && !alm.finished && (alm.window.scrollTop() >= Math.round(content_offset.top - (alm.window.height() - alm.scroll_distance))) && alm.page < (alm.max_pages - 1) && alm.proceed && !alm.pause) {                  
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
      if(alm.disable_ajax){
         alm.finished = true;
         alm.button.addClass('done');
      }else{
         if (alm.pause === true) {
            alm.button.text(alm.button_label);
            alm.loading = false;
         } else {
            alm.AjaxLoadMore.loadPosts();
         }
      }


      //flag to prevent unnecessary loading of post on init. Hold for 1 second
      setTimeout(function () {
         alm.proceed = true;
      }, 1000);


      //Custom easing function
      $.easing.alm_easeInOutQuad = function (x, t, b, c, d) {
         if ((t /= d / 2) < 1) return c / 2 * t * t + b;
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
      return this.each(function () {
         $(this).data('alm', new $.ajaxloadmore($(this)));
      });
   }

   /* 
    *  Initiate Ajax load More if div is present on screen
    *  @since 2.1.2
    */
   if ($(".ajax-load-more-wrap").length) 
      $(".ajax-load-more-wrap").ajaxloadmore();
      
      

})(jQuery);