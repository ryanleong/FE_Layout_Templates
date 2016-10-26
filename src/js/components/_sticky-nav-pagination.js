// Offset value from top
var stickyNavTopOffset = 0;

/**
 * Create on click listener to scroll to block for sticky nav
 * @return {none}
 */
function initStickyNav(topOffset) {
	
	// Set top offset
	stickyNavTopOffset = topOffset;
	onScrollStickyNav(topOffset);

	// Set onClick listener
	$('.sticky-nav li').click(function(event) {

		$('.sticky-nav-block').eq($(this).index());

		animiateScrollTo($('html, body'), $('.sticky-nav-block').eq($(this).index()), 800, 0);
	});
}

/**
 * Do assignment of active element in sticky nav. Call on document scroll event
 * @return {none}
 */
function onScrollStickyNav() {

	// Hide sticky nav when scrolled to the top
	if ($(window).scrollTop() < stickyNavTopOffset) {
		$('.sticky-nav').fadeOut();
	}

	// Check if reached bottom
	else if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {

		$('.sticky-nav').fadeIn();

		$('.sticky-nav li').removeClass('active');
		$('.sticky-nav li:last-child').addClass('active');
	}

	// If has not reached bottom
	else {

		$('.sticky-nav').fadeIn();

		// Iterate through each block to be shown in sticky
		$('.sticky-nav-block').each(function(index, el) {

			// Check if element has been scrolled to
			if ( $(document).scrollTop() > $(this).offset().top && 
				$(document).scrollTop() < ( $(this).offset().top + $(this).height() ) ) {

				$('.sticky-nav li').removeClass('active');
				$('.sticky-nav li').eq(index).addClass('active');
				return;
			}

		});
	}


}
