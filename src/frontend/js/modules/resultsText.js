import getTotals from '../helpers/getTotals';

/**
 * Set the results text if required.
 *
 * @param {object} alm  ALM object.
 * @param {string} type Type of results.
 * @since 5.1
 */
export function almResultsText(alm, type = 'standard') {
	if (!alm.resultsText || alm.nested === 'true') {
		return false;
	}
	const resultsType = type === 'nextpage' || type === 'woocommerce' ? type : 'standard';
	almGetResultsText(alm, resultsType);
}

/**
 * Get values for showing results text.
 *
 * @param {object} alm  ALM object.
 * @param {string} type Type of results.
 * @since 4.1
 */
export function almGetResultsText(alm, type = 'standard') {
	if (!alm.resultsText || !alm.localize || alm.nested === 'true') {
		return false;
	}

	let page = 0;
	let pages = 0;
	let post_count = 0;
	let total_posts = 0;
	let posts_per_page = alm.orginal_posts_per_page;

	switch (type) {
		// Nextpage
		case 'nextpage':
			page = parseInt(alm.localize.page);
			post_count = page;
			pages = parseInt(alm.localize.total_posts);
			total_posts = parseInt(pages);
			almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);

			break;

		// WooCommerce
		case 'woocommerce':
			// Don't do anything
			break;

		default:
			page = getTotals('page', alm.id);
			pages = getTotals('pages', alm.id);
			post_count = getTotals('post_count', alm.id);
			total_posts = getTotals('total_posts', alm.id);

			almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);
	}
}

/**
 * Display `Showing {x} of {y} pages` text.
 *
 * @param {object} alm  ALM object.
 * @param {string} type Type of results.
 * @since 4.1
 */
export function almInitResultsText(alm, type = 'standard') {
	if (!alm.resultsText || !alm.localize || alm.nested === 'true') {
		return false;
	}

	let page = 0;
	let pages = Math.ceil(alm.localize.total_posts / alm.orginal_posts_per_page);
	let post_count = parseInt(alm.localize.post_count);
	let total_posts = parseInt(alm.localize.total_posts);

	switch (type) {
		case 'nextpage': // Nextpage
			page = alm.addons.nextpage_startpage;
			post_count = page;
			pages = total_posts;
			almRenderResultsText(alm.resultsText, page, total_posts, post_count, total_posts, alm.posts_per_page);
			break;

		case 'preloaded': // Preloaded
			page = alm.addons.paging && alm.addons.seo ? parseInt(alm.start_page) + 1 : parseInt(alm.page) + 1;
			almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, alm.posts_per_page);
			break;

		case 'woocommerce': // WooCommerce
			// Don't do anything
			break;

		default:
			console.log('No results to set.');
	}
}

/**
 *  Render `Showing {x} of {y} results` text.
 *
 *  @param {Element} el          The results text HTML element.
 *  @param {string}  page        The current page number.
 *  @param {string}  pages       The total pages.
 *  @param {string}  post_count  Total posts displayed.
 *  @param {string}  total_posts Total amount of posts in query.
 *  @param {string}  per_page    Total amount of posts per page.
 *  @since 4.1
 */
const almRenderResultsText = function (el, page, pages, post_count, total_posts, per_page) {
	el.forEach(function (result) {
		pages = parseInt(pages);
		let text = pages > 0 ? alm_localize.results_text : alm_localize.no_results_text;

		// Paging add-on.
		// Start and End values for posts in view.
		const start = page * per_page - per_page + 1;
		const end_val = page * per_page;
		const end = end_val <= total_posts ? end_val : total_posts;

		if (pages > 0) {
			text = text.replace('{num}', `<span class="alm-results-num">${page}</span>`); // Deprecated
			text = text.replace('{page}', `<span class="alm-results-page">${page}</span>`);
			text = text.replace('{start}', `<span class="alm-results-start">${start}</span>`);
			text = text.replace('{end}', `<span class="alm-results-start">${end}</span>`);
			text = text.replace('{total}', `<span class="alm-results-total">${pages}</span>`); // Deprecated
			text = text.replace('{pages}', `<span class="alm-results-pages">${pages}</span>`);
			text = text.replace('{post_count}', `<span class="alm-results-post_count">${post_count}</span>`);
			text = text.replace('{total_posts}', `<span class="alm-results-total_posts">${total_posts}</span>`);
			result.innerHTML = text;
		} else {
			result.innerHTML = text;
		}
	});
};
