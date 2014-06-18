

 <?php 	
 	// List available repeaters
	echo '<div class="row repeater" id="alm-repeaters">';   		
	echo '<h3 class="heading">'.__('Repeater', ALM_NAME). '</h3>';
	echo '<div class="expand-wrap">';
	echo '<div class="section-title">';
	echo '<p>'.__('Select a <a href="?page=ajax-load-more-repeaters">repeater</a> from drop menu.', ALM_NAME). '</p>';
	echo '</div>';
	echo '<div class="wrap"><div class="inner">';
	echo '<select name="repeater-select" id="repeater-select">';
	echo '<option name="default" id="chk-default" value="default" selected="selected">Default</option>';		
	if (has_action('alm_get_custom_repeaters')) {
	  do_action('alm_get_custom_repeaters');
	}
	echo '</select>';
	
	echo '</div></div>';
	if (!has_action('alm_get_custom_repeaters')) {
	  include( 'cta/extend.php');
	}
	echo '</div>';
	echo '</div>';
 	
 
   // List registered post_types
	$types = get_post_types();
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
            echo '<li><input type="checkbox" name="chk-'.$typeobj->name.'" id="chk-'.$typeobj->name.'" data-type="'.$typeobj->name.'"><label for="chk-'.$typeobj->name.'">'.$typeobj->labels->singular_name.'</label></li>';
			}
	    }
	    echo '</ul></div></div>';
	    echo '</div>';
	    echo '</div>';
   }
    
   // List Categories	    
	$cats = get_categories();
	if($cats){
		echo '<div class="row checkboxes categories" id="alm-categories">';
		echo '<h3 class="heading">' . __('Category', ALM_NAME) . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select a Category to query(by slug) from the drop menu.', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select name="category-select" id="category-select">';
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
		echo '<p>' . __('Select a Tag to query(by slug) from the drop menu.', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select name="tag-select" id="tag-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Tag', ALM_NAME) . ' --</option>';
	    foreach( $tags as $tag ){
         echo '<option name="chk-'.$tag->slug.'" id="chk-'.$tag->slug.'" value="'.$tag->slug.'">'.$tag->name.'</option>';
	    }
	    echo '</select></div></div>';
	    echo '</div>';
	    echo '</div>';
    }
    
    // List Authors	   
	$authors = get_users();
	if($authors){
		echo '<div class="row checkboxes authors" id="alm-tags">';
		echo '<h3 class="heading">' . __('Author', ALM_NAME) . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select an Author to query(by ID) from the drop menu.', ALM_NAME) . '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><select name="author-select" id="author-select">';
		echo '<option value="" selected="selected">-- ' . __('Select Author', ALM_NAME) . ' --</option>';
	    foreach( $authors as $author ){
         echo '<option name="chk-'.$author->user_login.'" id="chk-'.$author->user_login.'" value="'.$author->user_login.'">'.$author->display_name.'</option>';
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
               <input name="search-term" type="text" id="search-term" value="" placeholder="<?php _e('Enter search term', ALM_NAME); ?>">
            </div>
         </div>
      </div>
   </div>
   
   <!-- Exclude posts -->
   <div class="row input exclude" id="alm-exclude-posts">
      <h3 class="heading"><?php _e('Exclude Posts', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('A comma separated list of post ID\'s to exclude from query.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="exclude-posts" type="text" id="exclude-posts" value="" placeholder="199, 216, 345, 565">
            </div>
         </div>
      </div>
   </div>
   
   <!-- Offset -->
   <div class="row input offset" id="alm-offset">
      <h3 class="heading"><?php _e('Post Offset', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Offset the initial query by selecting a value from the drop menu.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">               
               <select name="offset-select" id="offset-select">
                  <script>
                     var length = 10,
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
               <select name="display_posts-select" id="display_posts-select">
                  <script>
                     var length = 22,
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
               <input type="radio" name="scroll" value="t" id="scroll_t" checked>
               <label for="scroll_t"><?php _e('True', ALM_NAME); ?></label>
               </li>
               <li>
               <input type="radio" name="scroll" value="f" id="scroll_f">
               <label for="scroll_f"><?php _e('False', ALM_NAME); ?></label>
               </li>
               </select>
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
               <select name="max-select" id="max-select">
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
               <input type="radio" name="pause" value="t" id="pause_t">
               <label for="pause_t"><?php _e('True', ALM_NAME); ?></label>
               </li>
               <li>
               <input type="radio" name="pause" value="f" id="pause_f" checked>
               <label for="pause_f"><?php _e('False', ALM_NAME); ?></label>
               </li>
               </select>
            </div>
         </div>
      </div>
   </div>
   
   
   <!-- Transition -->
   <div class="row input transition" id="alm-transition">
      <h3 class="heading"><?php _e('Transition', ALM_NAME); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Select a loading transition from the drop menu.', ALM_NAME); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select name="transition-select" id="transition-select">
                  <option value="slide" selected="selected"><?php _e('Slide', ALM_NAME); ?></option>
                  <option value="fade"><?php _e('Fade', ALM_NAME); ?></option>
               </select>
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
               <input name="button-label" type="text" id="button-label" value="<?php _e('Older Posts', ALM_NAME); ?>">
            </div>
         </div>
      </div>
   </div>
   <div class="clear"></div>  
   
   
   