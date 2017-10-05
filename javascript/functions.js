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
function moreDetailsOnSkill(skillboxID) {
	var display = document.getElementById(skillboxID);
	display.innerHTML = "";
	switch (skillboxID){
		case "Crypto":
			display.innerHTML = "Bitcoin<br>Cryptography<br>Ethereum<br>Homomorphic encryption thesis<br>Network and web security<br>Kali Linux";
			break;
		case "Programming":
			display.innerHTML = "Python 2 and 3<br>C++ and C<br>Java and Android<br>Javascript<br>Scala<br>RabbitMQ";
			break;
		case "Devops":
			display.innerHTML = "Github, Zenhub, GitKraken & BitBucket<br>Vagrant and Virtual Box<br>Docker and IBM Bluemix<br>Travis CI and unit testing<br>Swagger and RESTful APIs";
			break;
		case "Web":
			display.innerHTML = "HTML, CSS, Javascript, a bit of PHP<br>Database Systems: SQL and Redis<br>Network architecture course";
			break;
		case "Design":
			display.innerHTML = "Adobe XD<br>inVision<br>Gimp<br>Patience and a decent taste";
			break;
		case "HPC":
			display.innerHTML = "Hadoop (in Java and Python)<br>GPUs with openCL (C++)<br>Multi-core / Multi-threading<br>Cloudera QuickStart VM";
			break;
		case "Management":
			display.innerHTML = "Corporate finance<br>Economics<br>Project management<br>Innovation management<br>Entrepreneurship<br>Accounting";
			break;
		case "Others":
			display.innerHTML = "ARM7, FPGA Programming and Verilog<br>AI, Digital signal processing<br>Mathematics, Fundamental Algorithms and Control Engineering<br>Computer Assembly";
			break;
		case "Languages":
			display.innerHTML = "English<br>French<br>Spanish";
			break;
		default:
			display.innerHTML = "????????????";
	}
}
function restoreSkillBox(skillboxID) {
	var display = document.getElementById(skillboxID);
	display.innerHTML = "";
	display.innerHTML = skillboxID;
}




function smooth_scrolling() {
    //Smooth Scrolling
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
}
function interactive_gradient_background() {
    $("#Home").mousemove(function( event ) {
        var pct = 90*(+event.pageX)/$(this).width() + 90*(+event.pageY)/$(this).height(),
            bg = "linear-gradient(" + pct + "deg,#2f8770, #355d9f, #ff884d)";
        $("#Home").css("background-image", bg);
    });
}
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
function center_download() {
	var center_download = $("#center_download");
    center_download.mouseover(function(){
		center_download.stop().animate({
			"opacity":"1.0",
            "font-size":"3vmax",
		}, 800);
    });
    center_download.mouseout(function(){
		center_download.stop().animate({
			"opacity":"0.5",
            "font-size":"2.5vmax",
		}, 800);
    });
}
function tag_cloud() {
    //Tag cloud
	try {
		TagCanvas.Start('myCanvas','spheretags',{
			textColour: 'white',
			outlineColour: 'gray',
			reverse: true,
			depth: 0.3,
			maxSpeed: 0.08,
			decel: 0.98,
			fadeIn: 2000,
			minSpeed: 0.005,
			shadowBlur:5,
			wheelZoom:false,
			textHeight:40,
			textFont: "Roboto Slab",
		});
	} catch(e) {
	  // something went wrong, hide the canvas container
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
}
function particles() {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	/* particlesJS.load('particles-js', '../config/particles.json', function() { */
	particlesJS.load('particles', 'config/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});
}




window.onload = function(){
    interactive_gradient_background();
    banner_opacity();
    center_download();
    tag_cloud();
	smooth_scrolling();
	particles();
	//Clouds.start();
};
