/**
 * setFocus
 * Set user focus to improve accessibility after load events
 * 
 * @param {Boolean} init
 * @param {String} preloaded
 * @param {HTMLElement} element
 * @since 5.1
 */  
let setFocus = (init = true, preloaded = 'false', element) => {
	
	if( (init || !element) && preloaded !== 'true' ){
      return false; // Exit if first run
   }
   
   console.log(element);

   // Check if element is an array.
   // If `transition_container="false"`, `element` will be an array.
   /*
   let is_array = Array.isArray(element);
   element = (is_array) ? element[0] : element;
   */   
   
   // Set tabIndex on `.alm-reveal`
	element.setAttribute('tabIndex', '-1');
   
	let scrollHierarchy = [];			
	let parent = element.parentNode;
	while (parent) {
		scrollHierarchy.push([parent, parent.scrollLeft, parent.scrollTop]);
		parent = parent.parentNode;
	}
	
	element.focus();
	
	scrollHierarchy.forEach(function (item) {
		var element = item[0];
		
		// Check first to avoid triggering unnecessary `scroll` events				
		if (element.scrollLeft != item[1]){
			element.scrollLeft = item[1];
		}				
		if (element.scrollTop != item[2]){
			element.scrollTop = item[2];
		}
	});	
	
}
export default setFocus; 
