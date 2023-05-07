import axios from 'axios';
import { parseQuerystring } from '../addons/filters';
import MD5 from 'crypto-js/md5';

/**
 * Create unique cache slug from query params.
 *
 * @param {object} alm  The ALM object.
 * @param {object} data The data object.
 * @return {object}     Modified data object.
 */
export function getCacheSlug(alm, data) {
	if (alm.addons.nextpage) {
		return `page-${alm.page + alm.addons.nextpage_startpage}`;
	} else {
		return MD5(JSON.stringify(data)).toString();
	}
}

/**
 * Create a single post cache file.
 *
 * @param {object} alm     The ALM object.
 * @param {string} content The content to cache.
 * @param {string} type    The type of cache to create.
 * @since 5.3.1
 */
export function createCacheFile(alm, content, type = 'standard') {
	if (alm.addons.cache !== 'true' || !content || content === '') {
		return false;
	}
	const name = type === 'single' ? alm.addons.single_post_id : `page-${alm.page + 1}`;

	const formData = new FormData();
	formData.append('action', 'alm_cache_from_html');
	formData.append('security', alm_localize.alm_nonce);
	formData.append('cache_id', alm.addons.cache_id);
	formData.append('cache_logged_in', alm.addons.cache_logged_in);
	formData.append('canonical_url', alm.canonical_url);
	formData.append('name', name);
	formData.append('html', content.trim());

	axios.post(alm_localize.ajaxurl, formData).then(function () {
		console.log('Cache created for: ' + alm.canonical_url);
	});
}

/**
 * Create a WooCommerce cache file.
 *
 * @param {object} alm     The ALM object.
 * @param {string} content The content to cache.
 * @since 5.3.1
 */
export function wooCache(alm, content) {
	if (alm.addons.cache !== 'true' || !content || content === '') {
		return false;
	}

	let formData = new FormData();
	formData.append('action', 'alm_cache_from_html');
	formData.append('security', alm_localize.alm_nonce);
	formData.append('cache_id', alm.addons.cache_id);
	formData.append('cache_logged_in', alm.addons.cache_logged_in);
	formData.append('canonical_url', alm.canonical_url);
	formData.append('name', `page-${alm.page}`);
	formData.append('html', content.trim());

	axios.post(alm_localize.ajaxurl, formData).then(function () {
		console.log('Cache created for post: ' + alm.canonical_url);
	});
}

/**
 * Generate the cache page URL for GET request
 *
 * @param {object} alm The ALM object.
 * @since 5.0
 * @supports Standard, SEO, Filters, Nextpage, Single Posts
 */
export function getCacheUrl(alm) {
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
}
