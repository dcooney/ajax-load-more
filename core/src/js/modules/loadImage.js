import srcsetPolyfill from '../helpers/srcsetPolyfill';
let imagesLoaded = require('imagesloaded');

/**
 * Load the image with imagesLoaded
 *
 * @param {HTMLElement} container
 * @param {HTMLElement} item
 * @param {String} ua
 */
const loadImage = (container, item, ua) => {
	return new Promise((resolve) => {
		imagesLoaded(item, function () {
			// Add CSS transition
			item.style.transition = 'all 0.4s ease';
			// Append to container
			container.appendChild(item);
			// Run srcset fix
			srcsetPolyfill(item, ua);
			// Send await callback
			resolve(true);
		});
	});
};
export default loadImage;
