import getQueryVariable from "../helpers/getQueryVariable";

/**
 * parseQuerystring
 * Parse a filter querystring for returning caches directories
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
export function parseQuerystring(path) {
	// Get querystring
	let query = window.location.search.substring(1);
	let obj = "";
	let cache_dir = "";

	// Parse querystring into object
	if (query) {
		obj = JSON.parse(
			'{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
			function (key, value) {
				// Replace + with - in URL
				return key === ""
					? value
					: decodeURIComponent(value.replace(/\+/g, "-"));
			}
		);

		// Remove the following properties from the object as they should not be included in the cache ID

		if (obj.pg) {
			// `pg` object prop
			delete obj.pg;
		}

		if (obj.auto) {
			// `auto` object prop
			delete obj.auto;
		}
	}

	if (obj) {
		cache_dir += "/";
		Object.keys(obj).forEach((key, index) => {
			cache_dir += index > 0 ? "--" : "";
			cache_dir += `${key}--${obj[key]}`;
		});
	}

	return path + cache_dir;
}

/**
 * Build new paging URL for filters
 *
 * @param {Object} alm
 * @param {String} querystring
 * @param {Int} page
 * @since 5.3.5
 */
export function buildFilterURL(alm, querystring = "", page = 0) {
	let qs = querystring;

	if (alm.addons.filters_paging) {
		if (page > 1) {
			// Paged
			if (qs) {
				// If already has `pg` in querystring
				if (getQueryVariable("pg")) {
					qs = querystring.replace(/(pg=)[^\&]+/, "$1" + page);
				} else {
					qs = querystring + "&pg=" + page;
				}
			} else {
				qs = "?pg=" + page;
			}
		} else {
			// Not Paged
			qs = querystring.replace(/(pg=)[^\&]+/, "");
			qs = qs === "?" ? "" : qs; // Remove `?` if only symbol in querystring
			qs = qs[qs.length - 1] === "&" ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols
		}
	}

	return qs;
}
