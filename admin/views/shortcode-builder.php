<?php
// @codingStandardsIgnoreStart
?>
<div class="admin ajax-load-more shortcode-builder" id="alm-builder">
	<div class="wrap main-cnkt-wrap">

		<header class="header-wrap">
			<h1>
   			<?php echo ALM_TITLE; ?>: <strong><?php _e('Shortcode Builder', 'ajax-load-more'); ?></strong>
            <em><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', 'ajax-load-more'); ?></em>
			</h1>
			<?php alm_render_transient_notification(); ?>
		</header>

		<div class="ajax-load-more-inner-wrapper">

   		<div class="cnkt-main stylefree">
   		   <form id="alm-shortcode-builder-form">
   			   <?php require_once ALM_PATH . 'admin/shortcode-builder/shortcode-builder.php'; ?>
   		   </form>
            <p class="back2top"><a href="#wpcontent" class="group no-shadow"><i class="fa fa-angle-up"></i> <?php _e('Back to Top', 'ajax-load-more'); ?></a></p>
   	   </div>

   	   <aside class="cnkt-sidebar">
	   	   <div id="cnkt-sticky-wrapper" class="table-of-contents">
		   	   <div id="cnkt-sticky">
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
	         					<textarea id="shortcode_output" readonly></textarea>
	         				</div>
	      				</div>
	      				<div class="major-publishing-actions">
	   	   				<a class="button button-primary copy copy-to-clipboard" data-copied="<?php _e('Copied!', 'ajax-load-more'); ?>"><?php _e('Copy Shortcode', 'ajax-load-more'); ?></a>
	   	   				<p class="small reset-shortcode-builder"><a href="javascript:void(0);"><i class="fa fa-refresh"></i> <?php _e('Reset', 'ajax-load-more'); ?></a></p>
	      				</div>
	      	   	</div>
		   	   </div>
   	      </div>
   	   </aside>

         <div class="clear"></div>
      </div>

	</div>
</div>
