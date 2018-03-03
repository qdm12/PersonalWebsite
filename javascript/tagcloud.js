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
                width: '80%',
                left: '10%'
            });
            dim = {
                width: '100%',
                height: '80%',
                radius: '85%'
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
            {label: 'Github', url: 'https://github.com/qdm12', target: '_top'},
            {label: 'MSc New York University', url: 'https://quentinmcgaw.info/markdown/#new-york-university,-september-2016-to-may-2018', target: '_top' },
            {label: 'DevOps', url: 'https://qdm12.github.io/Devops_RESTful', target: '_top'},
            {label: 'Cryptocurrencies', url: 'https://github.com/qdm12/courses/tree/master/Cryptocurrency%20and%20decentralized%20ledgers', target: '_top'},
            {label: 'Big Data', url: 'https://github.com/qdm12/courses/tree/master/Real%20time%20big%20data%20analytics', target: '_top'},
            {label: 'Databases', url: 'https://github.com/qdm12/courses/tree/master/Database%20systems', target: '_top'},
            {label: 'BillSplitter', url: 'https://github.com/qdm12/BillSplitter', target: '_top'},
            {label: 'Bitcoin Uses', url: 'https://qdm12.github.io/BitcoinUses/results/', target: '_top'},
            {label: 'MEng Imperial College London', url: 'https://quentinmcgaw.info/markdown/#imperial-college-london,-october-2012-to-june-2016', target: '_top' },
            {label: 'Homomorphic Encryption', url: "https://quentinmcgaw.info/markdown#master's-thesis", target: '_top'},
            {label: 'Staminapp', url: 'https://drive.google.com/file/d/0B5UPjZHikV5gWVBwUnVpWjZHQVU/view', target: '_top'},
            {label: 'Docker projects', url: 'https://quentinmcgaw.info/markdown/#personal-projects', target: '_top'},
            {label: 'Markdown', url: 'https://quentinmcgaw.info/markdown', target: '_top'},
            {label: 'Hobbies', url: 'https://quentinmcgaw.info/markdown/#hobbies', target: '_top'},
            {label: 'Fun facts', url: 'https://quentinmcgaw.info/markdown/#fun-facts', target: '_top' },
            {label: 'Hardware magazines', url: 'https://quentinmcgaw.info/markdown/#articles-published-in-a-french-hardware-magazine-(2008,-13-years-old)', target: '_top' },
            {label: 'Quora', url: 'https://www.quora.com/profile/Quentin-McGaw', target: '_top' },
            {label: 'Computer builds', url: 'https://quentinmcgaw.info/markdown/#computer-builds', target: '_top' }
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