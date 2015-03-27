"use strict";

// Namespace
window.jglcrm = {};

$(document).ready(function() {
    // Setup awards progressive reveal
    $('.award-section .award-block').hide();
    $('.award-section').append('<div class="more-button">More info</div>');
    $('.award-section .more-button').on('click', function(e) {
	$(e.target).slideUp();
	$(e.target).siblings().find('.award-block').slideDown();
	$(e.target).siblings('.nominate-button').slideDown();
    });
});

// Object for holding the countdown to the start of the event
jglcrm.Countdown = function(then, now) {
    var seconds, minutes, hours, days, months;
    // Months
    months = then.getMonth() - now.getMonth() + 12*(then.getFullYear()-now.getFullYear())
    // Days
    days = then.getDate() - now.getDate();
    // Hours
    hours = then.getHours() - now.getHours();
    // Minutes
    minutes = then.getMinutes() - now.getMinutes();
    // Seconds
    seconds = then.getSeconds() - now.getSeconds();
    // Method to check for negative numbers
    this.fixNegatives = function() {
	// Seconds
	if (seconds < 0) {
	    // Correct for partial minutes
	    seconds += 60;
	    minutes -= 1;
	}
	// Minutes
	if (minutes < 0) {
	    // Correct for partial minutes
	    minutes += 60;
	    hours -= 1;
	}
	// Hours
	if (hours < 0) {
	    // Correct for partial days
	    hours += 24;
	    days -= 1;
	}
	// Days
	if (days < 0) {
	    // Correct for partial months
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
	return true;
    }
    this.getSeconds = function() {
	return seconds;
    };
    this.setSeconds = function(newSeconds) {
	seconds = newSeconds;
    };
    this.getMinutes = function() {
	return minutes;
    };
    this.setMinutes = function(newMinutes) {
	minutes = newMinutes;
    };
    this.addMinutes = function(deltaMinutes) {
	minutes += deltaMinutes;
    };
    this.getHours = function() {
	return hours;
    };
    this.setHours = function(newHours) {
	hours = newHours;
    };
    this.getDays = function() {
	return days;
    };
    this.setDays = function(newDays) {
	days = newDays;
    };
    this.getMonths = function() {
	return months;
    };
    this.setMonths = function(newMonths) {
	months = newMonths;
    };
    this.fixNegatives();
}

// Countdown timer to start of event
$(document).ready(function() {
    $('.countdown-timer').each(function(idx, elem) {
	var $timer,thenString, now, then, months, days, hours, minutes, seconds, countdown;
	$timer = $(elem);
	then = new Date(Date.UTC(2015, 4, 27, 12));
	console.log(then);
	function updateTimer() {
	    now = new Date();
	    countdown = new jglcrm.Countdown(then, now);
	    // Update the DOM with the new values
	    $timer.find('.months').text(countdown.getMonths());
	    $timer.find('.days').text(countdown.getDays());
	    $timer.find('.hours').text(countdown.getHours());
	    $timer.find('.minutes').text(countdown.getMinutes());
	    $timer.find('.seconds').text(countdown.getSeconds());
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
	    },
	    {
		href: 'http://www.organicdivision.org/',
		src: '/images/orgn-logo.png'
	    },
	    {
		href: 'http://www.divched.org/',
		src: '/images/ched-logo.png'
	    },
	    {
		href: 'https://www.cmich.edu/colleges/cst/chemistry/Pages/default.aspx',
		src: '/images/cmu-logo.png'
	    },
	    {
		href: 'http://www.lsa.umich.edu/chem/',
		src: '/images/uofm-logo.png'
	    },
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


// Pop-up with instructions for submitting abstracts
$(document).ready(function(e) {
    $('.abstract-guidelines').on('click', function(linkEvent) {
	console.log('hello');
	var $btn, $modal, url;
	url = $(linkEvent.target).attr('href');
	$modal = $('#abstract-guidelines');
	$modal.modal();
	// $btn = $modal.find('#abstract-submit')
	// $btn.on('click', function() {
	//     // window.location.href = url;
	// });
	linkEvent.preventDefault();
    });
});
