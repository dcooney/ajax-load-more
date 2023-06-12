import loadImage from './loadImage';
import setFocus from './setFocus';

/**
 * Load all items after Ajax request.
 * Note: The function is used with WooCommerce and Elementor add-ons.
 *
 * @param {Element} container     The HTML container
 * @param {array}   items         Array of items.
 * @param {Object}  alm	          The ALM object.
 * @param {boolean} waitForImages Wait for images to load before loading next item.
 */
export default function loadItems(container, items, alm, waitForImages = true) {
	return new Promise((resolve) => {
		const { rel = 'next' } = alm;
		const total = items.length;
		let index = 0;
		let count = 1;

		// Reverse items array if rel is 'prev'.
		items = rel === 'prev' ? items.reverse() : items;

		function loadItem() {
			if (count <= total) {
				(async function () {
					items[index].style.opacity = 0;
					await loadImage(container, items[index], alm.ua, rel, waitForImages);
					count++;
					index++;
					loadItem();
				})().catch(() => {
					console.warn('There was an error loading the items.');
				});
			} else {
				// Delay for effect only
				setTimeout(function () {
					items.map(function (item) {
						item.style.opacity = 1;
					});
					if (items[0]) {
						const focusItem = rel === 'prev' ? items[items.length - 1] : items[0]; // Get the item to focus.
						setFocus(alm, focusItem, null, false); // Set the focus.
					}
				}, 25);

				resolve(true);
			}
		}

		loadItem();
	});
}
