/**
 * Create add-on params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
export function nextpageCreateParams(alm) {
	const { listing } = alm;
	alm.addons.nextpage = listing?.dataset?.nextpage === 'true';
	if (alm.addons.nextpage) {
		alm.addons.nextpage_urls = listing.dataset.nextpageUrls === undefined ? 'true' : listing.dataset.nextpageUrls;
		alm.addons.nextpage_scroll = listing.dataset.nextpageScroll === undefined ? 'false:30' : listing.dataset.nextpageScroll;
		alm.addons.nextpage_post_id = listing.dataset.nextpagePostId;
		alm.addons.nextpage_startpage = parseInt(listing.dataset.nextpageStartpage);
		alm.addons.nextpage_title_template = listing.dataset.nextpageTitleTemplate;
		alm.addons.nextpage_postTitle = alm.listing.dataset.nextpagePostTitle;

		// Set default fallbacks.
		alm.posts_per_page = 1;
		if (alm.addons.nextpage_post_id === undefined) {
			alm.addons.nextpage = false;
		}
		if (alm.addons.nextpage_startpage === undefined) {
			alm.addons.nextpage_startpage = 1;
		}
		if (alm.addons.nextpage_startpage > 1) {
			alm.isPaged = true;
		}
	}
	return alm;
}
