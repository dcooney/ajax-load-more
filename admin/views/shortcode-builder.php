<div class="admin ajax-load-more shortcode-builder" id="alm-builder">
	<div class="wrap">
		<div class="header-wrap">
			<h1>
   			<?php echo ALM_TITLE; ?>: <strong><?php _e('Shortcode Builder', 'ajax-load-more'); ?></strong>
            <em><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', 'ajax-load-more'); ?></em>
			</h1>
		</div>
		<div class="cnkt-main">
		   <form id="alm-shortcode-builder-form">
			   <?php include_once( ALM_PATH . 'admin/shortcode-builder/shortcode-builder.php');	?>
		   </form>
         <p class="back2top"><a href="#wpcontent" class="group"><i class="fa fa-angle-up"></i> <?php _e('Back to Top', 'ajax-load-more'); ?></a></p>
	   </div>
	   <div class="cnkt-sidebar">
	      <div class="table-of-contents">
   	   	<div class="cta">
      	   	<div class="cta-inner">
   	   	      <select class="toc"></select>
      	   	</div>
   	   	</div>
   	   	<div class="cta">
   				<h3><?php _e('Shortcode Output', 'ajax-load-more'); ?></h3>
   				<div class="cta-inner">
      				<p><?php _e('Place the following shortcode into the content editor or widget area of your theme.', 'ajax-load-more'); ?></p>
      				<div class="output-wrap">
      					<div id="shortcode_output"></div>
      					<span class="copy"><?php _e('Copy', 'ajax-load-more'); ?></span>
      				</div>
      				<p class="small reset-shortcode-builder"><a href="javascript:void(0);"><i class="fa fa-refresh"></i> <?php _e('Reset Shortcode Builder', 'ajax-load-more'); ?></a></p>
   				</div>
   	   	</div>
	      </div>
	   </div>
	</div>
</div>
