<div class="alm-settings-feedback"></div>

<div class="admin ajax-load-more settings" id="alm-settings">
   
	<div class="wrap main-cnkt-wrap">

		<header class="header-wrap">
         <h1><?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span>
         <em><?php _e('A powerful plugin to add infinite scroll functionality to your website.', 'ajax-load-more'); ?></em>
         </h1>
      </header>     
      
      <div class="ajax-load-more-inner-wrapper"> 

   	   <div class="cnkt-main">   
      	   <?php
            $alm_share_notification = get_transient( 'alm_dismiss_sharing');
            if(isset($alm_share_notification) || empty($alm_share_notification)){
   	         // If transient has not been set - display this notice.
            ?>
   	   	<div class="group share-alm" style="display: none !important;">
   				<div class="dotted">
         	   	<h2 style="padding: 0; margin: 0 0 20px;">
   	      	   	👋 &nbsp;<?php _e('Thanks for installing Ajax Load More 3.0!', 'ajax-load-more'); ?>
   	      	   </h2>
   	      	   <p>Version 3 is a big step forward for Ajax Load More and I really hope you like the changes and new features - be sure to check out the new <a href="admin.php?page=ajax-load-more-extensions">Extensions</a> section for 1-click installs of all currently available extensions for Ajax Load More.</p>
   				</div>
      	   	<p>Please consider helping <a href="https://twitter.com/KaptonKaos" target="_blank">me</a> widen the reach of Ajax Load More by sharing with your networks.</p>
   
   				<ul class="share">
   					<li class="twitter">
   						<a target="blank" title="Share on Twitter" href="//twitter.com/home?status=I'm infinite scrolling with Ajax Load More for %23WordPress - https://connekthq.com/plugins/ajax-load-more/" class="share-twitter"><i class="fa fa-twitter"></i> Twitter</a>
   					</li>
   					<li class="facebook">
   						<a target="blank" title="Share on Facebook" href="//facebook.com/share.php?u=https://connekthq.com/plugins/ajax-load-more/" class="share-facebook"><i class="fa fa-facebook"></i> Facebook</a>
   					</li>
   				</ul>
   
               <div class="clear"></div>
   
               <a href="javascript: void(0);" class="dismiss" id="alm_dismiss_sharing" title="<?php _e('Don\'t show me this again!', 'ajax-load-more');?>">&times;</a>
   
   	   	</div>
   	   	<?php } ?>
   
   
   	   	<?php
      	   	if(has_action('alm_cache_settings') || has_action('alm_layouts_installed') || has_action('alm_prev_post_settings')  || has_action('alm_paging_settings') || has_action('alm_seo_settings') || has_action('alm_theme_repeaters_settings')) {
       	   ?>
       	   <div class="admin-select">
          	   <label for="alm-settings-nav" class="offscreen">
             	   <?php _e('Jump to Setting', 'ajax-load-more'); ?>
          	   </label>
          	   <select id="alm-settings-nav">
             	   <option value="#">-- <?php _e('Jump to Setting', 'ajax-load-more'); ?> --</option>
             	   <option value="0"><?php _e('Global Settings', 'ajax-load-more'); ?></option>
             	   <option value="1"><?php _e('Admin', 'ajax-load-more'); ?></option>
      	   	<?php
         	   	if(has_action('alm_cache_settings'))
                     echo '<option value="2">'.__('Cache', 'ajax-load-more').'</option>';
         	   	if(has_action('alm_layouts_installed'))
                     echo '<option value="3">'.__('Layouts', 'ajax-load-more').'</options>';
         	   	if(has_action('alm_paging_settings'))
                     echo '<option value="4">'.__('Paging', 'ajax-load-more').'</option>';
         	   	if(has_action('alm_prev_post_settings'))
                     echo '<option value="5">'.__('Previous Post', 'ajax-load-more').'</option>';
                  if(has_action('alm_rest_api_settings'))
                     echo '<option value="6">'.__('REST API', 'ajax-load-more').'</option>';
                  if(has_action('alm_seo_settings'))
                     echo '<option value="7">'.__('SEO', 'ajax-load-more').'</option>';
                  if(has_action('alm_theme_repeaters_settings'))
                     echo '<option value="8">'.__('Theme Repeaters', 'ajax-load-more').'</option>';
         	   ?>
   	   	   </select>
       	   </div>
   	   	<?php
      	   	}
      	   ?>
      	   <?php settings_errors(); ?>
   			<form action="options.php" method="post" id="alm_OptionsForm">
   				<?php
   				settings_fields( 'alm-setting-group' );
   				do_settings_sections( 'ajax-load-more' );
   				//get the older values, wont work the first time
   				$options = get_option( '_alm_settings' ); ?>
   				<div class="save-in-progress"></div>
   			</form>
   
   	   </div>
   	   <aside class="cnkt-sidebar">
   			<?php //include_once( ALM_PATH . 'admin/includes/cta/mailinglist.php'); ?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/sharing.php'); ?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/resources.php');	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/dyk.php');	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/about.php'); ?>
   	   </aside>
   	
   	<div class="clear"></div>   
      </div>
   	   
	</div>
</div>
