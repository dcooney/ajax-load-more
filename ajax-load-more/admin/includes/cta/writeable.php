<div class="cta">
	<h3><?php _e('Read/Write Access', ALM_NAME); ?></h3>
	<div class="item">
	<?php
   //Test server for write capabilities
	$file =  ALM_PATH .'core/repeater/default.php'; // Default ALM repeater
   	
	if (is_writable($file))
	    echo '<p><i class="fa fa-check"></i><strong>'.__('Read/Write Access Enabled').'</strong></p><p class="desc">Good news! Your server is configured to read and write files within the /ajax-load-more/ plugin directory.';
	else
	    echo '<p><i class="fa fa-exclamation"></i><strong>'.__('Access Denied').'</strong></p><p class="desc">You must enable read and write access for Ajax Load More directories in order to save repeater template data.<br/><br/>Please contact your hosting provider or site administrator for more information.';
   ?> 
   </div>
</div>