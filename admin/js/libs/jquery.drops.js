var drops = drops || {};
jQuery(document).ready(function($) {
   "use strict"; 
    
    drops.dropdown = function(e) {
        var el = e.parent();
        var dropdown = $('.alm-dropdown', el);
        var text = $('input[type="text"]', el);
        
        if($(el).hasClass('active')){//If is currently active, hide it
            el.removeClass('active');
            $('.alm-dropdown', el).removeClass('active');
            return false;
        }
        else if($('.alm-dropdown').hasClass('active')){
            $('.alm-dropdown').each(function(i){
                $(this).removeClass('active');
                $(this).parent().removeClass('active');
            });
        }    
        
        $('.alm-dropdown').removeClass('active');//remove active states from currently open dropdowns
        el.addClass('active');
        $('.alm-dropdown', el).addClass('active');
        text.focus(); //Focus on input boxes
        
        $(window).unbind('click').bind('click', drops.closeDropDown); // Bind click event to site container   
        dropdown.click(function(e){
            e.stopPropagation();
        }); 
    };
    drops.closeDropDown = function() {
        $('.alm-dropdown').each(function(i) {
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
        });
    };    
    
    //Dropdown links
    $('.alm-dropdown').each(function(i){
        var el = $(this).parent('.alm-drop-btn');
        $('> a', el).click(function(e){
            var e = $(this);
            drops.dropdown(e);
            return false;
        });
    });
});