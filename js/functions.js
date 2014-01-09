/*
 * Wordpress Ajax Load More
 * https://github.com/dcooney/wordpress-ajax-load-more
 *
 * Copyright 2014 Connekt Media - http://cnkt.ca/
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos
 */
$(function () {
   "use strict";
   if ($("#ajax-load-more").length) {
      var page = 1,
         $loading = true,
         $finished = false,
         $window = $(window),
         $el = $('#ajax-load-more'),
         $content = $('#ajax-load-more ul'),
         $path = $content.attr('data-path');

      if ($path === undefined) {
         $path = '/wp-content/themes/your-theme-here';
      }
      //Define button text
      if ($content.attr('data-button-text') === undefined) {
         $button = 'Older Posts';
      } else {
         $button = $content.attr('data-button-text');
      }
      $el.append('<p id="load-more" class="more"><span class="loader"></span><span class="text">' + $button + '</span></p>');

      //Load posts function
      var load_posts = function () {
            $('#load-more').addClass('loading');
            $('#load-more span.text').text("Loading...");
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
                  pageNumber: page,
               },
               dataType: "html",
               url: $path + "/ajax-load-more.php",
               beforeSend: function () {
                  if (page != 1) {
                     $('#load-more').addClass('loading');
                     $('#load-more span.text').text("Loading...");
                  }
               },
               success: function (data) {
                  $data = $('<span>' + data + '</span>'); // Convert data to an object   
                  //alert(data);           
                  if (data.length > 1) {
                     $data.hide();
                     $content.append($data);
                     $data.fadeIn(500, function () {
                        $('#load-more').removeClass('loading');
                        $('#load-more span.text').text($button);
                        $loading = false;
                     });
                  } else {
                     $('#load-more').removeClass('loading').addClass('done');
                     $('#load-more span.text').text($button);
                     $loading = false;
                     $finished = true;
                  }
               },
               error: function (jqXHR, textStatus, errorThrown) {
                  $('#load-more').removeClass('loading');
                  $('#load-more span.text').text($button);
                  //alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
               }
            });
         }

      $('#load-more').click(function () {
         if (!$loading && !$finished && !$(this).hasClass('done')) {
            $loading = true;
            page++;
            load_posts();
         }
      });

      $window.scroll(function () {
         var content_offset = $('#load-more').offset();
         if (!$loading && !$finished && $window.scrollTop() >= Math.round(content_offset.top - ($window.height() - 50)) && page < 5) {
            $loading = true;
            page++;
            load_posts();
         }
      });
      load_posts();
   }

});