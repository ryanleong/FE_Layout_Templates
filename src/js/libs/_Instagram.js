
/**
 * Module: Instagram
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Adapted from https://rudrastyh.com/javascript/get-photos-from-instagram.html
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - getImagesByUserId()
 * - setArgs()
 * - setSingleArgs()
 *
 * 
 * Default arguments
 * =====================
 * 
 *	options = {
 *		token: 'YOUR_TOKEN',
 *		userid: 'ID_OF_USER',
 *		numOfPhotos: 7
 *	}
 */

Instagram = function ( options ) {
	/**
	 * Varaiables
	 */
	var args;
	

	/**
	 * Initilize code
	 */
	function init( options ) {
		setArgs( options );

		_cacheDom();
		_render();
	}
	init(options);

	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				token: 'YOUR_TOKEN',
				userid: 'ID_OF_USER',
				numOfPhotos: 7
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
		// .off('click');
	}


	function getImagesByUserId(callback) {

		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + args.userid + '/media/recent', // or /users/self/media/recent for Sandbox
			dataType: 'jsonp',
			type: 'GET',
			data: {
				access_token: args.token, 
				count: args.numOfPhotos
			},
			success: callback,
			error: function(data){
				console.log(data); // send the error notifications to console
			}
		});

	}


	/**
	 * Return public functions
	 */
	return {
		init: init,
		getImagesByUserId: getImagesByUserId,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs
	};

};
