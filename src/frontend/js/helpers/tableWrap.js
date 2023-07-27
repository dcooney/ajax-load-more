/**
 * Wrap `table` containers in tbody elements
 * innerHTML and DOMParser do not work with <tr/> <td/> elements etc.
 *
 * @param {string} html Plain text HTML.
 * @return {Array} Array of HTML elements.
 * @since 5.0
 */
const tableWrap = function (html = null) {
	if (!html) {
		return false;
	}
	const table_reveal = document.createElement('tbody');
	table_reveal.innerHTML = html;

	const table_reveal_array = [table_reveal];
	return table_reveal_array;
};
export default tableWrap;
