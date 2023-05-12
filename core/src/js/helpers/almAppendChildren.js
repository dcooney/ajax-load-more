const nodeNameArray = ['#text', '#comment'];

/**
 * Loop array of elements and append to target
 *
 * @param {Element} target | Target element to append items
 * @param {Element} array | An array of elements
 * @param {string} transition | The transiton
 * @since 5.0
 */
export default function almAppendChildren(target = null, array = null, transition = 'fade') {
	if (!target || !array) {
		return false;
	}
	for (var i = 0; i < array.length; i++) {
		let element = array[i];
		almAppendChild(target, element, transition);
	}
}

/**
 * Append a child element to a container
 *
 * @param {Element} target | Target element to append items
 * @param {Element} element | The element to append
 * @param {string} transition | The transiton
 * @since 5.0
 */
export function almAppendChild(target = null, element = null, transition = 'fade') {
	if (!target || !element) {
		return false;
	}

	// Do not append elements that are not actual element nodes (i.e. #text node)
	// Add item if not in exclude array
	if (nodeNameArray.indexOf(element.nodeName.toLowerCase()) === -1) {
		if (transition === 'masonry') {
			// If Masonry, opacity = zero
			element.style.opacity = 0;
		}
		target.appendChild(element);
	}
}
