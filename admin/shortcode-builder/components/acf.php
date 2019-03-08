<?php if(has_action('alm_acf_installed')){ ?>
<div class="row input cache add-on" id="alm-acf">
   <h3 class="heading" tabindex="0"><?php _e('Advanced Custom Fields', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable compatibility with Advanced Custom Fields.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="acf" value="true" id="acf-true" >
                 <label for="acf-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="acf" value="false" id="acf-false"  checked="checked">
                 <label for="acf-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>

      <div class="acf-options">

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave this field blank and Ajax Load More will retrieve the ID from the global $post object','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('The ID of the current page/post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" value="" id="acf_post_id"  class="alm_element numbers-only">
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

		   <div class="section-title">
				<h4><?php _e('Field Type', 'ajax-load-more'); ?></h4>
				<p><?php _e('Select the type of ACF field', 'ajax-load-more'); ?>.</p>
			</div>
			<div class="wrap">
   			<div class="inner">
               <label class="offscreen" for="acf_field_type"><?php _e('Field Type', 'ajax-load-more'); ?>:</label>
               <select class="alm_element" name="acf_field_type" id="acf_field_type">
                  <option value="" selected="selected">-- <?php _e('Select Field Type', 'ajax-load-more'); ?> --</option>
                  <option value="flexible"><?php _e('Flexible Content', 'ajax-load-more'); ?></option>
                  <option value="gallery"><?php _e('Gallery', 'ajax-load-more'); ?></option>
                  <option value="relationship"><?php _e('Relationship', 'ajax-load-more'); ?></option>
                  <option value="repeater"><?php _e('Repeater', 'ajax-load-more'); ?></option>
               </select>
   			</div>
			</div>

         <div class="clear"></div>
         <hr/>

		   <div class="section-title">
				<h4><?php _e('Field Name', 'ajax-load-more'); ?></h4>
				<p><?php _e('Enter the name of the ACF field', 'ajax-load-more'); ?>.</p>
			</div>
			<div class="wrap">
   			<div class="inner">
               <label class="offscreen" for="acf_field_name"><?php _e('Field Type', 'ajax-load-more'); ?>:</label>
               <input type="text" class="alm_element" name="acf_field_name" id="acf_field_name" placeholder="{your_field_name}">
   			</div>
			</div>

      </div>
   </div>
</div>
<?php } ?>