import { addFiltersAttributes } from './filters';
import { addSEOAttributes } from './seo';

/**
 * Set parameters on HTML elements for preloaded results.
 *
 * @param {Object} alm The ALM object.
 * @since 7.0.0
 */
export function setPreloadedParams(alm) {
	const { addons } = alm;
	const firstElement = alm?.listing?.firstChild;
	if (firstElement) {
		if (addons?.seo) {
			addSEOAttributes(alm, firstElement, 1);
		}
		if (addons?.filters) {
			addFiltersAttributes(alm, firstElement, 1);
		}
	}
}
