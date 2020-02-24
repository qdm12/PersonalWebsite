var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}
if ($(window).height() > $(window).width()){
    isMobile = true;
}

function smooth_scrolling() {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 650);
        return false;
    });
}

function bannerOpacity() {
    var banner = $('#banner_top');
    $(window).scroll(function () {
        var bannerOpacityMouseover = 0.9;
        var bannerOpacityMouseout = 0.7;
        if ($(this).scrollTop() > 5) {
            bannerOpacityMouseover = 0.7;
            bannerOpacityMouseout = 0.5;
        }
        banner.stop().animate({
            'opacity': bannerOpacityMouseout
        }, 800);
        banner.mouseover(function () {
            banner.css("opacity", bannerOpacityMouseover);
        });
        banner.mouseout(function () {
            banner.css("opacity", bannerOpacityMouseout);
        });
    });
}

function setAnimatedBackground() {
    $("#Home").mousemove(function(event) {
        var pct = 70 * (event.pageX / $(this).width() + event.pageY / $(this).height());
        $("#Home").css("background-image", "linear-gradient(" + pct + "deg,#2f8770, #355d9f, #ff884d)");
    });
}


function setCenterDownload() {
    $("#center_download").mouseover(function () {
        $(this).stop().animate({
            "opacity": "1.0",
            "font-size": "3vmax"
        }, 800);
    });
    $("#center_download").mouseout(function () {
        $(this).stop().animate({
            "opacity": "0.5",
            "font-size": "2.5vmax"
        }, 1200);
    });
}

function setSkillBoxes() {
    $("#Skills > .skillbox").each(function() {
        $(this).text(this.id.replace(new RegExp('-', 'g'), ' '));
    });
    $("#Skills > .skillbox").mouseover(function () {
        switch (this.id) {
        case "Crypto":
            this.innerHTML = "Cryptography<br>Network and web security<br>Bitcoin, Ethereum<br>Homomorphic encryption<br>Kali Linux";
            break;
        case "Backend":
            this.innerHTML = "Golang, NodeJS, Python<br>C++, C, Java, C#<br>RESTful, unit testing<br>openCL and Cuda";
            break;
        case "Frontend":
            this.innerHTML = "React JS/Native + Typescript<br>HTML+CSS+JS<br>Android SDK, PhoneGap";
            break;
        case "Devops-and-Cloud":
            this.innerHTML = "Docker, Kubernetes, Skaffold<br>Vagrant + VirtualBox<br>Git/Github/Gitea<br>Drone, Travis, Jenkins, Docker Hub<br>Zenhub, Wekan, Jira, GitKraken, Swagger<br>GCP, AWS, Bluemix";
            break;
        case "Database-and-analytics":
            this.innerHTML = "PostgreSQL, MySQL, SQlite<br>Redis<br>Hadoop and Map Reduce (Java, Python)<br>Impala, Hive, Spark";
            break;
        case "Design":
            this.innerHTML = "Inkscape, Gimp<br>Adobe XD, inVision<br>Patience and a decent taste";
            break;
        case "Server-admin":
            this.innerHTML = "LXC/Docker containers<br>SSH, bash/Ash/sh scripting<br>Users Linux management<br>Caddy, Traefik, Nginx<br>Debian, Raspbian, DSM, RancherOS<br>ZFS/BTRFS/RAID";
            break;
        case "Management":
            this.innerHTML = "Entrepreneurship and startups<br>Project management<br>Innovation management<br>Corporate finance<br>Economics<br>Accounting";
            break;
        case "Others":
            this.innerHTML = "English, French<br>ARM7, FPGA & Verilog<br>AI, Signal processing<br>Power eng., control eng., computer eng.<br>Android OS, NFC";
            break;
        default:
            this.innerHTML = "????????????";
        }
    });
    $("#Skills > .skillbox").mouseleave(function () {
        $(this).text(this.id.replace(new RegExp('-', 'g'), ' '));
    });
}

function setParticles() {
    $.getScript(
        'javascript/particles.min.js',
        function () {
            if (isMobile) {
                particlesJS.load('particles', 'config/particles_mobile.json');
            } else {
                particlesJS.load('particles', 'config/particles.json');
            }
        }
    );
}

function setGithub() {
    if (isMobile) {
        $("#Projects > #github-feed").hide();
    } else {
        $.getScript(
            'javascript/github-activity.js',
            function () {
                GitHubActivity.feed({
                    username: "qdm12",
                    selector: "#github-feed"
                    // repository: "hbc"
                });
            }
        );
    }
}

$(document).ready(function () { /* executes first */
    var spinnerSize = Math.round(0.1 * Math.min($(window).height(),$(window).width()));
    var borderPx = Math.round(spinnerSize / 2);
    var topPx = Math.round(($(window).height() - spinnerSize - 2 * borderPx) / 2);
    var leftPx = Math.round(($(window).width() - spinnerSize - 2 * borderPx) / 2);
    $('#load-screen > #spinner').css({
        width: spinnerSize.toString() + 'px',
        height: spinnerSize.toString() + 'px',
        top: topPx.toString() + 'px',
        left: leftPx.toString() + 'px',
        borderWidth: borderPx.toString() + 'px'
    });
    smooth_scrolling();
    bannerOpacity();
    if (!isMobile) {
        setAnimatedBackground();
        setCenterDownload();
    }
    setSkillBoxes();
    setParticles();
    setGithub();
    $('#load-screen').fadeOut(function () {
        $(this).remove();
    });
});


// $(window).resize(function() {});