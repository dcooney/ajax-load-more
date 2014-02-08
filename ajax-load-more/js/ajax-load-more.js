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
    var page = 1,
      $loading = true,
      $finished = false,
      $window = $(window),
      $button_text = '',
      $data,
      $el = $('#ajax-load-more'),
      $content = $('#ajax-load-more ul'),
      $path = $content.attr('data-path');

    if ($path === undefined) {
      $path = './wp-content/themes/cnkt';
    }

    //Define button text
    if ($content.attr('data-button-text') === undefined) {
      $button_text = 'Older Posts';
    } else {
      $button_text = $content.attr('data-button-text');
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
          if ($data.length > 1) {
            $data.hide();
            $content.append($data);
            $data.delay(200).fadeIn(750, function () {
              $button.removeClass('loading');
              $loading = false;
              $button.text($button_text);
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

    $window.scroll(function () {
      var content_offset = $button.offset();
      if (!$loading && !$finished && $window.scrollTop() >= Math.round(content_offset.top - ($window.height() - 50)) && page < 5) {
        $loading = true;
        page++;
        AjaxLoadMore.load_posts();
      }
    });
    AjaxLoadMore.load_posts();

  }
  if ($("#ajax-load-more").length) AjaxLoadMore.init();

})(jQuery);