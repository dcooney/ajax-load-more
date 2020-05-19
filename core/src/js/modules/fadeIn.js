/**
 * Fade element in
 * @param {*} element
 * @param {*} speed
 */  
let almFadeIn = (element, speed) => {
	if(speed == 0){
		element.style.opacity = 1;
		element.style.height = 'auto';
		
	} else {
		speed = speed/10;
		let op = 0;  // initial opacity
		let timer = setInterval(function () { 
			if (op > 0.9){
				element.style.opacity = 1;
				clearInterval(timer);
			}
			element.style.opacity = op;
			op += 0.1;
		}, speed);
		element.style.height = 'auto';
	}
}
export default almFadeIn; 