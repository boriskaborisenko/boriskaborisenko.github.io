

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

    var GenereteTable = {

        init: function(){

            var all = $('.article table');

            if ( all.length ) {
                GenereteTable.replace(all);
            }

        }, //end init

        replace: function(all){

            //clear in article table inline style
            all.each(function(){
                var el = $(this);

                el.removeAttr('style').removeAttr('border').removeAttr('cellspacing').removeAttr('cellpadding');
                el.find('thead, tbody, tfooter, tr, td, th, p').removeAttr('style').removeAttr('border').removeAttr('cellspacing').removeAttr('cellpadding').removeAttr('rel');
                el.wrap("<div class='table-container'></div>");
            });

        } // end replace

    } //end GenereteTable

    $(function(){

        if ( $('.article').length ) {
            GenereteIframe.init();
            GenereteTable.init();
        }

    })

