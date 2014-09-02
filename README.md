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

= 2.2.0 =
* Adding Post Format query.
* Adding syntax highlighting for Repeater Templates with CodeMirror (http://codemirror.net/).
* Adding custom alias integration for Repeater Templates (Only for the custom repeater add-on).
* Adding button preview on settings page.
* Adding 'White' button style
* Updated .pot language file

= 2.1.3 =
* Fixed issue causing the Ajax Load More menu to not show on some admin screen do to location conflict with another plugin.
* Adding column 'alias' to wp_alm table to allow for repeater alias (Only for the custom repeater add-on). 
* Remove legacy column 'test' from wp_alm table.  
* Updating styles in admin.css. 

= 2.1.2 =
* Adding ability to have multiple instances of script on a single page
* Adding global class name('.ajax-load-more-wrap') to Ajax Load More container. I plan to remove the #ajax-load-more naming convention in upcoming releases, but need time for users to update their code.
* Small styling enhancements to admin panel.
* Updated .pot language file.

= 2.1.1 =
* Adding Order and Orderby query parameters, you can now set these values within the Shortcode Builder
* Updating core javascript code
* Fixed bug with taxonomy query selectors

= 2.1.0 =
* Adding custom taxonomy query - select from a list of custom taxonomies then select terms and operator
* Fixed path to repeater file in admin functions

= 2.0.15 =
* Fixed issue with loading of admin javascript and css on pages other than Ajax Load More

= 2.0.14 =
* Fixed issue with author query

= 2.0.13 =
* Fixed issue where loading button was not turning off when posts remaining were zero 

= 2.0.12 =
* Adding add_filter('widget_text', 'do_shortcode'); 

= 2.0.11 =
* Removed 2 filters for widget_text which were casuing issues in sidebars

= 2.0.10 =
* Updating default repeater template to include the_permalink()

= 2.0.9 =
* Fixing issue with duplicate column names in database.

= 2.0.8 =
* removed upgrader_process_complete as it was unreliable. Replaced with admin_init to check whether plugin has been updated.

= 2.0.7 =
* Fixed jQuery conflict javascript error

= 2.0.6 =
* Fixing issue with scrolling of posts

= 2.0.5 =
* Updating db table structure
* Adding upgrader_process_complete checker

= 2.0.4 =
* Adding plugin version to wpdb table.
* Removed legacy repeater code.

= 2.0.3 =
* Fixed issue with WP auto updates overriding the default repeater. Please deactivate and then activate your plugin.

= 2.0.2 =
* Fixed issue with tinymce conflict

= 2.0.1 =
* Ajax Load More
