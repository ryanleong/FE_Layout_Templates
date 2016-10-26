/**
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
