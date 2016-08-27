/*************************************
 * GLOBAL VARIABLES
 *************************************/

/**
* Set up a responsive navigation
* @param {Object} options [animation options for responsive]
* 
* Example
* options = {
*     "animation": "slideDown | slideInLeft | slideInRight",
*     "width": "% | px"
* }
*/
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

/**
 * Set up lightbox.
 * Lightbox DOM element has to be direct child of body.
 * @param {String} openButtonName       [DOM element selector of opening button]
 * @param {String} lightboxID           [ID of lightbox]
 * @param {function} openCallbackFn     [Callback function when lightbox is opened]
 * @param {function} closeCallbackFn    [Callback function when lightbox is closed]
 */
function setUpLightbox(openButtonName, lightboxID, openCallbackFn, closeCallbackFn) {
    $(openButtonName).click(function() {
        openCallbackFn();

        $('body').addClass('no-scroll');
        fadeIn(lightboxID + '.lightbox');
    });

    $(lightboxID + '.lightbox #close').click(function() {
        closeCallbackFn();
        
        $('body').removeClass('no-scroll');
        fadeOut(lightboxID + '.lightbox');
    });
}

/**
 * Fade in animation from Display Block
 * @param  {String} element [DOM element selector]
 * @return none
 */
function fadeIn(element) {
    $(element).addClass('show');
    setTimeout(function () {
        $(element).addClass('visually-show');
    }, 20);
}

/**
 * Fade out animation to Display Block
 * @param  {String} element [DOM element selector]
 * @return none
 */
function fadeOut(element) {
    $(element).removeClass('visually-show');
    $(element).one('transitionend', function(e) {
        $(element).removeClass('show');
    });
}

/**
 * Executes onResize() function on resize end.
 * @return none
*/
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


/**
 * Sticky navigation stick/unstick
 * @param  {int} topAnchor     [Position of scroll bar]
 * @param  {String} pageClassname [Page class name]
 * @param  {String} unstickAtElement [Element at which to unstick nav]
 * @return none
 */
function stickyNavigation(topAnchor, pageClassname, unstickAtElement) {

    if ($('#page-wrapper').hasClass(pageClassname)) {

        if (topAnchor >= $('.' + pageClassname + ' .' + unstickAtElement).offset().top) {

            $('.' + pageClassname + ' .sticky-nav').addClass('stuck');
        }
        else {
            $('.' + pageClassname + ' .sticky-nav').removeClass('stuck');
        }

    }
}



/**
 * Animate scroll to any part of page on click
 * @param  {String} trigger         Class of trigger button
 * @param  {String} eleToScroll     Class of element to scroll (e.g. html, body)
 * @param  {String} eleToScrollTo   Class of which div to scroll to
 * @param  {int} speed              Speed in ms
 * @return none
 */
function scrollToOnClick(trigger, eleToScroll, eleToScrollTo, speed) {
    $(trigger).click(function(event) {
        animiateScrollTo(eleToScroll, eleToScrollTo, speed, 0);
    });
}

/**
 * Animate scroll to any part of page
 * @param  {String} eleToScroll   Class of element to scroll (e.g. html, body)
 * @param  {String} eleToScrollTo Class of which div to scroll to
 * @param  {int} speed         Speed in ms
 * @param  {int} offset        Offset from eleToScrollTo
 * @return none
 */
function animiateScrollTo(eleToScroll, eleToScrollTo, speed, offset) {
    $(eleToScroll).animate({
        scrollTop: $(eleToScrollTo).offset().top + offset
    }, speed);
}


/**
 * Initialize all swipers.
 * Settings must be present in an array of objects.
 * @return {[type]} [description]
 */
function initSwiper() {
    if (typeof swiperSettings !== 'undefined') {
        for (var i = 0; i < swiperSettings.length; i++) {

            new Swiper(swiperSettings[i].class, swiperSettings[i].settings);

        }
    }
}


/**
 * Adds class to a set of DOM elements in succession. (E.g. Fade in animations)
 * @param {jQuery DOM} $element     [List of DOM elements in jQuery]
 * @param {strin} className         [Class to add]
 * @param {Boolean} reverse         [Whether to add in reverse order]
 * @param {Integer} delay           [Delay before adding any claass]
 * @param {Integer} offset          [Duration between each element]
 * @param {Float} multiplier        [Increase in duration between adding class. (e.g. ease-out effect)]
 */
function addClassInSuccession($element, className, reverse, delay, offset, multiplier) {

    if (reverse) {
        $element =  $($element.get().reverse());
    }

    $element.each(function(i) {
        var item = $(this);

        setTimeout(function() {
            item.addClass(className);
        }, (offset * i) + delay);

        delay *= multiplier;
    });
}
