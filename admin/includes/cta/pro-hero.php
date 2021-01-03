<?php
if ( ! has_action( 'alm_pro_installed' ) ) {
	$pro_addon = alm_get_pro_addon();
	foreach( $pro_addon as $pro ) {
		$name   = $pro['name'];
		$intro  = $pro['intro'];
		$desc   = $pro['desc'];
		$action = $pro['action'];
		$key    = $pro['key'];
		$status = $pro['status'];
		$settings_field = $pro['settings_field'];
		$url    = $pro['url'];
		$img    = $pro['img'];
?>
<div class="group no-shadow highlighted">
	<a href="<?php echo $url; ?>?utm_source=WP%20Admin&utm_medium=ALM%20Add-ons&utm_campaign=<?php echo $name; ?>" target="_blank">
	<div class="pro-img">
		<img src="<?php echo ALM_ADMIN_URL; ?><?php echo $img; ?>" alt="">
	</div>
	<div class="pro-details">
		<h2 class="addon-title"><?php echo $name; ?></h2>
		<p class="addon-intro"><?php echo $intro; ?></p>
		<p class="pro-desc"><?php echo $desc; ?></p>
		<?php
			echo '<span class="cnkt-button">' . __( 'Upgrade Now', 'ajax-load-more' ) . '</span>';
		?>
	</div>
	</a>
</div>
<?php
   }
}
?>
