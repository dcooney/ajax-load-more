import loadImage from './loadImage';
import setFocus from './setFocus';

/**
 * Load all items after Ajax request.
 *
 * Note: The function is used with WooCommerce and Elementor add-ons.
 *
 * @param {Element} container     The HTML container
 * @param {array}   items         Array of items.
 * @param {Object}  alm	          The ALM object.
 * @param {string}  pageTitle     Current page title.
 * @param {string}  url           Current URL.
 * @param {string}  className     Optional classnames.
 * @param {boolean} waitForImages Wait for images to load before loading next item.
 */
export default function loadItems(container, items, alm, pageTitle, url = window.location, className = '', waitForImages = true) {
	return new Promise((resolve) => {
		const total = items.length;
		let index = 0;
		let count = 1;

		// Get load direction.
		const rel = alm.rel ? alm.rel : 'next';

		// Set load properties.
		const matchVal = rel === 'prev' ? total : 1; // The item to attach data attributes.
		const page = rel === 'prev' ? alm.pagePrev : alm.page + 1; // Get the page number.

		// Reverse items array if rel is 'prev'.
		items = rel === 'prev' ? items.reverse() : items;

		function loadItem() {
			if (count <= total) {
				(async function () {
					items[index].style.opacity = 0;

					// Add data attributes to first or last item for URL updates.
					if (count == matchVal) {
						items[index].classList.add(className);

						// Set URL
						items[index].dataset.url = url;

						// Set page num
						items[index].dataset.page = page;

						// Set page title
						items[index].dataset.pageTitle = pageTitle;
					}

					await loadImage(container, items[index], alm.ua, rel, waitForImages);

					count++;
					index++;

					loadItem();
				})().catch(() => {
					console.log('There was an error loading the items');
				});
			} else {
				// Delay for effect only
				setTimeout(function () {
					items.map(function (item) {
						item.style.opacity = 1;
					});
					if (items[0]) {
						// Get the item to focus.
						const focusItem = rel === 'prev' ? items[items.length - 1] : items[0];

						// Set the focus.
						setFocus(alm, focusItem, null, false);
					}
				}, 50);

				resolve(true);
			}
		}

		loadItem();
	});
}
