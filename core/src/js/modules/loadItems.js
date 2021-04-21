import loadImage from './loadImage';
import setFocus from './setFocus';

/**
 * Load all items.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement} items
 * @param {Object} alm
 * @param {String} pageTitle
 * @param {String} url
 * @param {String} className
 */
const loadItems = (container, items, alm, pageTitle, url = window.location, className = '') => {
	return new Promise((resolve) => {
		let total = items.length;
		let index = 0;
		let count = 1;

		function loadItem() {
			if (count <= total) {
				(async function () {
					items[index].style.opacity = 0;

					// First item only
					if (count == 1) {
						items[index].classList.add(className);

						// Set URL
						items[index].dataset.url = url;

						// Set page num
						items[index].dataset.page = alm.page + 1;

						// Set page title
						items[index].dataset.pageTitle = pageTitle;
					}

					await loadImage(container, items[index], alm.ua);

					count++;
					index++;

					loadItem();
				})().catch((e) => {
					console.log('There was an error loading the items');
				});
			} else {
				// Delay for effect only
				setTimeout(function () {
					items.map(function (item) {
						item.style.opacity = 1;
					});
					if (items[0]) {
						setFocus(alm, items[0], null, false);
					}
				}, 50);

				resolve(true);
			}
		}

		loadItem();
	});
};

export default loadItems;
