"use strict";
$(document).ready(function() {
    // Setup awards progressive reveal
    $('.award-section .award-block').hide();
    $('.award-section').append('<div class="more-button">More info</div>');
    $('.award-section .more-button').on('click', function(e) {
	$(e.target).slideUp();
	console.log($(e.target).siblings().find('.award-block'));
	$(e.target).siblings().find('.award-block').slideDown();
	$(e.target).siblings('.nominate-button').slideDown();
    });
});

// Countdown timer to start of event
$(document).ready(function() {
    $('.countdown-timer').each(function(idx, elem) {
	var $timer,thenString, now, then, months, days, hours, minutes, seconds;
	$timer = $(elem);
	thenString = $timer.data('date')
	function updateTimer() {
	    now = new Date();
	    then = new Date(thenString);
	    // Months
	    months = then.getMonth() - now.getMonth() + 12*(then.getFullYear()-now.getFullYear())
	    // Days
	    days = then.getDate() - now.getDate();
	    if (then.getDate() < now.getDate()) {
		// Correct for partial months
		console.log(now.getMonth());
		if ([3, 5, 8, 10].indexOf(now.getMonth()) > -1) {
		    // Thirty days has September...
		    days += 30;
		} else if (now.getMonth == 1) {
		    // February has 28
		    days += 28;
		} else {
		    // ...all the rest have 31
		    days += 31;
		}
		months -= 1;
	    }
	    // Hours
	    hours = then.getHours() - now.getHours();
	    if (then.getHours() < now.getHours()) {
		// Correct for partial days
		hours += 24;
		days -= 1;
	    }
	    // Minutes
	    minutes = then.getMinutes() - now.getMinutes();
	    if (then.getMinutes() < now.getMinutes()) {
		// Correct for partial minutes
		minutes += 60;
		hours -= 1;
	    }
	    // Seconds
	    seconds = then.getSeconds() - now.getSeconds();
	    if (then.getSeconds() < now.getSeconds()) {
		// Correct for partial minutes
		seconds += 60;
		minutes -= 1;
	    }
	    // Update the DOM with the new values
	    $timer.find('.months').text(months);
	    $timer.find('.days').text(days);
	    $timer.find('.hours').text(hours);
	    $timer.find('.minutes').text(minutes);
	    $timer.find('.seconds').text(seconds);
	}
	// Update the timer ever second
	updateTimer();
	window.setInterval(updateTimer, 1000);
    });
});

// Select a random sponsor and present their logo
$(document).ready(function() {
    $('.rotating-sponsors').each(function(idx, elem) {
	var $elem, sponsors, sponsor, max;
	$elem = $(elem);
	sponsors = [
	    {
		href: 'http://eng-sci.udmercy.edu/programs/sci/chemistry/',
		src: '/images/ud-mercy-logo.png'
	    },
	    {
		href: 'http://chem.wayne.edu/',
		src: '/images/wayne-state-logo.png'
	    }
	];
	// Remove non-javascript indicators
	$elem.find('span').hide();
	// Pick a random sponsor and set details
	max = sponsors.length;
	idx = Math.floor(Math.random() * max);
	sponsor = sponsors[idx];
	$elem.attr('href', sponsor.href);
	$elem.find('img').attr('src', sponsor.src);
    });
});
