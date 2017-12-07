let alm_is_filtering = false; // Global Masonry/Filtering var

(function ($) {


	/* $.fn.almFilter(type, speed, data)
	 *
	 *  Filter Ajax Load More
	 *
	 *  @param transition string;
	 *  @param speed number;
	 *  @param data obj;
	 *  @since 2.6.1
	 */
	$.fn.almFilter = function (transition, speed, data) {
	   if(data.target){ // if a target has been specified
	      $(".ajax-load-more-wrap[data-id='" + data.target + "']").each(function (e) {
		      var el = $(this);
		      $.fn.almFilterTransition(transition, speed, data, el);
		   });
	   } else { // Target not specified
	      $(".ajax-load-more-wrap").each(function (e) {
		      var el = $(this);
		      $.fn.almFilterTransition(transition, speed, data, el);
		   });
	   }
	}; 
	
	
	
	/* $.fn.almFilterTransition(transition, speed, data, el)
	 *
	 *  Transition Ajax Load More
	 *
	 *  @param transition string;
	 *  @param speed number;
	 *  @param data obj;
	 *  @param el element;
	 *  @since 2.13.1
	 */
	$.fn.almFilterTransition  = function(transition, speed, data, el){
	   if(transition === 'slide'){ // Slide transition
	      el.slideUp(speed, function(){
	         almCompleteFilterTransition(speed, data, el);	
	      });
	   }else if(transition === 'fade' || transition === 'masonry'){ // Fade, Masonry transition
	      el.fadeOut(speed, function(){
	         almCompleteFilterTransition(speed, data, el);	
	      });
	   }else{ // No transition
	      almCompleteFilterTransition(speed, data, el);
	   }
	}; 
	
	
	
	/*  almCompleteFilterTransition
	 *  Complete the filter transition
	 * 
	 *  @param speed number;
	 *  @param data obj;
	 *  @param el element;
	 *  @since 3.3
	 */
	let almCompleteFilterTransition = (speed, data, el) => {
		let container = el.get(0);
		let listing = container.querySelectorAll('.alm-listing');
		// Loop over all .alm-listing divs
		[...listing].forEach(function(e){
			e.innerHTML = ''; // Clear listings
		});
		let button = container.querySelector('.alm-load-more-btn');
		if(button){
			button.classList.remove('done');// Reset Button 
		}
		almSetFilters(speed, data, el);
	}
	
	 
	
	/*  almSetFilters
	 *  Set filter parameters on .alm-listing element
	 *
	 *  @param speed number;
	 *  @param el element;
	 *  @param data string;
	 *  @updated 3.3
	 *  @since 2.6.1
	 */
	let almSetFilters = function(speed, data, el){
	   $.each(data, function(key, value) {
	      key = key.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2'); // Convert camelCase data() object back to dash (-)
	      $('.alm-listing', el).attr('data-'+key, value);
	   });
	   if ($.isFunction($.fn.almFilterComplete)){
	      $.fn.almFilterComplete();
	   }
	   alm_is_filtering = true;	   
		el.fadeIn(speed); // Fade ALM back in
		
		// re-initiate Ajax Load More
	   if(data.target){
	      // if a target has been specified
	   	$(".ajax-load-more-wrap[data-id="+data.target+"]").ajaxloadmore();
	   } else {
	      // Target not specified
	   	$(".ajax-load-more-wrap").ajaxloadmore();
	   }
	};
	
})(jQuery);