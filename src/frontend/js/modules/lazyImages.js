/**
 * Lazy load images helper.
 * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.
 * This helper provides a fix by grabbing the dataset value and making it the src.
 *
 * @param {Object} alm The Ajax Load More object.
 */
export function lazyImages(alm) {
	const { lazy_images, last_loaded } = alm;
	if (lazy_images && last_loaded?.length) {
		last_loaded.forEach((item) => {
			lazyImagesReplace(item);
		});
	}
}

/**
 * Loop all images in container and replace the src.
 *
 * @param {HTMLElement} container The element HTML.
 */
export function lazyImagesReplace(container) {
	const images = container.querySelectorAll('img');
	if (images) {
		// Loop all images.
		[...images].forEach((image) => {
			if (image) {
				replaceSrc(image);
			}
		});
	}
}

/**
 * Replace the image src with the value from data-src attributes.
 *
 * @param {HTMLElement} img The HTML image element.
 */
function replaceSrc(img) {
	if (!img) {
		return;
	}
	if (img?.dataset?.src) {
		img.src = img.dataset.src;
	}
	if (img?.dataset?.srcset) {
		img.srcset = img.dataset.srcset;
	}
	// Blocksy Pro.
	// @see https://creativethemes.com/blocksy
	if (img?.dataset?.ctLazy) {
		img.src = img.dataset.ctLazy;
	}
	if (img?.dataset?.ctLazySet) {
		img.srcset = img.dataset.ctLazySet;
	}
}
