import srcsetPolyfill from './srcsetPolyfill';
import { lazyImages } from '../modules/lazyImages';
import { EXCLUDED_NODES } from './constants';
const imagesLoaded = require('imagesloaded');

/**
 * Append and display Ajax results to the ALM container.
 *
 * @param {Object} alm   The ALM object.
 * @param {Array}  nodes The HTML nodes to append.
 * @return {Promise}     The Promise object.
 */
export default function displayResults(alm, nodes) {
	const { listing: container, transition, speed, images_loaded, addons } = alm;
	return new Promise((resolve) => {
		if (!container || !nodes) {
			resolve(true);
			return;
		}

		const useTransition = !addons.paging && transition === 'fade' ? true : false;

		// Add each node to the alm listing container.
		nodes.forEach((node) => {
			const nodeName = node.nodeName.toLowerCase();

			if (useTransition || images_loaded === 'true') {
				node.style.opacity = 0;
				if (useTransition) {
					node.style.transition = `all ${speed}ms ease`;
				}
			}

			/**
			 * Do not append elements that are not actual element nodes (i.e. #text node).
			 * Add item if not in exclude array.
			 */
			if (EXCLUDED_NODES.indexOf(nodeName) === -1) {
				container.appendChild(node);
			}
		});

		// Run srcSet polyfill.
		srcsetPolyfill(container, alm.ua);

		// Lazy load images.
		lazyImages(alm);

		// Display the results.
		if (alm.images_loaded) {
			imagesLoaded(alm.listing, function () {
				display(alm, nodes, useTransition);
			});
		} else {
			display(alm, nodes, useTransition);
		}

		resolve(true);
	});
}

/**
 * Append and display Ajax results to the Paging container.
 *
 * @param {Object} alm   The ALM object.
 * @param {Array}  nodes The HTML nodes to append.
 * @return {Promise}     The Promise object.
 */
export function displayPagingResults(alm, nodes) {
	const { addons } = alm;
	const { paging_content: container } = addons;

	return new Promise((resolve) => {
		if (!container || !nodes) {
			resolve(true);
			return;
		}

		// Clear contents of Paging container.
		container.style.opacity = 0;
		container.innerHTML = '';

		// Add each node to the paging container.
		nodes.forEach((node) => {
			const nodeName = node.nodeName.toLowerCase();
			/**
			 * Do not append elements that are not actual element nodes (i.e. #text node).
			 * Add item if not in exclude array.
			 */
			if (EXCLUDED_NODES.indexOf(nodeName) === -1) {
				container.appendChild(node);
			}
		});

		// Run srcSet polyfill.
		srcsetPolyfill(container, alm.ua);

		// Lazy load images.
		lazyImages(alm);

		resolve(true);
	});
}

/**
 * Display the loaded results via CSS transition.
 *
 * @param {Object}  alm           The ALM object.
 * @param {Array}   nodes         The HTML nodes to append.
 * @param {boolean} useTransition Use CSS transition.
 */
function display(alm, nodes, useTransition = true) {
	const { transition_delay: delay, images_loaded } = alm;
	const offset = useTransition ? parseInt(delay) : 0; // Delay offset timing.

	if (nodes) {
		setTimeout(function () {
			if (useTransition || images_loaded === 'true') {
				nodes.forEach((node, index) => {
					setTimeout(function () {
						node.style.opacity = 1;
					}, index * offset);
				});
			}
			alm.AjaxLoadMore.transitionEnd();
		}, 50);
	}
}
