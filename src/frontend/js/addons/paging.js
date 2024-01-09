/**
 * Create add-on params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
export function pagingCreateParams(alm) {
	const { listing } = alm;
	alm.addons.paging = listing.dataset.paging === 'true';
	if (alm.addons.paging) {
		alm.addons.paging_init = true;
		alm.addons.paging_controls = listing.dataset.pagingControls === 'true';
		alm.addons.paging_show_at_most = listing.dataset.pagingShowAtMost;
		alm.addons.paging_classes = listing.dataset.pagingClasses;
		alm.addons.paging_show_at_most = alm.addons.paging_show_at_most === undefined ? 7 : alm.addons.paging_show_at_most;

		alm.addons.paging_first_label = listing.dataset.pagingFirstLabel;
		alm.addons.paging_previous_label = listing.dataset.pagingPreviousLabel;
		alm.addons.paging_next_label = listing.dataset.pagingNextLabel;
		alm.addons.paging_last_label = listing.dataset.pagingLastLabel;

		alm.addons.paging_scroll = listing.dataset.pagingScroll ? listing.dataset.pagingScroll : false;
		alm.addons.paging_scrolltop = listing.dataset.pagingScrolltop ? parseInt(listing.dataset.pagingScrolltop) : 100;
		alm.addons.paging_content = listing.querySelector('.alm-paging-content');

		alm.pause = alm.addons.preloaded ? true : alm.pause; // If preloaded, pause ALM.
	}
	return alm;
}
