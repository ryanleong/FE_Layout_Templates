/**
 * Module: OnResize
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: On window resize
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - destroy()
 *
 * 
 * Default arguments
 * =====================
 * 
 *	function callback() {}
 *
 */

OnResize = function ( callbackFunction ) {
	/**
	 * Varaiables
	 */
	var args;
	var rtime;
	var timeout = false;
	var delta = 200;

	var callBack;

	/**
	 * Initilize code
	 */
	function init( callbackFunction ) {
		if (typeof callbackFunction === 'undefined') {
			return;
		}

		callback = callbackFunction;

		$(window).on('resize', function() {
			rtime = new Date();
			
			if (timeout === false) {
				timeout = true;

				// console.log('here');

				setTimeout(_onResizeCallBack, delta);
			}
		});
	}
	init(callbackFunction);


	/**
	 * On Resize
	 * @return {[type]} [description]
	 */
	function _onResizeCallBack() {
		if (new Date() - rtime < delta) {
			setTimeout(_onResizeCallBack, delta);
		} else {
			timeout = false;

			// Create your onResize() function
			try {
				callback();
			}
			catch(e) {}
		}
	}

	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {

	}

	/**
	 * Output changes to DOM element
	 * @return {[type]} [description]
	 */
	function _render() {

	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		$(window).off('resize');
	}

	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy
	}

};
