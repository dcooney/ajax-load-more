/**  
 * Display alm_debug results
 * https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug
 *
 * @param {object} alm     Global alm object
 * @since 5.1.6 
 */
 
let almDebug = function(alm){  
	if(alm && alm.debug){
		console.log('alm_debug info:', alm.debug); 
	}    
}

export default almDebug;