/**
 * Fade element in.
 *
 * @param {HTMLElement} element The HTML element to fade in.
 * @param {number}      speed   The transition speed.
 * @return {Promise}            The Promise object.
 */
export const almFadeIn = (element, speed) => {
	return new Promise((resolve) => {
		if (speed === 0) {
			element.style.opacity = 1;
			element.style.height = 'auto';
			resolve(true);
		} else {
			speed = speed / 10;
			let op = 0; // initial opacity
			const timer = setInterval(function () {
				if (op > 0.9) {
					element.style.opacity = 1;
					resolve(true);
					clearInterval(timer);
				}
				element.style.opacity = op;
				op += 0.1;
			}, speed);
			element.style.height = 'auto';
		}
	});
};

/**
 * Fade element out.
 *
 * @param {HTMLElement} element The HTML element to fade out.
 * @param {number}      speed   The transition speed.
 * @return {Promise}            The Promise object.
 */
export const almFadeOut = (element, speed) => {
	return new Promise((resolve) => {
		speed = speed / 10;
		element.style.opacity = 0.5;
		const fadeEffect = setInterval(function () {
			if (element.style.opacity < 0.1) {
				element.style.opacity = 0;
				clearInterval(fadeEffect);
				resolve(true);
			} else {
				element.style.opacity -= 0.1;
			}
		}, speed);
	});
};
