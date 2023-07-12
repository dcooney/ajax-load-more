<?php
/**
 * Plugin config CTA.
 *
 * @package AjaxLoadMore,
 */

?>
<div class="cta">
	<h3><?php esc_attr_e( 'Plugin Configurations', 'ajax-load-more' ); ?></h3>
	<div class="item">
		<h4><?php esc_attr_e( 'Plugin Version', 'ajax-load-more' ); ?></h4>
		<?php
			echo '<p>' . esc_attr( ALM_VERSION ) . '</p>';
		?>
	</div>
	<div class="item">
		<h4><?php esc_attr_e( 'Release Date', 'ajax-load-more' ); ?></h4>
		<?php
			echo '<p>' . esc_attr( ALM_RELEASE ) . '</p>';
		?>
	</div>
</div>
