#WordPress Ajax Load More

A simple yet powerful solution for lazy loading WordPress posts and pages via AJAX requests. Build complex WP queries using our shortcode builder and let Ajax Load More handle the rest.

View a live examples at http://connekthq.com/ajax-load-more/

##Moved to WordPress.org
Ajax Load More has been updated to v2.0.1 and is now available as an installed plugin on (wordpress.org)[https://wordpress.org/plugins/ajax-load-more/]. 
Please download the latest stable version from your WordPress plugins dashboard by searching for Ajax Load More or visiting https://wordpress.org/plugins/ajax-load-more/.

*   This repository is now used a development branch.
*   Access v1.0 at https://github.com/dcooney/wordpress-ajax-load-more/tree/v1

##Shortcode Example
```
[ajax_load_more post_type="post" posts_per_page="5" transition="fade" button_label="Load More Posts"]

```


##Shortcode Parameters

Ajax Load More accepts a number of paramaters to pass to the WordPress query. 
These parameters are passed via shortcode.
 
*   repeater - select from a list of customizable repeaters (Add-on available)
*   post_types - comma seperated list of post types to query
*   category - query by category slug
*   tag - query by tag slug
*   author - query by author id
*   search - query search term ('s') 
*   exclude - comma separated list of post ID's to exclude from query. 
*   offset - offset the initial query (number).
*   posts_per_page - number of posts to load with each request
*   scroll - load more posts as the user scrolls the page (true/false)
*   max_pages - maximum number of pages to load while scrolling (only if scroll == true)  
*   pause - do not load posts until user clicks load button (true/false) 
*   transition - select a loading transition from the drop menu (slide/fade) 
*   button_label - customize the Load More button label.



##Changelog

June 11, 2014
* Stable version now available on wordpress.org - https://wordpress.org/plugins/ajax-load-more/

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