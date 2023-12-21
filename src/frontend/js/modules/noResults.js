/**
 * Set the results text if required.
 *
 * @param {Element} target The target HTML element
 * @param {string}  html   The HTML.
 * @since 5.1
 */
export default function almNoResults(target, html = '') {
	if (!html) {
		return; // exit if empty.
	}

	// Remove empty <p/> tags and append to DOM.
	target.innerHTML = html.replace(/(<p><\/p>)+/g, '');
}
