<div class="inner border-top">
   <div class="wrap-30">
      <?php // Meta Key ?>
      <label for="meta-key" class="full"><?php _e('Key (Name):', ALM_NAME); ?></label>
      <input class="alm_element sm meta-key" name="meta-key" type="text" value="" placeholder="<?php _e('Enter custom field key(name)', ALM_NAME); ?>">   
   </div>             
   <?php // Meta Value ?>
   <div class="wrap-30">
      <label for="meta-value" class="full"><?php _e('Value:', ALM_NAME); ?></label>
      <input class="alm_element sm meta-value" name="meta-value" type="text" value="" placeholder="<?php _e('Enter custom field value', ALM_NAME); ?>">
   </div>    
   <?php // Meta Compare ?>           
   <div class="wrap-30">
      <label for="meta-compare" class="full"><?php _e('Operator:', ALM_NAME); ?></label>
      <select class="alm_element meta-compare" name="meta-compare">
         <option value="IN" selected="selected">IN</option>
         <option value="NOT IN">NOT IN</option>
         <option value="BETWEEN">BETWEEN</option>
         <option value="NOT BETWEEN">NOT BETWEEN</option>
         <option value="=">= &nbsp;&nbsp; (equals)</option>
         <option value="!=">!= &nbsp; (does NOT equal)</option>
         <option value=">">> &nbsp;&nbsp; (greater than)</option>
         <option value=">=">>= &nbsp;(greater than or equal to)</option>
         <option value="<">&lt; &nbsp;&nbsp; (less than)</option>
         <option value="<=">&lt;= &nbsp;(less than or equal to)</option>
         <option value="LIKE">LIKE</option>
         <option value="NOT LIKE">NOT LIKE</option>
         <option value="EXISTS">EXISTS</option>
         <option value="NOT EXISTS">NOT EXISTS</option>
      </select>
   </div>   
   <a class="remove remove-meta-query" href="javascript:void(0);"><i class="fa fa-remove"></i></a>
</div>