var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile = true;}

$.getScript('javascript/particles.min.js',
			function() {
				/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
				/* particlesJS.load('particles-js', '../config/particles.json', function() { */
				console.log('particles.js: particles.min.js loaded.');
				var config = 'config/particles.json';
				if(isMobile){
					console.log('particles.js: Mobile detected.');
					config = 'config/particles_mobile.json';
				}
				particlesJS.load('particles', config, function() {
					console.log('particles.js: Particles launched.');
				});
			}
			);