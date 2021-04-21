/**
 * Lazy load images helper.
 * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.
 * This helper provides a fix by grabbing the dataset value and making it the src.
 *
 * @param {Object} alm The Ajax Load More object.
 */
const lazyImages = (alm) => {
	if (!alm || !alm.lazy_images) {
		return;
	}
	const images = alm.el.getElementsByTagName('img');
	if (images) {
		// Loop all images.
		Array.prototype.forEach.call(images, (img) => {
			if (img) {
				if (img.dataset.src) {
					img.src = img.dataset.src;
				}
				if (img.dataset.srcset) {
					img.srcset = img.dataset.srcset;
				}
			}
		});
	}
};

export default lazyImages;
