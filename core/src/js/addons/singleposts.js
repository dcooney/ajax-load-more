import axios from 'axios';


/**  
 * singlePostHTML
 * Create the HTML for loading Single Posts
 *
 * @param {Object} response Query response
 * @param {HTMLElement} target The target div
 * @since 5.1.8.1
 */
export function singlePostHTML(response, target = null){	      	      
   let data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: 1,
			debug: 'Single Posts Query',
		}
	}			
   if(response.status === 200 && response.data && target){
		let div = document.createElement("div");
		div.innerHTML = response.data;			
		let htmlTarget = div.querySelector(target);
		if(htmlTarget){				
			data.html = htmlTarget.innerHTML;
		}
	}			
	return data;
}

export default singlePostHTML;



/**  
 * singlePostCache
 * Create a single post cache file
 *
 * @param {Object} alm
 * @param {String} content
 * @since 5.3.1
 */
export function singlePostCache(alm, content){
	
	if(alm.addons.cache !== 'true' || !content || content === ''){
		return false;
	}
	
	let formData = new FormData();
	formData.append('action', 'alm_cache_from_html');
	formData.append('security', alm_localize.alm_nonce);
	formData.append('cache_id', alm.addons.cache_id);
	formData.append('cache_logged_in', alm.addons.cache_logged_in);
	formData.append('canonical_url', alm.canonical_url);
	formData.append('name', alm.addons.single_post_id);
	formData.append('html', content.trim());
	
	axios.post(alm_localize.ajaxurl, formData)
	.then(function(response){
		console.log(response);
	});
	
}