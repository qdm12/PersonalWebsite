var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile = true;}
    var settings = {};
    if(!isMobile){
        console.log('warpdrive.js: Desktop detected.');
        settings = {
            width: 350,/*width*/
            height: 350,/*height*/
            autoResize: true,/*enable/disable autoResize*/
            autoResizeMinWidth: 100,/*set autoResize min width*/
            autoResizeMaxWidth: 5000,/*set autoResize max width*/
            autoResizeMinHeight: 100,/*set autoResize min height*/
            autoResizeMaxHeight: 5000,/*set autoResize max height*/
            addMouseControls: true,/*enable/disable mouse controls*/
            addTouchControls: true,/*enable/disable touch controls*/
            hideContextMenu: true,/*enable/disable canvas context menu*/
            starCount: 1300,/*count of active/moving stars*/
            starBgCount: 200,/*count of inactive/background stars*/
            starBgColor: { r:255, g:255, b:255 },/*background stars color*/
            starBgColorRangeMin: 10,/*background stars color range min of starBgColor*/
            starBgColorRangeMax: 40,/*background stars color range max of starBgColor*/
            starColor: { r:255, g:255, b:255 },/*stars color*/
            starColorRangeMin: 10,/*stars color range min of starBgColor*/
            starColorRangeMax: 100,/*stars color range max of starBgColor*/
            starfieldBackgroundColor: { r:0, g:0, b:0 },/*background color*/
            starDirection: 1,/*stars moving in which direction*/
            starSpeed: 14,/*stars moving speed*/
            starSpeedMax: 250,/*stars moving speed max*/
            starSpeedAnimationDuration: 3,/*time in seconds from starSpeed to starSpeedMax*/
            starFov: 300,/*field of view*/
            starFovMin: 200,/*field of view min*/
            starFovAnimationDuration: 3,/*time in seconds from starFov to starFovMin*/
            starRotationPermission: true,/*enable/disable rotation*/
            starRotationDirection: 1,/*rotation direction*/
            starRotationSpeed: 0.0,/*rotation speed*/
            starRotationSpeedMax: 1.4,/*rotation speed max*/
            starRotationAnimationDuration: 3,/*time in seconds from starRotationSpeed to starRotationSpeedMax*/
            starWarpLineLength: 1.6,/*line length*/
            starWarpTunnelDiameter: 60,/*tunnel diameter*/
            starFollowMouseSensitivity: 0.025,/*mouse follow sensitivity*/
            starFollowMouseXAxis: true,/*enable/disable mouse follow x axis*/
            starFollowMouseYAxis: true/*enable/disable mouse follow y axis*/
        };
        $.getScript('javascript/jquery.warpdrive.min.js',
                    function() {console.log('warpdrive.js: jquery.warpdrive.min.js loaded.');
                                $( '#warpdrive' ).warpDrive(settings);
                                console.log('warpdrive.js: Warp drive launched.');
                                }
                    );
    }
