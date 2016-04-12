<div class="cta mailing-list social" id="alm-mailing-list">
	<div class="head-wrap">
		<h3><?php _e('Join our mailing list', 'ajax-load-more'); ?></h3>
		<p><?php _e('Get product updates delivered directly to your inbox.', 'ajax-load-more'); ?></p>
	</div>
	<form action="" method="post" id="alm-mc-embedded" name="mc-embedded-subscribe-form" class="validate" data-path="<?php echo ALM_ADMIN_URL; ?>includes/mailchimp/mailchimp-info.php" novalidate>   	
      <div class="form-wrap">
         <div class="inner-wrap">
            <i class="fa fa-envelope"></i>
            <label for="mc_email" class="offscreen"><?php _e('Email Address', 'ajax-load-more'); ?> <span class="asterisk">*</span> </label>
            <input type="email" value="" name="email" placeholder="<?php _e('Enter email address', 'ajax-load-more'); ?>" class="required email" id="mc_email">
            <button type="submit" class="submit" id="mc_signup_submit" name="mc_signup_submit" title="Subscribe"><span class="offscreen"><?php _e('Subscribe', 'ajax-load-more'); ?></span><i class="fa fa-arrow-circle-right"></i></button>
            <div id="response"><div class="p-wrap"><p></p></div></div>
         </div>
      </div>      
   </form>
</div>