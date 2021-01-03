<?php
   $id = 'alm-help';
	$examples = false;
	$subtitle = __('Get started with our four step guide to painless implementation!', 'ajax-load-more');
	if (isset($_GET['section'])) {
		$the_section = $_GET['section'];
		if($the_section == 'examples'){
			$examples = true;
			$subtitle = __('A collection of everyday shortcode usages and implementation examples', 'ajax-load-more') .'.';
			$id = 'alm-examples';
		}
   }
?>
<div class="admin ajax-load-more" id="<?php echo $id; ?>">
	<div class="wrap main-cnkt-wrap">
      <header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?>: <strong><?php _e('Help', 'ajax-load-more'); ?></strong>
            <em><?php echo $subtitle; ?></em>
         </h1>
         <?php alm_render_transient_notification(); ?>
      </header>

      <div class="ajax-load-more-inner-wrapper">

   		<div class="cnkt-main stylefree">

   		   <ul class="alm-toggle-switch">
   			   <li>
   			      <a href="?page=ajax-load-more-help" class="<?php if(!$examples){ echo 'active';} ?>">
      			      <?php _e('Implementation Guide', 'ajax-load-more'); ?>
      			   </a>
      			</li>
   			   <li>
   			      <a href="?page=ajax-load-more-help&section=examples" class="<?php if($examples){ echo 'active';} ?>">
      			      <?php _e('Examples', 'ajax-load-more'); ?>
      			   </a>
      			</li>
   		   </ul>

   			<?php
            if(!$examples){
               // Implementation Guide
            ?>

   		   <div class="group no-shadow">
   				<img src="<?php echo ALM_ADMIN_URL; ?>img/infographic.png">
   		   </div>

   		   <?php } else {
      		   // Examples
      		   include_once( ALM_PATH . 'admin/includes/components/example-list.php');

   		   } ?>

   	   </div>

   	   <aside class="cnkt-sidebar">
      	   <?php
            if(!$examples){
               // Implementation Guide
         	   include_once( ALM_PATH . 'admin/includes/cta/resources.php');
         	   include_once( ALM_PATH . 'admin/includes/cta/dyk.php');

            } else {
               // Examples
            ?>
            <div class="cta">
               <h3><?php _e('Example Library', 'ajax-load-more'); ?></h3>
               <div class="cta-inner">
                  <p style="padding-bottom: 10px;"><?php _e('We have a collection of over 20 real world Ajax Load More <a href="https://connekthq.com/plugins/ajax-load-more/examples/" target="_blank">examples</a> available on the plugin website', 'ajax-load-more'); ?>.</p>
               </div>
               <div class="major-publishing-actions">
                  <a href="https://connekthq.com/plugins/ajax-load-more/examples/" class="button button-primary" target="_blank"><?php _e('View All Examples', 'ajax-load-more'); ?></a>
               </div>
            </div>
            <?php
         	   include_once( ALM_PATH . 'admin/includes/cta/dyk.php');
         	   include_once( ALM_PATH . 'admin/includes/cta/resources.php');
            }
            ?>
   	   </aside>

			<div class="clear"></div>
      </div>

	</div>
</div>
