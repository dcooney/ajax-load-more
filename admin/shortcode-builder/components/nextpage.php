<?php if(has_action('alm_nextpage_installed')){ ?>
<div class="row input next-page add-on" id="alm-next-page">
   <h3 class="heading"><?php _e('Next Page', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable the infinite scrolling of multipage WordPress content using the', 'ajax-load-more'); ?> <span>< !--nextpage-- ></span> <?php _e('Quicktag', 'ajax-load-more'); ?>.</p>
		 </div>
      <div class="wrap">
         <div class="inner">
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="next-page" value="true" id="next-page-true" >
                 <label for="next-page-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="next-page" value="false" id="next-page-false"  checked="checked">
                 <label for="next-page-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>

      <div class="clear"></div>

      <div class="next-page-content" style="display: none;">

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current page/post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" value="get_the_ID()" id="next-page_post_id"  class="alm_element disabled-input" disabled="disabled">
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <div class="section-title">
            <h4><?php _e('URL Rewrite', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Update the browser address bar as pages come into view', 'ajax-load-more'); ?>.</p>
   		 </div>
   		 <div class="wrap">
            <div class="inner">
               <ul>
                   <li style="width:100%;">
                      <input class="alm_element" type="checkbox" name="next-page-url" id="next-page-url" value="true" checked="checked">
                      <label for="next-page-url"><?php _e('Yes, update the URL', 'ajax-load-more'); ?>.</label>
                   </li>
               </ul>
               <input type="checkbox" class="alm_element" name="next-page-url" id="next-page-url" checked="checked">
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <div class="section-title">
            <h4>
               <?php _e('Google Analytics', 'ajax-load-more'); ?>
               <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('You must have a reference to your Google Analytics tracking code already on the page','ajax-load-more'); ?>."></a>
            </h4>
   		 	<p><?php _e('Each time a page is loaded it will count as a pageview', 'ajax-load-more'); ?>.</p>
   		 </div>
   		 <div class="wrap">
            <div class="inner">
               <ul>
                   <li style="width:100%;">
                      <input class="alm_element" type="checkbox" name="next-page-pageviews" id="next-page-pageviews" value="true" checked="checked">
                      <label for="next-page-pageviews"><?php _e('Yes, send pageviews to Google Analytics', 'ajax-load-more'); ?>.</label>
                   </li>
               </ul>
               <input type="checkbox" class="alm_element" name="next-page-url" id="next-page-url" checked="checked">
            </div>
         </div>

         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4>
               <?php _e('Scroll to Page', 'ajax-load-more'); ?>
               <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set Scroll Speed to 0 to disable scrolling to page','ajax-load-more'); ?>."></a>
            </h4>
   		 	<p>
      		 	<?php _e('Scroll users automatically to the next page on \'Load More\' button click', 'ajax-load-more'); ?>.
   		 	</p>
   		 </div>
         <div class="wrap">
            <div class="inner half">
               <label for="next-page-scroll-speed" class="full">
                  <?php _e('Scroll Speed', 'ajax-load-more'); ?>
                  <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Scrolling speed in milliseconds (e.g. 1 second = 1000)','ajax-load-more'); ?>."></a>
               </label>
               <input id="next-page-scroll-speed" name="next-page-scroll-speed" class="alm_element sm" type="number" min="0" max="5000" step="25" value="250" placeholder="250">
            </div>
            <div class="inner half">
               <label for="next-page-scroll-top" class="full">
                  <?php _e('Scroll Top', 'ajax-load-more'); ?>
                  <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The scrolltop position of the window (used with scrolling and fwd/back browser buttons)','ajax-load-more'); ?>."></a>
               </label>
               <input id="next-page-scroll-top" name="next-page-scroll-top" class="alm_element sm" type="number" min="0" max="1000" step="1" value="30" placeholder="30">
            </div>
         </div>

         <p class="warning-callout">
            <?php _e('You must add the Next Page shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method. &raquo; <a href="https://connekthq.com/plugins/ajax-load-more/add-ons/next-page/" target="_blank">View documentation</a>', 'ajax-load-more'); ?>
         </p>

      </div>
   </div>
</div>
<?php } ?>