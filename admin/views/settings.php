<div class="admin ajax-load-more settings" id="alm-settings">
	<div class="wrap">
		<div class="header-wrap">
         <h2><?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span></h2>
         <p><?php _e('A WordPress plugin for lazy loading posts with Ajax', ALM_NAME); ?></p>
      </div>         
		<?php if( isset($_GET['settings-updated']) ) { ?>
          <div id="message" class="updated inline">
              <p><strong><?php _e('Ajax Load More settings have been saved.') ?></strong></p>
          </div>
      <?php } ?>
	   <div class="cnkt-main">
	   	<div class="group">
   			<form action="options.php" method="post" id="alm_OptionsForm">
   				<?php 
   					settings_fields( 'alm-setting-group' );
   					do_settings_sections( 'ajax-load-more' );	
   					//get the older values, wont work the first time
   					$options = get_option( '_alm_settings' ); ?>	
   					<div class="row no-brd alm-save-settings">	       
   		            <?php submit_button('Save Settings'); ?>
                     <div class="loading"></div>	
   					</div>	        
   			</form>
   			<script type="text/javascript">
            jQuery(document).ready(function() {
               jQuery('#alm_OptionsForm').submit(function() { 
                  jQuery('.alm-save-settings .loading').fadeIn();
                  jQuery(this).ajaxSubmit({
                     success: function(){
                        jQuery('.alm-save-settings .loading').fadeOut(250, function(){
                           window.location.reload();
                        });
                     },
                     error: function(){
                        alert("<?php _e('Sorry, settings could not be saved.', ALM_NAME); ?>");
                     }
                  }); 
                  return false; 
               });
            });
            </script> 	
	   	</div>
	   </div>
	   <div class="cnkt-sidebar">
			<?php include_once( ALM_PATH . 'admin/includes/cta/resources.php');	?>
			<?php include_once( ALM_PATH . 'admin/includes/cta/about.php');	?>
	   </div>		   	
	</div>
</div>