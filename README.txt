=== WordPress Infinite Scroll - Ajax Load More ===
Contributors: dcooney, connekthq
Donate link: https://connekthq.com/donate/
Tags: infinite scroll, infinite scrolling, scroll, infinite, lazy load, lazy loading, endless scroll, pagination, ajax pagination, ajax, ajax posts, woocommerce, ajax load more, masonry
Requires at least: 4.0
Tested up to: 5.3.2
Stable tag: 5.1.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The ultimate infinite scroll and lazy load solution for your WordPress powered website.

== Description ==

Ajax Load More is the ultimate WordPress infinite scroll plugin for lazy loading posts, single posts, pages, comments and more with Ajax powered queries.

Build complex custom WordPress queries with the Ajax Load More shortcode builder then add the generated shortcode to your page via the content editor or directly into your template files.

Ajax Load More is compatible for endless scrolling with popular eCommerce plugins such as WooCommerce and Easy Digital Downloads.

[Get More Information](https://connekthq.com/plugins/ajax-load-more/)



### Features
* **Shortcode Builder** - Create your own custom Ajax Load More shortcode by adjusting the various WordPress query parameters in our easy-to-use shortcode builder (see Shortcode Parameters).
* **Query Parameters** - Ajax Load More allows you to query WordPress by many different content types. Query by Post Type, Post Format, Date, Category, Tags, Custom Taxonomies, Search Term, Authors and more!
* **Repeater Templates** - Edit and extend the functionality of Ajax Load More by creating your own repeater template to match the look and feel of your website (see screenshots).
* **Multiple Instances** - You can include multiple instances of Ajax Load More on a single page, post or template.
* **Ajax Filtering** - The Ajax Load More [custom filtering](https://connekthq.com/plugins/ajax-load-more/examples/filtering/) method will allow you to filter and update your Ajax query results.
* **Multisite Compatibility** - Manage repeater templates across all sites in your network.
* **Setting Panel** - Customize your version of Ajax Load More by updating various plugin settings.

Check out the **[demo site](https://connekthq.com/plugins/ajax-load-more/)** for more information!




#### What's New
* **[Pro](https://connekthq.com/plugins/ajax-load-more/pro/)** - Access to all premium add-ons in a single installation.
* **[Filters](https://connekthq.com/plugins/ajax-load-more/add-ons/filters/)** - The Filters add-on provides front-end and admin functionality for building and managing Ajax filters.
* **[User Query](https://connekthq.com/plugins/ajax-load-more/add-ons/users/)** - Query and display a list of WordPress users by role using a `WP_User_Query` and Ajax Load More.
* **[Advanced Custom Fields](https://connekthq.com/plugins/ajax-load-more/examples/advanced-custom-fields/)** - Compatibility and integration added for infinite scrolling Flexible Content, Gallery, Relationship and Repeater fields for Advanced Custom Fields.
* **[Masonry](https://connekthq.com/plugins/ajax-load-more/examples/masonry/)** - Built-in support and functionality for Masonry layouts.
* **[Progress Bars](https://connekthq.com/plugins/ajax-load-more/examples/progress-bar/)** - Display a Progress Bar load indicator with each Ajax request.
* **[Scroll Container](https://connekthq.com/plugins/ajax-load-more/examples/scroll-container/)** - Constraining infinite scroll to a parent container.




### Content Types
Ajax Load More can infinite scroll any content type WordPress offers - from blog posts to multipage content to WooCommerce products - Ajax Load More can handle it all.

Check out the examples below:

*   [Standard Posts](https://connekthq.com/plugins/ajax-load-more/examples/default/)
*   [Custom Post Types](https://connekthq.com/plugins/ajax-load-more/examples/masonry/)
*   [Pages](https://connekthq.com/plugins/ajax-load-more/examples/search-results/)
*   [Multipage Posts & Pages](https://connekthq.com/plugins/ajax-load-more/add-ons/next-page/next-page-default/) *
*   [Single Posts](https://connekthq.com/ajax-load-more-posts/alm-post-example/) *
*   [Comments](http://examples.connekthq.com/alm-comments/example-post/) *
*   [Advanced Custom Fields](https://connekthq.com/plugins/ajax-load-more/examples/advanced-custom-fields/)

_*Add-on required_




### Shortcode Parameters

Ajax Load More accepts a number of parameters that are passed to the WordPress query. These parameters are transferred via shortcode - don't worry, creating a custom shortcode is easy with the intuitive [Shortcode Builder](https://connekthq.com/plugins/ajax-load-more/screenshots/#shortcode-builder)

*   **repeater** - Choose a repeater template (<a href="https://connekthq.com/plugins/ajax-load-more/custom-repeaters/">Add-on available</a>). Default = ‘default’
*   **post_type** - Comma separated list of post types. Default = ‘post’
*   **sticky_posts** - Preserve sticky post ordering in Ajax listing. Default = false
*   **post_format** - Query by post format. Default = null
*   **category** - A comma separated list of categories to include by slug. Default = null
*   **category__and** - A comma separated list of categories to include by ID. Default = null
*   **category__not_in** - A comma separated list of categories to exclude by ID. Default = null
*   **tag** - A comma separated list of tags to include by slug. Default = null
*   **tag__and** - A comma separated list of tags to include by ID. Default = null
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
*   **author** - Comma separated list of authors by id. Default = null
*   **post__in** - Comma separated list of post ID’s to include in query. Default = null
*   **post__not_in** - Comma separated list of post ID’s to exclude from query. Default = null
*   **search** - Query search term (‘s’). Default = null
*   **custom_args** - A semicolon separated list of value:pair arguments. e.g. tag_slug__and:design,development; event_display:upcoming. Default = null
*   **post_status** - Select status of the post. Default = 'publish'
*   **order** - Display posts in ASC(ascending) or DESC(descending) order. Default = ‘DESC’
*   **orderby** - Order posts by date, title, name, menu order, author, post ID or comment count.  Default = ‘date’
*   **offset** - Offset the initial query (number). Default = ’0′
*   **posts_per_page** - Number of posts to load with each Ajax request. Default = ’5′
*   **scroll** - Load more posts as the user scrolls the page (true/false). Default = ‘true’
*   **scroll_distance** - The distance from the bottom of the screen to trigger the loading of posts while scrolling. Default = '150'
*   **scroll_container** - Constrain Ajax Load More infinite scrolling to a parent container. Default = null
*   **max_pages** - Maximum number of pages to load while user is scrolling (activated on when scroll = true). Default = '0'
*   **pause_override** - Allow scrolling to override the Pause parameter and trigger the loading of posts on scroll. Default = null
*   **pause** - Do not load posts until user clicks the Load More button (true/false). Default = 'false'
*   **transition** - Choose a posts reveal transition (fade/masonry/none). Default = 'fade'
*   **transition_container** - Display the Ajax Load More (.alm-reveal) loading container. Default = 'true'
*   **transition_container_classes** - Add classes to the `.alm-reveal` transition div.
*   **masonry_selector** - The target classname of each masonry item. Default = null
*   **masonry_animation** - Select a loading transition type for Masonry items. (default/zoom-out/slide-up/slide-down/none). Default = default
*   **masonry_horizontalorder** - Maintain horizontal order. Default = true
*   **images_loaded** - Wait for all images to load before displaying ajax loaded content (true/false). Default = 'false'
*   **destroy_after** - Remove ajax load more functionality after 'n' number of pages have been loaded. Default = null
*   **progress_bar** - Display progress bar indicator at the top of the window while loading Ajax content. Default = 'false'
*   **progress_bar_color** - Enter the hex color of the progress bar. Default = 'ed7070'
*   **button_label** - The label text for Load More button. Default = 'Older Posts'
*   **button_loading_label** - Update the text of the Load More button while content is loading. Default = null
*   **loading_style** - Select an Ajax loading style - you can choose between a Button or Infinite Scroll. Default = null
*   **container_type** - Override the global Container Type that was set on ALM Settings page. Default = null
*   **css_classes** - Add custom CSS classes to the Ajax Load More container. Default = null
*   **id** - A unique ID for the Ajax Load More instance.
*   **nested** - Is this a nested Ajax Load More instance. Default = false
*   **no_results_text** - Display text/html when zero results are returned in an Ajax Load More query. Default = null
*   **placeholder** - Display a placeholder image while Ajax content is being loaded. Default = false

&rarr; [See All Parameters](https://connekthq.com/plugins/ajax-load-more/docs/shortcode-parameters/)


#### Example Ajax Load More Shortcode

    [ajax_load_more post_type="post, portfolio" repeater="default" posts_per_page="5" transition="fade" button_label="Older Posts"]


#### Example Demos

* **[Default](https://connekthq.com/plugins/ajax-load-more/examples/default/)** - Out of the box functionality and styling.
* **[Advanced Custom Fields](https://connekthq.com/plugins/ajax-load-more/examples/advanced-custom-fields/)** - Infinite scroll Advanced Custom Fields data with Ajax Load More.
* **[Attachments](https://connekthq.com/plugins/ajax-load-more/examples/attachments/)** - Endless scroll post attachments.
* **[CSS Grid](https://connekthq.com/plugins/ajax-load-more/examples/css-grid/)** - Rendering Ajax Load More listings with CSS GridRe.
* **[Destroy After](https://connekthq.com/plugins/ajax-load-more/examples/destroy-after/)** - Remove Ajax Load More functionality after 'n' number of pages.
* **[Event Listing](https://connekthq.com/plugins/ajax-load-more/examples/event-listing/)** - Ordering and listing events by custom field date.
* **[Filtering](https://connekthq.com/plugins/ajax-load-more/examples/filtering/)** - Reset and filter an Ajax Load More instance.
* **[Infinite Scroll](https://connekthq.com/plugins/ajax-load-more/examples/infinite-scroll/)** - A look at the new loading functionality and styles.
* **[Images Loaded](https://connekthq.com/plugins/ajax-load-more/examples/images-loaded/)** - Download images before displaying ajax loaded content.
* **[Masonry](https://connekthq.com/plugins/ajax-load-more/examples/masonry/)** - Creating a flexible grid layout with Masonry JS.
* **[Multiple Instances](https://connekthq.com/plugins/ajax-load-more/examples/multiple-instances/)** - Include multiple Ajax Load More' on a single page.
* **[Paging URLs](https://connekthq.com/plugins/ajax-load-more/examples/paging-urls/)** - Generate unique paging URLs for every Ajax Load More query with the SEO add-on.
* **[Pause Loading](https://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Posts will not load until initiated by the user.
* **[Preloaded Posts](https://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Easily preload an initial set of posts before completing any Ajax requests to the server.
* **[Progress Bar](https://connekthq.com/plugins/ajax-load-more/examples/progress-bar/)** - Display a progress bar load indicator with each Ajax request.
* **[Search Results](https://connekthq.com/plugins/ajax-load-more/examples/search-results/)** - Returning results based on search terms.
* **[Scroll Container](https://connekthq.com/plugins/ajax-load-more/examples/scroll-container/)** - Constrain Ajax Load More to a parent container.
* **[SEO & Paging](https://connekthq.com/plugins/ajax-load-more/examples/seo-paging-add-ons/)** - Combine these two add-ons to create one powerful navigation system.
* **[Slideshow Gallery](https://connekthq.com/plugins/ajax-load-more/examples/slideshow-gallery/)** - Create a gallery of posts with Ajax Load More and the Paging add-on.
* **[Table Layout](https://connekthq.com/plugins/ajax-load-more/examples/table/)** - Ajax Load More will display query results in a table format.

&rarr; [See All Examples](https://connekthq.com/plugins/ajax-load-more/examples/)

The [Custom Repeater Add-On](https://connekthq.com/plugins/ajax-load-more/custom-repeaters/) has been installed for use on each of our product demos.

[youtube https://www.youtube.com/watch?v=EQ57i6dkOew]




### Add-ons
 The following [add-ons](https://connekthq.com/plugins/ajax-load-more/add-ons/) are available to increase the functionality of Ajax Load More.

* **[Cache](https://connekthq.com/plugins/ajax-load-more/add-ons/cache/)**: Improve website performance by caching the results of Ajax server requests.
* **[Call to Actions](https://connekthq.com/plugins/ajax-load-more/add-ons/call-to-actions/)**: Extend Ajax Load More with advertisement and call to action content blocks.
* **[Comments](https://connekthq.com/plugins/ajax-load-more/add-ons/comments/)**: Load and display WordPress blog comments using the core Ajax Load More infinite scroll functionality.
* **[Custom Repeaters](https://connekthq.com/plugins/ajax-load-more/add-ons/custom-repeaters/)**: Create, modify and delete repeater templates as you need them with absolutely zero restrictions.
* **[Filters](https://connekthq.com/plugins/ajax-load-more/add-ons/filters/)**: Front-end and admin functionality for creating, managing and displaying Ajax Load More filters.
* **[Layouts](https://connekthq.com/plugins/ajax-load-more/add-ons/layouts/)**: Predefined responsive layouts for Ajax Load More repeater templates.
* **[Next Page](https://connekthq.com/plugins/ajax-load-more/add-ons/next-page/)**: Infinite scroll multipage WordPress content with Ajax Load More and the Next Page add-on.
* **[Paging](https://connekthq.com/plugins/ajax-load-more/add-ons/paging/)**: Replace the default lazy load/infinite scroll functionality of Ajax Load More with a numbered navigation system.
* **[Preloaded](https://connekthq.com/plugins/ajax-load-more/add-ons/preloaded/)**: Load an initial set of posts before sending any Ajax requests to your server.
* **[SEO](https://connekthq.com/plugins/ajax-load-more/add-ons/search-engine-optimization/)**: Generate unique paging URLs with each Ajax Load More query.
* **[Single Post](https://connekthq.com/plugins/ajax-load-more/add-ons/single-post/)**: Enable infinite scrolling of single posts on your WordPress post templates.
* **[Theme Repeaters](https://connekthq.com/plugins/ajax-load-more/add-ons/theme-repeaters/)**: Manage Ajax Load More repeater templates from within your current theme directory.
* **[Users](https://connekthq.com/plugins/ajax-load-more/add-ons/users/)**: Lazy loading WordPress Users with Ajax Load More.




### Extensions
The following [extensions](https://connekthq.com/plugins/ajax-load-more/extensions/) are available to provide compatibility with popular WordPress plugins and core features.

* **[Advanced Custom Fields](https://connekthq.com/plugins/ajax-load-more/extensions/advanced-custom-fields/)**: Display field type data with Ajax Load More.
* **[Relevanssi](https://connekthq.com/plugins/ajax-load-more/extensions/relevanssi/)**: Display Relevanssi search results with Ajax Load More.
* **[REST API](https://connekthq.com/plugins/ajax-load-more/extensions/rest-api/)**: Enable compatibility with the WordPress REST API.
* **[SearchWP](https://connekthq.com/plugins/ajax-load-more/extensions/searchwp/)**: Display SearchWP query results with Ajax Load More.




### Callback Functions
The following [functions](https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/) are available to be dispatched by Ajax Load More.


**Complete** - The almComplete() function is triggered after every *successful* ajax call made by Ajax Load More.

    almComplete = function(alm){
    	// Your on complete code goes here
    };


**Destroyed** - The almDestroyed() function is dispatched after the destroy_after shortcode parameter is triggered.

    almDestroyed = function(alm){
    	console.log('"Ajax Load More functionality has been destroyed!');
    };


**Done** - The almDone() function is triggered after all posts have been loaded.

    almDone = function(alm){
    	console.log('All posts have been loaded!');
    };

**Empty** - The almEmpty() function is triggered if there are zero results returned in the initial query.

    almEmpty = function(alm){
       console.log('Sorry, but we could not locate any posts that matched your criteria.');
    };

**Filter Complete** - The almFilterComplete() function is triggered after a successful call to the public function almFilter().

    almFilterComplete = function(){
        console.log('Ajax Load More filter has completed!');
    };


**URL Update** - The almUrlUpdate() function is triggered after a successful URL update (pushState) from the Single Post or the Search Engine Optimization add-on

    almUrlUpdate = function(permalink, type){
        console.log("URL updated to " + permalink + '- dispatched from the '+ type + ' add-on.');
    };

***

&rarr; [View All Callback Functions](https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/)




### Filter Hooks

Ajax Load More has a variety of WordPress [filters](https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/) in place that enable users to hook into Ajax Load More to insert or modify data.

&rarr; [See All Filters](https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/)




### Variables

Ajax Load More passes the following PHP **[variables](https://connekthq.com/plugins/ajax-load-more/docs/variables/)** to each repeater template - these template variables can help you style and transform your repeater templates.

*   **$alm_current** - Returns the current item number in the current Ajax Load More loop and will reset to zero with every 'Load More' action.
*   **$alm_page** - Returns the current page number.
*   **$alm_item** - Returns the current item number within your loop.
*   **$alm_found_posts** - Returns the total number of posts found within the entire WordPress query.




### Plugin Links
* [Official Website](https://connekthq.com/ajax-load-more/)
* [Documentation](https://connekthq.com/plugins/ajax-load-more/docs/)
* [Premium Add-ons](https://connekthq.com/plugins/ajax-load-more/add-ons/)
* [Free Extensions](https://connekthq.com/plugins/ajax-load-more/extensions/)
* [Github](https://github.com/dcooney/wordpress-ajax-load-more/)




### Please Review Ajax Load More!

Your reviews make a big difference! Please consider taking the time to [review my plugin](https://wordpress.org/support/view/plugin-reviews/ajax-load-more). Your ratings and reviews help the plugin grow and provide the motivation needed to keep pushing it forward.

&rarr; [Leave a Review](https://wordpress.org/support/plugin/ajax-load-more/reviews/#new-post)




== Frequently Asked Questions ==


= What are the steps to getting Ajax Load More to display on my website =

1. Create your shortcode
2. Add the shortcode to your page, by adding it through the content editor or placing it directly within one of your template files.
3. Load a page with your shortcode in place and watch Ajax Load More fetch your posts.

&rarr; [Read the Implementation Guide](https://connekthq.com/plugins/ajax-load-more/docs/implementation-guide/)

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

= Which browsers are supported? =

* Firefox (Mac, PC, iOS)
* Chrome (Mac, PC, iOS, Android)
* Safari (Mac, iOS)
* Opera
* Android
* IE11+


= How Can You Contribute? =
Issues and pull requests can be submitted via [GitHub](https://github.com/dcooney/wordpress-ajax-load-more).

***


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

= 5.1.8 = March 2, 2020 = 

UPGRADE NOTICE
This release updates the default text for users who implemented [Results Text](https://connekthq.com/plugins/ajax-load-more/examples/results-text/).
[New variables](https://connekthq.com/plugins/ajax-load-more/docs/results-text/) have been added to this feature and the default text has changes from `Displaying {num} of {total}.` to `Viewing {post_count} of {total_posts} results.`.
If you wish to revert this update, you can with the `alm_display_results` [filter](https://connekthq.com/plugins/ajax-load-more/docs/results-text/#filter-hooks).

* NEW - Added rtl (right to left) support for the default ALM Repeater Template. Add `.rtl` to the container to align items right to left. Use `css_classes="rtl"` in a shortcode or globally via ALM settings. 
* NEW - Added `archive="true"` parameter that will automatically pull content on archive pages - taxonomy, category, tag, date (year, month, day) and authors are currently supported. [View Docs](https://connekthq.com/plugins/ajax-load-more/docs/archives/)
* NEW - Added `woocommerce="true"` parameter that will automatically pull product content on woocommerce pages - [docs](https://connekthq.com/plugins/ajax-load-more/docs/woocommerce/) coming soon on this new integration.
* UPDATE - Updated [Results Text](https://connekthq.com/plugins/ajax-load-more/docs/results-text/) to include post_count and total_posts. 
* UPDATE - Updated time of filter transitions. In some cases users were reporting issues of double clicks causing no results to be returned.
* FIX - Fixed almComplete callback not firing when zero results are returned in Ajax.   
* FIX - Fixed issue with JavaScript not triggering in Repeater Templates used with Paging add-on. 


= 5.1.7.2 = January 25, 2020 = 
* NEW - Added support for percentage values in `scroll_distance`. Users can now trigger Ajax requests based on the percentage height of their browsers. e.g. `scroll_distance="-50%"`
* NEW - Added `alm_query_after_{id}` filter to allow for modification of the returned query.
* NEW - Added new `alm_id` parameter for the `WP_Query` that allows for easier access of query args using `pre_get_post` using the Ajax Load More ID.
```
add_action( 'pre_get_posts', 'my_custom_category' );
function my_custom_category( $query ) {	
	if ( isset($query->query['alm_id']) && $query->query['alm_id'] === 'preloaded' ) {
		$query->set( 'category_name', 'design' );
	}
}
```
* FIX - Added fix for Masonry functionality triggering callbacks to early.
* FIX - Fixed issue with placeholder value in Shortcode Builder.
* UPDATE - Updated the look and feel of the Shortcode Builder.


= 5.1.7.1 - December 9, 2019 =
* FIX - Hotfix to remove JavaSscript error/warning message for Single Posts and Next Page add-on users.


= 5.1.7 - December 6, 2019 =
* NEW - Added support for multiple instances on ALM Masonry on the same page.
* NEW - Added `CTRL+S` and `CMD+S` support for saving Repeater Templates in the Ajax Load More admin :)
* NEW - Added built-in support for Elementor using the `elementor="true"` shortcode parameter. [View Blog Post](https://connekthq.com/elementor-infinite-scrolling/)
* FIX - Fixed issue where loading `placeholder` would remain on screen if no results were found.
* FIX - Added fix for Safari desktop moving browser window when an instance of ALM is filtered.
* FIX - Fixed error in PHP 7.2.2 in the `plugin_action_links_` filter related to a string array.
* UPDATE - Added functionality to get the current post ID is not specified in the shortcode for Single Posts and Next page add-ons.
* UPDATE - Updated Code Mirror code editor for Repeater Templates.
* UPDATE - Improved admin UI and UX.


= 5.1.6.1 - November 19, 2019 =
* NEW - Added new `placeholder` parameter that allows users to display a placeholder image while Ajax content is being loaded. [View Example](https://connekthq.com/plugins/ajax-load-more/examples/placeholder/).
* FIX - Fixed issue with deep linking URLs in the filters add-on not sending user to correct location on the page.
* FIX - Fixed issue with HTML elements in `no_results_text` being rendered as plain text.
* UPDATE - Updated admin CSS to match WordPress 5.3.
* UPDATE - Improved license expiration notices and renewal links.
* UPDATE - Updated `alm_canonical_url` filter. This filter now requires the ALM ID to be added into the filter. `alm_canonical_url_{id}` like the other filter hooks.


= 5.1.6 - October 22, 2019 =
* NEW - Added support for ACF Sub Fields in the [ACF extension](https://connekthq.com/plugins/ajax-load-more/extensions/advanced-custom-fields/).
* FIX - Fixed issue with ALM not starting if the global settings were not saved previously 😔.
* UPDATE - Improved the functionality of the [alm_debug](https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug) filter hook. Query args are now displayed in the browser console under it's own entry.


= 5.1.5 - October 1, 2019 =
* NEW - Added new `loading_style` parameter that allows users to override the global button style at the shortcode level.
* NEW - Added mousewheel detection, 'end' and 'page down' keyup listeners for loading posts. In some rare cases users would not be able to load posts unless the user scroll back up the page. This will hopefully solve that issue.
* UPDATE - Improved plugin accessibility and focus states.
* UPDATE - Improved admin UI of license updates and expiration notifications.
* FIX - Fixed issue with `no_results_text` not displaying for some users.
* FIX - Fixed issue with table data not rendering correctly in Ajax results.
* FIX - Added fix for `meta_value` not working if set to `0` in a Meta_Query.
* FIX - Fixed issue with focus not being set on Ajax Load More after a filter method.
* FIX - Fixed posisble issue with ALM continuously loading posts when using SEO/Next Page or Single Posts addon.
* FIX - Fixed issue in ALM admin with filename adding single quotes when exporting a Repeater Template from inside the ALM admin.


= 5.1.4 - August 15, 2019 =
* NEW - Added No Results Text(`no_results_text`) parameter to display text/html when zero results are returned in an Ajax Load More query.
* NEW - Added `almOnChange` callback dispatch at the beginning of every Ajax Load More query.
* NEW - Added `almOnLoad` callback dispatched when Ajax Load More initiates.


= 5.1.3 - August 6, 2019 =
* FIX - Fixed issue with tag archives when using WPML or Polylang translation plugins.
* FIX - Fixed issue with deep link pagination in the [SEO](https://connekthq.com/plugins/ajax-load-more/add-ons/search-engine-optimization/) and [Filters](https://connekthq.com/plugins/ajax-load-more/add-ons/filters/) addon when adding HTML comments or empty whitespace to the start/end of Repeater Template
* UPDATE - Updated SEO `<noscript/>` markup to include First and Last pagination links for search crawlers.
* UPDATE - Admin UI/UX updates.


= 5.1.2 - June 24, 2019 =
* NEW - Added direct WooCommerce integration using the `woocommerce` shortcode parameter. Blog post and docs coming soon how to use this new parameter with archive and product listing pages.
* FIX - Fixed issue with element scroll and auto-focus in iOS and Android devices.
* UPDATE - Removing REST API code introduced in 5.1 that caused issues for some users. Please make sure you clear your site cache and any combined JavaScript.


= 5.1.1 - May 29, 2019 =
* NEW - Added new `ALM_DISABLE_REPEATER_TEMPLATES` PHP constant that prevents ALM from creating the default Repeater Template or storing template data in your database. To use this feature, add the following to your `wp-config.php` in the root of your site: `define('ALM_DISABLE_REPEATER_TEMPLATES', true);`.
* UPDATE - Removed REST API settings from admin/admin.php and ajax-load-more.php.
* UPDATE - Better error reporting for failed Ajax requests.
* UPDATE - Updated the scroll trigger from the Load More `<button class="button"/>` to the button wrap `<div class="alm-btn-wrap/>`. This is because many users were setting `display: none;` on the button directly and that caused loading issues.
* FIX - FIxed issue with ALM not maintaining past page scroll position when a user hits the browser back button.
* FIX - Security fix for $querystring URLs in Preloaded content.
* FIX - Fixed issue with nested `.alm-preloaded` div elements with Filters and Preloaded addon.
* FIX - Fixed issue with alm_render function throwing non static function warning message.
* FIX - Fixed JS console warning message abut duplicate `babel/polyfill scripts` for users running other versions of Babel.
* FIX - Fixed `srcSet` issue with paged results in Filters and SEO addon when using Safari browser.


= 5.1.0.1 - May 7, 2019 =
* UPDATE - After the 5.1.0 launch I discovered an issue with the REST API and WooCommerce. I have reverted the default REST API Usage until I can sort this out. 😢


= 5.1.0 - May 7, 2019 =
MAJOR UPDATE NOTICE
Ajax Load More can now use the WordPress REST API as the default for Ajax requests - this includes all add-ons and extensions.
Users that wish to continue using `admin-ajax.php` for Ajax requests can disable the REST API from  `Ajax Load More > Settings > Global Settings` in your WordPress admin.

For backwards compatibility, all users running WordPress version 4.7 or lower will default to using `admin-ajax.php`.

Please update all your add-ons and extensions when you update Ajax Load More as this release contains breaking changes.

What's New in 5.1.0
* NEW - ALM now uses the REST API for all Ajax queries 👏. This includes all add-ons and extensions.
* NEW - Added new Results Text display for displaying the current page number to users. [view example](https://connekthq.com/plugins/ajax-load-more/examples/results-text/)
* NEW - Added custom JavaScript fix for reply links in Comment query causing page refresh.
* NEW - Added custom WP_Query parameter, `alm_query` that can be used in hooks/filters to modify the current query.
* UPDATE - Added `aria` attributes and focus position after Ajax load to improve plugin accessibility.
* FIX - Fixed issue with images not displaying in Safari when `transition_container="false"` is set.
* FIX - Fixed issue where Load More button was not hiding after `destory_after` value was reached.
* FIX - Fixed issue with `meta_value` shortcode parameter. Passing zero as a value was returning false and not the number.
* FIX - Fixed IE11 issue where filtering was not working with camelCase data attributes.


= 5.0.2 - April 4, 2019 =
* NEW - `alm_shortcode_defaults` filter.
* NEW - `Added `alm_settings` filter.
* FIX - Added custom Safari polyfill for srcset img height issue with Masonry and ImagesLoaded.
* FIX - Fixed issue with encoding URLs in HTTP Ajax request.
* FIX - Fix for undefined labels in Shortcode Builder.
* FIX - Fixed issue with HTML comments in repeater templates causing issues with Masonry.


= 5.0.1 - March 13, 2019 =
* FIX - Fixed issue with Masonry not working when empty whitespace was present in a Repeater Template.
* FIX - Fixed issue with innerHTML and appendChild not trigger JavaScript present in Repeater Templates.


= 5.0.0 - March 8, 2019 =

MAJOR UPDATE NOTICE
All users running the Filters, SEO, Paging or Next Page add-ons MUST also update each of these plugins when running this 5.0 update.
Failing to upgrade the add-ons may result in JavaScript errors or broken functionality. It's always best to also backup your site prior to updating.

If you are using one of the add-ons listed above and you do not see a plugin update notification, please hold off on updating until prompted. Or try installing [Force Plugin Updates Check](https://wordpress.org/plugins/force-plugin-updates-check/) to force the plugin cache to clear.


Callback Functions
ALL [callback](https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/) functions have been updated to remove legacy jQuery `$.fn()` prototype properties.
Users are encouraged to update their current callbacks to the new methods, but for now can autoload a helper JS file that has these legacy callbacks in place.
To maintain the legacy callbacks, visit Ajax Load More > Settings > Legacy Callbacks to enable the library.


What's New in 5.0.0
* NEW - Removing jQuery dependancy. Ajax Load More and all the add-ons plugins have been completely rewritten in Vanilla JS and ES6. 🎉
* NEW - Added [ImagesLoaded](https://imagesloaded.desandro.com/) library in place of WaitForImages for `images_loaded` param.
* NEW - Nested Ajax Load More instances will now auto-trigger on load.
* UPDATE - Updated build process from Gulp to Webpack.
* UPDATE - Added JS polyfills for various IE 11, 10 and 9 issues.
* UPDATE - Added ALM ID to `alm_nextpage_query` for Next page users.
* Fix - Fixed issue with `querySelector` on button element when using nested ALM instances.
* FIX - Removed duplicate `transition_container_classes` when using Paging add-on.
* FIX - Fixed issue with `alm-listing` container causing an error with the Comments addon.
* FIX - Added fix for `destroy_after` not triggered button `.done` class.
* Fix - Various JS other fixes and UX improvements.


= 4.0 - November 5, 2018 =
* NEW - Introducing [Ajax Load More Pro](https://connekthq.com/plugins/ajax-load-more/pro/)! Access to every Ajax Load More add-on in a single installation.
* NEW - Adding `category__and` and `tag__and` support for querying categories and tags.
* UPDATE - Adding fix for permission error on repeater template directory by replacing `mkdir()` with WordPress core function `wp_mkdir_p`.
* FIX - Fixed issue with Filters onComplete functions triggering before Ajax results were rendered on the screen.
* FIX - Adding fix for `alm_get_canonical_url` function when getting URLs of child category and tag archives.

...

= 2.0.1 - June 20, 2014 =
* Ajax Load More

== Upgrade Notice ==

* None
