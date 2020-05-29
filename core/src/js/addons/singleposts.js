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