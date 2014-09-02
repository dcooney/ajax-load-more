<?php

/* Admin function */

add_action( 'admin_head', 'alm_admin_vars' );
add_action( 'wp_ajax_alm_save_repeater', 'alm_save_repeater' ); // Ajax Save Repeater
add_action( 'wp_ajax_nopriv_alm_save_repeater', 'alm_save_repeater' ); // Ajax Save Repeater
add_action( 'wp_ajax_alm_get_tax_terms', 'alm_get_tax_terms' ); // Ajax Get Taxonomy Terms
add_action( 'wp_ajax_nopriv_alm_get_tax_terms', 'alm_get_tax_terms' ); // Ajax Get Taxonomy Terms


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
        'ajax_admin_url' => admin_url( 'admin-ajax.php' ),
        'alm_admin_nonce' => wp_create_nonce( 'alm_repeater_nonce' )
    )); ?>
    /* ]]> */
    </script>
<?php }



/**
* alm_core_update
* Update default repeater on plugin update.
* Add 'name' column if it doesnt exist.
* If plugin versions do not match the plugin has been updated and we need to update our repeaters.
*
* @since 2.0.5
*/

add_action('admin_init', 'alm_core_update');
function alm_core_update() {  
	 global $wpdb;
	 $table_name = $wpdb->prefix . "alm";	     
    // **********************************************
	 // If table exists
	 // **********************************************
	 if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") == $table_name) {
	 
	    // Updated 2.0.5
       // Check column 'name' exists in $wpdb - this is an upgrade checker.	
       $row = $wpdb->get_col("Show columns from $table_name like 'name'");
       if(empty($row)){
         $wpdb->query("ALTER TABLE $table_name ADD name TEXT NOT NULL");
         $wpdb->update($table_name , array('name' => 'default'), array('id' => 1));
       }
       // ********
       // @TO-DO - Upgrade test, will remove in future versions
       // REMOVED - 2.1.3
       // ********
       $test = $wpdb->get_col("Show columns from $table_name like 'test'");
       if(!empty($test)){
         $wpdb->query("ALTER TABLE $table_name DROP test");
       }    
       
       //Add column for repeater template alias
       $alias = $wpdb->get_col("Show columns from $table_name like 'alias'");
       if(empty($alias)){
         $wpdb->query("ALTER TABLE $table_name ADD alias TEXT NOT NULL");
       }       
	 
       // Compare versions of repeaters, if template versions do not match, update the repeater with value from DB	       
	    $version = $wpdb->get_var("SELECT pluginVersion FROM $table_name WHERE name = 'default'");	        
	    if($version != ALM_VERSION){ // First, make sure versions do not match.
		   //Write to repeater file
		   $data = $wpdb->get_var("SELECT repeaterDefault FROM $table_name WHERE name = 'default'");
			$f = ALM_PATH. 'core/repeater/default.php'; // File
			$o = fopen($f, 'w+'); //Open file
			$w = fwrite($o, $data); //Save the file
			$r = fread($o, 100000); //Read it
			fclose($o); //now close it
	    }
    }   
    
    // **********************************************
    // If table DOES NOT exist, create it.	
    // **********************************************
    if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {	
	   $createRepeater = '<li><?php if ( has_post_thumbnail() ) { the_post_thumbnail(array(100,100));}?><h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3><p class="entry-meta"><?php the_time("F d, Y"); ?></p><?php the_excerpt(); ?></li>';
		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			name text NOT NULL,
			repeaterDefault longtext NOT NULL,
			pluginVersion text NOT NULL,
			UNIQUE KEY id (id)
		);";		
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
		
		//Insert default data in newly created table
		$wpdb->insert($table_name , array('name' => 'default', 'repeaterDefault' => $createRepeater, 'pluginVersion' => ALM_VERSION));
   }
}



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
   $alm_page = add_menu_page( 'Ajax Load More', 'Ajax Load More', 'edit_theme_options', 'ajax-load-more', 'alm_settings_page', $icon );
   $alm_settings_page = add_submenu_page( 'ajax-load-more', 'Settings', 'Settings', 'edit_theme_options', 'ajax-load-more', 'alm_settings_page'); 
   $alm_template_page = add_submenu_page( 'ajax-load-more', 'Repeater Templates', 'Repeater Templates', 'edit_theme_options', 'ajax-load-more-repeaters', 'alm_repeater_page'); 
   $alm_shortcode_page = add_submenu_page( 'ajax-load-more', 'Shortcode Builder', 'Shortcode Builder', 'edit_theme_options', 'ajax-load-more-shortcode-builder', 'alm_shortcode_builder_page'); 
   $alm_examples_page = add_submenu_page( 'ajax-load-more', 'Examples', 'Examples', 'edit_theme_options', 'ajax-load-more-examples', 'alm_example_page'); 	
   $alm_addons_page = add_submenu_page( 'ajax-load-more', 'Add-ons', 'Add-ons', 'edit_theme_options', 'ajax-load-more-add-ons', 'alm_add_ons_page'); 	
   
   //Add our admin scripts
   add_action( 'load-' . $alm_settings_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_template_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_shortcode_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_examples_page, 'alm_load_admin_js' );
   add_action( 'load-' . $alm_addons_page, 'alm_load_admin_js' );
   
}



/**
* alm_load_admin_js
* Load Admin JS
*
* @since 2.0.15
*/

function alm_load_admin_js(){
	add_action( 'admin_enqueue_scripts', 'alm_enqueue_admin_scripts' );
}



/**
* alm_enqueue_admin_scripts
* Enqueue Admin JS
*
* @since 2.0.15
*/

function alm_enqueue_admin_scripts(){

   //Load Admin CSS
   wp_enqueue_style( 'admin-css', ALM_ADMIN_URL. 'css/admin.css');
   wp_enqueue_style( 'core-css', ALM_URL. '/core/css/ajax-load-more.css');
   wp_enqueue_style( 'font-awesome', '//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');
   
   //Load CodeMirror Syntax Highlighting if on Repater Template page 
   $screen = get_current_screen();
   if ( in_array( $screen->id, array( 'ajax-load-more_page_ajax-load-more-repeaters') ) ){  
      
      //CodeMirror CSS
      wp_enqueue_style( 'codemirror-css', ALM_ADMIN_URL. 'codemirror/lib/codemirror.css' );
            
      //CodeMirror JS
      wp_enqueue_script( 'codemirror', ALM_ADMIN_URL. 'codemirror/lib/codemirror.js');    
      wp_enqueue_script( 'codemirror-matchbrackets', ALM_ADMIN_URL. 'codemirror/addon/edit/matchbrackets.js' );
      wp_enqueue_script( 'codemirror-htmlmixed', ALM_ADMIN_URL. 'codemirror/mode/htmlmixed/htmlmixed.js' );
      wp_enqueue_script( 'codemirror-xml', ALM_ADMIN_URL. 'codemirror/mode/xml/xml.js' );
      wp_enqueue_script( 'codemirror-javascript', ALM_ADMIN_URL. 'codemirror/mode/javascript/javascript.js' );
      wp_enqueue_script( 'codemirror-mode-css', ALM_ADMIN_URL. 'codemirror/mode/css/css.js' );
      wp_enqueue_script( 'codemirror-clike', ALM_ADMIN_URL. 'codemirror/mode/clike/clike.js' );
      wp_enqueue_script( 'codemirror-php', ALM_ADMIN_URL. 'codemirror/mode/php/php.js' );
      
   }
   
   //Load JS
   wp_enqueue_script( 'select2', ALM_ADMIN_URL. 'js/libs/select2.min.js', array( 'jquery' ));
   wp_enqueue_script( 'shortcode-builder', ALM_ADMIN_URL. 'shortcode-builder/js/shortcode-builder.js', array( 'jquery' ));
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
         <p>A simple solution for lazy loading WordPress posts and pages with Ajax</p>
         </div>
		   <div class="alm-main">
		   	<div class="group">
	   			<form action="options.php" method="post">
	   				<?php 
	   					settings_fields( 'alm-setting-group' );
	   					do_settings_sections( 'ajax-load-more' );	
	   					//get the older values, wont work the first time
	   					$options = get_option( '_alm_settings' ); ?>	
	   					<div class="row no-brd">	       
	   		            <?php submit_button('Save Settings'); ?>	
	   					</div>	        
	   			</form>	
		   	</div>
		   </div>
		   <div class="alm-sidebar">
				<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/resources.php');	?>
				<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/about.php');	?>
		   </div>	
		   	
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
			<h2><?php _e('Ajax Load More: Repeater Templates', ALM_NAME); ?></h2>
			<p><?php _e('The library of available templates to use throughout your theme', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main form-table repeaters">		
		
		   <!-- Repeaters -->
		   <div class="group">
		   <?php 
		   	if (has_action('alm_custom_repeaters')){ ?>
				<span class="toggle-all"><span class="inner-wrap"><em class="collapse"><?php _e('Collapse All', ALM_NAME); ?></em><em class="expand"><?php _e('Expand All', ALM_NAME); ?></em></span></span> 
			<?php } ?>
			
			   <!-- Default -->
			   <div class="row default-repeater">
	   		   <?php         
	               $filename = ALM_PATH. 'core/repeater/default.php';
	               $handle = fopen ($filename, "r");
	               $contents = fread ($handle, filesize ($filename));
	               fclose ($handle);
	            ?> 
	            <h3 class="heading"><?php _e('Default Template', ALM_NAME); ?></h3>
	            <div class="expand-wrap">  
		            <div class="wrap repeater-wrap" data-name="default">
		               <label class="template-title" for="template-default"><?php _e('Enter the HTML and PHP code for the default template', ALM_NAME); ?></label>		            
			            <textarea rows="10" id="template-default" class="_alm_repeater"><?php echo $contents; ?></textarea>
			            <script>
                        var editorDefault = CodeMirror.fromTextArea(document.getElementById("template-default"), {
                          mode:  "application/x-httpd-php",
                          lineNumbers: true,
                          lineWrapping: true,
                          indentUnit: 0,
                          matchBrackets: true,
                          //theme: 'pastel-on-dark',
                          viewportMargin: Infinity,
                          extraKeys: {"Ctrl-Space": "autocomplete"},
                        });
                      </script>
							<input type="submit" value="<?php _e('Save Template', ALM_NAME); ?>" class="button button-primary save-repeater" data-editor-id="template-default">
		            	<div class="saved-response">&nbsp;</div>
		            </div>
	            </div>
			   </div>			   
            <?php
            	if (!has_action('alm_get_custom_repeaters')) {
            	echo '<div class="row no-brd">';
					include( ALM_PATH. 'admin/includes/cta/extend.php');
            	echo '</div>';
				  }
            ?>
			   <!-- End Default -->			   
			   <?php 
			   	if (has_action('alm_custom_repeaters'))
					do_action('alm_custom_repeaters'); 
				?>		   
				<script>
					jQuery(document).ready(function($) {					   
					   "use strict";
						var _alm_admin = {};				
						
					    /*
					    *  _alm_admin.saveRepeater
					    *  Save Custom Repeater Value
					    *
					    *  @since 2.0.0
					    */  
						
						_alm_admin.saveRepeater = function(btn, editorId) {							   
							var container = btn.parent('.repeater-wrap'),
								el = $('textarea._alm_repeater', container),
								btn = btn,
								value = '',
								repeater = container.data('name'),
								alias = ($('input._alm_repeater_alias', container).length) ? $('input._alm_repeater_alias', container).val() : '',
								responseText = $(".saved-response", container);
								
							//Get value from CodeMirroweditor
							
							// Default Template	
							if(editorId === 'template-default') 					   
								value = editorDefault.getValue();
						   	
                     //Custom Repeater template add-on
						   if(editorId === 'template-repeater2')   						   
								value = editor_repeater2.getValue();
						   	
						   if(editorId === 'template-repeater3')   						   
								value = editor_repeater3.getValue();
						  	
						   if(editorId === 'template-repeater4')   						   
								value = editor_repeater4.getValue();
						   	
						   if(editorId === 'template-repeater5')   						   
								value = editor_repeater5.getValue();
						   	
						   if(editorId === 'template-repeater6')   						   
								value = editor_repeater6.getValue();
						   	
						   if(value === '' || value === 'undefined'){
						      alert("Sorry, an error has occured");
						      return false;
						   }
                     
							//If submit button has changed class.
							if (btn.hasClass('changed')) { // If repeater value has changed.
								responseText.addClass('loading').html('<?php _e('Saving data...', ALM_NAME) ?>');
								$.ajax({
									type: 'POST',
									url: alm_admin_localize.ajax_admin_url,
									data: {
										action: 'alm_save_repeater',
										value: value, 
										repeater: repeater,
										alias: alias,
										nonce: alm_admin_localize.alm_admin_nonce,
									},
									success: function(e) {								
										setTimeout(function(){
										  responseText.html('<?php _e('Template saved successfully', ALM_NAME) ?>').removeClass('loading').addClass('saved');								  
											setTimeout(function() {
												responseText.html('&nbsp;').removeClass('saved');
											}, 3000);
										},1000);								
										btn.removeClass('changed');
									},
									error: function(xhr, status, error) {
										responseText.html('<?php _e('Something went wrong and the data could not be saved', ALM_NAME) ?>').removeClass('loading').removeClass('saved');
										btn.removeClass('changed');
									}
								});
							}
						}
						$('input.save-repeater').each(function(){
							$(this).click(function() {
								var btn = $(this),
								    editorId = btn.data('editor-id');
								btn.addClass('changed');
								_alm_admin.saveRepeater(btn, editorId);
							});
						});		
					});		
				</script>
		   </div>
		   <!-- End Repeaters -->		   
	   </div>
	   <div class="alm-sidebar">
	   		<div class="cta">
				<h3><?php _e('Templating Help', ALM_NAME); ?></h3>
				<div class="item">
					<p><strong><?php _e('What is a repeater template?', ALM_NAME); ?></strong></p>
					<p><?php _e('A repeater template is a snippet of code that will execute over and over within a <a href="http://codex.wordpress.org/The_Loop" target="_blank">WordPress loop</a>.</p>', ALM_NAME); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Can I include PHP in the repeater template?', ALM_NAME); ?></strong></p>
					<p><?php _e('Yes, PHP and core WordPress functions such as, <code>the_title()</code> and <code>the_permalink()</code> are required.</p>', ALM_NAME); ?></p>
				</div>
				<div class="item">
					<p><strong><?php _e('Tips and Tricks', ALM_NAME); ?></strong></p>
					<ul>
						<li><?php _e('Always open and close your templates with an HTML element. In some rare cases data may not be displayed if not wrapped in HTML.<br/>e.g. <code>&lt;li> &lt;/li></code> or <code>&lt;div> &lt;/div></code>', ALM_NAME); ?><br/> </li>
					</ul>
				</div>			
		   	</div>
		   	<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/writeable.php'); ?>
	   </div>	
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
	
	//Write to repeater file
	$c = Trim(stripslashes($_POST["value"])); // Repeater Value
	$n = Trim(stripslashes($_POST["repeater"])); // Repeater name
	$a = Trim(stripslashes($_POST["alias"])); // Repeater alias
	if($n === 'default')
		$f = ALM_PATH. '/core/repeater/'.$n .'.php'; // File
	else
		$f = ALM_REPEATER_PATH. '/repeaters/'.$n .'.php'; // File
	$o = fopen($f, 'w+'); //Open file
	$w = fwrite($o, $c); //Save the file
	$r = fread($o, 100000); //Read it
	fclose($o); //now close it	
	
	//Save to database
	global $wpdb;
	$table_name = $wpdb->prefix . "alm";		
	if($n === 'default'){	   
	   $data_update = array('repeaterDefault' => "$c", 'pluginVersion' => ALM_VERSION);
	   $data_where = array('name' => "default");
   }else{      
	   $data_update = array('repeaterDefault' => "$c", 'alias' => "$a", 'pluginVersion' => ALM_REPEATER_VERSION);
      $data_where = array('name' => $n);
   }
	$wpdb->update($table_name , $data_update, $data_where);
	
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
			<h2><?php _e('Ajax Load More: Shortcode Builder', ALM_NAME); ?></h2>
			<p><?php _e('Create your own Ajax Load More <a href="http://en.support.wordpress.com/shortcodes/" target="_blank">shortcode</a> by adjusting the values below', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main">
		   <div class="group">
			   <?php include( plugin_dir_path( __FILE__ ) . 'shortcode-builder/shortcode-builder.php');	?>
			   <div class="row no-brd">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', ALM_NAME); ?></a></p>					
			   </div>
		   </div>
	   </div>
	   <div class="alm-sidebar">
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
					<?php _e('<p class="addon-intro">You can generate shortcodes while editing pages!</p><p>Click the Ajax Load More icon in the content editor toolbar and the <a href="?page=ajax-load-more-shortcode-builder">shortcode builder</a> will open in an overlay window.', ALM_NAME); ?></p>
		   	</div>
	   </div>
	</div>
</div>
<?php
}


/*
*  alm_get_tax_terms
*  Get taxonomy terms for shortcode builder
*
*  @since 2.1.0
*/

function alm_get_tax_terms(){	
	$nonce = $_GET["nonce"];
	// Check our nonce, if they don't match then bounce!
	if (! wp_verify_nonce( $nonce, 'alm_repeater_nonce' ))
		die('Get Bounced!');
		
	$taxonomy = (isset($_GET['taxonomy'])) ? $_GET['taxonomy'] : '';	
	$tax_args = array(
		'orderby'       => 'name', 
		'order'         => 'ASC',
		'hide_empty'    => false
	);	
	$terms = get_terms($taxonomy, $tax_args);
	$returnVal = '';
	if ( !empty( $terms ) && !is_wp_error( $terms ) ){		
		$returnVal .= '<ul>';
		foreach ( $terms as $term ) {
			//print_r($term);
			$returnVal .='<li><input type="checkbox" name="tax-term-'.$term->slug.'" id="tax-term-'.$term->slug.'" data-type="'.$term->slug.'"><label for="tax-term-'.$term->slug.'">'.$term->name.'</label></li>';		
		}
		$returnVal .= '</ul>';		
		echo $returnVal;
		die();
	}else{
		echo "<p class='warning'>No terms exist within this taxonomy</p>";
		die();
	}
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
   			<h2><?php _e('Ajax Load More: Examples', ALM_NAME); ?></h2>
   			<p><?php _e('A collection of everyday shortcode usages and implementation examples', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main forceColors">
		   <div class="group">
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Author.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Shortcode for use on author archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/4d07ff95f7274f38fd3a.js"></script>
	   		      </div>
			      </div>
			   </div>
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Category.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Shortcode for use on category archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/ae4caec3f9061dd47627.js"></script>
	   		      </div>
			      </div>
			   </div>
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Excluding Posts', ALM_NAME); ?></h3>
	   		      <div class="expand-wrap">
	   		      <p><?php _e('Shortcode for excluding an array of posts.', ALM_NAME); ?></p>
	               <script src="https://gist.github.com/dcooney/9b037efbd166b4dba5ae.js"></script>
			      </div>
			   </div>
			   
			   <div class="row gist">
			      <h3 class="heading"><?php _e('Tag.php', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
			         <p><?php _e('Shortcode for use on tag archive pages.', ALM_NAME); ?></p>
			         <div class="inner">
	                  <script src="https://gist.github.com/dcooney/fc4276bebbdd05af64d1.js"></script>
	   		      </div>
			      </div>
			   </div>			   
			   <div class="row">
					<p class="back2top"><a href="#wpcontent"><i class="fa fa-chevron-up"></i> <?php _e('Back to Top', ALM_NAME); ?></a></p>					
			   </div>
		   </div>
	   </div>	   
	   <div class="alm-sidebar">
	   		<div class="cta">
					<h3><?php _e('Request Examples', ALM_NAME); ?></h3>
					<p><?php _e('If you\'re having issue\'s with functionality, please submit example requests through the <a href="https://github.com/dcooney/wordpress-ajax-load-more" target="_blank">GitHub repository</a>. ', ALM_NAME); ?></p>
		   	</div>
			<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/about.php');	?>
	   </div>
	   	   
	   	
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
	   		<h2><?php _e('Ajax Load More: Add-ons', ALM_NAME); ?></h2>
	   		<p><?php _e('The following Add-ons are available to increase the functionality of Ajax Load More.', ALM_NAME); ?></p>  
		</div>
		<div class="alm-main">
		   <!-- Custom Repeater -->
		   <div class="group">
			   <div class="row no-brd">
			      <h3 class="add-on-title"><?php _e('Custom Repeaters', ALM_NAME); ?></h3>
			      <div class="expand-wrap">
                  <div class="section-title">
                     <img src="<?php echo ALM_ADMIN_URL; ?>img/add-ons/repeater-add-ons.jpg">                         
                  </div>
                  <div class="wrap">
                     <p class="addon-intro"><?php _e('Unlock additional repeater templates and keep your WordPress theme looking and feeling fresh.', ALM_NAME); ?></p>
                     <p><?php _e('The Custom Repeaters add-on will add <strong>five</strong> additional <a href="?page=ajax-load-more-repeaters">repeaters</a> and allow you to select unique repeaters for different content types throughout your theme.</p>', ALM_NAME); ?>                     
                  </div>           
               </div>
			   </div>			   
            <?php
               if (has_action('alm_repeater_installed')){
                  echo '<a class="btn installed" href="#"><i class="fa fa-check-square"></i> Installed</a> ';
               }else{
                  echo '<a class="btn" href="http://connekthq.com/plugins/ajax-load-more/custom-repeaters/" target="_blank"><i class="fa fa-download"></i> Purchase &amp; Install</a>';
               }
            ?> 		   
		   </div>
		   <!-- End Custom Repeater -->
	   </div>	   
	   
	   <div class="alm-sidebar">
	   	<div class="cta">
			<h3><?php _e('About Add-ons', ALM_NAME); ?></h3>
			<p><?php _e('Add-ons are installed as a separate plugin and will receive plug-in update notifications. ', ALM_NAME); ?></p>
	   	</div>
	   	<div class="cta">
			<h3><?php _e('About Add-ons', ALM_NAME); ?></h3>
			<p><?php _e('Add-ons are installed as a separate plugin and will receive plug-in update notifications. ', ALM_NAME); ?></p>
	   	</div>
			<?php include( plugin_dir_path( __FILE__ ) . 'includes/cta/writeable.php'); ?>
	   </div>	   
	   	
	</div>
</div>
<?php
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
	/*
		add_settings_field( 
		'_alm_html5', 
		__('HTML5 Elements', ALM_NAME ), 
		'alm_html5_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);
	*/	
	add_settings_field(
	    '_alm_container_type',
	    __('Container Type', ALM_NAME ),
	    'alm_container_type_callback',
	    'ajax-load-more',
	    'alm_general_settings'
	);
	add_settings_field( 
		'_alm_classname', 
		__('Container Classes', ALM_NAME ), 
		'alm_class_callback', 
		'ajax-load-more', 
		'alm_general_settings' 
	);
	add_settings_field( 
		'_alm_disable_css', 
		__('Disable CSS', ALM_NAME ), 
		'alm_disable_css_callback', 
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
    echo '<p>' . __('Customize your version of Ajax Load More by updating the fields below.</p><p class="small">All changes will be applied globally throughout your theme.', ALM_NAME) . '</p>';
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
	<label><input type="checkbox" id="alm_disable_css_input" name="alm_settings[_alm_disable_css]" value="1"'. (($options['_alm_disable_css']) ? ' checked="checked"' : '') .' /> '.__('I want to use my own CSS styles', ALM_NAME).'</label>';	
	echo '<p class="desc"><i class="fa fa-file-text-o"></i> &nbsp;<a href="'.ALM_URL.'/core/css/ajax-load-more.css" target="blank">'.__('View Ajax Load More CSS', ALM_NAME).'</a></p>';
	?>
	<?php
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
	<label><input type="checkbox" name="alm_settings[_alm_html5]" value="1"'. (($options['_alm_html5']) ? ' checked="checked"' : '') .' /> '.__('Enable HTML5 elements within Ajax Load More\'s output', ALM_NAME).'</label>';	
}


/*
*  alm_class_callback
*  Enable HTML5 elements within AjaxLoadMore.
*
*  @since 2.0.0
*/

function alm_class_callback(){
	$options = get_option( 'alm_settings' );
		
	echo '<label for="alm_settings[_alm_classname]">'.__('Add classes to Ajax Load More container', ALM_NAME).'</label><br/><input type="text" id="alm_settings[_alm_classname]" name="alm_settings[_alm_classname]" value="'.$options['_alm_classname'].'" placeholder="posts listing etc..." /> ';	
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
    $html .= '<label for="_alm_container_type_one">&lt;ul&gt; <span>&lt;!-- '.__('Ajax Posts Here', ALM_NAME).' --&gt;</span> &lt;/ul&gt;</label><br/>';
     
    $html .= '<input type="radio" id="_alm_container_type_two" name="alm_settings[_alm_container_type]" value="2"' . checked( 2, $options['_alm_container_type'], false ) . '/>';
    $html .= '<label for="_alm_container_type_two">&lt;div&gt; <span>&lt;!-- '.__('Ajax Posts Here', ALM_NAME).' --&gt;</span> &lt;/div&gt;</label>';
     
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
		
	$selected6 = '';   
	if($color == 'white')
		$selected5 = 'selected="selected"';
		
    $html =  '<label for="alm_settings_btn_color">'.__('Choose your load more button color', ALM_NAME).'</label><br/>';
    $html .= '<select id="alm_settings_btn_color" name="alm_settings[_alm_btn_color]">';
    $html .= '<option value="default" ' . $selected0 .'>Default (Orange)</option>';
    $html .= '<option value="blue" ' . $selected1 .'>Blue</option>';
    $html .= '<option value="green" ' . $selected2 .'>Green</option>';
    $html .= '<option value="red" ' . $selected3 .'>Red</option>';
    $html .= '<option value="purple" ' . $selected4 .'>Purple</option>';
    $html .= '<option value="grey" ' . $selected5 .'>Grey</option>';
    $html .= '<option value="white" ' . $selected6 .'>White</option>';
    $html .= '</select>';
     
    $html .= '<div class="ajax-load-more-wrap '.$color.'"><span>'.__('Preview', ALM_NAME) .'</span><button class="alm-load-more-btn loading" disabled="disabled">Show More</button></div>';
    echo $html;
    ?>
    <script>
    	//Button preview
    	var colorArray = "default grey purple green red blue white";
    	jQuery("select#alm_settings_btn_color").change(function() {
    		var color = jQuery(this).val();
			jQuery('.ajax-load-more-wrap').removeClass(colorArray);
			jQuery('.ajax-load-more-wrap').addClass(color);
		});
		jQuery("select#alm_settings_btn_color").click(function(e){
			e.preventDefault();
		});
		
		// Check if Disable CSS  === true
		if(jQuery('input#alm_disable_css_input').is(":checked")){	
    		//alert("true"); 
	      jQuery('input#alm_disable_css_input').parent().parent().parent('tr').next('tr').hide();
    	}
    	jQuery('input#alm_disable_css_input').change(function() {
    		var el = jQuery(this);
	      if(el.is(":checked")) {
	      	el.parent().parent().parent('tr').next('tr').hide();
	      }else{		      
	      	el.parent().parent().parent('tr').next('tr').show();
	      }
	   });
	   
    </script>
    <?php 
}


