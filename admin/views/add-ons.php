<div class="admin ajax-load-more" id="alm-add-ons">	
	<div class="wrap">
		<div class="header-wrap">
	   		<h2><?php _e('Ajax Load More: Add-ons', ALM_NAME); ?></h2>
	   		<p><?php _e('Add-ons are available to extend and enhance the core functionality of Ajax Load More.', ALM_NAME); ?></p>  
		</div>
		<div class="cnkt-main">
		   
		   <!-- Custom Repeaters -->
		   <div class="group">
			   <div class="row no-brd">
			      <div class="expand-wrap">
                  <div class="section-title">
                     <img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/unlimited-add-ons.jpg">                         
                  </div>
                  <div class="wrap">
                     <h2 class="addon-title"><?php _e('Custom Repeaters', ALM_NAME); ?></h2>
                     <p class="addon-intro"><?php _e('Extend Ajax Load More with unlimited repeater templates.', ALM_NAME); ?></p>
                     <p><?php _e('Create, delete and modify <a href="?page=ajax-load-more-repeaters">repeater templates</a> as you need them with absolutely zero restrictions.', ALM_NAME); ?></p>                   
                  </div>           
               </div>
			   </div>			   
            <?php
            	$cr_url = 'http://connekthq.com/plugins/ajax-load-more/custom-repeaters/';
               if (has_action('alm_unlimited_installed')){
                  echo '<a class="btn installed" href="'. $cr_url .'" target="_blank"><i class="fa fa-check-square"></i> Installed</a> ';
               }else{
                  echo '<a class="btn" href="'. $cr_url .'" target="_blank"><i class="fa fa-download"></i> Purchase &amp; Install</a>';
               }
            ?> 		   
		   </div>
		   <!-- End Custom Repeaters --> 
		   
		   <!-- Preloaded -->
		   <div class="group">
			   <div class="row no-brd">
			      <div class="expand-wrap">
                  <div class="section-title">
                     <img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/preloaded-add-ons.jpg">                         
                  </div>
                  <div class="wrap">
                     <h2 class="addon-title"><?php _e('Preloaded', ALM_NAME); ?></h2>
                     <p class="addon-intro"><?php _e('Easily preload an initial set of posts before completing any Ajax requests to the server.', ALM_NAME); ?></p>
                     <p><?php _e('The Preloaded add-on will display content to your site visitors faster and allow you cache the initial result set which can greatly reduce stress on your server.', ALM_NAME); ?></p>                     
                  </div>           
               </div>
			   </div>			   
            <?php
            	$cr_url = 'http://connekthq.com/plugins/ajax-load-more/preloaded/';
               if (has_action('alm_preload_installed')){
                  echo '<a class="btn installed" href="'. $cr_url .'" target="_blank"><i class="fa fa-check-square"></i> Installed</a> ';
               }else{
                  echo '<a class="btn" href="'. $cr_url .'" target="_blank"><i class="fa fa-download"></i> Purchase &amp; Install</a>';
               }
            ?> 		   
		   </div>
		   <!-- End Preloaded --> 
		   
		   <!-- SEO -->
		   <div class="group">
			   <div class="row no-brd">
			      <div class="expand-wrap">
                  <div class="section-title">
                     <img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/seo-add-ons.jpg">                         
                  </div>
                  <div class="wrap">
                     <h2 class="addon-title"><?php _e('Search Engine Optimization', ALM_NAME); ?></h2>
                     <p class="addon-intro"><?php _e('Generate unique paging URLs with every Ajax Load More query.', ALM_NAME); ?></p>
                     <p><?php _e('The SEO add-on will optimize your ajax loaded content for search engines and site visitors by generating unique paging URLs with every query.</p>', ALM_NAME); ?></p>                    
                  </div>           
               </div>
			   </div>			   
            <?php
            	$seo_url = 'http://connekthq.com/plugins/ajax-load-more/seo/';
               if (has_action('alm_seo_installed')){
                  echo '<a class="btn installed" href="'. $seo_url .'" target="_blank"><i class="fa fa-check-square"></i> Installed</a> ';
               }else{
                  echo '<a class="btn" href="'. $seo_url .'" target="_blank"><i class="fa fa-download"></i> Purchase &amp; Install</a>';
               }
            ?> 		   
		   </div>
		   <!-- End SEO -->
		   
	   </div>	   
	   
	   <div class="cnkt-sidebar">
	   	<div class="cta">
			<h3><?php _e('Add-on Updates', ALM_NAME); ?></h3>
			<p><?php _e('All add-ons are installed as stand alone plugins and will receive plugin update notifications directly within the <a href="plugins.php">WordPress Plugin dashboard</a>.', ALM_NAME); ?></p>
	   	</div>
			<?php include_once( ALM_PATH . 'admin/includes/cta/writeable.php'); ?>
	   </div>	   
	   	
	</div>
</div>