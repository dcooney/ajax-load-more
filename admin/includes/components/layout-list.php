<div class="alm-drop-btn alm-layout-selection">
   <a href="javascript:void(0);" class="target"><i class="fa fa-caret-down"></i> <?php _e('Apply Layout', 'ajax-load-more'); ?></a>
	<div class="alm-dropdown">
	   <div class="alm-drop-inner">
   	   <ul>
   	      <?php if (has_action('alm_layouts_installed')){

      	      include( ALM_PATH . 'admin/includes/components/custom-layouts.php'); // Custom Layouts
      	      do_action('alm_get_layouts_add_on'); // Get Layouts

            } else { ?>
   	      <li>
   	         <a href="javascript:void(0);" class="layout" data-type="default">
      	         <i class="fa fa-file-code-o" aria-hidden="true"></i>
	   	         <?php _e('Default Layout', 'ajax-load-more'); ?>
	   	      </a>
   	      </li>
   	      <?php

					$link = 'href="https://connekthq.com/plugins/ajax-load-more/add-ons/layouts/?utm_source=WP%20Admin&utm_medium=Extend&utm_campaign=Layouts';
      	      include( ALM_PATH . 'admin/includes/components/custom-layouts.php'); // Custom Layouts
               echo '<li class="layout-cta">';
               	echo '<span>';
	            		_e('Get predefined responsive layouts with the <strong>Layouts add-on</strong>', 'ajax-load-more');	            	
               	echo '</span>';
						echo '<a class="button button-primary" href="'. $link .'">'. __('Get More Layouts', 'ajax-load-more') .'</a>';
					echo '</li>';
            }?>
   	   </ul>
	   </div>
	</div>
</div>
