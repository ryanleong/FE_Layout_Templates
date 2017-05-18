
/**
 * Module: JSONDataParser
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: http://ryanleong.net
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
 *		container: 'body',
 *		data: {
 *			'heroTitle': 'Title'
 *		}
 *	}
 *
 */

JSONDataParser = function (options) {
	/**
	 * Varaiables
	 */
	var args;
	var $container;
	var defaultJsonData = {};
	

	/**
	 * Initilize code
	 */
	function init( options ) {
		setArgs( options );

		_cacheDom();
		_render();
	}
	init( options );

	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				container: 'body',
				data: defaultJsonData
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
		args[key] = value;
		return args[key];
	}

	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {
		$container = $(args.container);
	}

	/**
	 * Output changes to DOM element
	 * @return {[type]} [description]
	 */
	function _render() {

		for (var elementID in args.data) {
			$container
				.find('#' + elementID)
				.html(args.data[elementID]);
		}

	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		$container = '';
	}

	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs
	};

};
