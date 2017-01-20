// Box change text
function changeText(id, text) {
	var display = document.getElementById(id);
	display.innerHTML = "";
	display.innerHTML = text;
}
function changeOpacity(id, opacity) {
	document.getElementById(id).style.opacity = opacity;
	return false;
}
function changeColor(id, color) {
	document.getElementById(id).style.color = color;
	return false;
}


window.onload = function(){
    //Skype - see https://www.skype.com/en/developer/create-contactme-buttons/
    Skype.ui({
        "name": "dropdown",
        "element": "SkypeButton",
        "participants": ["quentin.mcgaw"],
        "imageSize": 32
    });
    
    //Tag cloud
	try {
		TagCanvas.Start('myCanvas','spheretags',{
			textColour: 'white',
			outlineColour: 'gray',
			reverse: true,
			depth: 0.3,
			maxSpeed: 0.06,
			decel: 0.98,
			fadeIn: 2000,
			minSpeed: 0.005,
			shadowBlur:5,
			wheelZoom:false,
			textHeight:25,
			textFont: "Roboto Slab",
		});
	} catch(e) {
	  // something went wrong, hide the canvas container
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
    
    //Smooth Scrolling
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
    
    //Banner opacity
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
    
    //Center download resume
	var center_download = $("#center_download_resume");
    center_download.mouseover(function(){
		center_download.stop().animate({
			"opacity":"1.0",
            
            
		}, 800);
    });
    center_download.mouseout(function(){
		center_download.stop().animate({
			"opacity":"0.5"

		}, 800);
    });
};
