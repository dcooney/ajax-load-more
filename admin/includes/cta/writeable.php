<div class="cta">
	<h3><?php _e('Read/Write Access', 'ajax-load-more'); ?></h3>
	<div class="cta-inner">
   	<div class="item"> 
   	<?php
      //Test server for write capabilities      
      $path = AjaxLoadMore::alm_get_repeater_path();      
   	$alm_file =  $path .'/default.php'; // Default ALM repeater   
   		
   	if(file_exists($alm_file)){
      	if (is_writable($alm_file)){
      	    echo __('<p class="writeable-title"><i class="fa fa-check"></i><strong>Enabled</strong></p><p class="desc">Read/Write access is enabled within the Repeater Template directory.', 'ajax-load-more');
      	} else {
      	    echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>Access Denied</strong></p><p class="desc">You must enable read and write access to save repeater template data.<br/><br/>Please contact your hosting provider or site administrator for more information.</p>', 'ajax-load-more');
         }
      }else{
         echo __('<p class="writeable-title"><i class="fa fa-exclamation"></i><strong>Error</strong></p><p class="desc">Unable to locate configuration file. Directory access may not be granted.', 'ajax-load-more');
      }   
      ?>
      </div>
      <div class="alm-file-location">
         <input type="text" value="<?php echo $path; ?>" readonly="readonly">
      </div>
	</div>
</div>