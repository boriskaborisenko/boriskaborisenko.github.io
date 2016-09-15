

    var SingleLineMenu = {

        padding: 100,

        init: function(id,onresize){

            var menu = $(id);

            if (menu.length) {

                var all_menu = menu.find('.all_menu');
                var all_item = all_menu.find('.main_menu_sub a');
                var item = menu.find('.main_menu_cell');
                var index = item.size();

                item.removeClass('hide');
                (onresize) ? all_item.addClass('hide') : false;
                all_menu.hide();

                var recurs_w = SingleLineMenu.recurs(item);

                while ( recurs_w > menu.width() ) {
                    $(item[index]).addClass('hide');
                    $(all_item[index]).removeClass('hide');
                    all_menu.show();

                    recurs_w = SingleLineMenu.recurs(item);

                    index--;
                }

            }

        }, //end init

        recurs: function(item){

            var menu_w = 0;

            item.each(function(){
                if (!$(this).hasClass('hide')) {
                    menu_w += $(this).width() + SingleLineMenu.padding;
                }
            });
            return menu_w;

        } //end recurs

    } //end SingleLineMenu

    $(function(){
        SingleLineMenu.init('id');

        $(window).on('resize',function(){
            SingleLineMenu.init('id',true);
        });
    })


    /*
     <div id="menu" class="menu">
         <ul>
             <li class="main_menu_cell"><a href="javascript:;">Menu 1</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 2</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 3</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 4</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 5</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 6</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 7</a></li>
             <li class="main_menu_cell"><a href="javascript:;">Menu 8</a></li>

             <li class="all_menu">
                 <a class="main_menu_link" href="javascript:;">Other</a>
                 <div class="main_menu_sub">
                     <ul>
                     <li><a class="hide" href="javascript:;">Menu 1</a></li>
                     <li><a class="hide" href="javascript:;">Menu 2</a></li>
                     <li><a class="hide" href="javascript:;">Menu 3</a></li>
                     <li><a class="hide" href="javascript:;">Menu 4</a></li>
                     <li><a class="hide" href="javascript:;">Menu 5</a></li>
                     <li><a class="hide" href="javascript:;">Menu 6</a></li>
                     <li><a class="hide" href="javascript:;">Menu 7</a></li>
                     <li><a class="hide" href="javascript:;">Menu 8</a></li>
                     </ul>
                 </div>
             </li>
         </ul>
     </div>
     */


