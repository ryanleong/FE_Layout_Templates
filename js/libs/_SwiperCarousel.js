/**
 * Module: SwiperCarousel
 * Author: Ryan Leong
 * Author URI: http://ryanleong.net
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Description: Swiper Module with default options based on http://idangero.us/swiper
 *
 *
 * Public Functions
 * =====================
 * - init()
 * - destroy()
 * - newSwiper()
 * - refreshSwiper()
 * - setArgs()
 * - setContainer()
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
 */

SwiperCarousel = function (options) {
	/**
	 * Initilize code
	 */
	var args;
	var container;
	var swiperInstance;


	/**
	 * Initilize code
	 */
	function init( options ) {
		setArgs( options );
	}
	init( options );


	/**
	 * Set options
	 * @param {Object} options Parameters
	 */
	function setArgs( options ) {
		if (typeof options === 'undefined') {
			args = {
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observer: true,
				observer: true,
				simulateTouch: true,
			};

			container = '.swiper-container';
		}
		else {
			args = options.swiperArgs;
			container = options.container;
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
	 * Set selector of container
	 * @param {[type]} containerSelector [description]
	 */
	function setContainer(containerSelector) {
		container = containerSelector;
		return container;
	}

	/**
	 * Create new swiper
	 * @return {[type]} [description]
	 */
	function newSwiper() {
		swiperInstance = new Swiper (container, args);
	}

	/**
	 * Reinitializes swiper
	 * @return {[type]} [description]
	 */
	function refreshSwiper() {
		swiperInstance.destroy();
		swiperInstance = new Swiper (container, args);
	}

	/**
	 * Destroy
	 * @return {[type]} [description]
	 */
	function destroy() {
		try {
			swiperInstance.destroy();
		}
		catch(e) {};
	}


	/**
	 * Return public functions
	 */
	return {
		init: init,
		destroy: destroy,
		newSwiper: newSwiper,
		refreshSwiper: refreshSwiper,
		setArgs: setArgs,
		setContainer: setContainer,
		setSingleArgs: setSingleArgs,
	};

};
