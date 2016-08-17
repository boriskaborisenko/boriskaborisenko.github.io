





function checkFormat() {
  if( document.createElement('video').canPlayType('video/mp4') ) {
    return 'mp4';
  } else if( document.createElement('video').canPlayType('video/ogv') ) {
    return 'ogv';
  } else if( document.createElement('video').canPlayType('video/webm') ) {
    return 'webm';
  } else {
    return 'mp4';
  }
}

var supportedVideoFormat = checkFormat();
console.log(supportedVideoFormat);

var video_tag = '<video playsinline loop muted poster="" id="bgvid"></video>';
var src = '<source src="http://localhost:8080/inst.'+supportedVideoFormat+'" type="video/'+supportedVideoFormat+'">';
$('.vid').empty().append(video_tag);
$('#bgvid').empty().append(src);

var audio_tag = '<audio id="petuh"><source  src="http://localhost:8080/Cymbaly.mp3" type="audio/mpeg"></audio>';
$('body').append(audio_tag);















video = document.getElementById("bgvid"),
pauseButton = document.querySelector(".controls .pause");

function vidFade() {
  video.classList.add("stopfade");
}

video.addEventListener('ended', function()
{
// only functional if "loop" is removed 
video.pause();
vidFade();
}, false); 
 
pauseButton.addEventListener("click", function() {
  video.classList.toggle("stopfade");
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = "Pause video";
  } else {
    video.pause();
    pauseButton.innerHTML = "Video on paused";
  }
}, false);

video.addEventListener('touchstart', function(e) {
e.preventDefault();
video.play();
})






 petro = document.getElementById('petuh');
 
 
 function setCurTime() {
    petro.currentTime=3;
}




$('.play_music').click(function(){
	if($(this).hasClass('zhopa')){
		petro.pause();
		$(this).toggleClass('zhopa').html('Music paused');
	}else{
		setCurTime();
		petro.play();
		$(this).toggleClass('zhopa').html('Music plays');
		
	}
});














function timing(){
	//petro.play();
	setTimeout(function(){
		var quad_1 = new Vivus('quad_1', {type: 'scenario-sync', duration: 370, start: 'autostart', forceRender: false, dashGap: 120});
		var quad_2 = new Vivus('quad_2', {type: 'scenario-sync', duration: 570, start: 'autostart', forceRender: false, dashGap: 120});
		var quad_3 = new Vivus('quad_3', {type: 'scenario-sync', duration: 170, start: 'autostart', forceRender: false, dashGap: 120});
		
		var fullmap = new Vivus('fullmap', {type: 'scenario-sync', duration: 370, start: 'autostart', forceRender: false, dashGap: 20});
		//video.pause();
		$('.map_curves').fadeIn(2000);
		$('.quad_1, .quad_2, .quad_3').fadeIn(2000);
		console.log('pause 1');
	}, 3000);
}


function titleReg(){
	//petro.play();
	setTimeout(function(){
		
		$('.regio_title').addClass('animated slideInUp');
		types();
	}, 2000);
}















  
  
 function types(){
      $(".text").typed({
        strings: ["Region name ghfjsgjhdfg hgfkjdfhgkjdfhg dfhgkjdfhgkjdfhg"],
        typeSpeed: 60
      });
  }
  
  
    
  

	var hi = new Vivus('go', {type: 'scenario-sync', duration: 70, start: 'autostart', forceRender: false, dashGap: 120});
  	setTimeout(function(){
	  	$('.trident').fadeOut(1500);
	  	$('.trident_color').fadeIn(1500);
	},4500);
	
	setTimeout(function(){
	  	//$('.trident').fadeOut(1000);
	  	$('.trident_color').addClass('animated zoomOut');
	},5500);
	
	setTimeout(function(){
	  	//$('.trident').fadeOut(1000);
	  	$('.trident_block').fadeOut(500);
	  	video.play();
	},7000);
	
	setTimeout(function(){
	  	//$('.trident').fadeOut(1000);
	  	$('.trident_block').remove();
	  	timing();
	  	titleReg();
	  	
	},7600);



$(document).mousemove(function(e){
        //console.log('X: '+e.pageX);
        //console.log('Y: '+e.pageY);
        rotation = 0;
        transX = 0;
        transY = 0;
        transZ = 0;
        
        rotation = (e.pageX/$(window).width()*90) - 45;
        transX = (e.pageX/$(window).width()*20) - 10;
        transY = (e.pageY/$(window).width()*20) - 10;
        
        transX2 = (e.pageX/$(window).width()*5) - 10;
        transY2 = (e.pageY/$(window).width()*5) - 1;
        
        transX3 = (e.pageX/$(window).width()*50) - 1;
        transY3 = (e.pageY/$(window).width()*50) - 10;
        
        $(".pane").css('transform', 'perspective( 6600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transX + 'deg)  translateY(' + transX + 'px)  ') ;
        
         $(".pane_map").css('transform', 'perspective( 600px ) rotateX(' + transY2 + 'deg)  translateX(' + transY2 + 'px) rotateY(' + transX2 + 'deg)  translateY(' + transX2 + 'px)  ') ;
         
          $(".pane_boxes").css('transform', 'perspective( 1600px ) rotateX(' + transY3 + 'deg)  translateX(' + transY3 + 'px) rotateY(' + transX3 + 'deg)  translateY(' + transX3 + 'px)  ') ;
        
        
        
        $(".bottom_text").css('transform', 'perspective( 16600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transX + 'deg)  translateY(' + transX + 'px)  ') ;
        
        $(".text").css('transform', 'perspective( 16600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transY + 'deg)  translateY(' + transX + 'px)  ') ;
    });




$('.next_scene').click(function(){
	$('.scene').fadeOut(800);
});


