<?php if(has_action('alm_preload_installed')){ ?>
<div class="row input preload add-on" id="alm-preload">
   <h3 class="heading" tabindex="0"><?php _e('Preloaded', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      
      <section class="first">
         <div class="shortcode-builder--label">
   		 	<p><?php _e('Preload posts prior to making Ajax requests.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="shortcode-builder--fields">
            <div class="inner">
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="preload" value="true" id="preload-true" >
                    <label for="preload-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="preload" value="false" id="preload-false" checked="checked">
                    <label for="preload-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </section>
      
      <div class="preload_amount nested-component">            
	      <div class="nested-component--inner">
   	      <section>
   	         <div class="shortcode-builder--label">
   	            <h4><?php _e('Preload Amount', 'ajax-load-more'); ?></h4>
   	   		 	<p><?php _e('Enter the number of posts to preload.', 'ajax-load-more'); ?></p>
   	   		 </div>
   	         <div class="shortcode-builder--fields">
   	            <div class="inner">
   	               <input type="number" class="alm_element numbers-only" name="preload-amount" id="preload-amount" step="1" min="1" value="5">
   	            </div>
   	         </div>
   	      </section>
	      </div>
      </div>
      
   </div>
</div>
<?php } ?>