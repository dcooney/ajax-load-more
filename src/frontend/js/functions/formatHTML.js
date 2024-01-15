import { addFiltersAttributes } from '../addons/filters';
import { addSEOAttributes } from '../addons/seo';
import { addSinglePostsAttributes } from '../addons/singleposts';
import stripEmptyNodes from '../functions/stripEmptyNodes';

/**
 * Create data attributes for SEO and Filter paged results.
 *
 * @param {Object} alm      The ALM object.
 * @param {Array}  elements The element HTML nodes.
 * @return {Array}          The modified elements.
 * @since 7.0.0
 */
export default function formatHTML(alm, elements) {
	if (!elements?.length) {
		return [];
	}

	const { addons, page, posts_per_page, init, start_page, container_type } = alm;

	// Single Posts.
	if (addons?.single_post) {
		// Single Posts only.
		elements = addSinglePostsAttributes(alm, elements);

		// Single Post Preview.
		if (addons.single_post_preview && addons.single_post_preview_data && typeof almSinglePostCreatePreview === 'function') {
			const singlePreview = almSinglePostCreatePreview(elements[0], addons.single_post_id, addons.single_post_preview_data);
			if (singlePreview) {
				elements[0].replaceChildren(singlePreview);
			}
		}
		return elements;
	}

	// Exit if not SEO or Filters.
	if (!addons?.seo && !addons?.filters) {
		return elements;
	}

	let current = parseInt(page) + 1;
	current = addons?.preloaded ? current + 1 : current;

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
 * @param {Array} elements The element HTML nodes.
 * @return {Array}         The modified elements.
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
