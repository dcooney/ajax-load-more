/**
 * Lazy load images helper.
 * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.
 * This helper provides a fix by grabbing the dataset value and making it the src.
 *
 * @param {Object} alm The Ajax Load More object.
 */
export function lazyImages(alm) {
	if (!alm || !alm.lazy_images) {
		return;
	}
	lazyImagesReplace(alm.el);
}

/**
 * Loop all images in container and replace the src.
 *
 * @param {HTMLElement} container The element HTML.
 */
export function lazyImagesReplace(container) {
	const images = container.getElementsByTagName('img');
	if (images) {
		// Loop all images.
		Array.prototype.forEach.call(images, (img) => {
			if (img) {
				replaceSrc(img);
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
	if (img) {
		if (img.dataset.src) {
			img.src = img.dataset.src;
		}
		if (img.dataset.srcset) {
			img.srcset = img.dataset.srcset;
		}
	}
}
