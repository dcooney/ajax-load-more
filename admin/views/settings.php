<?php
// @codingStandardsIgnoreStart
?>
<div class="alm-settings-feedback"></div>

<div class="admin ajax-load-more settings" id="alm-settings">

	<div class="wrap main-cnkt-wrap">

		<header class="header-wrap">
         <h1>
            <?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span>
            <em><?php _e( 'A powerful plugin to add infinite scroll functionality to your website.', 'ajax-load-more' ); ?></em>
         </h1>
         <?php alm_render_transient_notification(); ?>
      </header>

      <div class="ajax-load-more-inner-wrapper">
   	   <div class="cnkt-main stylefree">

				<div class="alm-tabbed-wrapper">
				<?php
					global $wp_settings_sections, $wp_settings_fields;
					$page = 'ajax-load-more';
				?>

					<div class="alm-tabbed-wrapper--nav">
						<ul>
							<?php
							foreach ( (array) $wp_settings_sections[ $page ] as $section ) {
								echo '<li><button type="button">';
								if ( $section['title'] ) {
									if ( $section['id'] === 'alm_general_settings' || $section['id'] === 'alm_admin_settings' ) {
										echo '<i class="fa fa-cog"></i>' . $section['title'];
									} else {
										echo '<i class="fa fa-plus-circle"></i>' . str_replace( ' Settings', '', $section['title'] );
									}
								}
								echo '</button></li>';
							}
							?>
						</ul>
					</div>
					<div class="alm-tabbed-wrapper--sections">
						<?php settings_errors(); ?>
						<form action="options.php" method="post" id="alm_OptionsForm">
							<?php
								settings_fields( 'alm-setting-group' );
								// do_settings_sections( 'ajax-load-more' );

								// Custom Settings Page.
								// @see https://developer.wordpress.org/reference/functions/do_settings_sections/

								if ( ! isset( $wp_settings_sections[ $page ] ) ) {
									return;
								}

								// Loop each section.
								foreach ( (array) $wp_settings_sections[ $page ] as $section ) {

									echo '<div class="shortcode-parameter-wrap alm-tabbed-wrapper--section" tabindex="0">';

									if ( $section['title'] ) {
											echo "<h2>{$section['title']}</h2>\n";
									}

									if ( $section['callback'] ) {
											call_user_func( $section['callback'], $section );
									}

									if ( ! isset( $wp_settings_fields ) || ! isset( $wp_settings_fields[ $page ] ) || ! isset( $wp_settings_fields[ $page ][ $section['id'] ] ) ) {
											continue;
									}

									// Display settings in table.
									echo '<table class="form-table" role="presentation">';
										do_settings_fields( $page, $section['id'] );
									echo '</table>';

									echo '</div>';

								}

								//get the older values, wont work the first time.
								$options = get_option( '_alm_settings' );
							?>
							<div class="save-in-progress"></div>
						</form>
					</div>
				</div>
				<p class="back2top"><a href="#wpcontent" class="group no-shadow"><i class="fa fa-angle-up"></i> <?php _e('Back to Top', 'ajax-load-more'); ?></a></p>
   	   </div>
   	   <aside class="cnkt-sidebar">
   			<?php //include_once( ALM_PATH . 'admin/includes/cta/sharing.php' ); ?>
   			<?php //include_once( ALM_PATH . 'admin/includes/cta/test.php' );	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/resources.php' );	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/dyk.php' );	?>
   			<?php include_once( ALM_PATH . 'admin/includes/cta/about.php' ); ?>
   	   </aside>

   	<div class="clear"></div>
      </div>

	</div>
</div>
