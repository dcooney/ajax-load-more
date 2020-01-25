<?php  if(isset($repeater_options)){ ?>

<div class="alm-drop-btn alm-repeater-options">
   <a href="javascript:void(0);" class="target">
	   <i class="fa fa-cog"></i><span class="offscreen"><?php _e('Options', 'ajax-load-more'); ?></span>
	</a>
	<div class="alm-dropdown">
	   <div class="alm-drop-inner">
   	   <ul>	   	   
	   	   <?php if($repeater_options['type'] !== 'theme-repeater'){ ?>
   	      <li class="option option-update">
   	      	<a href="javascript:void(0);" title="<?php _e('Update Template from Database', 'ajax-load-more'); ?>"><i class="fa fa-pencil"></i> <?php _e('Update from Database', 'ajax-load-more'); ?></a>
   	      </li>   
   	      <?php } ?>
   	      
   	      <?php 
	   	     	if(isset($repeater_options['path'])){ 
	   	      $path = str_replace('/', '_', $repeater_options['path']);
   	      	?>
   	      <li class="option download">
   	      	<form action="" method="POST" id="<?php echo $path; ?>">
	   	      	<input type="hidden" name="alm_repeaters_export" value="<?php echo $repeater_options['path']; ?>">
						<a href="javascript:void(0);" title="<?php _e('Download Template', 'ajax-load-more'); ?>" class="download-repeater">
							<i class="fa fa-download"></i> <?php _e('Download Template', 'ajax-load-more'); ?>
						</a>
   	      	</form>
   	      </li>
   	      <?php } ?>   	      
   	      <li class="option copy">
   	      	<a href="javascript:void(0);" title="<?php _e('Copy Template Data', 'ajax-load-more'); ?>"><i class="fa fa-file"></i> <?php _e('Copy Template Data', 'ajax-load-more'); ?></a>
   	      </li>
   	      	    
   	   </ul>   	   
	   </div>
	</div>
</div>

<?php } ?>
