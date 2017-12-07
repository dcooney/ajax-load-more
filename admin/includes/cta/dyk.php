<div class="cta dyk">
	<h3><?php _e('Did You Know?', 'ajax-load-more'); ?></h3>
	<?php $random = rand(1, 5); ?>
	<?php if($random == 1){ ?>
	<div class="cta-inner">
   	<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/shortcode-editor.jpg">
   	<p class="addon-intro">You can generate shortcodes while editing pages!</p>
   	<p>Click the Ajax Load More icon in the content editor toolbar and the <a href="?page=ajax-load-more-shortcode-builder">shortcode builder</a> will open up in a lightbox window.</p>
	</div>
	<?php } ?>
	
	<?php if($random == 2){ ?>
	<div class="cta-inner">
   	<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/cache-add-on.jpg">
   	<p class="addon-intro">You can cache your server requests with Ajax Load More!</p>
   	<p>The <a target="blank" style="font-weight: 600;" href="https://connekthq.com/plugins/ajax-load-more/add-ons/cache/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Cache">Cache</a> add-on creates static HTML files of Ajax Load More requests then delivers those static files to your visitors.</p>
   </div>
	<div class="major-publishing-actions">
	<a target="blank" class="button button-primary" href="https://connekthq.com/plugins/ajax-load-more/add-ons/cache/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Cache">Learn More</a>
	</div>
	<?php } ?>
	
	<?php if($random == 3){ ?>
	<div class="cta-inner">
   	<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/prev-post-add-on.jpg">
   	<p class="addon-intro">You can lazy load single posts with Ajax Load More!</p>
   	<p>The <a target="blank" style="font-weight: 600;" href="https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=PreviousPost">Previous Post</a> add-on will load single posts as you scroll and update the browser URL to the current post.</p>
	</div>
	<div class="major-publishing-actions">
	<a target="blank" class="button button-primary" href="https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=PreviousPost">Learn More</a>
	</div>
	<?php } ?>
	
	<?php if($random == 4){ ?>
	<div class="cta-inner">
   	<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/comments-add-on.jpg">
   	<p class="addon-intro">You can lazy load blog comments with Ajax Load More!</p>
   	<p>The <a target="blank" style="font-weight: 600;" href="https://connekthq.com/plugins/ajax-load-more/add-ons/comments/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Comments">Comments</a> add-on will load and display blog comments using the core Ajax Load More infinite scroll functionality.</p>
	</div>
	<div class="major-publishing-actions">
	<a target="blank" class="button button-primary" href="https://connekthq.com/plugins/ajax-load-more/add-ons/comments/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Comments">Learn More</a>
	</div>
	<?php } ?>
	
	<?php if($random == 5){ ?>
	<div class="cta-inner">
   	<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/next-page-add-on.jpg">
   	<p class="addon-intro">You can infinite scroll just about anything with the Next Page add-on!</p>
   	<p>The <a target="blank" style="font-weight: 600;" href="https://connekthq.com/plugins/ajax-load-more/add-ons/next-page/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Next Page">Next Page</a> add-on will allow you to split post content into pages using the <span style="display: inline-block; font-style: italic; color: #999;">&lt;!--nextpage--&gt;</span> <a href="https://codex.wordpress.org/Write_Post_SubPanel#Quicktags" target="_blank">Quicktag</a> and load the generated pages on demand.</p>
	</div>
	<div class="major-publishing-actions">
	<a target="blank" class="button button-primary" href="https://connekthq.com/plugins/ajax-load-more/add-ons/next-page/?utm_source=WP%20Admin&utm_medium=ALM%20DYK&utm_campaign=Next Page">Learn More</a>
	</div>
	<?php } ?>
	
</div>