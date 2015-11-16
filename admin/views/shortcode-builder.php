<div class="admin ajax-load-more shortcode-builder" id="alm-builder">	
	<div class="wrap">
		<div class="header-wrap">
			<h1><?php echo ALM_TITLE; ?>: <strong><?php _e('Shortcode Builder', 'ajax-load-more'); ?></strong></h1>
			<p><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', 'ajax-load-more'); ?></p>  
		</div>
		<div class="cnkt-main">
		   <div class="group">
		   <form id="alm-shortcode-builder-form">
			   <?php include_once( ALM_PATH . 'admin/shortcode-builder/shortcode-builder.php');	?>
		   </form>
			   <div class="row no-brd">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', 'ajax-load-more'); ?></a></p>					
			   </div>
		   </div>
	   </div>
	   <div class="cnkt-sidebar">
	      <div class="table-of-contents">
   	   	<div class="cta">
   	   	   <select class="toc"></select>
   	   	</div>
   	   	<div class="cta">
   				<h3><?php _e('Shortcode Output', 'ajax-load-more'); ?></h3>
   				<p><?php _e('Place the following shortcode into the content editor or widget area of your theme.', 'ajax-load-more'); ?></p>
   				<div class="output-wrap">
   					<div id="shortcode_output"></div>
   					<span class="copy"><?php _e('Copy', 'ajax-load-more'); ?></span>
   				</div>
   				<p class="small reset-shortcode-builder"><a href="javascript:void(0);" title="<?php _e('Clear all Shortcode Builder settings', 'ajax-load-more'); ?>"><i class="fa fa-refresh"></i> Reset Shortcode Builder</a></p>
   	   	</div>
	      </div>
	   </div>
	</div>
</div>