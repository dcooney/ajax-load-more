/*
 * WordPress Ajax Load More
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
	var AjaxLoadMore = {};
	//Set vars
	var page = 0,
		speed = 300,
		proceed = false,
		$init = true,
		$loading = true,
		$finished = false,
		$window = $(window),
		$button_label = '',
		$data, 
		$el = $('#ajax-load-more'),
		$content = $('.alm-listing', $el),
		$scroll = true,
		$prefix = 'alm-',
		$repeater = $content.data('repeater'),
		$max_pages = $content.data('max-pages'),
		$pause = $content.data('pause'),
		$offset = $content.data('offset'),
		$transition = $content.data('transition');
		
	AjaxLoadMore.init = function() {
		
		$(window).scrollTop(0); //Prevent loading of unnessasry posts - move user to top of page
		// Check for pause on init
		// Pause could be used to hold the loading of posts for a button click.
		if ($pause === undefined) {
			$pause = false;
		}
		
		// Max number of pages to load while scrolling 
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
		// Max number of pages to load while scrolling 
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
		} else if ($content.data('scroll') === "false") {
			$scroll = false;
		} else {
			$scroll = true;
		}
		// Add load more button
		$el.append('<div class="alm-btn-wrap"><button id="load-more" class="more">' + $button_label + '</button></div>');
		var $button = $('#load-more');
		//Parse Post Type for multiples
		var $post_type = $content.data('post-type');
		$post_type = $post_type.split(",");
		$('#load-more').text("Loading...");
		// Load posts function
		AjaxLoadMore.loadPosts = function() {
			$button.addClass('loading');
			$.ajax({
				type: "GET",
				url: alm_localize.ajaxurl,
				data: {
					action: 'ajax_load_more_init',
					nonce: alm_localize.alm_nonce,
					postType: $post_type,
					repeater: $repeater,
					category: $content.data('category'),
					author: $content.data('author'),
					taxonomy: $content.data('taxonomy'),
					tag: $content.data('tag'),
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
								if ($data.length < $content.data('display-posts')) {
									$finished = true;
									$button.addClass('done');
								}
							});
						} else { // Slide transition
							$el.slideDown(speed, 'alm_easeInOutQuad', function() {
								$loading = false;
								$button.delay(speed).removeClass('loading');
								if ($data.length < $content.data('display-posts')) {
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
					$button.removeClass('loading');
					//alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
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
		
		// Window scroll event
		if ($scroll) {
			$window.scroll(function() {
				var content_offset = $button.offset();
				if (!$loading && !$finished && $window.scrollTop() >= Math.round(content_offset.top - ($window.height() - 150)) && page < ($max_pages - 1) && proceed) {
					$loading = true;
					page++;
					AjaxLoadMore.loadPosts();
				}
			});
		}
		
		//Check for pause variable
		if($pause === true){
			$button.text($button_label);			
		}else{
			AjaxLoadMore.loadPosts();
		}
		
		
		//flag to prevent unnecessary loading of post on init. Hold for 2 seconds.
		setTimeout(function() {
			proceed = true;
		}, 2000);   
	};
	//Init Ajax load More    
	if ($("#ajax-load-more").length) {
		AjaxLoadMore.init();
	}
	//Custom easing function
	$.easing.alm_easeInOutQuad = function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	};
})(jQuery);