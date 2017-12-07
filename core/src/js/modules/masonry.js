/*
	almMasonry

	Function to trigger built-in Ajax Load More Masonry

   @param container  object
   @param items      object
   @param selector   string
   @param animation  string
   @param speed      int
   @param init       boolean
   @param filtering  boolean   
   @since 3.1
   @updated 3.2
*/

let almMasonryInit = true; // flag

let almMasonry = (container, items, selector, animation, horizontalOrder, speed, init, filtering) => {	
      
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
   
   horizontalOrder = (horizontalOrder === 'true') ? true : false;
   
	if(!filtering){
		// First Run
		if(almMasonryInit && init){
			almMasonryInit = false;
			container.imagesLoaded( () => {
				items.fadeIn(speed);				
				container.masonry({
					itemSelector: selector,
					transitionDuration: duration,
					columnWidth: selector,
					horizontalOrder: horizontalOrder,
               hiddenStyle: {
                  transform: hidden,
                  opacity: 0
               },
               visibleStyle: {
                  transform: visible,
                  opacity: 1
               }
				});
				container.masonry('reloadItems');
			});
		}
		// Standard
		else{
			container.append( items ); // Append new items
			container.imagesLoaded( () => {
				items.show();
				container.masonry( 'appended', items );
			});
		}

	} else{
		// Filtering Reset
		container.masonry('destroy'); // destroy masonry
		almMasonryInit = true; // reset almMasonryInit
		container.append( items );
		almMasonry(container, items, selector, animation, horizontalOrder, speed, true, false);
	}

};
