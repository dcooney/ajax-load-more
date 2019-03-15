<?php if(has_action('alm_seo_installed')){ ?>
<!-- SEO -->
<div class="row input seo add-on" id="alm-seo">
   <h3 class="heading" tabindex="0"><?php _e('SEO (Search Engine Optimization)', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable address bar URL rewrites as users page through ajax loaded content.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="true" id="seo-true" >
                 <label for="seo-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="false" id="seo-false"  checked="checked">
                 <label for="seo-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
   </div>
</div>
<?php } ?>