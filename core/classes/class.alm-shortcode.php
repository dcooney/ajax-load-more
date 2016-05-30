<?php
/**
 * Ajax Load More shortcode
 *
 * Returns the [ajax_load_more] shortcode.
 *
 * @author   Darren Cooney
 * @since    2.10.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( !class_exists('ALM_SHORTCODE') ):
   
   class ALM_SHORTCODE {
      
      
      static $counter = 0;      
      
      
      /**
	    * alm_render_shortcode
	    * 
   	 * Parse & Render ALM Shortcode.
   	 *
   	 * @since 2.10.1
   	 * @return $ajaxloadmore
   	 */
   	 
      public static function alm_render_shortcode($atts){
         
         global $post;
                  
   		$options = get_option( 'alm_settings' );  		
   		self::$counter++;   		
   		
   		// Define page slug
   		$slug = '';
   		if(!is_archive()){
   			// If not an archive page, set the post slug
   			if(is_front_page() || is_home()){
   				$slug = 'home';
   			}else{
   			   $slug = $post->post_name;
            }
   		}
   		
   		// Custom CSS for Layouts - Only run this once.
   		if(has_action('alm_layouts_custom_css')){
      		do_action('alm_layouts_custom_css', self::$counter);   		
         }
   		
   		extract(shortcode_atts(array(
   			'restapi' => false,
   			'restapi_base' => '/wp-json',
   			'restapi_namespace' => 'ajaxloadmore',
   			'restapi_endpoint' => 'posts',
   			'restapi_template_id' => '',
   			'restapi_debug' => false,
   			'comments' => false,
   			'comments_per_page' => '5',
   			'comments_type' => 'comment',
   			'comments_style' => 'ol',
   			'comments_template' => 'none',
   			'comments_callback' => '',
   			'comments_post_id' => 'null',
      		'previous_post' => false,
      		'previous_post_id' => 'null',
      		'previous_post_taxonomy' => '',
   			'cache' => 'false',		
   			'cache_id' => '',	
   			'paging' => 'false',
   			'paging_controls' => 'false',
   			'paging_show_at_most' => '7',
   			'paging_classes' => '',
   			'preloaded' => 'false',
   			'preloaded_amount' => '5',
   			'seo' => 'false',
   			'repeater' => 'default',
   			'theme_repeater' => 'null',
   			'alternate' => false,
   			'alternate_sequence' => '',
   			'alternate_sequence_max' => '0',
   			'alternate_repeater' => 'null',
   			'alternate_theme_repeater' => 'null',
   			'post_type' => 'post',
   			'post_format' => '',
   			'category' => '',	
   			'category__not_in' => '',	
   			'tag' => '',
   			'tag__not_in' => '',
   			'taxonomy' => '',
   			'taxonomy_terms' => '',
   			'taxonomy_operator' => '',	
   			'taxonomy_relation' => '',	
   			'meta_key' => '',
   			'meta_value' => '',
   			'meta_compare' => '',
   			'meta_relation' => '',
   			'meta_type' => '',
   			'year' => '',
   			'month' => '',
   			'day' => '',
   			'author' => '',
   			'search' => '',					
   			'custom_args' => '',				
   			'post_status' => '',					
   			'order' => 'DESC',
   			'orderby' => 'date',
   			'post__in' => '',
   			'post__not_in' => '',
   			'exclude' => '',
   			'offset' => '0',
   			'posts_per_page' => '5',
   			'scroll' => 'true',
   			'scroll_distance' => '150',
   			'max_pages' => '5',
   			'pause_override' => 'false',
   			'pause' => 'false',
   			'destroy_after' => '',
   			'transition' => 'slide',
   			'transition_speed' => '250',
   			'transition_container' => 'true',
   			'images_loaded' => 'false',
   			'button_label' => apply_filters('alm_button_label', __('Older Posts', 'ajax-load-more')),
   			'button_loading_label' => '',	
   			'container_type' => '',	
   			'css_classes' => '',		
   		), $atts));
   
   		
   		// Enqueue core Ajax Load More JS   	     	
      	wp_enqueue_script( 'ajax-load-more' );	       			
   		
   		// Enqueue add-on JS   		
   		if(has_action('alm_seo_installed') && $seo === 'true'){
      		wp_enqueue_script( 'ajax-load-more-seo' );
   		}   		
   		if(has_action('alm_paging_installed') && $paging === 'true'){
      		wp_enqueue_script( 'ajax-load-more-paging' );
         }         
         if(has_action('alm_prev_post_installed') && $previous_post === 'true'){
      		wp_enqueue_script( 'ajax-load-more-previous-post' );            
         }       
         if(has_action('alm_layouts_installed')){
      		//wp_enqueue_script( 'ajax-load-more-layouts' );  // Not yet :)           
         }
   					
         if($previous_post === 'true')
            $previous_post === true;  
   		
   		if($seo === "true" || $previous_post)				
            $transition_container = "true";
         
         if($restapi === 'true'){
            $restapi = true;  
            
            $preloaded = false;
         }
          
         // Get container elements (ul | div)
         
   		$container_element = 'ul';
   		if($options['_alm_container_type'] == '2' || $previous_post)
   			$container_element = 'div';
   			
   		// override shortcode param	
   		if($container_type){ 
      		$container_element = $container_type;
   		}
   		
   		// Previous post override
   		if($previous_post){
      		$posts_per_page = 1;
   			$container_element = 'div';
   		}
   		
   		// Comments
   		if($comments === 'true'){
   			$container_element = $comments_style;
   		}         
   		
   		// Get extra classnames
   		$classname = '';
   		if(isset($options['_alm_classname']))
   			$classname = ' '.$options['_alm_classname'];
   		
   		// Get button color
   		$btn_color = '';
   		if(isset($options['_alm_btn_color']))
   			$btn_color = ' '.$options['_alm_btn_color'];
   		
   		// Get paging color
   		$paging_color = '';
   		if(isset($options['_alm_paging_color']) && has_action('alm_paging_installed'))
   			$paging_color = ' paging-'.$options['_alm_paging_color'];
   		
   		// Get Layouts activated
   		$alm_layouts = '';
   		if(has_action('alm_layouts_installed'))
   			$alm_layouts = ' alm-layouts';
   		
   		// Get btn classnames
   		$button_classname = '';
   		if(isset($options['_alm_btn_classname']))
   			$button_classname = $options['_alm_btn_classname'];
   		
   		
   		// Language support   		
   		$lang = defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : ''; // WPML - http://wpml.org   		
   		if (function_exists('pll_current_language')) // Polylang - https://wordpress.org/plugins/polylang/
   		   $lang = pll_current_language();   		   
         if (function_exists('qtrans_getLanguage')) // qTranslate - https://wordpress.org/plugins/qtranslate/
   		   $lang = qtrans_getLanguage();  
         
   		$wp_posts_per_page = get_option( 'posts_per_page' ); // Posts per page	- settings -> reading
   		
   		/* If $wp_posts_per_page > than shortcode value then $posts_per_page to $wp_posts_per_page */
   		if(has_action('alm_seo_installed') && $wp_posts_per_page > $posts_per_page && $seo === 'true')
      		$posts_per_page = $wp_posts_per_page;  
      	
      	
      	$paging_container_class = '';      	
      	if($paging === 'true'){
         	$paging_container_class = ' alm-paging-wrap';         	
         	$preloaded = "false";         	
         }
             				   	
   		
   		// Start ALM object   		
   		$ajaxloadmore = '';   				
   				
         $ajaxloadmore .= apply_filters('alm_before_container', ''); // ALM Core Filter Hook
         
         // Build canonical URL
         // - Check the page/post type and then get the correct base url for the page.
         
         // Date
         if(is_date()){
            // Is archive page
            $archive_year = get_the_date('Y');
            $archive_month = get_the_date('m');
            $archive_day = get_the_date('d');            
            if(is_year()){
              $canonicalURL = get_year_link( $archive_year );
            }
            if(is_month()){
              $canonicalURL = get_month_link( $archive_year, $archive_month );
            }
            if(is_day()){
              $canonicalURL = get_month_link( $archive_year, $archive_month, $archive_day );
            }            
         }
         // Frontpage
         elseif(is_front_page()){
            $canonicalURL = get_home_url().'/';
         }
         // Home (Blog Default)
         elseif(is_home()){
            $canonicalURL = get_permalink(get_option('page_for_posts'));
         }
         // Category
         elseif(is_category()){
            $cur_cat_id = get_cat_id( single_cat_title('',false) );
            $canonicalURL = get_category_link($cur_cat_id);
         }
         // Tag
         elseif(is_tag()){
            $cur_tag_id = get_query_var('tag_id');
            $canonicalURL = get_tag_link($cur_tag_id);
         } 
         // Author
         elseif(is_author()){
            $author_id = get_the_author_meta('ID');
            $canonicalURL = get_author_posts_url($author_id);
         } 
         // Taxonomy
         elseif(is_tax()){
            $tax_term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy' ));
            $tax_id = $tax_term->term_id;
            $canonicalURL = get_term_link($tax_id);
         }
         // post_type
         elseif(is_post_type_archive()){
            $post_type_archive = get_post_type();
            $canonicalURL = get_post_type_archive_link($post_type_archive);            
         }       
         else{            
            $canonicalURL = get_permalink();
         } 
          // End build canonical URL
          
         
         // ALM Wrapper 		
   		$ajaxloadmore .= '<div id="ajax-load-more" class="ajax-load-more-wrap'. $btn_color .''. $paging_color .''. $alm_layouts .'" data-id="" data-canonical-url="'. $canonicalURL .'" data-slug="'. $slug .'">';
   		
   		
   		// Previous Post
   		// - Set other add-on params to false
   		if($previous_post){
      		$preloaded = false;
      		$seo = false;
      		$paging = false;
      		$cache = false;
      		$comments = false;
   		}
   		
   		// Comments
   		// - Set other add-on params to false
   		if($comments){
      		$previous_post = false;
      		//$preloaded = false; // Fixed in Comments v1.1
      		$seo = false;
      		$paging = false;
      		$cache = false;
   		}
   		
   		
   		
   		// ********************************
   		// Preloaded Add-on
   		// Retreive preloaded posts and append to ajax load more object
   		if(has_action('alm_preload_installed') && $preloaded === 'true'){   
   		   
   		   $preloaded_output = '';
   		   $preload_offset = $offset;
   		   
   		   // If SEO, set $preloaded_amount to $posts_per_page
   		   if(has_action('alm_seo_installed') && $seo === 'true'){
   		      $preloaded_amount = $posts_per_page; 
            }
            
   		   // If Paging, set $preloaded_amount to $posts_per_page
            if($paging === 'true'){
   		      $preloaded_amount = $posts_per_page; 
   		      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
   		      if($paged > 1){
      		      $preload_offset = $preloaded_amount * ($paged-2);
   		      }
            }    
            
      		$preloaded_arr = array( // Create preload data array
         		'comments'           => $comments,
      			'comments_per_page'  => $comments_per_page,
      			'comments_type'      => $comments_type,
      			'comments_style'     => $comments_style,
      			'comments_template'  => $comments_template,
      			'comments_callback'  => $comments_callback,
      			'comments_post_id'   => $comments_post_id,
         		'post_type'          => $post_type,
         		'post_format'        => $post_format,
         		'category'           => $category,
         		'category__not_in'   => $category__not_in,
         		'tag'                => $tag,
         		'tag__not_in'        => $tag__not_in,
         		'taxonomy'           => $taxonomy,
         		'taxonomy_terms'     => $taxonomy_terms,
         		'taxonomy_operator'  => $taxonomy_operator,
         		'taxonomy_relation'  => $taxonomy_relation,
         		'meta_key'           => $meta_key,
         		'meta_value'         => $meta_value,
         		'meta_compare'       => $meta_compare,
               'meta_relation'      => $meta_relation,
               'meta_type'          => $meta_type,
         		'year'               => $year,
         		'month'              => $month,
         		'day'                => $day,
         		'author'             => $author,
         		'post__in'           => $post__in,
         		'post__not_in'       => $post__not_in,
         		'search'             => $search,			
               'custom_args'        => $custom_args,
         		'post_status'        => $post_status,
         		'order'              => $order,
         		'orderby'            => $orderby,
         		'exclude'            => $exclude,
         		'offset'             => $preload_offset,      		
         		'posts_per_page'     => $preloaded_amount,  
         		'lang'               => $lang,  
               'css_classes'        => $css_classes,		  		
            );   
                    		
            $type = alm_get_repeater_type($repeater); 	
            
            if(!$comments){
               $args = apply_filters('alm_preload_args', $preloaded_arr); // Create preloaded $args            
               $args = apply_filters('alm_modify_query_args', $args, $slug); // ALM Core Filter Hook
               
      			$alm_preload_query = new WP_Query($args);
      			$alm_total_posts = $alm_preload_query->found_posts - $offset;
               $output = '';
               $noscript = '';               	         
               
               // Alternating Templates
               if($alternate === 'true' && has_action('alm_alternating_installed')){
                  $alternate_sequence_array = '';
                  if($alternate_sequence === 'even'){
                     $alternate_sequence_array = 'even';
                  }else{
                     $alternate_sequence_array = explode(',', $alternate_sequence);
                  }
      				$global_repeater = $repeater;
      				$global_type = $type;
      				$global_theme_repeater = $theme_repeater;
      			}      			
               
      			if ($alm_preload_query->have_posts()) :
      				$alm_loop_count = 0; // Count var
      				$alm_page = 0; // Set page to 0
      				$alm_found_posts = $alm_total_posts;
      				$alm_current = 0;
      			   while ($alm_preload_query->have_posts()) : $alm_preload_query->the_post();
      			   	$alm_loop_count++; 
         	         $alm_current++;
         	         $alm_item = $alm_loop_count; // Get current item in loop 	   	         
         	         
         	         // Alternating Templates
         	         if($alternate === 'true' && has_action('alm_alternating_installed')){
      	   	         if (function_exists('alm_alternate_is_in_array')) {
         	   	         if(alm_alternate_is_in_array($alm_current, $alternate_sequence_array)){ // If $alm_current is found in array
            	   	         if($alternate_theme_repeater != 'null' && has_filter('alm_get_theme_repeater')){
               	   	         $theme_repeater = $alternate_theme_repeater;
                  			   }else{
                     			   $repeater = $alternate_repeater;
                     			   $type = alm_get_repeater_type($repeater);
                  			   }  
               			   }else{ // Reset $repeater values
                  			   $repeater = $global_repeater;
                  			   $type = $global_type;
                  			   $theme_repeater = $global_theme_repeater;
               			   } 
            			   }
         			   }    	
         			   		   	
         			   $output .= apply_filters('alm_preload_inc', $repeater, $type, $theme_repeater, $alm_found_posts, $alm_page, $alm_item, $alm_current);
      
                  endwhile; wp_reset_query();
                  
                  if(has_action('alm_seo_installed') && $seo === 'true'){ // If SEO, add noscript paging
                     // Create noscript paging for SEO if preload and seo are enabled
                     $noscript = alm_paging_no_script($alm_preload_query);
                  }
                  
      			endif;
      			
      			$preloaded_output .= '<'.$container_element.' class="alm-listing alm-preloaded'. $classname .' '. $css_classes .'" data-total-posts="'. $alm_total_posts .'">';
      			if($seo === "true") $preloaded_output .= '<div class="alm-reveal alm-seo" data-page="1" data-url="'.$canonicalURL.'">';
      			      			
      			$preloaded_output .= $output;
      			
      			if($seo === "true") $preloaded_output .= '</div>';      			
      			$preloaded_output .= '</'.$container_element.'>';   			
      			
      			if(has_action('alm_seo_installed')){ // If SEO, add noscript paging
      			   $preloaded_output .= $noscript;
      			}
      			
      			// Reset templates (custom and theme) if $alternate is true
      			if($alternate === 'true' && has_action('alm_alternating_installed')){
      				$repeater = $global_repeater;
      				$type = $global_type;
      				$theme_repeater = $theme_repeater;
      			}
            } 
            
            // Preloaded Comments
            else {    
                   
         		if(has_action('alm_comments_installed') && $comments){         		
         		   $preloaded_comments = apply_filters('alm_comments_preloaded', $preloaded_arr); //[located in comments add-on]                                     
                  $preloaded_output .= '<'.$comments_style.' class="alm-listing alm-preloaded commentlist alm-comments-preloaded '. $classname .' '. $css_classes .'">';
                  if($seo === "true") $preloaded_output .= '<div class="alm-reveal alm-seo" data-page="1" data-url="'.$canonicalURL.'">';
                  
                  $preloaded_output .= $preloaded_comments;
                 
                  if($seo === "true") $preloaded_output .= '</div>';
                  $preloaded_output .= '</'.$container_element.'>';
               }
               
            }            
   			
   			$ajaxloadmore .= $preloaded_output; // Add $preloaded_output data to $ajaxloadmore
         }
         // End Preload Posts
         // ********************************    
         
         $listing_class = 'alm-listing';
         
         // If comments	
   		if($comments === 'true'){
      		$listing_class = 'commentlist alm-comments';
   		}
   		
   		$ajaxloadmore .= '<'.$container_element.' class="'.$listing_class.' alm-ajax'. $paging_container_class .' '. $classname . ' '. $css_classes .'"'; // Build ALM container       		
   		
   		
   		// Alternating Templates Add-on   		
   		if(has_action('alm_alternating_installed') && $alternate === 'true'){   		   
   		   $alternate_return = apply_filters(
   		   	'alm_alternating_templates_shortcode', 
   		   	$alternate, 
   		   	$alternate_sequence, 
   		   	$alternate_sequence_max, 
   		   	$alternate_repeater, 
   		   	$alternate_theme_repeater
   		   );   		   	
   			$ajaxloadmore .= $alternate_return;		
         }
   		
   		// Cache Add-on   		
   		if(has_action('alm_cache_installed') && $cache === 'true'){   		   
   		   $cache_return = apply_filters(
   		   	'alm_cache_shortcode', 
   		   	$cache, 
   		   	$cache_id, 
   		   	$options
   		   );   		   	
   			$ajaxloadmore .= $cache_return;		
         }
   		
   		// Comments Add-on   		
   		if(has_action('alm_comments_installed') && $comments === 'true'){  		   
   		   $comments_return = apply_filters(
   		   	'alm_comments_shortcode', 
      		   $comments, 
      		   $comments_per_page, 
      		   $comments_type, 
      		   $comments_style,
      		   $comments_template, 
      		   $comments_callback,
      		   $comments_post_id
   		   );    		    		   	
   			$ajaxloadmore .= $comments_return;		
         }
   		
   		// REST API Add-on   		
   		if(has_action('alm_rest_api_installed') && $restapi === true){  		   
   		   $restapi_return = apply_filters(
   		   	'alm_rest_api_shortcode', 
      		   'true',
      		   $restapi_base,
      		   $restapi_namespace,
      		   $restapi_endpoint,
      		   $restapi_template_id,
      		   $restapi_debug
   		   );    		    		   	
   			$ajaxloadmore .= $restapi_return;		
         }
         
   		
   		// Paging Add-on
         if(has_action('alm_paging_installed') && $paging === 'true'){   		   
   		   $paging_return = apply_filters(
   		   	'alm_paging_shortcode', 
   		   	$paging, 
   		   	$paging_controls, 
   		   	$paging_show_at_most, 
   		   	$paging_classes, 
   		   	$options
   		   );   		   	
   			$ajaxloadmore .= $paging_return;		
         } 
   		
   		
   		// Preloaded Add-on
         if(has_action('alm_preload_installed') && $preloaded === 'true'){
   		   $ajaxloadmore .= ' data-preloaded="'.$preloaded.'"';	
            $ajaxloadmore .= ' data-preloaded-amount="'.$preloaded_amount.'"';
   		}   
   		   
   		   			
   		// SEO Add-on
   		if(has_action('alm_seo_installed') && $seo === 'true'){   		   
   		   $seo_return = apply_filters(
   		      'alm_seo_shortcode', 
   		      $seo, 
   		      $preloaded, 
   		      $options
            );   		   	
   			$ajaxloadmore .= $seo_return;		
         } 
   		   
   		   			
   		// Previous Post Post Add-on   		
   		if(has_action('alm_prev_post_installed') && $previous_post){   		
   		   $prev_post_return = apply_filters(
   		   	'alm_prev_post_shortcode', 
   		   	$previous_post_id, 
   		   	$previous_post_taxonomy,
   		   	$options
   		   );   		   	
   			$ajaxloadmore .= $prev_post_return;		
         }    		
   		
   		$ajaxloadmore .= ' data-repeater="'.$repeater.'"';   		
   		if($theme_repeater != 'null'){
      		$ajaxloadmore .= ' data-theme-repeater="'.$theme_repeater.'"';  
         } 			
   		$ajaxloadmore .= ' data-post-type="'.$post_type.'"';
   		$ajaxloadmore .= ' data-post-format="'.$post_format.'"';
   		$ajaxloadmore .= ' data-category="'.$category.'"';
   		$ajaxloadmore .= ' data-category-not-in="'.$category__not_in.'"';
   		$ajaxloadmore .= ' data-tag="'.$tag.'"';
   		$ajaxloadmore .= ' data-tag-not-in="'.$tag__not_in.'"';
   		$ajaxloadmore .= ' data-taxonomy="'.$taxonomy.'"';
   		$ajaxloadmore .= ' data-taxonomy-terms="'.$taxonomy_terms.'"';
   		$ajaxloadmore .= ' data-taxonomy-operator="'.$taxonomy_operator.'"';
   		$ajaxloadmore .= ' data-taxonomy-relation="'.$taxonomy_relation.'"';
   		$ajaxloadmore .= ' data-meta-key="'.$meta_key.'"';
   		$ajaxloadmore .= ' data-meta-value="'.$meta_value.'"';
   		$ajaxloadmore .= ' data-meta-compare="'.$meta_compare.'"';
   		$ajaxloadmore .= ' data-meta-relation="'.$meta_relation.'"';
   		$ajaxloadmore .= ' data-meta-type="'.$meta_type.'"';
   		$ajaxloadmore .= ' data-year="'.$year.'"';
   		$ajaxloadmore .= ' data-month="'.$month.'"';
   		$ajaxloadmore .= ' data-day="'.$day.'"';
   		$ajaxloadmore .= ' data-author="'.$author.'"';
   		$ajaxloadmore .= ' data-post-in="'.$post__in.'"';
   		$ajaxloadmore .= ' data-post-not-in="'.$post__not_in.'"';
   		$ajaxloadmore .= ' data-exclude="'.$exclude.'"';
   		$ajaxloadmore .= ' data-search="'.$search.'"';
   		$ajaxloadmore .= ' data-custom-args="'.$custom_args.'"';
   		$ajaxloadmore .= ' data-post-status="'.$post_status.'"';
   		$ajaxloadmore .= ' data-order="'.$order.'"';
   		$ajaxloadmore .= ' data-orderby="'.$orderby.'"';
   		$ajaxloadmore .= ' data-offset="'.$offset.'"';	
   		$ajaxloadmore .= ' data-posts-per-page="'.$posts_per_page.'"';         
   		$ajaxloadmore .= ' data-lang="'.$lang.'"';
   		$ajaxloadmore .= ' data-scroll="'.$scroll.'"';
   		$ajaxloadmore .= ' data-scroll-distance="'.$scroll_distance.'"';
   		$ajaxloadmore .= ' data-max-pages="'.$max_pages.'"';
   		$ajaxloadmore .= ' data-pause-override="'.$pause_override.'"';
   		$ajaxloadmore .= ' data-pause="'.$pause.'"';
   		$ajaxloadmore .= ' data-button-label="'.$button_label.'"';
   		if(!empty($button_loading_label)){
   		   $ajaxloadmore .= ' data-button-loading-label="'.$button_loading_label.'"';      		
   		}
         $ajaxloadmore .= ' data-button-class="'.$button_classname.'"';
   		$ajaxloadmore .= ' data-destroy-after="'.$destroy_after.'"';
   		$ajaxloadmore .= ' data-transition="'.$transition.'"';
   		if($transition_speed !== '250')   		   
   		   $ajaxloadmore .= ' data-transition-speed="'.$transition_speed.'"';
   		if($transition_container === 'false')   		   
   		   $ajaxloadmore .= ' data-transition-container="'.$transition_container.'"';
   		$ajaxloadmore .= ' data-images-loaded="'.$images_loaded.'"';
   		   		
   		$ajaxloadmore .= '>';
   		   		
   		
   		// Previous Post Add-on       
         // - Get first post and append to ajax load more object
   		if(has_action('alm_prev_post_installed') && $previous_post){ 
      		$repeater_type = preg_split('/(?=\d)/', $repeater, 2); // split $repeater at number to retrieve type
      		$repeater_type = $repeater_type[0]; // (default | repeater | template_)       		
      		if($theme_repeater != 'null' && has_filter('alm_get_theme_repeater')){
               $repeater_type = null;
            }              
            // Get next post include and build the output from the next post filter    
            $previous_post_output = '<div class="alm-reveal alm-previous-post post-'. $previous_post_id .'" data-url="'. get_permalink($previous_post_id) .'" data-title="'. get_the_title($previous_post_id) .'" data-id="'. $previous_post_id .'">'; // Set the post id .alm-reveal div
      		$previous_post_output .= apply_filters('alm_prev_post_inc', $repeater, $repeater_type, $theme_repeater, $previous_post_id, $post_type);
            $previous_post_output .= '</div>';
   			$ajaxloadmore .= $previous_post_output; // Add $next_post_output data to $ajaxloadmore
   
         }
         // End Previous Post         
   		
   		
   		$ajaxloadmore .= '</'.$container_element.'>';
   		 
         $ajaxloadmore .= apply_filters('alm_before_button', ''); //  ALM Core Filter Hook
         
   		$ajaxloadmore .= '</div>';	
   		
         $ajaxloadmore .= apply_filters('alm_after_container', ''); //  ALM Core Filter Hook  
                 
         
   		// REST API Add-on - add template to page
   		if(has_action('alm_rest_api_installed') && $restapi){
      		if($theme_repeater != 'null' && has_action('alm_get_rest_theme_repeater')){
         		do_action('alm_get_rest_theme_repeater', $theme_repeater);
            } else {
   			   $rest_type = alm_get_repeater_type($repeater);
   			   do_action('alm_get_rest_api_template', $repeater, $rest_type);
   			}
   		} 
   			
   		return $ajaxloadmore; // End ALM object
      }
   
   }

endif;

