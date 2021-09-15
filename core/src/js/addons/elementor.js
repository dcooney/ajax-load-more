import { setButtonAtts } from '../modules/getButtonURL';
import { lazyImages } from '../modules/lazyImages';
import loadItems from '../modules/loadItems';

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
		let nextPage = alm.addons.elementor_next_page_url;
		alm.button.dataset.url = nextPage ? nextPage : '';

		// Set a11y attributes
		target.setAttribute('aria-live', 'polite');
		target.setAttribute('aria-atomic', 'true');

		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		// Set data atts on 1st grid item
		let item = target.querySelector(`.${alm.addons.elementor_item_class}`); // Get first `.product` item
		if (item) {
			item.classList.add('alm-elementor');
			item.dataset.url = window.location;
			item.dataset.page = alm.addons.elementor_paged;
			item.dataset.pageTitle = document.title;
		}

		if (alm.addons.elementor_paged > 1) {
			// maybe soon
			//almElementorResultsTextInit(alm);
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
 * Core ALM Elementor loader.
 *
 * @param {HTMLElement} content
 * @param {object} alm
 * @param {string} pageTitle
 * @since 5.3.0
 */

export function elementor(content, alm, pageTitle = document.title) {
	if (!content || !alm) {
		return false;
	}

	return new Promise((resolve) => {
		let container = alm.addons.elementor_element.querySelector(`.${alm.addons.elementor_container_class}`); // Get post container
		let items = content.querySelectorAll(`.${alm.addons.elementor_item_class}`); // Get all items in container
		let url = alm.addons.elementor_current_url; // Current Page URL

		if (container && items && url) {
			// Convert NodeList to Array
			items = Array.prototype.slice.call(items);

			// Trigger almElementorLoaded callback.
			if (typeof almElementorLoaded === 'function') {
				window.almElementorLoaded(items);
			}

			// Load the items
			(async function () {
				await loadItems(container, items, alm, pageTitle, url, 'alm-elementor');
				if (alm.addons.elementor_masonry) {
					setTimeout(function () {
						positionMasonryItems(alm, `.${alm.addons.elementor_container_class}`, `.${alm.addons.elementor_item_class}`);
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
 * Handle Elementor loaded functionality and dispatch actions.
 *
 * @param {object} alm
 * @since 5.5.0
 */
export function elementorLoaded(alm) {
	let nextPageNum = alm.page + 1;
	let nextPage = alm.addons.elementor_next_page_url; // Get URL.

	// Set button data attributes.
	setButtonAtts(alm.button, nextPageNum, nextPage);

	// Lazy load images if necessary.
	lazyImages(alm);

	// Trigger almComplete.
	if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
		window.almComplete(alm);
	}

	// End transitions.
	alm.AjaxLoadMore.transitionEnd();

	// ALM Done
	if (!nextPage) {
		alm.AjaxLoadMore.triggerDone();
	}
}

/**
 * Get the content, title and results text from the Ajax response.
 *
 * @param {*} response
 * @param {object} alm
 * @since 5.4.0
 */
export function elementorGetContent(response, alm) {
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

		// Get Elementor Items HTML
		let items = div.querySelector(`${alm.addons.elementor_target} .${alm.addons.elementor_container_class}`);
		data.html = items ? items.innerHTML : '';

		// Set Page URL Params
		alm.addons.elementor_current_url = alm.addons.elementor_next_page_url; // Set current to previous page URL
		alm.addons.elementor_next_page_url = elementorGetNextPage(div, alm.addons.elementor_pagination_class);

		// Results Text
		//almElementorResultsText(div, alm);
	}

	return data;
}

/**
 * Create Elementor Params for ALM.
 *
 * @param Object alm
 * @return alm
 */
export function elementorCreateParams(alm) {
	// Get Settings
	alm.addons.elementor_type = 'posts';
	alm.addons.elementor_settings = JSON.parse(alm.listing.dataset.elementorSettings);

	// Parse Container Settings
	alm.addons.elementor_target = alm.addons.elementor_settings.target;
	alm.addons.elementor_element = alm.addons.elementor_settings.target
		? document.querySelector(`.elementor-widget-wrap ${alm.addons.elementor_settings.target}`)
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

	// Set Page & URL params
	alm.addons.elementor_current_url = window.location.href;
	alm.addons.elementor_next_page_url = elementorGetNextUrl(alm.addons.elementor_pagination);
	alm.addons.elementor_paged = alm.addons.elementor_settings.paged ? parseInt(alm.addons.elementor_settings.paged) : 1;
	alm.page = parseInt(alm.page) + alm.addons.elementor_paged;

	// Masonry
	alm = parseMasonryConfig(alm);

	if (!alm.addons.elementor_element) {
		console.warn("Ajax Load More: Unable to locate Elementor Widget. Are you sure you've set up your target parameter correctly?");
	}
	if (!alm.addons.elementor_pagination) {
		console.warn(
			'Ajax Load More: Unable to locate Elementor pagination. There are either no results or p Ajax Load More is unable to locate the pagination widget?'
		);
	}
	return alm;
}

/**
 * Set the required classnames for parsing data and injecting content into the Elementor listing
 *
 * @param {*} alm
 * @param {*} type
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
 * @param {*} alm
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
 * @param {*} alm
 * @param {*} container_class
 * @param {*} item_class
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
 * @param {*} target
 * @param {*} classname
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
 * @param {HTMLElement} element
 * @param {String} classname
 * @return {string} href
 */
function elementorGetNextPage(element, classname) {
	const pagination = element.querySelector(classname);
	const href = pagination ? elementorGetNextUrl(pagination) : '';

	return href;
}

/**
 * Get the URL of the next page to load from the a.next href
 *
 * @param {HTMLElement} element
 * @return {String} url
 */
function elementorGetNextUrl(element) {
	if (!element) {
		return '';
	}
	return element.querySelector('a.next') ? element.querySelector('a.next').href : '';
}
