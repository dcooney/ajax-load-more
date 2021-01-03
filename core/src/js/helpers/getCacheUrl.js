import { parseQuerystring } from '../addons/filters';

/**
 * Generate the cache page URL for GET request
 *
 * @param {*} alm
 * @since 5.0
 * @supports Standard, SEO, Filters, Nextpage, Single Posts
 */
let getCacheUrl = function (alm) {
	if (!alm) {
		return false;
	}

	let firstpage = '1';
	let cache_url = '';
	let ext = '.html';
	let path = alm.addons.cache_path + alm.addons.cache_id;

	// SEO Add-on
	if (alm.init && alm.addons.seo && alm.isPaged) {
		// If request is a paged URL (e.g. /page/3/)
		cache_url = path + '/page-' + firstpage + '-' + alm.start_page + ext;
	}

	// Filters
	else if (alm.addons.filters) {
		let filtersPath = parseQuerystring(path);

		if (alm.init && alm.isPaged) {
			// First run & Paged
			cache_url = filtersPath + '/page-' + firstpage + '-' + alm.addons.filters_startpage + ext;
		} else {
			let page = alm.page + 1;

			if (alm.addons.preloaded === 'true') {
				// Preloaded + Filters
				page = alm.page + 2;
			}
			cache_url = filtersPath + '/page-' + page + ext;
		}
	}

	// Nextpage
	else if (alm.addons.nextpage) {
		let nextpage_cache_url;
		if (alm.addons.paging) {
			nextpage_cache_url = parseInt(alm.page) + 1;
		} else {
			nextpage_cache_url = parseInt(alm.page) + 2;
			if (alm.isPaged) {
				// If the request a paged URL (/page/3/)
				nextpage_cache_url = parseInt(alm.page) + parseInt(alm.addons.nextpage_startpage) + 1;
			}
		}

		cache_url = path + '/page-' + nextpage_cache_url + ext;
	}

	// Single Post
	else if (alm.addons.single_post) {
		cache_url = path + '/' + alm.addons.single_post_id + ext;
	}

	// Comments & Preloaded
	else if (alm.addons.comments === 'true' && alm.addons.preloaded === 'true') {
		// When using comments we need to increase the current page by 2
		cache_url = path + '/page-' + (alm.page + 2) + ext;
	}

	// Standard URL request
	else {
		cache_url = path + '/page-' + (alm.page + 1) + ext;
	}

	return cache_url;
};

export default getCacheUrl;
