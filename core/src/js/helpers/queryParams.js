/**
 * almGetAjaxParams
 * Build the data object to send with the Ajax request
 *
 * @param alm            object
 * @param action         string
 * @param queryType      string
 * @since 3.6
 */

export function almGetAjaxParams(alm, action, queryType) {
	// Defaults
	let data = {
		id: alm.id,
		post_id: alm.post_id,
		slug: alm.slug,
		canonical_url: encodeURIComponent(alm.canonical_url),
		posts_per_page: alm.posts_per_page,
		page: alm.page,
		offset: alm.offset,
		post_type: alm.post_type,
		repeater: alm.repeater,
		seo_start_page: alm.start_page,
	};

	// Addons & Extensions

	if (alm.theme_repeater) {
		data.theme_repeater = alm.theme_repeater;
	}
	if (alm.addons.filters) {
		data.filters = alm.addons.filters;
		data.filters_startpage = alm.addons.filters_startpage;
	}
	if (alm.addons.paging) {
		data.paging = alm.addons.paging;
	}
	if (alm.addons.preloaded) {
		data.preloaded = alm.addons.preloaded;
		data.preloaded_amount = alm.addons.preloaded_amount;
	}
	if (alm.addons.cache === 'true') {
		data.cache_id = alm.addons.cache_id;
		data.cache_logged_in = alm.addons.cache_logged_in;
	}
	if (alm.acf_array) {
		data.acf = alm.acf_array;
	}
	if (alm.term_query_array) {
		data.term_query = alm.term_query_array;
	}
	if (alm.cta_array) {
		data.cta = alm.cta_array;
	}
	if (alm.comments_array) {
		data.comments = alm.comments_array;
	}
	if (alm.nextpage_array) {
		data.nextpage = alm.nextpage_array;
	}
	if (alm.single_post_array) {
		data.single_post = alm.single_post_array;
	}
	if (alm.users_array) {
		data.users = alm.users_array;
	}

	// Query data
	if (alm.listing.dataset.lang) {
		data.lang = alm.listing.dataset.lang;
	}
	if (alm.listing.dataset.stickyPosts) {
		data.sticky_posts = alm.listing.dataset.stickyPosts;
	}
	if (alm.listing.dataset.postFormat) {
		data.post_format = alm.listing.dataset.postFormat;
	}
	if (alm.listing.dataset.category) {
		data.category = alm.listing.dataset.category;
	}
	if (alm.listing.dataset.categoryAnd) {
		data.category__and = alm.listing.dataset.categoryAnd;
	}
	if (alm.listing.dataset.categoryNotIn) {
		data.category__not_in = alm.listing.dataset.categoryNotIn;
	}
	if (alm.listing.dataset.tag) {
		data.tag = alm.listing.dataset.tag;
	}
	if (alm.listing.dataset.tagAnd) {
		data.tag__and = alm.listing.dataset.tagAnd;
	}
	if (alm.listing.dataset.tagNotIn) {
		data.tag__not_in = alm.listing.dataset.tagNotIn;
	}
	if (alm.listing.dataset.taxonomy) {
		data.taxonomy = alm.listing.dataset.taxonomy;
	}
	if (alm.listing.dataset.taxonomyTerms) {
		data.taxonomy_terms = alm.listing.dataset.taxonomyTerms;
	}
	if (alm.listing.dataset.taxonomyOperator) {
		data.taxonomy_operator = alm.listing.dataset.taxonomyOperator;
	}
	if (alm.listing.dataset.taxonomyRelation) {
		data.taxonomy_relation = alm.listing.dataset.taxonomyRelation;
	}
	if (alm.listing.dataset.metaKey) {
		data.meta_key = alm.listing.dataset.metaKey;
	}
	if (alm.listing.dataset.metaValue) {
		data.meta_value = alm.listing.dataset.metaValue;
	}
	if (alm.listing.dataset.metaCompare) {
		data.meta_compare = alm.listing.dataset.metaCompare;
	}
	if (alm.listing.dataset.metaRelation) {
		data.meta_relation = alm.listing.dataset.metaRelation;
	}
	if (alm.listing.dataset.metaType) {
		data.meta_type = alm.listing.dataset.metaType;
	}
	if (alm.listing.dataset.author) {
		data.author = alm.listing.dataset.author;
	}
	if (alm.listing.dataset.year) {
		data.year = alm.listing.dataset.year;
	}
	if (alm.listing.dataset.month) {
		data.month = alm.listing.dataset.month;
	}
	if (alm.listing.dataset.day) {
		data.day = alm.listing.dataset.day;
	}
	if (alm.listing.dataset.order) {
		data.order = alm.listing.dataset.order;
	}
	if (alm.listing.dataset.orderby) {
		data.orderby = alm.listing.dataset.orderby;
	}
	if (alm.listing.dataset.postStatus) {
		data.post_status = alm.listing.dataset.postStatus;
	}
	if (alm.listing.dataset.postIn) {
		data.post__in = alm.listing.dataset.postIn;
	}
	if (alm.listing.dataset.postNotIn) {
		data.post__not_in = alm.listing.dataset.postNotIn;
	}
	if (alm.listing.dataset.exclude) {
		data.exclude = alm.listing.dataset.exclude;
	}
	if (alm.listing.dataset.search) {
		data.search = alm.listing.dataset.search;
	}
	if (alm.listing.dataset.s) {
		data.search = alm.listing.dataset.s;
	}
	if (alm.listing.dataset.customArgs) {
		data.custom_args = escape(alm.listing.dataset.customArgs);
	}
	if (alm.listing.dataset.vars) {
		data.vars = escape(alm.listing.dataset.vars);
	}

	data.action = action;
	data.query_type = queryType;

	return data;
}

/**
 * almGetRestParams
 * Build the REST API data object to send with REST API request
 *
 * @param alm            object
 * @since 3.6
 */
export function almGetRestParams(alm) {
	let data = {
		id: alm.id,
		post_id: alm.post_id,
		posts_per_page: alm.posts_per_page,
		page: alm.page,
		offset: alm.offset,
		slug: alm.slug,
		canonical_url: encodeURIComponent(alm.canonical_url),
		post_type: alm.post_type,
		post_format: alm.listing.dataset.postFormat,
		category: alm.listing.dataset.category,
		category__not_in: alm.listing.dataset.categoryNotIn,
		tag: alm.listing.dataset.tag,
		tag__not_in: alm.listing.dataset.tagNotIn,
		taxonomy: alm.listing.dataset.taxonomy,
		taxonomy_terms: alm.listing.dataset.taxonomyTerms,
		taxonomy_operator: alm.listing.dataset.taxonomyOperator,
		taxonomy_relation: alm.listing.dataset.taxonomyRelation,
		meta_key: alm.listing.dataset.metaKey,
		meta_value: alm.listing.dataset.metaValue,
		meta_compare: alm.listing.dataset.metaCompare,
		meta_relation: alm.listing.dataset.metaRelation,
		meta_type: alm.listing.dataset.metaType,
		author: alm.listing.dataset.author,
		year: alm.listing.dataset.year,
		month: alm.listing.dataset.month,
		day: alm.listing.dataset.day,
		post_status: alm.listing.dataset.postStatus,
		order: alm.listing.dataset.order,
		orderby: alm.listing.dataset.orderby,
		post__in: alm.listing.dataset.postIn,
		post__not_in: alm.listing.dataset.postNotIn,
		search: alm.listing.dataset.search,
		s: alm.listing.dataset.s,
		custom_args: alm.listing.dataset.customArgs,
		vars: alm.listing.dataset.vars,
		lang: alm.lang,
		preloaded: alm.addons.preloaded,
		preloaded_amount: alm.addons.preloaded_amount,
		seo_start_page: alm.start_page,
	};

	return data;
}
