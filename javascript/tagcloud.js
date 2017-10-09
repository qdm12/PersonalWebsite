$.getScript('javascript/jquery.svg3dtagcloud.min.js',
			function() {
				console.log('tagcloud.js: jquery.svg3dtagcloud.min.js loaded.');
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
				if(isMobile){ //XXX
					w = $(window).width()*0.13;
					h = $(window).height()*0.06;
					r = $(window).width()*0.05;
				}else{
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
				console.log('tagcloud.js: tagcloud launched.');
			}
			);