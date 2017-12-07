<div class="admin ajax-load-more" id="alm-licenses">
	<div class="wrap main-cnkt-wrap">
      <header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?>: <strong><?php _e('Licenses', 'ajax-load-more'); ?></strong>
            <em><?php _e('Enter your license keys to enable automatic <a href="admin.php?page=ajax-load-more-add-ons">add-on</a> updates', 'ajax-load-more'); ?>.</em>
         </h1>
      </header>
      
      <div class="ajax-load-more-inner-wrapper">
		
   		<div class="cnkt-main">
   		
		      <h3><?php _e('License Keys', 'ajax-load-more'); ?></h3>

		      <p><?php _e('Manage your Ajax Load More license key\'s below - enter a key for each of your add-ons to receive plugin update notifications directly within the <a href="plugins.php">WP Plugins dashboard</a>.', 'ajax-load-more'); ?></p>            
            
            <?php 
               $addons = alm_get_addons();
               $addon_count = 0;
                              
               foreach($addons as $addon){ 
            		$name = $addon['name'];
            		$intro = $addon['intro'];
            		$desc = $addon['desc'];
            		$action = $addon['action'];
            		$key = $addon['key'];
            		$license = get_option($key);  
            		$status = $addon['status'];
            		$license_status = get_option($status);
            		$settings_field = $addon['settings_field'];
            		$url = $addon['url'];
            		$img = $addon['img'];  
            		$item_id = $addon['item_id'];  
            		
            		if(has_action($action)){
               		$addon_count++;
               ?> 
               
               <div class="license" id="license-<?php echo sanitize_title_with_dashes($name); ?>">
   		         <div class="license-title">
      		         <div class="status <?php if($license_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>
            			<h2><?php echo $name; ?></h2>
   		         </div>
                  <div class="license-wrap">
      			      <form method="post" action="options.php">
   
            			   <?php if( $license_status !== false && $license_status == 'valid' ) { ?>
            			   <!-- nothing -->
            			   <?php } else { ?>
            			   <div class="no-license">
               	         <h4><?php _e('Don\'t have a license?', 'ajax-load-more'); ?></h4>
               	         <p><?php _e('A valid license is required to activate and receive plugin updates directly in your WordPress dashboard', 'ajax-load-more'); ?> &rarr; <a href="<?php echo $url; ?>?utm_source=WP%20Admin&utm_medium=Licenses&utm_campaign=<?php echo $name; ?>" target="blank"><strong><?php _e('Purchase Now', 'ajax-load-more'); ?>!</strong></a></p>
                        </div>
            			   <?php } ?>   
            			   
   	         			<?php settings_fields($settings_field); ?>   
   	         			
   	         			<label class="description offscreen" for="<?php echo $key; ?>"><?php _e('Enter License Key', 'ajax-load-more'); ?></label>
   	         			<div class="license-key-field">
   	         			   <input id="<?php echo $key; ?>" name="<?php echo $key; ?>" type="text" class="regular-text" value="<?php esc_attr_e( $license ); ?>" placeholder="<?php _e('Enter License Key', 'ajax-load-more'); ?>" />
   	         			   <?php if( $license_status !== false && $license_status == 'valid' ) { ?>
   	            		   <span class="status active">
   	            		      <?php _e('Active', 'ajax-load-more'); ?>
   	            		   </span>
   	            		   <?php } else { ?>
   	            		   <span class="status inactive">
   	            		      <?php _e('Inactive', 'ajax-load-more'); ?>
   	            		   </span>
   	            		   <?php } ?>
   	         			</div>   
   	         			
   	         			<?php 
      	         			$nonce = 'alm_'. $item_id .'_license_nonce'; 		
      	         			wp_nonce_field( $nonce, $nonce ); 
      	         		?>
      	         		
   	         			<div class="license-btn-wrap"
   						   		data-name="<?php echo $item_id; ?>"
   				         		data-url="<?php echo ALM_STORE_URL; ?>"
   					         	data-option-status="<?php echo $status; ?>"
   						         data-option-key="<?php echo $key; ?>"
   						         data-upgrade-url="<?php echo $url; ?>">
   		         			<button type="button" class="activate license-btn <?php if($license_status === 'valid'){ echo 'hide'; } ?> button-primary" data-type="activate">
   							   	<?php _e('Activate License', 'ajax-load-more'); ?>
   							   </button>
   							   <button type="button" class="deactivate license-btn <?php if($license_status !== 'valid'){ echo 'hide'; } ?> button-secondary" data-type="deactivate">
   							   	<?php _e('Deactivate License', 'ajax-load-more'); ?>
   							   </button>
   	         			</div>   
                  	</form>
   			      </div>
   			      <div class="loading"></div>
               </div>            
               <?php } ?>          
            <?php } ?>
            
            
            <?php   		     
               // No add-ons installed 
               if($addon_count == 0) :   		   
            ?>
            <div class="spacer"></div>
            <div class="license-no-addons">
               <p><?php _e('You do not have any Ajax Load More add-ons installed', 'ajax-load-more'); ?>. &raquo; <a href="admin.php?page=ajax-load-more-add-ons"><strong><?php _e('Browse Add-ons', 'ajax-load-more'); ?></strong></a></p>
            </div>
            <?php endif; ?>   
   
   	   </div>
   
   	   <aside class="cnkt-sidebar">
      	   <div id="cnkt-sticky-wrapper">
	      	   <div id="cnkt-sticky">
	         	   <div class="cta">
	                  <h3><?php _e('About Licenses', 'ajax-load-more'); ?></h3>
	                  <div class="cta-inner">
	                     <ul>
	                        <li><?php _e('License keys are found in the purchase receipt email that was sent immediately after your successful purchase and in the <a target="_blank" href="https://connekthq.com/account/">Account</a> section on our website', 'ajax-load-more');?></li>
	                        <li><?php _e('If you cannot locate your key please open a support ticket by filling out the <a href="https://connekthq.com/contact/">form</a> on our website and reference the email address used when you completed the purchase.', 'ajax-load-more'); ?></li>
	                     </ul>
	                  </div>
	                  <div class="major-publishing-actions">
	      	            <a class="button button-primary button-large" target="_blank" href="https://connekthq.com/account/">
	      		            <?php _e('Your Account', 'ajax-load-more'); ?>
	                     </a>
	                  </div>
	               </div>
	      	   </div>
      	   </div>
   	   </div>
	   
			<div class="clear"></div>   
      </aside>

	</div>
</div>
