describe('Countdown object', function() {
    var countdown, then, now;
    beforeEach(function() {
	then = new Date(2015-01-05);
	now = new Date(2015-01-01);
	countdown = new jglcrm.Countdown(then, now);
    });
    it('sets seconds', function() {
	countdown.setSeconds(3);
	expect(countdown.getSeconds()).toEqual(3);
    });
    it('adds minutes', function() {
	countdown.setMinutes(3);
	countdown.addMinutes(2);
	expect(countdown.getMinutes()).toEqual(5);
    });
    it('fixes negative numbers', function() {
	// Simple case
	countdown.setMinutes(3);
	countdown.setSeconds(-1);
	countdown.fixNegatives();
	expect(countdown.getSeconds()).toEqual(59);
	expect(countdown.getMinutes()).toEqual(2);
	// Does the correction bubble-up
	countdown.setMonths(3);
	countdown.setDays(0);
	countdown.setHours(0);
	countdown.setMinutes(0);
	countdown.setSeconds(-1);
	countdown.fixNegatives();
	expect(countdown.getSeconds()).toEqual(59);
	expect(countdown.getMinutes()).toEqual(59);
	expect(countdown.getHours()).toEqual(23);
	expect(countdown.getDays()).toEqual(30);
    });
});
