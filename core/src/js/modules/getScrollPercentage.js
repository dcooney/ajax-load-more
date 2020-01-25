/**
 * getScrollPercentage
 * Get the scroll distance in pixels from a percentage
 * 
 * @param {Object} alm
 * @return {NUMBER} newdistance
 * @since 5.2
 */ 
 
let getScrollPercentage = (alm) => {
	if(!alm){
		return false;
	}
	
	let is_negative = (alm.scroll_distance_orig.toString().indexOf("-") === -1) ? false : true; // Is this a negative number   
   let raw_distance = alm.scroll_distance_orig.toString().replace("-", "").replace("%", ""); // Remove - and perc 	
	let wh = alm.window.innerHeight; // window height
	
	let height = Math.floor((wh/100) * parseInt(raw_distance)); // Do math to get distance
	
	let newdistance = (is_negative) ? `-${height}` : height; // Set the distance	
	//console.log(parseInt(newdistance));
	
	return parseInt(newdistance);
}
export default getScrollPercentage;