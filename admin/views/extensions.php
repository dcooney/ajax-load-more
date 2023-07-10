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
		<div class="cnkt-main full">
			<?php
				$plugin_array = array(
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
					Connekt_Plugin_Installer::init( $plugin_array );
				}
				?>
			<div class="call-out light no-shadow" style="width: 100%;">
				<p><?php _e( 'Extensions are installed as stand alone plugins and receive update notifications in the <a href="plugins.php">plugin dashboard</a>.', 'ajax-load-more' ); ?></p>
			</div>
		</div>
	</div>
</div>
