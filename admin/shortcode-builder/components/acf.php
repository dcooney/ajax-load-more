<?php if(has_action('alm_acf_installed')){ ?>
<div class="row input cache add-on" id="alm-acf">
   <h3 class="heading" tabindex="0"><?php _e('Advanced Custom Fields', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
	   <section class="first">
	      <div class="shortcode-builder--label">
			 	<p><?php _e('Enable compatibility with Advanced Custom Fields.', 'ajax-load-more'); ?></p>
			 </div>
	      <div class="shortcode-builder--fields">
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
      </section>
      <div class="clear"></div>

      <div class="acf-options nested-component">            
	      <div class="nested-component--inner">	
				
				<section>
		         <div class="shortcode-builder--label">
		            <h4><?php _e('Post ID', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave this field blank and Ajax Load More will retrieve the ID from the global $post object.','ajax-load-more'); ?>"></a></h4>
		   		 	<p><?php _e('The ID of the current page/post.', 'ajax-load-more'); ?></p>
		   		 </div>
		         <div class="shortcode-builder--fields">
		            <div class="inner">
		               <input type="text" value="" id="acf_post_id"  class="alm_element numbers-only">
		            </div>
		         </div>
				</section>
				
				<section>
				   <div class="shortcode-builder--label">
						<h4><?php _e('Field Type', 'ajax-load-more'); ?></h4>
						<p><?php _e('Select the type of ACF field.', 'ajax-load-more'); ?></p>
					</div>
					<div class="shortcode-builder--fields">
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
				</section>
	
				<section>
				   <div class="shortcode-builder--label">
						<h4><?php _e('Field Name', 'ajax-load-more'); ?></h4>
						<p><?php _e('Enter the name of the ACF field.', 'ajax-load-more'); ?></p>
					</div>
					<div class="shortcode-builder--fields">
		   			<div class="inner">
		               <label class="offscreen" for="acf_field_name"><?php _e('Field Type', 'ajax-load-more'); ?>:</label>
		               <input type="text" class="alm_element" name="acf_field_name" id="acf_field_name" placeholder="field_name">
		   			</div>
					</div>
				</section>
				
				<section>
					<div class="shortcode-builder--label">
						<h4><?php _e('Parent Field Name', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('This option is only relevant when trying to access content in sub fields.','ajax-load-more'); ?>"></a></h4>
						<p>
	   					<?php _e('If this a nested ACF <a href="https://www.advancedcustomfields.com/resources/get_sub_field/" target="_blank">sub_field</a>, enter the parent field names.', 'ajax-load-more'); ?>
	   					<br/><small><?php _e('Access fields up to the three levels deep by colon separating the field names.', 'ajax-load-more'); ?><br/>e.g. top_parent:second_level</small>
	               </p>
					</div>
					<div class="shortcode-builder--fields">
		   			<div class="inner">
		               <label class="offscreen" for="acf_parent_field_name"><?php _e('Field Name', 'ajax-load-more'); ?>:</label>
		               <input type="text" class="alm_element" name="acf_parent_field_name" id="acf_parent_field_name" placeholder="top_parent:second_level">
		   			</div>
					</div>
				</section>
	      </div>
      </div>
   </div>
</div>
<?php } ?>