/**
 * Display Ajax Load More debug results.
 *
 * @see https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug
 * @param {object} alm ALM object.
 * @since 5.1.6
 */
export default function almDebug(alm) {
	if (alm && alm.debug) {
		let obj = {
			query: alm.debug,
			localize: alm.localize,
		};
		console.log('ALM Debug:', obj);
	}
}
