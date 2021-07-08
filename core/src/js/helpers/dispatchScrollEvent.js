/**
 * Dispatch a window scroll event.
 *
 * @param {Boolean} delay Should this be delayed.
 * @since 5.5
 */
const dispatchScrollEvent = function (delay = true) {
	if (typeof Event === 'function') {
		setTimeout(
			function () {
				window.dispatchEvent(new CustomEvent('scroll'));
			},
			delay ? 150 : 1
		);
	}
};

export default dispatchScrollEvent;
