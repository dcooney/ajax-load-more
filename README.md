#WordPress, Ajax Load More

A simple Ajax based lazy loading of WordPress posts. 

This script accepts a number of paramaters for the WordPress query. These parameters are passed in via HTML5 data attributes.

##Markup Example
```
<section id="ajax-load-more">
	<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>" data-post-type="post" data-category="design" data-taxonomy="" data-tag="" data-display-posts="6" data-button-text="Load More">
	<!-- Load Ajax Posts Here -->
	</ul>
</section>
```

##Parameters
- 'data-path' = Path to the theme directory where ajax-load-more.php is located.
- 'data-author' = Query by post author id (author).
- 'data-post-type' = Query by Post Type (post_type).
- 'data-category' = Query by category name (category_name).
- 'data-taxonomy' = Query by custon taxonomy, if you don't have a custom taxonomy to query, remove this parameter.
- 'data-tag' = Query by tag name.
- 'data-post-not-in' = An array of posts to exclude from the query ($excludePosts = array('7238', '6649', '6951')).
- 'data-display-posts' = Number of posts to display in the loop (posts_per_page). Default is 6.
- 'data-button-text' = The text to be displayed on the load button

##Dependencies
- WordPress :)
- jQuery

##Notes
- The current script loads posts when the users reaches the bottom of the page, this can be disabled removing the following script in the JS:
```javascript
$window.scroll(function(){ });
```
- ajax-load-more.php should be place in your theme directory

