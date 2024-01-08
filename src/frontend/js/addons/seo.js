/**
 * Create add-on params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
export function seoCreateParams(alm) {
	const { listing } = alm;
	alm.addons.seo = listing.dataset.seo === 'true';
	if (alm.addons.seo) {
		alm.addons.seo_offset = listing.dataset.seoOffset || 0;
		alm.addons.seo_permalink = listing.dataset.seoPermalink;
		alm.addons.seo_pageview = listing.dataset.seoPageview;
		alm.addons.seo_trailing_slash = listing.dataset.seoTrailingSlash === 'false' ? '' : '/';
		alm.addons.seo_leading_slash = listing.dataset.seoLeadingSlash === 'true' ? '/' : '';
	}

	alm.start_page = alm?.listing?.dataset?.seoStartPage || '';
	if (alm.start_page) {
		alm.start_page = parseInt(alm.start_page);
		alm.addons.seo_scroll = listing.dataset.seoScroll;
		alm.addons.seo_scrolltop = listing.dataset.seoScrolltop;
		alm.addons.seo_controls = listing.dataset.seoControls;
		alm.isPaged = false;
		if (alm.start_page > 1) {
			alm.isPaged = true; // Is this a paged page > 1 ?
			alm.posts_per_page = alm.start_page * alm.posts_per_page;
		}
		if (alm.addons.paging) {
			// If paging, reset posts_per_page value.
			alm.posts_per_page = alm.orginal_posts_per_page;
		}
	} else {
		alm.start_page = 1;
	}
	return alm;
}

/**
 * Create data attributes for an SEO item.
 *
 * @param {Object}      alm        The ALM object.
 * @param {HTMLElement} element    The element HTML node.
 * @param {number}      pagenum    The current page number.
 * @param {boolean}     skipOffset Skip the SEO offset check.
 * @return {HTMLElement}           Modified HTML element.
 */
export function addSEOAttributes(alm, element, pagenum, skipOffset = false) {
	const { addons, canonical_url } = alm;
	const { retain_querystring = true } = alm_localize;
	const querystring = retain_querystring ? window.location.search : '';

	pagenum = !skipOffset ? getSEOPageNum(addons?.seo_offset, pagenum) : pagenum;

	element.classList.add('alm-seo');
	element.dataset.page = pagenum;

	if (addons.seo_permalink === 'default') {
		// Default Permalinks
		if (pagenum > 1) {
			element.dataset.url = `${canonical_url}${querystring}&paged=${pagenum}`;
		} else {
			element.dataset.url = `${canonical_url}${querystring}`;
		}
	} else {
		// Pretty Permalinks
		if (pagenum > 1) {
			element.dataset.url = `${canonical_url}${addons.seo_leading_slash}page/${pagenum}${addons.seo_trailing_slash}${querystring}`;
		} else {
			element.dataset.url = `${canonical_url}${querystring}`;
		}
	}

	return element;
}

/**
 * Get the current page number.
 *
 * @param {string} seo_offset Is this an SEO offset.
 * @param {number} page       The page number,
 * @return {number}           The page number.
 */
export function getSEOPageNum(seo_offset, page) {
	return seo_offset === 'true' ? parseInt(page) + 1 : parseInt(page);
}

/**
 * Create div to hold offset values for SEO.
 *
 * @param {Object} alm The ALM object.
 */
export function createSEOOffset(alm) {
	let offsetDiv = document.createElement('div');
	// Add data attributes.
	offsetDiv = addSEOAttributes(alm, offsetDiv, 1, true);

	// Insert into ALM container.
	alm.main.insertBefore(offsetDiv, alm.listing);
}
