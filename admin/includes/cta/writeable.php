<?php
	// @codingStandardsIgnoreStart
?>
<div class="cta">
	<h3><?php _e('Read/Write Access', 'ajax-load-more'); ?></h3>
	<div class="cta-inner">
   	<?php
      //Test server for write capabilities
      $path = AjaxLoadMore::alm_get_repeater_path();
   	$alm_file =  $path . '/default.php'; // Default ALM repeater

   	if ( file_exists( $alm_file ) ) {
      	if ( is_writable( $alm_file ) ) {
				echo '<div class="alm-status success"><span><i class="fa fa-check"></i>' . esc_html__( 'Enabled', 'ajax-load-more' ) . '</span></div>';
      	   echo '<p>' . esc_html__( 'Read/Write access is enabled within the Repeater Template directory.', 'ajax-load-more') . '</p>';
      	} else {
				echo '<div class="alm-status failed"><span><i class="fa fa-exclamation"></i>' . esc_html__( 'Access Denied', 'ajax-load-more' ) . '</span></div>';
      	   echo '<p>'. esc_html__( 'You must enable read and write access to save repeater template data. Please contact your hosting provider or site administrator for more information.', 'ajax-load-more' ) .'</p>';
         }
      }else{
			echo '<div class="alm-status failed"><span><i class="fa fa-exclamation"></i>' . esc_html__( 'Error', 'ajax-load-more' ) . '</span></div>';
			echo '<p>'. esc_html__( 'Unable to locate configuration file. Directory access may not be granted.', 'ajax-load-more' ) .'</p>';
      }
      ?>

      <div class="alm-file-location">
         <input type="text" value="<?php echo esc_html__($path); ?>" readonly="readonly">
      </div>

	</div>
</div>
