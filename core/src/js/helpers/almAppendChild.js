/**
 * Append a child element to a container
 *
 * @param {*} target | Target element to append items
 * @param {*} element | The element to append
 * @param {*} transition | The transiton
 * @since 5.0
 */
 
let nodeNameArray = ['#text', '#comment'];

let almAppendChild = function( target = null, element = null, transition = 'fade' ) {
	if(!target || !element){
		return false; 
	}	
	
	// Do not append elements that are not actual element nodes (i.e. #text node)
	// Add item if not in exclude array
	if(nodeNameArray.indexOf(element.nodeName.toLowerCase()) === -1){		
		if(transition === 'masonry'){ // If Masonry, opacity = zero
			element.style.opacity = 0;
		}
		target.appendChild(element);
	}
};
export default almAppendChild;