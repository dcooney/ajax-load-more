import almFadeIn from './fadeIn';
import almFadeOut from './fadeOut';

export function showPlaceholder(alm){
	if(!alm || !alm.main || alm.addons.paging){
      return false;  
   }
   if(alm.placeholder){  
      alm.placeholder.style.display = 'block';
      almFadeIn(alm.placeholder, 75);
   }
}


export function hidePlaceholder(alm){   
   if(!alm || !alm.main || alm.addons.paging){
      return false;  
   }
   if(alm.placeholder){
      almFadeOut(alm.placeholder, 75); 
      setTimeout(function(){
      	alm.placeholder.style.display = 'none'; 
	   }, 75);        
   }
}