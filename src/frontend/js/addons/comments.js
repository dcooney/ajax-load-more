/**
 * Create add-on params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
export function commentsCreateParams(alm) {
	const { listing } = alm;
	alm.addons.comments = listing?.dataset?.comments === 'true';
	if (alm.addons.comments) {
		alm.addons.comments_post_id = listing.dataset.comments_post_id;
		alm.addons.comments_per_page = listing.dataset.comments_per_page;
		alm.addons.comments_per_page = alm.addons.comments_per_page === undefined ? '5' : alm.addons.comments_per_page;
		alm.addons.comments_type = listing.dataset.comments_type;
		alm.addons.comments_style = listing.dataset.comments_style;
		alm.addons.comments_template = listing.dataset.comments_template;
		alm.addons.comments_callback = listing.dataset.comments_callback;
	}
	return alm;
}
