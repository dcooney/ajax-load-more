#WordPress Ajax Load More

A simple solution for lazy loading WordPress posts and pages

View a live example at http://connekthq.com/ajax-load-more/

##Major Changes
Ajax Load More has been updated to v2.0.0 and is now an installed plugin. Download the zip and installed in wp-content/plugins/

You can still access the previous v1.0 version at https://github.com/dcooney/wordpress-ajax-load-more/tree/v1

##Markup Example

@TODO - This section requires updating

```
<section id="ajax-load-more">
	<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>/ajax-load-more" data-post-type="post" data-category="design" data-taxonomy="" data-tag="" data-offset="" data-search="" data-max-pages="5" data-display-posts="4" data-scroll="true" data-button-text="Older Posts" data-transition="fade">
	<!-- Load Ajax Posts Here -->
	</ul>
</section>
```

##Shortcode Example
```
[ajax_load_more posts_per_page="5" post_type="post" max_pages="5" transition="fade" button_label="Older Posts"]

```


##Parameters

@TODO - This section requires updating

This script accepts a number of paramaters for the WordPress query. These parameters are passed in via HTML5 data attributes.
- 'data-path' = Path to the theme directory where ajax-load-more.php is located.
- 'data-author' = Query by post author id (author).
- 'data-post-type' = Query by Post Type (post_type).
- 'data-category' = Query by category name (category_name).
- 'data-taxonomy' = Query by custon taxonomy (taxonomy).
- 'data-tag' = Query by tag name.
- 'data-post-not-in' = An array of posts to exclude from the query. e.g. data-post-not-in="1562, 1542, 1612".
- 'data-offset' = The number of post to displace or pass over.
- 'data-display-posts' = Number of posts to display in the loop (posts_per_page). Default is 6.
- 'data-scroll' = Load more posts on window scroll. Default is true (true / false).
- 'data-max-pages' = Maximum number to pages to load via ajax when scrolling (default = 5).
- 'data-button-text' = Button label.
- 'data-transtion' = The loading animation ('slide' / 'fade').



##Changelog

June 9, 2014
* Replaced v1.0 with v2.0.0

May 8, 2014
* Replaced get_posts with wp_query.

May 7, 2014
* Updated shortcode to add offset value (functions.php). 
* Removed 'paged' in post query(ajax-load-more.php), replaced with 'offset'.
* Updated various functions in ajax-load-more.js to handle the offset parameter.
* Added support for multiple post types e.g. data-post-type="post, news, portfolio".

April 22, 2014
* Added max page param
* Added search param
* Added transition type ('slide' / 'fade')