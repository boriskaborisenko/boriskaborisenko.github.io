

    var Footer = {

        container: 'footer',
        empty_foot : '.empty_footer',

        init: function(){

            Footer.setHeight();
            Footer.events();

        }, //end init

        setHeight: function(){

            imagesLoaded($(Footer.container), function(){
                var height = $('.footer_container').innerHeight();

                $(Footer.container).css({
                    'height' : height + 'px',
                    'marginTop' : '-' + height + 'px'
                });
                $(Footer.empty_foot).css({
                    'height' : height + 'px'
                });
            });

        }, //end setHeight

        events: function(){

            $(window).on('resize',function(){
                Footer.setHeight();
            });

            /*$('.feedback_toggle').click(function() {
                $(this).toggleClass('active');
                $(this).closest('.feedback_container').find('.feedback').toggle();
                Footer.setHeight();

                $(document).scrollTop( $(document).scrollTop() + 200 );
            });*/

        } //end events

    } //end Footer

    $(function(){
        Footer.init();
    })

