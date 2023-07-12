<?php
/**
 * Pro CTA
 *
 * @package AjaxLoadMore
 */

if ( ! has_action( 'alm_pro_installed' ) ) {
	$alm_pro = alm_get_pro_addon();
	if ( $alm_pro ) {
		$alm_pro = $alm_pro[0];
		?>
<div class="group alm-pro-hero">
	<a href="<?php echo esc_url( $alm_pro['url'] ); ?>?utm_source=WP%20Admin&utm_medium=ALM%20Add-ons&utm_campaign=<?php echo esc_attr( $alm_pro['name'] ); ?>" target="_blank">
		<div class="pro-img">
			<img src="<?php echo esc_url( ALM_ADMIN_URL ); ?><?php echo esc_attr( $alm_pro['img'] ); ?>" alt="">
		</div>
		<div class="pro-details">
			<h2 class="addon-title"><?php echo esc_attr( $alm_pro['name'] ); ?></h2>
			<p class="lg"><?php echo esc_attr( $alm_pro['intro'] ); ?></p>
			<p class="pro-desc"><?php echo esc_attr( $alm_pro['desc'] ); ?></p>
			<?php
				echo '<span class="cnkt-button">' . esc_attr__( 'Upgrade Now', 'ajax-load-more' ) . '</span>';
			?>
		</div>
	</a>
</div>
			<?php
	}
}
?>
