<div class="cta padding-bottom">
	<h3>About the plugin</h3>
	<?php
	// Parse JSON feed on dashboard
	function get_about_data($url) {
		$ch = curl_init();
		$timeout = 5;
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}		     
	$about_url = 'http://download.connekthq.com/ajax-load-more/about.json';
	$about_json = json_decode(get_about_data($about_url));	
	echo $about_json->data->description;	
	print "<ul>";
	foreach($about_json->data->links as $item) {
		print '<li><strong><a target="blank" href="'. $item->url .'">'. $item->title .'</a></strong><br>'. $item->description .'</li>';
	}
	print "</ul>";
	
	if($about_json->data->extras){
		print $about_json->data->extras;
		print "<br/>";
	}	
	?>	
	<a href="http://twitter.com/kaptonkaos" target="blank" class="visit"><i class="fa fa-twitter"></i> Follow on Twitter</a>
</div>

