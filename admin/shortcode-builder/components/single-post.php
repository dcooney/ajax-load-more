<?php if(has_action('alm_single_post_installed')){ ?>
<div class="row input previous-post add-on" id="alm-previous-post">
   <h3 class="heading" tabindex="0"><?php _e('Single Posts', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable the infinite scrolling of single posts.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="prev-post" value="true" id="prev-post-true" >
                 <label for="prev-post-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="prev-post" value="false" id="prev-post-false"  checked="checked">
                 <label for="prev-post-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>
      
      <div class="prev_post_options" style="display: none;">
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current single post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" value="get_the_ID()" id="pp_id"  class="alm_element disabled-input" disabled="disabled">
            </div>
         </div>
         
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post Ordering', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('By default, the Single Posts add-on will use the core WordPress `get_previous_post` function, but you can over ride that here.', 'ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Select the load order of posts while infinite scrolling.', 'ajax-load-more'); ?></p>
   		 	<p><a class="button-small" href="https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/#ordering" target="_blank"><?php _e('View Docs', 'ajax-load-more'); ?></a></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select class="alm_element" name="pp-order" id="pp-order">
	               <option value="previous" selected="selected"><?php _e('Previous Post (by date DESC)', 'ajax-load-more'); ?></option>
	               <option value="latest"><?php _e('Latest (Start at most recent post)', 'ajax-load-more'); ?></option>
	               <option value="next"><?php _e('Next Post (by date ASC)', 'ajax-load-more'); ?></option>
	               <option value="post__in"><?php _e('Post ID Array', 'ajax-load-more'); ?></option>
               </select>
            </div>
         </div>   
               
         <div class="clear"></div>
         <div id="pp_post__in" style="display: none;">
	         <div class="clear"></div>
				<hr>
				<div class="section-title">
	            <h4><?php _e('Post ID Array', 'ajax-load-more'); ?></h4>
	   		 	<p><?php _e('A comma separated list of post ID\'s to query by order.', 'ajax-load-more'); ?></p>
   		 	</div>
	         <div class="wrap">
	            <div class="inner">
	               <input id="pp_post__in_input" class="alm_element numbers-only" type="text" placeholder="23, 66, 99">
	            </div>
	         </div>
         </div>
         
	      <div id="pp_extras">
	         <div class="clear"></div>
	         <hr>
	         <div class="section-title">
	            <h4><?php _e('Taxonomy', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Selecting a taxonomy means only previous posts from the same taxonomy term will be returned. If a post has multiple terms attached, each term will be considered using an OR relationship query','ajax-load-more'); ?>."></a></h4>
	   		 	<p><?php _e('Query previous posts from the same taxonomy term(s).', 'ajax-load-more'); ?></p>
	   		 </div>
	         <div class="wrap">
	            <div class="inner">
	               <?php
	            	// Taxonomies
	            	$pp_tax_args = array(
	            		'public'   => true,
	            		'_builtin' => false
	            	);
	            	$pp_tax_output = 'objects';
	            	$pp_taxonomies = get_taxonomies( $pp_tax_args, $pp_tax_output );
	            	echo '<select class="alm_element" name="pp-taxonomy-select" id="pp-taxonomy-select">';
	         		echo '<option value="" selected="selected">-- ' . __('Select Taxonomy', 'ajax-load-more') . ' --</option>';
	         	   echo '<option value="category">' . __('Category', 'ajax-load-more') . '</option>';
	         	   echo '<option value="post_tag">' . __('Tag', 'ajax-load-more') . '</option>';
	               if ( $pp_taxonomies ) {
	
	            	   foreach( $pp_taxonomies as $pp_taxonomy ){
	                     echo '<option name="pp-'.$pp_taxonomy->query_var.'" id="pp-'.$pp_taxonomy->query_var.'" value="'.$pp_taxonomy->query_var.'">'.$pp_taxonomy->label.'</option>';
	            	   }
	
	            	}
	            	echo '</select>';
	            	?>
	            </div>
	         </div>
	
	         <div class="clear"></div>
	         <hr>
	         <div class="section-title">
	            <h4><?php _e('Excluded Terms ', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('A comma-separated list of excluded terms by ID','ajax-load-more'); ?>."></a></h4>
	   		 	<p><?php _e('Exclude posts by term ID from the previous post query.', 'ajax-load-more'); ?></p>
	   		 </div>
	         <div class="wrap">
	            <div class="inner">
	               <input type="text" id="pp-term-exclude" class="alm_element numbers-only" value="" placeholder="5, 8, 35">
	            </div>
	         </div>
	      </div>      
		   
         <div class="clear"></div>
         <hr>
         <p class="warning-callout">
            <?php _e('You must add the Single Post shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method.', 'ajax-load-more'); ?> <a class="button-small" href="https://connekthq.com/plugins/ajax-load-more/add-ons/single-post/" target="_blank"><?php _e('View Docs', 'ajax-load-more'); ?></a>
         </p>
      </div>
   </div>
</div>
<?php } ?>