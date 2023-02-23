import * as resultsText from './resultsText';

/**
 * Set localized variables
 *
 * @param {object} alm ALM object
 * @since 4.1
 */
export default function setLocalizedVars(alm) {
	return new Promise((resolve) => {
		let type = 'standard';

		if (alm.addons.nextpage) {
			// Nextpage
			type = 'nextpage';
			if (alm.addons.paging) {
				alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
			} else {
				alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + parseInt(alm.addons.nextpage_startpage) + 1);
			}
		} else if (alm.addons.woocommerce) {
			// WooCommerce
			type = 'woocommerce';
			alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
		} else {
			// Standard ALM.
			const page = alm.addons.preloaded === 'true' ? parseInt(alm.page) + 2 : parseInt(alm.page) + 1;
			alm.AjaxLoadMore.setLocalizedVar('page', parseInt(page));

			let pages = Math.ceil(alm.totalposts / alm.orginal_posts_per_page);
			pages = alm.addons.preloaded === 'true' ? pages + 1 : pages;
			alm.AjaxLoadMore.setLocalizedVar('pages', parseInt(pages));
		}

		// Total Posts `total_posts`.
		// Only update if !preloaded && !nextpage && !woocommerce
		if (alm.addons.preloaded !== 'true' && !alm.addons.nextpage && !alm.addons.woocommerce) {
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
 */
function almSetPostCount(alm) {
	let pc = parseInt(alm.posts);
	let pa = parseInt(alm.addons.preloaded_amount);
	let count = pc + pa;
	count = alm.start_page > 1 ? count - pa : count; // SEO
	count = alm.addons.filters_startpage > 1 ? count - pa : count; // Filters
	count = alm.addons.single_post ? count + 1 : count; // Single Posts
	count = alm.addons.nextpage ? count + 1 : count; // Next Page

	return count;
}
