<?php
/**
 * Filters Page.
 *
 * @package AjaxLoadMore
 * @since   7.0.0
 */

$alm_admin_heading = __( 'Filters', 'ajax-load-more' );
$alm_pg_title      = ( has_action( 'alm_pro_installed' ) ) ? __( 'Pro License', 'ajax-load-more' ) : __( 'Licenses', 'ajax-load-more' );
$alm_pg_desc       = ( has_action( 'alm_pro_installed' ) ) ? __( 'Enter your Pro license key to enable updates from the plugins dashboard', 'ajax-load-more' ) : __( 'Enter your license keys below to enable <a href="admin.php?page=ajax-load-more-add-ons">add-on</a> updates from the plugins dashboard', 'ajax-load-more' );
?>
<div class="wrap ajax-load-more main-cnkt-wrap" id="alm-licenses">
	<?php require_once ALM_PATH . 'admin/includes/components/header.php'; ?>
	<div class="ajax-load-more-inner-wrapper">
		<div class="cnkt-main">
			<?php
			// Display Filters CTA.
			$alm_filters_cta = alm_get_addon( 'filters' );
			if ( $alm_filters_cta ) {
				echo wp_kses_post( alm_display_featured_addon( $alm_filters_cta, 'Upgrade Now' ) );
			}
			?>
		</div>

		<aside class="cnkt-sidebar" data-sticky>
			<div class="cta">
				<h3><?php esc_attr_e( 'About Licenses', 'ajax-load-more' ); ?></h3>
				<div class="cta-inner">
					<ul>
						<li><?php _e( 'License keys are found in the purchase receipt email that was sent immediately after purchase and in the <a target="_blank" href="https://connekthq.com/account/">Account</a> section on our website', 'ajax-load-more' ); ?></li>
						<li><?php _e( 'If you cannot locate your key please open a support ticket by filling out the <a href="https://connekthq.com/support/">support form</a> and reference the email address used when you completed the purchase.', 'ajax-load-more' ); ?></li>
						<li><strong><?php esc_attr_e( 'Are you having issues updating an add-on?', 'ajax-load-more' ); ?></strong><br/><?php esc_attr_e( 'Please try deactivating and then re-activating each license. Once you\'ve done that, try running the update again.', 'ajax-load-more' ); ?></li>
					</ul>
				</div>
				<div class="major-publishing-actions">
					<a class="button button-primary" target="_blank" href="https://connekthq.com/account/">
						<?php esc_attr_e( 'Your Account', 'ajax-load-more' ); ?>
					</a>
				</div>
			</div>
			<div class="clear"></div>
		</aside>
	</div>
</div>
