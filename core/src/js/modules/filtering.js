import almFadeIn from './fadeIn';
import almFadeOut from './fadeOut';
import { clearTOC } from './tableofcontents';

/**
 * almFilter(type, speed, data)
 * Filter Ajax Load More
 *
 * @param {*} transition string;
 * @param {*} speed number;
 * @param {*} data obj;
 * @param {*} type string;
 * @since 2.6.1
 */

let almFilter = function (transition, speed, data, type = 'filter') {
	if (data.target) {
		// if a target has been specified
		let target = document.querySelectorAll(
			'.ajax-load-more-wrap[data-id="' + data.target + '"]'
		);
		target.forEach(function (element) {
			almFilterTransition(transition, speed, data, element, type);
		});
	} else {
		// Target not specified
		let alm = document.querySelectorAll('.ajax-load-more-wrap');
		alm.forEach(function (element) {
			almFilterTransition(transition, speed, data, element, type);
		});
	}

	// Clear table of contents if required
	clearTOC();
};
export default almFilter;

/**
 * almFilterTransition(transition, speed, data, el)
 * Transition Ajax Load More
 *
 * @param {*} transition string;
 * @param {*} speed number;
 * @param {*} data obj;
 * @param {*} el element;
 * @param {*} type string;
 * @since 2.13.1
 */
let almFilterTransition = function (transition, speed, data, el, type) {
	if (transition === 'fade' || transition === 'masonry') {
		// Fade, Masonry transition

		switch (type) {
			case 'filter':
				el.classList.add('alm-is-filtering');
				almFadeOut(el, speed);

				break;

			case 'tab':
				el.classList.add('alm-loading');
				let new_el = el.querySelector('.alm-listing');
				el.style.height = new_el.offsetHeight + 'px';
				almFadeOut(new_el, speed);

				break;
		}

		// Move to next function
		setTimeout(function () {
			almCompleteFilterTransition(speed, data, el, type);
		}, speed);
	} else {
		// No transition
		el.classList.add('alm-is-filtering');
		almCompleteFilterTransition(speed, data, el, type);
	}
};

/**
 * almCompleteFilterTransition
 * Complete the filter transition
 *
 * @param {*} speed number;
 * @param {*} data obj;
 * @param {*} el element;
 * @param {*} type string;
 * @since 3.3
 */
let almCompleteFilterTransition = (speed, data, el, type) => {
	// Get `.alm-btn-wrap` element
	let btnWrap = el.querySelector('.alm-btn-wrap');

	// Get `.alm-listing` element
	let listing = el.querySelectorAll('.alm-listing');

	// Loop over all .alm-listing divs
	[...listing].forEach(function (e) {
		e.innerHTML = ''; // Clear listings
	});

	// Get Load More button
	let button = btnWrap.querySelector('.alm-load-more-btn');
	if (button) {
		button.classList.remove('done'); // Reset Button
	}

	// Clear paging navigation
	let paging = btnWrap.querySelector('.alm-paging');
	if (paging) {
		paging.style.opacity = 0;
	}

	// Reset Preloaded Amount
	data.preloadedAmount = 0;
	// Dispatch Filters
	almSetFilters(speed, data, el, type);
};

/**
 * almSetFilters
 * Set filter parameters on .alm-listing element
 *
 * @param {*} speed number;
 * @param {*} el element;
 * @param {*} data string;
 * @param {*} type string;
 * @updated 3.3
 * @since 2.6.1
 */
let almSetFilters = function (speed = 250, data, el, type) {
	// Get `alm-listing` container
	let listing =
		el.querySelector('.alm-listing') || el.querySelector('.alm-comments');
	if (!listing) {
		return false;
	}

	switch (type) {
		case 'filter':
			// Update data attributes
			for (let [key, value] of Object.entries(data)) {
				// Convert camelCase data atts back to dashes (-).
				key = key
					.replace(/\W+/g, '-')
					.replace(/([a-z\d])([A-Z])/g, '$1-$2')
					.toLowerCase();
				listing.setAttribute('data-' + key, value);
			}
			// Fade ALM back (Filters only)
			almFadeIn(el, speed);
			break;

		case 'tab':
			// Update `data-tab-template` attribute
			listing.setAttribute('data-preloaded', 'false');
			listing.setAttribute('data-pause', 'false');
			listing.setAttribute('data-tab-template', data.tabTemplate);

			break;
	}

	// Re-initiate Ajax Load More
	let target = '';
	if (data.target) {
		// Target has been specified
		target = document.querySelector(
			'.ajax-load-more-wrap[data-id="' + data.target + '"]'
		);
		if (target) {
			window.almInit(target);
		}
	} else {
		// Target not specified
		target = document.querySelector('.ajax-load-more-wrap');
		if (target) {
			window.almInit(target);
		}
	}

	switch (type) {
		case 'filter':
			// Filters Complete (not the add-on)
			if (typeof almFilterComplete === 'function') {
				// Standard Filtering
				almFilterComplete();
			}
			break;

		case 'tab':
			// Tabs Complete
			if (typeof almTabsComplete === 'function') {
				// Standard Filtering
				almTabsComplete();
			}
			break;
	}
};
