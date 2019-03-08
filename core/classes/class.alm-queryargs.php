<?php
/**
 * ALM_QUERY_ARGS
 * Generate args that pass into the ALM WP_Query
 *
 * @author   Darren Cooney
 * @since    3.7
 */

if (!defined( 'ABSPATH')){
	exit;
}

if(!class_exists('ALM_QUERY_ARGS')):

   class ALM_QUERY_ARGS {
      
      
      /**
	    * alm_build_queryargs
	    * This function will return a generated $args array.
   	 *
   	 * @since         3.7
   	 * @param $a      array
   	 * @return        $args
   	 */

      
      public static function alm_build_queryargs($a, $is_ajax = true){
         
         // ID
         $post_id = (isset($a['post_id'])) ? $a['post_id'] : '';
      	
      	// Posts Per Page
      	$posts_per_page = (isset($a['posts_per_page'])) ? $a['posts_per_page'] : 5;
      	
      	// Post Type
      	if($is_ajax){
      		$post_type = (isset($a['post_type'])) ? explode(",", $a['post_type']) : 'post'; 
      	} else {	      	
      		$post_type = explode(",", $a['post_type']);
      	} 
      	
      	// Format
      	$post_format = (isset($a['post_format'])) ? $a['post_format'] : '';
   		
   		// Category
   		$category = (isset($a['category'])) ? $a['category'] : '';
   		$category__and = (isset($a['category__and'])) ? $a['category__and'] : '';   		
   		$category__not_in = (isset($a['category__not_in'])) ? $a['category__not_in'] : '';
   		
   		// Tags
   		$tag = (isset($a['tag'])) ? $a['tag'] : '';
   		$tag__and = (isset($a['tag__and'])) ? $a['tag__and'] : '';
   		$tag__not_in = (isset($a['tag__not_in'])) ? $a['tag__not_in'] : '';
   		
   		// Taxonomy
   		$taxonomy = (isset($a['taxonomy'])) ? $a['taxonomy'] : '';
   		$taxonomy_terms = (isset($a['taxonomy_terms'])) ? $a['taxonomy_terms'] : '';
   		$taxonomy_operator = (isset($a['taxonomy_operator'])) ? $a['taxonomy_operator'] : '';
   		if(empty($taxonomy_operator))
   			$taxonomy_operator = 'IN';
   		$taxonomy_relation = (isset($a['taxonomy_relation'])) ? $a['taxonomy_relation'] : 'AND';
   		if(empty($taxonomy_relation))
   			$taxonomy_relation = 'AND';
   		
   		// Date
   		$year = (isset($a['year'])) ? $a['year'] : '';
   		$month = (isset($a['month'])) ? $a['month'] : '';
   		$day = (isset($a['day'])) ? $a['day'] : '';
   		
   		// Custom Fields
   		$meta_key = (isset($a['meta_key'])) ? $a['meta_key'] : '';
   		$meta_value = (isset($a['meta_value'])) ? $a['meta_value'] : '';
   		$meta_compare = (isset($a['meta_compare'])) ? $a['meta_compare'] : '';
   		if(empty($meta_compare))
   			$meta_compare = 'IN'; 
   		if($meta_compare === 'lessthan') $meta_compare = '<'; // do_shortcode fix (shortcode was rendering as HTML)
   		if($meta_compare === 'lessthanequalto') $meta_compare = '<='; // do_shortcode fix (shortcode was rendering as HTML)
   		$meta_relation = (isset($a['meta_relation'])) ? $a['meta_relation'] : '';
   		if(empty($meta_relation))
   			$meta_relation = 'AND';
   		$meta_type = (isset($a['meta_type'])) ? $a['meta_type'] : '';
   		if(empty($meta_type))
   			$meta_type = 'CHAR';
   		
   		// Search
   		$s = (isset($a['search'])) ? $a['search'] : '';   		
   		
   		// Custom Args
   		$custom_args = (isset($a['custom_args'])) ? $a['custom_args'] : '';
   		
   		// Author
   		$author_id = (isset($a['author'])) ? $a['author'] : '';        	
   		
   		// Ordering
   		$order = (isset($a['order'])) ? $a['order'] : 'DESC';
   		$orderby = (isset($a['orderby'])) ? $a['orderby'] : 'date';
   		
   		// Sticky, Include, Exclude, Offset, Status
   		$sticky = (isset($a['sticky_posts'])) ? $a['sticky_posts'] : '';
   		$sticky = ($sticky === 'true') ? true : false;
   		
   		// Post IN
   		$post__in = (isset($a['post__in'])) ? $a['post__in'] : '';	
   		
   		// Exclude  		
   		$post__not_in = (isset($a['post__not_in'])) ? $a['post__not_in'] : '';
   		$exclude = (isset($a['exclude'])) ? $a['exclude'] : '';	
   		
   		// Offset
   		$offset = (isset($a['offset'])) ? $a['offset'] : 0;
   		
   		// Post Status
   		$post_status = (isset($a['post_status'])) ? $a['post_status'] : 'publish';
   		if(empty($post_status))
   			$post_status = 'publish';   		
   		if($post_status != 'publish' && $post_status != 'inherit'){
      		// If not 'publish', confirm user has rights to view these old posts.
      		if (current_user_can( 'edit_theme_options' )){
         		$post_status = $post_status;
            } else {
               $post_status = 'publish';
            }
         }
         
         
         // Advanced Custom Fields
         // Only used for Relationship Field. Gallery, Repeater and Flex Content is in the ACF extension. 
         if($is_ajax){	         
	         $acf = (isset($a['acf'])) ? true : false;
	   		if($acf){
	            $acf_post_id = (isset($a['acf']['post_id'])) ? $a['acf']['post_id'] : ''; // Post ID
	            $acf_field_type = (isset($a['acf']['field_type'])) ? $a['acf']['field_type'] : ''; // ACF Field Type
	            $acf_field_name = (isset($a['acf']['field_name'])) ? $a['acf']['field_name'] : ''; // ACF Field Type
	         }
				         
         } else {
	   		// If Preloaded, $a needs to access acf data differently.
	   		if(isset($a['acf'])){
		   		if($a['acf'] === 'true'){
		            $acf_post_id = (isset($a['acf_post_id'])) ? $a['acf_post_id'] : ''; // Post ID
		            $acf_field_type = (isset($a['acf_field_type'])) ? $a['acf_field_type'] : ''; // ACF Field Type
		            $acf_field_name = (isset($a['acf_field_name'])) ? $a['acf_field_name'] : ''; // ACF Field Type
		         }
	         }
         }
         
   		
      	// Create $args array
   		$args = array(
   			'post_type' => $post_type,
   			'posts_per_page' => $posts_per_page,
   			'offset' => $offset,
   			'order' => $order,
   			'orderby' => $orderby,		
   			'post_status' => $post_status,		
   			'ignore_sticky_posts' => true
   		);	        
                   
   		
   		// Post Format & Taxonomy
   	   // * Both use tax_query, so we need to combine these queries
   		if(!empty($post_format) || !empty($taxonomy)){      		
      		
            $tax_query_total = count(explode(":", $taxonomy)); // Total $taxonomy objects
            $taxonomy = explode(":", $taxonomy); // convert to array
            $taxonomy_terms = explode(":", $taxonomy_terms); // convert to array
            $taxonomy_operator = explode(":", $taxonomy_operator); // convert to array            
            
            if(empty($taxonomy)){
               
               // Post Format only
               $args['tax_query'] = array(
      			   alm_get_post_format($post_format),
      			);   
      			            
            }else{
               
               // Post Formats            
					$args['tax_query'] = array(
						'relation' => $taxonomy_relation,
						alm_get_post_format($post_format)
					);					
					
					// Loop Taxonomies					
					for($tax_i = 0; $tax_i < $tax_query_total; $tax_i++){
						$args['tax_query'][] = alm_get_taxonomy_query($taxonomy[$tax_i], $taxonomy_terms[$tax_i], $taxonomy_operator[$tax_i]);
					}
					
   			}
   			
   	   }	
   	   
   	   // Category
   		if(!empty($category)){
   			$args['category_name'] = $category;
   		}
   		if(!empty($category__and)){
   			$args['category__and'] = explode(",", $category__and);
   		}
         
         // Category Not In
   		if(!empty($category__not_in)){
   		   $exclude_cats = explode(",",$category__not_in);
   			$args['category__not_in'] = $exclude_cats;
   		}
         
         // Tag
   		if(!empty($tag)){
   			$args['tag'] = $tag;
   		} 	
   		if(!empty($tag__and)){
   			$args['tag__and'] = explode(",", $tag__and);
   		} 		 
         
         // Tag Not In
   		if(!empty($tag__not_in)){
   		   $exclude_tags = explode(",",$tag__not_in);
   			$args['tag__not_in'] = $exclude_tags;
   		}
   	    
   	   // Date (not using date_query as there was issue with year/month archives)
   		if(!empty($year)){
      		$args['year'] = $year;
   	   } 
   	   if(!empty($month)){
      		$args['monthnum'] = $month;
   	   }  
   	   if(!empty($day)){
      		$args['day'] = $day;
   	   }	
   	   
   	   // Meta Query
   		if(!empty($meta_key) && !empty($meta_value) || !empty($meta_key) && $meta_compare !== "IN"){
      		
      		// Parse multiple meta query    
            $meta_query_total = count(explode(":", $meta_key)); // Total meta_query objects
            $meta_keys = explode(":", $meta_key); // convert to array
            $meta_value = explode(":", $meta_value); // convert to array
            $meta_compare = explode(":", $meta_compare); // convert to array
            $meta_type = explode(":", $meta_type); // convert to array
            
   			// Loop Meta Query
            $args['meta_query'] = array(
				   'relation' => $meta_relation
            );
				for($mq_i = 0; $mq_i < $meta_query_total; $mq_i++){
					$args['meta_query'][] = alm_get_meta_query($meta_keys[$mq_i], $meta_value[$mq_i], $meta_compare[$mq_i], $meta_type[$mq_i]);
				}
			}
   	   
         // Meta_key, used for ordering by meta value
         if(!empty($meta_key)){
	         if (strpos($orderby, 'meta_value') !== false) { // Only order by meta_key, if $orderby is set to meta_value{_num}
	            $meta_key_single = explode(":", $meta_key);
               $args['meta_key'] = $meta_key_single[0];
            }
         }
         
         // Author
   		if(!empty($author_id)){
   			$args['author'] = $author_id;
   		}
         
         // Search Term
   		if(!empty($s)){
   			$args['s'] = $s;
   		}  
   		
   		// Custom Args         
   		if(!empty($custom_args)){
   			$custom_args_array = explode(";",$custom_args); // Split the $custom_args at ','
   			foreach($custom_args_array as $argument){ // Loop each $argument  
      			  
      			$argument = preg_replace('/\s+/', '', $argument); // Remove all whitespace 	      				
   			   $argument = explode(":",$argument);  // Split the $argument at ':' 
   			   $argument_arr = explode(",", $argument[1]);  // explode $argument[1] at ','
   			   if(sizeof($argument_arr) > 1){
   			      $args[$argument[0]] = $argument_arr;
   			   }else{
   			      $args[$argument[0]] = $argument[1];      			   
   			   }
   			   
   			}
   		} 
         
         // Include posts
   		if(!empty($post__in)){
   			$post__in = explode(",",$post__in);
   			$args['post__in'] = $post__in;
   		}     	   
         
   		// Exclude posts
   		if(!empty($post__not_in)){
   			$post__not_in = explode(",",$post__not_in);
   			$args['post__not_in'] = $post__not_in;
   		}
   		if(!empty($exclude)){ // Deprecate this soon - 2.8.5 */
   			$exclude = explode(",",$exclude);
   			$args['post__not_in'] = $exclude;
   		}
   		
         // Language
   		if(!empty($lang)){
   			$args['lang'] = $lang;
   		}   		   
         
         // Sticky Posts  
         if($sticky){ 
            $sticky_posts = get_option( 'sticky_posts' ); // Get all sticky post ids  
	         $sticky_post__not_in = isset($args['post__not_in']) ? $args['post__not_in'] : '';

	         if($is_ajax){ // Is an Ajax Query 
   	         
   	         $sticky_query_args = $args;   	         
   	            
               $sticky_query_args['post__not_in'] = $sticky_posts;
               $sticky_query_args['posts_per_page'] = -1;
               $sticky_query_args['fields'] = 'ids';
   
               $sticky_query = new WP_Query($sticky_query_args); // Query all non sticky posts
   
               // If has sticky and regular posts
               if($sticky_posts && $sticky_query->posts){
                  $standard_posts = $sticky_query->posts;
                  if($standard_posts){
                     $sticky_ids = array_merge($sticky_posts, $standard_posts); // merge regular posts with sticky
                     $args['post__in'] = alm_sticky_post__not_in($sticky_ids, $sticky_post__not_in);
                     $args['orderby'] = 'post__in'; // set orderby to order by post__in.
                  }
               }
   	         
            } else { // Preloaded
   	          
               // If more sticky posts than $posts_per_page run a secondary query to get posts to fill query.  
               if(count($sticky_posts) <= $posts_per_page){            
               
   	            $sticky_query_args = $args;
   	               
   	            $sticky_query_args['post__not_in'] = $sticky_posts;
   	            $sticky_query_args['posts_per_page'] = -1;  
   	            $sticky_query_args['fields'] = 'ids';  
   	            
   	             
   	            $sticky_query = new WP_Query($sticky_query_args); // Query all non sticky posts                
   	            
   	            // If has sticky and regular posts
   	            if($sticky_posts && $sticky_query->posts){
   	               $standard_posts = $sticky_query->posts;
   	               if($standard_posts){
   	                  $sticky_ids = array_merge($sticky_posts, $standard_posts); // merge regular posts with sticky
   	                  $sticky_ids = alm_sticky_post__not_in($sticky_ids, $sticky_post__not_in);
   	                  $args['orderby'] = 'post__in'; // set orderby to order by post__in.
   	               }
   	            }
   	            
               }else{   	            
   	            $sticky_ids = $sticky_posts; // Pass get_option('sticky_posts');  	            
               }
               
               // If has sticky posts.
               if($sticky_posts){
               	$args['post__in'] = $sticky_ids;
               	$args['orderby'] = 'post__in'; // set orderby to order by post__in.
               }
               
            }
            
         }	
         
   		
   		// Advanced Custom Fields
   		if(!empty($acf_field_type) && !empty($acf_field_name) && function_exists('get_field')){
      		if($acf_field_type === 'relationship'){ // Relationship Field
         		if(empty($acf_post_id)){
                  $acf_post_id = $post_id;
         		}
               $acf_post_ids = get_field($acf_field_name, $acf_post_id); // Get field value from ACF            
               if($acf_post_ids){
                  $args['post__in'] = $acf_post_ids;
               } else {
                  $args['post__in'] = array(0);
               }
            }
         }
   		
   	   return $args;
         
      }
   
   }
   
endif;