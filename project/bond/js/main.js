
window.onresize = function(event) {
    var w = $(window).width();
    if(w<1024){
        $('.inputs').attr('type', 'number');	
    }else{
	    $('.inputs').attr('type', 'text');
    }


};





////video 27ixLv3Lw1M
	
var player;

function onYouTubeIframeAPIReady() {
	var w = $(window).width();
	if(w<1024){console.log('small');
		$('.inputs').attr('type', 'number');
		player = new YT.Player('player', {
        width: w-10,
        height: w/1.82,
        videoId: '27ixLv3Lw1M',
        playerVars: {
            color: 'white'
        },
        events: {
            onReady: initialize
        }
    });
		
	}else{
		player = new YT.Player('player', {
        width: 640,
        height: 360,
        videoId: '27ixLv3Lw1M',
        playerVars: {
            color: 'white'
        },
        events: {
            onReady: initialize
        }
    });
	}
    
}

function initialize(){
    //updateTimerDisplay();
    //updateProgressBar();
    //clearInterval(time_update_interval);
    //time_update_interval = setInterval(function () {
        //updateTimerDisplay();
        //updateProgressBar();
    //}, 1000)

}
////video end

$(function() {
   var charLimit = 1;
    $(".inputs").keydown(function(e) {
	    
	    console.log(e.keyCode)
        
        var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.inputs').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.inputs').focus();
            return false;
        } else if (e.shiftKey || e.which <= 47 || e.which >= 58 && e.which < 96 || e.which >= 106 ) {
            return false;
        }
    }).keyup (function () {
        if (this.value.length >= charLimit) {
	        $(this).next('.inputs').focus();
            return false;
        }
        
    });
});



function check(){
						var v1=$.trim($('#i1').val());
						var v2=$.trim($('#i2').val());
						var v3=$.trim($('#i3').val());
						var v4=$.trim($('#i4').val());
						var v5=$.trim($('#i5').val());
						var v6=$.trim($('#i6').val());
						var v7=$.trim($('#i7').val());
						var v8=$.trim($('#i8').val());
                        
                        if(v1.length>0 && v2.length>0 && v3.length>0 && v4.length>0 && v5.length>0 && v6.length>0 && v7.length>0 && v8.length>0 )
                         {
                 $('.sbmt').removeClass('off').addClass('on animated slideInUp');
                         }else{
	                        $('.sbmt').removeClass('on animated slideInUp').addClass('off'); 

                         }
					}





$('.sbmt').click(function(){
	var cal = $('#i1').val()+$('#i2').val()+$('#i3').val()+$('#i4').val()+$('#i5').val()+$('#i6').val()+$('#i7').val()+$('#i8').val();
	if(cal.length<8){
		alert('wrong');
	}else{
	$('.sbmt').removeClass('on').addClass('off'); 
 $.ajax({
 	url: 'http://twitts.kanalukraina.tv/bond/check.php',
 	data: {code:cal},
 	success : function(data){
     //if (data == 'ok'){toOneOk();}else{toOneNot();}
    if(data == 'ok'){
	   toOneOk(); 
     }else{
	   denied();
	     
     }
    }
   });
	
	

	
		
		
	}
	
});



//enter
$(document).keyup(function(e){
	if($('.sbmt').hasClass('on')){
		if(e.keyCode == '13'){
			$('.sbmt').click();
		}
	}
});


$('.inputs:eq(7)').keyup(function(e){
	if($('.sbmt').hasClass('on')){
			if(e.keyCode == '13'){
			$('.sbmt').click();
		}
 }
});


/*
$('.to_step_0').click(function(){
	$('#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8').val('');
	$('.step_1_notok').addClass('off');
	$('.video_block').addClass('off');
	$('.step_0').removeClass('off');
});


$('.to_video').click(function(){
	$('.step_1_notok').addClass('off');
	$('.video_block').removeClass('off');
});
*/
$('.to_step_0').click(function(){
	 toStepNull();
});

$('.to_video').click(function(){
	 toVideo();
});


function denied() {
	$('.code_fields').addClass('animated shake');
	   $('.inputs').addClass('newcolors');
	   $('.sbmt').removeClass('on animated slideInUp').addClass('off'); 
	   setTimeout(function(){
		$('#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8').val('');
	  }, 500);
	   setTimeout(function(){
		$('.code_fields').removeClass('animated shake');
		$('.inputs').removeClass('newcolors');
		$('.inputs:eq(0)').focus();
		
	  }, 1000);
}


function toOneOk() {
    $('.step_0').addClass('off').removeClass('animated flipInY');
    $('.loader').removeClass('off');
	setTimeout(function(){
		$('.loader').addClass('off');
	}, 2000);
	setTimeout(function(){
		$('.step_1_ok').addClass('animated zoomIn');
	}, 2100);
	
	setTimeout(function(){
		$('.auth_block').addClass('animated flipInX');
	}, 3000);
}

function toOneNot() {
	$('.step_0').addClass('off');
	$('.loader').removeClass('off');
	setTimeout(function(){
		$('.loader').addClass('off');
	}, 2000);
	setTimeout(function(){
		$('.step_1_notok').removeClass('off');
	}, 2100);
    
}


function toStepNull() {
	player.pauseVideo();
    $('#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8').val('');
	$('.step_1_notok').addClass('off');
	$('.sbmt').removeClass('on animated slideInUp').addClass('off');
	$('.inputs:eq(0)').focus();	
	$('.video_block').removeClass('animated flipInY').addClass('off');
	$('.step_0').addClass('animated flipInY');
	$('.button_back').removeClass('animated rotateIn');
}

function toVideo(){
	player.stopVideo();
	player.playVideo();
	$('.step_0').addClass('off').removeClass('animated flipInY');
	$('.step_1_notok').addClass('off');
	$('.video_block').addClass('animated flipInY');
	setTimeout(function(){
		$('.button_back').addClass('animated rotateIn');
	}, 2100);
	
}


function toAuth(){
	$('.step_1_ok').removeClass('animated zoomIn');
	 $('.step_1_ok').addClass('off');
     $('.auth').addClass('animated flipInX');
     setTimeout(function(){
		$('.shares').addClass('animated rotateIn');
	}, 1200);
}







/*
$('.new_user').click(function(){
	$('.step_1_ok').fadeOut(100);
	$('.auth_ok').fadeIn(100);
});

$('.old_user').click(function(){
	$('.step_1_ok').fadeOut(100);
	$('.auth_alredy_exist').fadeIn(100);
});
*/













//form ajax
/*
$("#go").submit(function(e) {

    var url = "php/check.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#go").serialize(), // serializes the form's elements.
           success: function(data)
           {
               if(data == 'YES'){
               	$('.next').removeClass('off');
               		$('.next_back').addClass('off');
               }else{
               	$('.next_back').removeClass('off');
               		$('.next').addClass('off');
               }
               //alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
*/		
	
	
//vk init	
  window.vkAsyncInit = function() {
    VK.init({
      apiId: vk_key
    });
  };

  setTimeout(function() {
    var el = document.createElement("script");
    el.type = "text/javascript";
    el.src = "//vk.com/js/api/openapi.js";
    el.async = true;
    document.getElementById("vk_api_transport").appendChild(el);
  }, 0);


function LoginVK() {
VK.Auth.login(function(response) {
  if (response.session) {

  	function authInfo(response) {
        if (response.session) {
            console.log(response.session.mid);
            userid = response.session.mid;
            $.ajax({
 	url: 'http://twitts.kanalukraina.tv/bond/vkdata.php',
 	data: {vkuser:userid},
 	success : function(data){
 		
    if(data == 'ok'){
       toAuth();
       $('.auth h1').empty().html('Дякуємо!');
    }else{
       toAuth();
       $('.auth h1').empty().html('Ви вже зареєстровані');
    }

 	}
 });
        }
    }
    VK.Auth.getLoginStatus(authInfo);
    /* Пользователь успешно авторизовался */
    if (response.settings) {
      /* Выбранные настройки доступа пользователя, если они были запрошены */
    }
  } else {
    /* Пользователь нажал кнопку Отмена в окне авторизации */
  }
});







}


	
	
//FB init	
	
	window.fbAsyncInit = function () {
  FB.init({
    appId: app_key,
    status: true,
    cookie: true,
    xfbml: true
  });
};

(function (doc) {
  var js;
  var id = 'facebook-jssdk';
  var ref = doc.getElementsByTagName('script')[0];
  if (doc.getElementById(id)) {
    return;
  }
  js = doc.createElement('script');
  js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));

function Login() {
  FB.login(function (response) {
    if (response.authResponse) {
      FB.api('/me', function (response) {
        //console.log(response.name);
        //console.log(response.id);
        //document.getElementById('userid').value=response.id;
        userid = response.id;
        //alert(userid);
       
         $.ajax({
 	url: 'http://twitts.kanalukraina.tv/bond/fbdata.php',
 	data: {fbuser:userid},
 	success : function(data){
   if(data == 'ok'){
      toAuth();
      $('.auth h1').empty().html('Дякуємо!');
    }else{
      toAuth();
      $('.auth h1').empty().html('Ви вже зареєстровані');
    }
 	}
 });
      });


    } else {
      console.log("Login attempt failed!");
    }
  }, { scope: 'email,user_photos,publish_actions' });
}





$(window).on('load', function () {
    var $preloader = $('.preloader'),
        $spinner   = $preloader.find('.hello');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $('.inputs:eq(0)').focus();
});
	