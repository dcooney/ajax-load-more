/**
 * Convert a plain text string into an array of HTML nodes.
 *
 * @param {string} html The HTML string
 * @param {string} type The element type.
 * @return {Array}      The HTML nodes as an array.
 * @since 5.0
 */
export default function almDomParser(html = '', type = 'text/html') {
	if (!html) {
		return '';
	}
	const parser = new DOMParser();
	const data = parser.parseFromString(html, type);
	const results = data ? Array.prototype.slice.call(data.body.childNodes) : data;
	return results;
}
