/**
 * Get the next URL for Load More button
 *
 * @param {object} alm
 * @since 5.4.0
 */

const getButtonURL = (alm) => {
	if (!alm || !alm.trigger) {
		return false;
	}
	let button = alm.trigger.querySelector('button');
	let url = button ? button.dataset.url : '';

	return url ? url : '';
};
export default getButtonURL;
