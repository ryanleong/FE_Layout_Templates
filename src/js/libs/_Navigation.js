/**
 * Module: Navigation
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Navigation show/hide for responsive
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
 *		navClass: 'nav',
 *		openClass: 'open',
 *		trigger: '#openBtn',
 *		triggerCallback: function() {}
 *	}
 */

Navigation = function (options) {
	/**
	 * Varaiables
	 */
	var args;
	var $nav;
	var $trigger;

	/**
	 * Initilize code
	 */
	function init(options) {
		setArgs( options );

		_cacheDom();
		_render();
	}
	init(options);
	

	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				navClass: 'nav',
				openClass: 'open',
				trigger: '#openBtn',
				triggerCallback: function() {}
			};
		} else {
			args = options;
		}

	}

	function setSingleArgs(key, value) {
		return args[key] = value;
	}

	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {
		$nav = $(args.navClass);
		$trigger = $(args.trigger);
	}

	/**
	 * Output changes to DOM element
	 * @return {[type]} [description]
	 */
	function _render() {
		$trigger.click(function(event) {
			
			$nav.toggleClass('open');

			args.triggerCallback($(this));
		});
	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		$trigger.off('click');
	}

	function getArgs() {
		return args;
	}

	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs,
		getArgs: getArgs
	}

};
