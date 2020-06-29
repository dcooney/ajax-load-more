/**
 * createMasonrySEOPage
 * Create data attributes for SEO paged results
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
export function createMasonrySEOPage(alm, element) {
	if (!alm.addons.seo) {
		return element;
	}

	let querystring = window.location.search;
	let seo_class = 'alm-seo';
	let page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonrySEOAtts(alm, element, querystring, seo_class, page);

	return element;
}

/**
 * createMasonrySEOPages
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
export function createMasonrySEOPages(alm, elements) {
	if (!alm.addons.seo) {
		return elements;
	}

	let pagenum = 1;
	let page = alm.page;
	let seo_class = 'alm-seo';
	let querystring = window.location.search;

	if (alm.start_page > 1) {
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
				elements[target] = masonrySEOAtts(
					alm,
					elements[target],
					querystring,
					seo_class,
					pagenum
				);
			}
		}
	} else {
		pagenum = page;
		elements[0] = masonrySEOAtts(
			alm,
			elements[0],
			querystring,
			seo_class,
			pagenum
		);
	}

	return elements;
}

// Create the attributes (page, url, classes)  for the masonry items
function masonrySEOAtts(alm, element, querystring, seo_class, pagenum) {
	element.classList.add(seo_class);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		if (pagenum > 1) {
			element.dataset.url =
				alm.canonical_url + querystring + '&paged=' + pagenum;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	} else {
		// Pretty Permalinks
		if (pagenum > 1) {
			element.dataset.url =
				alm.canonical_url +
				alm.addons.seo_leading_slash +
				'page/' +
				pagenum +
				alm.addons.seo_trailing_slash +
				querystring;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	}

	return element;
}

/**
 * createSEOAttributes
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load
 *
 * @param {Object} alm
 * @param {Array} elements
 * ...
 * @since 5.3.1
 */
export function createSEOAttributes(
	alm,
	element,
	querystring,
	seo_class,
	pagenum
) {
	element.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		element.dataset.url =
			pagenum > 1
				? alm.canonical_url + querystring + '&paged=' + pagenum
				: alm.canonical_url + querystring;
	} else {
		// Pretty Permalinks
		element.dataset.url =
			pagenum > 1
				? alm.canonical_url +
				  alm.addons.seo_leading_slash +
				  'page/' +
				  pagenum +
				  alm.addons.seo_trailing_slash +
				  querystring
				: alm.canonical_url + querystring;
	}

	return element;
}
