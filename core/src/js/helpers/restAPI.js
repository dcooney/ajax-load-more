/**
 * almGetAjaxUrl
 * Build the Ajax URL request
 * 
 * @param action         string
 * @since 3.6
 */

export function almGetAjaxUrl(action = ''){	
	if(!action){
   	return false;
	}
	
	let url = '';
	if(alm_localize.restapi.active){
   	// REST API Endpoint
      url = `${alm_localize.restapi.url}${alm_localize.restapi.namespace}/${action}`;
   } else { 
      // admin-ajax.php
      url = alm_localize.ajaxurl;
   }   
   return url;   
}



/**
 * almGetAjaxAction
 * If not REST API, prepend 'alm_' to action  
 * 
 * @param action         string
 * @since 5.1
 */
export function almGetAjaxAction(action = ''){   
   if(!action){
   	return false;
	}
	
   let action_name = (alm_localize.restapi.active) ? action : `alm_${action}`;   
   return action_name;
}