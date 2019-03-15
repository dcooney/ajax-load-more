import almFadeIn from './fadeIn';
import almFadeOut from './fadeOut';

/**
 * almFilter(type, speed, data)
 * Filter Ajax Load More
 *
 * @param transition string;
 * @param speed number;
 * @param data obj;
 * @since 2.6.1
 */
 
let almFilter = function(transition, speed, data) {
   if(data.target){ // if a target has been specified
	   let target = document.querySelectorAll('.ajax-load-more-wrap[data-id="'+ data.target + '"]');
		target.forEach(function(element){
			almFilterTransition(transition, speed, data, element);	      
		});
   } else { // Target not specified
	   let alm = document.querySelectorAll('.ajax-load-more-wrap');
      alm.forEach(function(element){
			almFilterTransition(transition, speed, data, element);	      
		});
   }
}; 
export default almFilter;



/**
 * almFilterTransition(transition, speed, data, el)
 * Transition Ajax Load More
 *
 * @param transition string;
 * @param speed number;
 * @param data obj;
 * @param el element;
 * @since 2.13.1
 */
let almFilterTransition  = function(transition, speed, data, el){
		
   if(transition === 'fade' || transition === 'masonry'){ 
	   // Fade, Masonry transition
      almFadeOut(el, speed);
      setTimeout(function(){
	      almCompleteFilterTransition(speed, data, el);
	   }, speed);
	   
   }else{ 
	   // No transition
      almCompleteFilterTransition(speed, data, el);
   }
   
}; 



/**  
 * almCompleteFilterTransition
 * Complete the filter transition
 * 
 * @param speed number;
 * @param data obj;
 * @param el element;
 * @since 3.3
 */
let almCompleteFilterTransition = (speed, data, el) => {
	
	// Get `.alm-listing` element
	let listing = el.querySelectorAll('.alm-listing');
	
	// Loop over all .alm-listing divs
	[...listing].forEach(function(e){
		e.innerHTML = ''; // Clear listings
	});
	
	// Get Load More button
	let button = el.querySelector('.alm-load-more-btn');
	if(button){
		button.classList.remove('done');// Reset Button 
	}
	
	// Dispatch Filters
	almSetFilters(speed, data, el);
	
}

 

/**
 * almSetFilters
 * Set filter parameters on .alm-listing element
 *
 * @param speed number;
 * @param el element;
 * @param data string;
 * @updated 3.3
 * @since 2.6.1
 */
let almSetFilters = function(speed = 250, data, el){
   
   // Get `alm-listing` container
   let listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');   
   if(!listing){
	   return false;
   }
   
   // Update data attributes
	for (let [key, value] of Object.entries(data)) {
		// Convert camelCase data atts back to dashes (-).
      key = key.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2'); 
		listing.setAttribute('data-'+ key, value);
	}
	
	
   // Fade ALM back in
   almFadeIn(el, speed); 
   
	
	// Re-initiate Ajax Load More
	let target = ''; 
   if(data.target){
      // Target has been specified
      target = document.querySelector('.ajax-load-more-wrap[data-id="'+ data.target + '"]');
      if(target){
	      window.almInit(target);
      }
      
   } else {
      // Target not specified
      target = document.querySelector('.ajax-load-more-wrap');
      if(target){
	      window.almInit(target);
      }   
         
   }
   
   // Filters Complete            
   if (typeof almFilterComplete === 'function') { // Standard Filtering
      almFilterComplete();
   }
   if (typeof almFiltersAddonComplete === "function") { // Filters Add-on
      almFiltersAddonComplete(el);
   }
   // End Filters Complete
   
};
