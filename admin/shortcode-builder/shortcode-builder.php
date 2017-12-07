<span class="toggle-all" data-id="shortcode-builder-state">
	<span class="inner-wrap">
		<em class="collapse"><?php _e('Collapse All', 'ajax-load-more'); ?></em>
		<em class="expand"><?php _e('Expand All', 'ajax-load-more'); ?></em>
	</span>
</span>

<?php
   $alm_options = get_option( 'alm_settings' );
   if(!isset($alm_options['_alm_disable_dynamic'])){ // Check if '_alm_disable_dynamic is set within settings
	   $alm_options['_alm_disable_dynamic'] = '0';
	}
	$disable_dynamic_content = $alm_options['_alm_disable_dynamic'];
?>


<!-- Add-ons -->
<?php 
	// ../admin-functions.php
	if(alm_has_addon_shortcodes()) : ?>

<div class="shortcode-parameter-wrap">
   <h2 class="shortcode-title"><?php _e('Add-ons & Extensions', 'ajax-load-more'); ?></h2>

   <?php 
	   require_once('components/acf.php');
	   require_once('components/cache.php');
	   require_once('components/cta.php');
	   require_once('components/comments.php');
	   require_once('components/nextpage.php');
	   require_once('components/paging.php');
	   require_once('components/preloaded.php');
	   require_once('components/previous-post.php');
	   require_once('components/rest-api.php');
	   require_once('components/seo.php');
	   require_once('components/users.php');
	?>

</div>
<?php endif; ?>
<!-- End Add-ons -->

<!-- Display Settings -->
<div class="shortcode-parameter-wrap">
   <h2 class="shortcode-title"><?php _e('Display Settings', 'ajax-load-more'); ?></h2>

   <!-- Template Selection -->
   <?php
   echo '<div class="row repeater" id="alm-repeaters">';
	echo '<h3 class="heading">'.__('Template', 'ajax-load-more'). '</h3>';
	echo '<div class="expand-wrap">';
	echo '<div class="section-title">';
	if (has_action('alm_theme_repeaters_selection')){
		echo '<h4>'.__('Repeater Template', 'ajax-load-more').'</h4>';
	}
	echo '<p>'.__('Select which <a href="admin.php?page=ajax-load-more-repeaters" target="_parent">repeater template</a> you would like to use.', 'ajax-load-more'). '</p>';
	echo '</div>';
	echo '<div class="wrap"><div class="inner">';
	echo '<select name="repeater-select" class="alm_element">';
	echo '<option name="default" value="default" selected="selected">Default</option>';
	if (has_action('alm_get_custom_repeaters')) {
	  do_action('alm_get_custom_repeaters');
	}
	if (has_action('alm_get_unlimited_repeaters')) {
	  do_action('alm_get_unlimited_repeaters');
	}
	echo '</select>';

	echo '</div></div>';
	?>

	<?php // Get Theme Repeaters
   if (has_action('alm_theme_repeaters_selection')){
      do_action('alm_theme_repeaters_selection');
   }
   ?>

	<?php // Custom Repeaters v2 - /cta/extend.php
	if (!has_action('alm_get_unlimited_repeaters') && !has_action('alm_get_custom_repeaters') && !has_action('alm_theme_repeaters_installed')) {
      include( ALM_PATH . 'admin/includes/cta/extend.php');
	}

	echo '</div>';
	echo '</div>';
	?>
   <!-- End Template Selection -->

   <!-- Options -->
   <div class="row input alm-instance-options" id="alm-instance-options">
      <h3 class="heading"><?php _e('Options', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">

         <!-- ID -->
         <div class="section-title">
            <h4><?php _e('ID', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Adding a unique ID will allow you target this specific Ajax Load More instance with the alm_query_args_id() filter','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Set a unique ID for this Ajax Load More instance.', 'ajax-load-more'); ?><br/>
   		 	&raquo; <a href="https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_query_args_[id]" target="_blank">Learn More</a></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="text" class="alm_element" name="unique-id" id="unique-id">
               <div class="clear"></div>
               <p class="generate-id"><a href="javascript:void(0);" data-id="unique-id"><i class="fa fa-random"></i> <?php _e('Generate Unique ID', 'ajax-load-more'); ?></a></p>
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <!-- Container Type -->
         <div class="section-title">
            <h4><?php _e('Container Type', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('You can define a global container type on the Ajax Load More settings screen','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Override the global Container Type  set on the <a href="admin.php?page=ajax-load-more">ALM Settings page</a>.', 'ajax-load-more'); ?></p>
   		</div>
         <div class="wrap">
            <div class="inner">
               <ul class="container_type">
                   <li>
                    <input type="radio" id="type-ul" value="ul" name="alm_container_type" class="alm_element">
                    <label for="type-ul">&lt;ul /&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="type-div" value="div" name="alm_container_type" class="alm_element">
                    <label for="type-div">&lt;div /&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="type-ol" value="ol" name="alm_container_type" class="alm_element">
                    <label for="type-ol">&lt;ol /&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="type-table" value="table" name="alm_container_type" class="alm_element">
                    <label for="type-table">&lt;table /&gt;</label>
                   </li>
               </ul>
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <!-- Container Classes -->
         <div class="section-title">
            <h4><?php _e('Container Classes', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('You can define global container classes on the Ajax Load More settings screen','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Add custom CSS classes to the <span>.alm-listing</span> container. <br/><br/> e.g. portfolio-listing large-12 etc', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="container-classes" type="text" id="container-classes" placeholder="listing large-12 columns">
            </div>
         </div>
      </div>
   </div>
   <!-- End Options -->

   <!-- Button Labels -->
   <div class="row input btn-label" id="alm-btn-label">
      <h3 class="heading"><?php _e('Button Labels', 'ajax-load-more'); ?></h3>

      <div class="expand-wrap">

         <div class="section-title">
	         <h4><?php _e('Label', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Customize the text of the <em>Load More</em> button.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="button-label" type="text" id="button-label" value="<?php _e('Older Posts', 'ajax-load-more'); ?>">
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <div class="section-title">
	         <h4><?php _e('Loading Label', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave field empty to not update text while loading content','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Update the text of the <em>Load More</em> button while content is loading.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="button-loading-label" type="text" id="button-loading-label" value="" placeholder="<?php _e('Loading Posts...', 'ajax-load-more'); ?>">
            </div>
         </div>

      </div>
   </div>
   <!-- Button Labels -->

   <!-- Scrolling -->
   <div class="row checkbox scroll_load" id="alm-scroll">
      <h3 class="heading"><?php _e('Scrolling', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Enable Scrolling', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Load more posts as the user scrolls the page.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="scroll" value="t" id="scroll_t" checked>
                     <label for="scroll_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="scroll" value="f" id="scroll_f">
                     <label for="scroll_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
            </div>
         </div>
         <div class="clear"></div>
         <div class="scroll_distance">
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Scroll Distance', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Distance is based on the position of the loading button from the bottom of the screen','ajax-load-more'); ?>."></a></h4>
      		 	<p><?php _e('The distance from the bottom of the screen to trigger loading of posts. (Default = 150)', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">
                  <input type="number" class="alm_element numbers-only" name="scroll-distance" id="scroll-distance" step="10" min="0" value="150">
               </div>
            </div>
         </div>
         <div class="scroll_container">
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Scroll Container', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Confine Ajax Load More scrolling to a parent container','ajax-load-more'); ?>."></a></h4>
      		 	<p><?php _e('Enter the ID or classname of the parent container', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">
                  <input type="text" class="alm_element" name="scroll-container" id="scroll-container" placeholder="#my-div">
               </div>
            </div>
         </div>
         <div class="max_pages">
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Maximum Pages', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('If using an Infinite Scroll button style you should set this to 0','ajax-load-more'); ?>."></a></h4>
      		 	<p><?php _e('Maximum number of pages to load while scrolling. (0 = unlimited)', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">
                  <input type="number" class="alm_element numbers-only" name="max-select" id="max-select" step="1" min="0" value="0">
               </div>
            </div>
         </div>
         <div class="pause_override">
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Pause Override', 'ajax-load-more'); ?></h4>
      		 	<p><?php _e('Allow scrolling to override the Pause parameter and trigger the loading of posts on scroll.', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="pause_override" value="t" id="pause_override_t">
                     <label for="pause_override_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="pause_override" value="f" id="pause_override_f" checked="checked">
                     <label for="pause_override_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <!-- End Scrolling -->

   <!-- Transition -->
   <div class="row input transition" id="alm-transition">
      <h3 class="heading"><?php _e('Transition', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Type', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select a loading transition style.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
	            <select class="alm_element transition" name="transition">
                  <option value="slide" selected="selected"><?php _e('Slide', 'ajax-load-more'); ?></option>
                  <option value="fade"><?php _e('Fade', 'ajax-load-more'); ?></option>
                  <option value="masonry"><?php _e('Masonry', 'ajax-load-more'); ?></option>
                  <option value="none"><?php _e('None', 'ajax-load-more'); ?></option>
               </select>
            </div>
         </div>

			<div class="clear"></div>

         <div class="masonry-options">

	         <div class="clear"></div>
	         <hr>
	         <div class="section-title full" style="padding-bottom: 10px;">
	         	<h4><?php _e('Masonry Options', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Ajax Load More does not support all available Masonry options','ajax-load-more'); ?>."></a></h4>
	         	<p><?php _e('The following Masonry <a href="https://masonry.desandro.com/options.html" target="_blank">options</a> are supported by Ajax Load More', 'ajax-load-more'); ?>.</p>
	         </div>
	         <div class="clear"></div>

	         <div class="section-title">
	            <h4><?php _e('Item Selector', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Item Selector is required for Masonry to target each element loaded with Ajax','ajax-load-more'); ?>."></a></h4>
	   		 	<p><?php _e('Enter the target classname of each masonry item', 'ajax-load-more'); ?>.<br/>
	   		 	e.g <span>.grid-item</span>
	   		 	</p>
	   		 </div>
	   		 <div class="wrap">
	            <div class="inner">
	               <input type="text" class="alm_element" name="masonry-item" id="masonry-item" placeholder=".grid-item">
	            </div>
	         </div>
	         
	         <div class="clear"></div>
	         <hr class="indented" />

	         <div class="section-title">
	            <h4><?php _e('Animation Type', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('All Masonry animations include a fade-in effect as items are loaded','ajax-load-more'); ?>."></a></h4>
	   		 	<p><?php _e('Select a loading transition for Masonry items', 'ajax-load-more'); ?>.</p>
	   		</div>
	   		<div class="wrap">
	            <div class="inner">
                  <ul>
                     <li style="width:100%;">
                        <input class="alm_element" type="radio" name="masonry-animation" value="default" id="masonry-animation-default" checked>
                        <label for="masonry-animation-default">
                           <?php _e('Default (Zoom)', 'ajax-load-more'); ?> 
                           <span class="description"><?php _e('Items scale up from 50% to 100% size on load','ajax-load-more'); ?>.</span>
                        </label>
                     </li>
                     <li style="width:100%;">
                        <input class="alm_element" type="radio" name="masonry-animation" value="zoom-out" id="masonry-animation-zoom-out">
                        <label for="masonry-animation-zoom-out">
                           <?php _e('Zoom Out', 'ajax-load-more'); ?>  
                           <span class="description"><?php _e('Items scale down from 125% to 100% size on load','ajax-load-more'); ?>.</span>
                        </label>
                     </li>
                     <li style="width:100%;">
                        <input class="alm_element" type="radio" name="masonry-animation" value="slide-up" id="masonry-animation-up">
                        <label for="masonry-animation-up">
                           <?php _e('Slide Up', 'ajax-load-more'); ?>
                           <span class="description"><?php _e('Items animate up as they are loaded into view.','ajax-load-more'); ?></span>
                        </label>
                     </li>
                     <li style="width:100%;">
                        <input class="alm_element" type="radio" name="masonry-animation" value="slide-down" id="masonry-animation-down">
                        <label for="masonry-animation-down">
                           <?php _e('Slide Down', 'ajax-load-more'); ?>
                           <span class="description"><?php _e('Items animate down when loaded into view.','ajax-load-more'); ?></span>
                        </label>
                     </li>
                     <li style="width:100%;">
                        <input class="alm_element" type="radio" name="masonry-animation" value="none" id="masonry-animation-none">
                        <label for="masonry-animation-none">
                           <?php _e('None', 'ajax-load-more'); ?>
                        </label>
                     </li>
                  </ul>	               
	            </div>
	         </div>
	         
	         <div class="clear"></div>
	         <hr class="indented" />

	         <div class="section-title">
	            <h4><?php _e('Horizontal Order', 'ajax-load-more'); ?></h4>
	   		 	<p><?php _e('Lays out items to maintain left-to-right order', 'ajax-load-more'); ?>.
	   		 	</p>
	   		 </div>
	   		 <div class="wrap">
	            <div class="inner">
						<ul>
							<li>
								<input class="alm_element" type="radio" name="masonry-horizontalorder" value="t" id="horizontalOrder_t" checked="checked">
								<label for="horizontalOrder_t"><?php _e('True', 'ajax-load-more'); ?></label>
							</li>
							<li>
								<input class="alm_element" type="radio" name="masonry-horizontalorder" value="f" id="horizontalOrder_f">
								<label for="horizontalOrder_f"><?php _e('False', 'ajax-load-more'); ?></label>
							</li>
						</ul>
	            </div>
	         </div>

         </div>

         <!-- Hide transition_container if Masonry is selected -->
         <div class="masonry-options-hide">

	         <div class="clear"></div>
	         <hr>

	         <div class="section-title">
	            <h4><?php _e('Transition Container', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Removing the transition container may have undesired results and is not recommended','ajax-load-more'); ?>."></a></h4>
	   		 	<p><?php _e('Remove the <span>.alm-reveal</span> loading container from Ajax Load More', 'ajax-load-more'); ?>.</p>
	   		 </div>
	         <div class="wrap">
	            <div class="inner">
	               <ul>
	                   <li style="width:100%;">
	                   	<input class="alm_element" type="checkbox" name="remove_container" id="remove_container" value="f">
							 	<label for="remove_container"><?php _e('Remove Container', 'ajax-load-more'); ?></label>
	                   </li>
	               </ul>
	            </div>
	         </div>
	         
	         <div class="transition-container-classes-wrap">
		         <div class="clear"></div>
		         <hr>
	
		         <div class="section-title">
		            <h4><?php _e('Transition Container Classes', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('This setting is not available with the Previous Post or Next Page add-ons','ajax-load-more'); ?>."></a></h4>
		   		 	<p><?php _e('Add custom classes to the <span>.alm-reveal</span> loading container', 'ajax-load-more'); ?>.</p>
		   		 </div>
		         <div class="wrap">
		            <div class="inner">
		               <input type="text" class="alm_element" name="transition-container-classes" id="transition-container-classes" placeholder="row large-12 etc">
		            </div>
		         </div>
	         </div>
	         
         </div>
         <!-- End Hide transition_container if Masonry is selected -->     

         <div class="clear"></div>
         <hr>

         <div class="section-title">
            <h4><?php _e('Speed', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('0.5 seconds = 500, 1 second = 1000 etc','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('The speed of the loading transition in milliseconds', 'ajax-load-more'); ?>.<br/></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="transition-speed" id="transition-speed" step="50" min="50" value="250">
            </div>
         </div>

      </div>
   </div>
   <!-- End Transition -->

   <!-- Pause -->
   <div class="row checkbox pause_load" id="alm-pause">
      <h3 class="heading"><?php _e('Pause', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Do <u>NOT</u> load any posts until user clicks the <em>Load More</em> button.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="t" id="pause_t">
                    <label for="pause_t"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="f" id="pause_f" checked="checked">
                    <label for="pause_f"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <!-- End Pause -->

   <!-- Progress Bar -->
   <div class="row input alm-progress-bar" id="alm-progress-bar">
      <h3 class="heading"><?php _e('Progress Bar', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Display progress bar indicator at the top of the window while loading Ajax content', 'ajax-load-more'); ?>.<br/>
   		 	&raquo; <a href="https://connekthq.com/plugins/ajax-load-more/examples/progress-bar/" target="_blank"><?php _e('View Example', 'ajax-load-more'); ?></a>

   		 	</p>
   		</div>
         <div class="wrap">
	         <div class="inner">
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="progress_bar" value="t" id="progress_bar_t">
                     <label for="progress_bar_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="progress_bar" value="f" id="progress_bar_f" checked="checked">
                     <label for="progress_bar_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
	         </div>
         </div>
      </div>

      <div class="clear"></div>

      <div class="progress-bar-options">

         <div class="clear"></div>
         <hr>

         <div class="section-title"> 
            <h4><?php _e('Color', 'ajax-load-more'); ?> </h4>
   		 	<p><?php _e('Enter the hex color of the progress bar', 'ajax-load-more'); ?>.<br/>
   		 	Default: #<span>ed7070</span>
   		 	</p>
   		 </div>
   		 <div class="wrap">
            <div class="inner" style="position: relative;">
               <input type="text" class="alm_element" name="progress_bar_color" id="progress_bar_color" placeholder="ed7070" value="ed7070" maxlength="6" style="padding-left: 40px;">
               <span class="progress_bar_color_indicator"></span>
            </div>
         </div>

      </div>

   </div>
   <!-- End Progress Bar -->

   <!-- Images Loaded -->
   <div class="row input alm-images-loaded" id="alm-images-loaded">
      <h3 class="heading"><?php _e('Images Loaded', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Wait for all images to load before displaying ajax loaded content', 'ajax-load-more'); ?>. <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Background images are not supported','ajax-load-more'); ?>."></a></p>
   		</div>
         <div class="wrap">
	         <div class="inner">
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="images_loaded" value="t" id="images_loaded_t">
                     <label for="images_loaded_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="images_loaded" value="f" id="images_loaded_f" checked="checked">
                     <label for="images_loaded_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
	         </div>
         </div>
      </div>
   </div>
   <!-- End Images Loaded -->

   <!-- Destroy After -->
   <div class="row input alm-destroy-after" id="alm-destroy-after">
      <h3 class="heading"><?php _e('Destroy After', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <!-- Destroy After -->
         <div class="expand-wrap">
	         <div class="section-title">
	   		 	<p><?php _e('Remove Ajax Load More functionality after {<em>n</em>} number of pages have been loaded.', 'ajax-load-more'); ?></p>
	   		</div>
	         <div class="wrap">
	            <div class="inner">
	               <input type="number" class="alm_element numbers-only" name="destroy-after" id="disable-after" step="1" min="0" value="">
	            </div>
	         </div>
	      </div>
      </div>
   </div>
   <!-- End Destroy After -->


</div>
<!-- End Display Settings -->

<!-- ****************************** -->

<!-- Query Parameters -->
<div class="shortcode-parameter-wrap">
   <h2 class="shortcode-title"><?php _e('Query Parameters', 'ajax-load-more'); ?></h2>

   <!-- Posts Per Page -->
   <div class="row input posts_per_page" id="alm-post-page">
      <h3 class="heading"><?php _e('Posts Per Page', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Select the number of posts to load with each request.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="display_posts-select" id="display_posts-select" step="1" min="1" value="5">
            </div>
         </div>
      </div>
   </div>
   <!-- End Posts Per Page -->

	<!-- Post Types -->
	<?php
   $pt_args = array(
      'public'   => true
   );
	$types = get_post_types($pt_args);
	if($types){ ?>
		<div class="row checkboxes post_types" id="alm-post-types">
   		<h3 class="heading"><?php _e('Post Type', 'ajax-load-more'); ?></h3>

   		<div class="expand-wrap">

      		<div class="section-title">
      		   <p><?php _e('Select the Post Types to include in this Ajax Load More query.', 'ajax-load-more'); ?></p>
      		</div>
      		<div class="wrap">
         		<div class="inner">
            		<ul class="alm-post-type-list">
                  <?php
            	   foreach( $types as $type ){
            	     $typeobj = get_post_type_object( $type );
            	     $name = $typeobj->name;
            	     if( $name != 'revision' && $name != 'nav_menu_item' && $name != 'acf'){
                        echo '<li><input class="alm_element" type="checkbox" name="chk-'.$typeobj->name.'" id="chk-'.$typeobj->name.'" data-type="'.$typeobj->name.'"><label for="chk-'.$typeobj->name.'">'.$typeobj->labels->singular_name.'</label></li>';
            			}
            	    }
            	    ?>
                   <li><input class="alm_element chk-any" type="checkbox" name="chk-any" id="chk-any" data-type="any"><label for="chk-any"><?php _e('Any', 'ajax-load-more'); ?></label></li>
            	   </ul>
            	</div>
      	   </div>
      	   <div class="clear"></div>

      	   <div class="sticky-wrap">
	      	   <div style="display: block;">
		      	   <div class="clear"></div>
			         <hr/>

			         <div class="section-title">
			            <h4><?php _e('Sticky Posts', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Sticky posts are only available for Posts','ajax-load-more'); ?>."></a></h4>
			   		 	<p><?php _e('Preserve the ordering of sticky posts by having them appear first in the Ajax listing.', 'ajax-load-more'); ?></p>
			   		 </div>
			         <div class="wrap">
			            <div class="inner">
			               <ul>
			                   <li style="width:100%;">
			                   <input class="alm_element" type="checkbox" name="alm_sticky_posts" id="alm_sticky_posts" value="true">
			                   <label for="alm_sticky_posts"><?php _e('Enable Sticky Posts', 'ajax-load-more'); ?></label>
			                   </li>
			               </ul>
			            </div>
			         </div>
	      	   </div>
      	   </div>

   	   </div>

	   </div>
   <?php }
   ?>
   <!-- End Post Types -->


   <!-- Post Formats -->
   <?php
   if ( current_theme_supports( 'post-formats' ) ) {
       $post_formats = get_theme_support( 'post-formats' );
       if($post_formats){
   		echo '<div class="row checkboxes post_format" id="alm-post-format">';
   		echo '<h3 class="heading">'.__('Post Format', 'ajax-load-more'). '</h3>';
   		echo '<div class="expand-wrap">';
   		echo '<div class="section-title">';
   		echo '<p>'.__('Select a <a href="http://codex.wordpress.org/Post_Formats" target="_blank">Post Format</a> to query.', 'ajax-load-more'). '</p>';
   		echo '</div>';
   		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="post-format-select" id="post-format-select">';
   		echo '<option value="" selected="selected">-- ' . __('Select Post Format', 'ajax-load-more') . ' --</option>';
   		echo '<option name="chk-standard" id="chk-standard" value="standard">' . __('Standard', 'ajax-load-more') . '</option>';
   	   foreach( $post_formats[0] as $post_format ){
            echo '<option name="chk-'.$post_format.'" id="chk-'.$post_format.'" value="'.$post_format.'">'.ucwords($post_format).'</option>';
   	   }
   		echo '</select></div></div>';
   		echo '</div>';
   		echo '</div>';
      }
   }
   ?>
   <!-- End Post Formats -->


   <!-- Categories -->
   <?php
   if($disable_dynamic_content){
	   $cats = 'null';
   }else{
	   $cats = get_categories();
   }
	if($cats){ ?>
	<div class="row checkboxes categories" id="alm-categories">
      <h3 class="heading"><?php _e('Category', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4>Include</h4>
            <p><?php _e('A comma separated list of categories to include by slug. (design, research etc...)', 'ajax-load-more'); ?><br/>
            &raquo; <a href="admin.php?page=ajax-load-more-help&section=examples#example-category" target="_blank"><?php _e('View Example', 'ajax-load-more'); ?></a></p>
         </div>
         <div class="wrap">
            <div class="inner">
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="category-select" id="category-select" multiple="multiple">';
                  foreach( $cats as $cat ){
                     echo '<option name="chk-'.$cat->slug.'" id="chk-'.$cat->slug.'" value="'.$cat->slug.'">'.$cat->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element" name="category-select" id="category-select" placeholder="design, development, science etc...">';
               }
               ?>
            </div>
         </div>

         <div class="clear"></div>
         <hr/>

         <div class="section-title">
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
            <p><?php _e('A comma separated list of categories to exclude by ID. (3, 12, 35 etc..)', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="category-exclude-select" id="category-exclude-select" multiple="multiple">';
                  foreach( $cats as $cat ){
                     echo '<option name="chk-'.$cat->term_id.'" id="chk-'.$cat->term_id.'" value="'.$cat->term_id.'">'.$cat->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element numbers-only" name="category-exclude-select" id="category-exclude-select" placeholder="10, 12, 19 etc...">';
               }
               ?>
            </div>
            <div class="clear"></div>
         </div>
      </div>
   </div>
   <!-- End Category -->

   <?php }

    // Tags
	if($disable_dynamic_content){
	   $tags = 'null';
   }else{
	   $tags = get_tags();
   }
	if($tags){ ?>
	<div class="row checkboxes tags" id="alm-tags">
		<h3 class="heading"><?php _e('Tag', 'ajax-load-more'); ?></h3>
		<div class="expand-wrap">
   		<div class="section-title">
   		<h4><?php _e('Include', 'ajax-load-more'); ?></h4>
   		<p><?php _e('A comma separated list of tags to include by slug. (toronto, canada etc...)', 'ajax-load-more'); ?><br/>&raquo; <a href="admin.php?page=ajax-load-more-help&section=examples#example-tag" target="_blank"><?php _e('View Example', 'ajax-load-more'); ?></a></p>
   		</div>
   		<div class="wrap">
   		   <div class="inner">
              <?php
         	  if(!$disable_dynamic_content){
         	     echo '<select class="alm_element multiple" name="tag-select" id="tag-select" multiple="multiple">';
             	  foreach( $tags as $tag ){
                     echo '<option name="chk-'.$tag->slug.'" id="chk-'.$tag->slug.'" value="'.$tag->slug.'">'.$tag->name.'</option>';
            	  }
            	  echo '</select>';
         	  }else{
            	  echo '<input type="text" class="alm_element" name="tag-select" id="tag-select" placeholder="hockey, puck, crosby etc...">';
         	  }
         	   ?>
            </div>
   	  </div>
   	  <div class="clear"></div>
         <hr/>

         <div class="section-title">
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
            <p><?php _e('A comma separated list of tags to exclude by ID. (30, 12, 99 etc..)', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="tag-exclude-select" id="tag-exclude-select" multiple="multiple">';
                  foreach( $tags as $tag ){
                     echo '<option name="chk-'.$tag->term_id.'" id="chk-'.$tag->term_id.'" value="'.$tag->term_id.'">'.$tag->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element numbers-only" name="tag-exclude-select" id="tag-exclude-select" placeholder="10, 12, 19 etc...">';
               }
               ?>
            </div>
            <div class="clear"></div>
         </div>
	  </div>
   </div>
   <?php } ?>
   <!-- End Tags -->

   <?php
	// Taxonomies
	$tax_args = array(
		'public'   => true,
		'_builtin' => false
	);
	$tax_output = 'objects';
	$taxonomies = get_taxonomies( $tax_args, $tax_output );
	if ( $taxonomies ) { ?>
	<div class="row taxonomy" id="alm-taxonomy">
		<h3 class="heading"><?php _e('Taxonomy', 'ajax-load-more'); ?></h3>
		<div class="expand-wrap">
			<div class="section-title">
	         <p><?php _e('Select a taxonomy then select the terms and an operator.', 'ajax-load-more'); ?></p>
	      </div>
			<div class="wrap">
				<?php include( ALM_PATH . 'admin/shortcode-builder/includes/tax-query-options.php'); ?>
			   <div class="controls">
               <button id="add-tax-query" class="button button-primary"><?php _e('Add Another', 'ajax-load-more'); ?></button>
            </div>
		    </div>
	    </div>
	</div>
	<?php }?>
	<!-- End Taxonomies -->

   <!-- Date -->
   <div class="row input date" id="alm-date">
      <h3 class="heading"><?php _e('Date', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Enter a year, month(number) and day to query by date archive.<br/>&raquo; <a href="admin.php?page=ajax-load-more-help&section=examples#example-date" target="_blank">View Example</a>', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <div class="wrap-30">
                  <?php $today = getdate(); ?>
                  <label for="input-year" class="full"><?php _e('Year:', 'ajax-load-more'); ?></label>
                  <input name="input-year" class="alm_element sm numbers-only" type="text" id="input-year" maxlength="4" placeholder="<?php echo $today['year']; ?>">
               </div>
               <div class="wrap-30">
                  <label for="input-month" class="full"><?php _e('Month:', 'ajax-load-more'); ?></label>
                  <input name="input-month" class="alm_element sm numbers-only" type="text" id="input-month" maxlength="2" placeholder="<?php echo $today['mon']; ?>">
               </div>
               <div class="wrap-30">
                  <label for="input-day" class="full"><?php _e('Day:', 'ajax-load-more'); ?></label>
                  <input name="input-day" class="alm_element sm numbers-only" type="text" id="input-day" maxlength="2" placeholder="<?php echo $today['mday']; ?>">
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- End Date -->

   <!-- Meta_Query -->
   <div class="row input meta-key" id="alm-meta-key">
      <h3 class="heading"><?php _e('Custom Fields (Meta_Query)', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title full">
            <p><?php _e('Query for <a href="http://codex.wordpress.org/Class_Reference/WP_Meta_Query" target="_blank">custom field</a> by entering a custom field key, value and operator.', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap full">
            <div class="meta-query-wrap-first">
               <div class="meta-query-wrap">
                  <?php include( ALM_PATH . 'admin/shortcode-builder/includes/meta-query-options.php'); ?>
               </div>
            </div>
            <div id="meta-query-relation">
               <div class="inner border-top highlighted">
                  <div class="wrap-30 wrap-50">
                     <label for="meta-relation" class="full"><?php _e('Relation:', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The logical relationship between each custom field when there is more than one','ajax-load-more'); ?>."></a></label>
                     <select class="alm_element meta-relation" name="meta-relation">
                        <option value="AND" selected="selected">AND</option>
                        <option value="OR">OR</option>
                     </select>
                  </div>
               </div>
            </div>

            <div id="meta-query-extended">

            </div>

            <div class="controls">
               <button class="button button-primary" id="add-meta-query"><?php _e('Add Another', 'ajax-load-more'); ?></button>
            </div>

         </div>
      </div>
   </div>
   <!-- End Meta Query -->

   <?php // List Authors
	if($disable_dynamic_content){
	   $authors = 'null';
   }else{
	   $authors = get_users();
   }
	if($authors){
		echo '<div class="row select authors" id="alm-authors">';
		echo '<h3 class="heading">' . __('Author', 'ajax-load-more') . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select an Author to query(by ID).', 'ajax-load-more') . '<br/>&raquo; <a href="admin.php?page=ajax-load-more-help&section=examples#example-author" target="_blank">View Example</a></p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner">';
		if(!$disable_dynamic_content){
		   echo '<select class="alm_element multiple" name="author-select" id="author-select" multiple="multiple">';
   	   foreach( $authors as $author ){
            echo '<option name="chk-'.$author->user_login.'" id="chk-'.$author->user_login.'" value="'.$author->ID.'">'.$author->display_name.'</option>';
   	    }
   	   echo '</select>';
	   }else{
   	  echo '<input type="text" class="alm_element numbers-only" name="author-select" id="author-select" placeholder="1">';
	   }
	   echo '</div></div>';
	   echo '</div>';
	   echo '</div>';
    }
   ?>
   <!-- End Authors -->

   <!-- Search -->
   <div class="row input search-term" id="alm-search">
      <h3 class="heading"><?php _e('Search Term', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Enter a search term to query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="search-term" class="alm_element" type="text" id="search-term" value="" placeholder="<?php _e('Enter search term', 'ajax-load-more'); ?>">
            </div>
         </div>
      </div>
   </div>
   <!-- End Search -->

   <!-- Post Parameters -->
   <div class="row input post-in" id="alm-post-in">
      <h3 class="heading"><?php _e('Post Parameters', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Include', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('A comma separated list of post ID\'s to query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="post__in" class="alm_element numbers-only" type="text" id="post__in" value="" placeholder="<?php _e('225, 340, 818, etc...', 'ajax-load-more'); ?>">
            </div>
         </div>
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('A comma separated list of post ID\'s to exclude from query.', 'ajax-load-more'); ?><br/>&raquo; <a href="admin.php?page=ajax-load-more-help&section=examples#example-exclude" target="_blank"><?php _e('View Example', 'ajax-load-more'); ?></a></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element numbers-only" name="exclude-posts" type="text" id="exclude-posts" value="" placeholder="199, 216, 345, etc...">
            </div>
         </div>
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Post Status', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Post Status parameters are only available for logged in (admin) users. Non logged in users will only have access to view content in a \'publish\' or \'inherit\' state.','ajax-load-more'); ?>."></a></h4>
   		 	<p><?php _e('Select status of the post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <select class="alm_element" name="post-status" id="post-status">
                   <option value="publish" selected="selected"><?php _e('Published', 'ajax-load-more'); ?></option>
                   <option value="any">Any</option>
                   <option value="draft">Draft</option>
                   <option value="future">Future</option>
                   <option value="pending">Pending</option>
                   <option value="private">Private</option>
                   <option value="trash">Trash</option>
                   <option value="inherit">Inherit</option>
               </select>
            </div>
         </div>
      </div>
   </div>
   <!-- End Post Parameters -->

   <!-- Ordering -->
   <div class="row ordering" id="alm-order">
      <h3 class="heading"><?php _e('Ordering', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Sort posts by Order and Orderby parameters.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner half">
               <label class="full"><?php _e('Order', 'ajax-load-more'); ?>:</label>
               <select class="alm_element" name="post-order" id="post-order">
                   <option value="DESC" selected="selected">DESC (default)</option>
                   <option value="ASC">ASC</option>
               </select>
            </div>
            <div class="inner half">
               <label class="full"><?php _e('Order By', 'ajax-load-more'); ?>:</label>
               <select class="alm_element" name="post-orderby" id="post-orderby">
                   <option value="date" selected="selected">Date (default)</option>
                   <option value="title">Title</option>
                   <option value="name">Name (slug)</option>
                   <option value="menu_order">Menu Order</option>
                   <option value="author">Author</option>
                   <option value="ID">ID</option>
                   <option value="comment_count">Comment Count</option>
                   <option value="modified">Modified</option>
                   <option value="post__in">Post In</option>
                   <option value="meta_value_num">meta_value_num</option>
               </select>
            </div>
         </div>
      </div>
   </div>
   <!-- End Ordering -->

   <!-- Offset -->
   <div class="row input offset" id="alm-offset">
      <h3 class="heading"><?php _e('Offset', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Offset the initial query by <em>\'n\'</em> number of posts', 'ajax-load-more'); ?>.</p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="offset-select" id="offset-select" value="0" step="1" min="0">
            </div>
         </div>
      </div>
   </div>
   <!-- End Offset -->

   <!-- Custom Arguments -->
   <div class="row input custom-arguments" id="alm-custom-args">
      <h3 class="heading"><?php _e('Custom Arguments', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('A semicolon separated list of custom value:pair arguments.', 'ajax-load-more'); ?>  <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Custom Arguments can be used to query by parameters not available in the Shortcode Builder','ajax-load-more'); ?>."></a><br/><br/>e.g. tag_slug__and:design,development; event_display:upcoming</p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="custom-args" class="alm_element" type="text" id="custom-args" value="" placeholder="<?php _e('event_display:upcoming', 'ajax-load-more'); ?>">
            </div>
         </div>
      </div>
   </div>
   <!-- End Custom Arguments -->

</div>
<!-- End Query Parameters -->


<div class="clear"></div>
