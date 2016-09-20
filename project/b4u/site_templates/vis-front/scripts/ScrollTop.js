
    var ScrollTop = {
        
        top: '100',
        scrollTime: '500',
        element: '.scroll-top',
            
        init: function() {
            this.events();  
        }, //end init
        
        events: function() {
            
            $(document).on('scroll',$.throttle(200, function(e) {
                
                if ( $(document).scrollTop() > ScrollTop.top ) {
                    $(ScrollTop.element).fadeIn();    
                } else {
                    $(ScrollTop.element).fadeOut();
                }
                
            }));
            
            $('body').on('click', ScrollTop.element, function() {
                
                $("body,html").animate({"scrollTop":0},ScrollTop.scrollTime);
                
            });
            
        } //end events
            
    } //end ScrollTop

    $(function(){
        ScrollTop.init();    
    })



/*
<a style="position: absolute; bottom: 0; display: none;" class="scroll-top" href="#">ScrollTop</a>
*/

