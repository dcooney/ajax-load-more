<span class="toggle-all"><span class="inner-wrap"><em class="collapse"><?php _e('Collapse All', ALM_NAME); ?></em><em class="expand"><?php _e('Expand All', ALM_NAME); ?></em></span></span>



<?php if(has_action('alm_seo_installed')){ ?>
<!-- SEO -->
<div class="row input seo" id="alm-seo">
   <h3 class="heading"><?php _e('SEO (Search Engine Optimization)', ALM_NAME); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable address bar URL rewrites as users page through ajax loaded content.', ALM_NAME); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="true" id="seo-true" >
                 <label for="seo-true"><?php _e('True', ALM_NAME); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="false" id="seo-false" checked>
                 <label for="seo-false"><?php _e('False', ALM_NAME); ?></label>
                </li>
            </ul>
         </div>
      </div>
   </div>
</div> 
<?php } ?>   

<?php
	
 	// List available repeaters
	echo '<div class="row repeater" id="alm-repeaters">';   		
	echo '<h3 class="heading">'.__('Template', ALM_NAME). '</h3>';
	echo '<div class="expand-wrap">';
	echo '<div class="section-title">';
	echo '<p>'.__('Select your <a href="admin.php?page=ajax-load-more-repeaters" target="_parent">repeater template</a>.', ALM_NAME). '</p>';
	echo '</div>';
	echo '<div class="wrap"><div class="inner">';
	echo '<select name="repeater-select" id="repeater-select" class="alm_element">';
	echo '<option name="default" id="chk-default" value="default" selected="selected">Default</option>';		
	if (has_action('alm_get_custom_repeaters')) {
	  do_action('alm_get_custom_repeaters');
	}
	if (has_action('alm_get_unlimited_repeaters')) {
	  do_action('alm_get_unlimited_repeaters');
	}
	echo '</select>';
	
	echo '</div></div>';
	
	// Custom Repeaters - /cta/extend.php
	// Removed in 2.2.8	
	if (!has_action('alm_get_custom_repeaters')) {
	  //include( ALM_PATH . 'admin/includes/cta/extend.php');
	}
	
	// Custom Repeaters v2 - /cta/extend.php
	if (!has_action('alm_get_unlimited_repeaters')) {
	   if (!has_action('alm_get_custom_repeaters')) {
         include( ALM_PATH . 'admin/includes/cta/extend.php');
	  }
	}
	
	echo '</div>';
	echo '</div>';
 	
 
   // List registered post_types
   $pt_args = array(
      'public'   => true
   );
	$types = get_post_types($pt_args);
	if($types){
		echo '<div class="row checkboxes post_types" id="alm-post-types">';   		
		echo '<h3 class="heading">'.__('Post Types', ALM_NAME). '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>'.__('Select Post Types to query.', ALM_NAME). '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><ul>';
	    foreach( $types as $type ){
	     $typeobj = get_post_type_object( $type );
	     $name = $typeobj->name;
	     if( $name != 'revision' && $name != 'attachment' && $name != 'nav_menu_item' && $name != 'acf'){
            echo '<li><input class="alm_element" type="checkbox" name="chk-'.$typeobj->name.'" id="chk-'.$typeobj->name.'" data-type="'.$typeobj->name.'"><label for="chk-'.$typeobj->name.'">'.$typeobj->labels->singular_name.'</label></li>';
			}
	    }
	    echo '</ul></div></div>';
	    echo '</div>';
	    echo '</div>';
   }
   
   // List Post Formats
   if ( current_theme_supports( 'post-formats' ) ) {
       $post_formats = get_theme_support( 'post-formats' );
       if($post_formats){
   		echo '<div class="row checkboxes post_format" id="alm-post-format">';   		
   		echo '<h3 class="heading">'.__('Post Format', ALM_NAME). '</h3>';
   		echo '<div class="expand-wrap">';
   		echo '<div class="section-title">';
   		echo '<p>'.__('Select a <a href="http://codex.wordpress.org/Post_Formats" target="_blank">Post Format</a> to query.', ALM_NAME). '</p>';
   		echo '</div>';
   		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="post-format-select" id="post-format-select">';
   		echo '<option value="" selected="selected">-- ' . __('Select Post Format', ALM_NAME) . ' --</option>';
   		echo '<option name="chk-standard" id="chk-standard" value="chk-standard">' . __('Standard', ALM_NAME) . '</option>';		
   	   foreach( $post_formats[0] as $post_format ){
            echo '<option name="chk-'.$post_format.'" id="chk-'.$post_format.'" value="'.$post_format.'">'.ucwords($post_format).'</option>';
   	   }	   
   		echo '</select></div></div>';
   		echo '</div>';
   		echo '</div>';
      }
       
   }
   
   // List Categories	    
	$cats = get_categories();
	if($cats){
		echo '<div class="row checkboxes categories" id="alm-categories">';
		echo '<h3 class="heading">' . __('Category', ALM_NAME) . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select a Category to query(by slug).', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="category-select" id="category-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Category', ALM_NAME) . ' --</option>';
	    foreach( $cats as $cat ){
         echo '<option name="chk-'.$cat->slug.'" id="chk-'.$cat->slug.'" value="'.$cat->slug.'">'.$cat->name.'</option>';
	    }
	    echo '</select></div></div>';
	    echo '</div>';
	    echo '</div>';
    }
    
    // List Categories	    
	$tags = get_tags();
	if($tags){
		echo '<div class="row checkboxes tags" id="alm-tags">';
		echo '<h3 class="heading">' . __('Tag', ALM_NAME) . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select a Tag to query(by slug).', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="tag-select" id="tag-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Tag', ALM_NAME) . ' --</option>';
	    foreach( $tags as $tag ){
         echo '<option name="chk-'.$tag->slug.'" id="chk-'.$tag->slug.'" value="'.$tag->slug.'">'.$tag->name.'</option>';
	    }
	    echo '</select></div></div>';
	    echo '</div>';
	    echo '</div>';
    }
    
    
	// List Taxonomies
	$tax_args = array(
		'public'   => true,
		'_builtin' => false	
	); 
	$tax_output = 'objects'; // or objects
	$taxonomies = get_taxonomies( $tax_args, $tax_output ); 
	if ( $taxonomies ) {
		echo '<div class="row taxonomy" id="alm-taxonomy">';   		
		echo '<h3 class="heading">'.__('Taxonomy', ALM_NAME). '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>'.__('Select your custom taxonomy then select the terms and operator.', ALM_NAME). '</p>';
		echo '</div>';
		
		echo '<div class="wrap">';
		
		echo '<div class="inner">';
		echo '<select class="alm_element" name="taxonomy-select" id="taxonomy-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Taxonomy', ALM_NAME) . ' --</option>';
	    foreach( $taxonomies as $taxonomy ){
         echo '<option name="chk-'.$taxonomy->query_var.'" id="chk-'.$taxonomy->query_var.'" value="'.$taxonomy->query_var.'">'.$taxonomy->label.'</option>';
	    }
	    echo '</select>';
	    echo '</div>';
	    
	    echo '<div id="taxonomy-extended">';
	    echo '<div class="inner border-top" id="tax-terms">';
	    echo '<label class="full">'. __('Taxonomy Terms:', ALM_NAME) .'</label>';
	    echo '<div id="tax-terms-container" class="checkboxes"></div>';
	    echo '</div>';
	    
	    echo '<div class="inner border-top" id="tax-operator-select">';
	    echo '<label class="full">'. __('Taxonomy Operator:', ALM_NAME) .'</label>';
	    echo '<ul class="radio">';
	    echo '<li><input class="alm_element" name="tax-operator" id="tax-in-radio" value="IN" type="radio" checked="checked"><label for="tax-in-radio">IN (default)</li>';
	    echo '<li><input class="alm_element" name="tax-operator" id="tax-not-in-radio" value="NOT IN" type="radio"><label for="tax-not-in-radio">NOT IN</li>';
	    echo '</ul>';
	    echo '</div>';	    
	    echo '</div>';
	    
	    echo '</div>';
	    echo '</div>';
	    echo '</div>';
	}?>
   
   <?php // Custom Fields ?>
   <div class="row input meta-key" id="alm-meta-key">
      <h3 class="heading"><?php _e('Custom Fields (Meta)', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <p><?php _e('Query by <a href="http://codex.wordpress.org/Class_Reference/WP_Meta_Query" target="_blank">custom fields</a>.  Enter your key(name) and value, then select your operator.', ALM_NAME); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">
               <label for="meta-key" class="full"><?php _e('Field Key (Name):', ALM_NAME); ?></label>
               <input class="alm_element" name="meta-key" type="text" id="meta-key" value="" placeholder="<?php _e('Enter custom field key(name)', ALM_NAME); ?>">   
            </div> 
            <div id="meta-query-extended">
               <?php // Meta Value ?>
               <div class="inner border-top">
                  <label for="meta-value" class="full"><?php _e('Field Value:', ALM_NAME); ?></label>
                  <input class="alm_element" name="meta-value" type="text" id="meta-value" value="" placeholder="<?php _e('Enter custom field value', ALM_NAME); ?>">
               </div>    
               <?php // Meta Compare ?>           
               <div class="inner border-top">
                  <label for="meta-compare" class="full"><?php _e('Field Operator:', ALM_NAME); ?></label>
                  <select class="alm_element" id="meta-compare" name="meta-compare">
                     <option value="=" selected="selected">= &nbsp;&nbsp; (equals)</option>
                     <option value="!=">!= &nbsp; (does NOT equal)</option>
                     <option value=">">> &nbsp;&nbsp; (greater than)</option>
                     <option value=">=">>= &nbsp;(greater than or equal to)</option>
                     <option value="<">&lt; &nbsp;&nbsp; (less than)</option>
                     <option value="<=">&lt;= &nbsp;(less than or equal to)</option>
                     <option value="LIKE">LIKE</option>
                     <option value="NOT LIKE">NOT LIKE</option>
                     <option value="IN">IN</option>
                     <option value="NOT IN">NOT IN</option>
                     <option value="BETWEEN">BETWEEN</option>
                     <option value="NOT BETWEEN">NOT BETWEEN</option>
                     <option value="EXISTS">EXISTS</option>
                     <option value="NOT EXISTS">NOT EXISTS</option>
                  </select>
               </div>            
            </div>
         </div>         
      </div>
   </div>
    
    
   <?php // List Authors	   
	$authors = get_users();
	if($authors){
		echo '<div class="row checkboxes authors" id="alm-tags">';
		echo '<h3 class="heading">' . __('Author', ALM_NAME) . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select an Author to query(by ID).', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="author-select" id="author-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Author', ALM_NAME) . ' --</option>';
	    foreach( $authors as $author ){
         echo '<option name="chk-'.$author->user_login.'" id="chk-'.$author->user_login.'" value="'.$author->ID.'">'.$author->display_name.'</option>';
	    }
	    echo '</select></div></div>';
	    echo '</div>';
	    echo '</div>';
    }
    ?>
    
   <!-- Search term -->
   <div class="row input search-term" id="alm-search">
      <h3 class="heading"><?php _e('Search Term', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Enter a search term to query.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="search-term" class="alm_element" type="text" id="search-term" value="" placeholder="<?php _e('Enter search term', ALM_NAME); ?>">
            </div>
         </div>
      </div>
   </div>
    
   <!-- Ordering -->
   <div class="row ordering" id="alm-order">
      <h3 class="heading"><?php _e('Ordering', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Sort retrieved posts by Order and Orderby parameters.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner half">
               <label class="full">Order:</label>
               <select class="alm_element" name="post-order" id="post-order">
                   <option value="DESC" selected="selected">DESC (default)</option>
                   <option value="ASC">ASC</option>
               </select>
            </div>
            <div class="inner half">
               <label class="full">Order By:</label>
               <select class="alm_element" name="post-orderby" id="post-orderby">
                   <option value="date" selected="selected">Date (default)</option>
                   <option value="title">Title</option>
                   <option value="name">Name (slug)</option>
                   <option value="menu_order">Menu Order</option>
                   <option value="rand">Random</option>
                   <option value="author">Author</option>
                   <option value="ID">ID</option>
                   <option value="comment_count">Comment Count</option>
               </select>
            </div>
         </div>
      </div>
   </div>   
   
   <!-- Exclude posts -->
   <div class="row input exclude" id="alm-exclude-posts">
      <h3 class="heading"><?php _e('Exclude', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('A comma separated list of post ID\'s to exclude from query.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="exclude-posts" type="text" id="exclude-posts" value="" placeholder="199, 216, 345, 565">
            </div>
         </div>
      </div>
   </div>
   
   <!-- Offset -->
   <div class="row input offset" id="alm-offset">
      <h3 class="heading"><?php _e('Offset', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Offset the initial WordPress query by <em>\'n\'</em> number of posts', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">               
               <select class="alm_element" name="offset-select" id="offset-select">
                  <script>
                     var length = 21,
                         value = '';
                     for(var i = 0; i < length; i++){
                        value += '<option value="'+i+'">'+i+'</option>';
                     }
                     jQuery('#offset-select').append(value);
                  </script>
               </select>
            </div>
         </div>
      </div>
   </div>
   
   <!-- Display posts -->
   <div class="row input posts_per_page" id="alm-post-page">
      <h3 class="heading"><?php _e('Posts Per Page', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Select the number of posts to load with each request.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select class="alm_element" name="display_posts-select" id="display_posts-select">
                  <script>
                     var length = 31,
                         value = '';
                     for(var i = 1; i < length; i++){
                        if(i == 5){
                           value += '<option value="'+i+'" selected="selected">'+i+'</option>';
                        }else{
                           value += '<option value="'+i+'">'+i+'</option>';   
                        }                        
                     }
                     jQuery('#display_posts-select').append(value);
                  </script>
               </select>
            </div>
         </div>
      </div>
   </div>      
   
   
   <!-- Allow Scrolling Load -->
   <div class="row checkbox scroll_load" id="alm-scroll">
      <h3 class="heading"><?php _e('Load Posts on Scroll', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Load more posts as the user scrolls the page.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
               <li>
               <input class="alm_element" type="radio" name="scroll" value="t" id="scroll_t" checked>
               <label for="scroll_t"><?php _e('True', ALM_NAME); ?></label>
               </li>
               <li>
               <input class="alm_element" type="radio" name="scroll" value="f" id="scroll_f">
               <label for="scroll_f"><?php _e('False', ALM_NAME); ?></label>
               </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   
   
   <!-- Max Pages -->
   <div class="row input max_pages" id="alm-max-pages">
      <h3 class="heading"><?php _e('Max Pages', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Maximum number of pages to load while scrolling.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select class="alm_element" name="max-select" id="max-select">
                  <script>
                     var length = 11,
                         value = '';
                     for(var i = 1; i < length; i++){
                        if(i == 5){
                           value += '<option value="'+i+'" selected="selected">'+i+'</option>';
                        }else{
                           value += '<option value="'+i+'">'+i+'</option>';   
                        }                        
                     }
                     value += '<option value="none"><?php _e('Unlimited', ALM_NAME); ?></option>';
                     jQuery('#max-select').append(value);
                  </script>
               </select>
            </div>
         </div>
      </div>
   </div>
   
   
   <!-- Pause Post Loading -->
   <div class="row checkbox pause_load" id="alm-pause">
      <h3 class="heading"><?php _e('Pause Loading of Posts', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Do not load posts until user clicks <em>load</em> button.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="t" id="pause_t">
                    <label for="pause_t"><?php _e('True', ALM_NAME); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="f" id="pause_f" checked>
                    <label for="pause_f"><?php _e('False', ALM_NAME); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   
   
   <!-- Transition -->
   <div class="row input transition" id="alm-transition">
      <h3 class="heading"><?php _e('Transition', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Select a loading transition.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="transition" value="slide" id="transition-slide" checked>
                    <label for="transition-slide"><?php _e('Slide', ALM_NAME); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="transition" value="fade" id="transition-fade">
                    <label for="transition-fade"><?php _e('Fade', ALM_NAME); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </div>
   </div>  
   
   
   <!-- Button Text -->
   <div class="row input btn-label" id="alm-btn-label">
      <h3 class="heading"><?php _e('Button Label', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Customize the <em>Load More</em> button label.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="button-label" type="text" id="button-label" value="<?php _e('Older Posts', ALM_NAME); ?>">
            </div>
         </div>
      </div>
   </div>
   
   <div class="clear"></div>  
   