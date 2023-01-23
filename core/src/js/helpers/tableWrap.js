/**
 * Wrap `table` containers in tbody elements
 * innerHTML and DOMParser do not work with <tr/> <td/> elements etc.
 *
 * @param {string} html Plain text HTML.
 * @since 5.0
 */
const tableWrap = function (html = null) {
	if (!html) {
		return false;
	}
	let table_reveal = document.createElement('tbody');
	table_reveal.innerHTML = html;
	let table_reveal_array = [table_reveal];
	return table_reveal_array; // Return new array
};
export default tableWrap;
