

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
