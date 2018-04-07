/**
 * Module: ScrollAnimate
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Animate scroll to element on click
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - destroy()
 * - setArgs()
 * - setSingleArgs()
 *
 * 
 * Default arguments
 * =====================
 * 
 *	options = {
 *		trigger: '.trigger',
 *		elementToScrollTo: '.target',
 *		elementToScroll: 'html, body',
 *		speed: 400,
 *	}
 */

ScrollAnimate = function(options) {

	/**
	 * Variables
	 */
	var $trigger;
	var $elementToScroll;
	var $elementToScrollTo;
	var speed;
	var args;

	/**
	 * Initialize
	 * @param  {int} 	trigger           Selector of element that triggers scroll
	 * @param  {String} elementToScroll   Selector of element to scroll
	 * @param  {String} elementToScrollTo Selector of element to scroll to
	 * @param  {int} 	speed             Duration of animation 
	 * @return {none}
	 */
	function init( options ) {

		setArgs( options );


		$trigger = $(args.trigger);
		$elementToScroll =  $(args.elementToScroll);
		$elementToScrollTo = $(args.elementToScrollTo);
		speed = args.speed;

		$trigger.click(function(event) {
			animiateScrollTo( speed, 0 );
		});
	}
	init( options );


	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				trigger: '.trigger',
				elementToScrollTo: '.target',
				elementToScroll: 'html, body',
				speed: 400,
			};
		} else {
			args = options;
		}

	}

	/**
	 * Update single parameter
	 * @param {Sring} key   Key of Paarmeter
	 * @param {Sring} value Value of Paarmeter
	 */
	function setSingleArgs(key, value) {
		return args[key] = value;
	}

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
	 * Suspends scroll to function.
	 * Use init() to restart.
	 * @return {none}
	 */
	var destroy = function() {
		$trigger.off('click');
		$elementToScroll.off('animate');
	};



	return {
		init: init,
		destroy: destroy,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs
	};

};
