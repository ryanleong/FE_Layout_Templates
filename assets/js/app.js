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
 * Name: Lightbox Library
 * Creator: Ryan Leong
 * 
 * Public functions:
 * 		init()
 * 		refresh()
 * 		setOnOpenCallback(callback)
 * 		setOnCloseCallBack(callback)
 */


window.Lightbox = function( lightboxID, openButton ) {
	/**
	 * Lightbox Instance
	 * Public functions:
	 * 		init()
	 * 		refresh()
	 * 		setOnOpenCallback(callback)
	 * 		setOnCloseCallBack(callback)
	 */
	var lbInstance = (function () {
		/**
		 * Varaiables
		 */
		var $openButton;
		var $lightbox;
		var onOpenCallback = function() {};
		var onCloseCallback = function() {};



		/**
		 * Initilize
		 * @param  {String} lightboxID ID of lightbox
		 * @param  {String} openButton Class/ID of lightbox
		 * @return {none}
		 */
		var init = function( lightboxID, openButton ) {
			// Set on click event
			$openButton = $(openButton);
			$lightbox = $(lightboxID + '.lightbox');

			createOpenListener();
			createCloseListener();
		};

		/**
		 * Reinitialize Lightbox
		 * @return {[type]} [description]
		 */
		var refresh = function() {
			$openButton.off('click');
			$lightbox.find('#close').off('click');

			createOpenListener();
			createCloseListener();
		};

		/**
		 * Set on open callback
		 * @param {Function} callback Callback on open
		 */
		var setOnOpenCallback = function( callback ) {
			onOpenCallback = callback;
		};

		/**
		 * Set on close callback
		 * @param {Function} callback Callback on close
		 */
		var setOnCloseCallBack = function( callback ) {
			onCloseCallback = callback;
		};

		/**
		 * Create open listener
		 * @return {[type]} [description]
		 */
		var createOpenListener = function() {
			$openButton.click(function() {
				onOpenCallback();

				$('body').addClass('no-scroll');
				$lightbox.fadeIn();
			});
		};

		/**
		 * Create close listener
		 * @return {[type]} [description]
		 */
		var createCloseListener = function() {
			$lightbox.find('#close').click(function() {
				onCloseCallback();
				
				$('body').removeClass('no-scroll');
				$lightbox.fadeOut();
			});
		};



		/**
		 * Return public functions
		 */
		return {
			init: init,
			refresh: refresh,
			onOpen: setOnOpenCallback,
			onClose: setOnCloseCallBack
		};

	}());



	/**
	 * Initialize
	 */
	lbInstance.init( lightboxID, openButton );


	/**
	 * Return instance of lightbox
	 */
	return lbInstance;
}

/**
 * Name: ScrollAnimate Library
 * Creator: Ryan Leong
 * 
 * Public functions:
 * 		init()
 * 		refresh()
 * 		suspend()
 */
window.ScrollAnimate = function( options ) {


	/**
	 * ScrollAnimate Instance
	 * Public functions:
	 * 		init()
	 * 		refresh()
	 * 		suspend()
	 */
	var ScrollAnimateInstance = (function() {

		/**
		 * Variables
		 */
		var $trigger;
		var $elementToScroll;
		var $elementToScrollTo;
		var speed;

		/**
		 * Initialize
		 * @param  {int} 	trigger           Selector of element that triggers scroll
		 * @param  {String} elementToScroll   Selector of element to scroll
		 * @param  {String} elementToScrollTo Selector of element to scroll to
		 * @param  {int} 	speed             Duration of animation 
		 * @return {none}
		 */
		var init = function( trigger, elementToScroll, elementToScrollTo, speed ) {
			$trigger = trigger;
			$elementToScroll = elementToScroll;
			$elementToScrollTo = elementToScrollTo;
			speed = this.speed;

			$trigger.click(function(event) {
				animiateScrollTo( speed, 0 );
			});
		};

		/**
		 * Animate scroll
		 * @param  {int} speed  	Duration of animation in milliseconds
		 * @param  {int} offset 	Pixel offset from element to scroll to
		 * @return {none}
		 */
		var animiateScrollTo = function ( speed, offset ) {
			$elementToScroll.animate({
				scrollTop: $elementToScrollTo.offset().top + offset
			}, speed);
		};

		/**
		 * Re-Initialize ScrollAnimate instance
		 * @return {none}
		 */
		var refresh = function() {
			$trigger.off('click');
			$elementToScroll.off('animate');

			init( $trigger, $elementToScroll, $elementToScrollTo, speed );
		};

		/**
		 * Suspends scroll to function.
		 * Use init() to restart.
		 * @return {none}
		 */
		var suspend = function() {
			$trigger.off('click');
			$elementToScroll.off('animate');
		};


		return {
			init: init,
			refresh: refresh,
			suspend, suspend
		};

	}());



	/**
	 * Check for needed parameters
	 */
	if (typeof options.trigger !== 'undefined' &&
		typeof options.elementToScrollTo !== 'undefined' ) {

		
		/**
		 * Set default element to scroll if none was set
		 */
		if (typeof options.elementToScroll !== 'undefined') {
			options.elementToScroll = 'html, body';
		}

		/**
		 * Set default animation duration if none was set
		 */
		if (typeof options.speed !== 'undefined') {
			options.speed = 400;
		}

		/**
		 * Initialize ScrollAnimate instance
		 */
		ScrollAnimateInstance.init( $(options.trigger), $(options.elementToScroll), $(options.elementToScrollTo), options.speed );

		/**
		 * Return ScrollAnimate instance
		 */
		return ScrollAnimateInstance;
	}

	/**
	 * If all required options were not set
	 */
	else {
		console.log('AnimateScroll: \ntrigger, elementToScrollTo need to be specified.');
		return false;
	}

};

//@prepros-prepend components/_on-resize.js
//@prepros-prepend components/_lightbox.js
//@prepros-prepend components/_animate-scroll.js


$(document).ready(function() {

	var homeLightbox = new Lightbox('#main', '.footer');

	var k = new ScrollAnimate({
		trigger: '.efei',
		// speed: 1000,
		// elementToScrollTo: '.jowiefew',
		// elementToScroll: '.asdfafwew'
	});
	// k.refresh();
	// var home = lightbox.newLightbox;
	// console.log(home);


	// Default Stellar initialization   
	$('body').imagesLoaded( function() {
	});


	// Default WOW initialization
	// wow = new WOW({
	// 	boxClass: 'wow',
	// 	animateClass: 'animated',
	// 	offset: 0,
	// 	mobile: true,
	// 	live: true
	// });
	// wow.init();

});

function onResize() {
	// Resize Callback Triggered
}


// Initialize Google Maps
function initMap() {
	// Map div
	var mapDiv = document.getElementById('map');

	// Map Options
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 44.540, lng: -78.546},
		zoom: 8,
		// disableDefaultUI: true,
		// fullscreenControl: true,
		// fullscreenControlOptions: {
		//     position: google.maps.ControlPosition.RIGHT_BOTTOM
		// },
		// mapTypeControl: true,
		// mapTypeControlOptions: {
		//     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		//     mapTypeIds: [
		//         google.maps.MapTypeId.ROADMAP,
		//         google.maps.MapTypeId.TERRAIN,
		//         google.maps.MapTypeId.HYBRID,
		//         google.maps.MapTypeId.SATELLITE,
		//     ]
		// }
	});

	// Map Style
	map.set('styles', [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]);

	// Center map on resize
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter({lat: 44.540, lng: -78.546});
	});
}


//# sourceMappingURL=app.js.map