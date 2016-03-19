/*************************************
 * GLOBAL VARIABLES
 *************************************/
var debug = true;


/*************************************
 * FUNCTIONS
 *************************************/
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

// Log function
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

