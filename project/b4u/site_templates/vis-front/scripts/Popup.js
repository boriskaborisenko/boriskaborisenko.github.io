

    var Popup = {

        init: function(){

            Popup.getScrollbarWidth();
            Popup.events();

        }, //end init

        show: function(id){
            if ( $('.mobile-container').hasClass('show') ) {
                MobileMenu.hide( $('#open-mob-menu') );
            }

            $('body').addClass('popup-open').css('padding-right', scrollWidth + 'px');
            $('<div class="popup-bg"></div>').appendTo( $('body') );
            //$(id).addClass('active').css('padding-right', scrollWidth + 'px');
            $(id).addClass('active');
            Popup.centerMode(id);

        }, //end show

        hide: function(selector){

            $('body').removeClass('popup-open').css('padding-right', 0);
            $('.popup-bg').remove();
            $(selector).removeClass('active');

        }, //end hide

        centerMode: function(id){

            var popup = $(id).find('.popup'),
                popup_h = popup.height(),
                margin = $(window).height() - popup_h;

            if ( margin > 0 ) {
                popup.css('margin-top', (margin/2) + 'px' );    
            }


        }, //end centerMode 

        getScrollbarWidth: function(){

            var div = document.createElement('div');
            
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            
            div.style.visibility = 'hidden';
            
            document.body.appendChild(div);
            window.scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);

        }, //end getScrollbarWidth 

        events: function(){

            $('.popup-container').click(function(){
                Popup.hide('.popup-container');    
            });

            $('.popup').click(function(e){
                e.stopPropagation();
            });

            $('[data-popup]').click(function(){
                var id = $(this).data('target');

                Popup.show(id);

                return false;
            });

            $('[data-popup-close]').click(function(){
                var id = $(this).closest('.popup-container').attr('id');

                if ( id ) {
                    Popup.hide('#'+id);

                    return false;
                }

            });

        } //end events

    } //end Popup

    $(function() {
        Popup.init();

        //Popup.show('#popup-1');    
    })


    /*
    <a href="javascript:;" data-popup data-target="#id"><span class="fa fa-phone"></span>Перезвонить мне</a>

    <div id="id" class="popup-container">
        <div class="popup">
            <div class="popup-content">
                <div class="popup-title">Popup Headline</div>
                <a href="javascript;;" data-popup-close class="popup-close"><i class="fa fa-times"></i></a>
            </div>
        </div>    
    </div>
    */


