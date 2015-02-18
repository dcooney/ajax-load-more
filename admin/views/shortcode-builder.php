<div class="admin ajax-load-more shortcode-builder" id="alm-builder">	
	<div class="wrap">
		<div class="header-wrap">
			<h2><?php _e('Ajax Load More: Shortcode Builder', ALM_NAME); ?></h2>
			<p><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', ALM_NAME); ?></p>  
		</div>
		<div class="cnkt-main">
		   <div class="group">
		   <form id="alm-shortcode-builder-form">
			   <?php include_once( ALM_PATH . 'admin/shortcode-builder/shortcode-builder.php');	?>
		   </form>
			   <div class="row no-brd">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', ALM_NAME); ?></a></p>					
			   </div>
		   </div>
	   </div>
	   <div class="cnkt-sidebar">
	      <div class="table-of-contents">
   	   	<div class="cta">
   	   	   <select class="toc"></select>
   	   	</div>
   	   	<div class="cta">
   				<h3><?php _e('Shortcode Output', ALM_NAME); ?></h3>
   				<p><?php _e('Place the following shortcode into the content editor or widget area of your theme.', ALM_NAME); ?></p>
   				<div class="output-wrap">
   					<div id="shortcode_output"></div>
   					<span class="copy"><?php _e('Copy', ALM_NAME); ?></span>
   				</div>
   				<p class="small reset-shortcode-builder"><a href="javascript:void(0);" title="<?php _e('Clear all Shortcode Builder settings', ALM_NAME); ?>"><i class="fa fa-refresh"></i> Reset Shortcode Builder</a></p>
   	   	</div>
	      </div>
	   </div>
	</div>
</div>