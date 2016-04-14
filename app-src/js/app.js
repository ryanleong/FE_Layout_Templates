//@prepros-prepend _layout-framework.js

$(document).ready(function() {


    //////////////////////////////////////////
    // Examples Start
    //////////////////////////////////////////
    setUpResponsiveNav({
        "animation": "slideInRight",
        "width": "80%",
    });

    setUpLightbox('.horizontal-nav .menu li:first-child', '#main',
        function() {
            $('#main.lightbox .wrapper').css({ "height": "200px", "width": "200", "background-color": "#fff"});
        },
        function() {
            $('#main.lightbox .wrapper').css({ "height": "0", "width": "0", "background-color": "#fff"});
        });
    //////////////////////////////////////////
    // Examples End
    //////////////////////////////////////////



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
    // Resize Callback Triggered
}
