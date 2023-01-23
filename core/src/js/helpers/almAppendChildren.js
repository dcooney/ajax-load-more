import almAppendChild from './almAppendChild';

/**
 * Loop array of elements and append to target
 *
 * @param {Element} target | Target element to append items
 * @param {Element} array | An array of elements
 * @param {string} transition | The transiton
 * @since 5.0
 */

const almAppendChildren = function (target = null, array = null, transition = 'fade') {
	if (!target || !array) {
		return false;
	}
	for (var i = 0; i < array.length; i++) {
		let element = array[i];
		almAppendChild(target, element, transition);
	}
};
export default almAppendChildren;
