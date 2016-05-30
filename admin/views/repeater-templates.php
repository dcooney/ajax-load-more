<div class="admin ajax-load-more" id="alm-repeaters">	
	<div class="wrap">
		<div class="header-wrap">
			<h1><?php echo ALM_TITLE; ?>: <strong><?php _e('Repeater Templates', 'ajax-load-more'); ?></strong></h1>
			<p><?php _e('The library of editable templates for use within your theme', 'ajax-load-more'); ?></p>  
		</div>
		<div class="cnkt-main form-table repeaters">				
		   <!-- Repeaters -->
		   <div class="group">
		   <?php 
		   if (has_action('alm_custom_repeaters') || has_action('alm_unlimited_repeaters')){ ?>
				<span class="toggle-all">
					<span class="inner-wrap">
						<em class="collapse"><?php _e('Collapse All', 'ajax-load-more'); ?></em>
						<em class="expand"><?php _e('Expand All', 'ajax-load-more'); ?></em>
					</span>
				</span> 
			<?php } ?>			
			   <!-- Default Template -->
			   <div class="row template default-repeater">
	   		   <?php      
		   		   global $wpdb;
						$table_name = $wpdb->prefix . "alm";
						$blog_id = $wpdb->blogid;  
						if($blog_id > 1){	
							$filename = ALM_PATH. 'core/repeater/'. $blog_id .'/default.php';
						}else{
							$filename = ALM_PATH. 'core/repeater/default.php';			
						} 
							               
	               $handle = fopen ($filename, "r");
      				$contents = '';
      				if(filesize ($filename) != 0){
      				   $contents = fread ($handle, filesize ($filename));		               
      				}
      				fclose ($handle);
	            ?> 
	            <h3 class="heading"><?php _e('Default Template', 'ajax-load-more'); ?></h3>	            
	            <div class="expand-wrap">           	            
		            <div class="wrap repeater-wrap" data-name="default" data-type="default">							
							<label class="template-title" for="template-default">
							   <?php _e('Enter the HTML and PHP code for the default template', 'ajax-load-more'); ?>:
                     </label>		
                                 
							<?php 
                        do_action('alm_get_layouts'); // Layouts - Template Selection
      			      ?> 
			            <textarea rows="10" id="template-default" class="_alm_repeater"><?php echo $contents; ?></textarea>
			            <script>
                        var editorDefault = CodeMirror.fromTextArea(document.getElementById("template-default"), {
                          mode:  "application/x-httpd-php",
                          lineNumbers: true,
                          lineWrapping: true,
                          indentUnit: 0,
                          matchBrackets: true,
                          viewportMargin: Infinity,
                          extraKeys: {"Ctrl-Space": "autocomplete"},
                        });
                     </script>      		            
							<input type="submit" value="<?php _e('Save Template', 'ajax-load-more'); ?>" class="button button-primary save-repeater" data-editor-id="template-default">
		            	<div class="saved-response">&nbsp;</div>  
							<?php include( ALM_PATH . 'admin/includes/components/repeater-options.php'); ?>       	
		            </div>		               		               	            
	            </div>	            	
			   </div>
			   <!-- End Default Template -->		
			   	   
            <?php               
				   // Custom Repeaters v2 - /cta/extend.php
            	if (!has_action('alm_get_unlimited_repeaters') && !has_action('alm_get_custom_repeaters')){ // If Custom Repeaters is NOT installed
                  echo '<div class="row no-brd">';
                  include( ALM_PATH . 'admin/includes/cta/extend.php');
                  echo '</div>';                  
				   }				   
				    
			   	if (has_action('alm_custom_repeaters')) // List custom repeaters v1
						do_action('alm_custom_repeaters'); 						
						
			   	if (has_action('alm_unlimited_repeaters')) // List custom repeaters v2
						do_action('alm_unlimited_repeaters'); 
				?>
					   
				<script>
					jQuery(document).ready(function($) {					   
					   "use strict";
						var _alm_admin = {};				
						
					    /*
					    *  _alm_admin.saveRepeater
					    *  Save Custom Repeater Value
					    *
					    *  @since 2.0.0
					    */  
						
						_alm_admin.saveRepeater = function(btn, editorId) {							   
							var container = btn.parent('.repeater-wrap'),
								el = $('textarea._alm_repeater', container),
								textarea = el.next('.CodeMirror'),
								btn = btn,
								value = '',
								repeater = container.data('name'), // Get templete name
								type = container.data('type'), // Get template type (default/repeater/unlimited)
								alias = ($('input._alm_repeater_alias', container).length) ? $('input._alm_repeater_alias', container).val() : '',
								responseText = $(".saved-response", container);
                     
                     if(type === undefined) // Fix for custom repeaters v1
                        type = 'undefined';
                     	
							//Get value from CodeMirror textarea						
							var id = editorId.replace('template-', ''); // Editor ID								
							
							if(id === 'default'){ // Default Template						   
								value = editorDefault.getValue();
						   }else{ // Repeater Templates	
						      var eid = window['editor_'+id]; // Set editor ID
						      value = eid.getValue();   						   
						   }
						   	
						   // if value is null, then set repeater to non breaking space
						   if(value === '' || value === 'undefined'){
						      value = '&nbsp;';
						   }   
						                     
						   //If template is not already saving, then proceed
							if (!btn.hasClass('saving')) {
							   btn.addClass('saving');
							   textarea.addClass('loading');
								responseText.addClass('loading').html('<?php _e('Saving template...', 'ajax-load-more') ?>');
								responseText.animate({'opacity' : 1});
								
								$.ajax({
									type: 'POST',
									url: alm_admin_localize.ajax_admin_url,
									data: {
										action: 'alm_save_repeater',
										value: value, 
										repeater: repeater,
										type: type,
										alias: alias,
										nonce: alm_admin_localize.alm_admin_nonce,
									},
									success: function(response) {											  		
									  
									  $('textarea#'+editorId).val(value); // Set the target textarea val to 'value'
									  
									  setTimeout(function() { 
										   responseText.delay(500).html(response).removeClass('loading');
										   textarea.removeClass('loading');				
									  }, 250);
									  						  
									  setTimeout(function() { 
										   responseText.animate({'opacity': 0}, function(){
   										   responseText.html('&nbsp;');
                                    btn.removeClass('saving');
										   });
											
										}, 4500);	
															
									},
									error: function(xhr, status, error) {
										responseText.html('<?php _e('Something went wrong and the data could not be saved.', 'ajax-load-more') ?>').removeClass('loading');
										btn.removeClass('saving');
										textarea.removeClass('loading');
									}
                        });                        
							}
						}
						
						
						$(document).on('click', 'input.save-repeater', function(){
							var btn = $(this),
							    editorId = btn.data('editor-id');								
							_alm_admin.saveRepeater(btn, editorId);
						});						
						
						
						/*
					    *  _alm_admin.updateRepeater
					    *  Update Repeater Value
					    *  
					    *  @since 2.5
					    */  
						
						_alm_admin.updateRepeater = function(btn, editorId) {							   
							var container = btn.closest('.repeater-wrap'),
								el = $('textarea._alm_repeater', container),
								btn = btn,
								btn_text = btn.html(),
								editor = $('.CodeMirror', container),
								repeater = container.data('name'), // Get templete name
								type = container.data('type'); // Get template type (default/repeater/unlimited)								
						   
							//Get value from CodeMirror textarea						
							var editorId = repeater,
								 id = editorId.replace('template-', ''); // Editor ID								
						   	            
						   //If template is not already saving, then proceed
							if (!btn.hasClass('updating')) {
							   btn.addClass('updating').text("<?php _e('Updating template...', 'ajax-load-more'); ?>");
							   editor.addClass('loading');								
								$.ajax({
									type: 'POST',
									url: alm_admin_localize.ajax_admin_url,
									data: {
										action: 'alm_update_repeater',
										repeater: repeater,
										type: type,
										nonce: alm_admin_localize.alm_admin_nonce,
									},
									success: function(response) {	
									   if(id === 'default'){ // Default Template						   
         								editorDefault.setValue(response);
                              }else{ // Repeater Templates	
         						      var eid = window['editor_'+id]; // Set editor ID
         						      eid.setValue(response);   						   
         						   }
									  		
									  	// Clear button styles				  
									   setTimeout(function() { 
                                 btn.text("<?php _e('Template Updated', 'ajax-load-more'); ?>").blur();                                 
                                 setTimeout(function() { 
                                    btn.closest('.alm-drop-btn').trigger('click'); // CLose drop menu
	                                 btn.removeClass('updating').html(btn_text).blur();		
	                                 editor.removeClass('loading');									
											}, 400);										
										}, 400);		
													
									},
									error: function(xhr, status, error) {
                              btn.removeClass('updating').html(btn_text).blur();	
                              editor.removeClass('loading');	
									}
                        });                        
							}
						}						
						
						$('.option-update a').click(function(){
							var btn = $(this);								
							_alm_admin.updateRepeater(btn);
						});
								
					});		
				</script>
				
		   </div>
		   <!-- End Repeaters -->		   
	   </div>
	   
	   <div class="cnkt-sidebar">
   	   <div class="cta">
				<h3><?php _e('Templating Help', 'ajax-load-more'); ?></h3>
				<div class="item">
					<p><strong><?php _e('What is a repeater template?', 'ajax-load-more'); ?></strong></p>
					<p><?php _e('A repeater template is a snippet of code that will execute over and over within a <a href="http://codex.wordpress.org/The_Loop" target="_blank">WordPress loop</a>.</p>', 'ajax-load-more'); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Can I include PHP in the repeater template?', 'ajax-load-more'); ?></strong></p>
					<p><?php _e('Yes, PHP and core WordPress functions such as, <code>the_title()</code> and <code>the_permalink()</code> are required.</p>', 'ajax-load-more'); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Tips and Tricks', 'ajax-load-more'); ?></strong></p>
					<ul>
						<li><?php _e('Always open and close your templates with an HTML element. In some rare cases data may not be displayed if not wrapped in HTML.<br/>e.g. <code>&lt;li> &lt;/li></code> or <code>&lt;div> &lt;/div></code>', 'ajax-load-more'); ?><br/> </li>
					</ul>
				</div>		
	   	</div>
	   	<?php include_once( ALM_PATH . 'admin/includes/cta/writeable.php'); ?>
	   </div>	
	   
	</div>
</div>