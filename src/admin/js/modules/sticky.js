var alm = alm || {};

/*
 *  alm.attachSticky
 */
alm.attachSticky = (el, anchor, top = 0) => {
	let h = el.offsetHeight + top, // height of sticky el
		anchorOffset = anchor.getBoundingClientRect(),
		anchor_top = anchorOffset.top,
		w_height = window.innerHeight, // Window height
		el_height = el.offsetHeight; // element height

	if (w_height > el_height + top) {
		// If container height > than sticky height
		if (anchor_top <= top) {
			el.classList.add('attached');
		} else {
			if (anchor_top > top) {
				el.classList.remove('attached');
			}
		}
	}
};

/*
 *  alm.resizeSticky
 */
alm.resizeSticky = (target, element) => {
	let atts = window.getComputedStyle(element);
	target.style.width = atts.width;
};

/*
 *  initSticky
 */
const initSticky = (element) => {
	if (element) {
		const target = element.firstElementChild;
		const sticky_top = 70; // The position the sticky should stick

		// Scroll
		window.addEventListener('scroll', function (e) {
			alm.attachSticky(target, element, sticky_top);
		});
		// Resize
		window.addEventListener('resize', function (e) {
			alm.resizeSticky(target, element);
		});
		// Init
		alm.resizeSticky(target, element);
		alm.attachSticky(target, element, sticky_top);
	}
};

window.onload = function () {
	const stickyID = document.getElementById('cnkt-sticky-wrapper');
	if (stickyID) {
		initSticky(stickyID);
	}
	const stickies = document.querySelectorAll('.cnkt-sticky-wrapper');
	if (stickies) {
		stickies.forEach(function (sticky) {
			initSticky(sticky);
		});
	}
};
