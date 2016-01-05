<div class="admin ajax-load-more settings" id="alm-settings">
	<div class="wrap">
		<div class="header-wrap">
         <h1><?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span></h1>
         <p><?php _e('A powerful plugin to add infinite scroll functionality to your website.', 'ajax-load-more'); ?></p>
      </div>         
		<?php if( isset($_GET['settings-updated']) ) { ?>
          <div id="message" class="updated inline">
              <p><strong><?php _e('Ajax Load More settings have been saved.') ?></strong></p>
          </div>
      <?php } ?>
	   <div class="cnkt-main">
	   	<div class="group">
   	   	<?php
      	   	if(has_action('alm_cache_settings') || has_action('alm_layouts_installed') || has_action('alm_next_post_settings')  || has_action('alm_paging_settings') || has_action('alm_seo_settings') || has_action('alm_theme_repeaters_settings')) {
       	   ?>
   	   	<ul class="alm-settings-nav">
      	   	<li><a href="javascript:void(0);"><?php _e('Global Settings', 'ajax-load-more'); ?></a></li>
      	   	<li><a href="javascript:void(0);"><?php _e('Admin', 'ajax-load-more'); ?></a></li>
      	   	<?php 
         	   	if(has_action('alm_cache_settings')) 
                     echo '<li><a href="javascript:void(0);">'.__('Cache', 'ajax-load-more').'</a></li>';
         	   	//if(has_action('alm_layouts_installed')) 
                     //echo '<li><a href="javascript:void(0);">'.__('Layouts', 'ajax-load-more').'</a></li>';
         	   	if(has_action('alm_paging_settings')) 
                     echo '<li><a href="javascript:void(0);">'.__('Paging', 'ajax-load-more').'</a></li>';
         	   	if(has_action('alm_prev_post_settings')) 
                     echo '<li><a href="javascript:void(0);">'.__('Previous Post', 'ajax-load-more').'</a></li>';
                  if(has_action('alm_seo_settings')) 
                     echo '<li><a href="javascript:void(0);">'.__('SEO', 'ajax-load-more').'</a></li>';
                  if(has_action('alm_theme_repeaters_settings')) 
                     echo '<li><a href="javascript:void(0);">'.__('Theme Repeaters', 'ajax-load-more').'</a></li>';         	   	 
         	   ?>
   	   	</ul>
   	   	<?php
      	   	}
      	   ?>
   			<form action="options.php" method="post" id="alm_OptionsForm">
   				<?php 
   					settings_fields( 'alm-setting-group' );
   					do_settings_sections( 'ajax-load-more' );	
   					//get the older values, wont work the first time
   					$options = get_option( '_alm_settings' ); ?>	
   					<div class="row no-brd alm-save-settings">	       
   		            <?php submit_button('Save Settings'); ?>
                     <div class="spinner"></div>	
   					</div>	        
   			</form>
   			<script type="text/javascript">
            jQuery(document).ready(function() {
               jQuery('#alm_OptionsForm').submit(function() { 
                  jQuery('.alm-save-settings .spinner').fadeIn();
                  jQuery(this).ajaxSubmit({
                     success: function(){
                        jQuery('.alm-save-settings .spinner').fadeOut(250, function(){
                           window.location.reload();
                        });
                     },
                     error: function(){
                        alert("<?php _e('Sorry, settings could not be saved.', 'ajax-load-more'); ?>");
                     }
                  }); 
                  return false; 
               });
            });
            </script> 	
	   	</div>
	   </div>
	   <div class="cnkt-sidebar">
			<?php include_once( ALM_PATH . 'admin/includes/cta/mailinglist.php'); ?>
			<?php include_once( ALM_PATH . 'admin/includes/cta/resources.php');	?>
			<?php include_once( ALM_PATH . 'admin/includes/cta/add-ons.php');	?>
			<?php include_once( ALM_PATH . 'admin/includes/cta/about.php'); ?>
	   </div>		   	
	</div>
</div>