import { setButtonAtts } from '../functions/getButtonURL';
import { lazyImages } from '../modules/lazyImages';
import loadItems from '../modules/loadItems';
import { createCache } from './cache';

/**
 * Create add-on params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
export function elementorCreateParams(alm) {
	const { listing } = alm;

	alm.addons.elementor = listing.dataset.elementor === 'posts' && listing.dataset.elementorSettings;
	if (alm.addons.elementor) {
		// Get Settings
		alm.addons.elementor_type = 'posts';
		alm.addons.elementor_settings = JSON.parse(alm.listing.dataset.elementorSettings);

		// Parse Container Settings
		alm.addons.elementor_target = alm.addons.elementor_settings.target;
		alm.addons.elementor_element = alm.addons.elementor_settings.target
			? document.querySelector(`.elementor-element ${alm.addons.elementor_settings.target}`)
			: '';
		alm.addons.elementor_widget = elementorGetWidgetType(alm.addons.elementor_element);

		// Masonry
		alm = setElementorClasses(alm, alm.addons.elementor_widget);

		// Pagination Element
		alm.addons.elementor_controls = alm.addons.elementor_settings.controls;
		alm.addons.elementor_controls = alm.addons.elementor_controls === 'true' ? true : false;
		alm.addons.elementor_scrolltop = parseInt(alm.addons.elementor_settings.scrolltop);

		// Get next page URL.
		alm.addons.elementor_next_page = elementorGetNextUrl(alm, alm.addons.elementor_element);

		// Get the max pages.
		alm.addons.elementor_max_pages = alm.addons.elementor_element.querySelector('.e-load-more-anchor');
		alm.addons.elementor_max_pages = alm.addons.elementor_max_pages ? parseInt(alm.addons.elementor_max_pages.dataset.maxPage) : 999;

		alm.addons.elementor_paged = alm.addons.elementor_settings.paged ? parseInt(alm.addons.elementor_settings.paged) : 1;
		alm.page = parseInt(alm.page) + alm.addons.elementor_paged;

		// Masonry
		alm = parseMasonryConfig(alm);

		if (!alm.addons.elementor_element) {
			console.warn("Ajax Load More: Unable to locate Elementor Widget. Are you sure you've set up your target parameter correctly?");
		}
		if (!alm.addons.elementor_next_page) {
			console.warn(
				'Ajax Load More: Unable to locate Elementor pagination. There are either no results or Ajax Load More is unable to locate the pagination widget?'
			);
		}
	}
	return alm;
}

/**
 * Set up the instance on Elementor
 *
 * @param {Object} alm
 * @since 5.3.0
 */
export function elementorInit(alm) {
	if (!alm.addons.elementor || !alm.addons.elementor_type || !alm.addons.elementor_type === 'posts') {
		return false;
	}
	const target = alm.addons.elementor_element;

	if (target) {
		// Set button data attributes
		alm.button.dataset.page = alm.addons.elementor_paged;

		// Set button URL
		const nextPage = alm.addons.elementor_next_page;
		alm.button.dataset.url = nextPage ? nextPage : '';

		// Set a11y attributes
		target.setAttribute('aria-live', 'polite');
		target.setAttribute('aria-atomic', 'true');
		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		// Set data atts on 1st grid item
		const item = target.querySelector(`.${alm.addons.elementor_item_class}`); // Get first `.product` item
		if (item) {
			item.classList.add('alm-elementor');
			item.dataset.url = window.location;
			item.dataset.page = alm.addons.elementor_paged;
			item.dataset.pageTitle = document.title;
		}

		// Masonry Window Resize. Delay for masonry to be added via Elementor.
		if (alm.addons.elementor_masonry) {
			let resizeTimeout;
			setTimeout(function () {
				window.addEventListener('resize', function () {
					clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(function () {
						positionMasonryItems(alm, `.${alm.addons.elementor_container_class}`, `.${alm.addons.elementor_item_class}`);
					}, 100);
				});
			}, 250);
		}
	}
}

/**
 * Get the content, title and results text from the Ajax response.
 *
 * @param {Object} alm        The alm object.
 * @param {string} url        The request URL.
 * @param {Object} response   Query response.
 * @param {string} cache_slug The cache slug.
 * @return {Object}           Results data.
 * @since 5.4.0
 */
export function elementorGetContent(alm, url, response, cache_slug) {
	// Default data object.
	const data = {
		html: '',
		meta: {
			postcount: 0,
			totalposts: 0,
		},
	};

	// Successful response.
	if (response.status === 200 && response.data) {
		const { addons, page, button } = alm;

		// Create temp div to hold response data.
		const content = document.createElement('div');
		content.innerHTML = response.data;

		// Set button URL.
		const nextURL = elementorGetNextUrl(alm, content);
		if (nextURL) {
			setButtonAtts(button, page + 1, nextURL);
		} else {
			// Disable button if no next page.
			alm.AjaxLoadMore.triggerDone();
		}

		// Get Page Title
		const title = content.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Elementor Items container.
		const container = content.querySelector(`${addons.elementor_target} .${addons.elementor_container_class}`);
		if (!container) {
			console.warn(`Ajax Load More Elementor: Unable to find Elementor container element.`);
			return data;
		}

		// Get the first item and append data attributes.
		const item = container ? container.querySelector(`.${addons.elementor_item_class}`) : null;
		if (item) {
			item.classList.add('alm-elementor');
			item.dataset.url = url;
			item.dataset.page = addons.elementor_paged;
			item.dataset.pageTitle = title;
		}

		// Count the number of returned items.
		const items = container.querySelectorAll(`.${addons.elementor_item_class}`);
		if (items) {
			// Set the html to the elementor container data.
			data.html = container ? container.innerHTML : '';
			data.meta.postcount = items.length;
			data.meta.totalposts = items.length;

			// Create cache file.
			createCache(alm, data, cache_slug);
		}
	}
	return data;
}

/**
 * Core ALM Elementor loader.
 *
 * @param {HTMLElement} content The HTML data.
 * @param {Object}      alm     The alm object.
 * @since 5.3.0
 */
export function elementor(content, alm) {
	if (!content || !alm) {
		alm.AjaxLoadMore.triggerDone();
		return false;
	}

	return new Promise((resolve) => {
		const { addons } = alm;
		const container = alm.addons.elementor_element.querySelector(`.${addons.elementor_container_class}`); // Get post container
		const items = content.querySelectorAll(`.${addons.elementor_item_class}`); // Get all items in container

		if (container && items) {
			const ElementorItems = Array.prototype.slice.call(items); // Convert NodeList to Array

			// Trigger almElementorLoaded callback.
			if (typeof almElementorLoaded === 'function') {
				window.almElementorLoaded(ElementorItems);
			}

			(async function () {
				// Load the items.
				await loadItems(container, ElementorItems, alm);
				if (addons.elementor_masonry) {
					setTimeout(function () {
						positionMasonryItems(alm, `.${addons.elementor_container_class}`, `.${addons.elementor_item_class}`);
					}, 125);
				}

				resolve(true);
			})().catch((e) => {
				console.warn(e, 'There was an error with Elementor'); // eslint-disable-line no-console
			});
		} else {
			resolve(false);
		}
	});
}

/**
 * Elementor loaded and dispatch actions.
 *
 * @param {Object} alm The alm object.
 * @since 5.5.0
 */
export function elementorLoaded(alm) {
	const { page, AjaxLoadMore, addons } = alm;
	const nextPage = page + 1;

	const max_pages = addons.elementor_max_pages;

	// Lazy load images if necessary.
	lazyImages(alm);

	// Trigger almComplete.
	if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
		window.almComplete(alm);
	}

	// End transitions.
	AjaxLoadMore.transitionEnd();

	// ALM Done.
	if (nextPage >= max_pages) {
		AjaxLoadMore.triggerDone();
	}
}

/**
 * Set the required classnames for parsing data and injecting content into the Elementor listing
 *
 * @param {Object} alm  The alm object.
 * @param {string} type The Elementor type.
 * @return {Object}     The modified object.
 */
function setElementorClasses(alm, type = 'posts') {
	// Get the items based on the Elementor type.
	alm.addons.elementor_container_class = alm.addons.elementor_settings.container_class; // Container class

	switch (type) {
		case 'woocommerce':
			alm.addons.elementor_item_class = alm.addons.elementor_settings.woo_item_class; // item class.
			alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.woo_pagination_class}`; // Pagination class.
			break;
		case 'loop-grid':
			alm.addons.elementor_item_class = alm.addons.elementor_settings.loop_grid_item_class; // item class.
			alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.loop_grid_pagination_class}`; // Pagination class.
			break;
		default:
			alm.addons.elementor_item_class = alm.addons.elementor_settings.posts_item_class; // item class.
			alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.posts_pagination_class}`; // Pagination class.
			break;
	}

	return alm;
}

/**
 * Parse Masonry Settings from Elementor Data atts
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
function parseMasonryConfig(alm) {
	const { addons } = alm;

	if (!addons.elementor_element) {
		return alm; // Exit if not found.
	}

	const target = addons.elementor_element;
	const settings = target?.dataset?.settings ? JSON.parse(target.dataset.settings) : '';
	if (!settings) {
		return alm; // Exit if not found.
	}

	addons.elementor_masonry = settings.hasOwnProperty('cards_masonry') || settings.hasOwnProperty('classic_masonry') || settings.hasOwnProperty('masonry');

	if (addons.elementor_masonry) {
		addons.elementor_masonry_columns = parseInt(settings?.cards_columns) || parseInt(settings?.classic_columns) || parseInt(settings?.columns);
		addons.elementor_masonry_columns_mobile =
			parseInt(settings?.cards_columns_mobile) || parseInt(settings?.classic_columns_mobile) || parseInt(settings?.columns_mobile);
		addons.elementor_masonry_columns_tablet =
			parseInt(settings?.cards_columns_tablet) || parseInt(settings?.classic_columns_tablet) || parseInt(settings?.columns_tablet);
		addons.elementor_masonry_gap = parseInt(settings?.cards_row_gap?.size) || parseInt(settings?.row_gap?.size);
	}

	return alm;
}

/**
 * Position Elementor Masonry Items
 *
 * @param {Object} alm             The alm object.
 * @param {string} container_class The container classname.
 * @param {string} item_class      The item classname.
 */
function positionMasonryItems(alm, container_class, item_class) {
	const heights = [];

	// Get Elementor Settings
	const columnsCount = alm.addons.elementor_masonry_columns;
	const columnsCountTablet = alm.addons.elementor_masonry_columns_tablet;
	const columnsCountMobile = alm.addons.elementor_masonry_columns_mobile;
	const verticalSpaceBetween = alm.addons.elementor_masonry_gap;
	let columns = columnsCount;

	// Get Elementor Breakpoints
	const breakpoints = window.elementorFrontendConfig && window.elementorFrontendConfig.breakpoints ? window.elementorFrontendConfig.breakpoints : 0;
	const windowW = window.innerWidth;

	// Set Columns
	if (windowW > breakpoints.lg) {
		columns = columnsCount;
	} else if (windowW > breakpoints.md) {
		columns = columnsCountTablet;
	} else {
		columns = columnsCountMobile;
	}

	// Get Containers
	const container = document.querySelector(container_class);
	if (!container) {
		return false;
	}
	const items = container.querySelectorAll(item_class);
	if (!items) {
		return false;
	}

	// Loop items
	items.forEach((item, index) => {
		const row = Math.floor(index / columns);
		const itemHeight = item.getBoundingClientRect().height + verticalSpaceBetween;

		if (row) {
			const itemPosition = jQuery(item).position();
			const indexAtRow = index % columns;
			let pullHeight = Math.round(itemPosition.top) - heights[indexAtRow];

			pullHeight *= -1;
			item.style.marginTop = `${Math.round(pullHeight)}px`;
			heights[indexAtRow] += itemHeight;
		} else {
			heights.push(itemHeight);
		}
	});
}

/**
 * Determine the type of elementor widget (woocommerce || posts)
 *
 * @param {HTMLElement} target The target element.
 * @return {string}            The Elementor type.
 */
function elementorGetWidgetType(target) {
	if (!target) {
		return false;
	}

	// Get Elementor type based on container class.
	if (target.classList.contains('elementor-wc-products')) {
		// WooCommerce.
		return 'woocommerce';
	} else if (target.classList.contains('elementor-widget-loop-grid')) {
		// Loop Grid.
		return 'loop-grid';
	}
	return 'posts';
}

/**
 * Get the pagination container for the Elementor pagination.
 *
 * @param {Object}  alm     The alm object.
 * @param {Element} content The HTML content to search.
 * @return {HTMLElement}    The pagination element.
 */
export function elementorGetNextUrl(alm, content) {
	const { addons = {} } = alm;

	// Locate the pagination container.
	const element = content?.querySelector(addons?.elementor_pagination_class) || content?.querySelector(`.${addons?.elementor_settings?.pagination_class}`);

	// Get the next page URL from the pagination element.
	const nextpage = element?.querySelector('a.next')?.href;

	// Return the next page URL.
	return nextpage ? nextpage : false;
}
