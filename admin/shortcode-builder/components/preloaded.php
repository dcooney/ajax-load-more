<?php if(has_action('alm_preload_installed')){ ?>
<div class="row input preload add-on" id="alm-preload">
   <h3 class="heading" tabindex="0"><?php _e('Preloaded', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Preload posts prior to making Ajax requests.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
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
      <div class="clear"></div>
      <div class="preload_amount">
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Preload Amount', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Enter the number of posts to preload.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="preload-amount" id="preload-amount" step="1" min="1" value="5">
            </div>
         </div>
      </div>
   </div>
</div>
<?php } ?>