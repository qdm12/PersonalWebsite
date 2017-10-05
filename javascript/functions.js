// Used when user interacts
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



// Onload
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
function tagcloud(){
	var entries = [
		{ label: 'Github', url: 'https://github.com/qdm12', target: '_top' },
		{ label: 'Homomorphic Encryption', url: 'https://github.com/qdm12/PersonalWebsite/blob/master/markdown/readme.md#masters-thesis', target: '_top' },
		{ label: 'DevOps', url: 'https://qdm12.github.io/Devops_RESTful', target: '_top' },
		{ label: 'Staminapp', url: 'https://github.com/qdm12/Staminapp', target: '_top' },
		{ label: 'Chess', url: 'https://github.com/qdm12/Chess_2016', target: '_top' },
		{ label: 'My course', url: 'https://github.com/qdm12/My-Computing-course', target: '_top' },
		{ label: 'Quora', url: 'https://www.quora.com/profile/Quentin-McGaw', target: '_top' },
		{ label: 'Markdown', url: 'https://github.com/qdm12/PersonalWebsite/blob/master/markdown/readme.md', target: '_top' },
		{ label: 'Bitcoin/Ethereum', url: 'https://github.com/qdm12/courses/tree/master/Cryptocurrency%20and%20decentralized%20ledgers', target: '_top' },
		{ label: 'Big Data', url: 'https://github.com/qdm12/courses/tree/master/Real%20time%20big%20data%20analytics', target: '_top' },
		{ label: 'Databases', url: 'https://github.com/qdm12/courses/tree/master/Database%20systems', target: '_top' },
		{ label: 'Fun facts', url: 'https://github.com/qdm12/PersonalWebsite/blob/master/markdown/readme.md#fun-facts-open_mouth', target: '_top' },
		{ label: 'New York University', url: 'https://github.com/qdm12/PersonalWebsite/blob/master/markdown/readme.md#new-york-university-september-2016-to-may-2018', target: '_top' },
		{ label: 'Imperial College London', url: 'https://github.com/qdm12/PersonalWebsite/blob/master/markdown/readme.md#imperial-college-london-october-2012-to-june-2016', target: '_top' }
	];
	var w, h, r;
	if($(window).height() > $(window).width()){ //mobile
		w = $(window).width()*0.13;
	    h = $(window).height()*0.06;
		r = $(window).width()*0.05;
	}else{ //desktop
		w = 90;
	    h = 45;
		r = 45;
	}
	var settings = {
		entries: entries,
		width: w,
		height: h.toString() + '%',
		radius: r.toString() + '%',
		radiusMin: 30,
		bgDraw: false,
		bgColor: 'black',
		opacityOver: 1.00,
		opacityOut: 0.2,
		opacitySpeed: 15,
		fov: 400,
		speed: 0.2,
		fontFamily: 'Oswald, Arial, sans-serif',
		fontSize: '1.7vmax',
		fontColor: '#fff',
		fontWeight: 'normal',//bold
		fontStyle: 'normal',//italic 
		fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		fontToUpperCase: false

	};
	//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
	$( '#tag-cloud' ).svg3DTagCloud( settings );
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
function particles() {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	/* particlesJS.load('particles-js', '../config/particles.json', function() { */
	particlesJS.load('particles', 'config/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});
}


$(document).ready( function() { /* executes first */
    interactive_gradient_background();
    banner_opacity();
    center_download();
	tagcloud();
});

window.onload = function(){ /* executes secondly */
	smooth_scrolling();
	particles();
	Clouds.start();
};
$(window).resize(function() {
  console.log('window was resized');  
});
