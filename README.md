#WordPress Ajax Load More

A simple solution for lazy loading WordPress posts

View a live example at http://cnkt.ca/ajax-load-more/

##Markup Example
```
<section id="ajax-load-more">
	<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>/ajax-load-more" data-post-type="post" data-category="design" data-taxonomy="" data-tag="" data-display-posts="4" data-scroll="true" data-button-text="Older Posts">
	<!-- Load Ajax Posts Here -->
	</ul>
</section>
```

##Shortcode Example
```
[ajax_load_more display_posts="5" post_type="post" button_text="Older Posts"]
```

##Parameters
This script accepts a number of paramaters for the WordPress query. These parameters are passed in via HTML5 data attributes.
- 'data-path' = Path to the theme directory where ajax-load-more.php is located.
- 'data-author' = Query by post author id (author).
- 'data-post-type' = Query by Post Type (post_type).
- 'data-category' = Query by category name (category_name).
- 'data-taxonomy' = Query by custon taxonomy, if you don't have a custom taxonomy to query, remove this parameter.
- 'data-tag' = Query by tag name.
- 'data-post-not-in' = An array of posts to exclude from the query ($excludePosts = array('7238', '6649', '6951')).
- 'data-display-posts' = Number of posts to display in the loop (posts_per_page). Default is 6.
- 'data-scroll' = Load more posts on window scroll. Default is true (true/false).
- 'data-button-text' = The text to be displayed on the load button

##Dependencies
- WordPress :)
- jQuery

##Notes
* /ajax-load-more should be placed inside your theme directory
* infinite scroll will trigger five times and then becomes a manual process to load more posts. I plan to make this an adjustable param in the near future
