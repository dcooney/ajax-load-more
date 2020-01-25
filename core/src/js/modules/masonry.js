import almFadeIn from './fadeIn';
import almAppendChildren from '../helpers/almAppendChildren';
import almDomParser from '../helpers/almDomParser';
import srcsetPolyfill from '../helpers/srcsetPolyfill';
let imagesLoaded = require('imagesloaded');

/**
 * almMasonry
 * Function to trigger built-in Ajax Load More Masonry
 * 
 * @param {object} alm
 * @param {boolean} init
 * @param {boolean} filtering 
 * @since 3.1
 * @updated 5.0.2
*/
let almMasonry = (alm, init, filtering) => {	
	
	return new Promise(resolve => {
	
		let container = alm.listing;
		let html = alm.html;
		
		let selector = alm.masonry_selector;
		let columnWidth = alm.masonry_columnwidth;
		let animation = alm.masonry_animation;
		let horizontalOrder = alm.masonry_horizontalorder;
		let speed = alm.speed;	
		let masonry_init = alm.masonry_init;
	      
	   let duration = (speed+100)/1000 +'s'; // Add 100 for some delay
	   let hidden = 'scale(0.5)';
	   let visible = 'scale(1)';
	   
	   if(animation === 'zoom-out'){
	      hidden = 'translateY(-20px) scale(1.25)'; 
	      visible = 'translateY(0) scale(1)';
	   }
	   
	   if(animation === 'slide-up'){
	      hidden = 'translateY(50px)';
	      visible = 'translateY(0)';
	   } 
	   
	   if(animation === 'slide-down'){
	      hidden = 'translateY(-50px)';
	      visible = 'translateY(0)';
	   }  
	    
	   if(animation === 'none'){
	      hidden = 'translateY(0)';  
	      visible = 'translateY(0)';
	   }
	   
	   // columnWidth
	   if(columnWidth){
		   if(!isNaN(columnWidth)){// Check if number
			   columnWidth = parseInt(columnWidth);
			}
	   } else { // No columnWidth, use the selector
		   columnWidth = selector;
	   }
	   
	   // horizontalOrder
	   horizontalOrder = (horizontalOrder === 'true') ? true : false;
	      
		if(!filtering){
	   	
			// First Run
			if(masonry_init && init){			
				
				srcsetPolyfill(container, alm.ua); // Run srcSet polyfill			
				
				imagesLoaded( container, function() {
					
					let defaults = {
						itemSelector: selector,
						transitionDuration: duration,
						columnWidth: columnWidth,
						horizontalOrder: horizontalOrder,
	               hiddenStyle: {
	                  transform: hidden,
	                  opacity: 0
	               },
	               visibleStyle: {
	                  transform: visible,
	                  opacity: 1
	               } 
	            }
	            
	            // Get custom Masonry options (https://masonry.desandro.com/options.html)
	            let alm_masonry_vars = window.alm_masonry_vars;
	            if(alm_masonry_vars){ 
			         Object.keys(alm_masonry_vars).forEach(function(key) {	// Loop object	to create key:prop			
							defaults[key] = alm_masonry_vars[key];					
						});
					}				
	            
	            // Init Masonry, delay to allow time for items to be added to the page
	            setTimeout(function(){
	            	alm.msnry = new Masonry( container, defaults );
	            	// Fade In
						almFadeIn(container.parentNode, speed); 
						resolve(true);
	            }, 100 );				
					
					
				});
			}
			
			// Standard / Append content
			else{						
							
				// Loop all items and create array of node elements
				let data = almDomParser(html, 'text/html');
				
				if(data){   	
					
	   			// Append elements listing
	   			almAppendChildren(alm.listing, data, 'masonry');
	   			
	   			// Run srcSet polyfill
	   			srcsetPolyfill(container, alm.ua);
	   			
	   			// Confirm imagesLoaded & append
	   			imagesLoaded( container, function() {
						alm.msnry.appended( data );
						resolve(true);			
					});
					
				}
			}
	
		} else{		
	   	
			// Reset		
			container.parentNode.style.opacity = 0;
			almMasonry(alm, true, false);
			resolve(true);
			
		}
		
	});

};

export default almMasonry;



