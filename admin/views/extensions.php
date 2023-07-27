<?php
/**
 * Extensions Page.
 *
 * @package AjaxLoadMore
 * @since   2.0.0
 */

$alm_admin_heading = __( 'Extensions', 'ajax-load-more' );
?>
<div class="wrap ajax-load-more main-cnkt-wrap" id="alm-extensions">
	<?php require_once ALM_PATH . 'admin/includes/components/header.php'; ?>
	<div class="ajax-load-more-inner-wrapper">
		<div class="cnkt-main">
			<?php
			$alm_extension_array = array(
				array(
					'slug' => 'ajax-load-more-for-acf',
				),
				array(
					'slug' => 'ajax-load-more-for-relevanssi',
				),
				array(
					'slug' => 'ajax-load-more-rest-api',
				),
				array(
					'slug' => 'ajax-load-more-for-searchwp',
				),
				array(
					'slug' => 'ajax-load-more-for-terms',
				),
				array(
					'slug' => 'ajax-load-more-for-users',
				),
			);
			if ( class_exists( 'Connekt_Plugin_Installer' ) ) {
				Connekt_Plugin_Installer::init( $alm_extension_array );
			}
			?>
			<div class="spacer lg"></div>
			<div class="call-out call-out--centered light no-shadow" style="width: 100%;">
				<p><?php echo wp_kses_post( __( 'Extensions are installed as standalone plugins and receive update notifications in the <a href="plugins.php">plugin dashboard</a>.', 'ajax-load-more' ) ); ?></p>
			</div>
		</div>
		<aside class="cnkt-sidebar" data-sticky>
			<?php require_once ALM_PATH . 'admin/includes/cta/extensions.php'; ?>
		</aside>
	</div>
</div>
