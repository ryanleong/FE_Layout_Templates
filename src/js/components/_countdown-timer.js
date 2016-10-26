
// Sample Use
// initializeClock('#countdown', '2016-12-31');

function initializeClock(id, endtime){
	var t = getTimeRemaining(endtime);
	setTimeRemaining(id, t);

	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		setTimeRemaining(id, t);

		if (t.total<=0) {
			clearInterval(timeinterval);
		}
	}, 1000);
}


function setTimeRemaining(id, t) {
	// var t = getTimeRemaining(endtime);

	$(id + ' .days h2').html(t.days);
	$(id + ' .hours h2').html(t.hours);
	$(id + ' .minutes h2').html(t.minutes);
	$(id + ' .seconds h2').html(t.seconds);
}

// Get remaining time in timer
function getTimeRemaining(endtime) {

	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}
