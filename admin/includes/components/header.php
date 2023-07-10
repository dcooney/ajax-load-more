<?php
/**
 * Plugin admin header.
 *
 * @package AjaxLoadMore
 */
?>
<header class="alm-admin-toolbar">
	<a class="alm-admin-toolbar--logo" href="<?php get_admin_url( null, 'admin.php?page=ajax-load-more' ); ?>">
		<?php require_once ALM_PATH . 'admin/includes/components/logo.php'; ?>
		<?php echo esc_attr( ALM_TITLE ); ?> <span><?php echo esc_attr( ALM_VERSION ); ?></span>
	</a>
</header>
<?php
if ( isset( $alm_admin_heading ) && $alm_admin_heading ) {
	?>
<div class="alm-admin-heading">
	<h1><?php echo wp_kses_post( $alm_admin_heading ); ?></h1>
</div>
<?php } ?>
