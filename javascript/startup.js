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
	console.log('startup.js: document.ready start');
    banner_opacity();
	if(!isMobile){
		console.log('startup.js: Desktop detected.');
		$.getScript('javascript/startup_desktop.js',
					function() {console.log('startup.js: startup_desktop.js loaded.');
								interactive_gradient_background();
								console.log('startup.js: Interactive Gradient background launched.');
								center_download();
								console.log('startup.js: Center download button configured.');
								}
				    );
	}
	console.log('startup.js: document.ready end');
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
	console.log('startup.js: window.onload start');
	smooth_scrolling();
	console.log('startup.js: window.onload end');
};

$(window).resize(function() {
	console.log('startup.js: window was resized');  
});
