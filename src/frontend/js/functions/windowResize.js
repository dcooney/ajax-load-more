/**
 * Trigger a window resize browser function.
 *
 * @since 5.3.1
 */
export default function triggerWindowResize() {
	if (typeof Event === 'function') {
		// Modern browsers.
		window.dispatchEvent(new Event('resize'));
	} else {
		// Executed on old browsers and especially IE.
		const resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(resizeEvent);
	}
}
