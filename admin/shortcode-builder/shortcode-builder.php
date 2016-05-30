<span class="toggle-all"><span class="inner-wrap"><em class="collapse"><?php _e('Collapse All', 'ajax-load-more'); ?></em><em class="expand"><?php _e('Expand All', 'ajax-load-more'); ?></em></span></span>

<?php 
   $alm_options = get_option( 'alm_settings' );         
   if(!isset($alm_options['_alm_disable_dynamic'])) // Check if '_alm_disable_dynamic is set within settings
	   $alm_options['_alm_disable_dynamic'] = '0';		
	   
	$disable_dynamic_content = $alm_options['_alm_disable_dynamic'];   
?>


<?php if(has_action('alm_cache_installed')){ ?>
<!-- CACHE -->
<div class="row input cache add-on" id="alm-cache">
   <h3 class="heading"><?php _e('Cache', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
	      <h4><?php _e('Enable Caching', 'ajax-load-more'); ?></h4>
		 	<p><?php _e('Turn on content caching.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="cache" value="true" id="cache-true" >
                 <label for="cache-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="cache" value="false" id="cache-false"  checked="checked">
                 <label for="cache-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>
      <div class="cache_id">        
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Cache ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('You <u>must</u> generate a unique ID for this cached query - this unique ID will be used as a content identifier.', 'ajax-load-more'); ?></p>   		 	
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="text" class="alm_element disabled" name="cache-id" id="cache-id" disabled="disabled">
               <div class="clear"></div>
               <p class="generate-cache-id"><a href="javascript:void(0);"><i class="fa fa-random"></i> <?php _e('Generate New ID', 'ajax-load-more'); ?></a></p>  
            </div>
         </div>        
      </div> 
   </div>
</div> 
<?php } ?>


<?php if(has_action('alm_comments_installed')){ ?>
<!-- COMMENTS -->
<div class="row input comments add-on" id="alm-comments">
   <h3 class="heading"><?php _e('Comments', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
	      <h4><?php _e('Comments', 'ajax-load-more'); ?></h4>
		 	<p><?php _e('Enable Ajax Load More to display blog comments.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="comments" value="true" id="comments-true" >
                 <label for="comments-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="comments" value="false" id="comments-false"  checked="checked">
                 <label for="comments-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>
      <div class="comments_extras">   
	                        
         
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current single post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="text" value="get_the_ID()" id="comments_post_id"  class="alm_element disabled-input" disabled="disabled">  
            </div>
         </div>           
              
              
         <div class="clear"></div>         
         <hr>         
         <div class="section-title">
            <h4><?php _e('Comments Per Page', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The number of top level items to show for each page of comments.', 'ajax-load-more'); ?></p>   		 	
         </div>         
   		<div class="wrap">            
            <div class="inner">            
               <input type="number" class="alm_element numbers-only" name="comments-per-page" id="comments-per-page" step="1" min="1" value="5">  
            </div>
         </div>          
         <div class="section-title full">
            <p><?php _e('<strong>Note</strong>: The amount selected does NOT include comment replies.', 'ajax-load-more'); ?></p>
         </div>
            
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Comment Type', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The type of comment(s) to display.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <select class="alm_element comments_type" id="comments_type">
                  <option value="comment" selected="selected"><?php _e('Comment', 'ajax-load-more'); ?></option>
                  <option value="all"><?php _e('All', 'ajax-load-more'); ?></option>
                  <option value="trackback"><?php _e('Trackback', 'ajax-load-more'); ?></option>
                  <option value="pingback"><?php _e('Pingback', 'ajax-load-more'); ?></option>
                  <option value="pings"><?php _e('Pings', 'ajax-load-more'); ?></option>
               </select>                
            </div>
         </div> 
         
         
         <div class="clear"></div>
         <hr>          
         <div class="section-title">
	         <h4><?php _e('Comment Style', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select the HTML container style for your comments.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
	            <ul class="comment_container_type">	             
                   <li>
                    <input type="radio" id="comment-type-ol" value="ol" name="alm_comment_style" class="alm_element" checked="checked">
                    <label for="comment-type-ol">&lt;ol&gt; &lt;/ol&gt;</label>
                   </li>   	
                   <li>
                    <input type="radio" id="comment-type-ul" value="ul" name="alm_comment_style" class="alm_element">
                    <label for="comment-type-ul">&lt;ul&gt; &lt;/ul&gt;</label>
                   </li>         
                   <li>
                    <input type="radio" id="comment-type-div" value="div" name="alm_comment_style" class="alm_element">
                    <label for="comment-type-div">&lt;div&gt; &lt;/div&gt;</label>
                   </li>
               </ul>
            </div>
         </div>
         
            
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Comment Template', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select a repeater template that will display comment data.', 'ajax-load-more'); ?></p>
   		 </div>
   		 
         <div class="wrap">
            <div class="inner">            
               <select class="alm_element comments_template" id="comments_template">
                  <option value="none" selected="selected"><?php _e('None', 'ajax-load-more'); ?></option>
                  <option name="default" id="chk-default" value="default"><?php _e('Default', 'ajax-load-more'); ?></option>	
               	<?php if (has_action('alm_get_custom_repeaters')) {
               	  do_action('alm_get_custom_repeaters');
               	}
               	if (has_action('alm_get_unlimited_repeaters')) {
               	  do_action('alm_get_unlimited_repeaters');
               	}
               	?>
               </select>                
            </div>
         </div>          
         <div class="section-title full">
            <p><?php _e('<strong>Note</strong>: <span>None</span> will use the default WordPress comment layout.', 'ajax-load-more'); ?></p>
         </div>
         <div class="spacer"></div>
         <div class="clear"></div>
         <div class="select-theme-repeater">
            <span class="or">or</span>
            <hr/>
            <div class="spacer"></div>
            <div class="section-title">
               <h4><?php _e('Callback Function', 'ajax-load-more'); ?></h4>
      		 	<p><?php _e('A custom <a href="https://codex.wordpress.org/Function_Reference/wp_list_comments#Arguments" target="_blank">callback</a> function that will display each comment.', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">            
                  <input type="text" value="" placeholder="function_name" id="comments_callback"  class="alm_element">               
               </div>
            </div>
            <div class="section-title full">
               <p><?php _e('<strong>Note</strong>: The majority of premium themes have a custom callback function for displaying comments. Please see comments.php or functions.php within your theme directory to locate the callback function for your theme.', 'ajax-load-more'); ?></p>
            </div>
         </div>                
         
         <p class="warning-callout">
            <?php _e('You must add the comments shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method. &raquo; <a href="https://connekthq.com/plugins/ajax-load-more/add-ons/comments/" target="_blank">View documentation</a>', 'ajax-load-more'); ?>
         </p>  
               
      </div> 
   </div>
</div> 
<?php } ?>


<?php if(has_action('alm_paging_installed')){ ?>
<!-- PAGING -->
<div class="row input paging add-on" id="alm-paging">
   <h3 class="heading"><?php _e('Paging', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Replace infinite scrolling with a paged ajax navigation system.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="paging" value="true" id="paging-true" >
                 <label for="paging-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="paging" value="false" id="paging-false" checked="checked">
                 <label for="paging-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      
      <div class="clear"></div>
      <div id="nav-controls">
         
         <hr/>
         <div class="section-title">
            <h4><?php _e('Paging Controls', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Show (&laquo;)previous and next(&raquo;) buttons.', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="paging-controls" value="true" id="paging-controls-true" >
                    <label for="paging-controls-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="paging-controls" value="false" id="paging-controls-false" checked="checked">
                    <label for="paging-controls-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
         
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Paging Navigation Classes', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Add custom CSS classes to the paging navigation menu.', 'ajax-load-more'); ?></p>
   		 </div>
   		 <div class="wrap">            
            <div class="inner">            
               <input type="text" class="alm_element" name="paging-classes" id="paging-classes" placeholder="portfolio-paging-menu">  
            </div>
         </div>
         
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Show at Most', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The maximum amount of page menu items to show at a time. <br/.>0 = no maximum', 'ajax-load-more'); ?></p>
   		 </div>
   		 <div class="wrap">            
            <div class="inner">            
               <input type="number" class="alm_element numbers-only" name="show-at-most" id="show-at-most" step="2" min="0" value="7">  
            </div>
         </div>
         
      </div>
      
   </div>
</div> 
<?php } ?>


<?php if(has_action('alm_preload_installed')){ ?>
<!-- PRELOAD -->
<div class="row input preload add-on" id="alm-preload">
   <h3 class="heading"><?php _e('Preloaded', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Preload posts prior to making Ajax requests.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="preload" value="true" id="preload-true" >
                 <label for="preload-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="preload" value="false" id="preload-false" checked="checked">
                 <label for="preload-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      <div class="clear"></div>
      <div class="preload_amount">        
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Preload Amount', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Enter the number of posts to preload.', 'ajax-load-more'); ?></p>   		 	
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="number" class="alm_element numbers-only" name="preload-amount" id="preload-amount" step="1" min="1" value="5">  
            </div>
         </div>        
      </div> 
   </div>
</div> 
<?php } ?>


<?php if(has_action('alm_prev_post_installed')){ ?>
<!-- PREV POST -->
<div class="row input previous-post add-on" id="alm-previous-post">
   <h3 class="heading"><?php _e('Previous Post', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable the infinite scrolling of single posts.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="prev-post" value="true" id="prev-post-true" >
                 <label for="prev-post-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="prev-post" value="false" id="prev-post-false"  checked="checked">
                 <label for="prev-post-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul> 
         </div>
      </div>
      <div class="clear"></div>
      <div class="prev_post_id" style="display: none;">        
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Post ID', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('The ID of the current single post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="text" value="get_the_ID()" id="prev_post_id"  class="alm_element disabled-input" disabled="disabled">  
            </div>
         </div>              
            
            
         <div class="clear"></div>
         <hr>
         <div class="section-title">
            <h4><?php _e('Taxonomy', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Selecting a taxonomy means only previous posts from the same taxonomy will be returned','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Query previous posts from the same taxonomy.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <?php
            	// Taxonomies
            	$pp_tax_args = array(
            		'public'   => true,
            		'_builtin' => false	
            	); 
            	$pp_tax_output = 'objects';
            	$pp_taxonomies = get_taxonomies( $pp_tax_args, $pp_tax_output ); 
            	echo '<select class="alm_element" name="pp-taxonomy-select" id="pp-taxonomy-select">';
         		echo '<option value="" selected="selected">-- ' . __('Select Taxonomy', 'ajax-load-more') . ' --</option>';
         	   echo '<option value="category">' . __('Category', 'ajax-load-more') . '</option>';
         	   echo '<option value="tag">' . __('Tag', 'ajax-load-more') . '</option>';
               if ( $pp_taxonomies ) { 
            	   
            	   foreach( $pp_taxonomies as $pp_taxonomy ){
                     echo '<option name="pp-'.$pp_taxonomy->query_var.'" id="pp-'.$pp_taxonomy->query_var.'" value="'.$pp_taxonomy->query_var.'">'.$pp_taxonomy->label.'</option>';
            	   } 
            	              	    
            	} 
            	echo '</select>';
            	?>
            </div>
         </div> 
         
         <p class="warning-callout">
            <?php _e('You must add the Previous Post shortcode directly to your single template file using the <a href="https://developer.wordpress.org/reference/functions/do_shortcode/" target="_blank">do_shortcode</a> method. &raquo; <a href="https://connekthq.com/plugins/ajax-load-more/add-ons/previous-post/" target="_blank">View documentation</a>', 'ajax-load-more'); ?>
         </p>
      </div>
   </div>
</div> 
<?php } ?>  

 

<?php if(has_action('alm_rest_api_installed')){  
	
	// get rest defaults (from core alm settings)
	$restapi_baseurl = '/wp-json';
   if(isset($alm_options['_alm_rest_api_base_url']))
      $restapi_baseurl = $alm_options['_alm_rest_api_base_url'];
	
	$restapi_namespace = 'ajaxloadmore';
   if(isset($alm_options['_alm_rest_api_namespace']))
      $restapi_namespace = $alm_options['_alm_rest_api_namespace'];
	
	$restapi_endpoint = 'posts';
   if(isset($alm_options['_alm_rest_api_endpoint']))
      $restapi_endpoint = $alm_options['_alm_rest_api_endpoint'];
      
?>
<!-- REST API -->
<div class="row input rest add-on" id="alm-rest">
   <h3 class="heading"><?php _e('REST API', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable the WordPress REST API.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="rest" value="true" id="rest-true" >
                 <label for="rest-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="rest" value="false" id="rest-false"  checked="checked">
                 <label for="rest-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
      
      <div class="clear"></div>      
      <div class="restapi_options">    
             
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Base URL', 'ajax-load-more'); ?> 
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Base URL in the Ajax Load More settings panel','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Enter the base URL to your installation of the REST API.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">   
   			<div class="inner">                                                         
               <input type="text" id="rest-base" class="alm_element" name="rest-base" value="<?php echo $restapi_baseurl; ?>">
   			</div>
         </div>   
             
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Namespace', 'ajax-load-more'); ?> 
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Namespace in the Ajax Load More settings panel','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Enter the custom namespace for this Ajax Load More query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">   
   			<div class="inner">                                                         
               <input type="text" id="rest-namespace" class="alm_element" name="rest-namespace" value="<?php echo $restapi_namespace; ?>">
   			</div>
         </div>  
             
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Endpoint', 'ajax-load-more'); ?> 
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Endpoint in the Ajax Load More settings panel','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Enter your custom endpoint for this Ajax Load More query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">   
   			<div class="inner">                                                         
               <input type="text" id="rest-endpoint" class="alm_element" name="rest-endpoint" value="<?php echo $restapi_endpoint; ?>">
   			</div>
         </div> 
             
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Template ID', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Ajax Load More references this ID while looping and displaying your data. You must still select a repeater template for this instance of Ajax Load More','ajax-load-more'); ?>">.</a></h4>
   		 	<p><?php _e('Enter the ID of your javascript template.<br/><br/>e.g. <em>tmpl-alm-template</em> = <em>alm-template</em>', 'ajax-load-more'); ?><br/>&raquo; <a href="https://gist.github.com/dcooney/c89f5859b73256b36de4a0c3320d9b07" target="_blank">View example template</a></p>
   		 </div>
         <div class="wrap">   
   			<div class="inner">                                                         
               <input type="text" id="rest-template-id" class="alm_element" name="rest-template-id" value="">
   			</div>
         </div> 
             
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Debug Mode', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Enable debugging (console.log) of REST API responses in the browser console. ', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">   
   			<div class="inner">                                                         
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="rest-debug" value="true" id="rest-debug-true" >
                    <label for="rest-debug-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="rest-debug" value="false" id="rest-debug-false"  checked="checked">
                    <label for="rest-debug-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
   			</div>
         </div>  
                  
         <p class="warning-callout">
            <?php _e('Visit <a href="http://v2.wp-api.org/" target="_blank">http://v2.wp-api.org</a> for documentation on creating custom <a href="http://v2.wp-api.org/extending/adding/" target="_blank">Endpoints</a> for use with Ajax Load More.', 'ajax-load-more'); ?>
         </p>
         
      </div>
      
   </div>
</div> 
<?php } ?>  


<?php if(has_action('alm_seo_installed')){ ?>
<!-- SEO -->
<div class="row input seo add-on" id="alm-seo">
   <h3 class="heading"><?php _e('SEO (Search Engine Optimization)', 'ajax-load-more'); ?></h3>
   <div class="expand-wrap">
      <div class="section-title">
		 	<p><?php _e('Enable address bar URL rewrites as users page through ajax loaded content.', 'ajax-load-more'); ?></p>
		 </div>
      <div class="wrap">
         <div class="inner">	               
            <ul>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="true" id="seo-true" >
                 <label for="seo-true"><?php _e('True', 'ajax-load-more'); ?></label>
                </li>
                <li>
                 <input class="alm_element" type="radio" name="seo" value="false" id="seo-false"  checked="checked">
                 <label for="seo-false"><?php _e('False', 'ajax-load-more'); ?></label>
                </li>
            </ul>
         </div>
      </div>
   </div>
</div> 
<?php } ?>   

<?php

 	// List available repeaters
	echo '<div class="row repeater" id="alm-repeaters">';   		
	echo '<h3 class="heading">'.__('Template', 'ajax-load-more'). '</h3>';
	echo '<div class="expand-wrap">';
	echo '<div class="section-title">';
	if (has_action('alm_theme_repeaters_selection')){
		echo '<h4>'.__('Repeater Template', 'ajax-load-more').'</h4>';
	}
	echo '<p>'.__('Select which <a href="admin.php?page=ajax-load-more-repeaters" target="_parent">repeater template</a> you would like to use.', 'ajax-load-more'). '</p>';
	echo '</div>';
	echo '<div class="wrap"><div class="inner">';
	echo '<select name="repeater-select" class="alm_element">';
	echo '<option name="default" value="default" selected="selected">Default</option>';		
	if (has_action('alm_get_custom_repeaters')) {
	  do_action('alm_get_custom_repeaters');
	}
	if (has_action('alm_get_unlimited_repeaters')) {
	  do_action('alm_get_unlimited_repeaters');
	}
	echo '</select>';
	
	echo '</div></div>';
	?>
	
	
	<?php 
	// Get Theme Repeaters
   if (has_action('alm_theme_repeaters_selection')){
      do_action('alm_theme_repeaters_selection');  
   }     
   ?>
                        
	<?php
	// Custom Repeaters v2 - /cta/extend.php
	if (!has_action('alm_get_unlimited_repeaters') && !has_action('alm_get_custom_repeaters')) {
      include( ALM_PATH . 'admin/includes/cta/extend.php');
	}
	
	echo '</div>';
	echo '</div>';
	
	?>
 	
 	<?php if(has_action('alm_alternating_installed')){ ?>
 	<div class="row alternating add-on" id="alm-alternate">
      <h3 class="heading"><?php _e('Alternating Templates', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         
         <div class="section-title">
   		 	<p><?php _e('Select an alternate repeater template to be display every <em>x</em> number of posts.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="alternate" value="true" id="alternate-true" >
                    <label for="alternate-true"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="alternate" value="false" id="alternate-false" checked="checked">
                    <label for="alternate-false"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
         <div class="clear"></div>
         
         <div class="alternate_template_wrap">
            
   		   <hr/>
   		   <div class="spacer"></div>
   		   
   		   <div class="section-title">	      	   
   				<h4><?php _e('Template Sequencing', 'ajax-load-more'); ?></h4>
   				<p><?php _e('A comma separated list of post position values. Posts in these positions will be replaced by the alternate template', 'ajax-load-more'); ?>.<br/><br/>
   				<strong><?php _e('Pro-Tip', 'ajax-load-more'); ?></strong> - 
   				<?php _e('Use sequence "even" to use an alternate template for every even result', 'ajax-load-more'); ?>.</p>
   			</div>
   			<div class="wrap">
      			<div class="inner">                                                         
                  <input type="text" placeholder="3, 4, 7, 8" id="alternate-sequence-max" class="alm_element sm" name="alternate-sequence">
      			</div>
   			</div>  
   			
   			<div class="clear"></div>
   			<hr/>
   			<div class="spacer"></div>
   			
   			<div class="section-title">	      	   
   				<h4><?php _e('Sequence Loop', 'ajax-load-more'); ?></h4>
   				<p>
      				<?php _e('Select the maximum number of loops to repeat alternate template sequence.', 'ajax-load-more'); ?><br/><br/>
      				<?php _e('0 = no maximum', 'ajax-load-more'); ?>
   				</p>
   			</div>
   			<div class="wrap">
      			<div class="inner">                     
                     <input type="number" placeholder="0" id="alternate-sequence-max" class="alm_element sm numbers-only" name="alternate-sequence-max" value="0" step="1" min="0">
                     
               </div>
   			</div>
   			
            <div class="clear"></div>   			
            <hr/>
            <div class="spacer"></div>
            
   			<div class="section-title">	      	   
   				<h4><?php _e('Repeater Template', 'ajax-load-more'); ?></h4>
   				<?php
      				echo '<p>'.__('Select an alternate <a href="admin.php?page=ajax-load-more-repeaters" target="_parent">repeater template</a>.', 'ajax-load-more'). '</p>';
      			?>
   			</div>
   			<div class="wrap">
   				<div class="inner">
   					<?php
   						echo '<select name="alternate-repeater-select" class="alm_element">';
   						echo '<option name="" value="" selected="selected">'.__('-- Select Repeater --', 'ajax-load-more').'</option>';	
   						echo '<option name="default" value="default">Default</option>';		
   						if (has_action('alm_get_custom_repeaters')) {
   						  do_action('alm_get_custom_repeaters');
   						}
   						if (has_action('alm_get_unlimited_repeaters')) {
   						  do_action('alm_get_unlimited_repeaters');
   						}
   						echo '</select>';						
   					?>
   				</div>
   			</div>
   			<?php 
   			// Get Theme Repeaters
   		   if (has_action('alm_theme_repeaters_selection')){
   		      do_action('alm_theme_repeaters_selection');  
   		   }     
   		   ?>
   		   
         </div>
         
      </div>
   </div>
   <?php } ?>
   
	
	<?php
   // List registered post_types
   $pt_args = array(
      'public'   => true
   );
	$types = get_post_types($pt_args);
	if($types){
		echo '<div class="row checkboxes post_types" id="alm-post-types">';   		
		echo '<h3 class="heading">'.__('Post Types', 'ajax-load-more'). '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>'.__('Select Post Types to query.', 'ajax-load-more'). '</p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner"><ul>';
	   foreach( $types as $type ){
	     $typeobj = get_post_type_object( $type );
	     $name = $typeobj->name;
	     if( $name != 'revision' && $name != 'attachment' && $name != 'nav_menu_item' && $name != 'acf'){
            echo '<li><input class="alm_element" type="checkbox" name="chk-'.$typeobj->name.'" id="chk-'.$typeobj->name.'" data-type="'.$typeobj->name.'"><label for="chk-'.$typeobj->name.'">'.$typeobj->labels->singular_name.'</label></li>';
			}
	    }
	    echo '</ul></div></div>';
	    echo '</div>';
	    echo '</div>';
   }
   
   
   // List Post Formats
   if ( current_theme_supports( 'post-formats' ) ) {
       $post_formats = get_theme_support( 'post-formats' );
       if($post_formats){
   		echo '<div class="row checkboxes post_format" id="alm-post-format">';   		
   		echo '<h3 class="heading">'.__('Post Format', 'ajax-load-more'). '</h3>';
   		echo '<div class="expand-wrap">';
   		echo '<div class="section-title">';
   		echo '<p>'.__('Select a <a href="http://codex.wordpress.org/Post_Formats" target="_blank">Post Format</a> to query.', 'ajax-load-more'). '</p>';
   		echo '</div>';
   		echo '<div class="wrap"><div class="inner"><select class="alm_element" name="post-format-select" id="post-format-select">';
   		echo '<option value="" selected="selected">-- ' . __('Select Post Format', 'ajax-load-more') . ' --</option>';
   		echo '<option name="chk-standard" id="chk-standard" value="standard">' . __('Standard', 'ajax-load-more') . '</option>';		
   	   foreach( $post_formats[0] as $post_format ){
            echo '<option name="chk-'.$post_format.'" id="chk-'.$post_format.'" value="'.$post_format.'">'.ucwords($post_format).'</option>';
   	   }	   
   		echo '</select></div></div>';
   		echo '</div>';
   		echo '</div>';
      }
       
   }
   
   // List Categories
   
   if($disable_dynamic_content){
	   $cats = 'null';
   }else{
	   $cats = get_categories();
   }
	if($cats){ ?>		
	<div class="row checkboxes categories" id="alm-categories">
      <h3 class="heading"><?php _e('Category', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4>Include</h4>
            <p><?php _e('A comma separated list of categories to include by slug. (design, research etc...)', 'ajax-load-more'); ?><br/>
            &raquo; <a href="admin.php?page=ajax-load-more-examples#example-category">
            <?php _e('view example', 'ajax-load-more'); ?></a></p>
         </div>
         <div class="wrap">
            <div class="inner">            
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="category-select" id="category-select" multiple="multiple">';
                  foreach( $cats as $cat ){
                     echo '<option name="chk-'.$cat->slug.'" id="chk-'.$cat->slug.'" value="'.$cat->slug.'">'.$cat->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element" name="category-select" id="category-select" placeholder="design, development, science etc...">';
               }
               ?>
            </div>
         </div>
         
         <div class="clear"></div>
         <hr/>
      
         <div class="section-title">         
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
            <p><?php _e('A comma separated list of categories to exclude by ID. (3, 12, 35 etc..)', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">           
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="category-exclude-select" id="category-exclude-select" multiple="multiple">';
                  foreach( $cats as $cat ){
                     echo '<option name="chk-'.$cat->term_id.'" id="chk-'.$cat->term_id.'" value="'.$cat->term_id.'">'.$cat->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element numbers-only" name="category-exclude-select" id="category-exclude-select" placeholder="10, 12, 19 etc...">';
               }
               ?>
            </div>
            <div class="clear"></div>
         </div>     
      </div>
   </div>
    
    <?php }
    
    // Tags	    
	if($disable_dynamic_content){
	   $tags = 'null';
   }else{
	   $tags = get_tags();
   }
	if($tags){ ?>
	<div class="row checkboxes tags" id="alm-tags">
		<h3 class="heading"><?php _e('Tag', 'ajax-load-more'); ?></h3>
		<div class="expand-wrap">
   		<div class="section-title">
   		<h4><?php _e('Include', 'ajax-load-more'); ?></h4>
   		<p><?php _e('A comma separated list of tags to include by slug. (toronto, canada etc...)', 'ajax-load-more'); ?><br/>&raquo; <a href="admin.php?page=ajax-load-more-examples#example-tag">view example</a></p>
   		</div>
   		<div class="wrap">
   		   <div class="inner">
              <?php
         	  if(!$disable_dynamic_content){
         	     echo '<select class="alm_element multiple" name="tag-select" id="tag-select" multiple="multiple">';
             	  foreach( $tags as $tag ){
                     echo '<option name="chk-'.$tag->slug.'" id="chk-'.$tag->slug.'" value="'.$tag->slug.'">'.$tag->name.'</option>';
            	  }
            	  echo '</select>';
         	  }else{
            	  echo '<input type="text" class="alm_element" name="tag-select" id="tag-select" placeholder="hockey, puck, crosby etc...">';
         	  }
         	   ?>
            </div>
   	  </div>
   	  <div class="clear"></div>
         <hr/>
      
         <div class="section-title">         
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
            <p><?php _e('A comma separated list of tags to exclude by ID. (30, 12, 99 etc..)', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap">
            <div class="inner">           
               <?php
               if(!$disable_dynamic_content){
                  echo '<select class="alm_element multiple" name="tag-exclude-select" id="tag-exclude-select" multiple="multiple">';
                  foreach( $tags as $tag ){
                     echo '<option name="chk-'.$tag->term_id.'" id="chk-'.$tag->term_id.'" value="'.$tag->term_id.'">'.$tag->name.'</option>';
                  }
                  echo '</select>';
               }else{
                  echo '<input type="text" class="alm_element numbers-only" name="tag-exclude-select" id="tag-exclude-select" placeholder="10, 12, 19 etc...">';
               }
               ?>
            </div>
            <div class="clear"></div>
         </div>
	  </div>
   </div>
   <?php } ?>
    
   <?php
	// Taxonomies
	$tax_args = array(
		'public'   => true,
		'_builtin' => false	
	); 
	$tax_output = 'objects';
	$taxonomies = get_taxonomies( $tax_args, $tax_output ); 
	if ( $taxonomies ) { ?>
	<div class="row taxonomy" id="alm-taxonomy">
		<h3 class="heading"><?php _e('Taxonomy', 'ajax-load-more'); ?></h3>
		<div class="expand-wrap">			
			<div class="section-title"> 
	         <p><?php _e('Select a taxonomy then select the terms and an operator.', 'ajax-load-more'); ?></p>
	      </div>
			<div class="wrap">			
				<?php include( ALM_PATH . 'admin/shortcode-builder/includes/tax-query-options.php'); ?>			   
			   <div class="controls">
               <button id="add-tax-query" class="button button-primary">Add Another</button>  
            </div>		    	    
		    </div>		    
	    </div>
	</div>
	<?php }?>
	
	
   <!-- Date -->
   <div class="row input date" id="alm-date">
      <h3 class="heading"><?php _e('Date', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Enter a year, month(number) and day to query by date archive.<br/>&raquo; <a href="admin.php?page=ajax-load-more-examples#example-date">view example</a>', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <div class="wrap-30">
                  <?php $today = getdate(); ?>
                  <label for="input-year" class="full"><?php _e('Year:', 'ajax-load-more'); ?></label>
                  <input name="input-year" class="alm_element sm numbers-only" type="text" id="input-year" maxlength="4" placeholder="<?php echo $today['year']; ?>">
               </div>
               <div class="wrap-30">
                  <label for="input-month" class="full"><?php _e('Month:', 'ajax-load-more'); ?></label>
                  <input name="input-month" class="alm_element sm numbers-only" type="text" id="input-month" maxlength="2" placeholder="<?php echo $today['mon']; ?>">
               </div>
               <div class="wrap-30">
                  <label for="input-day" class="full"><?php _e('Day:', 'ajax-load-more'); ?></label>
                  <input name="input-day" class="alm_element sm numbers-only" type="text" id="input-day" maxlength="2" placeholder="<?php echo $today['mday']; ?>">
               </div>
            </div>
         </div>
      </div>
   </div>
        
   
   <?php // Meta_Query / Custom Fields ?>
   <div class="row input meta-key" id="alm-meta-key">
      <h3 class="heading"><?php _e('Custom Fields (Meta_Query)', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title full">
            <p><?php _e('Query for <a href="http://codex.wordpress.org/Class_Reference/WP_Meta_Query" target="_blank">custom field</a> by entering a custom field key, value and operator.', 'ajax-load-more'); ?></p>
         </div>
         <div class="wrap full">
            <div class="meta-query-wrap-first">
               <div class="meta-query-wrap">
                  <?php include( ALM_PATH . 'admin/shortcode-builder/includes/meta-query-options.php'); ?>
               </div>
            </div>
            <div id="meta-query-relation">
               <div class="inner border-top highlighted">
                  <div class="wrap-30 wrap-50">
                     <label for="meta-relation" class="full"><?php _e('Relation:', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The logical relationship between each custom field when there is more than one.','ajax-load-more'); ?>"></a></label>
                     <select class="alm_element meta-relation" name="meta-relation">
                        <option value="AND" selected="selected">AND</option>
                        <option value="OR">OR</option>
                     </select>
                  </div>
               </div>
            </div>
            
            <div id="meta-query-extended">
               
            </div>             
            
            <div class="controls">
               <button class="button button-primary" id="add-meta-query"><?php _e('Add Another', 'ajax-load-more'); ?></button>  
            </div> 
                   
         </div>      
      </div>
   </div>
   
   
   <?php // List Authors
	if($disable_dynamic_content){
	   $authors = 'null';
   }else{
	   $authors = get_users();
   }	   	
	if($authors){
		echo '<div class="row checkboxes authors" id="alm-authors">';
		echo '<h3 class="heading">' . __('Author', 'ajax-load-more') . '</h3>';
		echo '<div class="expand-wrap">';
		echo '<div class="section-title">';
		echo '<p>' . __('Select an Author to query(by ID).', 'ajax-load-more') . '<br/>&raquo; <a href="admin.php?page=ajax-load-more-examples#example-author">view example</a></p>';
		echo '</div>';
		echo '<div class="wrap"><div class="inner">';
		if(!$disable_dynamic_content){
		   echo '<select class="alm_element" name="author-select" id="author-select">';
   		echo '<option value="" selected="selected">-- ' . __('Select Author', 'ajax-load-more') . ' --</option>';
   	   foreach( $authors as $author ){
            echo '<option name="chk-'.$author->user_login.'" id="chk-'.$author->user_login.'" value="'.$author->ID.'">'.$author->display_name.'</option>';
   	    }
   	   echo '</select>';
	   }else{
   	  echo '<input type="text" class="alm_element numbers-only" name="author-select" id="author-select" placeholder="1">';
	   }	   
	   echo '</div></div>';
	   echo '</div>';
	   echo '</div>';
    }
   ?>    
    
   <!-- Search term -->
   <div class="row input search-term" id="alm-search">
      <h3 class="heading"><?php _e('Search Term', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Enter a search term to query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="search-term" class="alm_element" type="text" id="search-term" value="" placeholder="<?php _e('Enter search term', 'ajax-load-more'); ?>">
            </div>
         </div>
      </div>
   </div> 
    
   <!-- Custom Arguments -->
   <div class="row input custom-arguments" id="alm-custom-args">
      <h3 class="heading"><?php _e('Custom Arguments', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('A semicolon separated list of custom value:pair arguments.<br/><br/>e.g. tag_slug__and:design,development; event_display:upcoming. Default', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="custom-args" class="alm_element" type="text" id="custom-args" value="" placeholder="<?php _e('event_display:upcoming', 'ajax-load-more'); ?>">
            </div>
         </div>
      </div>
   </div>   
    
   <!-- Post Parameters -->
   <div class="row input post-in" id="alm-post-in">
      <h3 class="heading"><?php _e('Post Parameters', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Include', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('A comma separated list of post ID\'s to query.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input name="post__in" class="alm_element numbers-only" type="text" id="post__in" value="" placeholder="<?php _e('225, 340, 818, etc...', 'ajax-load-more'); ?>">
            </div>
         </div>
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Exclude', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('A comma separated list of post ID\'s to exclude from query.', 'ajax-load-more'); ?><br/>&raquo; <a href="admin.php?page=ajax-load-more-examples#example-exclude"><?php _e('view example', 'ajax-load-more'); ?></a></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element numbers-only" name="exclude-posts" type="text" id="exclude-posts" value="" placeholder="199, 216, 345, etc...">
            </div>
         </div>
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
            <h4><?php _e('Post Status', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Post Status parameters are only available for logged in (admin) users. Non logged in users will only have access to view content in a \'publish\' state. ','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Select status of the post.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">               
               <select class="alm_element" name="post-status" id="post-status">
                   <option value="publish" selected="selected"><?php _e('Published', 'ajax-load-more'); ?></option>
                   <option value="any">Any</option>
                   <option value="draft">Draft</option>
                   <option value="future">Future</option>
                   <option value="pending">Pending</option>
                   <option value="private">Private</option>
                   <option value="trash">Trash</option>
               </select>
            </div>
         </div>
      </div>
   </div>   
    
   <!-- Ordering -->
   <div class="row ordering" id="alm-order">
      <h3 class="heading"><?php _e('Ordering', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Sort posts by Order and Orderby parameters.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner half">
               <label class="full"><?php _e('Order', 'ajax-load-more'); ?>:</label>
               <select class="alm_element" name="post-order" id="post-order">
                   <option value="DESC" selected="selected">DESC (default)</option>
                   <option value="ASC">ASC</option>
               </select>
            </div>
            <div class="inner half">
               <label class="full"><?php _e('Order By', 'ajax-load-more'); ?>:</label>
               <select class="alm_element" name="post-orderby" id="post-orderby">
                   <option value="date" selected="selected">Date (default)</option>
                   <option value="title">Title</option>
                   <option value="name">Name (slug)</option>
                   <option value="menu_order">Menu Order</option>
                   <option value="author">Author</option>
                   <option value="ID">ID</option>
                   <option value="comment_count">Comment Count</option>
                   <option value="modified">Modified</option>
                   <option value="meta_value_num">meta_value_num</option>                   
               </select>
            </div>
         </div>
      </div>
   </div>   
   
   <!-- Offset -->
   <div class="row input offset" id="alm-offset">
      <h3 class="heading"><?php _e('Offset', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Offset the initial query by <em>\'n\'</em> number of posts', 'ajax-load-more'); ?>.</p>
   		 </div>
         <div class="wrap">
            <div class="inner"> 
               <input type="number" class="alm_element numbers-only" name="offset-select" id="offset-select" value="0" step="1" min="0">
            </div>
         </div>
      </div>
   </div>
      
   <!-- Posts Per Page -->
   <div class="row input posts_per_page" id="alm-post-page">
      <h3 class="heading"><?php _e('Posts Per Page', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Select the number of posts to load with each request.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input type="number" class="alm_element numbers-only" name="display_posts-select" id="display_posts-select" step="1" min="1" value="5">               
            </div>
         </div>
      </div>
   </div>   
         
   <!-- Pause -->
   <div class="row checkbox pause_load" id="alm-pause">
      <h3 class="heading"><?php _e('Pause', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Do <u>NOT</u> load any posts until user the clicks <em>Load More</em> button.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="t" id="pause_t">
                    <label for="pause_t"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="pause" value="f" id="pause_f" checked>
                    <label for="pause_f"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </div>
   </div>    
      
   <!-- Allow Scrolling Load -->
   <div class="row checkbox scroll_load" id="alm-scroll">
      <h3 class="heading"><?php _e('Scrolling', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Enable Scrolling', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Load more posts as the user scrolls the page.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="scroll" value="t" id="scroll_t" checked>
                     <label for="scroll_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="scroll" value="f" id="scroll_f">
                     <label for="scroll_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
            </div>
         </div> 
         <div class="clear"></div>
         <div class="scroll_distance">        
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Scroll Distance', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Distance is based on the position of the loading button from the bottom of the screen','ajax-load-more'); ?>"></a></h4>
      		 	<p><?php _e('The distance from the bottom of the screen to trigger loading of posts. (Default = 150)', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">            
                  <input type="number" class="alm_element numbers-only" name="scroll-distance" id="scroll-distance" step="10" min="0" value="150">  
               </div>
            </div> 
         </div>
         <div class="max_pages">        
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Maximum Pages', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('If using an Infinite Scroll button style you should set this to 0','ajax-load-more'); ?>"></a></h4>
      		 	<p><?php _e('Maximum number of pages to load while scrolling. (0 = unlimited)', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <div class="inner">            
                  <input type="number" class="alm_element numbers-only" name="max-select" id="max-select" step="1" min="0" value="5">  
               </div>
            </div> 
         </div>
         <div class="pause_override">        
            <div class="clear"></div>
            <hr>
            <div class="section-title">
               <h4><?php _e('Pause Override', 'ajax-load-more'); ?></h4>
      		 	<p><?php _e('Allow scrolling to override the Pause parameter and trigger the loading of posts on scroll.', 'ajax-load-more'); ?></p>
      		 </div>
            <div class="wrap">
               <ul>
                  <li>
                     <input class="alm_element" type="radio" name="pause_override" value="t" id="pause_override_t">
                     <label for="pause_override_t"><?php _e('True', 'ajax-load-more'); ?></label>
                  </li>
                  <li>
                     <input class="alm_element" type="radio" name="pause_override" value="f" id="pause_override_f" checked="checked">
                     <label for="pause_override_f"><?php _e('False', 'ajax-load-more'); ?></label>
                  </li>
               </ul>
            </div> 
         </div>         
      </div>
   </div>    
   
   <!-- Transition -->
   <div class="row input transition" id="alm-transition">
      <h3 class="heading"><?php _e('Transition', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
            <h4><?php _e('Transition Type', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Select a loading transition style.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">	                
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="transition" value="slide" id="transition-slide" checked="checked">
                    <label for="transition-slide"><?php _e('Slide', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="transition" value="fade" id="transition-fade">
                    <label for="transition-fade"><?php _e('Fade', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="transition" value="none" id="transition-none">
                    <label for="transition-none"><?php _e('None', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
         
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Transition Speed', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('0.5 seconds = 500, 1 second = 1000 etc.','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('The speed of the loading transition in milliseconds', 'ajax-load-more'); ?>.<br/></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="number" class="alm_element numbers-only" name="transition-speed" id="transition-speed" step="50" min="50" value="250">  
            </div>
         </div> 
         
         <div class="clear"></div>
         <hr>
         
         <div class="section-title">
            <h4><?php _e('Transition Container', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Removing the transition container may have undesired results and is not recommended.','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Remove the Ajax Load More (.alm-reveal) loading container.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <ul>
                   <li style="width:100%;">
                   <input class="alm_element" type="checkbox" name="remove_container" id="remove_container" value="f">
                   <label for="remove_container">Remove Container</label>
                   </li>
               </ul>  
            </div>
         </div>
      </div>
   </div>  
         
   <!-- Images Loaded -->
   <div class="row checkbox images_loaded" id="alm-images-loaded">
      <h3 class="heading"><?php _e('Images Loaded', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Wait for all images to load before displaying ajax loaded content', 'ajax-load-more'); ?>.
   		 	 <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Background images are currently not supported','ajax-load-more'); ?>"></a>		 	
   		 	</p>
   		 </div>
         <div class="wrap">
            <div class="inner">	               
               <ul>
                   <li>
                    <input class="alm_element" type="radio" name="images_loaded" value="t" id="images_loaded_t">
                    <label for="images_loaded_t"><?php _e('True', 'ajax-load-more'); ?></label>
                   </li>
                   <li>
                    <input class="alm_element" type="radio" name="images_loaded" value="f" id="images_loaded_f" checked="checked">
                    <label for="images_loaded_f"><?php _e('False', 'ajax-load-more'); ?></label>
                   </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   
   <!-- Destroy After -->
   <div class="row input destroy-after" id="alm-destroy-after">
      <h3 class="heading"><?php _e('Destroy After', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
         <div class="section-title">
   		 	<p><?php _e('Remove ajax load more functionality after \'<em>n</em>\' number of pages have been loaded.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">            
               <input type="number" class="alm_element numbers-only" name="destroy-after" id="disable-after" step="1" min="0" value="">  
            </div>
         </div>
      </div>
   </div>  
      
   <!-- Button Text -->
   <div class="row input btn-label" id="alm-btn-label">
      <h3 class="heading"><?php _e('Button Labels', 'ajax-load-more'); ?></h3>
      
      <div class="expand-wrap">
         
         <div class="section-title">
	         <h4><?php _e('Button Label', 'ajax-load-more'); ?></h4>
   		 	<p><?php _e('Customize the text of the <em>Load More</em> button.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="button-label" type="text" id="button-label" value="<?php _e('Older Posts', 'ajax-load-more'); ?>">
            </div>
         </div>
         
         <div class="clear"></div>
         <hr/>
         
         <div class="section-title">
	         <h4><?php _e('Button Loading Label', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Leave field empty to not update text while loading content','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Update the text of the <em>Load More</em> button while content is loading.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="button-loading-label" type="text" id="button-loading-label" value="" placeholder="<?php _e('Loading Posts...', 'ajax-load-more'); ?>">
            </div>
         </div>         
         
      </div>
   </div>
   
   <!-- Container Classes -->
   <div class="row input alm-classes" id="alm-classes">
      <h3 class="heading"><?php _e('Container Options', 'ajax-load-more'); ?></h3>
      <div class="expand-wrap">
	      
         <div class="section-title">
	         <h4><?php _e('Container Type', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('You can define a global container type on the Ajax Load More settings screen','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Override the global Container Type that was set on <a href="admin.php?page=ajax-load-more">ALM Settings page</a>.', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
	            <ul class="container_type">		             
                   <li>
                    <input type="radio" id="type-ul" value="ul" name="alm_container_type" class="alm_element">
                    <label for="type-ul">&lt;ul&gt; &lt;/ul&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="type-div" value="div" name="alm_container_type" class="alm_element">
                    <label for="type-div">&lt;div&gt; &lt;/div&gt;</label>
                   </li>
                   <li>
                    <input type="radio" id="type-table" value="table" name="alm_container_type" class="alm_element">
                    <label for="type-table">&lt;table&gt; &lt;/table&gt;</label>
                   </li>
               </ul>
            </div>
         </div>
         <div class="clear"></div>
         <hr/>
         <div class="section-title">
	         <h4><?php _e('Container Classes', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('You can define global container classes on the Ajax Load More settings screen','ajax-load-more'); ?>"></a></h4>
   		 	<p><?php _e('Add custom CSS classes to the Ajax Load More container. <br/><br/> e.g. portfolio-listing large-12 etc', 'ajax-load-more'); ?></p>
   		 </div>
         <div class="wrap">
            <div class="inner">
               <input class="alm_element" name="container-classes" type="text" id="container-classes" placeholder="portfolio-listing large-12">
            </div>
         </div>
         
      </div>
   </div>
   
   <div class="clear"></div>  
   