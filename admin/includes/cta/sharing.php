<?php 
//delete_transient( 'alm_dismiss_sharing');
$alm_share_notification = get_transient( 'alm_dismiss_sharing');
if(!isset($alm_share_notification) || empty($alm_share_notification)){ // If transient has not been set - display this notice. ?>
<div class="cta alm-notification">
<!-- 	<h3>Thank you for installing Ajax Load More</h3> -->
	<div class="cta-inner alm-text-center"> 
   	<p class="opener">👋 <strong>Thank you for using Ajax Load More!</strong></p>
   	<p>It would mean the world to me if you would consider sharing Ajax Load More with your social networks or leaving a <a target="blank" href="//wordpress.org/support/plugin/ajax-load-more/reviews/">plugin review</a> on the WordPress forums.</p>
   	<p>All reviews(good or bad) are important as they help the plugin grow and improve over time.</p>
	</div>
	<ul class="share">
		<li class="twitter">
			<a target="blank" title="Share on Twitter" href="//twitter.com/home?status=I'm infinite scrolling with Ajax Load More for %23WordPress - https://connekthq.com/plugins/ajax-load-more/" class="share-twitter" style="background-color: rgba(0, 0, 0, 0.15);"><i class="fa fa-twitter"></i><span class="offscreens"><?php _e('Twitter', 'ajax-load-more'); ?></span></a>
		</li>
		<li class="facebook">
			<a target="blank" title="Share on Facebook" style="background-color: rgba(0, 0, 0, 0.075);" href="//facebook.com/share.php?u=https://connekthq.com/plugins/ajax-load-more/" class="share-facebook"><i class="fa fa-facebook"></i> <span class="offscreens"><?php _e('Facebook', 'ajax-load-more'); ?></span></a>
		</li>
		<li class="review">
			<a target="blank" title="Leave a Review" href="//wordpress.org/support/plugin/ajax-load-more/reviews/" class="share-review"><i class="fa fa-pencil"></i><span class="offscreens"><?php _e('Review', 'ajax-load-more'); ?></span></a>
		</li>
	</ul>   
   <div class="clear"></div>   
   <a href="javascript: void(0);" class="dismiss alm-notification--dismiss" id="alm_dismiss_sharing" title="<?php _e('Don\'t show me this again!', 'ajax-load-more');?>">&times;</a>
</div>
<?php } ?>