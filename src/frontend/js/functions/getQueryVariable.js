/**
 * Get a query variable from location querystring
 *
 * @param {string} variable
 * @since 5.3.4
 */
export default function getQueryVariable(variable) {
	const query = window.location.search.substring(1);
	const vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return false;
}
