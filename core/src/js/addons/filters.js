import getQueryVariable from '../helpers/getQueryVariable';
const FILTERS_CLASSNAME = 'alm-filters';

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
	let obj = '';
	let cache_dir = '';

	// Parse querystring into object
	if (query) {
		obj = JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
			// Replace + with - in URL
			return key === '' ? value : decodeURIComponent(value.replace(/\+/g, '-'));
		});

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
		cache_dir += '/';
		Object.keys(obj).forEach((key, index) => {
			cache_dir += index > 0 ? '--' : '';
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
export function buildFilterURL(alm, querystring = '', page = 0) {
	let qs = querystring;

	if (alm.addons.filters_paging) {
		if (page > 1) {
			// Paged
			if (qs) {
				// If already has `pg` in querystring
				if (getQueryVariable('pg')) {
					qs = querystring.replace(/(pg=)[^\&]+/, '$1' + page);
				} else {
					qs = querystring + '&pg=' + page;
				}
			} else {
				qs = '?pg=' + page;
			}
		} else {
			// Not Paged
			qs = querystring.replace(/(pg=)[^\&]+/, '');
			qs = qs === '?' ? '' : qs; // Remove `?` if only symbol in querystring
			qs = qs[qs.length - 1] === '&' ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols
		}
	}

	return qs;
}

/**
 * Create data attributes for Filters paged results
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
export function createMasonryFiltersPage(alm, element) {
	if (!alm.addons.filters) {
		return element;
	}

	let querystring = window.location.search;
	let page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonryFiltersAtts(alm, element, querystring, page);

	return element;
}

/**
 * Create data attributes for Filters - used when ?pg=2, ?pg=3 etc are hit on page load
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
export function createMasonryFiltersPages(alm, elements) {
	if (!alm.addons.filters) {
		return elements;
	}

	let pagenum = 1;
	let page = alm.page;
	let querystring = window.location.search;

	if (alm.addons.filters_startpage > 1) {
		// Create pages
		let posts_per_page = parseInt(alm.posts_per_page);
		let return_data = [];

		// Slice data array into individual pages
		for (let i = 0; i < elements.length; i += posts_per_page) {
			return_data.push(elements.slice(i, posts_per_page + i));
		}

		// Loop new data array
		for (let k = 0; k < return_data.length; k++) {
			let target = k > 0 ? k * posts_per_page : 0;
			pagenum = k + 1;

			if (elements[target]) {
				elements[target] = masonryFiltersAtts(alm, elements[target], querystring, pagenum);
			}
		}
	} else {
		pagenum = page;
		if (elements && elements[0]) {
			elements[0] = masonryFiltersAtts(alm, elements[0], querystring, pagenum);
		}
	}

	return elements;
}

// Create the attributes (page, url, classes)  for the masonry items
function masonryFiltersAtts(alm, element, querystring, pagenum) {
	element.classList.add(FILTERS_CLASSNAME);
	element.dataset.page = pagenum;
	if (pagenum > 1) {
		element.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, pagenum);
	} else {
		let updatedQS = querystring.replace(/(pg=)[^\&]+/, ''); // Remove `pg` from querysting
		updatedQS = updatedQS === '?' ? '' : updatedQS; // Remove empty querysting

		element.dataset.url = alm.canonical_url + updatedQS;
	}

	return element;
}
