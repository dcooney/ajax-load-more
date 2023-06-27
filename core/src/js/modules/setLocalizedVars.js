import * as resultsText from './resultsText';

/**
 * Set localized variables
 *
 * @param {object} alm ALM object
 * @since 4.1
 */
export default function setLocalizedVars(alm) {
	const { addons } = alm;
	return new Promise((resolve) => {
		let type = 'standard';

		if (addons.nextpage) {
			// Nextpage
			type = 'nextpage';
			if (addons.paging) {
				alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
			} else {
				alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + parseInt(addons.nextpage_startpage) + 1);
			}
		} else if (addons.woocommerce) {
			// WooCommerce
			type = 'woocommerce';
			alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
		} else {
			// Standard ALM.
			const page = addons.preloaded === 'true' ? parseInt(alm.page) + 2 : parseInt(alm.page) + 1;
			alm.AjaxLoadMore.setLocalizedVar('page', parseInt(page));

			let pages = Math.ceil(alm.totalposts / alm.orginal_posts_per_page);
			pages = addons.preloaded === 'true' ? pages + 1 : pages;
			alm.AjaxLoadMore.setLocalizedVar('pages', parseInt(pages));
		}

		// Total Posts `total_posts`.
		// Only update if !preloaded && !nextpage && !woocommerce
		if (addons.preloaded !== 'true' && !addons.nextpage && !addons.woocommerce) {
			alm.AjaxLoadMore.setLocalizedVar('total_posts', alm.totalposts);
		}

		// Viewing count.
		alm.AjaxLoadMore.setLocalizedVar('post_count', almSetPostCount(alm));

		// Set Results Text (if required).
		resultsText.almResultsText(alm, type);

		resolve(true);
	});
}

/**
 * Get total post_count.
 *
 * @param {Object} alm ALM object.
 * @returns {number} Total post count.
 */
function almSetPostCount(alm) {
	const { postcount, addons } = alm;
	const { preloaded_amount } = addons;

	// Construct post count.
	let count = parseInt(postcount) + parseInt(preloaded_amount);
	count = alm.start_page > 1 ? count - parseInt(preloaded_amount) : count; // SEO
	count = addons.filters_startpage > 1 ? count - parseInt(preloaded_amount) : count; // Filters
	count = addons.single_post ? count + 1 : count; // Single Posts
	count = addons.nextpage ? count + 1 : count; // Next Page

	return count;
}
