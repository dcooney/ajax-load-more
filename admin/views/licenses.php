<div class="admin ajax-load-more" id="alm-licenses">	
	<div class="wrap">
		<div class="header-wrap">
	   		<h2><?php echo ALM_TITLE; ?>: <strong><?php _e('Licenses', ALM_NAME); ?></strong></h2>
	   		<p><?php _e('Enter your license keys to enable automatic updates for <a href="admin.php?page=ajax-load-more-add-ons">ALM Add-ons</a>.', ALM_NAME); ?></p>  
		</div>
		<div class="cnkt-main">
		   <div class="group">
		      <h3><?php _e('License Keys', ALM_NAME); ?></h3>
		   
		      <p><?php _e('Manage your Ajax Load More license key\'s below - enter a key for each of your add-ons to receive plugin update notifications directly within the <a href="plugins.php">WP Plugins dashboard</a>.', ALM_NAME); ?></p>
		      		      
		      <?php 
   		      // alm_cache_installed
   		      // alm_unlimited_installed
   		      // alm_preload_installed
   		      // alm_paging_installed
   		      // alm_seo_installed   
   		   ?>
   		   
   		   <?php 
      		   // Check if any add ons are installed. 
      		   if(has_action('alm_cache_installed') || has_action('alm_unlimited_installed') || has_action('alm_preload_installed') || has_action('alm_paging_installed') || has_action('alm_seo_installed')) : ?>			      
		      
		      
		      <?php 
   		      if (has_action('alm_cache_installed')){
   		      // CACHE 
				   $alm_cache_license = get_option( 'alm_cache_license_key' );
               $alm_cache_status = get_option( 'alm_cache_license_status' );
		      ?>
	         <div class="license" id="license-paging">
		         <div class="license-title"> 
   		         <div class="status <?php if($alm_cache_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>        
         			<h2><?php _e('Cache', ALM_NAME); ?></h2> 
         			<a class="cnkt-button installed" href="http://connekthq.com/plugins/ajax-load-more/cache/" target="_blank"><i class="fa fa-check-square"></i> Installed</a>	
		         </div>	
               <div class="license-wrap">
   			      <form method="post" action="options.php">               			
         			
         			<?php settings_fields('alm_cache_license'); ?>   
         			<label class="description" for="alm_cache_license_key"><?php _e('Enter License Key', ALM_NAME); ?></label>
         			<div class="license-key-field">
         			   <input id="alm_cache_license_key" name="alm_cache_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $alm_cache_license ); ?>" placeholder="<?php _e('Enter License Key', ALM_NAME); ?>" />
         			   <?php if( $alm_cache_status !== false && $alm_cache_status == 'valid' ) { ?>
            		   <span class="status active">
            		      <?php _e('Active', ALM_NAME); ?>
            		   </span>
            		   <?php } else { ?>
            		   <span class="status inactive">
            		      <?php _e('In-active', ALM_NAME); ?>
            		   </span>
            		   <?php } ?>
         			</div>
         			
         			<?php wp_nonce_field( 'alm_cache_license_nonce', 'alm_cache_license_nonce' ); ?>
         			<?php if($alm_cache_status === '' || $alm_cache_status !== 'valid') {
            			submit_button(__('Save License Key', ALM_NAME), 'primary', '', false);
         			} ?>
         			
         			<?php if( false !== $alm_cache_license ) { ?>	
         			   		
            			<?php if( $alm_cache_status !== false && $alm_cache_status == 'valid' ) { ?>
            				<input type="submit" class="button-secondary" name="alm_cache_license_deactivate" value="<?php _e('De-activate License', ALM_NAME); ?>"/>            				
            			<?php } else { ?>
            			   <?php if(!empty($alm_cache_license)){ ?>
            				<input type="submit" class="button-secondary" name="alm_cache_license_activate" value="<?php _e('Activate License', ALM_NAME); ?>"/>
            				<?php } ?>
            			<?php } ?>                  			
         			<?php } ?>
         			
               	</form>
			      </div> 
            </div> 	
            <?php 
               }
               // End CACHE 
            ?>		      
		      
		      
		      <?php 
   		      if (has_action('alm_unlimited_installed')){
   		      // PAGING 
				   $alm_unlimited_license = get_option( 'alm_unlimited_license_key' );
               $alm_unlimited_status = get_option( 'alm_unlimited_license_status' );
		      ?>
	         <div class="license" id="license-paging">
		         <div class="license-title">       
   		         <div class="status <?php if($alm_unlimited_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>   
         			<h2><?php _e('Custom Repeaters v2', ALM_NAME); ?></h2> 
         			<a class="cnkt-button installed" href="http://connekthq.com/plugins/ajax-load-more/paging/" target="_blank"><i class="fa fa-check-square"></i> Installed</a>	
		         </div>	
               <div class="license-wrap">
   			      <form method="post" action="options.php">               			
         			
         			<?php settings_fields('alm_unlimited_license'); ?>   
         			<label class="description" for="alm_unlimited_license_key"><?php _e('Enter License Key', ALM_NAME); ?></label>
         			<div class="license-key-field">
         			   <input id="alm_unlimited_license_key" name="alm_unlimited_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $alm_unlimited_license ); ?>" placeholder="<?php _e('Enter License Key', ALM_NAME); ?>" />
         			   <?php if( $alm_unlimited_status !== false && $alm_unlimited_status == 'valid' ) { ?>
            		   <span class="status active">
            		      <?php _e('Active', ALM_NAME); ?>
            		   </span>
            		   <?php } else { ?>
            		   <span class="status inactive">
            		      <?php _e('In-active', ALM_NAME); ?>
            		   </span>
            		   <?php } ?>
         			</div>
         			
         			<?php wp_nonce_field( 'alm_unlimited_license_nonce', 'alm_unlimited_license_nonce' ); ?>
         			<?php if($alm_unlimited_status === '' || $alm_unlimited_status !== 'valid') {
            			submit_button(__('Save License Key', ALM_NAME), 'primary', '', false);
         			} ?>
         			
         			<?php if( false !== $alm_unlimited_license ) { ?>	
         			   		
            			<?php if( $alm_unlimited_status !== false && $alm_unlimited_status == 'valid' ) { ?>
            				<input type="submit" class="button-secondary" name="alm_unlimited_license_deactivate" value="<?php _e('De-activate License', ALM_NAME); ?>"/>            				
            			<?php } else { ?>
            			   <?php if(!empty($alm_unlimited_license)){ ?>
            				<input type="submit" class="button-secondary" name="alm_unlimited_license_activate" value="<?php _e('Activate License', ALM_NAME); ?>"/>
            				<?php } ?>
            			<?php } ?>                  			
         			<?php } ?>
         			
               	</form>
			      </div> 
            </div> 	
            <?php 
               }
               // End PAGING 
            ?>
		      
		      
		      <?php 
   		      if (has_action('alm_paging_installed')){
   		      // PAGING 
				   $alm_paging_license = get_option( 'alm_paging_license_key' );
               $alm_paging_status = get_option( 'alm_paging_license_status' );
		      ?>
	         <div class="license" id="license-paging">
		         <div class="license-title">       
   		         <div class="status <?php if($alm_paging_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>   
         			<h2><?php _e('Paging', ALM_NAME); ?></h2> 
         			<a class="cnkt-button installed" href="http://connekthq.com/plugins/ajax-load-more/paging/" target="_blank"><i class="fa fa-check-square"></i> Installed</a>	
		         </div>	
               <div class="license-wrap">
   			      <form method="post" action="options.php">               			
         			
         			<?php settings_fields('alm_paging_license'); ?>   
         			<label class="description" for="alm_paging_license_key"><?php _e('Enter License Key', ALM_NAME); ?></label>
         			<div class="license-key-field">
         			   <input id="alm_paging_license_key" name="alm_paging_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $alm_paging_license ); ?>" placeholder="<?php _e('Enter License Key', ALM_NAME); ?>" />
         			   <?php if( $alm_paging_status !== false && $alm_paging_status == 'valid' ) { ?>
            		   <span class="status active">
            		      <?php _e('Active', ALM_NAME); ?>
            		   </span>
            		   <?php } else { ?>
            		   <span class="status inactive">
            		      <?php _e('In-active', ALM_NAME); ?>
            		   </span>
            		   <?php } ?>
         			</div>
         			
         			<?php wp_nonce_field( 'alm_paging_license_nonce', 'alm_paging_license_nonce' ); ?>
         			<?php if($alm_paging_status === '' || $alm_paging_status !== 'valid') {
            			submit_button(__('Save License Key', ALM_NAME), 'primary', '', false);
         			} ?>
         			
         			<?php if( false !== $alm_paging_license ) { ?>	
         			   		
            			<?php if( $alm_paging_status !== false && $alm_paging_status == 'valid' ) { ?>
            				<input type="submit" class="button-secondary" name="alm_paging_license_deactivate" value="<?php _e('De-activate License', ALM_NAME); ?>"/>            				
            			<?php } else { ?>
            			   <?php if(!empty($alm_paging_license)){ ?>
            				<input type="submit" class="button-secondary" name="alm_paging_license_activate" value="<?php _e('Activate License', ALM_NAME); ?>"/>
            				<?php } ?>
            			<?php } ?>                  			
         			<?php } ?>
         			
               	</form>
			      </div> 
            </div> 	
            <?php 
               }
               // End PAGING 
            ?>	
            
            <?php 
               if (has_action('alm_preload_installed')){
               // PRELOADED 
               $alm_preloaded_license = get_option( 'alm_preloaded_license_key' );
               $alm_preloaded_status = get_option( 'alm_preloaded_license_status' );
            ?>
            <div class="license" id="license-paging">
               <div class="license-title">   
   		         <div class="status <?php if($alm_preloaded_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>       
            		<h2><?php _e('Preloaded', ALM_NAME); ?></h2> 
            		<a class="cnkt-button installed" href="http://connekthq.com/plugins/ajax-load-more/preloaded/" target="_blank"><i class="fa fa-check-square"></i> Installed</a>	
               </div>	
               <div class="license-wrap">
                  <form method="post" action="options.php">               			
            		
            		<?php settings_fields('alm_preloaded_license'); ?>   
            		<label class="description" for="alm_preloaded_license_key"><?php _e('Enter License Key', ALM_NAME); ?></label>
            		<div class="license-key-field">
            		   <input id="alm_preloaded_license_key" name="alm_preloaded_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $alm_preloaded_license ); ?>" placeholder="<?php _e('Enter License Key', ALM_NAME); ?>" />
            		   <?php if( $alm_preloaded_status !== false && $alm_preloaded_status == 'valid' ) { ?>
            		   <span class="status active">
            		      <?php _e('Active', ALM_NAME); ?>
            		   </span>
            		   <?php } else { ?>
            		   <span class="status inactive">
            		      <?php _e('In-active', ALM_NAME); ?>
            		   </span>
            		   <?php } ?>
            		</div>
            		
            		<?php wp_nonce_field( 'alm_preloaded_license_nonce', 'alm_preloaded_license_nonce' ); ?>
            		<?php if($alm_preloaded_status === '' || $alm_preloaded_status !== 'valid') {
            			submit_button(__('Save License Key', ALM_NAME), 'primary', '', false);
            		} ?>
            		
            		<?php if( false !== $alm_preloaded_license ) { ?>	
            		   		
            			<?php if( $alm_preloaded_status !== false && $alm_preloaded_status == 'valid' ) { ?>
            				<input type="submit" class="button-secondary" name="alm_preloaded_license_deactivate" value="<?php _e('De-activate License', ALM_NAME); ?>"/>    				
            			<?php } else { ?>
            			   <?php if(!empty($alm_preloaded_license)){ ?>
            				<input type="submit" class="button-secondary" name="alm_preloaded_license_activate" value="<?php _e('Activate License', ALM_NAME); ?>"/>
            				<?php } ?>
            			<?php } ?>                  			
            		<?php } ?>
            		
               	</form>
               </div> 
            </div> 	
            <?php 
               }
               // End PRELOADED 
            ?>	
            
            
            <?php 
   		      if (has_action('alm_seo_installed')){
   		      // SEO 
				   $alm_seo_license = get_option( 'alm_seo_license_key' );
               $alm_seo_status = get_option( 'alm_seo_license_status' );
		      ?>
	         <div class="license" id="license-paging">
		         <div class="license-title"> 
   		         <div class="status <?php if($alm_seo_status == 'valid'){echo 'valid';}else{echo 'invalid';} ?> "></div>        
         			<h2><?php _e('Search Engine Optimization', ALM_NAME); ?></h2> 
         			<a class="cnkt-button installed" href="http://connekthq.com/plugins/ajax-load-more/seo/" target="_blank"><i class="fa fa-check-square"></i> Installed</a>	
		         </div>	
               <div class="license-wrap">
   			      <form method="post" action="options.php">               			
         			
         			<?php settings_fields('alm_seo_license'); ?>   
         			<label class="description" for="alm_seo_license_key"><?php _e('Enter License Key', ALM_NAME); ?></label>
         			<div class="license-key-field">
         			   <input id="alm_seo_license_key" name="alm_seo_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $alm_seo_license ); ?>" placeholder="<?php _e('Enter License Key', ALM_NAME); ?>" />
         			   <?php if( $alm_seo_status !== false && $alm_seo_status == 'valid' ) { ?>
            		   <span class="status active">
            		      <?php _e('Active', ALM_NAME); ?>
            		   </span>
            		   <?php } else { ?>
            		   <span class="status inactive">
            		      <?php _e('In-active', ALM_NAME); ?>
            		   </span>
            		   <?php } ?>
         			</div>
         			
         			<?php wp_nonce_field( 'alm_seo_license_nonce', 'alm_seo_license_nonce' ); ?>
         			<?php if($alm_seo_status === '' || $alm_seo_status !== 'valid') {
            			submit_button(__('Save License Key', ALM_NAME), 'primary', '', false);
         			} ?>
         			
         			<?php if( false !== $alm_seo_license ) { ?>	
         			   		
            			<?php if( $alm_seo_status !== false && $alm_seo_status == 'valid' ) { ?>
            				<input type="submit" class="button-secondary" name="alm_seo_license_deactivate" value="<?php _e('De-activate License', ALM_NAME); ?>"/>            				
            			<?php } else { ?>
            			   <?php if(!empty($alm_seo_license)){ ?>
            				<input type="submit" class="button-secondary" name="alm_seo_license_activate" value="<?php _e('Activate License', ALM_NAME); ?>"/>
            				<?php } ?>
            			<?php } ?>                  			
         			<?php } ?>
         			
               	</form>
			      </div> 
            </div> 	
            <?php 
               }
               // End SEO 
            ?>
            
            
            <?php else : ?>
                        
            <div class="license-no-addons">
               <p><?php _e('You do not have any Ajax Load More add-ons installed', ALM_NAME); ?>. &raquo; <a href="admin.php?page=ajax-load-more-add-ons"><strong><?php _e('Browse Add-ons', ALM_NAME); ?></strong></a></p>
            </div>
            
            <?php endif; ?>               
               
   			   
		   </div>
	   </div>
	   
	   <div class="cnkt-sidebar">
   	   <div class="cta">
            <h3><?php _e('About Licenses', ALM_NAME); ?></h3>
            <div class="cta-wrap">
               <ul>
               <li><?php _e('Add-on licenses will enable updates directly in your WP dashboard.', ALM_NAME);?></li>
               <li><?php _e('License keys are found in the purchase receipt email that was sent immediately after your successful purchase.', ALM_NAME);?></li>
               <li><?php _e('If you cannot locate your key please use the <a href="https://connekthq.com/contact/">contact form</a> on our website and reference the email address used when you completed the purchase.', ALM_NAME); ?></li>
               </ul>
            </div>
         </div> 
         <div class="cta">
            <h3><?php _e('Legacy Users', ALM_NAME); ?></h3>
            <div class="cta-wrap">
               <ul>
               <li>If you have made a purchase prior to <u>July 6, 2015</u> you will require a license after updating your add-ons. Please <a href="https://connekthq.com/contact/">email us</a> with a reference to the email address used when you completed the add-on purchase and we will send your license key.</li>
               </ul>
            </div>
         </div>  	   
	   </div>	      
	   	
	</div>
</div>