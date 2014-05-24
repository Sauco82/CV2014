$(function(){

	animateNavigation();
	animateSections();
	
});

function animateSections() {
	var sections = $('.section');

	sections.addClass('inactive');

	$(window).scroll(function(){

		if ( sections.length ) {
			sections.each(function(){			
				if ( $(window).scrollTop() > ($(this).offset().top - 400) ) {
					$(this).removeClass('inactive');
				}
			});
			sections = $('.inactive');
		}

	})
}

function animateNavigation() {	
	$('a').click(function() {
		var destination = this.getAttribute('href');
		event.preventDefault();

		if ( destination && destination[0] == "#" ) {
			scrollTo(destination)
		}
	});
}

function scrollTo(id) {
	var scroll = $(id).offset().top;

	if (scroll > 0) scroll = scroll - 60;

	$('html, body').animate({
	    scrollTop: scroll
	 }, 600);	
}
