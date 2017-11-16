function interactive_gradient_background() {
    $("#Home").mousemove(function( event ) {
        var pct = 90*(+event.pageX)/$(this).width() + 90*(+event.pageY)/$(this).height(),
            bg = "linear-gradient(" + pct + "deg,#2f8770, #355d9f, #ff884d)";
        $("#Home").css("background-image", bg);
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

