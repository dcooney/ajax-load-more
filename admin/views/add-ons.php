<?php $target = 'target="_blank"'; ?>
<div class="admin ajax-load-more" id="alm-add-ons">
	<div class="wrap main-cnkt-wrap">
      <header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?>: <strong><?php _e('Add-ons', 'ajax-load-more'); ?></strong>
            <em><?php _e('Add-ons are available to extend and enhance the core functionality of Ajax Load More', 'ajax-load-more'); ?>.</em>
         </h1>
         <?php alm_render_transient_notification(); ?>  
		</header>
		
		<div class="ajax-load-more-inner-wrapper">		
		
   		<div class="cnkt-main">
	   		
	   		<div class="flexbox-wrap">  		   		
		   		<?php include_once( ALM_PATH . 'admin/includes/cta/pro-hero.php');	?>
	   		       		
	         <?php 
	            $target = 'target="_blank"';
	            $addons = alm_get_addons(); 	            
	            foreach($addons as $addon){ 
	         		$name = $addon['name'];
	         		$intro = $addon['intro'];
	         		$desc = $addon['desc'];
	         		$action = $addon['action'];
	         		$key = $addon['key'];
	         		$status = $addon['status'];
	         		$settings_field = $addon['settings_field'];
	         		$url = $addon['url'];
	         		$img = $addon['img'];
	      		?>
	      		<div class="group no-shadow<?php if (has_action($action)){ echo ' installed'; } ?>">
                  <a href="<?php echo $url; ?>?utm_source=WP%20Admin&utm_medium=ALM%20Add-ons&utm_campaign=<?php echo $name; ?>" <?php echo $target; ?>>
	                  <img src="<?php echo ALM_ADMIN_URL; ?><?php echo $img; ?>" alt="">
	                  <h2 class="addon-title"><?php echo $name; ?></h2>
	                  <p class="addon-intro"><?php echo $intro; ?></p>
	                  <p><?php echo $desc; ?></p>
	                  <?php
	                     if (has_action($action)){
	                        echo '<span class="cnkt-button installed"><i class="fa fa-check-square"></i> '. __('Installed', 'ajax-load-more') .'</span> ';
	                     }else{
	                        echo '<span class="cnkt-button">'. __('Purchase', 'ajax-load-more') .'</span>';
	                     }
	                  ?>
                  </a>
	   		   </div>     		
	      		<?php } ?>					
				</div>
				
				<div class="call-out light no-shadow">
					<p><?php _e('All add-ons are installed as stand alone plugins and with a valid license key will receive plugin update notifications directly within the <a href="plugins.php">WordPress plugin dashboard</a>.', 'ajax-load-more'); ?></p>
				</div>
   		</div>
			
   	   <aside class="cnkt-sidebar">
      	   <div id="cnkt-sticky-wrapper">
	      	   <div id="cnkt-sticky">
      	      	<?php include_once( ALM_PATH . 'admin/includes/cta/add-ons.php');	?>
	      	   </div>
      	   </div>
         </aside>   	   
   	      	
         <div class="clear"></div>   
      </div>

	</div>
</div>
