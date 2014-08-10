$(document).ready(function() {
    // Setup awards progressive reveal
    $('.award-section').find('.award-block,.nominate-button').hide();
    $('.award-section').append('<div class="more-button">More info</div>');
    $('.award-section .more-button').on('click', function(e) {
	$(e.target).slideUp();
	console.log($(e.target).siblings().find('.award-block'));
	$(e.target).siblings().find('.award-block').slideDown();
	$(e.target).siblings('.nominate-button').slideDown();
    });
});
