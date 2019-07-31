// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("myBtn").style.display = "block";
//  } else {
//    document.getElementById("myBtn").style.display = "none";
//  }
    $(".scroll-fadein").each(function (i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
//            $(this).animate({opacity: "1"}, 1500);
//            TweenMax.from(i, 1, {
//                    autoAlpha: 0,
//                    y: 100
//                });
        }
    });
    
    var bottom_of_object = $(".inner_epic_chef_container").position().top + $(".inner_epic_chef_container").outerHeight();
    var top_of_window = $(window).scrollTop();// + $(window).height();
    if (top_of_window > bottom_of_object) {
        $(".nav_container > .main_logo > img").attr("src","../images/web_logo.svg");
        $("#menu_btn > div").css("background-color","black");
        $(".nav_container .side_nav").attr("data-on","#");
         $(".nav_container .side_nav").attr("href","#");
        $(".nav_container .side_nav").css("color","black");
        $(".nav_container .side_nav img").attr("src","../images/down_black.png");
        $(".nav_container").css("background","transparent");
        
    }else{
        $(".nav_container > .main_logo > img").attr("src","../images/web_logo_white.svg");
        $(".nav_container .side_nav").attr("data-on","off");
        $("#menu_btn > div").css("background-color","white");
        $(".nav_container .side_nav").attr("href","javascript:void(0)");
        $(".nav_container .side_nav").css("color","white");
        $(".nav_container .side_nav img").attr("src","../images/down_white.png");
        $(".nav_container").css("background","#00000088");
    }

 

    var bottom_of_object = $(".feature_vid").position().top + $(".feature_vid").outerHeight();
    var bottom_of_object_flow = $(".feature_vid").position().top + $(".vid-flow").outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height() - 20;
    var top_of_gallery = $(".inner_slider_container").position().top;
    if(bottom_of_window <= bottom_of_object_flow || bottom_of_window > top_of_gallery){
        $(".vid-flow").css("position", "");
        $(".vid-flow").css("right", "");
        $(".vid-flow").css("bottom", "");
    }else if (bottom_of_window > bottom_of_object) {
        $(".vid-flow").css("position", "fixed");
        $(".vid-flow").css("right", "5%");
        $(".vid-flow").css("bottom", "20px");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//  document.body.scrollTop = 0; // For Safari
//  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    TweenLite.to(window, 2, {scrollTo:0});
}

$( document ).ready(function() {
    var d = new Date();
  var n = d.getFullYear();
  $(".bottom_copyright").html("© The Chef’s Gala "+n);
    resizeVideo();
});

$( window ).resize(function() {
    resizeVideo();
});

function resizeVideo() {
  $( "#video-popup iframe").attr("width", $( document ).width()*0.8);
  $( "#video-popup iframe").attr("height", $( document ).width()*0.470588);
//  $("#video-popup").css
}



$(document).ready(function() {
    

    $(window).scroll( function(){
    
        $('.hide').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object*0.9 ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
            
        }); 
    
    });
    
});
