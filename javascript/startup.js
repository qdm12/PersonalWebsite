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

window.onload = function () { /* executes when fully loaded */
    $('#load-screen').fadeOut(function () {
        $(this).remove();
    });
};

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
        // Banner opacity
        $("#Home").mousemove(function(event) {
            var pct = 70 * (event.pageX / $(this).width() + event.pageY / $(this).height());
            $("#Home").css("background-image", "linear-gradient(" + pct + "deg,#2f8770, #355d9f, #ff884d)");
        });
        $("#center_download").mouseover(function () {
            $(this).stop().animate({
                "opacity": "1.0",
                "font-size": "3vmax"
            }, 800);
        });
        // Center download styling
        $("#center_download").mouseout(function () {
            $(this).stop().animate({
                "opacity": "0.5",
                "font-size": "2.5vmax"
            }, 1200);
        });
    }
});

// $(window).resize(function() {});