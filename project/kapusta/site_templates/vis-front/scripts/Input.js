

    var Input = {

        events: function(){

            $('input,textarea').placeholder();

            $('input[type="radio"]').change(function(){
                var id = $(this).attr('id'),
                    name = $(this).attr('name');

                if ($(this).prop('checked')) {
                    $('label[ data-input-name="'+name+'" ]').removeClass('act');
                    $('label[ for="'+id+'" ]').addClass('act');
                }
            });

            $('input[type="checkbox"]').change(function(){
                var name = $(this).attr('name');

                if ($(this).prop('checked')) {
                    $('label[ data-input-name="'+name+'" ]').addClass('act');
                } else {
                    $('label[ data-input-name="'+name+'" ]').removeClass('act');
                }
            });

        } //end events

    } //end Input

    $(function(){

        if ( $('input').length || $('textarea').length ) {
            Input.events();
        }

    })

    /*
    <label data-input-name="radio" for="input">Label</label>
    <input type="radio" name="radio" id="input">

    <label data-input-name="radio" for="input2">Label2</label>
    <input type="radio" name="radio" id="input2">

     <label data-input-name="checkbox" for="checkbox">Label</label>
     <input type="checkbox" name="checkbox" id="checkbox">
    */


