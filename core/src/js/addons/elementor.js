import { setButtonAtts } from '../helpers/getButtonURL';
import { lazyImages } from '../modules/lazyImages';
import loadItems from '../modules/loadItems';
import { createCache } from './cache';

/**
 * Set up the instance on Elementor
 *
 * @param {object} alm
 * @since 5.3.0
 */
export function elementorInit(alm) {
	if (!alm.addons.elementor || !alm.addons.elementor_type || !alm.addons.elementor_type === 'posts') {
		return false;
	}
	let target = alm.addons.elementor_element;

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
 * @param {object} alm        The alm object.
 * @param {string} url 	      The request URL.
 * @param {object} response   Query response.
 * @param {string} cache_slug The cache slug.
 * @return {object}           Results data.
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
		const { addons } = alm;

		// Create temp div to hold response data.
		const div = document.createElement('div');
		div.innerHTML = response.data;

		// Get Page Title
		const title = div.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Elementor Items container.
		const container = div.querySelector(`${addons.elementor_target} .${addons.elementor_container_class}`);
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
 * @param {object}      alm     The alm object.
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
				console.log(e, 'There was an error with Elementor');
			});
		} else {
			resolve(false);
		}
	});
}

/**
 * Elementor loaded and dispatch actions.
 *
 * @param {object} alm The alm object.
 * @since 5.5.0
 */
export function elementorLoaded(alm) {
	const { trailing_slash, is_front_page } = alm_localize;
	const { page, button, canonical_url, AjaxLoadMore, addons } = alm;
	const nextPage = page + 1;

	const sep = is_front_page === 'true' ? 'page/' : trailing_slash === 'true' ? '' : '/';
	const slash = trailing_slash === 'true' ? '/' : '';
	const url = `${canonical_url + sep}${nextPage + 1}${slash}`;

	const max_pages = addons.elementor_max_pages;

	// Set button data attributes.
	setButtonAtts(button, nextPage, url);

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
 * Create Elementor params for ALM.
 *
 * @param  {object} alm The alm object.
 * @return {object}     The modified object.
 */
export function elementorCreateParams(alm) {
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
	alm.addons.elementor_pagination =
		alm.addons.elementor_element.querySelector(alm.addons.elementor_pagination_class) ||
		alm.addons.elementor_element.querySelector(`.${alm.addons.elementor_settings.pagination_class}`);
	alm.addons.elementor_pagination = alm.addons.elementor_pagination ? alm.addons.elementor_pagination : false;

	alm.addons.elementor_controls = alm.addons.elementor_settings.controls;
	alm.addons.elementor_controls = alm.addons.elementor_controls === 'true' ? true : false;
	alm.addons.elementor_scrolltop = parseInt(alm.addons.elementor_settings.scrolltop);

	// Get next page URL.
	alm.addons.elementor_next_page = elementorGetNextUrl(alm.addons.elementor_pagination);

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
	if (!alm.addons.elementor_pagination) {
		console.warn(
			'Ajax Load More: Unable to locate Elementor pagination. There are either no results or Ajax Load More is unable to locate the pagination widget?'
		);
	}
	return alm;
}

/**
 * Set the required classnames for parsing data and injecting content into the Elementor listing
 *
 * @param  {object} alm  The alm object.
 * @param  {string} type The Elementor type.
 * @return {object}      The modified object.
 */
function setElementorClasses(alm, type = 'posts') {
	// Container Class
	alm.addons.elementor_container_class =
		type === 'woocommerce' ? alm.addons.elementor_settings.woo_container_class : alm.addons.elementor_settings.posts_container_class;

	// Item Class
	alm.addons.elementor_item_class = type === 'woocommerce' ? alm.addons.elementor_settings.woo_item_class : alm.addons.elementor_settings.posts_item_class;

	// Pagination Class
	alm.addons.elementor_pagination_class =
		type === 'woocommerce' ? `.${alm.addons.elementor_settings.woo_pagination_class}` : `.${alm.addons.elementor_settings.posts_pagination_class}`;

	return alm;
}

/**
 * Parse Masonry Settings from Elementor Data atts
 *
 * @param {object} alm The alm object.
 * @return {object}    The modified object.
 */
function parseMasonryConfig(alm) {
	if (!alm.addons.elementor_element) {
		return alm; // Exit if not found.
	}

	const target = alm.addons.elementor_element;

	const settings = target.dataset.settings ? JSON.parse(target.dataset.settings) : '';
	if (!settings) {
		return alm; // Exit if not found.
	}

	alm.addons.elementor_masonry = settings.hasOwnProperty('cards_masonry') || settings.hasOwnProperty('classic_masonry');
	if (alm.addons.elementor_masonry) {
		alm.addons.elementor_masonry_columns = parseInt(settings.cards_columns) || parseInt(settings.classic_columns);
		alm.addons.elementor_masonry_columns_mobile = parseInt(settings.cards_columns_mobile) || parseInt(settings.classic_columns_mobile);
		alm.addons.elementor_masonry_columns_tablet = parseInt(settings.cards_columns_tablet) || parseInt(settings.classic_columns_tablet);
		alm.addons.elementor_masonry_gap = parseInt(settings.cards_row_gap.size);
	}

	return alm;
}

/**
 * Position Elementor Masonry Items
 *
 * @param {object} alm             The alm object.
 * @param {string} container_class The container classname.
 * @param {string} item_class      The item classname.
 */
function positionMasonryItems(alm, container_class, item_class) {
	let heights = [];

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
		let row = Math.floor(index / columns);
		let itemHeight = item.getBoundingClientRect().height + verticalSpaceBetween;

		if (row) {
			let itemPosition = jQuery(item).position();
			let indexAtRow = index % columns;
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
 * @param  {HTMLElement} target The target element.
 * @return {string}             The Elementor type.
 */
function elementorGetWidgetType(target) {
	if (!target) {
		return false;
	}
	// If container contains the woocommerce elementor class
	const type = target.classList.contains('elementor-wc-products') ? 'woocommerce' : 'posts';
	return type;
}

/**
 * Get the upcoming URL from the a.next link from the HTML
 *
 * @param  {HTMLElement} element   The target element
 * @param  {string}      classname The classname.
 * @return {HTMLElement | string}
 */
function elementorGetNextPage(element, classname) {
	const pagination = element.querySelector(classname);
	return pagination ? elementorGetNextUrl(pagination) : '';
}

/**
 * Get the URL of the next page to load from the a.next href
 *
 * @param {HTMLElement} element The target element
 * @return {HTMLElement | string}
 */
function elementorGetNextUrl(element) {
	if (!element) {
		return '';
	}
	return element.querySelector('a.next') ? element.querySelector('a.next').href : '';
}
