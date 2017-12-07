<?php if(has_action('alm_prev_post_installed')){ ?>
<div class="row input previous-post add-on" id="alm-previous-post">
   <h3 class="heading"><?php _e('Previous Post', 'ajax-load-more'); ?></h3>
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
      <div class="prev_post_id" style="display: none;">
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current single post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" value="get_the_ID()" id="prev_post_id"  class="alm_element disabled-input" disabled="disabled">
            </div>
         </div>
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

         <p class="warning-callout">
            <?php _e('You must add the Previous Post shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method. &raquo; <a href="https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/" target="_blank">View documentation</a>', 'ajax-load-more'); ?>
         </p>
      </div>
   </div>
</div>
<?php } ?>