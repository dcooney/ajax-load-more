
<?php
function mailchimpInfo(){
   require_once('MailChimp.php');  // same directory as mailchimp-info.php
   
   $email_field = trim($_GET['email']);   
   $merge_vars = Array( 
        'EMAIL' => $email_field,
   );  
   
    
   $MailChimp = new \Drewm\MailChimp('ec3c9165886020b954bde777ad52b432-us2');
   $result = $MailChimp->call('lists/subscribe', array(
       'id'                => '216cf21285',
       'email'             => array('email'=> $email_field),
       'merge_vars'        => $merge_vars,
       'double_optin'      => false,
       'send_welcome'      => true,
   ));
   
   $status = $result['status'];
   if($status != 'error'){
      // It worked!	 
      echo '<i class="fa fa-check-square"></i> You\'ve been subscribed to our list!';
   }else{
      echo '<i class="fa fa-exclamation-circle"></i> Error - ' . $result['error'];
   }   
}
// If being called via ajax, autorun the function
if($_GET['ajax']){ 
   echo mailchimpInfo(); 
}
?>