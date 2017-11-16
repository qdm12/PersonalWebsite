var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile = true;}

function banner_opacity() {
    var banner_opacity_mouseover = 0.93;
    var banner_opacity_mouseout = 0.66;
    var banner = $('#banner_top');
    banner.mouseover(function(){
        banner.css("opacity", banner_opacity_mouseover);
    });
    banner.mouseout(function(){
        banner.css("opacity", banner_opacity_mouseout);
    });
    var b_pos = banner.offset().top;
    $(window).scroll(function (){
        var y = $(this).scrollTop();
        if(y == 0){
            banner_opacity_mouseover = 0.93;
            banner_opacity_mouseout = 0.66;
        } else {
            banner_opacity_mouseover = 0.70;
            banner_opacity_mouseout = 0.5;
        }
        banner.stop().animate({
                        'opacity':banner_opacity_mouseout                
                        },400);
    });
}

$(document).ready( function() { /* executes first */
    banner_opacity();
    if(!isMobile){
        $.getScript('javascript/startup_desktop.js',
                    function() {interactive_gradient_background();
                                center_download();}
                    );
    }
});

function smooth_scrolling() {
    //Smooth Scrolling
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
}

window.onload = function(){ /* executes secondly */
    smooth_scrolling();
};

$(window).resize(function() {

});
