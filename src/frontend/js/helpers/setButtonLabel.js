import getTotals from './getTotals';

/**
 * Set the button label.
 *
 * @param {string} label The label of the button.
 * @param {string} id    Unique ALM ID.
 * @return {string} 		 The modified button label.
 * @since 5.6.0.2
 * @deprecated
 */
export default function setButtonLabel(label = '', id = '') {
	label = label.replace('{remaining}', getTotals('remaining', id)); // Replace {remaining} with the total remaining posts.
	label = label.replace('{post_count}', getTotals('post_count', id)); // Replace {post_count} with the total posts loaded.
	label = label.replace('{total_posts}', getTotals('total_posts', id)); // Replace {total_posts} with the amount posts in query.
	label = label.replace('{page}', getTotals('page', id)); // Replace {page} with the current page.
	label = label.replace('{pages}', getTotals('pages', id)); // Replace {pages} with the amount of pages.
	return label;
}
