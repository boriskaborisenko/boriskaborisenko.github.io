

    var Counter = {

        init: function(){

            Counter.events();

        }, //end init

        events: function(){

            $('.counter_nav').on('click',function(){

                var _this = $(this),
                    oper = _this.attr('rel'),
                    obj = _this.closest('.counter').find('.counter_val');

                if ( obj.get(0).tagName == 'INPUT' ) {
                    var val = parseInt(obj.val());
                } else {
                    var val = parseInt(obj.html());
                }

                switch (oper) {
                    case "+1":
                        val = val + 1;
                        break;
                    case "-1":
                        if (val>1) {
                            val = val - 1;
                            break;
                        }
                }

                (val==1) ? _this.closest('.counter').find('.counter_nav.prev').addClass('def') : _this.closest('.counter').find('.counter_nav.prev').removeClass('def');

                if ( obj.get(0).tagName == 'INPUT' ) {
                    obj.val(val);
                } else {
                    obj.html(val);
                }


            });

        } //end events

    } //end Counter

    $(function(){
        Counter.init();
    })


    /*
     <div class="counter">
     <a rel="-1" class="counter_nav prev def" href="javascript:;">-</a>
     <span class="counter_val">1</span>
     <a rel="+1" class="counter_nav next" href="javascript:;">+</a>
     </div>
     */


