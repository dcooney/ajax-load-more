/**
 * Set the results text if required.
 *
 * @param {Element} element Target HTML element
 * @param {string}  html    Text as HTML to display.
 * @since 5.1
 */
export default function noResults(element, html = '') {
	if (!html || !element) {
		return; // Exit if empty.
	}

	// Remove empty <p/> tags.
	html = html.replace(/(<p><\/p>)+/g, '');

	// Is this a paging instance.
	const paging = element?.querySelector('.alm-paging-content');
	if (paging) {
		paging.innerHTML = html;
	} else {
		element.innerHTML = html;
	}
}
