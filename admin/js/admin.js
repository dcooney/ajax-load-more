var _alm = _alm || {};

jQuery(document).ready(function($) {
	"use strict"; 	
	
	/*
	*  _alm.copyToClipboard
	*  Copy shortcode to clipboard
	*
	*  @since 2.0.0
	*/     
	
	_alm.copyToClipboard = function(text) {
		window.prompt ("Copy link to your clipboard: Press Ctrl + C then hit Enter to copy.", text);
	}
	
	// Copy link on shortcode builder
	$('.output-wrap .copy').click(function(){
		var c = $('#shortcode_output').html();
		_alm.copyToClipboard(c);
	});
	
	// Copy link on repeater templates
	$('.alm-dropdown .copy a').click(function(){
		var container = $(this).closest('.repeater-wrap'), // find closet wrap
			 el = container.data('name'); // get template name
		
		if(el === 'default') el = 'template-default';
		var c = $('#'+el).val(); // Get textarea val()
		_alm.copyToClipboard(c);
	});
	
	
	
	/*
   *  Expand/Collapse shortcode headings
   *
   *  @since 2.0.0
   */ 
   
	$(document).on('click', 'h3.heading', function(){
		var el = $(this);
		if($(el).hasClass('open')){
			$(el).next('.expand-wrap').slideDown(100, 'alm_easeInOutQuad', function(){
				$(el).removeClass('open');
			});
		}else{
			$(el).next('.expand-wrap').slideUp(100, 'alm_easeInOutQuad', function(){
				$(el).addClass('open');
			});
		}
	});
	
	$(document).on('click', '.toggle-all', function(){
      var el = $(this);
		if($(el).hasClass('closed')){
		   $(el).removeClass('closed');
         $('h3.heading').removeClass('open');
			$('.expand-wrap').slideDown(100, 'alm_easeInOutQuad');
		}else{
		   $(el).addClass('closed');
         $('h3.heading').addClass('open');
			$('.expand-wrap').slideUp(100, 'alm_easeInOutQuad');
		}
   });
	
	
});