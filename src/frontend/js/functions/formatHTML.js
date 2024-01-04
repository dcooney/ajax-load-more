import { addFiltersAttributes } from '../addons/filters';
import { addSEOAttributes } from '../addons/seo';
import { addSinglePostsAttributes } from '../addons/singleposts';
import stripEmptyNodes from '../helpers/stripEmptyNodes';

/**
 * Create data attributes for SEO and Filter paged results.
 *
 * @param {Object} alm      The ALM object.
 * @param {Array}  elements The element HTML nodes.
 * @return {Array}          The modified elements.
 * @since 7.0.0
 */
export default function formatHTML(alm, elements) {
	const { addons, page, posts_per_page, init, start_page, container_type } = alm;

	// Single Posts only.
	if (addons?.single_post) {
		elements = addSinglePostsAttributes(alm, elements);
		return elements;
	}

	// Exit if not SEO or Filters.
	if (!addons?.seo && !addons?.filters) {
		return elements;
	}

	let current = parseInt(page) + 1;
	current = addons?.preloaded === 'true' ? current + 1 : current;

	// If init and SEO or Filter start_page, set pagenum to 1.
	if (init && (parseInt(start_page) > 1 || addons?.filters_startpage > 1)) {
		current = 1;
	}

	// Call to Action add-on: Add 1 if CTA is true.
	const per_page = addons?.cta ? parseInt(posts_per_page) + 1 : parseInt(posts_per_page);

	// If table, format the return data.
	if (container_type === 'table') {
		elements = formatTable(elements);
	}

	/**
	 * Split elements array into individual pages.
	 */
	const pages = [];
	for (let i = 0; i < elements?.length; i += per_page) {
		pages.push(elements.slice(i, per_page + i));
	}

	/**
	 * Loop pages and modify first element in return data.
	 */
	if (pages) {
		for (let i = 0; i < pages.length; i++) {
			const index = i > 0 ? i * per_page : 0;
			if (elements[index]) {
				if (addons?.seo) {
					elements[index] = addSEOAttributes(alm, elements[index], i + current);
				}
				if (addons?.filters) {
					elements[index] = addFiltersAttributes(alm, elements[index], i + current);
				}
			}
		}
	}

	return elements;
}

/**
 * Format return table data.
 *
 * @param {Array}  elements The element HTML nodes.
 * @return {Array}          The modified elements.
 */
function formatTable(elements = []) {
	if (!elements) {
		return [];
	}

	const tableChildren = elements?.length ? elements[0].childNodes : [];
	if (tableChildren) {
		elements = stripEmptyNodes([...tableChildren]);
	}

	return elements;
}
