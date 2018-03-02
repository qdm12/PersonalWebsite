var isMobile = false;
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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

window.onload = function () { /* executes first */
    $('#load-screen').delay(2000).fadeOut(function () {
        $(this).remove();
    });
    smooth_scrolling();
};

$(document).ready(function () { /* executes secondly */
    bannerOpacity();
    if (!isMobile) {
        // Banner opacity
        $("#Home").mousemove(function(event) {
            var pct = 70*(event.pageX/$(this).width() + event.pageY/$(this).height());
            $("#Home").css("background-image", "linear-gradient(" + pct + "deg,#2f8770, #355d9f, #ff884d)");
        });
        $("#center_download").mouseover(function() {
            $(this).stop().animate({
                "opacity": "1.0",
                "font-size": "3vmax"
            }, 800);
        });
        // Center download styling
        $("#center_download").mouseout(function() {
            $(this).stop().animate({
                "opacity": "0.5",
                "font-size": "2.5vmax"
            }, 1200);
        });
    }
});

// $(window).resize(function() {});