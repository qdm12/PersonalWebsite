var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile = true;}
if(!isMobile){
	console.log('particles.js: Desktop detected.');
	$.getScript('javascript/particles.min.js',
				function() {
					/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
					/* particlesJS.load('particles-js', '../config/particles.json', function() { */
					console.log('particles.js: particles.min.js loaded.');
					particlesJS.load('particles', 'config/particles.json', function() {
						console.log('particles.js: Particles launched.');
					});
				}
				);
}