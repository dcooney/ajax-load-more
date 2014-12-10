/*
 * WordPress Ajax Load More
 * http://wordpress.org/plugins/ajax-load-more/
 * https://github.com/dcooney/wordpress-ajax-load-more
 *
 * Copyright 2014 Connekt Media - http://connekthq.com
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos
 */
 
(function ($) {
   "use strict";
   $.ajaxloadmore = function (el) {
   
      //Set variables
      var alm = this;
      alm.AjaxLoadMore = {};
      alm.page = 0;
      alm.speed = 300;
      alm.proceed = false;
      alm.init = true;
      alm.loading = true;
      alm.finished = false;
      alm.window = $(window);
      alm.button_label = '';
      alm.data;
      alm.el = el;
      alm.content = $('.alm-listing', alm.el);
      alm.scroll = true;
      alm.prefix = 'alm-';
      alm.repeater = alm.content.data('repeater');
      alm.max_pages = alm.content.data('max-pages');
      alm.pause = alm.content.data('pause');
      alm.offset = alm.content.data('offset');
      alm.transition = alm.content.data('transition');
      alm.lang = alm.content.data('lang');
      alm.posts_per_page = alm.content.data('posts-per-page');      
      
     
      /* SEO ADD-ON  */
      // - get SEO values from shortcode     
      // - Added v2.3
     	   
      alm.seo = alm.content.data('seo'); // true | false
      if (alm.seo === undefined)
         alm.seo = false;
      
      alm.permalink = alm.content.data('seo-permalink');
      alm.start_page = alm.content.data('seo-start-page');
      
      if(alm.start_page){      
	      
         alm.seo_scroll = alm.content.data('seo-scroll');
         alm.seo_scroll_speed = alm.content.data('seo-scroll-speed');
         
	      alm.isPaged = false;	      
	      
	      if(alm.start_page > 1) {
	         alm.isPaged = true; // Is this a $paged page > 1 ?	      
            alm.posts_per_page = alm.start_page * alm.posts_per_page;   
	      }  
	      
      }        
      /* END SEO Add-on */
      
      
      //Prevent loading of unnessasry posts - move user to top of page
      // Removed v2.3.0
      $(window).scrollTop(0); 
      
      
      // Check for pause on init
      // Pause could be used to hold the loading of posts for a button click.
      if (alm.pause === undefined) {
         alm.pause = false;
      }

      // Select the repeater template
      if (alm.repeater === undefined) {
         alm.repeater = 'default';
      }

      // Max number of pages to load while scrolling 
      if (alm.max_pages === undefined) {
         alm.max_pages = 5;
      }
      if (alm.max_pages === 'none') {
         alm.max_pages = 1000000;
      }

      // select the transition 
      if (alm.transition === undefined) {
         alm.transition = 'slide';
      } else if (alm.transition === "fade") {
         alm.transition = 'fade';
      } else {
         alm.transition = 'slide';
      }

      // Define offset
      if (alm.content.data('offset') === undefined) {
         alm.offset = 0;
      } else {
         alm.offset = alm.content.data('offset');
      }

      // Define button text
      if (alm.content.data('button-label') === undefined) {
         alm.button_label = 'Older Posts';
      } else {
         alm.button_label = alm.content.data('button-label');
      }

      // Define on Scroll event
      if (alm.content.data('scroll') === undefined) {
         alm.scroll = true;
      } else if (alm.content.data('scroll') === false) {
         alm.scroll = false;
      } else {
         alm.scroll = true;
      }

      // Parse multiple Post Types  
      alm.post_type = alm.content.data('post-type');
      alm.post_type = alm.post_type.split(",");

      // Append 'load More' button to .ajax-load-more-wrap
      alm.el.append('<div class="' + alm.prefix + 'btn-wrap"><button id="load-more" class="' + alm.prefix + 'load-more-btn more">' + alm.button_label + '</button></div>');
      alm.button = $('.alm-load-more-btn', alm.el);


      /* loadPosts()
       * 
       *  The function to get posts via Ajax
       *  @since 2.0.0
       */
      alm.AjaxLoadMore.loadPosts = function () {
         alm.button.addClass('loading');
         alm.loading = true;
         $.ajax({
            type: "GET",
            url: alm_localize.ajaxurl,
            data: {
               action: 'ajax_load_more_init',
               nonce: alm_localize.alm_nonce,
               repeater: alm.repeater,
               postType: alm.post_type,
               postFormat: alm.content.data('post-format'),
               category: alm.content.data('category'),
               author: alm.content.data('author'),
               taxonomy: alm.content.data('taxonomy'),
               taxonomy_terms: alm.content.data('taxonomy-terms'),
               taxonomy_operator: alm.content.data('taxonomy-operator'),
               meta_key: alm.content.data('meta-key'),
               meta_value: alm.content.data('meta-value'),
               meta_compare: alm.content.data('meta-compare'),
               tag: alm.content.data('tag'),
               order: alm.content.data('order'),
               orderby: alm.content.data('orderby'),
               search: alm.content.data('search'),
               exclude: alm.content.data('exclude'),
               numPosts: alm.posts_per_page,
               pageNumber: alm.page,
               offset: alm.offset,
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
               alm.data = $(data); // Convert data to an object
               //console.log(alm.data.length);
               if (alm.init) {
                  alm.button.text(alm.button_label);
                  alm.init = false;
                  
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
                  } else { // Slide transition
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
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alm.loading = false;
               alm.button.removeClass('loading');
            }
         });
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


      /* AjaxLoadMore.isVisible()
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
               if (!alm.loading && !alm.finished && alm.window.scrollTop() >= Math.round(content_offset.top - (alm.window.height() - 150)) && alm.page < (alm.max_pages - 1) && alm.proceed && !alm.pause) {
                  alm.loading = true;
                  alm.page++;
                  alm.AjaxLoadMore.loadPosts();
               }
            }
         });
      }


      //Check for pause variable
      if (alm.pause === true) {
         alm.button.text(alm.button_label);
         alm.loading = false;
      } else {
         alm.AjaxLoadMore.loadPosts();
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
   if ($(".ajax-load-more-wrap").length) $(".ajax-load-more-wrap").ajaxloadmore();

})(jQuery);