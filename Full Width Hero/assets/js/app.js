// Set up lightbox
function setUpLightbox(openButtonName, lightboxID, openCallbackFn, closeCallbackFn) {
    $(openButtonName).click(function() {
        openCallbackFn();
        fadeIn(lightboxID + '.lightbox');
    });

    $(lightboxID + '.lightbox svg#close').click(function() {
        closeCallbackFn();
        fadeOut(lightboxID + '.lightbox');
    });
}

// Add classes to simulate fade in
function fadeIn(element) {
    $('body').addClass('no-scroll');
    $(element).addClass('show');
    setTimeout(function () {
        $(element).addClass('visually-show');
    }, 20);
}

// Add classes to simulate fade out
function fadeOut(element) {
    $('body').removeClass('no-scroll');
    $(element).removeClass('visually-show');
    $(element).one('transitionend', function(e) {
        $(element).removeClass('show');
    });
}

;//@prepros-prepend _layout-framework.js

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

//# sourceMappingURL=app.js.map