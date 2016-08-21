

    function height_blocks(selector) {
        imagesLoaded(document.querySelector(selector), function(instance) {
            var height = 0;

            $(selector).each(function(){
                ( $(this).innerHeight() > height ) ? height = $(this).innerHeight() : false
            });

            $(selector).css('height',height + 'px');
        });
    }

    function main_header_fixed() {
        if ( $('.page').length ) {
            $('.page').css('padding-top', $('.main_header').innerHeight() + 'px');
        }    
    }


    var DropDown = {

        init: function(){

            DropDown.events();

        }, //end init

        toggle: function(el){
            el.toggleClass('active');
        }, //end toggle


        events: function(){

            $('[data-dropdown]').click(function(e){
                e.stopPropagation();

                var parent = $(this).closest('.dropdown');

                DropDown.toggle(parent);
                return false;
            });

            $('.dropdown-menu').click(function(e){
                e.stopPropagation();
            });

            $('html').click(function(){
                $('.dropdown').removeClass('active');
            });


        } //end events

    } //end DropDown

    var ChangeTab = {

        init: function(id){

            var id = id;
            var tabs = $(id);

            ChangeTab.events(id,tabs);

        }, //end init

        events: function(id,tabs){

            var links = tabs.find('li a');
            var tab_pane = $(' .tab_pane[ data-parent-id = "'+id+'" ] ');

            links.on('click',function(){

                var _this = $(this);
                var id = _this.attr('data-id');

                tabs.find('li').removeClass('act');
                _this.closest('li').addClass('act');

                tab_pane.removeClass('act');
                $(id).addClass('act');

            });

        } //end events

    } //end ChangeTab

    var GenereteIframe = {

        init: function(){
            var all = $(".article iframe, .article object, .article embed, .article video");
            GenereteIframe.replace(all);

        }, //end init

        replace: function(all){

            all.each(function(){
                var el = $(this);

                el.wrap("<div class='flex-video'></div>");

            });

        } //end replace

    } //end GenereteIframe

    $(function() {

        $('[data-toggle="tooltip"]').tooltip();

        DropDown.init();

        if ( $('.article').length ) {
            GenereteIframe.init();
        }

        if ( $('#tab1').length ) {
            ChangeTab.init('#tab1');
        }

        if ( $('#popup_tab').length ) {
            ChangeTab.init('#popup_tab');
        }

        //inside scroll in popup
        if ( $('.condef_article').length ) {
            $('.condef_article').each(function() {
                var _this = $('.condef_article');

                if ( _this.innerHeight() > 420 ) {
                    _this.height(420).perfectScrollbar();            
                }
            });
            
        }

        $('#show_reg').click(function() {
          Popup.hide('#auth');
          Popup.show('#reg');
        });

        $('#show_auth').click(function() {
          Popup.hide('#reg');
          Popup.show('#auth');
        });

        $('#forgot_pass').click(function() {
          Popup.hide('#auth');
          Popup.show('#forgot_pass_popup');
        });

        $('#forgot_pass_return').click(function() {
          Popup.hide('#forgot_pass_popup');
          Popup.show('#auth');
        });

        $('.show_password').click(function() {
            var input = $(this).closest('.form_row').find('input');

            if ( input.length ) {
                input.prop('type','text');

                setTimeout(function() {
                    input.prop('type','password');    
                },2000);
            }
        });

        if ( $('.toggle_item').length ) {
            $('.toggle_item_head').click(function() {
                $(this).toggleClass('active');
                $(this).closest('.toggle_item').find('.toggle_item_text').slideToggle();
            });
        }

        $('.logined .toggle_drop').click(function(e) {
            $(this).closest('.logined').toggleClass('active');
        });

        $('.card_option.setting, .card_option.load').click(function() {
            var _this = $(this),
                cardOption = _this.closest('.card_options');

            cardOption.addClass('animate');

            setTimeout(function() {
                cardOption.removeClass('animate');    
            },3000);

        });

        //follow hovers
        $('.follow_left .work_item').mouseenter(function() {
            $(this).closest('.follow').addClass('left_hover');
        });
        $('.follow_left .work_item').mouseleave(function() {
            $(this).closest('.follow').removeClass('left_hover');
        });

        $('.follow_right .work_item').mouseenter(function() {
            $(this).closest('.follow').addClass('right_hover');
        });
        $('.follow_right .work_item').mouseleave(function() {
            $(this).closest('.follow').removeClass('right_hover');
        });

        //credit toggle
        $('.toggle_credit_sub').click(function() {
            var id = $(this).closest('.profile_card_row').attr('data-sub-id');

            $(this).toggleClass('active');
            $('#'+id).slideToggle();

        });


    });






