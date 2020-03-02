<div class="alm-settings-feedback"></div>

<div class="admin ajax-load-more settings" id="alm-settings">

	<div class="wrap main-cnkt-wrap">

		<header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span>
            <em><?php _e('A powerful plugin to add infinite scroll functionality to your website.', 'ajax-load-more'); ?></em>
         </h1>
         <?php alm_render_transient_notification(); ?>

      </header>

      <div class="ajax-load-more-inner-wrapper">

   	   <div class="cnkt-main">

   			<?php //include_once( ALM_PATH . 'admin/includes/cta/sharing.php');	?>

   	   	<?php
      	   	if(has_action('alm_cache_settings') || has_action('alm_layouts_installed') || has_action('alm_prev_post_settings')  || has_action('alm_paging_settings') || has_action('alm_seo_settings') || has_action('alm_tabs_settings') || has_action('alm_theme_repeaters_settings')) {
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
         	   	if(has_action('alm_filters_installed'))
                     echo '<option value="3">'.__('Filters', 'ajax-load-more').'</options>';
         	   	if(has_action('alm_layouts_installed'))
                     echo '<option value="4">'.__('Layouts', 'ajax-load-more').'</options>';
         	   	if(has_action('alm_paging_settings'))
                     echo '<option value="5">'.__('Paging', 'ajax-load-more').'</option>';
                  if(has_action('alm_rest_api_settings'))
                     echo '<option value="6">'.__('REST API', 'ajax-load-more').'</option>';
                  if(has_action('alm_seo_settings'))
                     echo '<option value="7">'.__('SEO', 'ajax-load-more').'</option>';
         	   	if(has_action('alm_prev_post_settings'))
                     echo '<option value="8">'.__('Single Posts', 'ajax-load-more').'</option>';
         	   	if(has_action('alm_tabs_settings'))
                     echo '<option value="9">'.__('Tabs', 'ajax-load-more').'</option>';
                  if(has_action('alm_theme_repeaters_settings'))
                     echo '<option value="10">'.__('Theme Repeaters', 'ajax-load-more').'</option>';
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
      				$options = get_option( '_alm_settings' ); 
   				?>
   				<div class="save-in-progress"></div>
   			</form>

   	   </div>
   	   <aside class="cnkt-sidebar">
   			<?php //include_once( ALM_PATH . 'admin/includes/cta/sharing.php'); ?>
   			<?php //include_once( ALM_PATH . 'admin/includes/cta/test.php');	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/resources.php');	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/dyk.php');	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/about.php'); ?>
   	   </aside>

   	<div class="clear"></div>
      </div>

	</div>
</div>
