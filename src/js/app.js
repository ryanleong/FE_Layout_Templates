//@prepros-prepend components/_on-resize.js
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
