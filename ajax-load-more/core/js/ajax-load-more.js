/*
 * WordPress Ajax Load More
 * http://wordpress.org/plugins/ajax-load-more/
 * https://github.com/dcooney/wordpress-ajax-load-more
 *
 * Copyright 2014 Connekt Media - http://cnkt.ca/ajax-load-more/
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos
*/
 
(function($) {
	"use strict";		
	$.ajaxloadmore = function(el) {
		//Set variables
		var AjaxLoadMore = {}, 
			page = 0,
			speed = 300,
			proceed = false,
			$init = true,
			$loading = true,
			$finished = false,
			$window = $(window),
			$button_label = '',
			$data, 
			$el = el,
			$content = $('.alm-listing', $el),
			$scroll = true,
			$prefix = 'alm-',
			$repeater = $content.data('repeater'),
			$max_pages = $content.data('max-pages'),
			$pause = $content.data('pause'),
			$offset = $content.data('offset'),
			$transition = $content.data('transition'),
			$posts_per_page = $content.data('posts-per-page');
		
		$(window).scrollTop(0); //Prevent loading of unnessasry posts - move user to top of page
		
		// Check for pause on init
		// Pause could be used to hold the loading of posts for a button click.
		if ($pause === undefined) {
			$pause = false;
		}
		
		// Select the repeater
		if ($repeater === undefined) {
			$repeater = 'default';
		}
		
		// Max number of pages to load while scrolling 
		if ($max_pages === undefined) {
			$max_pages = 5;
		}
		if ($max_pages === 'none') {
			$max_pages = 100000;
		}
		// select the transition 
		if ($transition === undefined) {
			$transition = 'slide';
		} else if ($transition === "fade") {
			$transition = 'fade';
		} else {
			$transition = 'slide';
		}
		// Define offset
		if ($content.data('offset') === undefined) {
			$offset = 0;
		} else {
			$offset = $content.data('offset');
		}
		// Define button text
		if ($content.data('button-label') === undefined) {
			$button_label = 'Older Posts';
		} else {
			$button_label = $content.data('button-label');
		}
		// Define on Scroll event
		if ($content.data('scroll') === undefined) {
			$scroll = true;
		} else if ($content.data('scroll') === false) {
			$scroll = false;
		} else {
			$scroll = true;
		}
		
		// Append load more button tp .ajax-load-more
		$el.append('<div class="'+$prefix+'btn-wrap"><button id="load-more" class="'+$prefix+'load-more-btn more">' + $button_label + '</button></div>');
		var $button = $('.alm-load-more-btn', $el);
		
		//Parse Post Type for multiple entries
		var $post_type = $content.data('post-type');
		$post_type = $post_type.split(",");
		
		
		/* AjaxLoadMore.loadPosts()
		* 
		*  The function to get posts via Ajax
		*  @since 2.0.0
		*/
		AjaxLoadMore.loadPosts = function() {
			$button.addClass('loading');
			$loading = true;
			$.ajax({
				type: "GET",
				url: alm_localize.ajaxurl,
				data: {
					action: 'ajax_load_more_init',
					nonce: alm_localize.alm_nonce,
					repeater: $repeater,
					postType: $post_type,
					postFormat: $content.data('post-format'),
					category: $content.data('category'),
					author: $content.data('author'),
					taxonomy: $content.data('taxonomy'),
					taxonomy_terms: $content.data('taxonomy-terms'),
					taxonomy_operator: $content.data('taxonomy-operator'),
					tag: $content.data('tag'),
					order: $content.data('order'),
					orderby: $content.data('orderby'),
					search: $content.data('search'),
					exclude: $content.data('exclude'),
					numPosts: $content.data('posts-per-page'),
					pageNumber: page,
					offset: $offset
				},
				dataType: "html",
				// parse the data as html
				beforeSend: function() {
					if (page != 1) {
						$button.addClass('loading');
					}
				},
				success: function(data) {
					$data = $(data); // Convert data to an object
					//console.log($data.length);
					if ($init) {
						$button.text($button_label);
						$init = false;
					}
					if ($data.length > 0) {
						var $el = $('<div class="' + $prefix + 'reveal"/>');
						$el.append($data);
						$el.hide();
						$content.append($el);
						if ($transition === 'fade') { // Fade transition
							$el.fadeIn(speed, 'alm_easeInOutQuad', function() {
								$loading = false;
								$button.delay(speed).removeClass('loading');
								if ($data.length < $posts_per_page) {
									$finished = true;
									$button.addClass('done');
								}
							});
						} else { // Slide transition
							$el.slideDown(speed, 'alm_easeInOutQuad', function() {
								$loading = false;
								$button.delay(speed).removeClass('loading');
								if ($data.length < $posts_per_page) {
									$finished = true;
									$button.addClass('done');
								}
							});
						}
					} else {
						$button.delay(speed).removeClass('loading').addClass('done');
						$loading = false;
						$finished = true;
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
				   $loading = false;
					$button.removeClass('loading');
				}
			});
		};
		
		
		// Button click event
		$button.click(function() {
			if($pause === true){
				$pause = false;
				AjaxLoadMore.loadPosts();		
			}
			if (!$loading && !$finished && !$(this).hasClass('done')) {
				$loading = true;
				page++;
				AjaxLoadMore.loadPosts();
			}
		});
		
		
		/* AjaxLoadMore.isVisible()
		* 
		*  Check to see if element is visible before loading posts
		*  @since 2.1.2
		*/
		AjaxLoadMore.isVisible = function(){
		   var visible = false;
   		if($el.is(":visible")){
   		   visible = true;
   		}
   		return visible;
		}
		
		
		/* AjaxLoadMore.isVisible()
		* 
		*  Check to see if element is visible before loading posts
		*  @since 2.1.2
		*/
		if ($scroll) {
			$window.scroll(function() {
			   if(AjaxLoadMore.isVisible()){	
   				var content_offset = $button.offset();
   				if (!$loading && !$finished && $window.scrollTop() >= Math.round(content_offset.top - ($window.height() - 150)) && page < ($max_pages - 1) && proceed) {
   					$loading = true;
   					page++;
   					AjaxLoadMore.loadPosts();
   				}
				}
			});
		}
		
		
		//Check for pause variable
		if($pause === true){
			$button.text($button_label);	
		   $loading = false;		
		}else{
			AjaxLoadMore.loadPosts();
		}		
		
		
		//flag to prevent unnecessary loading of post on init. Hold for 2 seconds.
		setTimeout(function() {
			proceed = true;
		}, 1000);   
		
		
		//Custom easing function
		$.easing.alm_easeInOutQuad = function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		};	
	};
	
	/* ajaxloadmore()
	* 
	*  Initiate all instances of Ajax load More
	*  @since 2.1.2
   */
	$.fn.ajaxloadmore = function() {
		return this.each(function() {
			new $.ajaxloadmore($(this));
		});
	}
	
   /* 
	*  Init Ajax load More if div is present on screen
	*  @since 2.1.2
   */ 
	if($(".ajax-load-more-wrap").length)   
	   $(".ajax-load-more-wrap").ajaxloadmore();
	
})(jQuery);