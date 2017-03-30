/**
 * Module: Select
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Select library to beautify standard select
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - setArgs()
 * - setSingleArgs()
 *
 * 
 * Default arguments
 * =====================
 * 
 *	options = {
 *		container: '.swiper-container',
 *		args: {
 *			nextButton: '.swiper-button-next',
 *			prevButton: '.swiper-button-prev',
 *			pagination: '.swiper-pagination',
 *			paginationClickable: true,
 *			observer: true,
 *			observer: true,
 *			simulateTouch: true,
 *		}
 *	}
 *
 * 
 * DOM Element Structure (Pug)
 * =====================
 * 
 *	.select(data-current-id="0") 
 *		span.current-text Fellow Dream-makers
 *		.arrow
 *			include svg/down.svg
 *		.options
 *			.option.hidden(data-id="0") Fellow Dream-makers
 *			.option(data-id="1") Others
 */

Select = (function () {
	/**
	 * Varaiables
	 */
	var args;
	var $select;
	

	/**
	 * Initilize code
	 */
	function init( options ) {
		setArgs( options );

		_cacheDom();
		_render();
	}

	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				selectSelector: 'select',
				currentTextSelector: '.current-text',
				callback: function() {}
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
		return args[key] = value;
	}

	/**
	 * Cache DOM elements before running
	 * @return {[type]} [description]
	 */
	function _cacheDom() {
		$select = $(args.selectSelector);
	}

	/**
	 * Output changes to DOM element
	 * @return {[type]} [description]
	 */
	function _render() {
		setOnClickListener();
	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		$select.off('click');
		$select.find('.option').off('click');
	}


	/**
	 * Setup onClickListener
	 */
	function setOnClickListener() {
		$select.click(function(event) {
			$select.toggleClass('open');
		});

		$select.find('.option').click(function(event) {
			event.stopPropagation();
			$select.toggleClass('open');

			if ($select.data('current-id') != $(this).data('id')) {

				// Hide current option
				$select.find('.option[data-id="' + $select.data('current-id') + '"]').removeClass('hidden');

				// Show new option
				$(this).addClass('hidden');

				// Change current option
				$select.data('current-id', $(this).data('id'));
				$select.find(args.currentTextSelector).text($(this).text());
			}

			// TODO: Link to actual Select field


			// Callback
			args.callback($(this));
		});
	}


	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy,
		setArgs: setArgs,
		setSingleArgs: setSingleArgs
	}

}());
