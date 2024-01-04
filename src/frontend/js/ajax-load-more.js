// ALM Modules
import axios from 'axios';
import { getCache } from './addons/cache';
import { elementor, elementorCreateParams, elementorGetContent, elementorInit, elementorLoaded } from './addons/elementor';
import appendResults from './functions/appendResults';
import formatHTML from './functions/formatHTML';
import { setPreloadedParams } from './addons/preloaded';
import { singlePostHTML } from './addons/singleposts';
import { wooGetContent, wooInit, wooReset, woocommerce, woocommerceLoaded } from './addons/woocommerce';
import { almDomParser, tableParser } from './functions/parsers';
import { getButtonURL } from './helpers/getButtonURL';
import getParameterByName from './helpers/getParameterByName';
import getScrollPercentage from './helpers/getScrollPercentage';
import getTotals from './helpers/getTotals';
import './helpers/helpers';
import { getAjaxParams, getRestAPIParams } from './helpers/queryParams';
import triggerWindowResize from './helpers/windowResize';
import almDebug from './modules/almDebug';
import { almFadeIn, almFadeOut } from './modules/fade';
import almFilter from './modules/filtering';
import insertScript from './modules/insertScript';
import { almMasonry, almMasonryConfig } from './modules/masonry';
import almNoResults from './modules/noResults';
import { hidePlaceholder, showPlaceholder } from './modules/placeholder';
import * as resultsText from './modules/resultsText';
import setFocus from './functions/setFocus';
import setLocalizedVars from './modules/setLocalizedVars';
import { tableOfContents } from './modules/tableofcontents';

import '../scss/ajax-load-more.scss';

// External packages.
const qs = require('qs');
const imagesLoaded = require('imagesloaded');

// Axios Config.
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Axios Interceptor for nested data objects
axios.interceptors.request.use((config) => {
	config.paramsSerializer = (params) => {
		// Qs is already included in the Axios package
		return qs.stringify(params, {
			arrayFormat: 'brackets',
			encode: false,
		});
	};
	return config;
});

// Polyfills
require('focus-options-polyfill');
require('./helpers/polyfills.js');

// Global filtering state.
let alm_is_filtering = false;

// Start ALM
(function () {
	'use strict';

	/**
	 * Initiate Ajax Load More.
	 *
	 * @param {Element} el    The Ajax Load More DOM element/container.
	 * @param {number}  index The current index number of the Ajax Load More instance.
	 */
	const ajaxloadmore = function (el, index) {
		// Move user to top of page to prevent loading of unnessasry posts
		if (alm_localize?.scrolltop === 'true') {
			window.scrollTo(0, 0);
		}

		// Set ALM Variables
		let alm = this;
		alm.AjaxLoadMore = {};
		alm.addons = {};
		alm.extensions = {};
		alm.integration = {};
		alm.window = window;
		alm.page = 0;
		alm.postcount = 0;
		alm.totalposts = 0;
		alm.proceed = false;
		alm.disable_ajax = false;
		alm.init = true;
		alm.loading = true;
		alm.finished = false;
		alm.timer = null;
		alm.rel = 'next';

		alm.ua = window.navigator.userAgent ? window.navigator.userAgent : ''; // Browser User Agent
		alm.vendor = window.navigator.vendor ? window.navigator.vendor : ''; // Browser Vendor
		alm.isSafari = /Safari/i.test(alm.ua) && /Apple Computer/.test(alm.vendor) && !/Mobi|Android/i.test(alm.ua);

		el.classList.add('alm-' + index); // Add unique classname.
		el.setAttribute('data-alm-id', index); // Add unique data id.

		// The defined or generated ID for the ALM instance.
		alm.master_id = el.dataset.id ? `ajax_load_more_${el.dataset.id}` : el.id;
		alm.master_id = alm.master_id.replace(/-/g, '_');

		// Localized <script/> variables.
		alm.localize = window[alm.master_id + '_vars'];

		// Add ALM object to the global window scope.
		window[alm.master_id] = alm; // e.g. window.ajax_load_more or window.ajax_load_more_{id}

		// ALM Element Containers
		alm.main = el; // Top level DOM element
		alm.listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');
		alm.content = alm.listing;
		alm.el = alm.content;
		alm.ajax = el.querySelector('.alm-ajax');
		alm.container_type = alm.listing.dataset.containerType;
		alm.loading_style = alm.listing.dataset.loadingStyle;

		// Instance Params
		alm.canonical_url = el.dataset.canonicalUrl;
		alm.nested = el.dataset.nested ? el.dataset.nested : false;
		alm.is_search = el?.dataset?.search === 'true' ? 'true' : false;
		alm.slug = el.dataset.slug;
		alm.post_id = parseInt(el.dataset.postId);
		alm.id = el.dataset.id ? el.dataset.id : '';

		// No results template
		const alm_no_results = el.querySelector('.alm-no-results');
		alm.no_results = alm_no_results ? alm_no_results.innerHTML : '';

		// Shortcode Params
		alm.repeater = alm.listing.dataset.repeater; // Repeaters
		alm.theme_repeater = alm.listing.dataset.themeRepeater;

		alm.post_type = alm.listing.dataset.postType ? alm.listing.dataset.postType : 'post';
		alm.sticky_posts = alm.listing.dataset.stickyPosts ? alm.listing.dataset.stickyPosts : null;

		alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs
		alm.btnWrap = [...alm.btnWrap]; // Convert NodeList to array
		alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)
		alm.trigger = alm.btnWrap[alm.btnWrap.length - 1];
		alm.button = alm.trigger.querySelector('button.alm-load-more-btn');

		alm.button_label = alm.listing.dataset.buttonLabel || 'Load More';
		alm.button_loading_label = alm.listing.dataset.buttonLoadingLabel || false;
		alm.button_done_label = alm.listing.dataset.buttonDoneLabel || false;

		alm.placeholder = alm.main.querySelector('.alm-placeholder') || false;

		alm.scroll_distance = alm.listing.dataset.scrollDistance || 100;
		alm.scroll_container = alm.listing.dataset.scrollContainer || '';
		alm.scroll_direction = alm.listing.dataset.scrollDirection || 'vertical';
		alm.max_pages = alm.listing.dataset.maxPages ? parseInt(alm.listing.dataset.maxPages) : 0;
		alm.pause_override = alm.listing.dataset.pauseOverride ? alm.listing.dataset.pauseOverride : false; // true | false
		alm.pause = alm.listing.dataset.pause ? alm.listing.dataset.pause : false; // true | false
		alm.transition = alm.listing.dataset.transition || 'fade'; // Transition
		alm.transition_delay = alm_localize?.transition_delay || 50;
		alm.speed = alm?.localize?.speed ? parseInt(alm.localize.speed) : 200;
		alm.images_loaded = alm.listing.dataset.imagesLoaded ? alm.listing.dataset.imagesLoaded : false;
		alm.destroy_after = alm.listing.dataset.destroyAfter ? alm.listing.dataset.destroyAfter : '';
		alm.lazy_images = alm?.listing.dataset?.lazyImages === 'true' ? true : false;
		alm.integration.woocommerce = alm?.listing?.dataset?.woocommerce === 'true' ? true : false;

		alm.scroll = alm?.listing?.dataset?.scroll === 'false' ? false : true;
		alm.orginal_posts_per_page = parseInt(alm.listing.dataset.postsPerPage); // Used for paging add-on
		alm.posts_per_page = parseInt(alm.listing.dataset.postsPerPage);
		alm.offset = alm?.listing?.dataset?.offset ? parseInt(alm.listing.dataset.offset) : 0;

		// Convert to value of slug for appending to seo url.
		alm.search_value = alm.is_search === 'true' ? alm.slug : '';

		// Add-on Shortcode Params

		// Elementor add-on
		alm.addons.elementor = alm.listing.dataset.elementor === 'posts' && alm.listing.dataset.elementorSettings ? true : false;
		if (alm.addons.elementor) {
			alm = elementorCreateParams(alm);
		}

		// WooCommerce add-on
		alm.addons.woocommerce = alm?.listing?.dataset?.woo === 'true' ? true : false;
		if (alm.addons.woocommerce && alm.listing.dataset.wooSettings) {
			alm.addons.woocommerce_settings = JSON.parse(alm.listing.dataset.wooSettings);
			alm.addons.woocommerce_settings.results_text = document.querySelectorAll(alm.addons.woocommerce_settings.results); // Add Results Text
			alm.page = parseInt(alm.page) + parseInt(alm.addons.woocommerce_settings.paged);
		}

		// Cache add-on
		alm.addons.cache = alm?.listing?.dataset?.cache === 'true' ? true : false;
		if (alm.addons.cache) {
			alm.addons.cache_id = alm.listing.dataset.cacheId;
			alm.addons.cache_path = alm.listing.dataset.cachePath;
			alm.addons.cache_logged_in = alm.listing.dataset.cacheLoggedIn ? alm.listing.dataset.cacheLoggedIn : false;
		}

		// CTA add-on
		alm.addons.cta = alm?.listing?.dataset?.cta === 'true' ? true : false;
		if (alm.addons.cta) {
			alm.addons.cta_position = alm.listing.dataset.ctaPosition;
			alm.addons.cta_repeater = alm.listing.dataset.ctaRepeater;
			alm.addons.cta_theme_repeater = alm.listing.dataset.ctaThemeRepeater;
		}

		// Nextpage add-on
		alm.addons.nextpage = alm.listing.dataset.nextpage;
		if (alm.addons.nextpage === 'true') {
			alm.addons.nextpage_urls = alm.listing.dataset.nextpageUrls;
			alm.addons.nextpage_scroll = alm.listing.dataset.nextpageScroll;
			alm.addons.nextpage_post_id = alm.listing.dataset.nextpagePostId;
			alm.addons.nextpage_startpage = parseInt(alm.listing.dataset.nextpageStartpage);
			alm.addons.nextpage_title_template = alm.listing.dataset.nextpageTitleTemplate;
		}

		// Single Posts add-on
		alm.addons.single_post = alm.listing.dataset.singlePost;
		if (alm.addons.single_post === 'true') {
			alm.addons.single_post_id = alm.listing.dataset.singlePostId;
			alm.addons.single_post_query = alm.listing.dataset.singlePostQuery;
			alm.addons.single_post_order = alm.listing.dataset.singlePostOrder === undefined ? 'previous' : alm.listing.dataset.singlePostOrder;
			alm.addons.single_post_init_id = alm.listing.dataset.singlePostId;
			alm.addons.single_post_taxonomy = alm.listing.dataset.singlePostTaxonomy === undefined ? '' : alm.listing.dataset.singlePostTaxonomy;
			alm.addons.single_post_excluded_terms = alm.listing.dataset.singlePostExcludedTerms === undefined ? '' : alm.listing.dataset.singlePostExcludedTerms;
			alm.addons.single_post_progress_bar = alm.listing.dataset.singlePostProgressBar === undefined ? '' : alm.listing.dataset.singlePostProgressBar;
			alm.addons.single_post_target = alm.listing.dataset.singlePostTarget === undefined ? '' : alm.listing.dataset.singlePostTarget;
			alm.addons.single_post_preview = alm.listing.dataset.singlePostPreview === undefined ? false : true;

			if (alm.addons.single_post_preview) {
				const singlePostPreviewData = alm.listing.dataset.singlePostPreview.split(':');
				alm.addons.single_post_preview_data = {
					button_label: singlePostPreviewData[0] ? singlePostPreviewData[0] : 'Continue Reading',
					height: singlePostPreviewData[1] ? singlePostPreviewData[1] : 500,
					element: singlePostPreviewData[2] ? singlePostPreviewData[2] : 'default',
					className: 'alm-single-post--preview',
				};
			}
		}

		// Comments add-on
		alm.addons.comments = alm.listing.dataset.comments ? alm.listing.dataset.comments : false;
		if (alm.addons.comments === 'true') {
			alm.addons.comments_post_id = alm.listing.dataset.comments_post_id; // current post id
			alm.addons.comments_per_page = alm.listing.dataset.comments_per_page;
			alm.addons.comments_per_page = alm.addons.comments_per_page === undefined ? '5' : alm.addons.comments_per_page;
			alm.addons.comments_type = alm.listing.dataset.comments_type;
			alm.addons.comments_style = alm.listing.dataset.comments_style;
			alm.addons.comments_template = alm.listing.dataset.comments_template;
			alm.addons.comments_callback = alm.listing.dataset.comments_callback;
		}

		alm.addons.filters = alm.listing.dataset.filters;
		alm.addons.seo = alm.listing.dataset.seo;

		// Preloaded
		alm.addons.preloaded = alm.listing.dataset.preloaded; // Preloaded add-on
		alm.addons.preloaded_amount = alm.listing.dataset.preloadedAmount ? alm.listing.dataset.preloadedAmount : 0;

		// Users
		alm.addons.users = alm.listing.dataset.users === 'true' ? true : false; // Users add-on
		if (alm.addons.users) {
			// Override paging params for users
			alm.orginal_posts_per_page = alm.listing.dataset.usersPerPage;
			alm.posts_per_page = alm.listing.dataset.usersPerPage;
		}

		// Extension Shortcode Params

		// REST API.
		alm.extensions.restapi = alm.listing.dataset.restapi === 'true' ? true : false;
		if (alm.extensions.restapi) {
			alm.extensions.restapi_base_url = alm.listing.dataset.restapiBaseUrl;
			alm.extensions.restapi_namespace = alm.listing.dataset.restapiNamespace;
			alm.extensions.restapi_endpoint = alm.listing.dataset.restapiEndpoint;
			alm.extensions.restapi_template_id = alm.listing.dataset.restapiTemplateId;
			alm.extensions.restapi_debug = alm.listing.dataset.restapiDebug;
		}

		// ACF.
		alm.extensions.acf = alm.listing.dataset.acf === 'true' ? true : false;
		if (alm.extensions.acf) {
			alm.extensions.acf_field_type = alm.listing.dataset.acfFieldType;
			alm.extensions.acf_field_name = alm.listing.dataset.acfFieldName;
			alm.extensions.acf_parent_field_name = alm.listing.dataset.acfParentFieldName;
			alm.extensions.acf_row_index = alm.listing.dataset.acfRowIndex;
			alm.extensions.acf_post_id = alm.listing.dataset.acfPostId;
			// if field type, name or post ID is empty.
			if (alm.extensions.acf_field_type === undefined || alm.extensions.acf_field_name === undefined || alm.extensions.acf_post_id === undefined) {
				alm.extensions.acf = false;
			}
		}

		// Term Query.
		alm.extensions.term_query = alm.listing.dataset.termQuery === 'true' ? true : false;
		if (alm.extensions.term_query) {
			alm.extensions.term_query_taxonomy = alm.listing.dataset.termQueryTaxonomy;
			alm.extensions.term_query_hide_empty = alm.listing.dataset.termQueryHideEmpty;
			alm.extensions.term_query_number = alm.listing.dataset.termQueryNumber;
		}

		// Paging.
		alm.addons.paging = alm.listing.dataset.paging;
		if (alm.addons.paging === 'true') {
			alm.addons.paging = true;
			alm.addons.paging_init = true;
			alm.addons.paging_controls = alm.listing.dataset.pagingControls === 'true' ? true : false;
			alm.addons.paging_show_at_most = alm.listing.dataset.pagingShowAtMost;
			alm.addons.paging_classes = alm.listing.dataset.pagingClasses;
			alm.addons.paging_show_at_most = alm.addons.paging_show_at_most === undefined ? 7 : alm.addons.paging_show_at_most;

			alm.addons.paging_first_label = alm.listing.dataset.pagingFirstLabel;
			alm.addons.paging_previous_label = alm.listing.dataset.pagingPreviousLabel;
			alm.addons.paging_next_label = alm.listing.dataset.pagingNextLabel;
			alm.addons.paging_last_label = alm.listing.dataset.pagingLastLabel;

			alm.addons.paging_scroll = alm.listing.dataset.pagingScroll ? alm.listing.dataset.pagingScroll : false;
			alm.addons.paging_scrolltop = alm.listing.dataset.pagingScrolltop ? parseInt(alm.listing.dataset.pagingScrolltop) : 100;

			// If preloaded, pause ALM
			alm.pause = alm.addons.preloaded === 'true' ? true : alm.pause;
		} else {
			alm.addons.paging = false;
		}

		// Filters
		if (alm.addons.filters === 'true') {
			alm.addons.filters = true;
			alm.addons.filters_url = alm.listing.dataset.filtersUrl === 'true' ? true : false;
			alm.addons.filters_target = alm.listing.dataset.filtersTarget ? alm.listing.dataset.filtersTarget : false;
			alm.addons.filters_paging = alm.listing.dataset.filtersPaging === 'true' ? true : false;
			alm.addons.filters_scroll = alm.listing.dataset.filtersScroll === 'true' ? true : false;
			alm.addons.filters_scrolltop = alm.listing.dataset.filtersScrolltop ? alm.listing.dataset.filtersScrolltop : '30';
			alm.addons.filters_debug = alm.listing.dataset.filtersDebug;
			alm.addons.filters_startpage = 0;
			alm.facets = alm.listing.dataset.facets === 'true' ? true : false;

			// Display warning when `filters_target` parameter is missing.
			if (!alm.addons.filters_target) {
				console.warn(
					'Ajax Load More: Unable to locate a target for Filters. Make sure you set a target parameter in the core Ajax Load More shortcode - e.g. [ajax_load_more filters="true" target="filters"]'
				);
			}

			// Get Paged Querystring Val
			const page = getParameterByName('pg');
			alm.addons.filters_startpage = page !== null ? parseInt(page) : 0;

			// If not Paging add-on
			if (!alm.addons.paging && alm.addons.filters_startpage > 0) {
				alm.posts_per_page = alm.posts_per_page * alm.addons.filters_startpage;
				alm.isPaged = alm.addons.filters_startpage > 0 ? true : false;
			}
		} else {
			alm.addons.filters = false;
		}

		/* REST API */
		if (alm.extensions.restapi) {
			alm.extensions.restapi_debug = alm.extensions.restapi_debug === undefined ? false : alm.extensions.restapi_debug;
			alm.extensions.restapi = alm.extensions.restapi_template_id === '' ? false : alm.extensions.restapi;
		}

		/* Preloaded */
		if (alm.addons.preloaded === 'true') {
			// Preloaded Amount
			alm.addons.preloaded_amount = alm.addons.preloaded_amount === undefined ? alm.posts_per_page : alm.addons.preloaded_amount;
			if (alm?.localize?.total_posts !== null) {
				// Disable ALM if total_posts is equal to or less than preloaded_amount.
				if (parseInt(alm.localize.total_posts) <= parseInt(alm.addons.preloaded_amount)) {
					alm.addons.preloaded_total_posts = alm.localize.total_posts;
					alm.disable_ajax = true;
				}
			}
		} else {
			alm.addons.preloaded = 'false';
		}
		/* End Preloaded  */

		/* SEO */
		alm.addons.seo = alm?.addons?.seo === 'true' ? true : false;
		if (alm.addons.seo) {
			alm.addons.seo_offset = alm.listing.dataset.seoOffset || 0;
			alm.addons.seo_permalink = alm.listing.dataset.seoPermalink;
			alm.addons.seo_pageview = alm.listing.dataset.seoPageview;
			alm.addons.seo_trailing_slash = alm.listing.dataset.seoTrailingSlash === 'false' ? '' : '/';
			alm.addons.seo_leading_slash = alm.listing.dataset.seoLeadingSlash === 'true' ? '/' : '';
		}
		alm.start_page = alm.listing.dataset.seoStartPage ? alm.listing.dataset.seoStartPage : '';

		if (alm.start_page) {
			alm.start_page = parseInt(alm.start_page);
			alm.addons.seo_scroll = alm.listing.dataset.seoScroll;
			alm.addons.seo_scrolltop = alm.listing.dataset.seoScrolltop;
			alm.addons.seo_controls = alm.listing.dataset.seoControls;
			alm.isPaged = false;
			if (alm.start_page > 1) {
				alm.isPaged = true; // Is this a paged page > 1 ?
				alm.posts_per_page = alm.start_page * alm.posts_per_page;
			}
			if (alm.addons.paging) {
				// If paging, reset posts_per_page
				alm.posts_per_page = alm.orginal_posts_per_page;
			}
		} else {
			alm.start_page = 1;
		}
		/* End SEO  */

		/* Nextpage */
		if (alm.addons.nextpage === 'true') {
			alm.addons.nextpage = true;
			alm.posts_per_page = 1;

			if (alm.addons.nextpage_urls === undefined) {
				alm.addons.nextpage_urls = 'true';
			}
			if (alm.addons.nextpage_scroll === undefined) {
				alm.addons.nextpage_scroll = 'false:30';
			}
			if (alm.addons.nextpage_post_id === undefined) {
				alm.addons.nextpage = false;
				alm.addons.nextpage_post_id = null;
			}
			if (alm.addons.nextpage_startpage === undefined) {
				alm.addons.nextpage_startpage = 1;
			}
			if (alm.addons.nextpage_startpage > 1) {
				alm.isPaged = true;
			}
			alm.addons.nextpage_postTitle = alm.listing.dataset.nextpagePostTitle;
		} else {
			alm.addons.nextpage = false;
		}
		/* End Nextpage  */

		/* Single Post */
		if (alm.addons.single_post === 'true') {
			alm.addons.single_post = true;
			alm.addons.single_post_permalink = '';
			alm.addons.single_post_title = '';
			alm.addons.single_post_slug = '';
			alm.addons.single_post_cache = false;
			alm.addons.single_post_title_template = alm.listing.dataset.singlePostTitleTemplate;
			alm.addons.single_post_siteTitle = alm.listing.dataset.singlePostSiteTitle;
			alm.addons.single_post_siteTagline = alm.listing.dataset.singlePostSiteTagline;
			alm.addons.single_post_pageview = alm.listing.dataset.singlePostPageview;
			alm.addons.single_post_scroll = alm.listing.dataset.singlePostScroll;
			alm.addons.single_post_scroll_speed = alm.listing.dataset.singlePostScrollSpeed;
			alm.addons.single_post_scroll_top = alm.listing.dataset.singlePostScrolltop;
			alm.addons.single_post_controls = alm.listing.dataset.singlePostControls;
		} else {
			alm.addons.single_post = false;
		}
		if (alm.addons.single_post && alm.addons.single_post_id === undefined) {
			alm.addons.single_post_id = '';
			alm.addons.single_post_init_id = '';
		}
		/* End Single Post */

		/* Pause */
		if (alm.pause === undefined || (alm.addons.seo && alm.start_page > 1)) {
			// SEO only.
			alm.pause = false;
		}
		if (alm.addons.preloaded === 'true' && alm.addons.seo && alm.start_page > 0) {
			// SEO + Preloaded.
			alm.pause = false;
		}
		if (alm.addons.filters && alm.addons.filters_startpage > 0) {
			// Filters.
			alm.pause = false;
		}
		if (alm.addons.preloaded === 'true' && alm.addons.paging) {
			alm.pause = true;
		}

		/* Repeater and Theme Repeater */
		alm.repeater = alm.repeater === undefined ? 'default' : alm.repeater;
		alm.theme_repeater = alm.theme_repeater === undefined ? false : alm.theme_repeater;

		/* Max Pages */
		alm.max_pages = alm.max_pages === undefined || alm.max_pages === 0 ? 9999 : alm.max_pages;

		/* Scroll Distance */
		alm.scroll_distance = alm.scroll_distance === undefined ? 100 : alm.scroll_distance;
		alm.scroll_distance_perc = false;
		if (alm.scroll_distance.toString().indexOf('%') === -1) {
			// Standard scroll_distance
			alm.scroll_distance = parseInt(alm.scroll_distance);
		} else {
			// Percentage scroll_distance
			alm.scroll_distance_perc = true;
			alm.scroll_distance_orig = parseInt(alm.scroll_distance);
			alm.scroll_distance = getScrollPercentage(alm);
		}

		/* Masonry */
		if (alm.transition === 'masonry') {
			alm = almMasonryConfig(alm);
		}

		/* Paging */
		if (alm.addons.paging) {
			alm.main.classList.add('loading'); // add loading class to main container
		} else {
			const almChildren = el.childNodes; // Get child nodes of instance [nodeList]
			if (almChildren) {
				const almChildArray = [...almChildren]; // Convert nodeList to array

				// Filter array to find the `.alm-btn-wrap` div
				const btnWrap = almChildArray.filter(function (element) {
					if (!element.classList) {
						// If not element (#text node)
						return false;
					}
					return element.classList.contains('alm-btn-wrap');
				});
				alm.button = btnWrap ? btnWrap[0].querySelector('.alm-load-more-btn') : container.querySelector('.alm-btn-wrap .alm-load-more-btn');
			} else {
				alm.button = container.querySelector('.alm-btn-wrap .alm-load-more-btn');
			}

			// Reset button state
			alm.button.disabled = false;
			alm.button.style.display = '';
		}

		/**
		 * Results Text.
		 * Render "Showing x of y results" text.
		 */
		if (alm.integration.woocommerce) {
			// If woocommerce, get the default woocommerce results block
			alm.resultsText = document.querySelectorAll('.woocommerce-result-count');
			if (alm.resultsText.length < 1) {
				alm.resultsText = document.querySelectorAll('.alm-results-text');
			}
		} else {
			alm.resultsText = document.querySelectorAll('.alm-results-text');
		}

		if (alm.resultsText) {
			alm.resultsText.forEach(function (results) {
				results.setAttribute('aria-live', 'polite');
				results.setAttribute('aria-atomic', 'true');
			});
		} else {
			alm.resultsText = false;
		}

		// Table of Contents: Render 1, 2, 3 etc. when pages are loaded
		alm.tableofcontents = document.querySelector('.alm-toc');
		if (alm.tableofcontents) {
			alm.tableofcontents.setAttribute('aria-live', 'polite');
			alm.tableofcontents.setAttribute('aria-atomic', 'true');
		} else {
			alm.tableofcontents = false;
		}

		/**
		 * The function to get posts via Ajax/HTTP request.
		 *
		 * @since 2.0.0
		 */
		alm.AjaxLoadMore.loadPosts = function () {
			if (alm.disable_ajax) {
				return;
			}

			if (typeof almOnChange === 'function') {
				window.almOnChange(alm);
			}

			// Set loading attributes.
			alm.loading = true;
			showPlaceholder(alm);
			alm.main.classList.add('alm-loading');

			// Add loading styles to buttons.
			if (!alm.addons.paging) {
				if (alm.rel === 'prev') {
					alm.buttonPrev.classList.add('loading');
				} else {
					alm.button.classList.add('loading');
					if (alm.button_loading_label !== false) {
						alm.button.innerHTML = alm.button_loading_label;
					}
				}
			}

			// Dispatch request.
			alm.AjaxLoadMore.ajax();
		};

		/**
		 * The core Ajax Load More Ajax function.
		 *
		 * @param {string} type The type of Ajax request [standard|totalposts|totalpages].
		 * @since 2.6.0
		 */
		alm.AjaxLoadMore.ajax = async function (type = 'standard') {
			// Dispatch HTTP request.
			if (alm.extensions.restapi) {
				alm.AjaxLoadMore.restapi(alm);
			} else {
				// Standard ALM.
				const params = getAjaxParams(alm, type);
				// Cache.
				if (alm?.addons?.cache && !['totalposts', 'totalpages'].includes(type)) {
					// Get cache if available and not a totalposts or totalpages request.
					const cache = await getCache(alm, Object.assign({}, params));
					if (cache) {
						alm.AjaxLoadMore.render(cache);
					} else {
						alm.AjaxLoadMore.adminajax(params, type);
					}
				} else {
					alm.AjaxLoadMore.adminajax(params, type);
				}
			}
		};

		/**
		 * Send request to the admin-ajax.php
		 *
		 * @param {Object} params Query params.
		 * @param {string} type   The type of Ajax request [standard|totalposts|totalpages].
		 * @since 5.0.0
		 */
		alm.AjaxLoadMore.adminajax = async function (params, type) {
			let { ajaxurl } = alm_localize; // Get Ajax URL
			const { cache_slug = '' } = params; // Deconstruct query params.

			/**
			 * Single Posts.
			 * If `single_post_target`, adjust the Ajax URL to the post URL.
			 */
			if (alm.addons.single_post && alm.addons.single_post_target) {
				ajaxurl = `${alm.addons.single_post_permalink}?id=${alm.addons.single_post_id}&alm_page=${parseInt(alm.page) + 1}`;
				params = '';
			}

			// WooCommerce || Elementor.
			if (alm.addons.woocommerce || (alm.addons.elementor && alm.addons.elementor_type === 'posts')) {
				ajaxurl = getButtonURL(alm, alm.rel);
				params = '';
			}

			// Send HTTP request via axios.
			const data = await axios
				.get(ajaxurl, { params })
				.then(function (response) {
					if (alm.addons.single_post && alm.addons.single_post_target) {
						// Single Posts
						return singlePostHTML(alm, response, cache_slug);
					} else if (alm.addons.woocommerce) {
						// WooCommerce.
						return wooGetContent(alm, ajaxurl, response, cache_slug);
					} else if (alm.addons.elementor) {
						// Elementor
						return elementorGetContent(alm, ajaxurl, response, cache_slug);
					}

					// Standard ALM - Get data from response.
					return response.data;
				})
				.catch(function (error) {
					// Error
					alm.AjaxLoadMore.error(error, 'adminajax');
				});

			switch (type) {
				case 'standard':
					alm.AjaxLoadMore.render(data);
					break;

				case 'totalposts':
				case 'totalpages':
					if (alm.addons.paging && alm.addons.nextpage && typeof almBuildPagination === 'function') {
						window.almBuildPagination(data.totalpages, alm);
						alm.totalpages = data.totalpages;
					} else {
						if (alm.addons.paging && typeof almBuildPagination === 'function') {
							window.almBuildPagination(data.totalposts, alm);
						}
					}
					break;
			}
		};

		/**
		 * Send request to the WP REST API
		 *
		 * @param {Object} alm The Ajax Load More object.
		 * @since 5.0.0
		 */
		alm.AjaxLoadMore.restapi = function (alm) {
			const { rest_api_url } = alm_localize; // Get Rest API URL
			const { restapi_base_url, restapi_namespace, restapi_endpoint, restapi_template_id } = alm.extensions;

			const alm_rest_template = wp.template(restapi_template_id);
			const alm_rest_url = `${rest_api_url}${restapi_base_url}/${restapi_namespace}/${restapi_endpoint}`;
			const params = getRestAPIParams(alm);

			axios
				.get(alm_rest_url, { params })
				.then(function (response) {
					// Success
					const results = response.data; // Get data from response
					const { html = null, meta = null } = results;
					const postcount = meta && meta.postcount ? meta.postcount : 0;
					const totalposts = meta && meta.totalposts ? meta.totalposts : 0;

					// loop results to get data from each.
					let data = '';
					for (let i = 0; i < html.length; i++) {
						const result = html[i];
						if (alm.restapi_debug === 'true') {
							console.log(result); // eslint-disable-line no-console
						}
						data += alm_rest_template(result);
					}

					// Create results object.
					const obj = {
						html: data,
						meta: {
							postcount,
							totalposts,
						},
					};
					alm.AjaxLoadMore.render(obj);
				})
				.catch(function (error) {
					// Error
					alm.AjaxLoadMore.error(error, 'restapi');
				});
		};

		// If pagination enabled, run query to get total posts or pages.
		if (alm.addons.paging) {
			if (alm.addons.nextpage) {
				alm.AjaxLoadMore.ajax('totalpages');
			} else {
				alm.AjaxLoadMore.ajax('totalposts');
			}
		}

		/**
		 * Display/render results function.
		 *
		 * @param {Object} data The results of the Ajax request.
		 * @since 2.6.0
		 */
		alm.AjaxLoadMore.render = function (data) {
			if (alm.addons.single_post) {
				alm.AjaxLoadMore.getSinglePost(); // Get single post data for next post.
			}

			// Parse incoming data.
			const { html, meta } = data;
			const total = meta ? parseInt(meta.postcount) : parseInt(alm.posts_per_page);

			// Get current post counts.
			const totalposts = typeof meta !== 'undefined' ? meta.totalposts : alm.posts_per_page * 5;
			alm.totalposts = alm.addons.preloaded === 'true' ? totalposts - alm.addons.preloaded_amount : totalposts;
			alm.postcount = alm.addons.paging ? total : alm.postcount + total;

			if (!meta) {
				// Display warning if `meta` is missing.
				console.warn(
					'Ajax Load More: Unable to access `meta` object in Ajax response. There may be an issue in your Repeater Template or another hook causing interference.'
				);
			}

			// Set alm.html as plain text return
			alm.html = alm.container_type === 'table' ? html : html;

			// First Run Only
			if (alm.init) {
				// Set Meta
				if (meta) {
					alm.main.dataset.totalPosts = meta.totalposts ? meta.totalposts : 0;
				}

				// Paging
				if (alm.addons.paging && total > 0) {
					// Add paging containers and content
					alm.AjaxLoadMore.pagingInit(html);
				}

				// ALM Empty
				if (total === 0) {
					if (alm.addons.paging) {
						if (typeof almPagingEmpty === 'function') {
							window.almPagingEmpty(alm);
						}
					}
					if (typeof almEmpty === 'function') {
						window.almEmpty(alm);
					}
					if (alm.no_results) {
						setTimeout(function () {
							almNoResults(alm.content, alm.no_results);
						}, alm.speed + 10);
					}
				}

				// isPaged
				if (alm.isPaged) {
					// Reset the posts_per_page parameter
					alm.posts_per_page = alm.addons.users ? alm.listing.dataset.usersPerPage : alm.listing.dataset.postsPerPage; // Users
					alm.posts_per_page = alm.addons.nextpage ? 1 : alm.posts_per_page; // NextPage

					// SEO add-on
					alm.page = alm.start_page ? alm.start_page - 1 : alm.page; // Set new page #

					// Filters add-on
					if (alm.addons.filters) {
						if (alm.addons.filters_startpage > 0) {
							alm.page = alm.addons.filters_startpage - 1; // Set new page #
							alm.posts_per_page = alm.listing.dataset.postsPerPage; // Reset `filters-startpage` data after the first run
						}
					}
				}
			}

			/**
			 * Set Filter Facets.
			 */
			if (alm.addons.filters && alm.facets && data.facets && typeof almFiltersFacets === 'function') {
				window.almFiltersFacets(data.facets);
			}

			/**
			 * Display alm_debug results.
			 */
			almDebug(alm);

			/**
			 * Set localized variables and Results Text.
			 */
			(async () => {
				await setLocalizedVars(alm);
			})();

			// Get all returned data as an array of DOM nodes.
			let nodes = alm.container_type === 'table' ? tableParser(alm.html) : almDomParser(alm.html);
			alm.last_loaded = nodes;

			// Render results.
			if (total > 0) {
				/**
				 * WooCommerce || Elementor Add-on
				 */
				if (alm.addons.woocommerce || alm.addons.elementor) {
					const temp = document.createElement('div');
					temp.innerHTML = html;

					(async function () {
						if (alm.addons.woocommerce) {
							await woocommerce(temp, alm);
							woocommerceLoaded(alm);
						}
						if (alm.addons.elementor) {
							await elementor(temp, alm);
							elementorLoaded(alm);
						}
					})().catch((e) => {
						if (alm.addons.woocommerce) {
							console.warn('Ajax Load More: There was an error loading woocommerce products.', e);
						}
						if (alm.addons.elementor) {
							console.warn('Ajax Load More: There was an error loading elementor items.', e);
						}
					});

					alm.init = false;
					return;
				}

				if (!alm.addons.paging) {
					nodes = formatHTML(alm, nodes);

					/**
					 * Transition Display.
					 */
					switch (alm.transition) {
						case 'masonry':
							appendResults(alm, nodes);
							alm.el = alm.listing;

							// Wrap almMasonry in anonymous async/await function
							(async function () {
								await almMasonry(alm, alm.init, alm_is_filtering);
								alm.masonry.init = false;
								triggerWindowResize();
								if (typeof almComplete === 'function') {
									window.almComplete(alm);
								}
							})().catch(() => {
								console.error('There was an error with ALM Masonry'); //eslint-disable-line no-console
							});
							break;

						default:
							appendResults(alm, nodes);
							break;
					}
				} else {
					// Paging
					if (!alm.init) {
						// Paging container.
						const pagingContent = alm.listing.querySelector('.alm-paging-content');

						if (pagingContent) {
							almFadeOut(pagingContent, alm.speed);
							pagingContent.style.outline = 'none';
							alm.main.classList.remove('alm-loading');

							setTimeout(function () {
								pagingContent.style.opacity = 0;
								pagingContent.innerHTML = alm.html;

								imagesLoaded(pagingContent, function () {
									// Delay for effect
									alm.AjaxLoadMore.triggerAddons(alm);
									almFadeIn(pagingContent, alm.speed);

									// Remove opacity on element to fix CSS transition
									setTimeout(function () {
										pagingContent.style.opacity = '';

										// Insert Script
										insertScript.init(pagingContent);
									}, parseInt(alm.speed) + 10);

									// Paging addon
									if (typeof almOnPagingComplete === 'function') {
										window.almOnPagingComplete(alm);
									}
								});
							}, parseInt(alm.speed) + 25);
						}
					} else {
						setTimeout(function () {
							alm.main.classList.remove('alm-loading');
							alm.AjaxLoadMore.triggerAddons(alm);
						}, alm.speed);
					}
					// End Paging
				}

				// ALM Loaded, run complete callbacks
				imagesLoaded(alm.listing, function () {
					// Nested ALM.
					alm.AjaxLoadMore.nested();

					// Trigger all inline <script /> tags in templates.
					insertScript.init(alm.listing);

					// Trigger almComplete
					if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
						window.almComplete(alm);
					}

					// Filters Add-on Complete
					if (alm_is_filtering && alm.addons.filters) {
						if (typeof almFiltersAddonComplete === 'function') {
							almFiltersAddonComplete(el);
						}
					}

					/**
					 * ALM Done.
					 */
					if (!alm.addons.single_post) {
						if (alm.addons.nextpage) {
							// Nextpage.
							if (alm.postcount + alm.addons.nextpage_startpage >= alm.totalposts) {
								alm.AjaxLoadMore.triggerDone();
							}
						} else {
							if (alm.postcount >= alm.totalposts) {
								alm.AjaxLoadMore.triggerDone();
							}
						}
					}

					alm_is_filtering = false;
				});
				// End ALM Loaded

				// Filters onLoad
				if (typeof almFiltersOnload === 'function' && alm.init) {
					window.almFiltersOnload(alm);
				}
			} else {
				/**
				 * No results from Ajax
				 */
				alm.AjaxLoadMore.noresults();
			}

			// Destroy After
			if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
				let currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
				currentPage = alm.addons.preloaded === 'true' ? currentPage++ : currentPage; // Add 1 for preloaded
				if (parseInt(currentPage) === parseInt(alm.destroy_after)) {
					// Disable ALM if page = alm.destroy_after value.
					alm.AjaxLoadMore.destroyed();
				}
			}

			/**
			 * Display Table of Contents
			 */
			tableOfContents(alm, alm.init);

			/**
			 * Set Focus for accessibility.
			 */
			if (alm?.last_loaded?.length) {
				setFocus(alm, alm.last_loaded[0], total, alm_is_filtering);
			}

			// Remove filtering class
			if (alm.main.classList.contains('alm-is-filtering')) {
				alm.main.classList.remove('alm-is-filtering');
			}

			if (alm.init) {
				alm.main.classList.add('alm-is-loaded'); // Add loaded class to main container.
			}

			// Set init flag
			alm.init = false;
		};

		/**
		 * Function runs when no results are returned.
		 *
		 * @since 5.3.1
		 */
		alm.AjaxLoadMore.noresults = function () {
			if (!alm.addons.paging) {
				// Add .done class, reset btn text
				setTimeout(function () {
					alm.button.classList.remove('loading');
					alm.button.classList.add('done');
				}, alm.speed);
				alm.AjaxLoadMore.resetBtnText();
			}

			// Trigger almComplete
			if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
				window.almComplete(alm);
			}

			// Filters Add-on Complete
			if (alm_is_filtering && alm.addons.filters) {
				if (typeof almFiltersAddonComplete === 'function') {
					almFiltersAddonComplete(el);
				}
				alm_is_filtering = false;
			}

			// Masonry, clear `alm-listing` height
			if (alm.transition === 'masonry') {
				alm.content.style.height = 'auto';
			}

			// ALM Done
			alm.AjaxLoadMore.triggerDone();
		};

		/**
		 * First run for Paging + Preloaded add-ons.
		 * Moves preloaded content into ajax container.
		 *
		 * @param {string} data Results of Ajax request.
		 * @since 2.11.3
		 */
		alm.AjaxLoadMore.pagingPreloadedInit = function (data) {
			data = data === null ? '' : data; // Check for null data object

			// Add paging containers and content
			alm.AjaxLoadMore.pagingInit(data);

			if (!data) {
				if (typeof almPagingEmpty === 'function') {
					window.almPagingEmpty(alm);
				}
				if (typeof almEmpty === 'function') {
					window.almEmpty(alm);
				}
				if (alm.no_results) {
					almNoResults(alm.content, alm.no_results);
				}
			}
		};

		/**
		 * First run for Paging + Next Page add-ons.
		 * Moves .alm-nextpage content into ajax container.
		 *
		 * @param {string} data Results of Ajax request.
		 * @since 2.14.0
		 */
		alm.AjaxLoadMore.pagingNextpageInit = function (data) {
			// Check for null data object
			data = data === null ? '' : data;

			// Add paging containers and content.
			alm.AjaxLoadMore.pagingInit(data);

			if (typeof almSetNextPageVars === 'function') {
				// Set up Nextpage Vars.
				window.almSetNextPageVars(alm);
			}
		};

		/**
		 * First run for Paging to create required containers.
		 *
		 * @param {string} data The Ajax response data/html.
		 * @since 5.0
		 */
		alm.AjaxLoadMore.pagingInit = function (data) {
			data = data === null ? '' : data; // Check for null data object.

			// Create `alm-paging-loading` container.
			const content = document.createElement('div');
			content.setAttribute('class', 'alm-paging-content');
			content.innerHTML = data;

			// Create `alm-paging-content` container.
			const loader = document.createElement('div');
			loader.setAttribute('class', 'alm-paging-loading');

			// Add divs to container.
			alm.listing.appendChild(content);
			alm.listing.appendChild(loader);

			// Insert Script.
			insertScript.init(content);

			// Reset button text.
			alm.AjaxLoadMore.resetBtnText();

			// Delay reveal of paging to avoid positioning issues.
			setTimeout(function () {
				if (typeof almFadePageControls === 'function') {
					window.almFadePageControls(alm.btnWrap);
				}

				if (typeof almPagingSetHeight === 'function') {
					window.almPagingSetHeight(content);
				}

				// Deprecated in Paging 5.7.
				if (typeof almOnWindowResize === 'function') {
					window.almOnWindowResize(alm);
				}
				// Remove loading class from main container.
				alm.main.classList.remove('loading');
			}, alm.speed);
		};

		/**
		 *	Automatically trigger nested ALM instances.
		 *
		 * @since 5.0
		 */
		alm.AjaxLoadMore.nested = function () {
			const nested = alm.listing.querySelectorAll('.ajax-load-more-wrap:not(.alm-is-loaded)'); // Get all new instances
			if (nested) {
				[...nested].forEach(function (element) {
					window.almInit(element);
				});
			}
		};

		/**
		 *  Get the Single Posts post ID via ajax.
		 *
		 *  @since 2.7.4
		 */
		alm.AjaxLoadMore.getSinglePost = async function () {
			if (alm.fetchingPreviousPost) {
				return;
			}

			// Set loading flag.
			alm.fetchingPreviousPost = true;

			// Create data params.
			const params = {
				action: 'alm_get_single',
				id: alm.addons.single_post_id,
				initial_id: alm.addons.single_post_init_id,
				order: alm.addons.single_post_order,
				taxonomy: alm.addons.single_post_taxonomy,
				excluded_terms: alm.addons.single_post_excluded_terms,
				post_type: alm.post_type,
				init: alm.addons.single_post_init,
			};

			// Send HTTP request via Axios.
			const singlePostData = await axios
				.get(alm_localize.ajaxurl, { params })
				.then(function (response) {
					// Get data from response.
					const { data } = response;

					if (data.has_previous_post) {
						alm.listing.dataset.singlePostId = data.prev_id; // Update single-post-id on instance
						alm.addons.single_post_id = data.prev_id;
						alm.addons.single_post_permalink = data.prev_permalink;
						alm.addons.single_post_title = data.prev_title;
						alm.addons.single_post_slug = data.prev_slug;
						alm.addons.single_post_cache = data.cache;
					} else {
						alm.addons.single_post_cache = false;
						if (!data.has_previous_post) {
							alm.AjaxLoadMore.triggerDone();
						}
					}
					if (typeof window.almSetSinglePost === 'function') {
						window.almSetSinglePost(alm, data.current_id, data.permalink, data.title);
					}
					alm.fetchingPreviousPost = false;
					alm.addons.single_post_init = false;

					return data;
				})
				.catch(function (error) {
					// Error
					alm.AjaxLoadMore.error(error, 'getSinglePost');
					alm.fetchingPreviousPost = false;
				});

			// Send the response.
			return singlePostData;
		};

		if (alm.addons.single_post_id) {
			alm.fetchingPreviousPost = false;
			alm.addons.single_post_init = true;
		}

		/**
		 * Triggers various add-on functions after load complete.
		 *
		 * @param {Object} alm The ALM object.
		 * @since 2.14.0
		 */
		alm.AjaxLoadMore.triggerAddons = function (alm) {
			if (typeof almSetNextPage === 'function' && alm.addons.nextpage) {
				window.almSetNextPage(alm);
			}
			if (typeof almSEO === 'function' && alm.addons.seo) {
				window.almSEO(alm, false);
			}
			if (typeof almWooCommerce === 'function' && alm.addons.woocommerce) {
				window.almWooCommerce(alm);
			}
			if (typeof almElementor === 'function' && alm.addons.elementor) {
				window.almElementor(alm);
			}
		};

		/**
		 * Fires a set of actions and functions when ALM has no other posts to load.
		 *
		 * @since 2.11.3
		 */
		alm.AjaxLoadMore.triggerDone = function () {
			alm.loading = false;
			alm.finished = true;
			hidePlaceholder(alm);

			if (!alm.addons.paging) {
				// Update button text
				if (alm.button_done_label !== false) {
					setTimeout(function () {
						alm.button.innerHTML = alm.button_done_label;
					}, 75);
				}

				alm.button.classList.add('done');
				alm.button.removeAttribute('rel');
				alm.button.disabled = true;
			}

			// almDone
			if (typeof almDone === 'function') {
				// Delay done until animations complete
				setTimeout(function () {
					window.almDone(alm);
				}, alm.speed + 10);
			}
		};

		/**
		 * Fires a set of actions once ALm Previous hits the first page.
		 *
		 * @since 5.5.0
		 */
		alm.AjaxLoadMore.triggerDonePrev = function () {
			alm.loading = false;
			hidePlaceholder(alm);

			if (!alm.addons.paging) {
				alm.buttonPrev.classList.add('done');
				alm.buttonPrev.removeAttribute('rel');
				alm.buttonPrev.disabled = true;
			}

			// almDonePrev Callback.
			if (typeof almDonePrev === 'function') {
				// Delay done until animations complete
				setTimeout(function () {
					window.almDonePrev(alm);
				}, alm.speed + 10);
			}
		};

		/**
		 * Resets the loading button text after loading has completed.
		 *
		 * @since 2.8.4
		 */
		alm.AjaxLoadMore.resetBtnText = function () {
			if (alm.button_loading_label !== false && !alm.addons.paging) {
				alm.button.innerHTML = alm.button_label;
			}
		};

		/**
		 * Button click handler to load posts.
		 *
		 * @param {Object} e The target button element.
		 * @since 4.2.0
		 */
		alm.AjaxLoadMore.click = function (e) {
			const button = e.currentTarget || e.target;
			alm.rel = 'next';
			if (alm.pause === 'true') {
				alm.pause = false;
				alm.pause_override = false;
				alm.AjaxLoadMore.loadPosts();
			}
			if (!alm.loading && !alm.finished && !button.classList.contains('done')) {
				alm.loading = true;
				alm.page++;
				alm.AjaxLoadMore.loadPosts();
			}
			button.blur(); // Remove button focus
		};

		/**
		 * Button click handler for previous load more.
		 *
		 * @param {Object} e The target button element.
		 * @since 5.5.0
		 */
		alm.AjaxLoadMore.prevClick = function (e) {
			const button = e.currentTarget || e.target;
			e.preventDefault();
			if (!alm.loading && !button.classList.contains('done')) {
				alm.loading = true;
				alm.pagePrev--;
				alm.rel = 'prev';
				alm.AjaxLoadMore.loadPosts();
				button.blur(); // Remove button focus
			}
		};

		/**
		 * Set the Load Previous button to alm object.
		 *
		 * @param {Element} button The button element.
		 * @since 5.5.0
		 */
		alm.AjaxLoadMore.setPreviousButton = function (button) {
			alm.pagePrev = alm.page;
			alm.buttonPrev = button;
		};

		/**
		 * Load More button click event handler.
		 *
		 * @since 1.0.0
		 */
		if (!alm.addons.paging && !alm.fetchingPreviousPost) {
			alm.button.onclick = alm.AjaxLoadMore.click;
		}

		/**
		 * Window resize functions for Paging, Scroll Distance Percentage etc.
		 *
		 * @since 2.1.2
		 */
		if (alm.addons.paging || alm.scroll_distance_perc || alm.scroll_direction === 'horizontal') {
			let resize;
			alm.window.onresize = function () {
				clearTimeout(resize);
				resize = setTimeout(function () {
					if (alm.addons.paging) {
						// Paging
						if (typeof almOnWindowResize === 'function') {
							window.almOnWindowResize(alm);
						}
					}
					if (alm.scroll_distance_perc) {
						alm.scroll_distance = getScrollPercentage(alm);
					}
					if (alm.scroll_direction === 'horizontal') {
						alm.AjaxLoadMore.horizontal();
					}
				}, alm.speed);
			};
		}

		/**
		 * Check to see if element is visible before loading posts.
		 *
		 * @since 2.1.2
		 */
		alm.AjaxLoadMore.isVisible = function () {
			// Check for a width and height to determine visibility
			alm.visible = alm.main.clientWidth > 0 && alm.main.clientHeight > 0 ? true : false;
			return alm.visible;
		};

		/**
		 * Load posts as user scrolls the page.
		 *
		 * @since 1.0
		 */
		alm.AjaxLoadMore.scroll = function () {
			if (alm.timer) {
				clearTimeout(alm.timer);
			}

			alm.timer = setTimeout(function () {
				if (alm.AjaxLoadMore.isVisible() && !alm.fetchingPreviousPost) {
					const trigger = alm.trigger.getBoundingClientRect();
					const btnPos = Math.round(trigger.top - alm.window.innerHeight) + alm.scroll_distance;
					let scrollTrigger = btnPos <= 0 ? true : false;

					// Scroll Container
					if (alm.window !== window) {
						const scrollHeight = alm.main.offsetHeight; // ALM height
						const scrollWidth = alm.main.offsetWidth; // ALM Width
						let scrollPosition = '';
						if (alm.scroll_direction === 'horizontal') {
							// Left/Right
							alm.AjaxLoadMore.horizontal();
							scrollPosition = Math.round(alm.window.scrollLeft + alm.window.offsetWidth - alm.scroll_distance); // How far user has scrolled
							scrollTrigger = scrollWidth <= scrollPosition ? true : false;
						} else {
							// Up/Down
							scrollPosition = Math.round(alm.window.scrollTop + alm.window.offsetHeight - alm.scroll_distance); // How far user has scrolled
							scrollTrigger = scrollHeight <= scrollPosition ? true : false;
						}
					}

					// If Pause && Pause Override
					if (
						!alm.loading &&
						!alm.finished &&
						scrollTrigger &&
						alm.page < alm.max_pages - 1 &&
						alm.proceed &&
						alm.pause === 'true' &&
						alm.pause_override === 'true'
					) {
						alm.button.click();
					}

					// Standard Scroll
					else {
						if (!alm.loading && !alm.finished && scrollTrigger && alm.page < alm.max_pages - 1 && alm.proceed && alm.pause !== 'true') {
							alm.button.click();
						}
					}
				}
			}, 25);
		};

		/**
		 * Add scroll eventlisteners, only when needed.
		 *
		 * @since 5.2.0
		 */
		alm.AjaxLoadMore.scrollSetup = function () {
			if (alm.scroll && !alm.addons.paging) {
				if (alm.scroll_container !== '') {
					// Scroll Container
					alm.window = document.querySelector(alm.scroll_container) ? document.querySelector(alm.scroll_container) : alm.window;
					setTimeout(function () {
						// Delay to allow for ALM container to resize on load.
						alm.AjaxLoadMore.horizontal();
					}, 500);
				}
				alm.window.addEventListener('scroll', alm.AjaxLoadMore.scroll); // Scroll
				alm.window.addEventListener('touchstart', alm.AjaxLoadMore.scroll); // Touch Devices
				alm.window.addEventListener('wheel', function (e) {
					// Mousewheel
					const direction = Math.sign(e.deltaY);
					if (direction > 0) {
						alm.AjaxLoadMore.scroll();
					}
				});
				alm.window.addEventListener('keyup', function (e) {
					const { key } = e;
					switch (key) {
						case 'End':
						case 'PageDown':
							alm.AjaxLoadMore.scroll();
							break;
					}
				});
			}
		};

		/**
		 * Configure horizontal scroll settings.
		 *
		 * @since 5.3.6
		 */
		alm.AjaxLoadMore.horizontal = function () {
			if (alm.scroll_direction === 'horizontal') {
				alm.main.style.width = `${alm.listing.offsetWidth}px`;
			}
		};

		/**
		 * Destroy Ajax Load More functionality.
		 *
		 * @since 3.4.2
		 */
		alm.AjaxLoadMore.destroyed = function () {
			alm.disable_ajax = true;
			if (!alm.addons.paging) {
				alm.button.style.display = 'none';
				alm.AjaxLoadMore.triggerDone();
				if (typeof almDestroyed === 'function') {
					window.almDestroyed(alm);
				}
			}
		};

		/**
		 * Set variables after loading transiton completes.
		 *
		 * @since 3.5
		 */
		alm.AjaxLoadMore.transitionEnd = function () {
			setTimeout(function () {
				alm.AjaxLoadMore.resetBtnText();
				alm.main.classList.remove('alm-loading');
				// Loading button
				if (alm.rel === 'prev') {
					alm.buttonPrev.classList.remove('loading');
				} else {
					alm.button.classList.remove('loading');
				}
				alm.AjaxLoadMore.triggerAddons(alm);
				if (!alm.addons.paging) {
					setTimeout(function () {
						alm.loading = false; // Delay to prevent loading to fast
					}, alm.speed * 3);
				}
			}, 50);
			hidePlaceholder(alm);
		};

		/**
		 * Set individual localized variable.
		 *
		 * @param {string} name
		 * @param {string} value
		 * @since 4.1
		 */
		alm.AjaxLoadMore.setLocalizedVar = function (name = '', value = '') {
			if (alm?.localize && name !== '' && value !== '') {
				alm.localize[name] = value; // Set ALM localize var.
				window[alm.master_id + '_vars'][name] = value; // Update vars.
			}
		};

		/**
		 * Init Ajax load More functionality and add-ons.
		 *
		 * @since 2.0
		 */
		alm.AjaxLoadMore.init = async function () {
			// Preloaded and destroy_after is 1.
			if (alm.addons.preloaded === 'true' && alm.destroy_after === 1) {
				alm.AjaxLoadMore.destroyed();
			}

			if (!alm.addons.paging && !alm.addons.single_post) {
				if (alm.disable_ajax) {
					alm.finished = true;
					alm.button.classList.add('done');
				} else {
					// Set button label.
					alm.button.innerHTML = alm.button_label;

					// If Pause.
					if (alm.pause === 'true') {
						alm.loading = false;
					} else {
						alm.AjaxLoadMore.loadPosts();
					}
				}
			}

			// Single Post Add-on.
			if (alm.addons.single_post) {
				// Add delay for setup and scripts to load.
				setTimeout(async function () {
					await alm.AjaxLoadMore.getSinglePost(); // Set next post on load

					// Trigger done if custom query and no posts to render
					if (alm.addons.single_post_query && alm.addons.single_post_order === '') {
						alm.AjaxLoadMore.triggerDone();
					}

					// Set loading flag to false.
					alm.loading = false;

					// Display Table of Contents
					tableOfContents(alm, true, true);
				}, 200);
			}

			// Preloaded + SEO && !Paging.
			if (alm.addons.preloaded === 'true' && alm.addons.seo && !alm.addons.paging) {
				// Add delay for setup and scripts to load.
				setTimeout(function () {
					if (typeof almSEO === 'function' && alm.start_page < 1) {
						window.almSEO(alm, true);
					}
				}, 200);
			}

			// Preloaded && !Paging.
			if (alm.addons.preloaded === 'true' && !alm.addons.paging) {
				// Add delay for setup and scripts to load.
				setTimeout(function () {
					if (alm.addons.preloaded_total_posts <= parseInt(alm.addons.preloaded_amount)) {
						alm.AjaxLoadMore.triggerDone();
					}
					// almEmpty callback.
					if (alm.addons.preloaded_total_posts === 0) {
						if (typeof almEmpty === 'function') {
							window.almEmpty(alm);
						}
						if (alm.no_results) {
							almNoResults(alm.content, alm.no_results);
						}
					}
				}, alm.speed);
			}

			// Preloaded Add-on ONLY.
			if (alm.addons.preloaded === 'true') {
				if (alm.resultsText) {
					resultsText.almInitResultsText(alm, 'preloaded');
				}

				// Display Table of Contents.
				tableOfContents(alm, alm.init, true);
			}

			// Next Page Add-on.
			if (alm.addons.nextpage) {
				// Check that posts remain on load
				if (alm.listing.querySelector('.alm-nextpage') && !alm.addons.paging) {
					const nextpage_pages = alm.listing.querySelectorAll('.alm-nextpage'); // All Next Page Items.
					if (nextpage_pages) {
						const nextpage_first = nextpage_pages[0];
						const nextpage_total = nextpage_first.dataset.totalPosts ? parseInt(nextpage_first.dataset.totalPosts) : alm?.localize?.total_posts;

						// Disable if last page loaded
						if (nextpage_pages.length === nextpage_total || parseInt(nextpage_first.dataset.id) === nextpage_total) {
							alm.AjaxLoadMore.triggerDone();
						}
					}
				}

				// Results Text.
				if (alm.resultsText) {
					resultsText.almInitResultsText(alm, 'nextpage');
				}

				// Display Table of Contents.
				tableOfContents(alm, alm.init, true);
			}

			// WooCommerce Add-on.
			if (alm.addons.woocommerce) {
				wooInit(alm);

				// Trigger `Done` if `paged is less than `pages`.
				if (alm.addons.woocommerce_settings.paged >= parseInt(alm.addons.woocommerce_settings.pages)) {
					alm.AjaxLoadMore.triggerDone();
				}
			}

			// Elementor Add-on.
			if (alm.addons.elementor && alm.addons.elementor_type && alm.addons.elementor_type === 'posts') {
				elementorInit(alm);

				// Trigger `Done` if `elementor_next_page` is empty
				if (alm.addons.elementor_next_page === '') {
					alm.AjaxLoadMore.triggerDone();
				}
			}

			// Window Load.
			alm.window.addEventListener('load', function () {
				// Masonry & Preloaded.
				if (alm.transition === 'masonry' && alm.addons.preloaded === 'true') {
					// Wrap almMasonry in anonymous async/await function
					(async function () {
						await almMasonry(alm, true, false);
						alm.masonry.init = false;
					})().catch(() => {
						console.error('There was an error with ALM Masonry');
					});
				}

				//  Filters, Facets & Preloaded Facets
				if (alm.addons.preloaded === 'true' && alm.addons.filters && alm.facets) {
					if (typeof almFiltersFacets === 'function') {
						const facets = alm?.localize?.facets;
						if (facets) {
							window.almFiltersFacets(facets);
						}
					}
				}

				// Window Load Callback.
				if (typeof almOnLoad === 'function') {
					window.almOnLoad(alm); // eslint-disable-line
				}
			});

			setPreloadedParams(alm); // Set preloaded params.
		};

		/**
		 * Handle error messages.
		 *
		 * @param {string} error    The error message.
		 * @param {string} location The location the error occured.
		 * @since 2.6.0
		 */
		alm.AjaxLoadMore.error = function (error, location = null) {
			alm.loading = false;
			if (!alm.addons.paging) {
				alm.button.classList.remove('loading');
				alm.AjaxLoadMore.resetBtnText();
			}
			console.warn('Error: ', error);

			if (error.response) {
				// The request was made and the server responded with a status code that falls out of the range of 2xx.
				console.error('Error Msg: ', error.message);
			} else if (error.request) {
				// The request was made but no response was received.
				console.error(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error.
				console.error('Error Msg: ', error.message);
			}

			if (location) {
				console.error('ALM Error started in ' + location);
			}
			if (error.config) {
				console.error('ALM Error Debug: ', error.config);
			}
		};

		/**
		 * Update Current Page.
		 * Note: Callback function triggered from Paging add-on.
		 *
		 * @param {number} current Current page number.
		 * @param {Object} obj     Optional object (Deprecated).
		 * @param {Object} alm     The ALM object.
		 * @since 2.7.0
		 */
		window.almUpdateCurrentPage = function (current, obj, alm) {
			// eslint-disable-line
			alm.page = current;
			alm.page = alm.addons.nextpage && !alm.addons.paging ? alm.page - 1 : alm.page; // Next Page add-on

			const target = alm.listing;
			const data = target?.innerHTML; // Get content

			if (alm.addons.paging_init && alm.addons.preloaded === 'true') {
				// Paging + Preloaded Firstrun.
				if (target) {
					target.innerHTML = ''; // Remove initial data.
					alm.addons.preloaded_amount = 0; // Reset preloaded_amount param.
					alm.AjaxLoadMore.pagingPreloadedInit(data);
				}
				alm.addons.paging_init = false;
				alm.init = false;
			} else if (alm.addons.paging_init && alm.addons.nextpage) {
				// Paging + Next Page on firstrun.
				if (target) {
					target.innerHTML = ''; // Remove initial data.
					alm.AjaxLoadMore.pagingNextpageInit(data);
				}
				alm.addons.paging_init = false;
				alm.init = false;
			} else {
				// Standard Paging
				alm.AjaxLoadMore.loadPosts();
			}
		};

		/**
		 * Get the parent ALM container.
		 *
		 * @return {HTMLElement} The ALM listing container.
		 * @since 2.7.0
		 */
		window.almGetParentContainer = function () {
			return alm?.listing;
		};

		/**
		 * Returns the current ALM obj.
		 *
		 * @param {string} obj The ALM object to return.
		 * @return {Object}    The ALM object.
		 * @since 2.7.0
		 */
		window.almGetObj = function (obj = '') {
			if (obj) {
				return alm[obj]; // Return specific param.
			}
			return alm; // Return the entire alm object
		};

		/**
		 * Trigger ajaxloadmore from any element on page.
		 *
		 * @since 2.12.0
		 */
		window.almTriggerClick = function () {
			alm.button.click();
		};

		// Delay to prevent immediate loading of posts on initial page load via scroll.
		setTimeout(function () {
			alm.proceed = true;
			alm.AjaxLoadMore.scrollSetup();
		}, 500);

		// Init Ajax Load More
		alm.AjaxLoadMore.init();
	};

	// End ajaxloadmore

	/**
	 * Initiate instance of Ajax load More
	 *
	 * @param {HTMLElement} el The ALM element.
	 * @param {number}      id The ALM instance ID.
	 * @since 5.0
	 */
	window.almInit = function (el, id = 0) {
		new ajaxloadmore(el, id);
	};

	/**
	 * Initiate Ajax load More if div is present on screen
	 *
	 * @since 2.1.2
	 */
	const alm_instances = document.querySelectorAll('.ajax-load-more-wrap');
	if (alm_instances.length) {
		[...alm_instances].forEach((alm, index) => {
			new ajaxloadmore(alm, index);
		});
	}
})();

/**
 * Filter an Ajax Load More instance.
 *
 * @param {string} transition The transition type.
 * @param {string} speed      The speed of the filter transition.
 * @param {Object} data       Query data as an object.
 * @since 5.0
 */
export const filter = function (transition = 'fade', speed = '200', data = '') {
	if (!transition || !speed || !data) {
		return false;
	}
	alm_is_filtering = true;
	almFilter(transition, speed, data, 'filter');
};

/**
 * Reset an Ajax Load More instance.
 *
 * @since 5.3.8
 * @param {Object} props The ALM props as an object.
 */
export const reset = function (props = {}) {
	let data = {};
	alm_is_filtering = true;

	if (props && props.target) {
		data = {
			target,
		};
	}

	if (props && props.type === 'woocommerce') {
		// WooCommerce
		(async function () {
			const instance = document.querySelector('.ajax-load-more-wrap .alm-listing[data-woo="true"]'); // Get ALM instance
			const settings = await wooReset(); // Get WooCommerce `settings` via Ajax
			if (settings) {
				instance.dataset.wooSettings = settings; // Update data atts
				almFilter('fade', '100', data, 'filter');
			}
		})().catch(() => {
			console.warn('Ajax Load More: There was an issue resetting the Ajax Load More instance.');
		});
	} else {
		// Standard ALM
		almFilter('fade', '200', data, 'filter');
	}
};

/**
 * Get the total post count in the current query by ALM instance ID.
 * Note: Uses localized ALM variables.
 *
 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
 * @param {string} id An optional Ajax Load More ID.
 * @return {number}   The results from the localized variable.
 */
export const getPostCount = function (id = '') {
	return getTotals('post_count', id);
};

/**
 * Get the total number of posts by ALM instance ID.
 * Note: Uses localized ALM variables.
 *
 * @param {string} id An optional Ajax Load More ID.
 * @return {number}   The results from the localized variable.
 */
export const getTotalPosts = function (id = '') {
	return getTotals('total_posts', id);
};

/**
 * Get the total posts remaining in the current query by ALM instance ID.
 * Note: Uses localized ALM variables.
 *
 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
 * @param {string} id An optional Ajax Load More ID.
 * @return {number}   The total remaining posts.
 */
export const getTotalRemaining = function (id = '') {
	return getTotals('remaining', id);
};

/**
 * Track Page Views and Analytics
 *
 * @since 5.0
 * @param {string} type The add-on type that is triggering the analytics.
 */
export const analytics = function (type = '') {
	const { pathname = '', search = '' } = window.location;

	/**
	 * ALM Callback Function (URL Change)
	 *
	 * @see https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/#url-update
	 */
	if (typeof almUrlUpdate === 'function') {
		window.almUrlUpdate(pathname + search, type);
	}

	/**
	 * ALM Callback Function
	 */
	if (typeof almAnalytics === 'function') {
		window.almAnalytics(pathname + search, type);
	}
};

/**
 * Trigger Ajax Load More from other events.
 *
 * @since 5.0
 * @param {Element} el
 */
export const start = function (el) {
	if (!el) {
		return false;
	}
	window.almInit(el);
};

/**
 * Scroll window to position (global function).
 *
 * @since 5.0
 * @param {string} position The position to scroll.
 */
export const almScroll = function (position) {
	if (!position) {
		return false;
	}
	window.scrollTo({
		top: position,
		behavior: 'smooth',
	});
};

/**
 * Get the current top/left coordinates of an element relative to the document.
 *
 * @since 5.0
 * @param {HTMLElement} el The HTML element.
 * @return {Object}        The top/left coordinates.
 */
export const getOffset = function (el = null) {
	if (!el) {
		return false;
	}
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

/**
 * Trigger a click event to load Ajax Load More content.
 *
 * @param {string} id The Ajax Load More ID.
 */
export const click = function (id = '') {
	let alm = document.querySelector('.ajax-load-more-wrap');
	let button = '';
	if (!id && alm) {
		// Default ALM element.
		button = alm.querySelector('button.alm-load-more-btn');
		if (button) {
			button.click();
		}
	} else {
		// Ajax Load More by ID.
		alm = document.querySelector(`.ajax-load-more-wrap[data-id="${id}"]`);
		if (alm) {
			button = alm.querySelector('button.alm-load-more-btn');
			if (button) {
				button.click();
			}
		}
	}
};
