/**
 * commentReplyFix
 * Hotfix for Reply links not working in WordPress 5.1+
 * 
 * @param listing  object
 * @since 5.1
 */
let commentReplyFix = function( listing = null ) {
   
   // Get  all `Reply` links.
   let replyLinks = listing.querySelectorAll('.comment-reply-link');   
   if(!replyLinks){
      return false;
   }
   
   // Loop links
   replyLinks.forEach(function(link){
      
      // Add custom click handler
      link.onclick = function(e) { 
         
         e.preventDefault();
         
         let commId = link.dataset.belowelement,
             parentId = link.dataset.commentid,
             respondId = link.dataset.respondelement,
             postId = link.dataset.postid,
             follow;
             
         if ( ! commId || ! parentId || ! respondId || ! postId ) {
            /*
            * Theme or plugin defines own link via custom `wp_list_comments()` callback            
            * and calls `moveForm()` either directly or via a custom event hook.            
            */            
            return;
            
         }
         
         // Move reply form
         follow = window.addComment.moveForm(commId, parentId, respondId, postId);
         if (false === follow) {
            event.preventDefault();         
         }
                  
      };
      
   });   
   
};
export default commentReplyFix;