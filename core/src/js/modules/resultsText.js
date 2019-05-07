/**  
 * Set the results text if required.
 * 
 * @param {object} alm     Global alm object
 * @param {string} type    Type of results
 * @since 5.1
 */
export function almResultsText(alm, type = 'standard'){
	if(!alm.resultsText) return false;	
	let resultsType = (type === 'nextpage') ? 'nextpage' : 'standard';
	
   almGetResultsText(alm, resultsType);   
}



/**  
 *  Get values for showing results text.
 * 
 *  @param {Object} alm
 *  @param {String} type
 *  @since 4.1
 */
export function almGetResultsText( alm, type = 'standard' ){
   
	
	if(!alm.resultsText) return false;
	
	let current = 0;
	let total = 0;
	let preloaded = (alm.addons.preloaded === 'true') ? true : false;
	let paging = (alm.addons.paging) ? true : false;
	let posts_per_page = alm.orginal_posts_per_page;
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :
	
         current = parseInt(alm.localize.page);
         total = parseInt(alm.localize.total_posts);
         almRenderResultsText(alm.resultsText, current, total);
      	
      	break;
   
   	default :
   		
   		current = parseInt(alm.page) + 1;    		
   		total = Math.ceil(alm.localize.total_posts / posts_per_page);
   		
   		// Add 1 page if Preloaded
   		if(preloaded){
	   		current = (paging) ? alm.page + 1 : current + 1;
   		}
   		
         almRenderResultsText(alm.resultsText, current, total);
   	
   }
}



/**  
 *  Display `Showing {x} of {y} pages` text.
 *
 *  @param {Object} alm
 *  @param {String} type
 *  @since 4.1
 */
export function almInitResultsText( alm, type = 'standard'){
   
	if(!alm.resultsText) return false;
	
	let current = 0;
	let total = Math.ceil(alm.localize.total_posts / alm.orginal_posts_per_page);
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :   	
      	
         almRenderResultsText(alm.resultsText, alm.addons.nextpage_startpage, alm.localize.total_posts);
      	
         break;
   	
   	// Preloaded
   	case 'preloaded' :   
   	     
         current = (alm.addons.paging && alm.addons.seo) ? parseInt(alm.start_page) + 1 : parseInt(alm.page) + 1;           
         almRenderResultsText(alm.resultsText, current, total);
      	
      	break;
   	
   	default :
   	
   	   console.log('Nothing to set.');
   	   
	}
	
}


/**  
 *  Render `Showing {x} of {y} results` text.
 * 
 *  @param {Element} el
 *  @param {String} current
 *  @param {String} total
 *  @since 4.1
 */
let almRenderResultsText = function(el, current, total){
   
   total = parseInt(total);
   let text = (total > 0) ? alm_localize.results_text : alm_localize.no_results_text;
      
   if(total > 0){
      text = text.replace('{num}', `<span class="alm-results-current">${current}</span>`);
      text = text.replace('{total}', `<span class="alm-results-total">${total}</span>`);
      el.innerHTML = text; 
   } else {
      el.innerHTML = text;  
   }
}
