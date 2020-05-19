<?php if(has_action('alm_terms_installed')) { ?>
<div class="row input term_query add-on" id="alm-term_query">
   <h3 class="heading" tabindex="0"><?php _e('Terms', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      
      <section class="first">
         <div class="shortcode-builder--label">
   		 	<p><?php _e('Enable Terms Query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="shortcode-builder--fields">
            <div class="inner">
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="term_query" value="true" id="term_query-true" >
                    <label for="term_query-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="term_query" value="false" id="term_query-false"  checked="checked">
                    <label for="term_query-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </section>

      <div class="nested-component term_query-options" style="display: none;">            
	      <div class="nested-component--inner">
            <?php
	            // Taxonomies
					$tax_args = array(
						'public'   => true,
						'_builtin' => false
					);
					$tax_output = 'objects';
					$taxonomies = get_taxonomies( $tax_args, $tax_output );
				?>
            <section>
   	         <div class="shortcode-builder--label">
	            	<h4><?php _e('Taxonomy', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Select a taxonomy to query.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <select class="alm_element multiple" name="term_query-taxonomy-select" id="term_query-taxonomy-select" multiple="multiple">
							   <option value="category"><?php _e('Category', 'ajax-load-more'); ?></option>
							   <option value="post_tag"><?php _e('Tag', 'ajax-load-more'); ?></option>
							   <?php 
								if($taxonomies){
								   foreach( $taxonomies as $taxonomy ){ ?>
						      <option name="chk-<?php echo $taxonomy->query_var; ?>" id="chk-<?php echo $taxonomy->query_var; ?>" value="<?php echo $taxonomy->query_var;?>"><?php echo $taxonomy->label; ?></option>
							   <?php 
								   }
								} ?>
						   </select>
   	   			</div>
   	         </div>
            </section>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Number', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave empty to return all terms.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('The number of terms to return per page.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <input type="number" id="term_query-number" class="alm_element numbers-only" name="term_query-number" value="5">
   	   			</div>
   	         </div>
            </section>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Hide Empty', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Whether to hide terms not assigned to any posts.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
							<select class="alm_element term_query-hide-empty" id="term_query-hide-empty">
								<option value="true" selected="selected"><?php _e('True', 'ajax-load-more'); ?></option>
								<option value="false"><?php _e('False', 'ajax-load-more'); ?></option>
							</select>
   	   			</div>
   	         </div>
            </section>
	
	      </div>
	      
      </div>
   </div>
</div>
<?php } ?>