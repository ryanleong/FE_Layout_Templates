//@prepros-prepend _layout-framework.js

$(document).ready(function() {

    setUpLightbox('.horizontal-nav .logo', '#main',
        function() {
            $('#main.lightbox .wrapper').css({ "height": "200px", "width": "200", "background-color": "#fff"});
        },
        function() {
            $('#main.lightbox .wrapper').css({ "height": "0", "width": "0", "background-color": "#fff"});
        });


    // Default Stellar initialization   
    // $('body').imagesLoaded( function() {
    //     $.stellar();
    // });


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

function onResize() {
    d('Resize Callback Triggered.');
}
