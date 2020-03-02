/**  
 * Set the results text if required.
 * 
 * @param {object} alm     Global alm object
 * @param {string} type    Type of results
 * @since 5.1
 */
export function almResultsText( alm, type = 'standard' ){
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
	
	let page = 0;
	let pages = 0;
	let post_count = 0;
	let total_posts = 0;
	let preloaded = (alm.addons.preloaded === 'true') ? true : false;
	let paging = (alm.addons.paging) ? true : false;
	let posts_per_page = alm.orginal_posts_per_page;
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :
	
         page = parseInt(alm.localize.page);
         post_count = page;
         pages = parseInt(alm.localize.total_posts);
         total_posts = pages;
         almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts);
      	
      	break;
   
   	default :
   		
   		page = parseInt(alm.page) + 1;    		
   		pages = Math.ceil(alm.localize.total_posts / posts_per_page);
   		post_count = alm.localize.post_count;
   		total_posts = alm.localize.total_posts;
   		
   		// Add 1 page if Preloaded
   		if(preloaded){
	   		page = (paging) ? alm.page + 1 : page + 1;
   		}
   		
         almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts);
   	
   }
}



/**  
 *  Display `Showing {x} of {y} pages` text.
 *
 *  @param {Object} alm
 *  @param {String} type
 *  @since 4.1
 */
export function almInitResultsText( alm, type = 'standard' ){
   
	if(!alm.resultsText) return false;
	
	let page = 0;
	let pages = Math.ceil(alm.localize.total_posts / alm.orginal_posts_per_page);
	let post_count = alm.localize.post_count;
	let total_posts = alm.localize.total_posts;
	
	switch (type) {
   	
   	// Nextpage
   	case 'nextpage' :   
   		page = alm.addons.nextpage_startpage;
   		post_count = page;
         almRenderResultsText(alm.resultsText, page, total_posts, post_count, total_posts);      	
         break;
   	
   	// Preloaded
   	case 'preloaded' :    	     
         page = (alm.addons.paging && alm.addons.seo) ? parseInt(alm.start_page) + 1 : parseInt(alm.page) + 1; 
         almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts);      	
      	break;
   	
   	default :
   	
   	   console.log('No results to set.');
   	   
	}
	
}


/**  
 *  Render `Showing {x} of {y} results` text.
 * 
 *  @param {Element} el
 *  @param {String} page
 *  @param {String} pages
 *  @param {String} post_count
 *  @param {String} total_posts
 *  @since 4.1
 */
let almRenderResultsText = function( el, page, pages, post_count, total_posts ){
   
   el.forEach(function(result){
	   
	   pages = parseInt(pages);
	   let text = (pages > 0) ? alm_localize.results_text : alm_localize.no_results_text;
	      
	   if(pages > 0){
	      text = text.replace('{num}', `<span class="alm-results-num">${page}</span>`); // Deprecated
	      text = text.replace('{page}', `<span class="alm-results-page">${page}</span>`);
	      text = text.replace('{total}', `<span class="alm-results-total">${pages}</span>`); // Deprecated
	      text = text.replace('{pages}', `<span class="alm-results-pages">${pages}</span>`);
	      text = text.replace('{post_count}', `<span class="alm-results-post_count">${post_count}</span>`)
	      text = text.replace('{total_posts}', `<span class="alm-results-total_posts">${total_posts}</span>`);
	      result.innerHTML = text; 
	   } else {
	      result.innerHTML = text;  
	   }
   });
}
