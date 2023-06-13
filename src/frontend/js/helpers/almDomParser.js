/**
 * Convert a plain text string into an array of HTML nodes
 *
 * @param {string} html The HTML string
 * @param {string} type The type.
 * @return array
 * @since 5.0
 */
const almDomParser = function (html = '', type = 'text/html') {
	if (!html) {
		return;
	}
	const parser = new DOMParser();
	const data = parser.parseFromString(html, type);
	return data ? Array.prototype.slice.call(data.body.childNodes) : data;
};
export default almDomParser;
