/**
 * Get the total posts remaining in the current query by ALM instance ID.
 *
 * Note: Uses localized ALM variables.
 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
 *
 * @param  {string} type The type of total to retrieve.
 * @param  {string} id   An optional Ajax Load More ID.
 * @return {Number}      A total post count.
 */
export default function getTotals(type, id = '') {
	// Get the ALM localized variable name.
	const localize_var = id ? `ajax_load_more_${id.replace(/-/g, '_')}_vars` : 'ajax_load_more_vars';

	// Get the localized value from the window object.
	const localized = window[localize_var];
	const total_posts = localized.total_posts;
	const post_count = localized.post_count;
	const page = localized.page;
	const pages = localized.pages;

	if (!localized) {
		return null;
	}

	switch (type) {
		case 'total_posts':
			return total_posts ? parseInt(total_posts) : '';

		case 'post_count':
			return post_count ? parseInt(post_count) : '';

		case 'page':
			return page ? parseInt(page) : '';

		case 'pages':
			return pages ? parseInt(pages) : '';

		case 'remaining':
			if (!total_posts || !post_count) {
				return '';
			}
			return parseInt(total_posts) - parseInt(post_count);
	}
}
