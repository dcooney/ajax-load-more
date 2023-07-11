<?php
/**
 * Add-ons Page.
 *
 * @package AjaxLoadMore
 * @since   2.0.0
 */

$target = 'target="_blank"';
$alm_admin_heading = __( 'Add-ons', 'ajax-load-more' );
?>
<div class="wrap ajax-load-more main-cnkt-wrap" id="alm-add-ons">
	<?php require_once ALM_PATH . 'admin/includes/components/header.php'; ?>
	<div class="ajax-load-more-inner-wrapper">
		<div class="cnkt-main stylefree">
			<?php require_once ALM_PATH . 'admin/includes/cta/pro-hero.php'; ?>
			<div class="spacer lg"></div>
			<div class="flexbox-wrap">
				<?php
				$target = 'target="_blank"';
				$addons = alm_get_addons();
				foreach ( $addons as $addon ) {
					$name           = $addon['name'];
					$intro          = $addon['intro'];
					$desc           = $addon['desc'];
					$action         = $addon['action'];
					$key            = $addon['key'];
					$status         = $addon['status'];
					$settings_field = $addon['settings_field'];
					$url            = $addon['url'];
					$img            = $addon['img'];
					?>
				<div class="group no-shadow
					<?php
					if ( has_action( $action ) ) {
						echo ' installed'; }
					?>
				">
				<a href="<?php echo $url; ?>?utm_source=WP%20Admin&utm_medium=ALM%20Add-ons&utm_campaign=<?php echo $name; ?>" <?php echo $target; ?>>
					<img src="<?php echo ALM_ADMIN_URL; ?><?php echo $img; ?>" alt="">
					<h2 class="addon-title"><?php echo $name; ?></h2>
					<p class="addon-intro"><?php echo $intro; ?></p>
					<p><?php echo $desc; ?></p>
					<?php
					if ( has_action( $action ) ) {
						echo '<span class="cnkt-button installed"><i class="fa fa-check-square"></i> ' . __( 'Installed', 'ajax-load-more' ) . '</span> ';
					} else {
						echo '<span class="cnkt-button">' . __( 'Purchase', 'ajax-load-more' ) . '</span>';
					}
					?>
				</a>
				</div>
				<?php } ?>
			</div>

			<div class="call-out light no-shadow">
				<p><?php _e( 'All add-ons are installed as stand alone plugins and with a valid license key will receive plugin update notifications directly within the <a href="plugins.php">WordPress plugin dashboard</a>.', 'ajax-load-more' ); ?></p>
			</div>
		</div>

		<aside class="cnkt-sidebar" data-sticky>
			<?php require_once ALM_PATH . 'admin/includes/cta/add-ons.php'; ?>
		</aside>
	</div>
</div>
