<?php
	$alm_pg_title = ( has_action( 'alm_pro_installed' ) ) ? __( 'Pro License', 'ajax-load-more' ) : __( 'Licenses', 'ajax-load-more' );
	$alm_pg_desc  = ( has_action( 'alm_pro_installed' ) ) ? __( 'Enter your Pro license key to enable updates from the plugins dashboard', 'ajax-load-more' ) : __( 'Enter your license keys below to enable <a href="admin.php?page=ajax-load-more-add-ons">add-on</a> updates from the plugins dashboard', 'ajax-load-more' );
?>
<div class="admin ajax-load-more" id="alm-licenses">
	<div class="wrap main-cnkt-wrap">
		<header class="header-wrap">
			<h1>
				<?php echo ALM_TITLE; ?>: <strong><?php echo esc_html( $alm_pg_title ); ?></strong>
				<em><?php echo $alm_pg_desc; ?>.</em>
			</h1>
			<?php alm_render_transient_notification(); ?>
		</header>
		<div class="ajax-load-more-inner-wrapper">
			<div class="cnkt-main">
				<h3>
					<?php
					if ( has_action( 'alm_pro_installed' ) ) {
						esc_html_e( 'License Key', 'ajax-load-more' );
					} else {
						esc_html_e( 'License Keys', 'ajax-load-more' );
					}
					?>
				</h3>
				<p>
					<?php
					if ( has_action( 'alm_pro_installed' ) ) {
						_e( 'Enter your Ajax Load More Pro license key to receive plugin update notifications directly within the <a href="plugins.php">WP Plugins dashboard</a>.', 'ajax-load-more' );
					} else {
						_e( 'Enter a key for each of your Ajax Load More add-ons to receive plugin update notifications directly within the <a href="plugins.php">WP Plugins dashboard</a>.', 'ajax-load-more' );
					}
					?>
				</p>
			<?php
			$addons      = has_action( 'alm_pro_installed' ) ? alm_get_pro_addon() : alm_get_addons();
			$addon_count = 0;

			foreach ( $addons as $addon ) {

				$name           = $addon['name'];
				$intro          = $addon['intro'];
				$desc           = $addon['desc'];
				$action         = $addon['action'];
				$key            = $addon['key'];
				$license        = get_option( $key );
				$status         = $addon['status'];
				$settings_field = $addon['settings_field'];
				$url            = $addon['url'];
				$img            = $addon['img'];
				$item_id        = $addon['item_id'];

				// If installed.
				if ( ! has_action( $action ) ) {
					continue;
				}

				$addon_count++;

				// Check license.
				$license_status = alm_license_check( $item_id, $license, $status );

				?>

					<div class="license" id="license-<?php echo sanitize_title_with_dashes( $name ); ?>">
						<div class="license-title">
							<div class="status <?php echo ( $license_status === 'valid' ) ? 'valid' : 'invalid'; ?> "></div>
							<h2><?php echo $name; ?></h2>
						</div>
						<div class="license-wrap">
							<form method="post" action="options.php">

								<?php if ( $license_status !== false && $license_status == 'valid' ) { ?>
									<!-- nothing -->
								<?php } else { ?>
									<div class="no-license">
										<h4><?php _e( 'Don\'t have a license?', 'ajax-load-more' ); ?></h4>
										<p><?php _e( 'A valid license is required to activate and receive plugin updates directly in your WordPress dashboard', 'ajax-load-more' ); ?> &rarr; <a href="<?php echo $url; ?>?utm_source=WP%20Admin&utm_medium=Licenses&utm_campaign=<?php echo $name; ?>" target="blank"><strong><?php _e( 'Purchase Now', 'ajax-load-more' ); ?>!</strong></a></p>
									</div>
								<?php } ?>

								<?php settings_fields( $settings_field ); ?>

								<label class="description offscreen" for="<?php echo $key; ?>"><?php esc_html_e( 'Enter License Key', 'ajax-load-more' ); ?></label>
								<div class="license-key-field">
									<input id="<?php echo esc_html( $key ); ?>" name="<?php echo esc_html( $key ); ?>" type="text" class="regular-text" value="<?php esc_attr_e( $license ); ?>" placeholder="<?php _e( 'Enter License Key', 'ajax-load-more' ); ?>" />
									<?php if ( $license_status !== false && 'valid' === $license_status ) { ?>
									<span class="status active"><?php esc_attr_e( 'Active', 'ajax-load-more' ); ?></span>
									<?php } else { ?>
									<span class="status inactive"><?php echo 'expired' === $license_status ? esc_html__( 'Expired', 'ajax-load-more' ) : esc_html__( 'Inactive', 'ajax-load-more' ); ?></span>
									<?php } ?>
								</div>

								<?php
								$nonce = 'alm_' . esc_html( $item_id ) . '_license_nonce';
								wp_nonce_field( $nonce, $nonce );
								?>

								<div class="license-btn-wrap"
									data-name="<?php echo $item_id; ?>"
									data-url="<?php echo ALM_STORE_URL; ?>"
									data-option-status="<?php echo $status; ?>"
									data-option-key="<?php echo $key; ?>"
									data-upgrade-url="<?php echo $url; ?>">
									<?php
										$a_btn_class = 'valid' === $license_status ? ' hide' : '';
										$d_btn_class = 'valid' !== $license_status ? ' hide' : '';
									?>
									<?php // Activate License. ?>
									<button type="button" class="activate license-btn<?php echo esc_html( $a_btn_class ); ?> button button-primary" data-type="activate">
										<?php _e( 'Activate License', 'ajax-load-more' ); ?>
									</button>
									<?php // Deactivate License. ?>
									<button type="button" class="deactivate license-btn<?php echo esc_html( $d_btn_class ); ?> button button-secondary" data-type="deactivate">
										<?php _e( 'Deactivate License', 'ajax-load-more' ); ?>
									</button>
									<?php // Refresh License. ?>
									<button type="button" class="check-licence license-btn<?php echo esc_html( $d_btn_class ); ?> button button-secondary" data-type="check">
										<i class="fa fa-refresh" aria-hidden="true"></i> <?php _e( 'Refresh Status', 'ajax-load-more' ); ?>
									</button>
									<?php
									// Expired license.
									if ( 'expired' === $license_status ) {
										if ( isset( $license ) && ! empty( $license ) ) {
											$store = ALM_STORE_URL;
											$url   = "{$store}/checkout/?edd_license_key={$license}&download_id={$item_id}";
										}
										?>
										<a class="button renew-btn" href="<?php echo $url; ?>" target="_blank">
											<?php _e( 'Renew License', 'ajax-load-more' ); ?>
										</a>
									<?php } ?>
								</div>
							</form>
						</div>
						<div class="loading"></div>
					</div>
				<?php } unset( $addons ); ?>

				<?php
					// No add-ons installed.
				if ( $addon_count == 0 ) :
					?>
				<div class="spacer"></div>
				<div class="license-no-addons">
					<p><?php esc_html_e( 'You do not have any Ajax Load More add-ons installed', 'ajax-load-more' ); ?> | <a href="admin.php?page=ajax-load-more-add-ons"><strong><?php _e( 'Browse Add-ons', 'ajax-load-more' ); ?></strong></a> | <a href="https://connekthq.com/plugins/ajax-load-more/pro/" target="_blank"><strong><?php _e( 'Go Pro', 'ajax-load-more' ); ?></strong></a></p>
				</div>
				<?php endif; ?>
			</div>

			<aside class="cnkt-sidebar">
				<div id="cnkt-sticky-wrapper">
					<div id="cnkt-sticky">
						<div class="cta">
							<h3><?php _e( 'About Licenses', 'ajax-load-more' ); ?></h3>
							<div class="cta-inner">
								<ul>
									<li><?php _e( 'License keys are found in the purchase receipt email that was sent immediately after purchase and in the <a target="_blank" href="https://connekthq.com/account/">Account</a> section on our website', 'ajax-load-more' ); ?></li>
									<li><?php _e( 'If you cannot locate your key please open a support ticket by filling out the <a href="https://connekthq.com/contact/">support form</a> and reference the email address used when you completed the purchase.', 'ajax-load-more' ); ?></li>
									<li><strong><?php _e( 'Are you having issues updating an add-on?', 'ajax-load-more' ); ?></strong><br/><?php _e( 'Please try deactivating and then re-activating each license. Once you\'ve done that, try running the update again.', 'ajax-load-more' ); ?></li>
								</ul>
							</div>
							<div class="major-publishing-actions">
								<a class="button button-primary" target="_blank" href="https://connekthq.com/account/">
									<?php _e( 'Your Account', 'ajax-load-more' ); ?>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</aside>
			<div class="clear"></div>

		</div>
	</div>
</div>
