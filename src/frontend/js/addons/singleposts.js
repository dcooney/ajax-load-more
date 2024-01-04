import { createCache } from './cache';

/**
 * Create the HTML for loading Single Posts.
 *
 * @param {Object} alm        The alm object.
 * @param {Object} response   Query response.
 * @param {string} cache_slug The cache slug.
 * @return {Object}           Results data.
 * @since 5.1.8.1
 */
export function singlePostHTML(alm, response, cache_slug) {
	const data = {
		html: '',
		meta: {
			postcount: 0,
			totalposts: 0,
		},
	};

	// Get target element.
	const { single_post_target, single_post_id } = alm.addons;

	if (response.status === 200 && response.data && single_post_target) {
		// Create temp div to hold response data.
		const div = document.createElement('div');
		div.innerHTML = response.data;

		// Get target element.
		const html = div.querySelector(single_post_target);

		if (!html) {
			console.warn(`Ajax Load More: Unable to find ${single_post_target} element.`);
			return data;
		}

		// Get any custom target elements.
		if (window?.almSinglePostsCustomElements) {
			const customElements = singlePostsGetCustomElements(div, window?.almSinglePostsCustomElements, single_post_id);
			if (customElements) {
				// Get first element in HTML.
				const target = html.querySelector('article, section, div');
				if (target) {
					target.appendChild(customElements);
				}
			}
		}

		data.html = html.innerHTML;
		data.meta = {
			postcount: 1,
			totalposts: 1,
		};

		// Create cache file.
		createCache(alm, data, cache_slug);
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
 * @param {HTMLElement} content        The HTML element.
 * @param {Array}       customElements The elements to search for in content.
 * @param {string}		id             The Post ID.
 * @return {HTMLElement}               The HTML elements.
 */
function singlePostsGetCustomElements(content = '', customElements = [], id) {
	if (!content || !customElements) {
		return container; // Exit if empty.
	}

	// Create container element if if doesn't exist.
	const container = document.createElement('div');
	container.classList.add('alm-custom-elements');
	container.dataset.id = id;

	// Convert customElements to an Array.
	customElements = !Array.isArray(customElements) ? [customElements] : customElements;

	// Loop Array to extract elements and append to container.
	for (let i = 0; i < customElements.length; i++) {
		const element = content.querySelector(customElements[i]);
		if (element) {
			element.classList.add('alm-custom-element');
			container.appendChild(element);
		}
	}

	return container;
}

/**
 * Create data attributes for a Single Post item.
 *
 * @param {Object} alm     The ALM object.
 * @param {Array} elements The elements HTML nodes as an array.
 * @return {Array}         Modified HTML element.
 */
export function addSinglePostsAttributes(alm, elements) {
	// Get first element in NodeList.
	const element = elements?.length ? elements[0] : false;
	if (!element) {
		return elements;
	}

	const { page, addons } = alm;
	element.setAttribute('class', `alm-single-post post-${addons.single_post_id}`);
	element.dataset.id = addons.single_post_id;
	element.dataset.url = addons.single_post_permalink;
	element.dataset.page = addons.single_post_target ? parseInt(page) + 1 : page;
	element.dataset.title = addons.single_post_title;
	return elements;
}
