/*
	almMasonry

	Function to trigger built-in Ajax Load More masonry

   @param container  object
   @param items      object
   @param selector   string
   @since 3.1
*/

let almMasonryInit = true; // flag

let almMasonry = (container, items, selector) => {

	if(almMasonryInit){
		container.imagesLoaded( () => {
			items.fadeIn(250);
			container.masonry({
				itemSelector: selector,
			});
			almMasonryInit = false;
		});
	}
	else{
		container.append( items );
		container.imagesLoaded( () => {
			items.show();
			container.masonry( 'appended', items );
		});
	}
};
