/**
 * Name: Lightbox Library
 * Creator: Ryan Leong
 * 
 * Public functions:
 * 		init()
 * 		refresh()
 * 		setOnOpenCallback(callback)
 * 		setOnCloseCallBack(callback)
 */


window.Lightbox = function( lightboxID, openButton ) {
	/**
	 * Lightbox Instance
	 * Public functions:
	 * 		init()
	 * 		refresh()
	 * 		setOnOpenCallback(callback)
	 * 		setOnCloseCallBack(callback)
	 */
	var lbInstance = (function () {
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
		var init = function( lightboxID, openButton ) {
			// Set on click event
			$openButton = $(openButton);
			$lightbox = $(lightboxID + '.lightbox');

			createOpenListener();
			createCloseListener();
		};

		/**
		 * Reinitialize Lightbox
		 * @return {[type]} [description]
		 */
		var refresh = function() {
			$openButton.off('click');
			$lightbox.find('#close').off('click');

			createOpenListener();
			createCloseListener();
		};

		/**
		 * Set on open callback
		 * @param {Function} callback Callback on open
		 */
		var setOnOpenCallback = function( callback ) {
			onOpenCallback = callback;
		};

		/**
		 * Set on close callback
		 * @param {Function} callback Callback on close
		 */
		var setOnCloseCallBack = function( callback ) {
			onCloseCallback = callback;
		};

		/**
		 * Create open listener
		 * @return {[type]} [description]
		 */
		var createOpenListener = function() {
			$openButton.click(function() {
				onOpenCallback();

				$('body').addClass('no-scroll');
				$lightbox.fadeIn();
			});
		};

		/**
		 * Create close listener
		 * @return {[type]} [description]
		 */
		var createCloseListener = function() {
			$lightbox.find('#close').click(function() {
				onCloseCallback();
				
				$('body').removeClass('no-scroll');
				$lightbox.fadeOut();
			});
		};



		/**
		 * Return public functions
		 */
		return {
			init: init,
			refresh: refresh,
			onOpen: setOnOpenCallback,
			onClose: setOnCloseCallBack
		};

	}());



	/**
	 * Initialize
	 */
	lbInstance.init( lightboxID, openButton );


	/**
	 * Return instance of lightbox
	 */
	return lbInstance;
}
