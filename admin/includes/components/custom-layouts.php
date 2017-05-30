<?php
   $custom_layouts = apply_filters('alm_custom_layouts', '');
   if($custom_layouts){
      foreach($custom_layouts as $layout){
         echo '<li><a href="javascript:void(0);" class="layout custom" data-type="'.$layout['layout'].'"><i class="fa fa-list-alt"></i>'.$layout['name'].'</a></li>';
      }
   }
?>
