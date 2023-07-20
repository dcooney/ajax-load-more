import { almFadeIn } from './fade';
import almAppendChildren from '../helpers/almAppendChildren';
import almDomParser from '../helpers/almDomParser';
import srcsetPolyfill from '../helpers/srcsetPolyfill';
import stripEmptyNodes from '../helpers/stripEmptyNodes';
import { createMasonryFiltersPages, createMasonryFiltersPage } from '../addons/filters';
import { createMasonrySEOPages, createMasonrySEOPage } from '../addons/seo';
import setFocus from './setFocus';
const imagesLoaded = require('imagesloaded');

/**
 * Function to trigger built-in Ajax Load More Masonry.
 *
 * @param {Object}  alm       ALM object.
 * @param {boolean} init      Initial run true or false.
 * @param {boolean} filtering Is this a filtering event.
 * @since 3.1
 */
export function almMasonry(alm, init, filtering) {
	if (!alm.masonry) {
		console.warn('Ajax Load More: Unable to locate Masonry settings.');
	}

	return new Promise((resolve) => {
		const container = alm.listing;
		const html = alm.html;
		const selector = alm.masonry.selector;
		let columnWidth = alm.masonry.columnwidth;
		const animation = alm.masonry.animation;
		let horizontalOrder = alm.masonry.horizontalorder;
		const speed = alm.speed;
		const masonry_init = alm.masonry.init;

		const duration = (speed + 100) / 1000 + 's'; // Add 100 for some delay
		let hidden = 'scale(0.5)';
		let visible = 'scale(1)';

		if (animation === 'zoom-out') {
			hidden = 'translateY(-20px) scale(1.25)';
			visible = 'translateY(0) scale(1)';
		}

		if (animation === 'slide-up') {
			hidden = 'translateY(50px)';
			visible = 'translateY(0)';
		}

		if (animation === 'slide-down') {
			hidden = 'translateY(-50px)';
			visible = 'translateY(0)';
		}

		if (animation === 'none') {
			hidden = 'translateY(0)';
			visible = 'translateY(0)';
		}

		// columnWidth
		if (columnWidth) {
			if (!isNaN(columnWidth)) {
				columnWidth = parseInt(columnWidth); // Check if number.
			}
		} else {
			columnWidth = selector; // No columnWidth, use the selector
		}

		// horizontalOrder
		horizontalOrder = horizontalOrder === 'true' ? true : false;

		if (!filtering) {
			// First Run.
			if (masonry_init && init) {
				// Run srcSet polyfill.
				srcsetPolyfill(container, alm.ua);

				imagesLoaded(container, function () {
					const defaults = {
						itemSelector: selector,
						transitionDuration: duration,
						columnWidth: columnWidth, // eslint-disable-line
						horizontalOrder: horizontalOrder, // eslint-disable-line
						hiddenStyle: {
							transform: hidden,
							opacity: 0,
						},
						visibleStyle: {
							transform: visible,
							opacity: 1,
						},
					};

					// Get custom Masonry options (https://masonry.desandro.com/options.html).
					const alm_masonry_vars = window.alm_masonry_vars;
					if (alm_masonry_vars) {
						Object.keys(alm_masonry_vars).forEach(function (key) {
							// Loop object	to create key:prop
							defaults[key] = alm_masonry_vars[key];
						});
					}

					const data = container.querySelectorAll(selector);

					// Create Filters URL, if required.
					if (alm.addons.filters) {
						createMasonryFiltersPages(alm, Array.prototype.slice.call(data));
					}

					// Create SEO URL, if required.
					if (alm.addons.seo) {
						createMasonrySEOPages(alm, Array.prototype.slice.call(data));
					}

					// Init Masonry, delay to allow time for items to be added to the page.
					setTimeout(function () {
						alm.msnry = new Masonry(container, defaults);
						almFadeIn(container.parentNode, 125); // Fade In
						resolve(true);
					}, 1);
				});
			}

			// Standard / Append content.
			else {
				// Loop all items and create array of node elements
				const data = stripEmptyNodes(almDomParser(html, 'text/html'));

				if (data) {
					// Append elements listing.
					almAppendChildren(alm.listing, data, 'masonry');

					// Run srcSet polyfill.
					srcsetPolyfill(container, alm.ua);

					// imagesLoaded & append.
					imagesLoaded(container, function () {
						alm.msnry.appended(data);

						// Set Focus.
						setFocus(alm, data, data.length, false);

						// Create Filters URL, if required.
						if (alm.addons.filters) {
							createMasonryFiltersPage(alm, data[0]);
						}

						// Create SEO URL, if required.
						if (alm.addons.seo) {
							createMasonrySEOPage(alm, data[0]);
						}

						resolve(true);
					});
				}
			}
		} else {
			// Reset
			container.parentNode.style.opacity = 0;
			almMasonry(alm, true, false);
			resolve(true);
		}
	});
}

/**
 * Set up initial Masonry Configuration.
 *
 * @param {Object} alm ALM Object.
 * @return {Object}    Configuration object.
 */
export function almMasonryConfig(alm) {
	alm.masonry = {};
	alm.masonry.init = true;
	if (alm.msnry) {
		// destroy masonry if it currently exists.
		alm.msnry.destroy();
	} else {
		alm.msnry = '';
	}
	const masonry_config = JSON.parse(alm.listing.dataset.masonryConfig);
	if (masonry_config) {
		alm.masonry.selector = masonry_config.selector;
		alm.masonry.columnwidth = masonry_config.columnwidth;
		alm.masonry.animation = masonry_config.animation === '' ? 'standard' : masonry_config.animation;
		alm.masonry.horizontalorder = masonry_config.horizontalorder === '' ? 'true' : masonry_config.horizontalorder;
		alm.transition_container = false;
		alm.images_loaded = false;
	} else {
		console.warn('Ajax Load More: Unable to locate Masonry configuration settings.');
	}

	return alm;
}
