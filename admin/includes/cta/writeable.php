<div class="cta">
	<h3><?php _e('Read/Write Access', 'ajax-load-more'); ?></h3>
	<div class="item">
	<?php
   //Test server for write capabilities
	
	$alm_file =  ALM_PATH .'core/repeater/default.php'; // Default ALM repeater   	
	if(file_exists($alm_file)){
   	if (is_writable($alm_file))
   	    echo __('<p class="writeable-title"><i class="fa fa-check"></i><strong>Ajax Load More</strong></p><p class="desc">Yay! Read/Write access is enabled within the /ajax-load-more/ directory.', 'ajax-load-more');
   	else
   	    echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>Ajax Load More</strong></p>Access Denied! You must enable read and write access for Ajax Load More directory (/ajax-load-more/core/repeater/) in order to save repeater template data.<br/><br/>Please contact your hosting provider or site administrator for more information.', 'ajax-load-more');
   }else{
      echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>Ajax Load More</strong></p><p class="desc">Unable to locate configuration file. Directory access may not be granted.', 'ajax-load-more');
   }   
   ?>
   
   <?php  
   // Custom Repeaters Add-on 
   if (has_action('alm_custom_repeaters')){ 
      echo '<div class="spacer"></div>';
      $alm_custom_repeater_file =  ALM_REPEATER_PATH. '/repeaters/repeater2.php'; // Test file
      if(file_exists($alm_custom_repeater_file)){
         if (is_writable($alm_custom_repeater_file))
   	    echo __('<p class="writeable-title"><i class="fa fa-check"></i><strong>ALM - Custom Repeaters</strong></p><p class="desc">Nice! Read/Write access is enabled within the /ajax-load-more-repeaters/repeaters/ directory.', 'ajax-load-more');
      	else
      	    echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>ALM Custom Repeaters</strong></p><p class="desc">Access Denied! You must enable read and write access for Ajax Load More Custom Repeaters directory (/ajax-load-more-repeaters/repeaters/) in order to save repeater template data.<br/><br/>Please contact your hosting provider or site administrator for more information.', 'ajax-load-more');
      }else{
         echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>ALM Custom Repeaters</strong></p><p class="desc">Unable to locate configuration file. Directory access may not be granted.', 'ajax-load-more');
      }      
   }
   ?> 
   
   <?php  
   // Unlimited Repeaters Add-on 
   if (has_action('alm_unlimited_repeaters')){ 
      echo '<div class="spacer"></div>';
      $alm_unlimited_file =  ALM_UNLIMITED_REPEATER_PATH .'_is_writeable.php'; // Test file
      if(file_exists($alm_unlimited_file)){
         if (is_writable($alm_unlimited_file))
   	    echo __('<p class="writeable-title"><i class="fa fa-check"></i><strong>ALM - Custom Repeaters v2</strong></p><p class="desc">Oh Ya! Read/Write access is enabled within the /ajax-load-more-repeaters-v2/repeaters/ directory.', 'ajax-load-more');
      	else
      	    echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>ALM - Custom Repeaters v2</strong></p><p class="desc">Access Denied! You must enable read and write access for Ajax Load More Unlimited directory (/ajax-load-more-repeaters-v2/repeaters/) in order to save repeater template data.<br/><br/>Please contact your hosting provider or site administrator for more information.', 'ajax-load-more');
      }else{
         echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>ALM Unlimited</strong></p><p class="desc">Unable to locate configuration file. Directory access may not be granted.', 'ajax-load-more');
      }      
   }
   ?> 
   </div>
</div>