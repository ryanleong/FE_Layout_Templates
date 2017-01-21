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
