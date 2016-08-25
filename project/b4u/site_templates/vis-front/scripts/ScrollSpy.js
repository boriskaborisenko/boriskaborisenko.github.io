
var ScrollSpy = {

    init : function() {

        window.scrollStop = false;
        window.mass = {};

        $('#navbar ul li').each(function() {
            var elem = $(this);
            mass[elem.data('id')] = $(elem.data('id')).offset().top;
        });

        ScrollSpy.events();

    }, //end init

    scroll : function() {
        
        if ( scrollStop ) {
            return false;
        }
        
        var pos = $(document).scrollTop() + $(window).height();

        for (var key in mass) {

            if ( pos >= mass[key]) {
                $('#navbar ul li').removeClass('active');
                $('#navbar').find('[data-id="'+key+'"]').addClass('active');
            }

        }

    }, //end scroll

    events : function() {

        $('#navbar ul li a').click(function(event) {
            event.preventDefault();
            
            var _this = $(this),
                top = mass[ _this.closest('li').data('id') ];

            scrollStop = true;
                
            $("html,body").animate({
                "scrollTop":top
            },500,function() {
                _this.closest('ul').find('li').removeClass('active');
                _this.closest('li').addClass('active');
                setTimeout(function(){
                    scrollStop = false;
                },300);
            });
        });

        $(document).on('scroll',function() {
            ScrollSpy.scroll();
        });

    } //end events

}

$(function() {

    if ( $('#navbar').length ) {
        ScrollSpy.init();    
    }

})


/*
<nav id="navbar">
    <ul>
        <li data-id="#about">
            <a href="#">About</a>
        </li>
        <li data-id="#contact">
            <a href="#">Contacts</a>
        </li>
    </ul>
</nav>

<div id="about"></div>
<div id="contact"></div>
*/