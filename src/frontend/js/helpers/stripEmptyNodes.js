import { EXCLUDED_NODES } from '../functions/constants';

/**
 * Remove empty HTML nodes from array of nodes.
 * Filter out nodes by nodeName.
 *
 * @param {Array} nodes Array of HTML nodes
 * @return {Array} The filtered array of HTML nodes
 * @since 5.1.3
 */
const stripEmptyNodes = function (nodes = []) {
	return nodes?.length && nodes.filter((node) => EXCLUDED_NODES.indexOf(node.nodeName.toLowerCase()) === -1);
};
export default stripEmptyNodes;
