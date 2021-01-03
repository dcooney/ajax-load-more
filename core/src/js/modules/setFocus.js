/**
 * setFocus
 * Set user focus to improve accessibility after load events
 *
 * @param {Object} alm
 * @param {HTMLElement} preloaded
 * @param {Number} total
 * @param {Boolean} is_filtering
 * @since 5.1
 */

let setFocus = (alm, element = null, total = 0, is_filtering = false) => {
	if (!alm_localize.a11y_focus) {
		return false;
	}

	// WooCommerce Add-on
	if (alm.addons.woocommerce || alm.addons.elementor) {
		moveFocus(false, false, element, false, alm.isSafari);
		return;
	}

	// Has Total
	if (alm.transition_container && total > 0) {
		if (alm.addons.paging) {
			// Paging
			moveFocus(alm.init, alm.addons.preloaded, alm.listing, is_filtering, alm.isSafari);
		} else if (alm.addons.single_post || alm.addons.nextpage) {
			// Single Posts OR Next Page, set `init` to false to trigger focus
			moveFocus(false, alm.addons.preloaded, element, is_filtering, alm.isSafari);
		} else {
			// Standard ALM
			moveFocus(alm.init, alm.addons.preloaded, element, is_filtering, alm.isSafari);
		}
	} else if (!alm.transition_container) {
		// Table Layout, no transition container
		moveFocus(alm.init, alm.addons.preloaded, element[0], is_filtering, alm.isSafari);
	}
};
export default setFocus;

/**
 * moveFocus
 * Move user focus to alm-reveal div
 *
 * @param {Boolean} init
 * @param {String} preloaded
 * @param {HTMLElement} element
 * @param {Boolean} is_filtering
 * @param {Boolean} isSafari
 * @since 5.1
 */

let moveFocus = (init = true, preloaded = 'false', element, is_filtering = false, isSafari = false) => {
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

	// Get Parent container
	// If `.alm-listing` set parent to element
	let parent = !element.classList.contains('alm-listing') ? element.parentNode : element;

	// Scroll Container
	let scrollContainer = parent.dataset.scrollContainer;

	// If scroll container, move it, not the window.
	if (scrollContainer) {
		let container = document.querySelector(scrollContainer);
		if (container) {
			//let left = container.scrollLeft;
			//let top = container.scrollTop;
			//element.focus();
			//container.scrollLeft = left;
			//container.scrollTop = top;
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

		//let x = window.scrollX;
		//let y = window.scrollY;

		// Safari fix for window movement if Y = 0
		//if(isSafari){
		//window.scrollTo(x, y);
		//y = (y === 0) ? 1 : y;
		//}
		//element.focus();
		//window.scrollTo(x, y);
	}
};
