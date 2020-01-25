/**  
 * Set the results text if required.
 * 
 * @param {*} target The target HTML element
 * @param {*} html The HTML
 * @since 5.1
 */
let almNoResults = (target, html = '') => {
	if(html === ''){ 
		return false; // exit if empty	
	}
	
	// Remove empty <p/> tags
	html = html.replace(/(<p><\/p>)+/g, '');
	
	// Append to DOM
	target.innerHTML = html;   
}

export default almNoResults;