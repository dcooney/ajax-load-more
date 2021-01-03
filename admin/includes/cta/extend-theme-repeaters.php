<?php
	$extend = alm_get_addon( 'theme-repeaters' );
	if ( $extend ) {
		$name  = $extend['name'];
		$intro = $extend['intro'];
		$desc  = $extend['desc'];
		$key   = $extend['key'];
		$url   = $extend['url'];
		$img   = $extend['img'];
	?>
	<div id="alm-add-ons">
		<div class="flexbox-wrap">
			<div class="group no-shadow extend">
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
		</div>
	</div>
	<?php
	}
?>
