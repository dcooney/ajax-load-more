<?php if(has_action('alm_paging_installed')){ ?>
<div class="row input paging add-on" id="alm-paging">
   <h3 class="heading" tabindex="0"><?php _e('Paging', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      
      <section class="first">
         <div class="shortcode-builder--label">
            <p><?php _e('Replace infinite scrolling with a paged ajax navigation system.', 'ajax-load-more'); ?></p>
         </div>
         <div class="shortcode-builder--fields">
            <div class="inner">
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="paging" value="true" id="paging-true" >
                    <label for="paging-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="paging" value="false" id="paging-false" checked="checked">
                    <label for="paging-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </section>
      
      <div id="nav-controls" class="nested-component">          
	      <div class="nested-component--inner">       

            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Navigation Classes', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Add custom CSS classes to the paging navigation menu.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	   		 <div class="shortcode-builder--fields">
   	            <div class="inner">
   	               <input type="text" class="alm_element" name="paging-classes" id="paging-classes" placeholder="portfolio-paging-menu">
   	            </div>
   	         </div>
            </section>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Show at Most', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('The maximum amount of page menu items to show at a time. <br/.>0 = no maximum', 'ajax-load-more'); ?></p>
   	   		 </div>
   	   		 <div class="shortcode-builder--fields">
   	            <div class="inner">
   	               <input type="number" class="alm_element numbers-only" name="show-at-most" id="show-at-most" step="2" min="0" value="7">
   	            </div>
   	         </div>
            </section>
            
            <?php if( ALM_PAGING_VERSION > '1.5.2'){ ?>
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Scroll', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Move users to the top of the Ajax Load More container after a paging click event.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	   		 <div class="shortcode-builder--fields">
   	            <section class="first">
      	            <div class="half">
      	               <label for="paging-scroll" class="full"><?php _e('Enable Scrolling', 'ajax-load-more'); ?></label>               
      	               <select class="alm_element" name="paging-scroll" id="paging-scroll">
      	                   <option value="true" selected="selected"><?php _e('True', 'ajax-load-more'); ?></option>
      	                   <option value="false"><?php _e('False', 'ajax-load-more'); ?></option>
      	               </select>
      	            </div>
      	            <div class="half paging-scrolltop-wrap">
      	               <label for="paging-scrolltop" class="full">
      	                  <?php _e('Scroll Top', 'ajax-load-more'); ?>
      	                  <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The scrolltop position of the browser window when scrolling back to top.','ajax-load-more'); ?>"></a>
      	               </label>
      	               <input id="paging-scrolltop" name="paging-scrolltop" class="alm_element sm" type="number" min="0" max="1000" step="1" value="100" placeholder="100">
      	            </div>
      	         </section>
   	         </div>
            </section>
            <?php } ?>
            
            <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Controls', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Show first/last and next/previous buttons in the paging navigation.', 'ajax-load-more'); ?></p>
   	         </div>
   	         <div class="shortcode-builder--fields">
   	            <div class="inner">
   	               <ul>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="paging-controls" value="true" id="paging-controls-true" >
   	                    <label for="paging-controls-true"><?php _e('True', 'ajax-load-more'); ?></label>
   	                   </li>
   	                   <li>
   	                    <input class="alm_element" type="radio" name="paging-controls" value="false" id="paging-controls-false" checked="checked">
   	                    <label for="paging-controls-false"><?php _e('False', 'ajax-load-more'); ?></label>
   	                   </li>
   	               </ul>
   	            </div>
   	         </div>
            </section>
            
	         <div id="paging-controls-nav" class="nested-component">	     
   	         <div class="nested-component--inner">       
   	            <section>
      	            <div class="shortcode-builder--label">
      	               <h4><?php _e('First Page', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave empty to not render button.', 'ajax-load-more'); ?>"></a></h4>
      	      		 	<p>
      	         		 	<?php _e('Label for the <span>First Page</span> button.', 'ajax-load-more'); ?>
      	      		 	</p>
      	      		 </div>
      	      		 <div class="shortcode-builder--fields">
      	               <div class="inner">
      	                  <input type="text" class="alm_element" name="paging-first-label" id="paging-first-label" placeholder="First">
      	               </div>
      	            </div>
   	            </section>
   	            
   	            <section>
      	            <div class="shortcode-builder--label">
      	               <h4><?php _e('Last Page', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave empty to not render button.', 'ajax-load-more'); ?>"></a></h4>
      	      		 	<p>
      	         		 	<?php _e('Label for the <span>Last Page</span> button.', 'ajax-load-more'); ?>
      	      		 	</p>
      	      		 </div>
      	      		 <div class="shortcode-builder--fields">
      	               <div class="inner">
      	                  <input type="text" class="alm_element" name="paging-last-label" id="paging-last-label" placeholder="Last">
      	               </div>
      	            </div>
   	            </section>
   	            
   	            <section>
      	            <div class="shortcode-builder--label">
      	               <h4><?php _e('Previous Page', 'ajax-load-more'); ?></h4>
      	      		 	<p>
      	         		 	<?php _e('Label for the <span>Previous Page</span> button.', 'ajax-load-more'); ?>
      	      		 	</p>
      	      		 </div>
      	      		 <div class="shortcode-builder--fields">
      	               <div class="inner">
      	                  <input type="text" class="alm_element" name="paging-previous-label" id="paging-previous-label" value="Prev" placeholder="Prev">
      	               </div>
      	            </div> 
   	            </section>
   	            
   	            <section>
      	            <div class="shortcode-builder--label">
      	               <h4><?php _e('Next Page', 'ajax-load-more'); ?></h4>
      	      		 	<p>
      	         		 	<?php _e('Label for the <span>Next Page</span> button.', 'ajax-load-more'); ?>
      	      		 	</p>
      	      		 </div>
      	      		 <div class="shortcode-builder--fields">
      	               <div class="inner">
      	                  <input type="text" class="alm_element" name="paging-next-label" id="paging-next-label" value="Next" placeholder="Next">
      	               </div>
      	            </div> 
   	            </section>
   	         </div>
	                       
	         </div>
	      </div>
      </div>
   </div>
</div>
<?php } ?>