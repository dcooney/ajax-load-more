import * as resultsText from './resultsText';

/**  
 * Set localized variables
 *
 * @param {object} alm     Global alm object
 * @since 4.1 
 */
 
let setLocalizedVars = function(alm){  
   
   let type = 'standard';      

	// Current Page `page`
	if(alm.addons.nextpage){
   	type = 'nextpage';
   	if(alm.addons.paging){
         alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);      	
   	} else {
         alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + parseInt(alm.addons.nextpage_startpage) + 1);
   	}
   } else {
      alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
   }
            
   // Total Posts `total_posts`.
   // Only update if !Preloaded && !Nextpage
   if(alm.addons.preloaded !== 'true' && !alm.addons.nextpage){
   	alm.AjaxLoadMore.setLocalizedVar('total_posts', alm.totalposts);
   }                 
   
	// Set Results Text (if required)
   resultsText.almResultsText(alm, type);  
   
}

export default setLocalizedVars;