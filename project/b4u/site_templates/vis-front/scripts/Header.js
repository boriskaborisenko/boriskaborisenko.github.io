
    window.header_height = $('header').innerHeight();

    var Header = {

        init: function() {
            Header.fixed();
            Header.events();
        }, //end init

        fixed: function(){

            $('header').addClass('fixed').css('top',0);
            $('.all').css('paddingTop',header_height+'px');

        }, //end fixed

        events: function(){

            $(window).on('resize',function(){
                header_height = $('header').innerHeight();
                Header.fixed();
            });

        } //end events

    } //end Header

    $(function(){
        Header.init();
    })

