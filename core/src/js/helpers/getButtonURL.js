/**
 * Get the URL for Load More button.
 *
 * @param {object} alm The Ajax Load More object.
 * @param {string} rel The type of load more, `next` or `previous`.
 * @since 5.4.0
 */
export function getButtonURL(alm, rel = 'next') {
	if (!alm || !alm.trigger) {
		return false;
	}
	let button = alm.trigger.querySelector('.alm-load-more-btn');
	if (rel === 'prev') {
		button = document.querySelector('.alm-load-more-btn--prev');
	}

	const url = button ? button.dataset.url : '';
	return url ? url : '';
}

/**
 * Set button dataset attributes.
 *
 * @param {Element} button The HTML element.
 * @param {number} page The current page number.
 * @param {string} url The URL for updating.
 */
export function setButtonAtts(button, page, url) {
	if (!button) {
		return;
	}

	if (button.rel && button.rel === 'prev') {
		button.href = url;
	}

	button.dataset.page = page; // Set Page.
	button.dataset.url = url ? url : ''; // Set URL.
}
