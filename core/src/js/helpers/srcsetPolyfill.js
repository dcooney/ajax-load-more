/**
 * A srcset polyfill to get Masonry and ImagesLoaded working with Safari and Firefox.
 *
 * @param {Element} container Contaienr HTML element.
 * @param {string} ua The user-agent string.
 * @since 5.0.2
 */
export default function srcsetPolyfill(container = null, ua = '') {
	// Exit if no container
	if (!container) {
		return false;
	}

	// Exit if useragent is Chrome, Safari or Windows
	if ((ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') != -1) || ua.indexOf('Firefox') > -1 || ua.indexOf('Windows') > -1) {
		return false;
	}

	// Get the images
	const imgs = container.querySelectorAll('img[srcset]:not(.alm-loaded)');

	// Loop images
	for (var i = 0; i < imgs.length; i++) {
		const img = imgs[i];
		img.classList.add('alm-loaded');
		img.outerHTML = img.outerHTML;
	}
}
