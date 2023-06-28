<?php
/**
 * Include for displaying related plugins.
 *
 * @package AjaxLoadMore
 */

?>
<div class="cta">
	<h3><?php esc_attr_e( 'Other Plugins by Connekt', 'ajax-load-more' ); ?></h3>
	<div class="cta-inner">
		<ul class="project-listing">
			<li>
				<a target="blank" href="https://wordpress.org/plugins/block-manager/">
					<img src="<?php echo esc_url( ALM_ADMIN_URL ); ?>img/logos/block-manager-icon.png" alt="">
					<strong>Block Manager</strong>
					<span>A plugin to remove unwanted Gutenberg blocks from the WordPress block inserter.</span>
				</a>
			</li>
			<li>
				<a target="blank" href="https://connekthq.com/plugins/instant-images/">
					<img src="<?php echo esc_url( ALM_ADMIN_URL ); ?>img/logos/instant-images-icon.png" alt="">
					<strong>Instant Images</strong>
					<span>One click photo uploads to your media library from Unsplash, Pixabay and Pexels.</span>
				</a>
			</li>
		</ul>
	</div>
</div>
