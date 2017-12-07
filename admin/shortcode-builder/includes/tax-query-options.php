<?php #1 ?>
<div class="inner taxonomy">					
	<label class="full"><?php _e('Taxonomy:', 'ajax-load-more'); ?></label>
	<select class="alm_element" name="taxonomy-select" id="taxonomy-select">
		<option value="" selected="selected">-- <?php _e('Select Taxonomy', 'ajax-load-more'); ?>--</option>
	   <?php foreach( $taxonomies as $taxonomy ){ ?>
      <option name="chk-<?php echo $taxonomy->query_var; ?>" id="chk-<?php echo $taxonomy->query_var; ?>" value="<?php echo $taxonomy->query_var;?>"><?php echo $taxonomy->label; ?></option>
	   <?php } ?>
   </select>
	
	<div class="taxonomy-extended">
		<label class="full"><?php _e('Taxonomy Terms:', 'ajax-load-more'); ?></label>
		<div id="tax-terms-container1" class="tax-terms-container checkboxes"></div>
	</div>
	
	<div class="taxonomy-extended" id="tax-operator-select">
		<label class="full"><?php _e('Taxonomy Operator:', 'ajax-load-more'); ?></label>
	   <ul class="radio">
	   	<li>
	   		<input class="alm_element" name="tax-operator" id="tax-in-radio" value="IN" type="radio" checked="checked">
				<label for="tax-in-radio">IN (default)</label>
	   	</li>
			<li>
				<input class="alm_element" name="tax-operator" id="tax-not-in-radio" value="NOT IN" type="radio">
				<label for="tax-not-in-radio">NOT IN</label>
			</li>
	   </ul>
	</div>
						
</div>
<div class="clear"></div>

<div id="tax-query-relation">
   <div class="inner border-top highlighted">
      <div class="wrap-50">
         <label for="tax-relation" class="full"><?php _e('Relation:', 'ajax-load-more'); ?> <a href="javascript:void(0)" class="fa fa-question-circle tooltip" title="<?php _e('The logical relationship between each taxonomy when there is more than one.','ajax-load-more'); ?>"></a></label>
         <select class="alm_element tax-relation" name="tax-relation">
            <option value="AND" selected="selected">AND</option>
            <option value="OR">OR</option>
         </select>
      </div>
   </div>
</div>

<?php #2 ?>
<div class="taxonomy taxonomy-wrap">					
	<label class="full"><?php _e('Taxonomy:', 'ajax-load-more'); ?></label>
	<a class="remove remove-tax-query" href="javascript:void(0);">&times;</a>
	<select class="alm_element" name="taxonomy-select2" id="taxonomy-select2">
		<option value="" selected="selected">-- <?php _e('Select Taxonomy', 'ajax-load-more'); ?>--</option>
	   <?php foreach( $taxonomies as $taxonomy ){ ?>
      <option name="chk-<?php echo $taxonomy->query_var; ?>" id="chk-<?php echo $taxonomy->query_var; ?>" value="<?php echo $taxonomy->query_var;?>"><?php echo $taxonomy->label; ?></option>
	   <?php } ?>
   </select>
	
	<div class="taxonomy-extended">
		<label class="full"><?php _e('Taxonomy Terms:', 'ajax-load-more'); ?></label>
		<div id="tax-terms-container2" class="tax-terms-container checkboxes"></div>
	</div>
	
	<div class="taxonomy-extended" id="tax-operator-select2">
		<label class="full"><?php _e('Taxonomy Operator:', 'ajax-load-more'); ?></label>
	   <ul class="radio">
	   	<li>
	   		<input class="alm_element" name="tax-operator2" id="tax-in-radio2" value="IN" type="radio" checked="checked">
				<label for="tax-in-radio2">IN (default)</label>
	   	</li>
			<li>
				<input class="alm_element" name="tax-operator2" id="tax-not-in-radio2" value="NOT IN" type="radio">
				<label for="tax-not-in-radio2">NOT IN</label>
			</li>
	   </ul>
	</div>					
</div>

<?php #3 ?>
<div class="taxonomy taxonomy-wrap">					
	<label class="full"><?php _e('Taxonomy:', 'ajax-load-more'); ?></label>
	<a class="remove remove-tax-query" href="javascript:void(0);">&times;</a>
	<select class="alm_element" name="taxonomy-select3" id="taxonomy-select3">
		<option value="" selected="selected">-- <?php _e('Select Taxonomy', 'ajax-load-more'); ?>--</option>
	   <?php foreach( $taxonomies as $taxonomy ){ ?>
      <option name="chk-<?php echo $taxonomy->query_var; ?>" id="chk-<?php echo $taxonomy->query_var; ?>" value="<?php echo $taxonomy->query_var;?>"><?php echo $taxonomy->label; ?></option>
	   <?php } ?>
   </select>
	
	<div class="taxonomy-extended">
		<label class="full"><?php _e('Taxonomy Terms:', 'ajax-load-more'); ?></label>
		<div id="tax-terms-container3" class="tax-terms-container checkboxes"></div>
	</div>
	
	<div class="taxonomy-extended" id="tax-operator-select3">
		<label class="full"><?php _e('Taxonomy Operator:', 'ajax-load-more'); ?></label>
	   <ul class="radio">
	   	<li>
	   		<input class="alm_element" name="tax-operator3" id="tax-in-radio3" value="IN" type="radio" checked="checked">
				<label for="tax-in-radio3">IN (default)</label>
	   	</li>
			<li>
				<input class="alm_element" name="tax-operator3" id="tax-not-in-radio3" value="NOT IN" type="radio">
				<label for="tax-not-in-radio3">NOT IN</label>
			</li>
	   </ul>
	</div>					
</div>

<div class="clear"></div>