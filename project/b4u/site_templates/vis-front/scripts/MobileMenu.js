var MobileMenu = {
    show : function(el) {
        el.addClass('x close');
        $('.mobile-container').addClass('show');
        $('body').addClass('overflow');
        
        var cont = $('.mobile-inside');
        cont.height( $(window).height() );
        cont.perfectScrollbar();

        el.addClass('active');
        
    }, //end show

    hide : function(el) {
        el.removeClass('x close');
        $('.mobile-container').removeClass('show');
        $('body').removeClass('overflow');
        
        var cont = $('.mobile-inside');
        //cont.perfectScrollbar('destroy');

        el.removeClass('active');  
    }, //end hide

    events : function() {

        $('.mobile-nav-bt').click(function(e) {
            e.stopPropagation();
        });

        $('.mobile-container').click(function(e) {
            e.stopPropagation();   
        });

        $('html').click(function() {
            MobileMenu.hide($('header .mobile-nav-bt'));    
        });


    } //end events

} //end MobileMenu


$(function(){
    
    MobileMenu.events();
    
    $('#open-mob-menu').click(function() {
        if ( $(this).hasClass('active') ) {
            MobileMenu.hide( $(this) );    
        } else {
            MobileMenu.show( $(this) ); 
        }
    });
})


/*
<a id="open-mob-menu" href="javascript:;">
    <span class="lines"></span>
</a>

<div class="mobile-container">
    <div class="mobile-inside">
        <div class="mobile-inside-container">
        </div>
    </div>
</div>        

*/