<div class="cta">
	<h3><?php _e('Read/Write Access', ALM_NAME); ?></h3>
	<div class="item">
	<?php
		//Test server for write capabilities
	$filename =  ALM_PATH .'admin/includes/test-writable.txt';
	if (is_writable($filename))
	    echo '<p><i class="fa fa-check"></i><strong>'.__('Write Access Enabled!').'</strong></p><p class="desc">Good news! Your server is configured to read and write files within the plugin directory.';
	else
	    echo '<p><i class="fa fa-exclamation"></i><strong>'.__('Write Access Denied!').'</strong></p><p class="desc">Write access on your server is required in order to save repeater data. Please contact your hosting provider or site administrator for more information.';
 ?> 
 </div>
</div>