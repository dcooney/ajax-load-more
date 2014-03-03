<li>
	<h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>	
	<p class="meta"><?php the_time('F d, Y'); ?></p>
	<?php the_excerpt(); ?>
</li>