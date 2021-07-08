import srcsetPolyfill from '../helpers/srcsetPolyfill';
import { lazyImagesReplace } from './lazyImages';
let imagesLoaded = require('imagesloaded');

/**
 * Load the image with imagesLoaded
 *
 * @param {HTMLElement} container The HTML container.
 * @param {HTMLElement} item      The element to load.
 * @param {string}      ua        Browser user-agent.
 * @param {string}      rel       The loading direction, next or prev.
 */
const loadImage = (container, item, ua, rel = 'next') => {
	return new Promise((resolve) => {
		imagesLoaded(item, function () {
			// Add CSS transition
			item.style.transition = 'all 0.4s ease';
			// Append to container
			if (rel === 'prev') {
				container.insertBefore(item, container.childNodes[0]);
			} else {
				container.appendChild(item);
			}

			// Lazy Load images
			lazyImagesReplace(item);

			// Run srcset fix
			srcsetPolyfill(item, ua);

			// Send Promise callback
			resolve(true);
		});
	});
};
export default loadImage;
