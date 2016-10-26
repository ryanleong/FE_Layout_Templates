/**
 * Executes onResize() function on resize end.
 * @return none
*/
function onResizeCallBack() {
	if (new Date() - rtime < delta) {
		setTimeout(onResizeCallBack, delta);
	} else {
		timeout = false;

		// Create your onResize() function
		try {
			onResize();
		}
		catch(e) {}
	}
}

var rtime;
var timeout = false;
var delta = 200;
$(window).on('resize', function() {
	rtime = new Date();
	if (timeout === false) {
		timeout = true;
		setTimeout(onResizeCallBack, delta);
	}
});
