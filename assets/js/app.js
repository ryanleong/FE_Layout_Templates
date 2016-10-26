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

;/**
 * Animate scroll to any part of page on click
 * @param  {String} trigger         Class of trigger button
 * @param  {String} $eleToScroll     Class of element to scroll (e.g. html, body)
 * @param  {String} $eleToScrollTo   Class of which div to scroll to
 * @param  {int} speed              Speed in ms
 * @return none
 */
function scrollToOnClick(trigger, $eleToScroll, $eleToScrollTo, speed) {
	$(trigger).click(function(event) {
		animiateScrollTo($eleToScroll, $eleToScrollTo, speed, 0);
	});
}

/**
 * Animate scroll to any part of page
 * @param  {String} eleToScroll   Class of element to scroll (e.g. html, body)
 * @param  {String} $eleToScrollTo Class of which div to scroll to
 * @param  {int} speed         Speed in ms
 * @param  {int} offset        Offset from $eleToScrollTo
 * @return none
 */
function animiateScrollTo($eleToScroll, $eleToScrollTo, speed, offset) {
	$eleToScroll.animate({
		scrollTop: $eleToScrollTo.offset().top + offset
	}, speed);
}

;//@prepros-prepend components/_on-resize.js
//@prepros-prepend components/_lightbox.js
//@prepros-prepend components/_animate-scroll.js


$(document).ready(function() {


	//////////////////////////////////////////
	// Examples Start
	//////////////////////////////////////////
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