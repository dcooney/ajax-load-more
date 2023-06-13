/**
 * Get the scroll distance in pixels from a percentage.
 *
 * @param {object} alm The Ajax Load More object.
 * @return {number}    The new distance.
 * @since 5.2
 */
export default function getScrollPercentage(alm) {
	if (!alm) {
		return false;
	}

	const is_negative = alm.scroll_distance_orig.toString().indexOf('-') === -1 ? false : true; // Is this a negative number
	const raw_distance = alm.scroll_distance_orig.toString().replace('-', '').replace('%', ''); // Remove - and perc
	const wh = alm.window.innerHeight; // window height
	const height = Math.floor((wh / 100) * parseInt(raw_distance)); // Do math to get distance
	const newdistance = is_negative ? `-${height}` : height; // Set the distance

	return parseInt(newdistance);
}
