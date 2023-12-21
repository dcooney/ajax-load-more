import srcsetPolyfill from '../helpers/srcsetPolyfill';
import { lazyImages } from '../modules/lazyImages';
import { EXCLUDED_NODES } from './constants';
const imagesLoaded = require('imagesloaded');

/**
 * Append Ajax results to the ALM container.
 *
 * @param {Object} alm   The ALM object.
 * @param {Array}  nodes The HTML nodes to append.
 */
export default function appendResults(alm, nodes) {
	const { listing: container, transition, transition_css, images_loaded } = alm;
	if (container && nodes) {
		const useTransition = transition === 'fade' ? true : false;

		// Add each node to the alm listing container.
		nodes.forEach((node) => {
			const nodeName = node.nodeName.toLowerCase();

			if (useTransition || images_loaded === 'true') {
				node.style.opacity = 0;
				if (useTransition) {
					node.style.transition = transition_css;
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
		if (alm.images_loaded === 'true') {
			imagesLoaded(alm.listing, function () {
				displayResults(alm, nodes, useTransition);
			});
		} else {
			displayResults(alm, nodes, useTransition);
		}
	}
}

/**
 * Display the loaded results.
 *
 * @param {Object}  alm           The ALM object.
 * @param {Array}   nodes         The HTML nodes to append.
 * @param {boolean} useTransition Use a CSS transition.
 */
function displayResults(alm, nodes, useTransition = true) {
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
		}, 25);
	}
}
