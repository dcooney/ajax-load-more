import almAppendChild from './almAppendChild';
/**
 * Loop array of elements and append to target
 *
 * @param {*} target | Target element to append items
 * @param {*} array | An array of elements
 * @param {*} transition | The transiton
 * @since 5.0
 */
 
let almAppendChildren = function( target = null, array = null, transition = 'fade' ) {
	if(!target || !array){
		return false;
	}	
	for (var i = 0; i < array.length; i++) {	
		let element = array[i];		
		almAppendChild(target, element, transition);		
	}
};
export default almAppendChildren;