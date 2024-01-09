/**
 * Set the results text if required.
 *
 * @param {Element} element Target HTML element
 * @param {string}  html    HTML to display.
 * @since 5.1
 */
export default function almNoResults(element, html = '') {
	if (!html || !element) {
		return; // Exit if empty.
	}

	// Remove empty <p/> tags.
	const results = html.replace(/(<p><\/p>)+/g, '');

	// Is this a paging instance.
	const pagingContent = element?.querySelector('.alm-paging-content');
	if (pagingContent) {
		pagingContent.innerHTML = results;
	} else {
		element.innerHTML = results;
	}
}
