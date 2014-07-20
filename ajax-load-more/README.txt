=== Ajax Load More ===
Contributors: dcooney
Donate link: http://connekthq.com/donate/
Tags: ajax, query, loop, paging, filter, jquery, shortcode builder, shortcode, search, tags, category
Requires at least: 3.6
Tested up to: 3.9.1
Stable tag: 2.1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Ajax Load More is simple solution for lazy loading your WordPress posts and pages with Ajax.

== Description ==

Ajax Load More is a simple yet powerful solution for lazy loading WordPress posts and pages with Ajax.
Build complex WordPress queries using our shortcode builder then add the shortcode to your pages via the content editor or directly into your template files.
 


= Features =

* **Shortcode Builder** - create your own Ajax Load More shortcode by adjusting the various WordPress query parameters (see Shortcode Parameters).
* **Query Parameters** - You can query WordPress for so many different content types it may be difficult to keep track! Query by Post type, Category, Tags, Custom Taxonomies, Search Term, Authors and more!!
* **Customizable Repeater Templates** - edit and extend the functionality of Ajax Load More by adjusting the repeater template (see screenshots).
* **Setting Panel** - Customize your version of Ajax Load More by updating various plugin settings (see screenshots).

Check out the **[demo site](http://connekthq.com/plugins/ajax-load-more/)** for more information!



= Shortcode Parameters =

Ajax Load More accepts a number of paramaters to pass to the WordPress query. These parameters are passed via shortcode - don't worry, creating your shortcode is simple with our Shortcode Builder.
 
*   **repeater** - select from a list of customizable repeaters (Add-on available)
*   **post_type** - comma seperated list of post types to query
*   **category** - query by category slug
*   **taxonomy** - query by custom taxonomy
*   **taxonomy_terms** - comma seperated list of custom taxonomy terms(slug) to query
*   **taxonomy_operator** - Operator to test (IN/NOT IN)
*   **author** - query by author id
*   **search** - query search term ('s') 
*   **order** - order posts ASC(ascending) or DESC(descending) order
*   **orderby** - order posts by date, title, name, menu order, random, author, post ID or comment count
*   **exclude** - comma separated list of post ID's to exclude from query. 
*   **offset** - offset the initial query (number).
*   **posts_per_page** - number of posts to load with each request
*   **scroll** - load more posts as the user scrolls the page (true/false)
*   **max_pages** - maximum number of pages to load while scrolling (only if scroll == true)  
*   **pause** - do not load posts until user clicks load button (true/false) 
*   **transition** - select a loading transition from the drop menu (slide/fade) 
*   **button_label** - customize the Load More button label



= Example Shortcode =

    [ajax_load_more post_type="post, portfolio" repeater="default" posts_per_page="5" transition="fade" button_label="Older Posts"]
    
= Demos =
* **[Default](http://connekthq.com/plugins/ajax-load-more/)** - Out of the box functionality and styling
* **[Fade Transition](http://connekthq.com/plugins/ajax-load-more/examples/fade-transition/)** - Elements fade in as posts are loaded
* **[Pause Loading](http://connekthq.com/plugins/ajax-load-more/examples/pause-loading/)** - Posts will not load until initiated by the user

*The [Custom Repeater Add-On](http://connekthq.com/plugins/ajax-load-more/custom-repeaters/) has been installed for use on each of our product demos*



= Add-ons =

The following Add-ons are available to increase the functionality of Ajax Load More.

**Custom Repeaters**

The **[Custom Repeaters](http://connekthq.com/plugins/ajax-load-more/custom-repeaters) add-on will add five additional customizeable repeater templates and allow you to select unique templates for different content types throughout your theme.
[Get More Information](http://connekthq.com/plugins/ajax-load-more/custom-repeaters)


= Tested Browsers =

* Firefox (mac + pc)
* Chrome (mac + pc)
* Safari (mac)
* IE8+
* iPhone (Safari, Chrome)
* Android (Native + Chrome)
* BB10



= Website =
http://connekthq.com/ajax-load-more/



= Please Rate Ajax Load More! =

Your ratings make a big difference! If you like and use Ajax Load More, please consider taking the time to [rate my plugin](http://wordpress.org/support/view/plugin-reviews/ajax-load-more). Your ratings and reviews will help this plugin grow and provide the motivation needed to keep pushing it forward.



== Frequently Asked Questions ==


= What are my server requirements? =

Your server must be able to read/write/create files. Ajax Load More creates the default repeater on plugin activation and in order to modify the output you are required to write to the file as well. 

= Is the ajax functionality secure? =

Yes, Ajax Load more uses admin-ajax and nonces in order to protect URLs and forms from being misused.

= Can I make modifications to the plugin code? =

Sure, but please be aware that if modifications are made it may affect future updates of the plugin.

= Can I modify the repeater template? =

Yes, visit the Repeater Template area in the WordPress admin.

= What are the steps to getting Ajax Load More to display on my website =

1. Create your shortcode
2. Add the shortcode to your page, by adding it through the content editor or placing it directly within one of your template files.
3. Load a page with your shortcode in place and watch Ajax Load More fetch your posts. 

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
2. The collection of available repeaters
3. Shortcode Builder (Admin screen)
4. Shortcode Builder (Page Edit screen)
5. Content Editor shortcode icon
6. Shortcode and implementation examples

== Changelog ==

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

== Upgrade Notice ==

* None 


