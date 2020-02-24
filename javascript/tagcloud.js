$(document).ready(function () {
    $.getScript(
        'javascript/jquery.svg3dtagcloud.min.js',
        function () {
            var dim = {
                width: '',
                height: '',
                radius: ''
            };
            if ($(window).height() > $(window).width()) {
                $('#tag-cloud').css({
                    top: '40%',
                    width: '70%',
                    left: '15%'
                });
                dim = {
                    width: '100%',
                    height: '80%',
                    radius: '75%'
                };
            } else {
                $('#tag-cloud').css({
                    top: '25%',
                    width: '70%',
                    left: '15%'
                });
                dim = {
                    width: '90%',
                    height: '55%',
                    radius: '50%'
                };
            }
            var entries = [
                {label: 'Github', url: 'https://github.com/qdm12', target: '_blank'},
                {label: 'MSc New York University', url: 'https://qqq.ninja/markdown/#new-york-university,-september-2016-to-may-2018', target: '_blank' },
                {label: 'DevOps', url: 'https://qdm12.github.io/Devops_RESTful', target: '_blank'},
                {label: 'Cryptocurrencies', url: 'https://github.com/qdm12/courses/tree/master/Cryptocurrency%20and%20decentralized%20ledgers', target: '_blank'},
                {label: 'MEng Imperial College London', url: 'https://qqq.ninja/markdown/#imperial-college-london,-october-2012-to-june-2016', target: '_blank' },
                {label: 'Homomorphic Encryption', url: "https://qqq.ninja/markdown#master's-thesis", target: '_blank'},
                {label: 'Docker Hub', url: 'https://hub.docker.com/r/qmcgaw/', target: '_blank'},
                {label: 'Hobbies', url: 'https://qqq.ninja/markdown/#hobbies', target: '_blank'},
                {label: 'Fun facts', url: 'https://qqq.ninja/markdown/#fun-facts', target: '_blank' },
                {label: 'Magazines', url: 'https://qqq.ninja/markdown/#articles-published-in-a-french-hardware-magazine-(2008,-13-years-old)', target: '_blank' },
                {label: 'Quora', url: 'https://www.quora.com/profile/Quentin-McGaw', target: '_blank' },
                {label: 'Reddit', url: 'https://reddit.com/dowitex', target: '_blank' },
                {label: 'Computer builds', url: 'https://qqq.ninja/markdown/#computer-builds', target: '_blank' },
                {label: 'DNS over TLS', url: 'https://github.com/qdm12/cloudflare-dns-server', target: '_blank' },
                {label: 'Golibs', url: 'https://github.com/qdm12/golibs', target: '_blank' },
                {label: 'Go Dev container', url: 'https://github.com/qdm12/godevcontainer', target: '_blank' },
                {label: 'React Dev container', url: 'https://github.com/qdm12/reactdevcontainer', target: '_blank' },
                {label: 'HTMLSpitter', url: 'https://github.com/qdm12/htmlspitter', target: '_blank' },
                {label: 'VPN universal client', url: 'https://github.com/qdm12/private-internet-access-docker', target: '_blank' },
                {label: 'Derivatex', url: 'https://github.com/techsek/derivatex', target: '_blank' },
                {label: 'DDNS universal updater', url: 'https://github.com/qdm12/ddns-updater', target: '_blank' },
                {label: 'Sololearn', url: 'https://www.sololearn.com/Profile/7022047', target: '_blank' },
            ];
            $('#tag-cloud').svg3DTagCloud({
                entries: entries,
                width: dim.width,
                height: dim.height,
                radius: dim.radius,
                radiusMin: 30,
                bgDraw: false,
                bgColor: 'black',
                opacityOver: 1.00,
                opacityOut: 0.2,
                opacitySpeed: 5,
                fov: 400,
                speed: 0.2,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '1.7vmax',
                fontColor: '#fff',
                fontWeight: 'bold', // bold or normal
                fontStyle: 'normal',// italic or normal
                fontStretch: 'semi-condensed', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: false
            });
        }
    );
});