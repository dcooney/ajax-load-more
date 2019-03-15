/**  
 *  Set the results text if required.
 * 
 *  @param {Object} alm
 *  @since 4.1
 */
export function almResultsText(alm){
	if(!alm.resultsText) return false;
	
	let resultsType = 'standard';
   if(alm.nextpage && alm.resultsText){
   	resultsType = 'nextpage';
   } 
   else if(alm.paging){
   	resultsType = 'paging';	         
   } 
   else if(alm.preloaded === 'true'){
   	resultsType = 'preloaded';	         
   }else{
   	resultsType = 'standard';
   } 
   almGetResultsText(alm, resultsType);   
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
   let text = alm_localize.display_results;
   text = text.replace('{num}', current);
   text = text.replace('{total}', total);
   el.innerHTML = text;  
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
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :
	
         current = alm.page + 1 + parseInt(alm.nextpage_startpage);
         total = parseInt(alm.totalposts) + parseInt(alm.nextpage_startpage);
         almRenderResultsText(alm.resultsText, current, total);
      	
      	break;
   	
   	// Preloaded
   	case 'preloaded' : 
   	
   	console.log(alm);
	
         current = parseInt(alm.posts) + parseInt(alm.preloaded_amount);
         total = parseInt(alm.totalposts) + parseInt(alm.preloaded_amount);
         almRenderResultsText(alm.resultsText, current, total);
      	
      	break;
   	
   	// Paging
   	case 'paging' :
   	
			let start = (parseInt(alm.page) * parseInt(alm.posts_per_page) + 1)
         current = start + ' - ' + (parseInt(start) - 1 + parseInt(alm.posts));
         total = parseInt(alm.totalposts) + parseInt(alm.preloaded_amount);
         almRenderResultsText(alm.resultsText, current, total);
      	
      	break;
   
   	default :
   		
   		current = alm.posts;
   		total = parseInt(alm.totalposts);
         almRenderResultsText(alm.resultsText, current, total);
   	
   }
}



/**  
 *  Display `Showing {x} of {y} results` text.
 *
 *  @param {Object} alm
 *  @param {String} type
 *  @since 4.1
 */
export function almInitResultsText( alm, type = 'standard'){
   
	if(!alm.resultsText) return false;
	
	let current = 0;
	let total = 0;
	let totalEl = '';
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :   	
      	
	      current = alm.page + parseInt(alm.nextpage_startpage);
         total = alm.localize.total_posts;
         if(total){
            almRenderResultsText(alm.resultsText, current, total);
         }
      	
         break;
   	
   	// Preloaded
   	case 'preloaded' :
	
         current = parseInt(alm.posts) + parseInt(alm.preloaded_amount);
         total = alm.localize.total_posts;
         if(total){
            almRenderResultsText(alm.resultsText, current, total);
         }
      	
      	break;
   	
   	// Paging
   	case 'paging' :
   	
			let start = (parseInt(alm.page) * parseInt(alm.posts_per_page) + 1)
         current = start + ' - ' + (parseInt(start) - 1 + parseInt(alm.posts_per_page));
         totalEl = alm.listing.querySelector('.alm-preloaded');
         if(totalEl){
            almRenderResultsText(alm.resultsText, current, totalEl.dataset.totalPosts);
         }
      	
      	break;
   	
   	default :
   	
   	   console.log('nothing');
   	   
	}
	
}