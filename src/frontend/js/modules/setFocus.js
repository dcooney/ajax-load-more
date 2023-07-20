/**
 * Set user focus to improve accessibility after load events.
 *
 * @param {Object}  alm          ALM object.
 * @param {Element} element      The element to focus on.
 * @param {number}  total        The total number of posts returned.
 * @param {boolean} is_filtering Is this a filtering event.
 * @since 5.1
 */
const setFocus = (alm, element = null, total = 0, is_filtering = false) => {
	if (!alm_localize.a11y_focus) {
		return false;
	}

	// WooCommerce Add-on
	if (alm.addons.woocommerce || alm.addons.elementor) {
		moveFocus(false, false, element, false);
		return;
	}

	// Has Total
	if (alm.transition_container && total > 0) {
		if (alm.addons.paging) {
			// Paging
			moveFocus(alm.init, alm.addons.preloaded, alm.listing, is_filtering);
		} else if (alm.addons.single_post || alm.addons.nextpage) {
			// Single Posts OR Next Page, set `init` to false to trigger focus
			moveFocus(false, alm.addons.preloaded, element, is_filtering);
		} else {
			// Standard ALM
			moveFocus(alm.init, alm.addons.preloaded, element, is_filtering);
		}
	} else if (!alm.transition_container) {
		// Table Layout, no transition container
		moveFocus(alm.init, alm.addons.preloaded, element[0], is_filtering);
	}
};
export default setFocus;

/**
 * moveFocus
 * Move user focus to alm-reveal div
 *
 * @param {boolean}     init         Initial run true or false.
 * @param {string}      preloaded    Preloaded true or false.
 * @param {HTMLElement} element      The container HTML element.
 * @param {boolean}     is_filtering Filtering true or false.
 * @since 5.1
 */

const moveFocus = (init = true, preloaded = 'false', element, is_filtering = false) => {
	if (!is_filtering) {
		if ((init || !element) && preloaded !== 'true') {
			return false; // Exit if first run
		}
	}

	// Check if element is an array.
	// If `transition_container="false"`, `element` will be an array.
	/*
   let is_array = Array.isArray(element);
   element = (is_array) ? element[0] : element;
   */

	// Set tabIndex and style on element
	element.setAttribute('tabIndex', '-1');
	element.style.outline = 'none';

	// Get Parent container if `.alm-listing` set parent to element
	const parent = !element.classList.contains('alm-listing') ? element.parentNode : element;

	// Scroll Container
	const scrollContainer = parent.dataset.scrollContainer;

	// If scroll container, move it, not the window.
	if (scrollContainer) {
		const container = document.querySelector(scrollContainer);
		if (container) {
			setTimeout(function () {
				element.focus({ preventScroll: true });
			}, 50);
		}
	}

	// Move window
	else {
		setTimeout(function () {
			element.focus({ preventScroll: true });
		}, 50);
	}
};
