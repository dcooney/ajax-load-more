import { almFadeIn } from './fade';
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
	const { listing: container, last_loaded, speed } = alm;

	return new Promise((resolve) => {
		const selector = alm.masonry.selector;
		const animation = alm.masonry.animation;
		const horizontalOrder = alm?.masonry?.horizontalorder === 'true' ? true : false;
		const masonry_init = alm.masonry.init;
		let columnWidth = alm.masonry.columnwidth;

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

		if (!filtering) {
			// First Run.
			if (masonry_init && init) {
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
					const alm_masonry_vars = window?.alm_masonry_vars;
					if (alm_masonry_vars) {
						Object.keys(alm_masonry_vars).forEach(function (key) {
							// Loop object	to create key:prop
							defaults[key] = alm_masonry_vars[key];
						});
					}

					// Init Masonry, delay to allow time for items to be added to the page.
					setTimeout(function () {
						alm.msnry = new Masonry(container, defaults);
						almFadeIn(container.parentNode, 25);
						resolve(true);
					}, 50);
				});
			} else {
				// Standard / Append content.
				// eslint-disable-next-line no-lonely-if
				if (last_loaded) {
					// ImagesLoaded & appended.
					imagesLoaded(container, function () {
						alm.msnry.appended(last_loaded);
						resolve(true);
					});
				}
			}
		} else {
			// Reset instance.
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
		alm.images_loaded = true;
	} else {
		console.warn('Ajax Load More: Unable to locate Masonry configuration settings.');
	}

	return alm;
}
