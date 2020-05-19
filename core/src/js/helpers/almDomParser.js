/**
 * Convert a plain text string into an array of HTML nodes
 *
 * @param {*} html | The HTML string
 * @param {*} type
 * @return array
 * @since 5.0
 */
let almDomParser = function( html = '', type = 'text/html' ) {
	if(!html){
   	return false;
	}
   let parser = new DOMParser();                        
   let data = parser.parseFromString(html, type);							
   return (data) ? Array.prototype.slice.call(data.body.childNodes) : data;	
};
export default almDomParser;
