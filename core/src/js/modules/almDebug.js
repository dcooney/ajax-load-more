/**
 * Display Ajax Load More debug results.
 *
 * @see https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug
 * @param {object} alm     Global alm object
 * @since 5.1.6
 */
let almDebug = function (alm) {
	if (alm && alm.debug) {
		let obj = {
			query: alm.debug,
			localize: alm.localize,
		};
		console.log('ALM Debug:', obj);
	}
};

export default almDebug;
