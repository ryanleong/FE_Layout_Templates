
OnResize = (function () {
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
	function init( callback ) {
		this.callback = callback;


		$(window).on('resize', function() {
			rtime = new Date();
			
			if (timeout === false) {
				timeout = true;

				console.log('here');

				setTimeout(_onResizeCallBack, delta);
			}
		});
	}


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
				this.callback();
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

}());
