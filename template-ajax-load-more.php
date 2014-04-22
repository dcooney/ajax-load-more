<?php
/*
Template Name: Ajax Load More
*/
?>
<?php get_header(); ?>
	<h1>WP Ajax Load More</h1>
	<h3>A simple solution for lazy loading WordPress posts</h3>
	<!-- AJAX LOAD MORE -->
	<section id="ajax-load-more">
		<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>/ajax-load-more" data-post-type="post" data-category="" data-taxonomy="" data-tag="" data-search="" data-display-posts="2" data-scroll="true" data-max-pages="5" data-button-text="<?php _e('Older Posts', 'framework'); ?>" data-transition="slide">
		<!-- Load Ajax Posts Here -->
		</ul>
	</section>
	<!-- /end AJAX LOAD MORE -->	
<?php get_footer(); ?>
