/**
 * Fade element out
 * @param {*} element
 * @param {*} speed
 */  
let almFadeOut = (element, speed) => {
	speed = speed/10;
	let fadeEffect = setInterval(function () {
		if (!element.style.opacity) {
			element.style.opacity = 1;
		}
		if (element.style.opacity < 0.1) {
			clearInterval(fadeEffect);
		} else {
			element.style.opacity -= 0.1;
		}
	}, speed);
}
export default almFadeOut; 