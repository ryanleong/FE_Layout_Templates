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
 * Usage
 * =====================
 * 
 *	EventHandler.on('onScreenResize', function() {
 *		if ($( window ).width() >= 768) {
 *			// Code to run on resize
 *		}
 *	});
 *
 */

OnResize = (function() {
	/**
	 * Varaiables
	 */
	var args;
	var rtime;
	var timeout = false;
	var delta = 200;


	/**
	 * Initilize code
	 */
	function init() {

		$(window).on('resize', function() {
			rtime = new Date();
			
			if (timeout === false) {
				timeout = true;

				setTimeout(_onResizeCallBack, delta);
			}
		});

	}
	init();


	/**
	 * On Resize
	 * @return {[type]} [description]
	 */
	function _onResizeCallBack() {
		if (new Date() - rtime < delta) {
			setTimeout(_onResizeCallBack, delta);
		} else {
			timeout = false;

			try {
				EventHandler.emit('onScreenResize', false);   
			}
			catch(e) {}
		}
	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		$(window).off('resize');
	}
	EventHandler.on('destroyOnResizeListener', destroy);

	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy
	};

})();
