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
(function ($) {
  "use strict";
  var AjaxLoadMore = {};

  AjaxLoadMore.init = function () {
  	// Bug fix: Prevent loading of unnessasry posts by moving the user to top of page
  	$('html').scrollTop(0); 
  	
  	//Set vars
    var page = 1,
      $init = true,
      $loading = true,
      $finished = false,
      $window = $(window),
      $button_text = '',
      $data,
      $el = $('#ajax-load-more'),
      $content = $('#ajax-load-more ul'),
      $delay = 150,
      $scroll = true,
      $path = $content.attr('data-path');
	  
    //Path to theme folder
    if ($path === undefined) {
      $path = './wp-content/themes/your-theme-name';
    }

    //Define button text
    if ($content.attr('data-button-text') === undefined) {
      $button_text = 'Older Posts';
    } else {
      $button_text = $content.attr('data-button-text');
    }

    //Define on Scroll event
    if ($content.attr('data-scroll') === undefined) {
      $scroll = true;
    }else if($content.attr('data-scroll') === "false"){
    	$scroll = false;
    } else {
      $scroll = true;
    }

    $el.append('<div class="load-more-btn-wrap"><button id="load-more" class="more">' + $button_text + '</button></div>');
    var $button = $('#load-more');
    $('#load-more').text("Loading...");
    //Load posts function
    AjaxLoadMore.load_posts = function () {
      $button.addClass('loading');
      $.ajax({
        type: "GET",
        data: {
          postType: $content.attr('data-post-type'),
          category: $content.attr('data-category'),
          author: $content.attr('data-author'),
          taxonomy: $content.attr('data-taxonomy'),
          tag: $content.attr('data-tag'),
          postNotIn: $content.attr('data-post-not-in'),
          numPosts: $content.attr('data-display-posts'),
          onScroll: $content.attr('data-scroll'),
          pageNumber: page
        },
        dataType: "html",
        url: $path + "/ajax-load-more.php",
        beforeSend: function () {
          if (page != 1) {
            $button.addClass('loading');
          }
        },
        success: function (data) {
          $data = $(data); // Convert data to an object
          console.log($data);
          if ($init) {
            $button.text($button_text);
            $init = false;
          }
          if ($data.length > 1) {
            $data.hide();
            $content.append($data);
            $.each($data, function (e) {
              $(this).delay(e * $delay).fadeIn(500, function(){
	              if(e === $data.length - 1){
		            $loading = false;
		            $button.delay(200).removeClass('loading');	              
	              }
              });              
            });            

          } else {
            $button.delay(200).removeClass('loading').addClass('done');
            $loading = false;
            $finished = true;
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $button.removeClass('loading');
          //alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }
      });
    }

    $button.click(function () {
      if (!$loading && !$finished && !$(this).hasClass('done')) {
        $loading = true;
        page++;
        AjaxLoadMore.load_posts();
      }
    });

    if ($scroll) {
      $window.scroll(function () {
        var content_offset = $button.offset();
        if (!$loading && !$finished && $window.scrollTop() >= Math.round(content_offset.top - ($window.height() - 150)) && page < 5) {
          $loading = true;
          page++;
          AjaxLoadMore.load_posts();
        }
      });
    }
    AjaxLoadMore.load_posts();
  }
  if ($("#ajax-load-more").length) AjaxLoadMore.init();

})(jQuery);