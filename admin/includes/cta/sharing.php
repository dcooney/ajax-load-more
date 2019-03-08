<?php
   $alm_share_notification = get_transient( 'alm_dismiss_sharing');
   if(!isset($alm_share_notification) || empty($alm_share_notification)){
      // If transient has not been set - display this notice.
   ?>
	<div class="group alm-notification alm-notification--blue">
   	<h2><span>👋</span>Thank you for installing Ajax Load More!</h2>
   	<p class="opening">I hope you're finding the plugin easy to use and a nice feature addition to your website.</p>
   	<p>If so, would you consider helping <a href="https://twitter.com/KaptonKaos" target="_blank">me</a> widen the reach of Ajax Load More by sharing with your networks and/or leaving a review.</p>
		<ul class="share">
			<li class="twitter">
				<a target="blank" title="Share on Twitter" href="//twitter.com/home?status=I'm infinite scrolling with Ajax Load More for %23WordPress - https://connekthq.com/plugins/ajax-load-more/" class="share-twitter"><i class="fa fa-twitter"></i> Twitter</a>
			</li>
			<li class="facebook">
				<a target="blank" title="Share on Facebook" href="//facebook.com/share.php?u=https://connekthq.com/plugins/ajax-load-more/" class="share-facebook"><i class="fa fa-facebook"></i> Facebook</a>
			</li>
			<li class="review">
				<a target="blank" title="Leave a Review" href="//wordpress.org/support/plugin/ajax-load-more/reviews/" class="share-review"><i class="fa fa-pencil"></i> Leave Review</a>
			</li>
		</ul>   
      <div class="clear"></div>   
      <a href="javascript: void(0);" class="dismiss alm-notification--dismiss" id="alm_dismiss_sharing" title="<?php _e('Don\'t show me this again!', 'ajax-load-more');?>">&times;</a>

	</div>
<?php } ?>