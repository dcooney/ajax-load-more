#WordPress Ajax Load More

Ajax Load More is the ultimate solution for infinite scrolling and lazy loading posts, custom post types and pages with Ajax powered queries.

Build complex WordPress queries using the Ajax Load More custom shortcode builder then add the shortcode to your pages via the content editor or directly into your template files. 

**[Get More Information](http://connekthq.com/plugins/ajax-load-more/)**

##Download Instructions
Ajax Load More is available as an installed plugin on [wordpress.org](https://wordpress.org/plugins/ajax-load-more/). 
Please download the latest stable version from your WordPress plugins dashboard by searching for Ajax Load More or visiting https://wordpress.org/plugins/ajax-load-more/.

##Features
* Shortcode Builder - Easily create your own Ajax Load More shortcode by adjusting the various WordPress query parameters in our easy-to-use shortcode builder.(see Shortcode Parameters).
* Query Parameters - Ajax Load More allows you to query WordPress by many different content types. Query by Post Type, Post Format, Date, Category, Tags, Custom Taxonomies, Search Term, Authors and more!!
* Customizable Repeater Templates - Edit and extend the functionality of Ajax Load More by creating your own repeater template to match the look and feel of your website (see screenshots).
* Setting Panel - Customize your version of Ajax Load More by updating various plugin settings (see screenshots).
* Multiple Instances - You can include multiple instances of Ajax Load More on a single page, post or template.

Check out the **[demo site](http://connekthq.com/plugins/ajax-load-more/)** for more information!

##Shortcode Parameters

Ajax Load More accepts a number of parameters that are passed to the WordPress query. These parameters are transferred via shortcode - don't worry, creating your shortcode is simple with our intuitive Shortcode Builder.
 
*   **repeater** - Choose a repeater template (<a href="http://connekthq.com/plugins/ajax-load-more/custom-repeaters/">Add-on available</a>). Default = ‘default’
*   **theme_repeater** - Select from a list of template files in your current theme directory (<a href="http://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/">Add-on only</a>). Default = null
*   **post_type** - Comma separated list of post types. Default = ‘post’
*   **post_format** - Query by post format. Default = null
*   **category** - A comma separated list of categories to include by slug. Default = null
*   **category__not_in** - A comma separated list of categories to exclude by ID. Default = null
*   **tag** - A comma separated list of tags to include by slug. Default = null
*   **tag__not_in** - A comma separated list of tags to exclude by ID. Default = null
*   **taxonomy** - Query by custom taxonomy name. Default = null
*   **taxonomy_terms** - Comma separated list of custom taxonomy terms(slug). Default = null
*   **taxonomy_operator** - Operator to compare Taxonomy Terms against (IN/NOT IN). Default = ‘IN’
*   **day** - Day of the week. Default = null
*   **month** - Month of the year. Default = null
*   **year** - Year of post. Default = null
*   **taxonomy_operator** - Operator to compare Taxonomy Terms against (IN/NOT IN). Default = ‘IN’
*   **meta_key** - Custom field key(name). Default = null
*   **meta_value** - Custom field value. Default = null
*   **meta_compare** - Operator to compare meta_key and meta_value against. Default = ‘IN’
*   **meta_type** - Custom field type. Default = ‘CHAR’
*   **meta_relation** - Used with multiple custom field entries (AND/OR). Default = ‘AND’
*   **author** - Query by author id. Default = null
*   **post__in** - Comma separated list of post ID’s to include in query. Default = null 
*   **exclude** - Comma separated list of post ID’s to exclude from query. Default = null 
*   **search** - Query search term (‘s’). Default = null
*   **custom_args** - A semicolon separated list of value:pair arguments. e.g. tag_slug__and:design,development; event_display:upcoming. Default = null
*   **post_status** - Select status of the post. Default = 'publish' 
*   **order** - Display posts in ASC(ascending) or DESC(descending) order. Default = ‘DESC’
*   **orderby** - Order posts by date, title, name, menu order, random, author, post ID or comment count.  Default = ‘date’
*   **offset** - Offset the initial query (number). Default = ’0′
*   **posts_per_page** - Number of posts to load with each Ajax request. Default = ’5′
*   **scroll** - Load more posts as the user scrolls the page (true/false). Default = ‘true’
*   **scroll_distance** - The distance from the bottom of the screen to trigger the loading of posts while scrolling. Default = '150'
*   **max_pages** - Maximum number of pages to load while user is scrolling (activated on when scroll = true). Default = '5' 
*   **pause_override** - Allow scrolling to override the Pause parameter and trigger the loading of posts on scroll. Default = null 
*   **pause** - Do not load posts until user clicks the Load More button (true/false). Default = 'false'
*   **transition** - Choose a posts reveal transition (slide/fade/none). Default = 'slide' 
*   **images_loaded** - Wait for all images to load before displaying ajax loaded content (true/false). Default = 'false' 
*   **destroy_after** - Remove ajax load more functionality after 'n' number of pages have been loaded. Default = null
*   **button_label** - The label text for Load More button. Default = 'Older Posts'
*   **container_type** - Override the global Container Type that was set on ALM Settings page. Default = null
*   **css_classes** - Add custom CSS classes to the Ajax Load More container. Default = null
*   **cache** - Turn on content caching for the specific Ajax Load More query. <a href="http://connekthq.com/plugins/ajax-load-more/cache/">add-on only</a> - (true/false). Default = ‘false’
*   **cache_id** - A unique 10 digit ID for the cached query. <a href="http://connekthq.com/plugins/ajax-load-more/cache/">add-on only</a> - Default = A random 10 digit integer
*   **seo** - Enable address bar URL rewrites as users page through content - <a href="http://connekthq.com/plugins/ajax-load-more/search-engine-optimization/">add-on only</a> (true/false). Default = ‘false’
*   **preloaded** - Should Ajax Load More preload posts? <a href="http://connekthq.com/plugins/ajax-load-more/preloaded/">add-on only</a> - (true/false). Default = ‘false’
*   **preloaded_amount** - The amount of posts to preload. <a href="http://connekthq.com/plugins/ajax-load-more/preloaded/">add-on only</a> - Default = ‘5’
*   **paging** - Replace infinite scrolling with a paged navigation system. <a href="http://connekthq.com/plugins/ajax-load-more/paging/">add-on only</a> (true/false). Default = ‘false’
*   **paging_controls** - Show previous(«) and next(») buttons (true/false). Default = ‘false’
*   **paging_classes** - Add classes to the paging navigation menu for CSS styling.
*   **paging_show_at_most** - Maximum amount of pages to show at a time. 0 = no maximum. Default = ‘0’


##Example Shortcode

    [ajax_load_more post_type="post, portfolio" repeater="default" posts_per_page="5" transition="fade" button_label="Older Posts"]

***