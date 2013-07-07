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

<section id="ajax-load-more">
	<ul class="listing" data-path="<?php echo get_template_directory_uri(); ?>" data-post-type="post" data-tag="" data-display-posts="6" data-button-text="Load More">
	<!-- Load Ajax Posts Here -->
	</ul>
</section>
<?php get_footer(); ?>

