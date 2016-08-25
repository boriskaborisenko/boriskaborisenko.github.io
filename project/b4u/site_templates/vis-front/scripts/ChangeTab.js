

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

    $(function(){
        //ChangeTab.init('id');
    })

    /*
    <div id="tab1" class="tabs">
        <ul>
        <li class="act"><a data-id="#menu1_1" href="javascript:;">Menu11</a></li>
        <li><a data-id="#menu1_2" href="javascript:;">Menu12</a></li>
        <li><a data-id="#menu1_3" href="javascript:;">Menu13</a></li>
        </ul>
    </div>

    <div data-parent-id="#tab1" id="menu1_1" class="tab_pane act">
        <p>Content menu1_1</p>
    </div>

    <div data-parent-id="#tab1" id="menu1_2" class="tab_pane">
        <p>Content menu1_2</p>
    </div>

    <div data-parent-id="#tab1" id="menu1_3" class="tab_pane">
        <p>Content menu1_3</p>
    </div>
    */



