<?php if(has_action('alm_comments_installed')){ ?>
<div class="row input comments add-on" id="alm-comments">
   <h3 class="heading" tabindex="0"><?php _e('Comments', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable Ajax Load More to display blog comments.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="comments" value="true" id="comments-true" >
                 <label for="comments-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="comments" value="false" id="comments-false"  checked="checked">
                 <label for="comments-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>
      <div class="comments_extras">

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current single post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" value="get_the_ID()" id="comments_post_id"  class="alm_element disabled-input" disabled="disabled">
            </div>
         </div>

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Comments Per Page', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The number of top level items to show for each page of comments.', 'ajax-load-more'); ?></p>
         </div>
   		<div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="comments-per-page" id="comments-per-page" step="1" min="1" value="5">
            </div>
         </div>
         <div class="section-title full">
            <p><?php _e('<strong>Note</strong>: The amount selected does NOT include comment replies.', 'ajax-load-more'); ?></p>
         </div>

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Comment Type', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The type of comment(s) to display.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select class="alm_element comments_type" id="comments_type">
                  <option value="comment" selected="selected"><?php _e('Comment', 'ajax-load-more'); ?></option>
                  <option value="all"><?php _e('All', 'ajax-load-more'); ?></option>
                  <option value="trackback"><?php _e('Trackback', 'ajax-load-more'); ?></option>
                  <option value="pingback"><?php _e('Pingback', 'ajax-load-more'); ?></option>
                  <option value="pings"><?php _e('Pings', 'ajax-load-more'); ?></option>
               </select>
            </div>
         </div>

         <div class="clear"></div>
         <hr>
         <div class="section-title">
	         <h4><?php _e('Comment Style', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select the HTML container style for your comments.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
	            <ul class="comment_container_type">
                   <li>
                    <input type="radio" id="comment-type-ol" value="ol" name="alm_comment_style" class="alm_element" checked="checked">
                    <label for="comment-type-ol">&lt;ol&gt; &lt;/ol&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="comment-type-ul" value="ul" name="alm_comment_style" class="alm_element">
                    <label for="comment-type-ul">&lt;ul&gt; &lt;/ul&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="comment-type-div" value="div" name="alm_comment_style" class="alm_element">
                    <label for="comment-type-div">&lt;div&gt; &lt;/div&gt;</label>
                   </li>
               </ul>
            </div>
         </div>

         <div class="clear"></div>
         <hr>

         <div class="section-title">
            <h4><?php _e('Comment Template', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select a repeater template that will display comment data.', 'ajax-load-more'); ?></p>
   		 </div>

         <div class="wrap">
            <div class="inner">
               <select class="alm_element comments_template" id="comments_template">
                  <option value="none" selected="selected"><?php _e('None', 'ajax-load-more'); ?></option>
                  <option name="default" id="chk-default" value="default"><?php _e('Default', 'ajax-load-more'); ?></option>
               	<?php if (has_action('alm_get_custom_repeaters')) {
               	  do_action('alm_get_custom_repeaters');
               	}
               	if (has_action('alm_get_unlimited_repeaters')) {
               	  do_action('alm_get_unlimited_repeaters');
               	}
               	?>
               </select>
            </div>
         </div>
         <div class="section-title full">
            <p><?php _e('<strong>Note</strong>: <span>None</span> will use the default WordPress comment layout.', 'ajax-load-more'); ?></p>
         </div>
         <div class="spacer"></div>
         <div class="clear"></div>
         <div class="select-theme-repeater">
            <span class="or"><?php _e('or', 'ajax-load-more'); ?></span>
            <hr/>
            <div class="spacer"></div>
            <div class="section-title">
               <h4><?php _e('Callback Function', 'ajax-load-more'); ?></h4>
      		 	<p><?php _e('A custom <a href="https://codex.wordpress.org/Function_Reference/wp_list_comments#Arguments" target="_blank">callback</a> function that will display each comment.', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">
                  <input type="text" value="" placeholder="function_name" id="comments_callback"  class="alm_element">
               </div>
            </div>
            <div class="section-title full">
               <p><?php _e('<strong>Note</strong>: The majority of premium themes have a custom callback function for displaying comments. Please see comments.php or functions.php within your theme directory to locate the callback function for your theme.', 'ajax-load-more'); ?></p>
            </div>
         </div>
         
         <div class="clear"></div>
         <hr>
         <p class="warning-callout">
            <?php _e('You must add the comments shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method.', 'ajax-load-more'); ?> <a class="button-small" href="https://connekthq.com/plugins/ajax-load-more/add-ons/comments/" target="_blank"><?php _e('View Docs', 'ajax-load-more'); ?></a>
         </p>

      </div>
   </div>
</div>
<?php } ?>