=== Ajax Load More - Infinite Scroll ===
Contributors: dcooney
Donate link: https://connekthq.com/donate/
Tags: infinite scroll, scroll, infinite, lazy load, lazy loading, pagination, ajax pagination, ajax, ajax posts, ajax load posts, loop, query, dynamic, shortcode builder, wp_query, search, tags, category, post types, taxonomy, meta_query, archives, date, infinite scrolling, woocommerce
Requires at least: 3.6
Tested up to: 4.5.2
Stable tag: 2.11.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The ultimate solution to add infinite scroll functionality to your website

== Description ==

Ajax Load More is a powerful solution for infinite scrolling and lazy loading posts, custom post types, single posts, pages and comments with Ajax powered queries.

Build complex custom WordPress queries using the Ajax Load More shortcode builder then add the generated shortcode to your page via the content editor or directly into your template files. 

Ajax Load More is fully compatible with popular ecommerce plugins such as WooCommerce and Easy Digital Downloads.

**[Get More Information](https://connekthq.com/plugins/ajax-load-more/)**

= Features =
* **Shortcode Builder** - Easily create your own Ajax Load More shortcode by adjusting the various WordPress query parameters in our easy-to-use shortcode builder (see Shortcode Parameters).
* **Query Parameters** - Ajax Load More allows you to query WordPress by many different content types. Query by Post Type, Post Format, Date, Category, Tags, Custom Taxonomies, Search Term, Authors and more!!
* **Customizable Repeater Templates** - Edit and extend the functionality of Ajax Load More by creating your own repeater template to match the look and feel of your website (see screenshots).
* **Setting Panel** - Customize your version of Ajax Load More by updating various plugin settings (see screenshots).
* **Multiple Instances** - You can include multiple instances of Ajax Load More on a single page, post or template.
* **Multisite Compatibility** - As of Ajax Load More 2.7.2 you can now manage repeater templates across all sites in your network.

Check out the **[demo site](https://connekthq.com/plugins/ajax-load-more/)** for more information!

***

= Content Types =
Ajax Load More can infinite scroll any content type WordPress offers - from blog posts to WooCommerce products Ajax Load More can handle it.

Check out the examples below:

*   [Standard Posts](https://connekthq.com/plugins/ajax-load-more/examples/default/)
*   [Custom Post Types](https://connekthq.com/plugins/ajax-load-more/examples/masonry/)
*   [Pages](https://connekthq.com/plugins/ajax-load-more/examples/search-results/)
*   [Single Posts](https://connekthq.com/ajax-load-more-posts/alm-post-example/) **
*   [Comments](http://comments.connekthq.com/example-post/) **

** Add-on required


= Shortcode Parameters =

Ajax Load More accepts a number of parameters that are passed to the WordPress query. These parameters are transferred via shortcode - don't worry, creating  your custom shortcode is simple with the intuitive [Shortcode Builder](https://connekthq.com/plugins/ajax-load-more/screenshots/#shortcode-builder)
 
*   **repeater** - Choose a repeater template (<a href="https://connekthq.com/plugins/ajax-load-more/custom-repeaters/">Add-on available</a>). Default = ‘default’
*   **theme_repeater** - Select from a list of template files in your current theme directory (<a href="https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/">Add-on only</a>). Default = null
*   **post_type** - Comma separated list of post types. Default = ‘post’
*   **post_format** - Query by post format. Default = null
*   **category** - A comma separated list of categories to include by slug. Default = null
*   **category__not_in** - A comma separated list of categories to exclude by ID. Default = null
*   **tag** - A comma separated list of tags to include by slug. Default = null
*   **tag__not_in** - A comma separated list of tags to exclude by ID. Default = null
*   **taxonomy** - Query by custom taxonomy name. Default = null
*   **taxonomy_terms** - Comma separated list of custom taxonomy terms(slug). Default = null
*   **taxonomy_operator** - Operator to compare Taxonomy Terms against (IN/NOT IN). Default = ‘IN’
*   **taxonomy_relation** - The logical relationship between each taxonomy when there is more than one. (AND/OR). Default = ‘AND’
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
*   **post__not_in** - Comma separated list of post ID’s to exclude from query. Default = null 
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
*   **transition_speed** - The speed of the loading transition in milliseconds. (slide/fade/none). Default = '250' 
*   **transition_container** - Display the Ajax Load More (.alm-reveal) loading container. Default = 'true'
*   **images_loaded** - Wait for all images to load before displaying ajax loaded content (true/false). Default = 'false' 
*   **destroy_after** - Remove ajax load more functionality after 'n' number of pages have been loaded. Default = null
*   **button_label** - The label text for Load More button. Default = 'Older Posts'
*   **button_loading_label** - Update the text of the Load More button while content is loading. Default = null
*   **container_type** - Override the global Container Type that was set on ALM Settings page. Default = null
*   **css_classes** - Add custom CSS classes to the Ajax Load More container. Default = null
*   **cache** - Turn on content caching for the specific Ajax Load More query. <a href="https://connekthq.com/plugins/ajax-load-more/cache/">add-on only</a> - (true/false). Default = ‘false’
*   **cache_id** - A unique 10 digit ID for the cached query. <a href="https://connekthq.com/plugins/ajax-load-more/cache/">add-on only</a> - Default = A random 10 digit integer
*   **seo** - Enable address bar URL rewrites as users page through content - <a href="https://connekthq.com/plugins/ajax-load-more/search-engine-optimization/">add-on only</a> (true/false). Default = ‘false’
*   **preloaded** - Should Ajax Load More preload posts? <a href="https://connekthq.com/plugins/ajax-load-more/preloaded/">add-on only</a> - (true/false). Default = ‘false’
*   **preloaded_amount** - The amount of posts to preload. <a href="https://connekthq.com/plugins/ajax-load-more/preloaded/">add-on only</a> - Default = ‘5’
*   **paging** - Replace infinite scrolling with a paged navigation system. <a href="https://connekthq.com/plugins/ajax-load-more/paging/">add-on only</a> (true/false). Default = ‘false’
*   **paging_controls** - Show previous(«) and next(») buttons (true/false). Default = ‘false’
*   **paging_classes** - Add classes to the paging navigation menu for CSS styling.
*   **paging_show_at_most** - Maximum amount of pages to show at a time. 0 = no maximum. Default = ‘0’


***

= Example Shortcode =

    [ajax_load_more post_type="post, portfolio" repeater="default" posts_per_page="5" transition="fade" button_label="Older Posts"]

***

= Demos =
* **[Default](https://connekthq.com/plugins/ajax-load-more/)** - Out of the box functionality and styling
* **[Destroy After](https://connekthq.com/plugins/ajax-load-more/examples/destroy-after/)** - Remove Ajax Load More functionality after 'n' number of pages
* **[Fade Transition](https://connekthq.com/plugins/ajax-load-more/examples/fade-transition/)** - Elements fade in as posts are loaded
* **[Filtering](https://connekthq.com/plugins/ajax-load-more/examples/filtering/)** - Reset and filter an Ajax Load More instance
* **[Infinite Scroll](https://connekthq.com/plugins/ajax-load-more/examples/infinite-scroll/)** - A look at the new loading functionality and style
* **[Images Loaded](https://connekthq.com/plugins/ajax-load-more/examples/images-loaded/)** - Download images before displaying ajax loaded content
* **[Masonry](https://connekthq.com/plugins/ajax-load-more/examples/masonry/)** - Creating a flexible grid layout with Masonry JS
* **[Multiple Instances](https://connekthq.com/plugins/ajax-load-more/examples/multiple-instances/)** - Include multiple Ajax Load More' on a single page
* **[Paging URLs](https://connekthq.com/plugins/ajax-load-more/examples/paging-urls/)** - Generate unique paging URLs for every Ajax Load More query with the SEO add-on
* **[Pause Loading](https://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Posts will not load until initiated by the user
* **[Preloaded Posts](https://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Easily preload an initial set of posts before completing any Ajax requests to the server
* **[Search Results](https://connekthq.com/plugins/ajax-load-more/examples/search-results/)** - Returning results based on search terms
* **[SEO & Paging](https://connekthq.com/plugins/ajax-load-more/examples/seo-paging-add-ons/)** - Combine these two add-ons to create one powerful navigation system
* **[Slideshow Gallery](https://connekthq.com/plugins/ajax-load-more/examples/slideshow-gallery/)** - Create a gallery of posts with Ajax Load More and the Paging add-on.
* **[Table Layout](https://connekthq.com/plugins/ajax-load-more/examples/table/)** - Ajax Load More will display query results in a table format.

[View All Examples](https://connekthq.com/plugins/ajax-load-more/examples/)

*The [Custom Repeater Add-On](https://connekthq.com/plugins/ajax-load-more/custom-repeaters/) has been installed for use on each of our product demos*

[youtube https://www.youtube.com/watch?v=EQ57i6dkOew]

***    

= Add-ons =
 The following Add-ons are available to increase the functionality of Ajax Load More.

> #### Cache
> The **[Cache](https://connekthq.com/plugins/ajax-load-more/cache/)** add-oncreates static HTML files of Ajax Load More requests then serves those static pages to your visitors without querying the database.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/cache/)
> 
> #### Comments
> The **[Comments](https://connekthq.com/plugins/ajax-load-more/add-ons/comments/)** add-on will load and display blog comments using the core Ajax Load More infinite scroll functionality.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/add-ons/comments/)
> 
> #### Custom Repeaters
> The **[Custom Repeaters](https://connekthq.com/plugins/ajax-load-more/custom-repeaters/)** add-on will allow for **unlimited repeater templates** and provide the ability to create unique templates for different content types throughout your theme.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/custom-repeaters/)
> 
> #### Layouts
> The **[Layouts](https://connekthq.com/plugins/ajax-load-more/layouts/)** add-on will provide a library of fully responsive layout templates ready for use on your website.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/layouts/)
>
> #### Paging
> The **[Paging](https://connekthq.com/plugins/ajax-load-more/paging/)** add-on will transform Ajax Load More’s lazy load/infinite scroll functionality into a robust ajax powered navigation system.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/paging/)
>
> #### Preloaded
> The **[Preloaded](https://connekthq.com/plugins/ajax-load-more/preloaded/)** add-on will allow you to quickly and easily preload an initial set of posts before completing any Ajax requests to the server.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/preloaded/)
>
> #### Previous Post
> The **[Previous Post](https://connekthq.com/plugins/ajax-load-more/previous-post/)** add-on will allow you to navigate single posts with Ajax Load More.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/previous-post/)
> 
> #### REST API
> The **[REST API](https://connekthq.com/plugins/ajax-load-more/rest-api/)** add-on will enable compatibility between Ajax Load More and the WP REST API plugin.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/rest-api/)
> 
> #### Search Engine Optimization
> The **[SEO](https://connekthq.com/plugins/ajax-load-more/seo/)** add-on will optimize your ajax loaded content for search engines and site visitors by generating standard WordPress paging URLs with each Ajax Load More query.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/seo/)
> 
> #### Theme Repeaters
> The **[Theme Repeaters](https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/)** add-on will allow you load, edit and maintain templates from your current theme directory.<br />
> [Get More Information](https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/)

***

= Callback Functions =
The following [functions](https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/) are available to be dispatched by Ajax Load More.


**ALM Complete** - The almComplete() function is triggered after every *successful* ajax call made by Ajax Load More.

    $.fn.almComplete = function(alm){
    	// Your on complete code goes here
    };
    

**ALM Done** - The almDone() function is triggered after all posts have been loaded..

    $.fn.almDone = function(alm){
    	console.log('All posts have been loaded!');
    };
    
**ALM Empty** - The almEmpty() function is triggered if there are zero results returned in the initial query.

    $.fn.almEmpty = function(alm){
       console.log('Sorry, but we could not locate any posts that matched your criteria.');
    };
   
**ALM Filter Complete** - The almFilterComplete() function is triggered after a successful call to the public function almFilter().

    $.fn.almFilterComplete = function(){
        console.log('Ajax Load More filter has completed!'); 
    };

   
**ALM URL Update** - The almUrlUpdate() function is triggered after a successful URL update (pushState) from the Previous Post or the Search Engine Optimization add-on

    $.fn.almUrlUpdate = function(permalink, type){
        console.log("URL updated to " + permalink + '- dispatched from the '+ type + ' add-on.'); 
    };

***
    
= Variables =

Ajax Load More passes the following PHP [variables](https://connekthq.com/plugins/ajax-load-more/docs/variables/) to each repeater template - these template variables can help you style and transform your repeater templates.
 
*   **$alm_current** - Returns the current item number in the current Ajax Load More loop and will reset to zero with every 'Load More' action.. 'echo $alm_current;'
*   **$alm_page** - Returns the current page number. 'echo $alm_page;'
*   **$alm_item** - Returns the current item number within your loop. 'echo $alm_item;'
*   **$alm_found_posts** - Returns the total number of posts found within the entire WordPress query. 'echo $alm_found_posts;'
    
***

= Tested Browsers =

* Firefox (Mac, PC)
* Chrome (Mac, PC, iOS, Android)
* Safari (Mac, iOS)
* IE8+
* Android (Native)
* BB10 (Native)

***

= Website =
https://connekthq.com/ajax-load-more/

***

= Please Rate Ajax Load More! =

Your ratings make a big difference! If you like and use Ajax Load More, please consider taking the time to [rate my plugin](https://wordpress.org/support/view/plugin-reviews/ajax-load-more). Your ratings and reviews will help this plugin grow and provide the motivation needed to keep pushing it forward.



== Frequently Asked Questions ==


= What are the steps to getting Ajax Load More to display on my website =

1. Create your shortcode
2. Add the shortcode to your page, by adding it through the content editor or placing it directly within one of your template files.
3. Load a page with your shortcode in place and watch Ajax Load More fetch your posts. 

= What are my server requirements? =

Your server must be able to read/write/create files. Ajax Load More creates the default repeater on plugin activation and in order to modify the output we are required to write to the file as well. 

= Is the ajax functionality secure? =

Yes, Ajax Load more uses admin-ajax and nonces in order to protect URLs and forms from being misused.

= Can I make modifications to the plugin code? =

Sure, but please be aware that if modifications are made it may affect future updates of the plugin.

= Can I modify the repeater template? =

Yes, visit the Repeater Template section in your WordPress admin.

= How are my repeater templates saved? =

Repeater template data is saved into your WordPress database as well as written directly to a repeater template .php file in the ajax-load-more plugin directory.

= Can I use custom fields in a repeater? =

Yes, but you will need to define $post at the top of the repeater before requesting your custom fields. Like so:
global $post;


== Installation ==

How to install Ajax Load More.

= Using The WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Search for 'Ajax Load More'
3. Click 'Install Now'
4. Activate the plugin on the Plugin dashboard

= Uploading in WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Navigate to the 'Upload' area
3. Select `ajax-load-more.zip` from your computer
4. Click 'Install Now'
5. Activate the plugin in the Plugin dashboard

= Using FTP =

1. Download `ajax-load-more.zip`
2. Extract the `ajax-load-more` directory to your computer
3. Upload the `ajax-load-more` directory to the `/wp-content/plugins/` directory
4. Activate the plugin in the Plugin dashboard


== Screenshots ==

1. Settings screen
2. Available Repeater Templates
3. Custom Repeaters Add-On
4. Shortcode Builder
5. Content Editor shortcode icon
6. Edit Page Shortcode Builder
7. Shortcode and implementation examples


== Changelog ==

= 2.11.1 - May 30, 2016 =
* SECURITY - Security fix for posts_status parameter. posts_status is now only available for logged in (admin) users. Non logged in users will only have access to view content in a 'publish' state.
* UPDATE - Added support for preloading comments with the Comments and Preloaded add-ons.
* Shortcode Builder UI improvments


= 2.11.0 - May 25, 2016 =
* NEW - Adding required functionality for the new REST API add-on.
* FIX - Fixed url parsing issue with the ALM base URL and Blog page url. This was affecting SEO add-on users.
* UPDATE - WP_Query Performance improvements.
* UPDATE - Various UI updates/tweaks.


= 2.10.1 - May 8, 2016 =
* NEW - Users can now load a custom version of ajax-load-more.css from {/alm} folder in current theme directory.
* NEW - Class definitions for alm shortcode and css enqueue script. More to come.
* FIX - Removed unnecessary ob_end_clean() function from alm_query_posts() that was causing php notices for some users.
* FIX - Fixed meta_query issue with EXISTS and NOT EXISTS meta_compare values.
* FIX - Issue with meta_key parameter and orderby.
* UPDATE - Updated $.fn.almUpdateCurrentPage() function to allow for multiple instances of Paging.
* UPDATE - Various Admin UI bug fixes/enhancements.


= 2.10.0.1 - April 11, 2016 =
* FIX - JavaScript fix for 'Unexpected token' error is Safari and IE with alm.AjaxLoadMore.success() function.
* FIX - Fixed canonical URL issue on home/front pages.


= 2.10.0 - April 10, 2016 =
* NEW - Converted the Ajax return content type from HTML to JSON.
* NEW - Adding transition_speed shortcode parameter.
* NEW - Added alm_button_label filter to modify default button text.
* NEW - Added new canonical URL builder for pages and archives  - this function helps build legitimate URLs for the Search Engine Optimization add-on.
* FIX - Fixed issue with undefined post slug on archive pages.
* UPDATE - Performance improvements and code reduction.
* UPGRADE NOTICE - When updating to 2.10 you must also update SEO and Comments add-ons.


= 2.9 =
* NEW - Adding support for new Layouts add-on.
* NEW - Adding support for table container type.
* NEW - Adding new 'transition_container' shortcode parameter to allow for removal of the .alm-reveal div in the ajax output.
* FIX - Fixed issue with the display of Previous Post taxonomy selection in Shortcode Builder.
* FIX - Fixed issue with noscript navigation for preloaded and seo add-ons. 
* FIX - Fixed issue with hiding of Button Classes setting if 'Disable CSS' is checked. 
* FIX - Fixed bug with custom repeater fallback function. 
* FIX - Fixed issue with almDone function firing before a the button text reset function. 
* UPDATE - Various UI/UX enhancments. 
* UPDATE - Adding cache support for Theme Repeaters add-on. 
* UPDATE - Updating add-on activation script from wp_remote_get to wp_remote_post.


= 2.8.6 =
* NEW - Adding a set of filter hooks to enable users to hook into Ajax Load More to insert or modify data. See https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/ for more information.
* FIX - Updated infinite scrolling css styling.


= 2.8.5 =
* FIX - Update for ALM settings screen - layout was broken with WP 4.4 release.
* NEW - Adding new functionality to allow for loading of local default repeater template. Users can create a /alm_templates directory within their current theme and add default.php. If default.php is present it will be loaded before repeater template shipped with Ajax Load More.
* NEW - Adding multiple taxonomy support - you can now query WordPress by up to 3 unique taxonomy queries.
* NEW - Adding taxonomy_relation shortcode parameter.
* FIX - Fixed JS error in shortcode builder popup.
* FIX - Fix for issue with '<' and '<=' Custom Field operators, WP was rendering these tags as HTML (https://github.com/dcooney/wordpress-ajax-load-more/issues/98). Users can now enter 'lessthan' and 'lessthanequalto' to fix this issue.
* UPDATE - Changing 'exclude' shortcode parameter name to be 'post__not_in' to follow WordPress naming conventions. 'exclude' will continue to work along side 'post__not_in'.


= 2.8.4 =
* NEW - Adding new loading styles and button types.
* NEW - Adding new 'button_loading_label' parameter allowing users to change button text while loading content.
* NEW - Adding required support and functionality for new Comments add-on - https://connekthq.com/plugins/ajax-load-more/add-ons/comments/
* UPDATE - Updating JS functions for release of Previous Post v1.1.
* UPDATE - Various admin enhancements and removing deprecated code.
* UPDATE - removing default link color in ajax-load-more.css.



= 2.8.3 =
* PERFORMANCE - Updating ALM core to enqueue Ajax Load More js only when shortcode is present on screen.
* NEW - Adding 'canonical-url' data attribute to ALM plugin wrapper - this will be used by various functions throughout the core plugin and add-ons.
* NEW - Adding new alm-thumbnail image size.
* NEW - Adding required functionality for upcoming Layouts add-on.
* NEW - To increase SEO and crawler access we added a <noscript> paging navigation when seo and preloaded are both 'true'.
* FIX - Fixed issue with almDone() function not firing in certain instances.
* UPDATE - Rebuilt License activation screen to use ajax and alert users when licenses run out.
* UPDATE - Various admin UI enhancements.


= 2.8.2 =
* FIX - Fixed issue with the passing of ALM template variables to Theme Repeaters add-on.
* FIX - Fixed issue shortcode builder returning an error when loading custom taxonomies.
* NEW - Added new almDone() function that is dispatched after all posts have been loaded. $.fn.almDone(alm)


= 2.8.1.2 =
* SECURITY - Due to a security scare with non-admin logged-in users I have updated all admin-ajax.php calls to verify nonce variables (wp_verify_nonce) and check user capabilities(edit_theme_options).


= 2.8.1.1 =
* FIX - Update for issue where Ajax Load More CSS would load even if unchecked.


= 2.8.1.1 =
* UPDATE - Adding required support/update for Language Pack translations (https://translate.wordpress.org/)
* FIX - Update to automatically set posts_per_page to 1 if Previous Post add-on is in use.
* FIX - Various core JS updates/improvements
* FIX - Licenses not showing for Theme Repeaters and Previous Post add-ons
* UPDATE - Various admin UI updates and enhancements.

= 2.8.0 =
* NEW - Adding required support and functionality for new Previous Post add-on - https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/
* NEW - Adding a set of filters to inject content into ALM containers.
* NEW - Adding 'container_type' shortcode parameter that allows for override of the global Container Type.
* NEW - Adding 'pause_override' shortcode parameter that will allow scrolling to override the Pause parameter and trigger the loading of posts on scroll.
* NEW - Adding 'meta_type' shortcode parameter that will allow for specification of a custom field type..
* UPDATE - Added unique id(classname/data-id) to each instance of ajax load more - this will allow for targeting of specific instances from outside elements.
* FIX - Fixed JS issue with Paging add-on + SEO add-on URLs.
* UPDATE - Various admin fixes and updates.


= 2.7.3 =
* NEW - Adding required support and functionality for new Theme Repeaters add-on - https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/
* NEW - Added new shortcode parameter 'images_loaded' which will allow you to wait for all images to load before displaying ajax loaded content.
* UPDATE - General admin UI enhancements to settings screen.


= 2.7.2 =
* NEW - Adding multisite support for Repeater Templates - if using a multisite, please deactivate then re-activate Ajax Load More.
* NEW - Completely rebuilt update script for repeater templates to be more efficient and integrate with multisite installations.
* UPDATE - Split up ALM setting fields into Global and Admin settings for increased usability.
* NEW - Added new setting field for Error Reporting - User can now choose to display error notices regarding repeater template updating in the browser console.


= 2.7.1 =
* FIX - Fixed issue for querying by meta_key - users are not required to enter a meta_value to query by meta_key.


= 2.7.0 =
* MILESTONE - This 2.7.0 release includes major updates to ALM core functionality to allow for new features and various fixes.
* NEW - Added multiple meta query functionality to the shortcode builder - users can now query by up to 4 custom fields.
* NEW - Adding 'css_classes' parameter - users can now add container css classes directly within the shortcode builder as well as the setting screen.
* NEW - Adding Paging add-on functionality.
* NEW - Adding secondary query to return total posts for entire ALM query.
* NEW - Adding licensing section for add-on license key activation.
* FIX - Fixed issue with boolean vs string variables in core JS.
* FIX - Fixed bug with the 'custom_args' parameter that was blocking arrays from being passed. Please check the documentation for the updated 'custom_args' syntax for multiple values.


= 2.6.3.2 =
* FIX - Fixed bug with Preloaded + SEO and scrolling to current page in core Ajax Load More JS.
* UPDATE - Moved SEO and Cache add-on settings and controls from ALM core to SEO core.
* NEW - Added Google Analytics Pageview support to SEO add-on.
* UPDATE - Various admin UI improvements.

= 2.6.3.1 =
* FIX - Fixed/updated error handling of repeater templates. Errors are now being reported in the browser console and do not interfere with the WP admin.
* FIX - Fixed javascript issue with shorthand if statements and script concatenation.
* REMOVED - Legacy code for creating 'alias' table columns.

= 2.6.3 =
* NEW - Added new shortcode parameter 'custom_args' which will let users pass custom query params. e.g. custom_args="order:custom_meta_key, tag_slug__and:array(design,development)"
* NEW - Added setting for implementing WP nonce for added security of Ajax functionality.
* Update - Removed WP nonce for ALM query as this was causing issues with various caching plugins.
* Update - Various UI improvements and enhancements

= 2.6.2 =
* NEW - Adding new ALM setting to move user to top of page on window load.
* FIX - Fixed issue with Cache + SEO where initial user might end up caching multiple pages in a single query if the page requested was greater than 1.
* FIX - Fix for scrolling to load posts when max_pages = 0 - issue was introduced in release 2.6.1

= 2.6.1 =
* NEW - Public function, almFilter(type, speed, data) function which will allow for filtering/resetting of a ajax load more object.
* NEW - Callback function, almFilterComplete() function which is dispatched after a successful almFilter() event.
* NEW - Adding 'post__in' parameter. You can now curate queries based on a comma separated list of post ids.
* UPDATE - Updating data() variables in ajax-load-more.js to allow for manipulation via JS.
* FIX - Fix for cache parameter always true in ajax-load-more.js.

= 2.6.0 =
* NEW - Adding scroll_distance parameter - easily adjust the distance from the bottom of the page that will trigger loading of posts.
* NEW - Adding required functionality for Caching Add-on.
* NEW - Adding new almEmpty function triggered if zero results were returned.
* FIX - Disabled in previous versions, Preloaded and SEO can now work together to produce SEO URLs.
* UPDATE - Performance updates, various UI improvements.


= 2.5.1 =
* FIX - Dynamic population of category, tag and author content within Shortcode Builder - now this actually works as requested and no database queries happen if this setting is true.
* FIX - Small issue with new destory_after parameter in core js.
* UPDATE - Updated language .pot file.
* UPDATE - Small admin interface tweaks.


= 2.5.0 =
* NEW - Adding query by multiple categories and tags.
* NEW - Adding required functionality for new Preloaded add-on - preload posts before any ajax queries kick in.
* NEW - Adding 'destroy_after' parameter to completely remove Ajax Load More functionality after 'n' number of pages.
* NEW - Adding setting to disable dynamic population of category, tag and author content within shortcode builder.
* NEW - Adding functionality to exclude categories('category__not_in').
* NEW - Adding functionality to exclude tags('tag__not_in').
* NEW - Adding option to copy repeater content and update templates from database directly on the Repeater Template settings page.
* NEW - Query by multiple meta query values e.g "cat, dog, fish".
* FIX - Issue with simultaneous query by category and custom taxonomy.
* Fix - Issue for SEO add-on when pause = "true". ALM will now set pause to false if page > 1 when using the SEO add-on.


= 2.4.0 =
* Adding date query parameters - users can now query by day, month and year.
* Admin UX improvements including sticky navigation in shortcode builder.
* Updated ALM examples page with date query and improved archive.php.
* Fixed PHP warning related to hiding Ajax Load More button in editor and Custom Repeaters v1.
* Added language support for Polylang and qTranslate plugins.


= 2.3.1 =
* Urgent fix for array_push error


= 2.3.0 =
* Adding required functionality for ALM SEO add-on (https://connekthq.com/plugins/ajax-load-more/seo/)
* Adding variables for counting items within the ALM query - $alm_page & $alm_item are now accessible within repeater templates.
* Remove plugin activation notification due to error fetching column names.
* Fixed issue with orderby = "rand", ALM now excludes all previously queried post ids.
* fixed JS error on ALM setting pages.
* Fixed issue with hiding TinyMCE button that was affecting other plugins.
* General plugin improvements and enhancements.


= 2.2.8 =
* Adding required functionality for the NEW Ajax Load More Custom Repeaters v2 add-on - https://connekthq.com/plugins/ajax-load-more/custom-repeaters/
* Improved debug messaging for Ajax Load More and Add-Ons.
* Adding fix for ordering by meta value.
* Admin stying updates.
* Updated FAQs
* Fix meta_query query and orderby meta value 


= 2.2.7 =
* Fix for query by Standard post format.
* Fix for Shortcode Builder where Custom Taxonomies were not building correctly.


= 2.2.6 =
* Bug fix for meta_query parameters.
* Further improvements to WordPress query arguments from 2.2.4.
* Update plugin .pot file.

= 2.2.5 =
* Urgent fix for category queries.

= 2.2.4 =
* Improving WordPress query arguments.
* Removing empty query parameters which were conflicting with various hooks and filters reported by ALM users.
* Updated admin notifications.
* Added plugin action links to plugin listing.

= 2.2.3 =
* Adding query by Custom Field value(Meta Query). 
* Improved error handling for easier debugging.
* Fixed issue with pause = "true" and scroll = "true". Pause should always take precendence over scroll. 
* Code clean up, improving overall quality for easier merges and updates.

= 2.2.2 =
* Adding callback function that is dispatched once a successful ajax call is made. $.fn.almComplete(alm). 
* Adding WPML support for ICL_LANGUAGE_CODE - A 'lang' atributed is added dynamically if WPML is installed.
* Making JS variables and functions publically accessible.

= 2.2.1 =
* Fixed php notice/warning that would trigger if WP_DEBUG was enabled. 
* Adding minified core JS.
* Adding global option to disable shortcode button in the content editor.
* Adding touchmove js event for faster scroll detection on mobile devices.
* Code clean up, removing unused functions.

= 2.2.0 =
* Adding Post Format query.
* Adding syntax highlighting for Repeater Templates with CodeMirror (https://codemirror.net/).
* Adding custom alias integration for Repeater Templates (Only for the custom repeater add-on).
* Adding button preview on settings page.
* Adding 'White' button style.
* Updated .pot language file.

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

= 2.0.1 - June 20, 2014 =
* Ajax Load More

== Upgrade Notice ==

* None 


