var _alm = _alm || {};

jQuery(document).ready(function($) {
	"use strict";
	
	_alm.options = {
		speed: 200
	};
	
	
	
	/*
	*  Test REST API access
	*
	*  @since 5.1.1
	*/
	if($('.restapi-access').length){
      $.ajax({
   		type: 'GET',
   		url: alm_admin_localize.restapi.url + alm_admin_localize.restapi.namespace + '/test/',
   		dataType: 'json',
   		success: function(data) { 
      		if(data.success){
         		console.log('Ajax Load More successfully connected to the WordPress REST API.');
      		}     		
   		},
   		error: function(xhr, status, error) {
      		console.log(status);
      		$('.restapi-access').fadeIn();
   		}
   	});
	}
	


   /*
	*  _alm.saveSettings
	*  Setting panel save actions
	*
	*  @since 3.2.0
	*/
	
	let almSettings = $('#alm_OptionsForm'), 
	    savingSettings = false,
	    settingsForm = document.querySelector('#alm_OptionsForm'),
	    settingsTarget = document.querySelector('.alm-settings-feedback');
	    
   if(settingsForm){
      document.body.appendChild(settingsTarget);
   }
	    
   _alm.saveSettings = function(){
      
      if(savingSettings)
   	   return false;
   	   
   	savingSettings = true;  	
   	settingsForm.classList.add('--saving');
   	settingsTarget.classList.add('--saving');
   	settingsTarget.innerHTML = alm_admin_localize.settings_saving;
   	  
      almSettings.ajaxSubmit({   
         
         // Success      
         success: function(){            
            
            // Delay for effect
            setTimeout(function(){
               settingsTarget.classList.remove('--saving');
               settingsTarget.classList.add('--saved');
               settingsTarget.innerHTML = alm_admin_localize.settings_saved;
               settingsForm.classList.remove('--saving');
               //console.log(alm_admin_localize.ajax_load_more +' - '+ alm_admin_localize.settings_saved);
               savingSettings = false;
               
               setTimeout(function(){
                  settingsTarget.classList.remove('--saved');                  
               }, 2500);
               
            }, 500); 
            
         },
         
         // Error
         error: function(){            
            
            // Delay for effect
            setTimeout(function(){
               settingsTarget.classList.remove('--saving');
               settingsTarget.classList.add('--error');
               settingsTarget.innerHTML = alm_admin_localize.settings_error;
               settingsForm.classList.remove('--saving');
               console.log(alm_admin_localize.ajax_load_more +' - '+ alm_admin_localize.settings_error);
               savingSettings = false;
               
               setTimeout(function(){
                  settingsTarget.classList.remove('--error');                  
               }, 2500);
               
            }, 500);
         }
      });
      return false;
      
   };  
	    
   // On Change, save the settings
   let settingsTimer;
	$(document).on('change', '#alm_OptionsForm input, #alm_OptionsForm textarea, #alm_OptionsForm select', function(){   	
   	// Set a timer to avoid updating settings to frequently
   	if(settingsTimer) clearTimeout(settingsTimer);
   	settingsTimer = setTimeout(function(){
   	   _alm.saveSettings();
   	}, 500);
   	
   });
   
   
   
   /*
   *  Download Repeater Template
   *  Trigger the download of a repeater template from the admin
   *
   *  @since 3.6
   */
   
   $('.download-repeater').on('click', function(e){
	   let el = this;
	   el.closest('form').submit();	   
   });
   


	/*
   *  Tooltipster
   *  http://iamceege.github.io/tooltipster/
   *
   *  @since 2.8.4
   */
	
	$('body').on('mouseenter', '.tooltip:not(.tooltipstered)', function(){
		$(this).tooltipster({
			delay: 100,
			speed: 150,
			maxWidth: 325
		}).tooltipster('show');
	});




	/*
   *  Button preview pane
   *  Found on Settings and Shortcode Builder
   *
   *  @since 2.8.4
   */

 	$("select#alm_settings_btn_color").change(function() {
 		var color = jQuery(this).val();
 		// Remove other colors
		$('.ajax-load-more-wrap.core.preview-pane').removeClass('none');
		$('.ajax-load-more-wrap.core').removeClass('default');
		$('.ajax-load-more-wrap.core').removeClass('grey');
		$('.ajax-load-more-wrap.core').removeClass('purple');
		$('.ajax-load-more-wrap.core').removeClass('green');
		$('.ajax-load-more-wrap.core').removeClass('red');
		$('.ajax-load-more-wrap.core').removeClass('blue');
		$('.ajax-load-more-wrap.core').removeClass('white');
		$('.ajax-load-more-wrap.core').removeClass('infinite');
		$('.ajax-load-more-wrap.core').removeClass('skype');
		$('.ajax-load-more-wrap.core').removeClass('ring');
		$('.ajax-load-more-wrap.core').removeClass('fading-blocks');
		$('.ajax-load-more-wrap.core').removeClass('fading-circles');
		$('.ajax-load-more-wrap.core').removeClass('chasing-arrows');
		$('.ajax-load-more-wrap.core').addClass(color);

	});
	$("select#alm_settings_btn_color").click(function(e){
		e.preventDefault();
	});




	$('.alm-template-listing li a').click(function(e){
   	e.preventDefault();
   	var el = $(this),
   	    val = el.data('path');
   	el.parent().parent().next('.template-selection').val(val);
	});

	$('.alm-template-section-nav li a').click(function(e){
   	e.preventDefault();
   	var el = $(this),
   	    index = el.parent().index(),
   	    parent = el.parent().parent().parent('.repeater-wrap');

   	if(!el.hasClass('active')){
      	el.parent().addClass('active').siblings().removeClass('active');
      	$('.alm-template-toggle', parent).hide();
      	$('.alm-template-toggle', parent).eq(index).show();
   	}
   });



	/*
	*  _alm.copyToClipboard
	*  Copy shortcode to clipboard
	*
	*  @since 2.0.0
	*/

	_alm.copyToClipboard = function(text) {
		window.prompt ("Copy link to your clipboard: Press Ctrl + C then hit Enter to copy.", text);
	};

	// Copy link on shortcode builder
	$('.copy-to-clipboard').on('click', function(){
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

	$(document).on('click', 'h2.shortcode-title', function(){
		var el = $(this);
		var parent = el.closest('.shortcode-parameter-wrap');
		if(el.hasClass('open')){
			el.next('.section-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad', function(){
				el.removeClass('open');
				parent.removeClass('closed'); 
			});
		}else{
			el.next('.section-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad', function(){
				el.addClass('open');
				parent.addClass('closed');
			});
		}
	});
	
	$(document).on('click', 'h3.heading', function(){
		var el = $(this);
		if($(el).hasClass('open')){
			$(el).next('.expand-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad', function(){
				$(el).removeClass('open');
			});
		}else{
			$(el).next('.expand-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad', function(){
				$(el).addClass('open');
			});
		}
	}); 

	$(document).on('click', '.toggle-all', function(){
      var el = $(this),
      	 type = el.data('id');
		if(el.hasClass('closed')){
		   el.removeClass('closed');
		   
		   $('h2.shortcode-title').closest('.shortcode-parameter-wrap').removeClass('closed');
         $('h3.heading, h2.shortcode-title').removeClass('open');
			$('.section-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad');			
			$('.expand-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad');
			
		}else{
		   el.addClass('closed');
		   
		   $('h2.shortcode-title').closest('.shortcode-parameter-wrap').addClass('closed');
         $('h3.heading, h2.shortcode-title').addClass('open');
			$('.section-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad');
			$('.expand-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad');
		}
   });
   
   
   // Trigger click events on enter/return
	$('h3.heading, h2.shortcode-title').keypress(function (e) {
	var key = e.which;
		if(key == 13){  // the enter key code
			$(this).click();
			return false;  
		}
	});   


   /*
   *  Activate License
   *
   *  @since 2.8.3
   */

   var almActivating = false;
   $(document).on('click', '.license-btn', function(e){
      e.preventDefault();
      if(!almActivating){
	      $('.license-btn-wrap .msg').remove();
	      almActivating = true;
	      var el = $(this),
	      	 wrap = el.closest('.license-btn-wrap'),
	      	 parent = el.closest('.license'),
	      	 type = el.data('type'),
	      	 item = wrap.data('name'),
	      	 url = wrap.data('url'),
	      	 upgrade = wrap.data('upgrade-url'),
	      	 status = wrap.data('option-status'),
	      	 key = wrap.data('option-key'),
	      	 license = parent.find('input[type=text]').val();

			$('.loading', parent).fadeIn(300);

		   // Get value from Ajax
		   $.ajax({
	   		type: 'GET',
	   		url: alm_admin_localize.ajax_admin_url,
				dataType: 'json',

	   		data: {
	   			action: 'alm_license_activation',
	   			nonce: alm_admin_localize.alm_admin_nonce,
	   			type: type,
	   			item: item,
	   			status: status,
	   			url: url,
	   			upgrade: upgrade,
	   			key: key,
	   			license: license,
	   		},

	   		success: function(data) {

		   		if(data.msg){
			   		$('.license-btn-wrap', parent).append('<div class="msg">'+data.msg+'</div>');
		   		}

		   		if(data.license === 'valid'){
			   		$('.license-key-field .status', parent).addClass('active').removeClass('inactive').text(alm_admin_localize.active);
			   		$('.license-title .status', parent).addClass('valid').removeClass('invalid');
			   		$('.activate.license-btn', parent).addClass('hide');
			   		$('.deactivate.license-btn', parent).removeClass('hide');
			   		$('.no-license', parent).slideUp(200);

		   		}else{
			   		$('.license-key-field .status', parent).removeClass('active').addClass('inactive').text(alm_admin_localize.inactive);
			   		$('.license-title .status', parent).removeClass('valid').addClass('invalid');
			   		$('.activate.license-btn', parent).removeClass('hide');
			   		$('.deactivate.license-btn', parent).addClass('hide');
			   		$('.no-license', parent).slideDown(200);
		   		}

					$('.loading', parent).delay(250).fadeOut(300);
					almActivating = false;

	   		},
	   		error: function(xhr, status, error) {
	      		console.log(status);
	      		$('.loading', parent).delay(250).fadeOut(300);
	      		almActivating = false;
	   		}
	   	});
   	}
   });



   /*
   *  Get layout value Ajax
   *  @since 2.8.7
   */
   $(document).on('click', '.alm-layout-selection li a.layout', function(e){
      e.preventDefault();
      var el = $(this), 
          type = el.data('type'),
          custom = (el.hasClass('custom')) ? 'true' : 'false',
          textarea = el.closest('.repeater-wrap').find('.CodeMirror'),
          layout_btn_text = el.html(),
          name = el.closest('.repeater-wrap').data('name');

      if(!el.hasClass('updating')){

         el.addClass('updating').text(alm_admin_localize.applying_layout+"...");
         textarea.addClass('loading');

         // Get Codemirror Editor ID
         var eid = '';
         if(name === 'default'){ 
            // Default Template
            eid = window.editorDefault;
   	   }else{ 
      	   // Repeater Templates
            eid = window['editor_'+name];
   	   }

   	   // Get value from Ajax
   	   $.ajax({
      		type: 'GET',
      		url: alm_admin_localize.ajax_admin_url,
      		data: {
      			action   : 'alm_get_layout',
      			type     : type,
      			custom   : custom,
      			nonce    : alm_admin_localize.alm_admin_nonce,
      		},
      		dataType    : "JSON",
      		success: function(data) {

               eid.setValue(data.value);

               // Clear button styles
				   setTimeout(function() {
                  el.text(alm_admin_localize.template_updated).blur();
                  setTimeout(function() {
                     el.removeClass('updating').html(layout_btn_text).blur();	// CLose drop menu
                     el.closest('.alm-drop-btn').trigger('click');
                     textarea.removeClass('loading');
						}, 400);
					}, 400);


      		},
      		error: function(xhr, status, error) {
         		console.log(status);
         		textarea.removeClass('loading');
      		}
      	});
   	}

   });



   /*
   *  Dismiss Sharing (Transient)
   *  @since 2.8.7
   */
   $(document).on('click', '.alm-notification--dismiss', function(e){
      e.preventDefault();
      var el = $(this),
          container = el.parent('.group');
	   // Get value from Ajax
	   $.ajax({
   		type: 'POST',
   		url: alm_admin_localize.ajax_admin_url,
   		data: {
   			action: 'alm_dismiss_sharing',
   			nonce: alm_admin_localize.alm_admin_nonce,
   		},
   		success: function(data) {
            container.fadeOut();
   		},
   		error: function(xhr, status, error) {
      		console.log(status);
   		}
   	});

   });



   /*
   *  Set Transient (Transient)
   *  @since 4.0
   */
   $(document).on('click', '.alm-transient button.notice-dismiss', function(e){
      e.preventDefault();
      var el = $(this),
          container = el.parent('.alm-transient'),
          transient_name = container.data('transient'),
          duration = container.data('duration');
          
	   // Get value from Ajax
	   $.ajax({
   		type: 'POST',
   		url: alm_admin_localize.ajax_admin_url,
   		data: {
   			action: 'alm_set_transient',
   			nonce: alm_admin_localize.alm_admin_nonce,
   			transient_name: transient_name,
   			duration: duration
   		},
   		success: function(data) {
            container.fadeOut();
   		},
   		error: function(xhr, status, error) {
      		console.log(status);
   		}
   	});

   });



   /*
   *  Scroll to setting section
   *  @since 2.7.3
   */

	$(document).on('change', '#alm-settings-nav', function(e){
		e.preventDefault();
		var el = $(this),
			 index = $('option:selected', el).index();			 
		if(index !== '#'){
			index = index - 1;
			$('html, body').animate({
				scrollTop: $("#alm_OptionsForm h2").eq(index).offset().top - 40
			}, 500);
		}
	});


});
