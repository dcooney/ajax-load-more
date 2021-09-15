import axios from 'axios';
import dispatchScrollEvent from '../helpers/dispatchScrollEvent';
import { setButtonAtts } from '../modules/getButtonURL';
import { lazyImages } from '../modules/lazyImages';
import loadItems from '../modules/loadItems';
import { createLoadPreviousButton } from '../modules/loadPrevious';

/**
 * Set up the instance of ALM WooCommerce
 *
 * @param {object} alm
 * @since 5.3.0
 */
export function wooInit(alm) {
	if (!alm || !alm.addons.woocommerce) {
		return false;
	}

	alm.button.dataset.page = alm.addons.woocommerce_settings.paged + 1; // Page

	// URL
	let nextPage = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged];
	if (nextPage) {
		alm.button.dataset.url = nextPage;
	} else {
		alm.button.dataset.url = '';
	}

	// Set up URL and class parameters on first item in product listing
	let container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`
	if (container) {
		const count = getContainerCount(alm.addons.woocommerce_settings.container);
		const currentPage = alm.addons.woocommerce_settings.paged;

		if (count > 1) {
			// Display warning if multiple containers were found.
			console.warn(
				'ALM WooCommerce: Multiple containers with the same classname or ID found. The WooCommerce add-on requires a single container to be defined. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/'
			);
		}

		container.setAttribute('aria-live', 'polite');
		container.setAttribute('aria-atomic', 'true');

		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		let products = container.querySelector(alm.addons.woocommerce_settings.products); // Get first `.product` item
		if (products) {
			products.classList.add('alm-woocommerce');
			products.dataset.url = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged - 1];
			products.dataset.page = alm.page;
			products.dataset.pageTitle = document.title;
		} else {
			console.warn(
				'ALM WooCommerce: Unable to locate products. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_products'
			);
		}

		// Paged URL: Create previous button.
		if (currentPage > 1) {
			// almWooCommerceResultsTextInit(alm);

			if (alm.addons.woocommerce_settings.settings.previous_products) {
				const prevURL = alm.addons.woocommerce_settings.paged_urls[currentPage - 2];
				const label = alm.addons.woocommerce_settings.settings.previous_products;
				createLoadPreviousButton(alm, container, currentPage - 1, prevURL, label);
			}
		}
	} else {
		console.warn(
			'ALM WooCommerce: Unable to locate container element. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_container'
		);
	}
}

/**
 * Core ALM WooCommerce product loader
 *
 * @param {HTMLElement} content
 * @param {object} alm
 * @param {String} pageTitle
 * @since 5.3.0
 */
export function woocommerce(content, alm, pageTitle = document.title) {
	if (!content || !alm) {
		return false;
	}

	return new Promise((resolve) => {
		const container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`
		let products = content.querySelectorAll(alm.addons.woocommerce_settings.products); // Get all `.products`
		const page = alm.rel === 'prev' ? alm.pagePrev - 1 : alm.page;
		const url = alm.addons.woocommerce_settings.paged_urls[page];

		if (container && products && url) {
			// Convert NodeList to Array.
			products = Array.prototype.slice.call(products);

			// Trigger almWooCommerceLoaded callback.
			if (typeof almWooCommerceLoaded === 'function') {
				window.almWooCommerceLoaded(products);
			}

			// Load the Products
			(async function () {
				await loadItems(container, products, alm, pageTitle, url, 'alm-woocommerce');
				resolve(true);
			})().catch((e) => {
				console.log(e, 'There was an error with WooCommerce');
			});
		}
	});
}

/**
 * Handle WooCommerce loaded functionality and dispatch actions.
 *
 * @param {object} alm
 * @since 5.5.0
 */
export function woocommerceLoaded(alm) {
	let nextPageNum = alm.page + 2;
	let nextPage = alm.addons.woocommerce_settings.paged_urls[nextPageNum - 1]; // Get URL.

	// Set button data attributes.
	if (alm.rel === 'prev' && alm.buttonPrev) {
		let prevPageNum = alm.pagePrev - 1;
		let prevPage = alm.addons.woocommerce_settings.paged_urls[alm.pagePrev - 2];
		setButtonAtts(alm.buttonPrev, prevPageNum, prevPage);
		dispatchScrollEvent(true);
	} else {
		setButtonAtts(alm.button, nextPageNum, nextPage);
	}

	// Lazy load images if necessary.
	lazyImages(alm);

	// Trigger almComplete.
	if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
		window.almComplete(alm);
	}

	// End transitions.
	alm.AjaxLoadMore.transitionEnd();

	// ALM Done.
	if (alm.rel === 'prev' && alm.pagePrev <= 1) {
		alm.AjaxLoadMore.triggerDonePrev();
	}
	if (alm.rel === 'next' && nextPageNum > parseInt(alm.addons.woocommerce_settings.pages)) {
		alm.AjaxLoadMore.triggerDone();
	}
}

/**
 * Reset a WooCommerce Instance by hitting the updated site URL.
 *
 * @since 5.3.8
 */
export function wooReset() {
	return new Promise((resolve) => {
		let url = window.location;
		axios
			.get(url)
			.then((response) => {
				if (response.status === 200 && response.data) {
					let div = document.createElement('div');
					div.innerHTML = response.data; // Add data to div

					let alm = div.querySelector('.ajax-load-more-wrap .alm-listing[data-woo="true"]'); // Get ALM instance
					let settings = alm ? alm.dataset.wooSettings : ''; // Get settings data
					resolve(settings);
				} else {
					resolve(false);
				}
			})
			.catch(function (error) {
				resolve(false);
			});
	});
}

/**
 * Get the content, title and results text from the Ajax response
 *
 * @param {object} alm The Ajax Load More object.
 * @since 5.3.0
 */
export function wooGetContent(response, alm) {
	let data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: alm.localize.total_posts,
			debug: false,
		},
	};
	if (response.status === 200 && response.data) {
		let div = document.createElement('div');
		div.innerHTML = response.data;

		// Get Page Title
		let title = div.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Products HTML
		let products = div.querySelector(alm.addons.woocommerce_settings.container);
		data.html = products ? products.innerHTML : '';

		// Results Text
		almWooCommerceResultsText(div, alm);
	}

	return data;
}

/**
 *  Set results text for WooCommerce Add-on.
 *
 *  @param {HTMLElement} target
 *  @param {Object} alm The Ajax Load More object.
 *  @since 5.3
 */
function almWooCommerceResultsText(target = '', alm) {
	if (target && alm && alm.addons.woocommerce_settings.results_text) {
		let currentResults = target.querySelector(alm.addons.woocommerce_settings.results);

		if (alm.addons.woocommerce_settings.results_text) {
			//let link = alm.addons.woocommerce_settings.settings.previous_page_link;
			//let label = alm.addons.woocommerce_settings.settings.previous_page_label;
			//let sep = alm.addons.woocommerce_settings.settings.previous_page_sep;
			alm.addons.woocommerce_settings.results_text.forEach((element) => {
				element.innerHTML = currentResults.innerHTML;
				// if (link && label) {
				// 	element.innerHTML = returnButton(currentResults, link, label, sep);
				// } else {
				// 	element.innerHTML = currentResults.innerHTML;
				// }
			});
		}
	}
}

/**
 * Initiate Results text.
 *
 * @param {Object} alm The Ajax Load More object.
 * @since 5.3
 * @deprecated 5.5
 */
function almWooCommerceResultsTextInit(alm) {
	if (alm && alm.addons.woocommerce_settings.results_text) {
		let results = document.querySelectorAll(alm.addons.woocommerce_settings.results);
		if (results.length < 1) {
			return false;
		}
		let link = alm.addons.woocommerce_settings.settings.previous_page_link;
		let label = alm.addons.woocommerce_settings.settings.previous_page_label;
		let sep = alm.addons.woocommerce_settings.settings.previous_page_sep;
		// Loop all result text elements
		results.forEach((element) => {
			if (link && label) {
				element.innerHTML = returnButton(element, link, label, sep);
			}
		});
	}
}

/**
 * Create button text for returning to the first page
 *
 * @param {*} text
 * @param {*} link
 * @param {*} label
 * @param {*} seperator
 */
function returnButton(text, link, label, seperator) {
	let button = ` ${seperator} <a href="${link}">${label}</a>`;
	return text.innerHTML + button;
}

/**
 * Get total count of WooCommerce containers.
 *
 * @param {string} container The container class.
 * @return {Number} The total umber of containers.
 */
function getContainerCount(container) {
	if (!container) {
		return 0;
	}
	const containers = document.querySelectorAll(container); // Get all containers.
	if (containers) {
		return containers.length;
	} else {
		return 0;
	}
}
