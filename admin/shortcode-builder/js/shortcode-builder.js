jQuery(document).ready(function($) {
   "use strict";    
   
   var _alm = {},
       output_div = $('#shortcode_output'),
       output = '[ajax_load_more]'; 
   
   output_div.text(output); //Init the shortcode output 
       
       
      
   /*
   *  _alm.select2
   *  Init Select2 select replacement
   *
   *  @since 2.5.0
   */  
   _alm.select2 = function(){
      // Default Select2
      $('.row select, .cnkt-main select, select.jump-menu').not('.multiple, .meta-compare, .meta-type').select2({});   
      
      // multiple
      $('.ajax-load-more .categories select.multiple').select2({
         placeholder : 'Select Categories',
      });     
      $('.ajax-load-more .tags select.multiple').select2({
         placeholder : 'Select Tags'         
      });
   };
   _alm.select2();
   
   
   
   // Reset all selects
   _alm.reset_select2 = function(){
      // Default Select2
      $('.row select, .cnkt-main select, select.jump-menu').not('.multiple').select2();   
      
      // multiple
      $('.ajax-load-more .categories select.multiple').select2();     
      $('.ajax-load-more .tags select.multiple').select2();
   };   
            
              
              
   // Add additional meta_query
   var meta_query_obj = $('.meta-query-wrap').eq(0).clone();
   $('.meta-query-wrap .remove').remove();
   $('select.meta-compare, select.meta-type').select2();
   $('#add-meta-query').on('click', function(e){
      e.preventDefault();
      
      if($('.meta-query-wrap').length > 3){
         alert("Sorry, There is a maximum of 4 meta_query objects.");
         return false;
      }
      
      var target = $('#meta-query-extended');
      $('input, select', meta_query_obj).val('');
      var el = meta_query_obj.clone().hide();    
      target.append(el);
      el.fadeIn(200);
      $('#meta-query-extended select').select2();
      
      if($('.meta-query-wrap').length > 1){
         $('#meta-query-relation').fadeIn(150);
      }else{
         $('#meta-query-relation').fadeOut(150);         
      }
      
      $('select.meta-compare').select2();
      
      if($('.meta-query-wrap').length > 3){ // Hide "Add" button if 4 $('.meta-query-wrap')
         $('#alm-meta-key .controls').delay(200).slideUp(150, 'alm_easeInOutQuad');  
      }
      
   });   
   
   /* Delete Meta Query */
   $(document).on('click', '.remove-meta-query', function(e){
      var el = $(this);
      el.parent().parent('.meta-query-wrap').addClass('removing');
      el.parent().parent('.meta-query-wrap').fadeOut(200, function(){
         el.parent().parent('.meta-query-wrap').remove();
         _alm.buildShortcode();
      });
      
      if($('.meta-query-wrap').length > 3){ // Show "Add" button if less than 4 $('.meta-query-wrap')
         $('#alm-meta-key .controls').delay(200).slideDown(200, 'alm_easeInOutQuad');  
      }
      
   });
   
   
   
   
   /*
   *  _alm.buildShortcode
   *  Loop sections and build the shortcode
   *
   *  @since 1.0
   */     

   _alm.buildShortcode = function(){
      output = '[ajax_load_more';    
      
      // ---------------------------
      // - Cache      
      // ---------------------------     
       
      var cache = $('#alm-cache input[name=cache]:checked').val(); 
      if(cache !== 'false' && cache != undefined){
         if($('input#cache-id').val() === '')
            _alm.generateUniqueID(10); // Generate unique ID on first load
            
         $('.cache_id').slideDown(100, 'alm_easeInOutQuad');
         output += ' cache="'+cache+'"';
         var cache_id = $('input#cache-id').val();        
         if(cache_id)
            output += ' cache_id="'+cache_id+'"';  
      }else{
         $('.cache_id').slideUp(100, 'alm_easeInOutQuad')
      } 
      
      
      // ---------------------------
      // - PAGING      
      // ---------------------------     
      
      var paging = $('#alm-paging input[name=paging]:checked').val();
      var paging_controls = $('#alm-paging input[name=paging-controls]:checked').val(); 
      var paging_show_at_most = $('#alm-paging input#show-at-most').val(); 
      var paging_classes = $('#alm-paging input#paging-classes').val(); 
      if(paging !== 'false' && paging != undefined){	      
         output += ' paging="'+paging+'"';             
         output += ' paging_controls="'+paging_controls+'"';
         output += ' paging_show_at_most="'+paging_show_at_most+'"'; 
         if(paging_classes !== ''){
            output += ' paging_classes="'+paging_classes+'"';             
         }         
         $('#nav-controls').slideDown(100, 'alm_easeInOutQuad');                   
      }else{
         $('#nav-controls').slideUp(100, 'alm_easeInOutQuad');
      }
      
      
      
      
      // ---------------------------
      // - Preload      
      // ---------------------------
      
      var seo = $('.seo input[name=seo]:checked').val();
      var preload = $('.preload input[name=preload]:checked').val(); 
      if(preload !== 'false' && preload != undefined){
         
         if(seo !== 'true')
            $('.preload_amount').slideDown(100, 'alm_easeInOutQuad');
         
         output += ' preloaded="'+preload+'"';
         var preload_amount = $('.preload input#preload-amount').val();        
         if(preload_amount > 0 && preload_amount != 5)
            output += ' preloaded_amount="'+preload_amount+'"';  
      }else{
         $('.preload_amount').slideUp(100, 'alm_easeInOutQuad');
      } 
      
      
      
      // ---------------------------
      // - Previous Post      
      // ---------------------------
      
      var previous = $('.previous-post input[name=prev-post]:checked').val();
      if(previous !== 'false' && previous != undefined){   
              
         var prev_post_id = $('#prev_post_id').val();
         $('.prev_post_id').slideDown(100, 'alm_easeInOutQuad');
                  
         output += ' previous_post="'+previous+'"'; 
         output += ' previous_post_id="\'.'+prev_post_id+'.\'"'; 
         
      }else{
         $('.prev_post_id').slideUp(100, 'alm_easeInOutQuad');
      }   
      
      
      // ---------------------------
      // - SEO      
      // ---------------------------      
       
      if(seo !== 'false' && seo != undefined){
	      if(preload === 'true')
		      $('.preload_amount').slideUp(100, 'alm_easeInOutQuad');
	      
         output += ' seo="'+seo+'"';                   
      }
      
      // ---------------------------
      // - Repeater
      // ---------------------------
      
      var repeater = $('select#repeater-select').val(),
      	 theme_repeater = $('select#theme-repeater-select').val();
      	 
      if(theme_repeater != 'null' && theme_repeater != '' && theme_repeater != undefined){
	      output += ' theme_repeater="'+theme_repeater+'"';
      }else{
	      if(repeater != '' && repeater != undefined && repeater != 'default'){
		      output += ' repeater="'+repeater+'"';      
	      }	      
      }  
      
      
         
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
               if($(this).hasClass('changed')){
                  output += ' post_type="'+$(this).data('type')+''; 
               }              
            }
         }
      }); 
      if(post_type_count>0) 
         output += '"';
        
      // ---------------------------
      // - Post Format
      // ---------------------------
      
      var post_format = $('.post_format select').val(); 
      if(post_format != '' && post_format != undefined) 
         output += ' post_format="'+post_format+'"';
      
                 
      // ---------------------------
      // - Categories      
      // ---------------------------
      
      // IN
      var cat = $('.categories #category-select').val();              
      if(cat !== '' && cat !== undefined && cat !== null) 
         output += ' category="'+cat+'"';         
         
      // NOT_IN
      var cat_not_in = $('.categories #category-exclude-select').val();              
      if(cat_not_in !== '' && cat_not_in !== undefined && cat_not_in !== null) 
         output += ' category__not_in="'+cat_not_in+'"';
      
      
      // ---------------------------
      // - Tags      
      // ---------------------------
      
      var tag = $('.tags #tag-select').val();
      if(tag !== '' && tag !== undefined && tag !== null) 
         output += ' tag="'+tag+'"';   
         
      // NOT_IN
      var tag_not_in = $('.tags #tag-exclude-select').val();              
      if(tag_not_in !== '' && tag_not_in !== undefined && tag_not_in !== null) 
         output += ' tag__not_in="'+tag_not_in+'"';
         
         
      // ---------------------------
      // - Taxonomy Query     
      // ---------------------------
      
      var tax = $('select#taxonomy-select').val(),
      	  tax_operator = $('#tax-operator-select input[name=tax-operator]:checked').val();      	  
      	          
      if(tax !== '' && tax !== undefined){
         output += ' taxonomy="'+tax+'"';
         if($('select#taxonomy-select').hasClass('changed')){         	
         	$('#taxonomy-extended').slideDown(200, 'alm_easeInOutQuad');
         	get_tax_terms(tax);
         	$('select#taxonomy-select').removeClass('changed');
         }
         
		var tax_term_count = 0;
		$('#tax-terms-container input[type=checkbox]').each(function(e){         
			if($(this).is(":checked")) {
				tax_term_count++;
				if(tax_term_count>1){
					output += ', ' + $(this).data('type');
				}else{
				if($('#tax-terms-container input').hasClass('changed'))
					output += ' taxonomy_terms="'+$(this).data('type')+'';               
				}
			}
		}); 
		if(tax_term_count>0) 
		 output += '"';
         
         //Get Tax Operator
         if(tax_operator !== '' && tax_operator !== 'IN' && tax_operator !== undefined && tax_term_count !== 0){
	        output += ' taxonomy_operator="'+tax_operator+'"';
         }         
      }else{
	      $('#taxonomy-extended').slideUp(200, 'alm_easeInOutQuad');
      }

      
      // ---------------------------
      // - Date      
      // ---------------------------
      var currentTime = new Date(),
          currentYear = currentTime.getFullYear();
      
      var dateY = $('.date input#input-year').val(); // Year          
      if(dateY  !== '' && dateY  !== undefined && dateY <= currentYear) 
         output += ' year="'+dateY+'"';   
      
      var dateM = $('.date input#input-month').val(); // Month          
      if(dateM  !== '' && dateM  !== undefined && dateM < 13) 
         output += ' month="'+dateM+'"';   
      
      var dateD = $('.date input#input-day').val(); // Day          
      if(dateD  !== '' && dateD  !== undefined && dateD < 32) 
         output += ' day="'+dateD+'"';   
         
         
      
      // ---------------------------
      // - Custom Fields Meta Query
      // ---------------------------
      var meta_key = $.trim($('.meta-query-wrap').eq(0).find('input.meta-key').val()),
          meta_value = $.trim($('.meta-query-wrap').eq(0).find('input.meta-value').val()),
          meta_compare = $('.meta-query-wrap').eq(0).find('select.meta-compare').val(),
          meta_type = $('.meta-query-wrap').eq(0).find('select.meta-type').val(),
          meta_relation = $('select.meta-relation').val(),
          meta_query_length = $('.meta-query-wrap').length;          
     
      // Set meta_compare default value
      if(meta_compare === '' || meta_compare == undefined)       
          meta_compare = '=';   
     
      // Set meta_type default value
      if(meta_type === '' || meta_type == undefined)       
          meta_type = 'CHAR';
      
      // Single Meta_Query()    
      if(meta_query_length === 1){
	      if(meta_key !== '' && meta_key !== undefined){      	         	         	
	         output += ' meta_key="'+meta_key+'"';
	         output += ' meta_value="'+meta_value+'"';
	         
	         if(meta_compare !== '='){
	            output += ' meta_compare="'+meta_compare+'"';              
	         }
	         
	         if(meta_type !== 'CHAR'){
	            output += ' meta_type="'+meta_type+'"';              
	         }
	      }
      }
      // Multiple Meta_Query()
      if(meta_query_length > 1){
	      meta_key = ''; 
	      meta_value = ''; 
	      meta_compare = ''; 
	      meta_type = ''; 
	      $('.meta-query-wrap').each(function(e){
		      var el = $(this),
		      	 mk = $.trim(el.find('input.meta-key').val()),
		      	 mv = $.trim(el.find('input.meta-value').val()),
		      	 mc = $.trim(el.find('select.meta-compare').val()),
		      	 mt = $.trim(el.find('select.meta-type').val());
		      
		      if(e === 0){ // first on first only	 
		      	meta_key += mk;
		      	meta_value += mv;
		      	meta_compare += mc;
		      	meta_type += mt;
		      }else{			
   		      if(mk.length > 0 && mv.length > 0){     
		      	   meta_key += ':'+ mk;
		      	   meta_value += ':'+ mv;
		      	   meta_compare += ':'+ mc;
		      	   meta_type += ':'+ mt;
		      	}
		      }
		      
	      });
	      output += ' meta_key="'+meta_key+'"';
	      output += ' meta_value="'+meta_value+'"';
	      output += ' meta_compare="'+meta_compare+'"';
	      output += ' meta_type="'+meta_type+'"';
	      
	      var isRelation = $('#meta-query-relation').css("display");
	      if(meta_relation !== '' && meta_relation !== undefined && isRelation === 'block'){
	         output += ' meta_relation="'+meta_relation+'"';
	      }
	      
      }else{
         $('#meta-query-relation').fadeOut(150);
      }
      
      
      
      // ---------------------------
      // - Authors      
      // ---------------------------
      
      var author = $('.authors #author-select').val();              
      if(author !== '' && author !== undefined) 
         output += ' author="'+author+'"';   
      
      
      // ---------------------------
      // - Posts      
      // ---------------------------
      
      var post__in = $('input#post__in').val();    
      post__in = $.trim(post__in);       
      if(post__in !== '') 
         output += ' post__in="'+post__in+'"'; 
         
         
      // ---------------------------
      // - Exclude posts      
      // ---------------------------
      
      var exclude = $('input#exclude-posts').val();    
      exclude = $.trim(exclude);       
      if(exclude !== ''){
         //Remove trailing comma, if present
         if(exclude.charAt( exclude.length-1 ) == ",") {
            exclude = exclude.slice(0, -1)
         }
         output += ' exclude="'+exclude+'"';  
      }  
      
      
      // ---------------------------
      // - Search      
      // ---------------------------
      
      var search = $('.search-term input').val();    
      search = $.trim(search);       
      if(search !== '') 
         output += ' search="'+search+'"'; 
      
      
      // ---------------------------
      // - Custom Arguments      
      // ---------------------------
      
      var custom_args = $('.custom-arguments input').val();    
      custom_args = $.trim(custom_args);       
      if(custom_args !== '') 
         output += ' custom_args="'+custom_args+'"'; 
      
      
      // ---------------------------
      // - Ordering      
      // ---------------------------
      var order = $('select#post-order').val(),
         orderby = $('select#post-orderby').val();    
      if(order !== 'DESC') 
         output += ' order="'+order+'"'; 
      if(orderby !== 'date') 
         output += ' orderby="'+orderby+'"'; 
         
          
      // ---------------------------
      // - Post Status      
      // ---------------------------
      var post_status = $('select#post-status').val();   
      if(post_status !== 'publish') 
         output += ' post_status="'+post_status+'"'; 
      
      
      // ---------------------------
      // - Post Offset      
      // ---------------------------
      
      var offset = $('.offset input').val();   
      if(offset > 0) 
      	output += ' offset="'+offset+'"';  
      
      
      // ---------------------------
      // - Posts Per Page       
      // ---------------------------
      
      var posts_per_page = $('.posts_per_page input').val();        
      if(posts_per_page > 0 && posts_per_page != 5)
         output += ' posts_per_page="'+posts_per_page+'"';  
      
      
      // ---------------------------
      // - Pause Loading      
      // ---------------------------
      
      var pause_load = $('.pause_load input[name=pause]:checked').val();     
      if(pause_load === 't'){          
         output += ' pause="true"'; 
      }         
            
      
      
      // ---------------------------
      // - Scrolling      
      // ---------------------------
      
      var scroll_load = $('.scroll_load input[name=scroll]:checked').val();     
      if(scroll_load === 'f'){
         $('.max_pages, .scroll_distance, .pause_override').slideUp(100, 'alm_easeInOutQuad');
         if($('.scroll_load input').hasClass('changed'))          
            output += ' scroll="false"';         
      }else{
         $('.max_pages, .scroll_distance, .pause_override').slideDown(100, 'alm_easeInOutQuad');
         
         var scroll_distance = $('.scroll_distance input').val();      
         if(scroll_distance != 150)           
            output += ' scroll_distance="'+$('.scroll_distance input').val()+'"';   
            
         var max_pages = $('.max_pages input').val();   
         if(max_pages != 5)           
            output += ' max_pages="'+$('.max_pages input').val()+'"';  
            
         var pause_override = $('.pause_override input[name=pause_override]:checked').val();  
         if(pause_override === 't' && pause_load === 't')           
            output += ' pause_override="true"';  
                   
      }        

      
      // ---------------------------
      // - transition       
      // ---------------------------
      
      var transition = $('.transition input[name=transition]:checked').val(); 
      if(transition !== 'slide')
         output += ' transition="'+transition+'"';
      
      
      // ---------------------------
      // - Images loaded      
      // ---------------------------
      
      var images_loaded = $('.images_loaded input[name=images_loaded]:checked').val();     
      if(images_loaded === 't')          
            output += ' images_loaded="true"';

      
      // ---------------------------
      // - disbale after       
      // ---------------------------
      
      var destroy_after = $('.destroy-after input[name=destroy-after]').val(); 
      if(destroy_after !== '' && destroy_after !== undefined && destroy_after !== '0')
         output += ' destroy_after="'+destroy_after+'"';
      
      
      // ---------------------------
      // - Button Label      
      // ---------------------------
      
      var btn_lbl = $('.btn-label input').val();    
      btn_lbl = $.trim(btn_lbl);       
      if(btn_lbl !== '' && $('.btn-label input').hasClass('changed')) 
         output += ' button_label="'+btn_lbl+'"';  
      
      
      // ---------------------------
      // - Container Type      
      // ---------------------------
      
      var container_type = $('.container_type input[name=alm_container_type]:checked').val(); 
      if(container_type)
         output += ' container_type="'+container_type+'"';
      
      
      // ---------------------------
      // - Container Classes      
      // ---------------------------
      
      var container_classes = $('.alm-classes input#container-classes').val();    
      container_classes = $.trim(container_classes);       
      if(container_classes !== '' && $('.alm-classes input#container-classes').hasClass('changed')) 
         output += ' css_classes="'+container_classes+'"';        
      
      
      output += ']';  //Close shortcode          
      output_div.text(output); 
      
      if(output  != '[ajax_load_more]') 
      	$('.reset-shortcode-builder').show();
      else	
      	$('.reset-shortcode-builder').hide();
   }  
   
    
   /*
   *  On change events
   *
   *  @since 2.0.0
   */ 
   
   //Select 'post' by default
   $('.post_types input[type=checkbox]#chk-post').prop('checked', true).addClass('changed'); 
   //Select SEO 'false' by default
   $('.seo input[type=radio]#seo-false').prop('checked', true).addClass('changed'); 
   
   
   $(document).on('change keyup', '.alm_element', function() {     
	   var el = $(this); 
      el.addClass('changed');     
      
      // reset repeater templates 
		if(el.attr('id') === 'repeater-select'){
			$('select#theme-repeater-select').select2('val','');
		}	
		if(el.attr('id') === 'theme-repeater-select'){
			if($('#theme-repeater-select').val() !== 'null' && $('#theme-repeater-select').val() !== ''){
				$('select#repeater-select').select2('val','default');
			}
		}	

      // If post type is not selected, select 'post'.
      if(!$('.post_types input[type=checkbox]:checked').length > 0){
         $('.post_types input[type=checkbox]#chk-post').prop('checked', true);
      }       
      
      // If Tax Term Operator is not selected, select 'IN'.
      if(!$('#tax-operator-select input[type=radio]:checked').length > 0){
         $('#tax-operator-select input[type=radio]#tax-in-radio').prop('checked', true);
      }     
      
      _alm.buildShortcode();
   });
   
   
   $("input.numbers-only").keydown(function (e) {
      if ($.inArray(e.keyCode, [188, 46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          // Allow: Ctrl+A
         (e.keyCode == 65 && e.ctrlKey === true) || 
          // Allow: home, end, left, right, down, up
         (e.keyCode >= 35 && e.keyCode <= 40)) {
              // let it happen, don't do anything
              return;
     }
     // Ensure that it is a number and stop the keypress
     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
         if(e.keyCode !== 188){ // If keycode is not a comma
            e.preventDefault();
         }
     } 
   });
   
   
   
   /*
   *  Jump to section, Table of contents
   *
   *  @since 2.0.0
   *  Updated v2.4
   */ 
   
   var jumpOptions = '';
   var toc = '';
	$('.row').each(function(){
	   if(!$(this).hasClass('no-brd')){ // Special case for back 2 top on shortcode builder landing
   		var id = $(this).attr('id');
   		var title = $(this).find('h3.heading').text();
   		jumpOptions += '<option value="'+id+'">'+title+'</option>';
		}
	});
	
	
	
	/* Jump Menu */
	
	$('select.jump-menu').append(jumpOptions);
	$('select.jump-menu').change(function() {
		var pos = $(this).val();
		if(pos !== 'null'){
			$('html,body').animate({
			   scrollTop: $('#'+pos).offset().top - ($('.intro').height() - 20)
			}, 200, 'alm_easeInOutQuad');
		}
   });
   
   
	
	/* Table of Contents */
	
	$('.table-of-contents .toc').append('<option value="#">-- Jump to Option --</option>');
	$('.table-of-contents .toc').append(jumpOptions).select2();	
	
	$('.table-of-contents .toc').change(function() {
	   var pos = $(this).val();
		if(pos !== 'null'){
			$('html,body').animate({
			   scrollTop: $('#'+pos).offset().top - 46
			}, 500, 'alm_easeInOutQuad');
		}
   });
   
   /* Table of Contents - onResize */
   
   function almResizeTOC(){      
      var tocW = $('.cnkt-sidebar').width();
      $('.table-of-contents').css('width', tocW + 'px'); 
   }
   almResizeTOC();
   
   $(window).resize(function() {
      almResizeTOC() 
   });   
   
   $(window).scroll(function(){
      almSidebarAttach();
   });
   
   function almSidebarAttach(){
      var scrollT = $(window).scrollTop(),
          target = 60;
          
      if(scrollT > target)
         $('.table-of-contents').addClass('attached');
      else
         $('.table-of-contents').removeClass('attached');
   }
   almSidebarAttach();
   
     	
	
   /*
   *  get_tax_terms
   *  Get taxonomy terms via ajax
   *
   *  @since 2.1.0
   */
   function get_tax_terms(tax){
   		var placement = $('#tax-terms-container');
   		placement.html("<p class='loading'>Fetching Terms...</p>");
		$.ajax({
			type: 'GET',
			url: window.parent.alm_admin_localize.ajax_admin_url,
			data: {
				action: 'alm_get_tax_terms',
				taxonomy: tax,
				nonce: window.parent.alm_admin_localize.alm_admin_nonce,
			},
			dataType: "html",
			success: function(data) {			
				//console.log(data);
				placement.html(data);
			},
			error: function(xhr, status, error) {
				responseText.html('<p>Error - Something went wrong and the terms could not be retrieved.');
			}
		});
	}
	
	
	
	/*
   *  _alm.alm_easeInOutQuad
   *  Ajax Load More easing
   *
   *  @since 2.0.0
   */  
   
	$.easing.alm_easeInOutQuad = function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
   }
   
   
   
   /*
   *  _alm.SelectText
   *  Click to select text
   *
   *  @since 2.0.0
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
   *  Reset shortcode builder
   *
   *  @since 2.5.0
   */    
   
   $(document).on('click', '.reset-shortcode-builder a', function(){
      $('#alm-shortcode-builder-form').trigger("reset");
      _alm.reset_select2();
      _alm.buildShortcode();
   }); 
   
   
   
   /*
   *  _alm.generateUniqueID
   *  Generate Unique Cache ID
   *
   *  @since 2.6.0
   */  
   
   _alm.generateUniqueID = function(length) {
       var id = Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
       $('#cache-id').val(id);     
   }
   
   
   
   /*
   *  Generate Unique Cache ID Click
   *
   *  @since 2.6.0
   */    
   
   $(document).on('click', '.generate-cache-id', function(){
      _alm.generateUniqueID(10);
   }); 
   

  
});