<?php if(has_action('alm_filters_installed')){ ?>
<div class="row input filters add-on" id="alm-filters">
   <h3 class="heading" tabindex="0"><?php _e('Filters', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      
      <section class="first">
         <div class="shortcode-builder--label">
   		 	<p><?php _e('Enable filters with this Ajax Load More instance.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="shortcode-builder--fields">
            <div class="inner">
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="filters" value="true" id="filters-true" >
                    <label for="filters-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="filters" value="false" id="filters-false"  checked="checked">
                    <label for="filters-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </section>
      
      <div class="filters_options nested-component">            
	      <div class="nested-component--inner">	
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Target', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('A target ID is not required but it is highly recommended to avoid issues with querystring parsing on page load.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('Connect Ajax Load More to a specific <a href="admin.php?page=ajax-load-more-filters">filter instance</a> by selecting the filter ID.', 'ajax-load-more'); ?></p>
   	   		</div>
   	         <div class="shortcode-builder--fields">
   	            <div class="inner">
   	               <?php 
   	                  if(class_exists('ALMFilters')){
   		                  $current_filters = ALMFilters::alm_get_all_filters();
   		                  
   								if($current_filters){  
   									$count = 0;
   									$return = '';
   									foreach( $current_filters as $the_filter ) {
   										if(!in_array($the_filter, array('alm_filters_license_key', 'alm_filters_license_status'))){
   											$count++;
   											$value = str_replace(ALM_FILTERS_PREFIX, '', $the_filter);
   											$return .= '<option value="'. $value .'">'. $value .'</option>';				
   										}							
   									}
   									if($count > 0){
   										echo '<select class="alm_element" name="filters-id" id="filters-id">';
   											echo '<option value="" selected="selected">'. __('-- Select Filter --', 'ajax-load-more') .'</option>';
   											echo $return;
   										echo '</select>';
   									} else { ?>
   										<p><?php _e('You don\'t have any filters! The first step is to create one', 'ajax-load-more'); ?>!</p>
   									<?php	
   									}           
   		                  
   		                  }
   		               }
   	               ?>
   	            </div>
   	         </div>
            </section>
            <section>	
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('URLs', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Querystring URLs allow  users to share deep links to filtered content.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('Update the browser querystring with active filters values.','ajax-load-more'); ?><br/><small>e.g. ?category=design&tag=mobile</small></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-url" value="true" id="filters-url-true" checked="checked">
   	                    <label for="filters-url-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-url" value="false" id="filters-url-false">
   	                    <label for="filters-url-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	   			</div>
   	         </div>
            </section>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Paging Parameters', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Adding paging parameters will allow for deep linking to a paged filter.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('Add <span>?pg={x}</span> to the browser querystring as users load additional pages.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-paging" value="true" id="filters-paging-true" checked="checked">
   	                    <label for="filters-paging-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-paging" value="false" id="filters-paging-false">
   	                    <label for="filters-paging-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	   			</div>
   	         </div>
            </section>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Scroll', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('When a user filters a list they will be auto scrolled back to the top.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('Automatically scroll users to the top of list after a filter update.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-scroll" value="true" id="filters-scroll-true">
   	                    <label for="filters-scroll-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-scroll" value="false" id="filters-scroll-false" checked="checked">
   	                    <label for="filters-scroll-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	   			</div>
   	         </div>
            </section>	         
				
				<div id="filter-scrollTopOptions" style="display: none; overflow: hidden;">
					<section>
   		         <div class="shortcode-builder--label">
   		            <h4><?php _e('Scroll Top', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The Scroll Top value is the pixel position the window will be scrolled to.','ajax-load-more'); ?>"></a></h4>
   		   		 	<p><?php _e('The offset top position of the window used with `Paging Parameters` and `Scroll`.', 'ajax-load-more'); ?></p>
   		   		 </div>
   		         <div class="shortcode-builder--fields">
   		   			<div class="inner">
   		               <label for="filters-scrolltop" class="full">
   		                  <?php _e('Scroll Top Value', 'ajax-load-more'); ?>
   		               </label>
   		               <div class="flex-input">
   		                  <input id="filters-scrolltop" name="filters-scrolltop" class="alm_element" type="number" min="0" max="1000" step="1" value="30" placeholder="30">
   		                  <span><strong>px</strong></span>
   		               </div>
   		   			</div>
   		         </div>
					</section>
				</div>
					
				<section>	
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Analytics', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Each time the filter is updated a pageview will be sent to Google Analytics.','ajax-load-more'); ?>"></a></h4>
   	   		 	<p><?php _e('Send pageviews to Google Analytics.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-analytics" value="true" id="filters-analytics-true" checked="checked">
   	                    <label for="filters-analytics-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-analytics" value="false" id="filters-analytics-false">
   	                    <label for="filters-analytics-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	   			</div>
   	         </div>
				</section>
            
            <section>

   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Debug Mode', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Enable debugging of the Ajax Load More filter object in the browser console.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	   			<div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-debug" value="true" id="filters-debug-true">
   	                    <label for="filters-debug-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="filters-debug" value="false" id="filters-debug-false" checked="checked">
   	                    <label for="filters-debug-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	   			</div>
   	         </div>
            </section>	
	      </div>
	      
      </div>
   </div>
</div>
<?php } ?>