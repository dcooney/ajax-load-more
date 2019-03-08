/**
 * Loop array of elements and append to target
 *
 * @param {*} el | Target element to append items
 * @param {*} array | An array of elements
 * @since 5.0
 */
let almAppendChildren = function( target = null, array = null ) {
	if(!target || !array){
		return false;
	}	
	for (var i = 0; i < array.length; i++) {
		target.appendChild(array[i]);
	}
};
export default almAppendChildren;