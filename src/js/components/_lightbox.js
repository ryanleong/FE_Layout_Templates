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
