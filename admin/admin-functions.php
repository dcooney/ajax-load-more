<?php
	
/*
*  alm_is_admin_screen
*  Determine whether user is on an ALM admin screen
*
*  @return boolean
*  @since 2.12.0
*/
	
function alm_is_admin_screen(){
	$return = false;
	$screen = get_current_screen();
	if($screen->parent_base === 'ajax-load-more'){
		$return = true;
	}
	return $return;
}

	