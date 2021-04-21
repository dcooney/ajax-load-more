/**
 * Create the HTML for loading Single Posts.
 *
 * @param {Object} response Query response
 * @param {HTMLElement} target The target div
 * @since 5.1.8.1
 */
export function singlePostHTML(response, target = null) {
	let data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: 1,
			debug: 'Single Posts Query',
		},
	};

	if (response.status === 200 && response.data && target) {
		// Create temp div to hold Ajax response data.
		const div = document.createElement('div');
		div.innerHTML = response.data;

		// Get target element.
		let html = div.querySelector(target);

		// Get any custom target elements.
		const customElements = window && window.almSinglePostsCustomElements;
		if (customElements) {
			html.appendChild(singlePostsGetCustomElements(div, customElements));
		}

		if (html) {
			data.html = html.innerHTML;
		} else {
			console.warn(`Ajax Load More: Unable to find ${target} element.`);
		}
	}
	return data;
}
export default singlePostHTML;

/**
 * Collect custom target elements and append them to the returned HTML.
 *
 * This function is useful to get elements from outside the ALM target and bring them into the returned HTML.
 * Useful for when CSS or JS may be loaded in the <head/> and we need it brought into the HTML for Single Posts.
 *
 * e.g. window.almSinglePostsCustomElements = ['#woocommerce-inline-inline-css', '#wc-block-style-css'];
 *
 * @param {object} content The HTML element.
 * @param {array|string} customElements The elements to search for in content.
 * @return {object} HTML elements.
 */
function singlePostsGetCustomElements(content = '', customElements = false) {
	// Create container element to hold elements.
	const container = document.createElement('div');
	container.classList.add('alm-custom-elements');

	// Exit if empty.
	if (!content || !customElements) {
		return container;
	}

	// Convert customElements to an Array.
	customElements = !Array.isArray(customElements) ? [customElements] : customElements;

	// Loop Array to extract elements and append to container.
	for (let i = 0; i < customElements.length; i++) {
		let element = content.querySelector(customElements[i]);
		if (element) {
			container.appendChild(element);
		}
	}

	return container;
}
