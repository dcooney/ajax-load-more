#WordPress Ajax Load More

Ajax Load More is a simple yet powerful solution for lazy loading/infinite scrolling WordPress posts and pages with Ajax.

Build complex WordPress queries using our easy to use shortcode builder then add the shortcode to your pages via the content editor or directly into your template files.

Get more information and view live examples at http://connekthq.com/plugins/ajax-load-more/



### Demos ###
* **[Default](http://connekthq.com/plugins/ajax-load-more/examples/default)** - Out of the box functionality and styling
* **[Fade Transition](http://connekthq.com/plugins/ajax-load-more/examples/fade-transition/)** - Elements fade in as posts are loaded
* **[Pause Loading](http://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Posts will not load until initiated by the user
* **[Multiple Instances](http://connekthq.com/plugins/ajax-load-more/examples/multiple-instances/)** - Include multiple Ajax Load More' on a single page



##Moved to WordPress.org
Ajax Load More has been updated to v2.0.0 and is now available as an installed plugin on [wordpress.org](https://wordpress.org/plugins/ajax-load-more/). 
Please download the latest stable version from your WordPress plugins dashboard by searching for Ajax Load More or visiting https://wordpress.org/plugins/ajax-load-more/.

*   This repository is now used as a development branch. 
*   Access v1.0 at https://github.com/dcooney/wordpress-ajax-load-more/tree/v1



##Shortcode Parameters

Ajax Load More accepts a number of paramaters to pass to the WordPress query. These parameters are passed via shortcode - don't worry, creating your shortcode is simple with our Shortcode Builder.
 
*   **repeater** - Choose a repeater template (Add-on available). Default = ‘default‘
*   **post_type** - Comma separated list of post types. Default = ‘post’
*   **post_format** - Query by post format. Default = null
*   **category** - Query by category slug. Default = null
*   **tag** - Query by tag name. Default = null
*   **taxonomy** - Query by custom taxonomy name. Default = null
*   **taxonomy_terms** - Comma separated list of custom taxonomy terms(slug). Default = null
*   **taxonomy_operator** - Operator to compare Taxonomy Terms against (IN/NOT IN). Default = ‘IN’
*   **author** - Query by author id. Default = null
*   **search** - Query search term (‘s’). Default = null
*   **order** - Display posts in ASC(ascending) or DESC(descending) order. Default = ‘DESC’
*   **orderby** - Order posts by date, title, name, menu order, random, author, post ID or comment count.  Default = ‘date’
*   **exclude** - Comma separated list of post ID’s to exclude from query. Default = null 
*   **offset** - Offset the initial query (number). Default = ’0′
*   **posts_per_page** - Number of posts to load with each Ajax request. Default = ’5′
*   **scroll** - Load more posts as the user scrolls the page (true/false). Default = ‘true’
*   **max_pages** - Maximum number of pages to load while user is scrolling (activated on when scroll = true). Default = '5' 
*   **pause** - Do not load posts until user clicks the Load More button (true/false). Default = 'false'
*   **transition** - Choose a posts reveal transition (slide/fade). Default = 'slide' 
*   **button_label** - The label text for Load More button. Default = 'Older Posts'



##Changelog

July 20, 2014
* Updated to stable version 2.1.1

June 26, 2014
* Updated to stable version 2.0.14

June 18, 2014
* Updated to stable version 2.0.12

June 17, 2014
* Updated to stable version 2.0.10

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