/**
 * Remove empty HTML nodes from array of nodes
 * Remove all empty text nodes from SEO and Filters return
 *
 * @param {*} nodes | Array of HTML nodes
 * @return array
 * @since 5.1.3
 */
let stripEmptyNodes = function( nodes = '' ) {
	if(!nodes){
   	return false;
	}	
	
	// Exclude these nodeNames from being rendered
	let nodeNameArray = ['#text', '#comment'];
	
	// Filter data by nodeName 
	let results = nodes.filter(node => (nodeNameArray.indexOf(node.nodeName.toLowerCase()) === -1) );
   
   // Send the results
   return results; 
   
};
export default stripEmptyNodes;
