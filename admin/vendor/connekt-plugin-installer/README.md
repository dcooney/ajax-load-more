# wordpress-plugin-installer

The **Connekt Plugin Installer** is a class for displaying a list of recommended or related plugins inside of the WordPress admin.

The installer displays a list of plugins that users can easily install and activate from the screen they are currently viewing.

![Connekt Plugin Installer Example](http://examples.connekthq.com/_gif/plugin-installer_2.gif)

This is a perfect tool for plugin and theme developers who want to make it as easy as possible for users to install recommended or related plugins.

To see a live example, install a copy of [Ajax Load More](https://wordpress.org/plugins/ajax-load-more/) and go to the Extensions section.

***

## Getting Started

To get started, you'll simply need to load and initialize the class. The installer provides the required CSS and JS for display and functionality.

### Class Loader

First step is to load the class into your plugin or theme. This would typically appear in `functions.php` or in the `_construct` of your plugin Class.

```php
include_once('vendor/connekt-plugin-installer/class-connekt-plugin-installer.php');
```

### Display

Next, build an array of plugin slugs and pass the array to the `init` method for display.

```php
$plugins = [
  [
    'slug' => 'ajax-load-more',
  ],
  [
    'slug' => 'block-manager',
  ],
  [
    'slug' => 'instant-images'
  ],
  [
    'slug' => 'easy-query'
  ]
]; 

if( class_exists( 'Connekt_Plugin_Installer' ) ) {
  Connekt_Plugin_Installer::init( $plugins );
}
```

And that's it. Happy coding :)

***

## Notes

- Plugins _must_ be available on the wordpress.org plugin repository to be installed and activated using this class.
- Using this class outside of the plugins directory will require modification to the `CNKT_INSTALLER_PATH` constant for loading assets. You can define this constant in `functions.php` prior to loading the class. `define('CNKT_INSTALLER_PATH', get_template_directory_uri() .'/vendor/connekt-plugin-installer/')`;

## Changelong

1.0.1 - Janaury 16, 2025

- UPDATE: Code cleanup and PHPCS fixes.
- FIX: Fixed issue with broken layout if wordpress.org thumbnail not available.

## License

The code is available under the [GPLv2 license](https://github.com/dcooney/wordpress-plugin-installer/blob/master/LICENSE)
