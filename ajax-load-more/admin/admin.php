<?php

/* Admin function */




add_action( 'admin_head', 'alm_admin_vars' );
add_action( 'wp_ajax_alm_save_repeater', 'alm_save_repeater' ); // Ajax Save Repeater
add_action( 'wp_ajax_nopriv_alm_save_repeater', 'alm_save_repeater' ); // Ajax Save Repeater

/*
*  alm_admin_vars
*  Create admin variables and ajax nonce
*
*  @since 2.0.0
*/
function alm_admin_vars() { ?>
    <script type='text/javascript'>
	 /* <![CDATA[ */
    var alm_admin_localize = <?php echo json_encode( array( 
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'alm_admin_nonce' => wp_create_nonce( 'alm_repeater_nonce' )
    )); ?>
    /* ]]> */
    </script>
<?php }



/**
* alm_admin_menu
* Create Admin Menu
*
* @since 2.0.0
*/

add_action( 'admin_menu', 'alm_admin_menu' );
function alm_admin_menu() {  
   $icon = 'dashicons-plus-alt';
   $icon = ALM_ADMIN_URL . "/img/alm-logo-16x16.png";
   add_menu_page( 'Ajax Load More', 'Ajax Load More', 'edit_theme_options', 'ajax-load-more', 'alm_settings_page', $icon, 81 );
   add_submenu_page( 'ajax-load-more', 'Settings', 'Settings', 'edit_theme_options', 'ajax-load-more', 'alm_settings_page'); 
   add_submenu_page( 'ajax-load-more', 'Repeaters', 'Repeaters', 'edit_theme_options', 'ajax-load-more-repeaters', 'alm_repeater_page'); 
   add_submenu_page( 'ajax-load-more', 'Shortcode Builder', 'Shortcode Builder', 'edit_theme_options', 'ajax-load-more-shortcode-builder', 'alm_shortcode_builder_page'); 
   add_submenu_page( 'ajax-load-more', 'Examples', 'Examples', 'edit_theme_options', 'ajax-load-more-examples', 'alm_example_page'); 	
   add_submenu_page( 'ajax-load-more', 'Add-ons', 'Add-ons', 'edit_theme_options', 'ajax-load-more-add-ons', 'alm_add_ons_page'); 	
}



/*
*  alm_settings_page
*  Settings page
*
*  @since 2.0.0
*/

function alm_settings_page(){ ?>
	<div class="admin ajax-load-more settings" id="alm-settings">
		<div class="wrap">
		<div class="header-wrap">
         <h2><?php echo ALM_TITLE; ?> <span><?php echo ALM_VERSION; ?></span></h2>
         <p>A simple solution for lazy loading WordPress posts and pages</p>
         </div>
		   <div class="alm-main">
		   	<section class="group">
	   			<form action="options.php" method="post">
	   				<?php 
	   					settings_fields( 'alm-setting-group' );
	   					do_settings_sections( 'ajax-load-more' );	
	   					//get the older values, wont work the first time
	   					$options = get_option( '_alm_settings' ); ?>	
	   					<div class="row">	       
	   		            <?php submit_button('Save Settings'); ?>	
	   					</div>	        
	   			</form>	
		   	</section>
		   </div>
		   <aside class="alm-sidebar">
				<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/resources.php');	?>
				<?php //include( plugin_dir_path( __FILE__ ) . 'includes/cta/writeable.php');	?>
				<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/about.php');	?>
		   </aside>	
		   	
		</div>
	</div>
<?php
}



/*
*  alm_repeater_page
*  Custom Repeaters
*
*  @since 2.0.0
*/

function alm_repeater_page(){ ?>		
<div class="admin ajax-load-more" id="alm-repeaters">	
	<div class="wrap">
		<div class="header-wrap">
			<h2><?php _e('Ajax load More: Repeaters', ALM_NAME); ?></h2>
			<p><?php _e('The library of available repeaters', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main form-table repeaters">		
		   <!-- Repeaters -->
		   <section class="group">
		   	   <!-- Default -->
			   <div class="row default-repeater">
	   		   <?php         
	               $filename = ALM_PATH. 'core/repeater/default.php';
	               $handle = fopen ($filename, "r");
	               $contents = fread ($handle, filesize ($filename));
	               fclose ($handle);
	            ?> 
	            <h3 class="heading"><?php _e('Default Repeater', ALM_NAME); ?></h3>
	            <div class="expand-wrap">	            
		            <div class="section-title">
		               <p><?php _e('Enter the HTML and PHP for the default repeater.', ALM_NAME); ?></p>                  
		            </div>
		            <div class="wrap repeater-wrap" data-name="default">
		            	<div class="textarea-wrap">
			            	<textarea rows="10" class="_alm_repeater"><?php echo $contents; ?></textarea>
		            	</div>
							<input type="submit" value="Save Repeater" class="button button-primary save-repeater">
		            	<div class="saved-response">&nbsp;</div>
		            	<!-- <div class="restore-default"><a href="javascript:void(0);"><?php _e('Restore Default', ALM_NAME); ?></a></div> -->
		            </div>
	            </div>
	            <?php
	            	if (!has_action('alm_get_custom_repeaters')) {
	            	echo '<div class="row">';
						include( ALM_PATH. 'admin/includes/cta/extend.php');
	            	echo '</div>';
					  }
	            ?>
	            <div class="clear"></div>
			   </div>
			   <!-- End Default -->			   
			   <?php 
			   	if (has_action('alm_custom_repeaters'))
					do_action('alm_custom_repeaters'); 
				?>		   
				<script>
				$(document).ready(function() {
					"use strict";
					$(document).ready(function() {
						var _alm_admin = {};				
						
					    /*
					    *  _alm_admin.saveRepeater
					    *  Save Custom Repeater Value
					    *
					    *  @since 2.0.0
					    */  
						
						_alm_admin.saveRepeater = function(btn) {										
							var container = btn.parent('.repeater-wrap'),
								el = $('textarea._alm_repeater', container),
								value = el.val(),
								btn = btn,
								repeater = container.data('name'),
								responseText = $(".saved-response", container);
								
							//If submit button has changed class.
							if (btn.hasClass('changed')) { // If repeater value has changed.
								responseText.addClass('loading').html('<?php _e('Saving data...', ALM_NAME) ?>');
								$.ajax({
									type: 'POST',
									url: alm_admin_localize.ajaxurl,
									data: {
										action: 'alm_save_repeater',
										value: value, 
										repeater: repeater,
										nonce: alm_admin_localize.alm_admin_nonce,
									},
									success: function(e) {								
										setTimeout(function(){
										  responseText.html('<?php _e('Custom repeater value saved.', ALM_NAME) ?>').removeClass('loading').addClass('saved');								  
											setTimeout(function() {
												responseText.html('&nbsp;').removeClass('saved');
											}, 3000);
										},1000);								
										btn.removeClass('changed');
									},
									error: function(xhr, status, error) {
										responseText.html('<?php _e('Something went wrong and the data could not be saved.', ALM_NAME) ?>').removeClass('loading').removeClass('saved');
										btn.removeClass('changed');
									}
								});
							}
						}
						$('input.save-repeater').each(function(){
							$(this).click(function() {
								var btn = $(this);
								btn.addClass('changed');
								_alm_admin.saveRepeater(btn);
							});
						});		
					});
				});		
				</script>
		   </section>
		   <!-- End Repeaters -->		   
	   </div>
	   <aside class="alm-sidebar">
	   		<div class="cta">
				<h3><?php _e('Repeater Help', ALM_NAME); ?></h3>
				<div class="item">
					<p><strong><?php _e('What is a repeater?', ALM_NAME); ?></strong></p>
					<p><?php _e('A repeater is a snippet of code that will execute over and over within a <a href="http://codex.wordpress.org/The_Loop" target="_blank">WordPress loop</a>.</p>', ALM_NAME); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Can I include PHP in the repeater?', ALM_NAME); ?></strong></p>
					<p><?php _e('Yes, PHP and core WordPress functions such as, <code>the_title()</code> and <code>the_permalink()</code> are required.</p>', ALM_NAME); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Tips and Tricks', ALM_NAME); ?></strong></p>
					<ul>
						<li><?php _e('Always open and close your repeater with an HTML element. In some rare cases data may not be displayed.<br/>e.g. <code>&lt;li> &lt;/li></code> or <code>&lt;div> &lt;/div></code>', ALM_NAME); ?><br/> </li>
					</ul>
				</div>			
		   	</div>
		   	<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/writeable.php'); ?>
	   </aside>	
	</div>
</div>

<?php
}


/*
*  alm_save_repeater
*  Repeater Save function
*
*  @since 2.0.0
*/

function alm_save_repeater(){
	$nonce = $_POST["nonce"];
	// Check our nonce, if they don't match then bounce!
	if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
		die('Get Bounced!');
			
	$c = Trim(stripslashes($_POST["value"])); // Repeater Value
	$n = Trim(stripslashes($_POST["repeater"])); // Repeater name
	if($n === 'default')
		$f = ALM_PATH. '/core/repeater/'.$n .'.php'; // File
	else
		$f = ALM_REPEATER_PATH. '/repeaters/'.$n .'.php'; // File
	$o = fopen($f, 'w+'); //Open file
	$w = fwrite($o, $c); //Save the file
	$r = fread($o, 100000); //Read it
	fclose($o); //now close it
	
	//Our results
	if($w){
	    echo 'File saved';
	} else {
	    echo 'Error saving file';
	}
}


/*
*  alm_shortcode_builder_page
*  Shortcode Builder
*
*  @since 2.0.0
*/

function alm_shortcode_builder_page(){ ?>		
<div class="admin ajax-load-more" id="alm-builder">	
	<div class="wrap">
		<div class="header-wrap">
			<h2><?php _e('Ajax load More: Shortcode Builder', ALM_NAME); ?></h2>
			<p><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main">
		   <section class="group">
			   <?php include( plugin_dir_path( __FILE__ ) . 'includes/shortcode-builder.php');	?>
			   <div class="row">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', ALM_NAME); ?></a></p>					
			   </div>
		   </section>
	   </div>
	   <aside class="alm-sidebar">
		   	<div class="cta">
					<h3><?php _e('Shortcode Output', ALM_NAME); ?></h3>
					<p><?php _e('Copy and paste the following shortcode into the content editor or widget area of your theme.', ALM_NAME); ?></p>
					<div class="output-wrap">
						   <div id="shortcode_output"></div>
						   <span class="copy"><?php _e('Copy', ALM_NAME); ?></span>
					</div>
		   	</div>
		   	<div class="cta">
					<h3><?php _e('Did you know?', ALM_NAME); ?></h3>
					<img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/shortcode-editor.jpg"><br/>
					<?php _e('<p class="addon-intro">You can generate shortcodes while editing pages!</p><p>Look for the Ajax Load More [+] icon in the content editor toolbar and the <a href="?page=ajax-load-more-shortcode-builder">shortcode builder</a> will pop open.', ALM_NAME); ?></p>
		   	</div>
	   </aside>
	</div>
</div>
<?php
}


/*
*  alm_example_page
*  Examples Page
*
*  @since 2.0.0
*/

function alm_example_page(){ ?>		
<div class="admin ajax-load-more" id="alm-examples">	
	<div class="wrap">
		<div class="header-wrap">
   			<h2><?php _e('Ajax load More: Examples', ALM_NAME); ?></h2>
   			<p><?php _e('A collection of everyday shortcode usages and implementation examples', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main forceColors">
		   <section class="group">
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Author.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Example shortcode for use on author archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/4d07ff95f7274f38fd3a.js"></script>
	   		      </div>
			      </div>
			   </div>
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Category.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Example shortcode for use on category archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/ae4caec3f9061dd47627.js"></script>
	   		      </div>
			      </div>
			   </div>
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Excluding Posts', ALM_NAME); ?></h3>
	   		      <div class="expand-wrap">
	   		      <p><?php _e('Example shortcode for excluding an array of posts.', ALM_NAME); ?></p>
	               <script src="https://gist.github.com/dcooney/9b037efbd166b4dba5ae.js"></script>
			      </div>
			   </div>
			   
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Tag.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Example shortcode for use on tag archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/fc4276bebbdd05af64d1.js"></script>
	   		      </div>
			      </div>
			   </div>			   
			   <div class="row">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', ALM_NAME); ?></a></p>					
			   </div>
		   </section>
	   </div>	   
	   <aside class="alm-sidebar">
	   		<div class="cta">
					<h3><?php _e('Request Examples', ALM_NAME); ?></h3>
					<p><?php _e('If you\'re having issue\'s with functionality, please submit example requests through the <a href="https://github.com/dcooney/wordpress-ajax-load-more" target="_blank">GitHub repository</a>. ', ALM_NAME); ?></p>
		   	</div>
			<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/about.php');	?>
	   </aside>
	   	   
	   	
	</div>
</div>
<?php
}



/*
*  alm_add_ons_page
*  Ajax Load More Add-ons
*
*  @since 2.0.0
*/

function alm_add_ons_page(){ ?>		
<div class="admin ajax-load-more" id="alm-add-ons">	
	<div class="wrap">
		<div class="header-wrap">
	   		<h2><?php _e('Ajax load More: Add-ons', ALM_NAME); ?></h2>
	   		<p><?php _e('The following Add-ons are available to increase the functionality of Ajax Load More.', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main forceColors">
		   <!-- Custom Repeater -->
		   <section class="group">
			   <div class="row">
			      <h3 class="add-on-title"><?php _e('Custom Repeaters', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
                  <div class="section-title">
                     <img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/repeater-add-ons.jpg">                         
                  </div>
                  <div class="wrap">
                     <p class="addon-intro"><?php _e('Unlock additional repeaters and keep your site looking fresh!', ALM_NAME); ?></p>
                     <p><?php _e('The Custom Repeaters add-on will add <strong>five</strong> additional <a href="?page=ajax-load-more-repeaters">repeaters</a> and allow you to select unique repeaters for different content types throughout your theme.</p>                   
                     <p>It\'s easy! Just build each <a href="?page=ajax-load-more-repeaters">repeater</a> and then choose from the list of repeaters while building your <a href="?page=ajax-load-more-shortcode-builder">shortcode</a>.</p><p><strong>Read/Write Access is required!</strong></p>', ALM_NAME); ?>                     
                  </div>           
               </div>
			   </div>			   
            <?php
               if (has_action('alm_repeater_installed')){
                  echo '<a class="btn installed" href="#"><i class="fa fa-check-square"></i> Installed</a> ';
               }else{
                  echo '<a class="btn" href="http://connekthq.com/ajax-load-more/custom-repeaters" target="_blank"><i class="fa fa-download"></i> Purchase &amp; Install</a>';
               }
            ?> 		   
		   </section>
		   <!-- End Custom Repeater -->
	   </div>	   
	   
	   <aside class="alm-sidebar">
	   	<div class="cta">
			<h3><?php _e('About Add-ons', ALM_NAME); ?></h3>
			<p><?php _e('Add-ons are installed as a separate plugin and will receive plug-in update notifications. ', ALM_NAME); ?></p>
	   	</div>
			<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/writeable.php'); ?>
	   </aside>	   
	   	
	</div>
</div>
<?php
}

/*
*  adminHeader
*  Admin CSS and JS
*
*  @since 2.0.0
*/

add_action('admin_head', 'alm_adminHeader');
add_action('admin_footer', 'alm_adminFooter');
function alm_adminHeader() {
   $url = plugins_url( 'css/admin.css', __FILE__ );
   echo '<link rel="stylesheet" type="text/css" href="' . $url . '" />';
   echo '<link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">';
   echo '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.js"></script>';
}   
function alm_adminFooter() {
   echo '<script type="text/javascript" src="'.plugins_url( 'js/libs/select2.min.js', __FILE__ ).'"></script>';
   echo '<script type="text/javascript" src="'.plugins_url( 'js/shortcode-builder.js', __FILE__ ).'"></script>';
}



/*
*  admin_init
*  Initiate the plugin, create our setting variables.
*
*  @since 2.0.0
*/

add_action( 'admin_init', 'alm_admin_init');
function alm_admin_init(){
	register_setting( 
		'alm-setting-group', 
		'alm_settings', 
		'alm_sanitize_settings' 
	);
	add_settings_section( 
		'alm_general_settings',  
		'General Settings', 
		'alm_general_settings_callback', 
		'ajax-load-more' 
	);
	add_settings_field( 
		'_alm_disable_css', 
		__('Disable CSS', ALM_NAME ), 
		'alm_disable_css_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);
	add_settings_field( 
		'_alm_html5', 
		__('HTML5 Elements', ALM_NAME ), 
		'alm_html5_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);	
	add_settings_field(
	    '_alm_container_type',
	    __('Container Type', ALM_NAME ),
	    'alm_container_type_callback',
	    'ajax-load-more',
	    'alm_general_settings'
	);
	add_settings_field( 
		'_alm_classname', 
		__('Container Class', ALM_NAME ), 
		'alm_class_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);
	add_settings_field( 
		'_alm_btn_color', 
		__('Button Color', ALM_NAME ), 
		'alm_btn_color_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);
}



/*
*  alm_general_settings_callback
*  Some general settings text
*
*  @since 2.0.0
*/

function alm_general_settings_callback() {
    echo '<p>' . __('Customize your version of Ajax Load More by updating the fields below.</p><p class="small">All changes will be applied globally accross your theme.', ALM_NAME) . '</p>';
}


/*
*  alm_sanitize_settings
*  Sanitize our form fields
*
*  @since 2.0.0
*/

function alm_sanitize_settings( $input ) {
    return $input;
}


/*
*  alm_disable_css_callback
*  Diabale Ajax Load More CSS.
*
*  @since 2.0.0
*/

function alm_disable_css_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_disable_css'])) 
	   $options['_alm_disable_css'] = '0';
	
	echo '<input type="hidden" name="alm_settings[_alm_disable_css]" value="0" />
	<label><input type="checkbox" name="alm_settings[_alm_disable_css]" value="1"'. (($options['_alm_disable_css']) ? ' checked="checked"' : '') .' /> I want to use my own CSS styles</label>';	
	echo '<p class="desc"><i class="fa fa-file-text-o"></i> &nbsp;<a href="'.ALM_URL.'/css/ajax-load-more.css" target="blank">View Ajax Load More CSS</a></p>';
}


/*
*  alm_html5_callback
*  Enable HTML5 elements within AjaxLoadMore.
*
*  @since 2.0.0
*/

function alm_html5_callback(){
	$options = get_option( 'alm_settings' );
	if(!isset($options['_alm_html5'])) 
	   $options['_alm_html5'] = '1';
	
	echo '<input type="hidden" name="alm_settings[_alm_html5]" value="0" />
	<label><input type="checkbox" name="alm_settings[_alm_html5]" value="1"'. (($options['_alm_html5']) ? ' checked="checked"' : '') .' /> Enable HTML5 elements within Ajax Load More\'s output.</label>';	
}


/*
*  alm_class_callback
*  Enable HTML5 elements within AjaxLoadMore.
*
*  @since 2.0.0
*/

function alm_class_callback(){
	$options = get_option( 'alm_settings' );
		
	echo '<label for="alm_settings[_alm_classname]">Add classes to Ajax Load More container.</label><br/><input type="text" id="alm_settings[_alm_classname]" name="alm_settings[_alm_classname]" value="'.$options['_alm_classname'].'" /> ';	
}


/*
*  alm_container_type_callback
*  The type of container ul or div
*
*  @since 2.0.0
*/
	
function alm_container_type_callback() {
 
    $options = get_option( 'alm_settings' );
    
    if(!isset($options['_alm_container_type'])) 
	   $options['_alm_container_type'] = '1';
     
    $html = '<input type="radio" id="_alm_container_type_one" name="alm_settings[_alm_container_type]" value="1"' . checked( 1, $options['_alm_container_type'], false ) . '/>';
    $html .= '<label for="_alm_container_type_one">&lt;ul&gt; <span>&lt;!-- Ajax Posts Here --&gt;</span> &lt;/ul&gt;</label><br/>';
     
    $html .= '<input type="radio" id="_alm_container_type_two" name="alm_settings[_alm_container_type]" value="2"' . checked( 2, $options['_alm_container_type'], false ) . '/>';
    $html .= '<label for="_alm_container_type_two">&lt;div&gt; <span>&lt;!-- Ajax Posts Here --&gt;</span> &lt;/div&gt;</label>';
     
    echo $html;
 
}



/*
*  alm_btn_color_callback
*  Get button color
*
*  @since 2.0.0
*/
	
function alm_btn_color_callback() {
 
    $options = get_option( 'alm_settings' );
    $color = $options['_alm_btn_color'];
    
    if(!isset($color)) 
	   $options['_alm_btn_color'] = '0';
	
	$selected0 = '';   
	if($color == 'default')
		$selected0 = 'selected="selected"';
		
	$selected1 = '';   
	if($color == 'blue')
		$selected1 = 'selected="selected"';
		
	$selected2 = '';   
	if($color == 'green')
		$selected2 = 'selected="selected"';
		
	$selected3 = '';   
	if($color == 'red')
		$selected3 = 'selected="selected"';
		
	$selected4 = '';   
	if($color == 'purple')
		$selected4 = 'selected="selected"';
		
	$selected5 = '';   
	if($color == 'grey')
		$selected5 = 'selected="selected"';
		
     
    $html = '<select id="name="alm_settings[_alm_btn_color]" name="alm_settings[_alm_btn_color]">';
    $html .= '<option value="default" ' . $selected0 .'>Default (Orange)</option>';
    $html .= '<option value="blue" ' . $selected1 .'>Blue</option>';
    $html .= '<option value="green" ' . $selected2 .'>Green</option>';
    $html .= '<option value="red" ' . $selected3 .'>Red</option>';
    $html .= '<option value="purple" ' . $selected4 .'>Purple</option>';
    $html .= '<option value="grey" ' . $selected5 .'>Grey</option>';
    $html .= '</select>';
     
    echo $html;
 
}


