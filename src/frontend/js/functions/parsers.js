import stripEmptyNodes from '../functions/stripEmptyNodes';

/**
 * Convert a plain text string into an array of HTML nodes.
 *
 * @param {string} html The HTML string
 * @param {string} type The element type.
 * @return {Array}      The HTML nodes as an array.
 * @since 5.0
 */
export function domParser(html = '', type = 'text/html') {
	if (!html) {
		return [];
	}
	const parser = new DOMParser();
	const data = parser.parseFromString(html, type);
	const nodes = data?.body?.childNodes;

	return nodes ? stripEmptyNodes([...nodes]) : [];
}

/**
 * Convert retun table data into an array of HTML elements.
 *
 * @param {string} html Plain text HTML.
 * @return {Array}      Array of HTML elements.
 * @since 5.0
 */
export function tableParser(html = null) {
	if (!html) {
		return [];
	}
	// Create table element and add results to table body.
	const tbody = document.createElement('tbody');
	tbody.innerHTML = html;

	return [tbody];
}
