
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

    $(function(){
        DropDown.init();
    })

    /*
    <div class="dropdown">
        <a href="http://example.com" data-dropdown>Dropdown trigger <span class="dropBox-caret"><i class="fa fa-angle-down"></i></span></a>

      <div class="dropdown-menu">
        sadsadasdsadasd
      </div>
    </div>
    */



