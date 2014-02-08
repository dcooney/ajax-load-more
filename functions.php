<?php
/*
 * WordPress Ajax Load More
 * https://github.com/dcooney/wordpress-ajax-load-more
 *
 * Copyright 2014 Connekt Media - http://cnkt.ca/ajax-load-more/
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Author: Darren Cooney
 * Twitter: @KaptonKaos
*/

/*-----------------------------------------------------------------------------------*/
/*	Example of registering our WP Ajax Load More scripts
/*-----------------------------------------------------------------------------------*/

if( !function_exists( 'enqueue_scripts' ) ) {
    function enqueue_scripts() {
    	//Register our JS
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', true);		
		wp_register_script('ajax-load-more', get_template_directory_uri() . '/ajax-load-more/js/ajax-load-more.js', 'jquery', '1.0', true);
		// Enqueue CSS
		wp_enqueue_style( 'ajax-load-more-css', get_template_directory_uri() . '/ajax-load-more/css/ajax-load-more.css' );

        // Enqueue our scripts
    	wp_enqueue_script('jquery');
    	wp_enqueue_script('ajax-load-more');	    	
    }
    
    add_action('wp_enqueue_scripts', 'enqueue_scripts');
}
