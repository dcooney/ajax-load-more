import { almScroll, getOffset } from '../ajax-load-more';
import setFocus from './setFocus';

/**
 * Create a numbered table of contents navigation
 *
 * @param {Object}  alm            The alm object.
 * @param {boolean} init           Init boolean.
 * @param {boolean} from_preloaded Preloaded boolean.
 * @since 5.2
 */
export function tableOfContents(alm, init = false, from_preloaded = false) {
	const totalPosts = alm.localize && alm.localize.post_count ? parseInt(alm.localize.post_count) : 0;

	// eslint-disable-next-line eqeqeq
	if (totalPosts == 0 && !alm.addons.single_post) {
		// Exit if zero posts and not single posts
		return false;
	}

	if (alm && alm.tableofcontents && alm.transition_container && alm.transition !== 'masonry') {
		const offset = alm.tableofcontents.dataset.offset ? parseInt(alm.tableofcontents.dataset.offset) : 30;
		const startPage = alm.start_page ? parseInt(alm.start_page) : 0;
		const filterStartPage = alm.addons.filters_startpage ? parseInt(alm.addons.filters_startpage) : 0;
		const nextpageStartPage = alm.addons.nextpage_startpage ? parseInt(alm.addons.nextpage_startpage) : 0;
		let page = parseInt(alm.page);
		const preloaded = alm.addons.preloaded === 'true' ? true : false;

		// Exit if Paging or Next Page
		if (alm.addons.paging || alm.addons.nextpage) {
			return false;
		}

		// Init

		if (init) {
			setTimeout(function () {
				// Paged results
				if ((alm.addons.seo && startPage > 1) || (alm.addons.filters && filterStartPage > 1) || (alm.addons.nextpage && nextpageStartPage > 1)) {
					// SEO
					if (alm.addons.seo && startPage > 1) {
						for (let i = 0; i < startPage; i++) {
							createTOCButton(alm, i, offset);
						}
					}
					// Filters
					if (alm.addons.filters && filterStartPage > 1) {
						for (let i = 0; i < filterStartPage; i++) {
							createTOCButton(alm, i, offset);
						}
					}
					// Nextpage
					if (alm.addons.nextpage && nextpageStartPage > 1) {
						for (let i = 0; i < nextpageStartPage; i++) {
							createTOCButton(alm, i, offset);
						}
					}
				} else {
					if (!from_preloaded && preloaded) {
						page = page + 1;
					}
					createTOCButton(alm, page, offset);
				}
			}, 100);
		} else {
			// Preloaded
			if (preloaded) {
				if (alm.addons.seo && startPage > 0) {
					page = page;
				} else if (alm.addons.filters && filterStartPage > 0) {
					page = page;
				} else {
					page = page + 1;
				}
			}

			createTOCButton(alm, page, offset);
		}
	}
}

/**
 * Clear table of contents.
 */
export function clearTOC() {
	const toc = document.querySelector('.alm-toc');
	if (toc) {
		toc.innerHTML = '';
	}
}

/**
 * Create Standard Page Button.
 *
 * @param {Object} alm    The alm object.
 * @param {string} page   Current page.
 * @param {number} offset The page offset.
 */
function createTOCButton(alm, page, offset) {
	if (!alm.tableofcontents) {
		return false;
	}

	const button = document.createElement('button');
	button.type = 'button';

	page = parseInt(page) + 1;
	button.innerHTML = getTOCLabel(alm, page);
	button.dataset.page = alm.addons.single_post_target && alm.init ? page - 1 : page;
	alm.tableofcontents.appendChild(button);

	button.addEventListener('click', function () {
		const thePage = this.dataset.page;
		let target = document.querySelector(`.alm-reveal:nth-child(${thePage})`) || document.querySelector(`.alm-nextpage:nth-child(${thePage})`);

		// Single Posts
		if (alm.addons.single_post_target) {
			target = document.querySelector(`.alm-reveal.alm-single-post[data-page="${thePage}"]`);
		}

		if (!target) {
			return false;
		}
		const top = typeof getOffset === 'function' ? getOffset(target).top : target.offsetTop;
		almScroll(top - offset);

		// Set Focus for A11y
		setTimeout(function () {
			setFocus(alm, target, thePage, false);
		}, 1000);
	});
}

/**
 * Get Button Label.
 *
 * @param {Object} alm  The alm object.
 * @param {string} page Current page.
 * @return {string} Label.
 */
function getTOCLabel(alm, page) {
	let label = page;

	// Single Posts
	if (alm.addons.single_post) {
		let thePage = page - 1;
		let element;
		if (alm.addons.single_post_target) {
			// Special functionality for Single Post with a loading target type
			if (alm.init) {
				thePage = thePage;
			} else {
				thePage = thePage + 1;
			}
			const posts = document.querySelectorAll(`.alm-reveal.alm-single-post`);
			if (posts) {
				element = posts[thePage];
			}
		} else {
			element = document.querySelector(`.alm-reveal.alm-single-post[data-page=${page - 1}]`);
		}
		label = element ? element.dataset.title : label;
	}

	// Dynamic function name
	const funcName = `almTOCLabel_${alm.id}`;
	if (typeof window[funcName] === 'function') {
		label = window[funcName](page, label);
	}

	return label;
}
