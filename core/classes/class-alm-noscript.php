<?php
/**
 * Class that generates a wp_query for injection into <noscript />.
 *
 * @package  ajaxloadmore
 * @since    3.7
 */

// @codingStandardsIgnoreStart

if (!defined( 'ABSPATH')){
	exit;
}

if(!class_exists('ALM_NOSCRIPT')):

   class ALM_NOSCRIPT {

		/**
		 * Element tag.
		 */
	   static $element = 'noscript';


      /**
	    * This function will return a generated query for the noscript.
   	 *
   	 * @since 1.8
   	 * @param array $q
   	 * @param string $container
   	 * @return HTMLElement
   	 */
      public static function alm_get_noscript($q, $container = 'ul', $css_classes = '', $transition_container_classes = ''){

         $paged = ($q['paged']) ? $q['paged'] : 1;

         // Comments
         if($q['comments']){
         	if(has_action('alm_comments_installed') && $q['comments']){
            	// SEO does not support comments at this time
            }
         }

         // Users
         elseif($q['users']){

            if(has_action('alm_users_preloaded') && $q['users']){

               // Encrypt User Role
			      if(!empty($q['users_role']) && function_exists('alm_role_encrypt')){
			         $q['users_role'] = alm_role_encrypt($q['users_role']);
			      }

			      // Update offset
			      $q['offset'] = ALM_NOSCRIPT::set_offset($paged, $q['users_per_page'], $q['offset']);

			      // Build output
			      $output = apply_filters('alm_users_preloaded', $q, $q['users_per_page'], $q['repeater'], $q['theme_repeater']); // located in Users add-on

               return ALM_NOSCRIPT::render($output['data'], $container, '', $css_classes, $transition_container_classes);
            }

         }

         // Advanced Custom Fields (Repeater, Gallery, Flex Content
         elseif($q['acf'] && ($q['acf_field_type'] !== 'relationship')){
            if(has_action('alm_acf_installed') && $q['acf']){

	            // Update offset
			      $q['offset'] = ALM_NOSCRIPT::set_offset($paged, $q['posts_per_page'], $q['offset']);

			      // Build output
               $output = apply_filters('alm_acf_preloaded', $q, $q['repeater'], $q['theme_repeater']); //located in ACF add-on

               return ALM_NOSCRIPT::render($output, $container, '', $css_classes, $transition_container_classes);
            }
         }

         // Standard ALM
         else {

            // Build the $args array to use with this WP_Query
            $query_args = ALM_QUERY_ARGS::alm_build_queryargs($q, false);

            /*
         	 *	alm_query_args_[id]
         	 *
         	 * ALM Core Filter Hook
         	 *
         	 * @return $query_args;
         	 */
            $query_args = apply_filters('alm_query_args_'.$q['id'], $query_args, $q['post_id']);


            // Get Per Page param
            $posts_per_page = $query_args['posts_per_page'];


            // Get Repeater Template type
            $type = alm_get_repeater_type($q['repeater']);


            // Update offset
            $query_args['paged'] = $paged;
            $query_args['offset'] = ALM_NOSCRIPT::set_offset($paged, $posts_per_page, $q['offset']);

            $output = '';
            $i = 0;

            $noscript_query = new WP_Query($query_args);

            if($noscript_query->have_posts()) :

               $alm_found_posts = $noscript_query->found_posts;
               $alm_page = $paged;

               while ($noscript_query->have_posts()) : $noscript_query->the_post();
                  $i++;
                  $alm_current = $i;
                  $alm_item = $query_args['offset'] + $i;

      	   	   $output .= alm_loop($q['repeater'], $type, $q['theme_repeater'], $alm_found_posts, $alm_page, $alm_item, $alm_current, $query_args);

               endwhile; wp_reset_query();

            endif;

            $paging = ALM_NOSCRIPT::build_noscript_paging($noscript_query);

            return ALM_NOSCRIPT::render($output, $container, $paging, $css_classes, $transition_container_classes);

         }

      }

		/**
		 * Create paging navigation.
		 *
		 * @since 2.8.3
		 * @param array $query The current query array.
		 * @return HTMLElement
		 */
		public static function build_noscript_paging($query){

			$paged = (empty(get_query_var('paged'))) ? 1 : get_query_var('paged');
		   $numposts = $query->found_posts;
		   $max_page = $query->max_num_pages;
		   $posts_per_page = $query->query_vars['posts_per_page'];
		   $total = ceil($numposts/$posts_per_page);

		   $start_page = 1;
		   $content = '';

		   if ($total > 1) {

		      $content .= '<div class="alm-paging" style="opacity: 1">';

   		      $content .= __('Pages: ', 'ajax-load-more');

   		      // First Page
   		      if ($paged >= 2) {
   			      $first_page_text = __('First Page', 'ajax-load-more');
   		         $content .= '<span class="page"><a href="'.get_pagenum_link(1).'">'.$first_page_text.'</a></span>';
   		      }

   		      // Loop pages
   		      for($i = $start_page; $i <= $total; $i++) {
      		      $content .= '<span class="page">';
      		      if($paged === $i){
                     $content .= '<u>'.$i.'</u>';
      		      } else {
                     $content .= '<a href="'.get_pagenum_link($i).'">'.$i.'</a>';
      		      }
      		      $content .= '</span>';

   		   	}

   		   	// Last Page
   			   if ($paged != $total) {
   			      $last_page_text = __('Last Page', 'ajax-load-more');
   			      $content .= '<span><a href="'.get_pagenum_link($total).'">'.$last_page_text.'</a></span>';
   			   }

		      $content .= '</div>';
		   }

		   return $content;

		}

      /**
	    * This function will return the HTML output of the <noscript/>.
   	 *
   	 * @since 1.8
   	 * @param string $output
   	 * @param string $container
   	 * @param string $paging
   	 * @return HTMLElement
   	 */
      public static function render( $output, $container, $paging, $css_classes, $transition_container_classes){
	      return ( ! empty( $output ) ) ? '<' . self::$element . '><' . $container . ' class="alm-listing alm-noscript' . $css_classes . '"><div class="alm-reveal' . $transition_container_classes . '">' . $output . '</div></' . $container . '>' . $paging . '</' . self::$element . '>' : '';
      }

      /**
	    * This function will set the offset of the noscript query
   	 *
   	 * @since 1.8
   	 * @param string $paged
   	 * @param string $per_page
   	 * @param string $offset
   	 * @return int
   	 */
      public static function set_offset($paged, $per_page, $offset){
	      return ($paged * $per_page) - $per_page + $offset;
		}

   }

endif;
