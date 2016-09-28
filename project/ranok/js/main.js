lastvideo = $('#last_video').html();
$('#last_video').remove();
	
w = $(window).width();
if(w<1000){
 playW = w;
 playH = w/1.82;	
}else{
 playW = 640;
 playH = 360;
}

console.log(lastvideo);
console.log(playW, playH);
		
	   ////video 27ixLv3Lw1M

var videoID = 'iS6rYpJ6nkU';	
var player;	
var playermin;
  	
  	
  	openFull = 'slideInDown';
  	closeFull = 'zoomOut';
  	
  	
  	
  	
		
	
	
		if (w > 999){
		
		  $('.box_1, .box_3').click(function(){
			if($(this).hasClass('full')){
				
			 	
  			
			}else{
  			$(this).addClass('full');
  			
			  $('.cross').removeClass('animated '+closeFull);
			  setTimeout(function(){
  			  $('.cross').addClass('animated '+openFull);
			  }, 400);
			  
			  $('.trans>.small').toggleClass('off');
			  setTimeout(function(){
  			  $('.trans>.big').toggleClass('off animated slideInUp');
			  },710);
			}
		});
		
		
		 $('.box_2').click(function(){
			if($(this).hasClass('full')){
				
			 	
  			
			}else{
  			$(this).addClass('full');
  			  $('#for_iframe').append('<iframe width="'+playW+'" height="'+playH+'" src="'+lastvideo+'" frameborder="0"></iframe>');
			  
			  $('.cross').removeClass('animated '+closeFull);
			  setTimeout(function(){
  			  $('.cross').addClass('animated '+openFull);
			  }, 400);
			  
			  $('.trans>.small').toggleClass('off');
			  setTimeout(function(){
  			  $('.trans>.big').toggleClass('off animated slideInUp');
			  },710);
			}
		});
		 
		
		
		
		$('.cross').click(function(){
  		$(this).removeClass(openFull).addClass(closeFull);
  		
  		setTimeout(function(){
	  		$('#for_iframe').empty();
  			$('.trans').removeClass('full');
  			$('.trans>.small').toggleClass('off');
			  $('.trans>.big').toggleClass('off animated slideInUp');
			}, 250);
		}); 
		
		
		
	$('.infinite-carousel').infiniteCarousel({
                itemsPerMove : 1,
                duration : 500,
                vertical : false
            });	
			
		}
		else{
			$('#people_mob_title').html($('#people_desc_title').html());
			$('#about_mob_title').html($('#about_desc_title').html());
			$('.big_anno_mob').html($('.big_anno').html());
			$('.follow_block_mob').html($('.follow_block').html());
			$('.item:eq(0)').clone().appendTo('.one_mob:eq(0)');
			$('.item:eq(1)').clone().appendTo('.one_mob:eq(1)');
			$('.item:eq(2)').clone().appendTo('.one_mob:eq(2)');
			$('.item:eq(3)').clone().appendTo('.one_mob:eq(3)');
			$('.item:eq(4)').clone().appendTo('.one_mob:eq(4)');
			
			$('.shares').clone().appendTo('.shares_mob');
			$('.center_hello').html($('.time').html());
			$('.mob_logo').html($('.logo').html());
			
			$('.nlo_logo_mob').html($('.nlo_logo').html());
			
			 $('#playermob').append('<iframe width="'+playW+'" height="'+playH+'" src="'+lastvideo+'" frameborder="0"></iframe>');
			
			
			
			$(".scroll_down_mob").click(function() {
			 $('html, body').animate({
			 scrollTop: $(".box_1_mobile").offset().top
			 }, 700);
			});
			
		}
		
		
    
    



// Just a help to change the background-image
var changeImage = function(id, image){
  $(id).css('background-image', 'url('+image+')');
};

//Auto change Background Image over time
$(window).load(function() {
    var images = ['images/bgs/01-p.jpg', 'images/bgs/02-p.jpg'];
    // Your pretty counter
    var i = 0;
    
    // Init sequence, loading the first image
    $("#wrapper_bottom").css("opacity", 0);
    changeImage('#wrapper_bottom', images[i]);
    changeBackground();
    
    // Your function
    // TODO: you should declare this outside of this scope
    function changeBackground() {
      $('#wrapper_bottom')
        .animate({"opacity": 1}, 2000, function(){
          changeImage('#wrapper_top', images[i], 1);
          if (++i >= images.length) { i = 0; } 
          $("#wrapper_bottom").css("opacity", 0);
          changeImage('#wrapper_bottom', images[i]);
      });
    }
  
    setInterval(changeBackground, 3000);
});



/*
function onYouTubeIframeAPIReady() {
	if(w<1000){
		playermin = new YT.Player('playermin', {
        width: w-10,
        height: w/1.82,
        videoId: videoID,
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
        videoId: videoID,
        playerVars: {
            color: 'white',
            controls:0,
            rel:0,
            modestbranding:0,
            fs:0,
            iv_load_policy:3,
            cc_load_policy:0,
            showinfo:0,
            disablekb:0,
            autohide:0
        },
        events: {
            onReady: initialize
        }
    });
	}
    
}

function initialize(){
}
////video end
*/


var outerIcon = 'zoomIn';
var innerIcon = 'rotateIn';


$('.box_1').hover(function(){
	$('.first_icon').toggleClass('animated '+innerIcon);
	$('.icon_shape_first').toggleClass('animated '+outerIcon);
});

$('.box_2').hover(function(){
	$('.second_icon').toggleClass('animated '+innerIcon);
	$('.icon_shape_second').toggleClass('animated '+outerIcon);
});

$('.box_3').hover(function(){
	$('.third_icon').toggleClass('animated '+innerIcon);
	$('.icon_shape_third').toggleClass('animated '+outerIcon);
});



// <iframe id="xxx" frameborder="0" height="400" src="http://nlotv.com/single/pageToolBar/embed-player/126123/" width="600"></iframe>




