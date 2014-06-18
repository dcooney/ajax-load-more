jQuery(document).ready(function($) {
   "use strict"; 
   
   $(".row select").select2({
          minimumResultsForSearch: '100'
    });    
   
   var _alm = {},
       output_div = $('#shortcode_output'),
       output = '[ajax_load_more]';    
       
   output_div.text(output); //Init the shortcode output        
   
   
   /*
   *  _alm.buildShortcode
   *  Loop sections and build the shortcode
   *
   *  @since 1.0
   */     

   _alm.buildShortcode = function(){
      output = '[ajax_load_more';
      
      // ---------------------------
      // - Repeater
      // ---------------------------
      
      var repeater = $('.repeater select').val(); 
      if(repeater != '' && repeater != undefined && repeater != 'default') 
         output += ' repeater="'+repeater+'"';
      
      
      // ---------------------------
      // - Post Types
      // ---------------------------
      
      var post_type_count = 0;
      $('.post_types input[type=checkbox]').each(function(e){         
         if($(this).is(":checked")) {
            post_type_count++;
            if(post_type_count>1){
               output += ', ' + $(this).data('type');
            }else{
               if($('.post_types input').hasClass('changed'))
                  output += ' post_type="'+$(this).data('type')+'';               
            }
         }
      }); 
      if(post_type_count>0) 
         output += '"';
      // ---------------------------
      // - Categories      
      // ---------------------------
      
      var cat = $('.categories select').val();              
      if(cat != '' && cat != undefined) 
         output += ' category="'+cat+'"';
      
      // ---------------------------
      // - Tags      
      // ---------------------------
      
      var tag = $('.tags select').val();              
      if(tag != '' && tag != undefined) 
         output += ' tag="'+tag+'"';   
      
      // ---------------------------
      // - Authors      
      // ---------------------------
      
      var author = $('.authors select').val();              
      if(author != '' && author != undefined) 
         output += ' author="'+author+'"';   
      
      
      // ---------------------------
      // - Search      
      // ---------------------------
      
      var search = $('.search-term input').val();    
      search = $.trim(search);       
      if(search != '') 
         output += ' search="'+search+'"';  
         
          
      // ---------------------------
      // - Exclude posts      
      // ---------------------------
      
      var exclude = $('.exclude input').val();    
      exclude = $.trim(exclude);       
      if(exclude != '') 
         output += ' exclude="'+exclude+'"';   
      
      
      // ---------------------------
      // - Post Offset      
      // ---------------------------
      
      var offset = $('.offset select').val();   
      if(offset > 0) 
      	output += ' offset="'+offset+'"';  
      
      
      // ---------------------------
      // - Posts Per Page       
      // ---------------------------
      
      var posts_per_page = $('.posts_per_page select').val();  
      if(posts_per_page > 0 && posts_per_page != 5 && $('.posts_per_page select').hasClass('changed'))
         output += ' posts_per_page="'+posts_per_page+'"';            
      
      
      // ---------------------------
      // - Scrolling      
      // ---------------------------
      
      var scroll_load = $('.scroll_load input[name=scroll]:checked').val();     
      if(scroll_load == 'f'){
         $('.row.max_pages').slideUp(100, 'alm_easeInOutQuad');
         if($('.scroll_load input').hasClass('changed'))          
            output += ' scroll="false"';         
      }else{
         $('.row.max_pages').slideDown(100, 'alm_easeInOutQuad');
         if($('.max_pages select').hasClass('changed'))           
            output += ' max_pages="'+$('.max_pages select').val()+'"';
         
      }   
      
      
      // ---------------------------
      // - Pause Loading      
      // ---------------------------
      
      var pause_load = $('.pause_load input[name=pause]:checked').val();     
      if(pause_load == 't')          
            output += ' pause="true"';         

      
      // ---------------------------
      // - transition       
      // ---------------------------
      
      var transition = $('.transition select').val(); 
      if($('.transition select').hasClass('changed'))
         output += ' transition="'+transition+'"';
      
      
      // ---------------------------
      // - Button Label      
      // ---------------------------
      
      var btn_lbl = $('.btn-label input').val();    
      btn_lbl = $.trim(btn_lbl);       
      if(btn_lbl != '' && $('.btn-label input').hasClass('changed')) 
         output += ' button_label="'+btn_lbl+'"';         
      
      
      output += ']';  //Close shortcode          
      output_div.text(output);      
   }  
   
    
   /*
   *  On change events
   *
   *  @since 1.0
   */ 
   
   $('.post_types input[type=checkbox]#chk-post').prop('checked', true).addClass('changed'); //Select post by default
   
   $('.repeater select, .post_types input[type=checkbox], .categories select, .tags select, .authors select, .offset select, .posts_per_page select, .scroll_load input[type=radio], .pause_load input[type=radio], .max_pages select, .transition select').change(function() {
      $(this).addClass('changed');      

      // If post type is not selected, select post.
      if(!$('.post_types input[type=checkbox]:checked').length > 0){
         $('.post_types input[type=checkbox]#chk-post').prop('checked', true);
      }      

       _alm.buildShortcode();
   });
   $('.search-term input, .exclude input, .btn-label input').keyup(function() {  
      $(this).addClass('changed'); 
      _alm.buildShortcode();
   });
   
   
   
   /*
   *  Jump to section
   *
   *  @since 1.0
   */ 
   
   var jumpOptions = '';
	$('.row').each(function(){
		var id = $(this).attr('id');
		var title = $(this).find('h3.heading').text();
		jumpOptions += '<option value="'+id+'">'+title+'</option>';
	});
	
	$('select.jump-menu').append(jumpOptions);
	
	$('select.jump-menu').change(function() {
		var pos = $(this).val();
		if(pos!= 'null'){
			$('html,body').animate({
			   scrollTop: $('#'+pos).offset().top - ($('.intro').height() - 20)
			}, 200, 'alm_easeInOutQuad');
		}
   });
    
    
   /*
   *  Expand/Collapse shortcode headings
   *
   *  @since 1.0
   */ 
   
	$('h3.heading').click(function(){
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
	
	
	
	/*
   *  _alm.alm_easeInOutQuad
   *  Ajax Load More easing
   *
   *  @since 1.0
   */  
   
	$.easing.alm_easeInOutQuad = function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
   }
   
   
   
   /*
   *  _alm.SelectText
   *  Click to select text
   *
   *  @since 1.0
   */  
   
   _alm.SelectText = function(element) {
       var doc = document, 
         text = doc.getElementById(element), 
         range, 
         selection;    
       if (doc.body.createTextRange) {
           range = document.body.createTextRange();
           range.moveToElementText(text);
           range.select();
       } else if (window.getSelection) {
           selection = window.getSelection();        
           range = document.createRange();
           range.selectNodeContents(text);
           selection.removeAllRanges();
           selection.addRange(range);
       }
   }
   $('#shortcode_output').click(function() {
     _alm.SelectText('shortcode_output');
   });
   
   
   
   /*
   *  _alm.copyToClipboard
   *  Copy shortcode to clipboard
   *
   *  @since 1.0
   */     
	
	_alm.copyToClipboard = function(text) {
		window.prompt ("Copy link to your clipboard: Press Ctrl + C then hit Enter to copy.", text);
	}
	
	$('.output-wrap .copy').click(function(){
		var c = $('#shortcode_output').html();
		_alm.copyToClipboard(c);
	});
   
   

  
});