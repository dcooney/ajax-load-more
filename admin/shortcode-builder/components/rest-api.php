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
<div class="row input rest add-on" id="alm-rest">
   <h3 class="heading" tabindex="0"><?php _e('REST API', 'ajax-load-more'); ?></h3>
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
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Base URL in the Ajax Load More settings panel','ajax-load-more'); ?>."></a></h4>
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
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Namespace in the Ajax Load More settings panel','ajax-load-more'); ?>."></a></h4>
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
            <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('Set a default Endpoint in the Ajax Load More settings panel','ajax-load-more'); ?>."></a></h4>
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
   		 	<p><?php _e('Enter the ID of your javascript template.<br/><br/>e.g. <em>tmpl-alm-template</em> = <em>alm-template</em>', 'ajax-load-more'); ?><br/>&raquo; <a href="https://gist.github.com/dcooney/c89f5859b73256b36de4a0c3320d9b07" target="_blank"><?php _e('View Example', 'ajax-load-more'); ?></a></p>
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
         
         <div class="clear"></div>
         <hr>
         <p class="warning-callout">
            <?php _e('Visit <a href="http://v2.wp-api.org/" target="_blank">http://v2.wp-api.org</a> for documentation on creating custom <a href="http://v2.wp-api.org/extending/adding/" target="_blank">Endpoints</a> for use with Ajax Load More.', 'ajax-load-more'); ?>
         </p>

      </div>

   </div>
</div>
<?php } ?>