/**
 * Get a query variable from location querystring
 *
 * @param {String} variable
 * @since 5.3.4
 */
const getQueryVariable = function (variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return false;
};

export default getQueryVariable;
