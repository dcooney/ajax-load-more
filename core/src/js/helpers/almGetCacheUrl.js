/**
 * Generate the cache page URL for GET request
 *
 * @param {*} el | Target element to append items
 * @param {*} array | An array of elements
 * @since 5.0
 */
let almGetCacheUrl = function( alm ) {
      
   if(!alm){
      return false;
   }
   
	let cache_url = '';
	let ext = '.html';
	
	// SEO Add-on
   if (alm.init && alm.addons.seo && alm.isPaged) {
      // If the request is a paged URL (/page/3/)
      let firstpage = '1';
      cache_url = alm.addons.cache_path + alm.addons.cache_id + '/page-' + firstpage + '-' + alm.start_page + ext;
      
   } 
   
   // Nextpage add-on
   else if (alm.addons.nextpage) {
      
      let nextpage_cache_url;
      if (alm.addons.paging) {
         nextpage_cache_url = parseInt(alm.page) + 1;
      } else {
         nextpage_cache_url = parseInt(alm.page) + 2;
         if (alm.isPaged) {
            // If the request a paged URL (/page/3/)
            nextpage_cache_url = parseInt(alm.page) + parseInt(alm.addons.nextpage_startpage) + 1;
         }
      }
      cache_url = alm.addons.cache_path + alm.addons.cache_id + '/page-' + nextpage_cache_url + ext;
      
   } 
   // Single Post
   else if (alm.addons.single_post) {      
      cache_url = alm.addons.cache_path + alm.addons.cache_id + '/' + alm.addons.single_post_id + ext;
      
   } 
   
   // Filters
   else if(alm.addons.filters){
	   console.log(alm);
   
   } else {
      // Standard URL request
      cache_url = alm.addons.cache_path + alm.addons.cache_id + '/page-' + (alm.page + 1) + ext;
      
   }
   
   return cache_url;
};

export default almGetCacheUrl;