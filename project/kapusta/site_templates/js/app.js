function dump(obj) {
    var out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }
    } else {
        out = obj;
    }
    alert(out);
}

(function($){
    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

var CV = {

  events : function() {

    $("#cv").keyup(function(){
        var val = $(this).val().replace(/.*/, '');
        $("#cv").val(val)
    });

    $("#cv").click(function(e){
        $(this).val('');

        var keyboard = $("#ui-cvv2-virtual-keyboard");

        $('#ui-cvv2-virtual-keyboard .ui-cvv2-key').not('.bold').not('.ok').shuffle();

        if (keyboard.css('display') == 'block') {
            keyboard.hide();
        } else {
            keyboard.show();
        }
    });

    $("body").click(function(e){
        if( !$(e.target).is("#cv") ) {
            $("#ui-cvv2-virtual-keyboard").hide();
        }
    });

    $(".ok").click(function(e){
        $("#ui-cvv2-virtual-keyboard").hide();
    });

    // Prevent events from getting pass .popup
    $("#ui-cvv2-virtual-keyboard").click(function(e){
        e.stopPropagation();
    });

    $('.ui-cvv2-key').click(function() {
        var cv = $('#cv');

        if ($(this).hasClass('bold')) {
            cv.val('');
            $('#ui-cvv2-virtual-keyboard .ui-cvv2-key').not('.bold').not('.ok').shuffle();
            $('.ui-cvv2-key').attr('disabled', false);
            //cv.val(cv.val().slice(0, -1));
        } else {
            if (!$(this).hasClass('ok')) {
                var val = $(this).children(":first").html();

                cv.val(cv.val() + val);

                if (cv.val().length > 2) {
                    $('.ui-cvv2-key').not('.bold').not('.ok').attr('disabled', true);
                }
            }
        }
    });

  } //end events

} //end CV

var StepByStep = {
    
    init: function() {
        
        //StepByStep.goStep(0);
        StepByStep.events();
            
    }, //end init
    
    events: function() {

      $('[name="work"]').change(function() {
        var id = $(this).attr('id');
        $('.work_section').not('#'+id).hide();
        $('[data-work-id="'+id+'"]').show();
      });
      
      $('#address_reg').change(function() {
        if ( $(this).prop('checked') ) {
          $('.adress_reg_section').hide();    
        } else {
          $('.adress_reg_section').show();
        }
      });

    } //end events
    
    
} //end StepByStep


$(function() {
    
    
    //main calc from
    //glob_cred_SUMMAX - from layout
    $( "#main_calc_from" ).slider({
      min: glob_cred_SUMMIN,
      max: glob_cred_SUMMAX,
      step: glob_cred_SUMSTEP,
      value: glob_cred_SUMMID,
      range: "min",
      slide: function( event, ui ) {
        $( "#main_calc_from_input" ).val( ui.value );
        start_page_calculator();
      }
    });
    
    $( "#main_calc_from_input" ).val( $( "#main_calc_from" ).slider( "value"));

    //main calc to
    $( "#main_calc_to" ).slider({
      min: glob_cred_SROKMIN,
      max: glob_cred_SROKMAX,
      value: glob_cred_SROKMID,
      range: "min",
      slide: function( event, ui ) {
        $( "#main_calc_to_input" ).val( ui.value );
        start_page_calculator();
      }
    });
    
    $( "#main_calc_to_input" ).val( $( "#main_calc_to" ).slider( "value"));

    $( "#main_calc_from" ).draggable();
    $( "#main_calc_to" ).draggable();

    //datepicker
    $.datepicker.regional['ua'] = {
      closeText: 'Закрити',
      prevText: '',
      nextText: '',
      currentText: 'Сьогодні',
      monthNames: [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
      ],
      monthNamesShort: [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
      ],
      dayNames: ['неділя', 'понеділок', 'вівторок', 'середа', 'четверг', 'пятниця', 'субота'],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Нед',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearRange: "-100:+1",
      yearSuffix: ''
    };

    $.datepicker.setDefaults(
      $.extend($.datepicker.regional["ua"])
    );

    $(".date_picker").datepicker({
      changeMonth: true,
      changeYear: true,
      showOn: "both",
      buttonImage: "",
      buttonText: "",

      beforeShow: function(input, inst) {
        $(input).parent().find('.ui-datepicker-trigger').addClass('active');
      },

       onClose : function(dateText, inst) {
        $('#'+inst.id).parent().find('.ui-datepicker-trigger').removeClass('active');
      }
    });
    
    //To close
    $(".hasDatepicker, .ui-datepicker, .ui-datepicker-trigger").click(function(event) {
      event.stopPropagation();
    });
 
    $("body").on("click", function(event) {
      $('.date_picker').datepicker('hide');
    });      
    

    //select
    $(".custom_select").selectbox({
        onChange: function (val, inst) {
          eval($(this).attr('onchange_juery_app'));
            
           //$(".target" ).change();
           //alert($(this).attr('id'));
           //var select = document.getElementById($(this).attr('id'));
           //console.log($(this).val());
        },
        effect: "slide"
    });
    

    //input checkbox
    $('input[type="checkbox"]').each(function() {
      $(this).prettyCheckable();
    });

    //input radio
    $('input[type="radio"]').each(function() {
      $(this).prettyCheckable();
    });

    //input file
    /*
    $('input[type="file"]').change(function() {
      var _this = $(this),
          file = _this[0].files[0],
          html = $('<p>'+file.name+'<a class="file_remove" href="javascript:;"><i class="fa fa-close"></i></a></p>');

      _this.closest('.file_row').find('.file_value').append( html );

      html.on('click', 'a.file_remove', function(e) {

        var _this = e.target;

        $( _this).closest('p').remove();
      });

    
    });
    */

    //input email (add/remove)
      var inputHtml = $('.dynamic_row').html();

      $('.field_remove').on('click' ,function() {
          $(this).closest('.dynamic_row').remove();
        });

      $('.add_field').click(function() {
        $('.dynamic_container').append($('<div class="dynamic_row">'+inputHtml+'</div>'));

        $('.field_remove').on('click' ,function() {
          $(this).closest('.dynamic_row').remove();
        });

      }); 


    StepByStep.init();
    CV.events();

    $('#number_card').mask("9 9 9 9  -  9 9 9 9  -  9 9 9 9  -  9 9 9 9");
    
    //file inputs preview 
   function readURL(input,img) 
   {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#'+img).attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#foto_main").change(function()
    {
        readURL(this,'foto_main_img');
        Show('dz-preview-foto-div','block');
        glob_main_photo_has = true;
    });    
    
    $("#foto_inn").change(function()
    {
        readURL(this,'foto_inn_img');
    });

    $("#foto_pasp1").change(function()
    {
        readURL(this,'foto_pasp1_img');
    });    
    $("#foto_pasp2").change(function()
    {
        readURL(this,'foto_pasp2_img');
    });    
    $("#foto_pasp3").change(function()
    {
        readURL(this,'foto_pasp3_img');
    });    
    $("#foto_pasp4").change(function()
    {
        readURL(this,'foto_pasp4_img');
    });    
    $("#foto_pasp5").change(function()
    {
        readURL(this,'foto_pasp5_img');
    });    
    $("#foto_dop").change(function()
    {
        readURL(this,'foto_dop_img');
    });    
    
    $("#ZAN_UCH_TEL").mask("+99(999) 999-99-99");
    $("#RAB_TEL").mask("+99(999) 999-99-99");
    
    $("#lightgallery").lightGallery(); 
    
  });

