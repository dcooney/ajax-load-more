/**
 * Remove empty HTML nodes from array of nodes
 * Remove all empty text nodes from SEO and Filters return
 *
 * @param {Array} nodes Array of HTML nodes
 * @return {Array}      The filtered array of HTML nodes
 * @since 5.1.3
 */
const stripEmptyNodes = function (nodes = '') {
	if (!nodes) {
		return false;
	}

	// Exclude these nodeNames from being rendered
	const nodeNameArray = ['#text', '#comment'];

	// Filter data by nodeName
	return nodes.filter((node) => nodeNameArray.indexOf(node.nodeName.toLowerCase()) === -1);
};
export default stripEmptyNodes;
