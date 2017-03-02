/**
 * Name: StickyNav Library
 * Creator: Ryan Leong
 * 
 * Public functions:
 * 		init()
 */
StickyNav = (function () {
	/**
	 * Varaiables
	 */
	var options;
	var $nav, $document, $nextEle;
	var navPosition;


	/**
	 * Initilize code
	 */
	function init( args ) {
		options = args;
		_cacheDom();

		_createListener();
	}


	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {
		$document = $(document);
		$nav = $(options.element);
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
	 * Return public functions
	 */
	return {
		init: init
	};

}());
