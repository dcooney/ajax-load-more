<?php
// Load if Layouts version is 2.0 +.
if ( has_action( 'alm_layouts_installed' ) && defined( 'ALM_LAYOUTS_VERSION' ) && intval( ALM_LAYOUTS_VERSION ) >= 2 ) { ?>
<div class="row input layouts add-on" id="alm-layouts">
   <h3 class="heading" tabindex="0"><?php _e( 'Layouts', 'ajax-load-more' ); ?></h3>
   <div class="expand-wrap">

	  <section class="first">
		 <div class="shortcode-builder--label">
				<p><?php _e( 'Enable custom layouts CSS with this Ajax Load More instance.', 'ajax-load-more' ); ?></p>
			</div>
		 <div class="shortcode-builder--fields">
			<div class="inner">
			   <ul>
						<li>
							<input class="alm_element" type="radio" name="layouts" value="true" id="layouts-true" >
							<label for="layouts-true"><?php _e( 'True', 'ajax-load-more' ); ?></label>
						</li>
						<li>
							<input class="alm_element" type="radio" name="layouts" value="false" id="layouts-false"  checked="checked">
							<label for="layouts-false"><?php _e( 'False', 'ajax-load-more' ); ?></label>
						</li>
			   </ul>
			</div>
		 </div>
	  </section>

	  <div class="layouts_options nested-component" style="display: none;">
		  <div class="nested-component--inner">
			<section>
				<div class="shortcode-builder--label">
				   <h4><?php _e( 'Columns', 'ajax-load-more' ); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e( 'Layouts are responsive out of the box and will respond automatically from desktop to mobile.', 'ajax-load-more' ); ?>"></a></h4>
					   <p><?php _e( 'Select the number of desktop columns for this layout.', 'ajax-load-more' ); ?></p>
				   </div>
					<div class="shortcode-builder--fields">
						<div class="inner">
							<input type="number" class="alm_element numbers-only" placeholder="0" name="layouts-columns" id="layouts-columns" step="1" min="1" max="6" value="3">
						</div>
					</div>
			</section>
				<section>
				<div class="shortcode-builder--label">
				   <h4><?php _e( 'Column/Row Gap', 'ajax-load-more' ); ?></h4>
					   <p><?php _e( 'Select the spacing for the CSS grid gap.', 'ajax-load-more' ); ?></p>
				   </div>
					<div class="shortcode-builder--fields">
						<select class="alm_element" name="layouts-gap" id="layouts-gap">
							<option value="default" selected="selected"><?php _e( 'Default', 'ajax-load-more' ); ?> (20px)</option>
							<option value="md"><?php _e( 'Medium', 'ajax-load-more' ); ?> (10px)</option>
							<option value="sm"><?php _e( 'Small', 'ajax-load-more' ); ?> (5px)</option>
							<option value="none"><?php _e( 'None (No Spacing)', 'ajax-load-more' ); ?></option>
						</select>
					</div>
			</section>
		  </div>
	  </div>
   </div>
</div>
<?php } ?>
