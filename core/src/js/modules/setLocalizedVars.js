import * as resultsText from './resultsText';

/**  
 * Set localized variables
 *
 * @param {object} alm     Global alm object
 * @since 4.1 
 */
 
let setLocalizedVars = function(alm){  
	
	return new Promise(resolve => {
   
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
	   
	   // Viewing
	   alm.AjaxLoadMore.setLocalizedVar('post_count', almSetPostCount(alm));       
	   
		// Set Results Text (if required)
	   resultsText.almResultsText(alm, type);
	   
	   resolve(true);
   });
   
}

export default setLocalizedVars;


/**
 * almSetViewing
 * Get total post_count
 */
function almSetPostCount(alm){	
	let pc = parseInt(alm.posts);
	let pa = parseInt(alm.addons.preloaded_amount);
	let count = pc + pa;
	count = (alm.start_page > 1) ? count - pa : count; // SEO
	count = (alm.addons.filters_startpage > 1) ? count - pa : count; // Filters
	count = (alm.addons.single_post) ? count + 1 : count; // Single Posts	
	count = (alm.addons.nextpage) ? count + 1 : count; // Next Page
	
	return count;	
}