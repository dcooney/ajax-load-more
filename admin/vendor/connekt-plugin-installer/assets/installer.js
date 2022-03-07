var cnkt_installer = cnkt_installer || {};

jQuery(document).ready(function($) {
	
	"use strict"; 	
	
	var is_loading = false;	
	
		
	
	/*
   *  install_plugin
   *  Install the plugin
   *
   *
   *  @param el       object Button element
   *  @param plugin   string Plugin slug
   *  @since 1.0
   */ 
   
	cnkt_installer.install_plugin = function(el, plugin){
   	
   	// Confirm activation      	
   	var r = confirm(cnkt_installer_localize.install_now);  
   	    	
      if (r) {
         
         is_loading = true;
         el.addClass('installing');
         
      	$.ajax({
	   		type: 'POST',
	   		url: cnkt_installer_localize.ajax_url,
	   		data: {
	   			action: 'cnkt_plugin_installer',
	   			plugin: plugin,
	   			nonce: cnkt_installer_localize.admin_nonce,
	   			dataType: 'json'
	   		},
	   		success: function(data) { 
		   		if(data){
			   		if(data.status === 'success'){
				   		el.attr('class', 'activate button button-primary');
				   		el.html(cnkt_installer_localize.activate_btn);
			   		} else {
			   			el.removeClass('installing');
		   			}
		   		} else {
						el.removeClass('installing');
		   		}
		   		is_loading = false;
	   		},
	   		error: function(xhr, status, error) {
	      		console.log(status);
	      		el.removeClass('installing');
	      		is_loading = false;
	   		}
	   	});
	   	
   	}
	}
	
		
	
	/*
   *  activate_plugin
   *  Activate the plugin
   *
   *
   *  @param el       object Button element
   *  @param plugin   string Plugin slug
   *  @since 1.0
   */ 
   
	cnkt_installer.activate_plugin = function(el, plugin){
      
      $.ajax({
   		type: 'POST',
   		url: cnkt_installer_localize.ajax_url,
   		data: {
   			action: 'cnkt_plugin_activation',
   			plugin: plugin,
   			nonce: cnkt_installer_localize.admin_nonce,
   			dataType: 'json'
   		},
   		success: function(data) { 
	   		if(data){
		   		if(data.status === 'success'){
			   		el.attr('class', 'installed button disabled');
			   		el.html(cnkt_installer_localize.installed_btn);
		   		}
	   		}	
	   		is_loading = false;		   		
   		},
   		error: function(xhr, status, error) {
      		console.log(status);
      		is_loading = false;
   		}
   	});
	
	};
	
	
	
	/*
   *  Install/Activate Button Click
   *
   *  @since 1.0
   */ 
   
	$(document).on('click', '.cnkt-plugin-installer a.button', function(e){
   	var el = $(this),
   		 plugin = el.data('slug');   	
   	
   	e.preventDefault();
   	
   	if(!el.hasClass('disabled')){  
      	
      	if(is_loading) return false;	      
	   	
	   	// Installation
      	if(el.hasClass('install')){   
	      	cnkt_installer.install_plugin(el, plugin);
	   	}
	   	
	   	// Activation
	   	if(el.hasClass('activate')){
		   	cnkt_installer.activate_plugin(el, plugin);
		   }
   	}
	});
	
	
});