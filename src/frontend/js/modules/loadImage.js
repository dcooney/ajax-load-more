import srcsetPolyfill from '../helpers/srcsetPolyfill';
import { lazyImagesReplace } from './lazyImages';
let imagesLoaded = require('imagesloaded');

/**
 * Load the image with imagesLoaded
 *
 * @param {Element} container     The HTML container.
 * @param {Element} item          The element to load.
 * @param {string}  ua            Browser user-agent.
 * @param {string}  rel           The loading direction, next or prev.
 * @param {boolean} waitForImages Wait for images to load before loading next item.
 */
export default function loadImage(container, item, ua, rel = 'next', waitForImages = true) {
	/**
	 * Append item to container.
	 */
	function appendImage() {
		if (rel === 'prev') {
			container.insertBefore(item, container.childNodes[0]);
		} else {
			container.appendChild(item);
		}

		lazyImagesReplace(item); // Lazy load image fix.
		srcsetPolyfill(item, ua); // Safari/Firefox polyfills.
	}

	return new Promise((resolve) => {
		item.style.transition = 'all 0.25s ease'; // Add CSS transition to each item.

		if (waitForImages) {
			imagesLoaded(item, function () {
				appendImage();
				resolve(true); // Send Promise callback
			});
		} else {
			appendImage();
			resolve(true); // Send Promise callback
		}
	});
}
