/**
 * Module: StickyNav
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Library to do a sticky navigation
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
 * Sample arguments
 * =====================
 * 
 *	options = {		
 *	}
 */

StickyNav = (function () {
	/**
	 * Varaiables
	 */
	var args;
	var $nav, $document, $nextEle;
	var navPosition;


	/**
	 * Initilize code
	 */
	function init( options ) {

		setArgs( options );

		_cacheDom();

		_createListener();
	}


	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {
		$document = $(document);
		$nav = $(args.element);
		navPosition = $nav.position();
		$nextEle = $nav.next();
	}

	/**
	 * Output changes to DOM element
	 * @return {[type]} [description]
	 */
	function _render(isStuck) {
		if (isStuck) {
			$nav.addClass('stuck');
			$nextEle.css({
				'margin-top': $nav.height()
			});
		}
		else {
			$nav.removeClass('stuck');
			$nextEle.css({
				'margin-top': 0
			});
		}
	}

	/**
	 * Listener to stick nav when scrolled to
	 * @return {none}
	 */
	function _createListener() {

		$document.scroll(function() {
			if ($document.scrollTop() >= navPosition.top) {
				_render(true);
			}
			else {
				_render(false);
			}
		});
	}

	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				element: '.sticky',
			};
		}
		else {
			args = options;
		}
	}

	/**
	 * Update single parameter
	 * @param {Sring} key   Key of Paarmeter
	 * @param {Sring} value Value of Paarmeter
	 */
	function setSingleArgs(key, value) {
		args[key] = value;
		return args[key];
	}

	/**
	 * Return public functions
	 */
	return {
		init: init,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs
	};

}());
