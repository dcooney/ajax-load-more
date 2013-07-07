<?php
// Our include
define('WP_USE_THEMES', false);
require_once('../../../wp-load.php');

// Our variables
$postType = (isset($_GET['postType'])) ? $_GET['postType'] : 'post';
$category = (isset($_GET['category'])) ? $_GET['category'] : '';
$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';
$tag = (isset($_GET['tag'])) ? $_GET['tag'] : '';
$exclude = (isset($_GET['postNotIn'])) ? $_GET['postNotIn'] : '';
$numPosts = (isset($_GET['numPosts'])) ? $_GET['numPosts'] : 6;
$page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;


$args = array(
	'post_type' => $postType,
	'category_name' => $category,
	
	'posts_per_page' => $numPosts,
	'paged'          => $page,
	
	'orderby'   => 'date',
    'order'     => 'DESC',
	'post_status' => 'publish',
);

// EXCLUDE POSTS
// Create new array of excluded posts
/* Example array from parent page:
   $features = array();
   foreach( $posts as $post):
	   setup_postdata($post);
	   $features[] = $post->ID;
   endforeach;
   if($features){			
	   $postsNotIn = implode(",", $features);
   }
*/
if(!empty($exclude)){
	$exclude=explode(",",$exclude);
    $args['post__not_in'] = $exclude;
}

// QUERY BY TAXONOMY
if(empty($taxonomy)){
	$args['tag'] = $tag;
}else{
    $args[$taxonomy] = $tag;
}

query_posts($args); 
?>
<?php 
// our loop  
if (have_posts()) :  
	$i =0;
	while (have_posts()):  
	$i++;
	the_post();?> 
	<li <?php if($i == 2){ $i = 0; echo 'class="even"';}?>>		
		<h3><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
		<p class="meta">
          <span class="likes">
	          <?php zilla_likes(); ?>
	      </span>
	      <?php the_time('F j, Y'); ?>
        </p>
		<?php the_excerpt(); ?>
		</div>
	</li>
<?php endwhile; endif; wp_reset_query(); ?> 