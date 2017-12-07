var alm = alm || {};

/*
 *  alm.attachSticky
*/
alm.attachSticky  = (el, anchor, top = 0) => {
	let h = el.offsetHeight + top, // height of sticky el
	    anchorOffset = anchor.getBoundingClientRect(),
	    anchor_top = anchorOffset.top,
		 w_height = window.innerHeight, // Window height
		 el_height = el.offsetHeight; // element height
      
	if(w_height > (el_height + top)){ 
		// If container height > than sticky height
		if(anchor_top <= top) {
		   el.classList.add('attached');
		} else {
			if(anchor_top > top) {
				el.classList.remove('attached');
			}
		}
	} 		
};
 


/*
 *  alm.resizeSticky
*/   
alm.resizeSticky = () => {
   let sticky = document.getElementById('cnkt-sticky');
   let el = document.getElementById('cnkt-sticky-wrapper');
   let atts = window.getComputedStyle(el);
   sticky.style.width = atts.width;
} 



/*
 *  initSticky
*/ 
 const initSticky = () => {
	if(document.getElementById("cnkt-sticky-wrapper")){		
	   const sticky_el = document.getElementById('cnkt-sticky');
	   const sticky_anchor = document.getElementById('cnkt-sticky-wrapper');
	   const sticky_top = 70; // The position the sticky should stick 
	         
	   // Scroll    
	   window.addEventListener('scroll', function(e) { 	   
		   alm.attachSticky(sticky_el, sticky_anchor, sticky_top);
	   }); 
	   // Resize
	   window.addEventListener('resize', function(e) { 
	      alm.resizeSticky();
	   });
	   // Init
	   alm.resizeSticky();
	   alm.attachSticky(sticky_el, sticky_anchor, sticky_top);
	   
	} 
}

window.onload = function(){
	initSticky();
}
