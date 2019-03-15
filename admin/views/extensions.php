<div class="admin ajax-load-more" id="alm-extensions">
	<div class="wrap main-cnkt-wrap">   	
      <header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?>: <strong><?php _e('Extensions', 'ajax-load-more'); ?></strong>
            <em><?php _e('Free extensions that provide compatibility with popular plugins and core WordPress functionality', 'ajax-load-more'); ?>.</em>
         </h1>
         <?php alm_render_transient_notification(); ?>  
      </header>
      
      <div class="ajax-load-more-inner-wrapper">
		
   		<div class="cnkt-main full">   
   			<?php      			
      			$plugin_array = array(   			
   					array(
   						'slug' => 'ajax-load-more-for-acf',
   					),
   					array(
   						'slug' => 'ajax-load-more-for-relevanssi',
   					),
   					array(
   						'slug' => 'ajax-load-more-rest-api'
   					),
   					array(
   						'slug' => 'ajax-load-more-for-searchwp'
   					)
   				);	   				   			
      			if(class_exists('Connekt_Plugin_Installer')){
      			   Connekt_Plugin_Installer::init($plugin_array);
      			}	   
   			?>   
      		<div class="call-out light no-shadow" style="width: 100%;">
      		   <p><?php _e('Extensions are installed as stand alone plugins and receive update notifications in the <a href="plugins.php">plugin dashboard</a>.', 'ajax-load-more'); ?></p>
         	</div>
   	   </div>  
   	
   	<div class="clear"></div>   
      </div>
      
	</div>
</div>
