/**
 * Set the results text if required.
 *
 * @param {HTMLElement} target The target HTML element
 * @param {string}      html   The HTML.
 * @since 5.1
 */
const almNoResults = (target, html = '') => {
	if (html === '') {
		return false; // exit if empty
	}

	// Remove empty <p/> tags
	html = html.replace(/(<p><\/p>)+/g, '');

	// Append to DOM
	target.innerHTML = html;
};

export default almNoResults;
