<div class="cta padding-bottom">
	<h3><?php _e('Help/Resources', ALM_NAME); ?></h3>
	<?php
			
		// Parse help/resources JSON feed on dashboard     
     	function get_resource_data($url) {
			$ch = curl_init();
			$timeout = 5;
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
			$data = curl_exec($ch);
			curl_close($ch);
			return $data;
		}		     
		$resource_url = 'http://download.connekthq.com/ajax-load-more/resources.json';
		$resource_json = json_decode(get_resource_data($resource_url));
		
		print "<ul>";
		foreach($resource_json->data->resource as $resource) {
			print '<li><a target="blank" href="'. $resource->url .'">'. $resource->title .'</a></li>';
		}
		print "</ul>";	
	?>
	<?php _e('<a href="https://github.com/dcooney/wordpress-ajax-load-more" target="blank" class="visit"><i class="fa fa-github"></i> Latest build on Github</a>', ALM_NAME); ?>
</div>