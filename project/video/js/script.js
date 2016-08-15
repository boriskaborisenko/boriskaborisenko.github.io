





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

var video_tag = '<video playsinline muted loop poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid"></video>';
var src = '<source src="http://apps.ua/video/animatic.'+supportedVideoFormat+'" type="video/'+supportedVideoFormat+'">';
$('.vid').empty().append(video_tag);
$('#bgvid').empty().append(src);

var audio_tag = '<audio id="petuh"><source  src="http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2015.mp3" type="audio/mpeg"></audio>';
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
//video.play();
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




/*      
      
      //var video = 'iNJdPyoqt8U';
      var video='Ylj7prScpYc';






one();

$('.change_video').click(function(){
	$('#video').fadeOut(900);
	player.stopVideo();
	two();
	player.playVideo();
});








function one(){     
      
      
$('#video').YTPlayer({
	mute:true,
    fitToBackground: true,
    videoId: video,
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 1,
      start: 59
    },
    callback: function() {events();}
}); 

var events = function(){
player = $('#video').data('ytPlayer').player;

//setTimeout(function(){player.pauseVideo();}, 5000);
player.addEventListener('onStateChange', function(data){
  console.log("Player State Change", data);
});
     
     }
      
 
     
	         
      
 }        
        
        
       
        
        
        
function two(){     
      
      
$('#video').YTPlayer({
    fitToBackground: true,
    mute:true,
    videoId: video,
    
    playerVars: {
	  modestbranding: 0,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 1,
      start: 90
    },
    callback: function() {events();}
}); 

var events = function(){
player = $('#video').data('ytPlayer').player;
setTimeout(function(){$('#video').fadeIn(2000)}, 1000);

//setTimeout(function(){player.pauseVideo();}, 5000);
player.addEventListener('onStateChange', function(data){
  console.log("Player State Change", data);
});
     
     }
      
 
     
	         
      
 }        
            
     
     
     
    
  */ 
  
  
  
 function types(){
      $(".bottom_text").typed({
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, saepe delectus possimus iste obcaecati reiciendis odio atque sunt ipsa nesciunt odit velit alias quas doloribus cum dolore sapiente? Asperiores, error! Lorem ipsum dolor sit amet, consectetur adipisicing elit." ," Placeat saepe corrupti nisi neque ipsam! Reprehenderit, delectus, dolorum, sunt, eos eum dolor enim nostrum consequatur aliquam nobis culpa corporis distinctio quas?"],
        typeSpeed: 7
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
	  	types();
	  	
	},7600);



$(document).mousemove(function(e){
        //console.log('X: '+e.pageX);
        //console.log('Y: '+e.pageY);
        rotation = 0;
        transX = 0;
        transY = 0;
        transZ = 0;
        
        rotation = (e.pageX/$(window).width()*90) - 45;
        transX = (e.pageX/$(window).width()*50) - 10;
        transY = (e.pageY/$(window).width()*50) - 10;
        $(".pane").css('transform', 'perspective( 6600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transX + 'deg)  translateY(' + transX + 'px)  ') ;
        
        $(".bottom_text").css('transform', 'perspective( 16600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transX + 'deg)  translateY(' + transX + 'px)  ') ;
        
        $(".text").css('transform', 'perspective( 16600px ) rotateX(' + transY + 'deg)  translateX(' + transY + 'px) rotateY(' + transY + 'deg)  translateY(' + transX + 'px)  ') ;
    });



