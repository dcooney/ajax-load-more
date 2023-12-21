/**
 * Create the data attributes for an SEO item.
 *
 * @param {Object} alm     The ALM object.
 * @param {Object} element The element HTML node.
 * @param {number} pagenum The current page number.
 * @return {HTMLElement}   Modified HTML element.
 */
export function addSEOAttributes(alm, element, pagenum) {
	const { addons, canonical_url } = alm;
	const { retain_querystring = true } = alm_localize;
	const querystring = retain_querystring ? window.location.search : '';

	element.classList.add('alm-seo');
	element.dataset.page = pagenum;

	if (addons.seo_permalink === 'default') {
		// Default Permalinks
		if (pagenum > 1) {
			element.dataset.url = canonical_url + querystring + '&paged=' + pagenum;
		} else {
			element.dataset.url = canonical_url + querystring;
		}
	} else {
		// Pretty Permalinks
		if (pagenum > 1) {
			element.dataset.url = canonical_url + addons.seo_leading_slash + 'page/' + pagenum + addons.seo_trailing_slash + querystring;
		} else {
			element.dataset.url = canonical_url + querystring;
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
	if (seo_offset === 'true') {
		return parseInt(page) + 1;
	}
	return parseInt(page);
}
