/**
 * Create a Load Previous button.
 *
 * @param {HTMLElement} content
 * @param {object} alm The Ajax Load More object.
 * @param {object} container The container element.
 * @param {number} page The previous page number.
 * @param {string} url The previous page url.
 * @param {string} label The label for the button.
 * @since 5.5.0
 */
export function createLoadPreviousButton(alm, container, page = 1, url, label) {
	if (!label) {
		return;
	}

	// Create wrapper.
	const btnWrap = document.createElement('div');
	btnWrap.classList.add('alm-btn-wrap--prev');

	// Create button.
	const button = document.createElement('a');
	button.href = url;
	button.innerHTML = label;
	button.setAttribute('rel', 'prev');
	button.dataset.page = page;
	button.dataset.url = url;
	button.setAttribute('class', `alm-load-more-btn alm-load-more-btn--prev ${alm.loading_style}`);

	// Click event.
	button.addEventListener('click', function (e) {
		alm.AjaxLoadMore.prevClick(e);
	});

	// Set alm previous button to this button.
	alm.AjaxLoadMore.setPreviousButton(button);

	// Append button to wrap.
	btnWrap.appendChild(button);

	// Get parent element.
	const parent = container.parentNode;

	// Append button before container.
	parent.insertBefore(btnWrap, container);
}
