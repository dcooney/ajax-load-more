/**
 * Return a query param by name.
 *
 * @param {string} name The query param name.
 * @param {string} url  The URL.
 * @return {string}     The query param value.
 */
const getParameterByName = function (name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) {
		return null;
	}
	if (!results[2]) {
		return '';
	}
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
export default getParameterByName;
