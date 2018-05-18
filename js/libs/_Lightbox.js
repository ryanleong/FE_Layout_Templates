/**
 * Module: Lightbox
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Lightbox open/close listeners
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - refresh()
 * - setOnOpenCallback(callback($openButton))
 * - setOnCloseCallBack(callback())
 *
 * 
 * Default arguments
 * =====================
 * 
 *	'.lightboxID', '.openButton'
 */

Lightbox = function () {
	/**
	 * Varaiables
	 */
	var $openButton;
	var $lightbox;
	var onOpenCallback = function() {};
	var onCloseCallback = function() {};

	/**
	 * Initilize
	 * @param  {String} lightboxID ID of lightbox
	 * @param  {String} openButton Class/ID of lightbox
	 * @return {none}
	 */
	function init( lightboxID, openButton ) {
		if (typeof lightboxID === 'undefined' || 
			typeof openButton === 'undefined') {
			return;
		}
		
		// Set on click event
		$openButton = $(openButton);
		$lightbox = $(lightboxID);

		createOpenListener();
		createCloseListener();
	}

	/**
	 * Create open listener
	 * @return {[type]} [description]
	 */
	function createOpenListener() {
		$openButton.click(function() {
			onOpenCallback($(this));

			$('body').addClass('no-scroll');
			$lightbox.fadeIn();
		});
	}

	/**
	 * Create close listener
	 * @return {[type]} [description]
	 */
	function createCloseListener() {
		$lightbox.find('#close').click(function() {
			onCloseCallback();
			
			$('body').removeClass('no-scroll');
			$lightbox.fadeOut();
		});
	}

	/**
	 * Destroy close listener
	 * @return {[type]} [description]
	 */
	function destroyOpenListener() {
		$openButton.off('click');
	}

	/**
	 * Destroy close listener
	 * @return {[type]} [description]
	 */
	function destroyCloseListener() {
		$lightbox.find('#close').off('click');
	}


	/**
	 * Set on open callback
	 * @param {Function} callback Callback on open
	 */
	function setOnOpenCallback( callback ) {
		onOpenCallback = callback;
	}

	/**
	 * Set on close callback
	 * @param {Function} callback Callback on close
	 */
	function setOnCloseCallBack( callback ) {
		onCloseCallback = callback;
	}


	/**
	 * Reinitialize Lightbox
	 * @return {[type]} [description]
	 */
	function refresh() {
		destroyOpenListener();
		destroyCloseListener();

		createOpenListener();
		createCloseListener();
	}
	

	/**
	 * Return public functions
	 */
	return {
		init: init,
		refresh: refresh,
		setOnOpenCallback: setOnOpenCallback,
		setOnCloseCallBack: setOnCloseCallBack,
	};

};
