<?php
/**
 * Layout dropdown functionality in the Repeater Template view.
 *
 * @package  AjaxLoadMore
 * @since    2.0.0
 */

// Layout add-on path.
$alm_layouts_href = 'https://connekthq.com/plugins/ajax-load-more/add-ons/layouts/?utm_source=WP%20Admin&utm_medium=Extend&utm_campaign=Layouts';

?>
<div class="alm-drop-btn alm-layout-selection">
	<a href="javascript:void(0);" class="target">
		<i class="fa fa-caret-down"></i> <?php esc_attr_e( 'Apply Layout', 'ajax-load-more' ); ?>
	</a>
	<div class="alm-dropdown">
		<div class="alm-drop-inner">
			<ul>
			<?php
			if ( has_action( 'alm_layouts_installed' ) ) {
				// List custom layouts.
				include ALM_PATH . 'admin/includes/components/custom-layouts.php';

				// Get add-on Layouts.
				do_action( 'alm_get_layouts_add_on' );
			} else {
				?>
				<li>
					<a href="javascript:void(0);" class="layout" data-type="default">
						<i class="fa fa-file-code-o" aria-hidden="true"></i>
						<?php esc_attr_e( 'Default Layout', 'ajax-load-more' ); ?>
					</a>
				</li>
				<?php
				// List custom layouts.
				include ALM_PATH . 'admin/includes/components/custom-layouts.php';
				echo '<li class="layout-cta">';
				echo '<span>';
				echo wp_kses_post( _e( 'Get predefined responsive layouts with the <strong>Layouts add-on</strong>', 'ajax-load-more' ) );
				echo '</span>';
				echo '<a class="button button-primary" href="' . esc_attr( $alm_layouts_href ) . '">' . esc_attr__( 'Get More Layouts', 'ajax-load-more' ) . '</a>';
				echo '</li>';
			}
			?>
			</ul>
		</div>
	</div>
</div>
