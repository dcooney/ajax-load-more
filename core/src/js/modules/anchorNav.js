import {almScroll, getOffset} from '../ajax-load-more';

/**  
 * Create a numbered anchored navigation
 *
 * @param {object} alm
 * @param {boolean} init
 * @since 5.2 
 */ 
export function anchorNav(alm, init = false, from_preloaded = false){  
	
	let totalPosts = parseInt(alm.localize.post_count);
	if(totalPosts == 0){
		return false; // Exit if zero posts
	}

	if(alm && alm.anchorNav && alm.transition_container && alm.transition !== 'masonry'){
		
		let offset = (alm.anchorNav.dataset.offset) ? parseInt(alm.anchorNav.dataset.offset) : 30;
		let startPage = (alm.start_page) ? parseInt(alm.start_page) : 0;
		let filterStartPage = (alm.addons.filters_startpage) ? parseInt(alm.addons.filters_startpage) : 0;
		let nextpageStartPage = (alm.addons.nextpage_startpage) ? parseInt(alm.addons.nextpage_startpage) : 0;		
		let page = parseInt(alm.page);
		let preloaded = (alm.addons.preloaded === 'true') ? true : false;
				
		// Exit if Paging or Next Page
		if(alm.addons.paging || alm.addons.nextpage){
			return false;
		}
		
		
		// Init
		
		if(init){
   		setTimeout(function(){
   			// Paged results
   			if((alm.addons.seo && startPage > 1 ) || (alm.addons.filters && filterStartPage > 1) || (alm.addons.nextpage && nextpageStartPage > 1)){				
   				// SEO
   				if(alm.addons.seo && startPage > 1){
   					for(let i = 0; i < startPage; i++){
   						createAnchorButton(alm, i, offset);
   					}
   				} 
   				// Filters
   				if(alm.addons.filters && filterStartPage > 1){
   					for(let i = 0; i < filterStartPage; i++){
   						createAnchorButton(alm, i, offset);
   					}
   				}
   				// Nextpage
   				if(alm.addons.nextpage && nextpageStartPage > 1){
   					for(let i = 0; i < nextpageStartPage; i++){
   						createAnchorButton(alm, i, offset);
   					}
   				}
   			}
   			else {
   				if(!from_preloaded && preloaded){
   					page = page + 1;
   				}
   				createAnchorButton(alm, page, offset);
   			}	
			}, 100);
		} 
		else {			
			
			// Preloaded
			if(preloaded){
				if(alm.addons.seo && startPage > 0){
					page = page;
				}				
				else if(alm.addons.filters && filterStartPage > 0){
					page = page;
				}				
				else {
					page = page + 1;
				}
			}
			
			createAnchorButton(alm, page, offset);
			
		}		
	}    
}


// Clear clearAnchorNav
export function clearAnchorNav(){
	let anchorNav = document.querySelector('.alm-anchor-nav');
   if (anchorNav) {
		anchorNav.innerHTML = '';
	}
}


// Create Standar Page Button
function createAnchorButton(alm, page, offset){		
		
	let button = document.createElement('button');
	button.type = "button";
	
	page = parseInt(page) + 1;
	button.innerHTML = getAnchorLabel(alm, page);		 
	button.dataset.page = page;
	alm.anchorNav.appendChild(button);
	
	button.addEventListener('click', function(e){
		let page = this.dataset.page;
		let target = document.querySelector(`.alm-reveal:nth-child(${page})`) || document.querySelector(`.alm-nextpage:nth-child(${page})`);
		if(!target){
			return false;
		}
		let top = (typeof getOffset === 'function') ? getOffset(target).top : target.offsetTop;
		almScroll(top - offset);
	});
	
}


// Get Button Label
function getAnchorLabel(alm, page){
   
	let label = page;
	
	// Single Posts
	if(alm.addons.single_post){
   	let element = document.querySelector(`.alm-reveal.alm-single-post[data-page="${page - 1}"]`);
	   label = (element) ? element.dataset.title : label;
	}
	
	// Dynamic function name
	let funcName = `almAnchorLabel_${alm.id}`;
	if (typeof window[funcName] === 'function') {
   	label = window[funcName](page, label);
   }
	
	return label;
}
