//@prepros-prepend _layout-framework.js

$(document).ready(function() {

    var openCallbackFn = function() {
        $('#main.lightbox .wrapper').css({ "height": "200px", "width": "200", "background-color": "#fff"});
    };
    var closeCallbackFn = function() {
        $('#main.lightbox .wrapper').css({ "height": "0", "width": "0", "background-color": "#fff"});
    };

    setUpLightbox('.horizontal-nav ul li', '#main', openCallbackFn, closeCallbackFn);


    // Default WOW initialization
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
});
