<?php
/*
Template Name: Home Page
*/
?>
<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<h1>
  <?php the_title(); ?>
</h1>
<?php endwhile; endif; ?>

<!-- Ajax Load More script block -->
<section id="ajax-load-more">
	<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>" data-post-type="post" data-category="" data-taxonomy="" data-tag="" data-author="" data-display-posts="6" data-button-text="Load More">
	<!-- Load Ajax Posts Here -->
	</ul>
</section>
<!-- /Ajax Load More -->
<?php get_footer(); ?>

