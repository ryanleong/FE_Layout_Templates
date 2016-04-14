/*************************************
 * GLOBAL VARIABLES
 *************************************/
var debug = true;


/*************************************
 * Responsive Navigation
 *
 * Example
 * options = {
 *     "animation": "slideDown | slideInLeft | slideInRight",
 *     "width": "% | px"
 * }
 *
 * animation - Type of Animation
 * width - width of menu
 *************************************/
 function setUpResponsiveNav(options) {

    // Set class for animation type
    $('.horizontal-nav .menu').addClass(options.animation);

    // Set width of menu
    $('.horizontal-nav .menu').css({
        "width" : options.width
    });

    // On hamburger click
    $('#hamburger').click(function(){
        // Animate hamburger to close
        $(this).toggleClass('open');

        if (options.animation == "slideDown") {
            $('.horizontal-nav .menu').slideToggle();
        }
        else {
            $('.horizontal-nav .menu').toggleClass("open");
        }
    });
 }

/*************************************
 * LIGHTBOX
 *************************************/
function setUpLightbox(openButtonName, lightboxID, openCallbackFn, closeCallbackFn) {
    $(openButtonName).click(function() {
        openCallbackFn();

        $('body').addClass('no-scroll');
        fadeIn(lightboxID + '.lightbox');
    });

    $(lightboxID + '.lightbox svg#close').click(function() {
        closeCallbackFn();
        
        $('body').removeClass('no-scroll');
        fadeOut(lightboxID + '.lightbox');
    });
}

/*************************************
 * FADE IN
 * Add classes to simulate fade in
 *************************************/
function fadeIn(element) {
    $(element).addClass('show');
    setTimeout(function () {
        $(element).addClass('visually-show');
    }, 20);
}

/*************************************
 * FADE OUT
 * Add classes to simulate fade out
 *************************************/
function fadeOut(element) {
    $(element).removeClass('visually-show');
    $(element).one('transitionend', function(e) {
        $(element).removeClass('show');
    });
}

/*************************************
 * LOG FUNCTION
 *************************************/
function d(message) {
    if (!debug) { return; }
    console.log(message);
}

/*************************************
 * ON RESIZE
 *************************************/
 function onResizeCallBack() {
     if (new Date() - rtime < delta) {
         setTimeout(onResizeCallBack, delta);
     } else {
         timeout = false;

         // Create your onResize() function
         try {
            onResize();
         }
         catch(e) {}
     }
 }

var rtime;
var timeout = false;
var delta = 200;
$(window).on('resize', function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(onResizeCallBack, delta);
    }
});

