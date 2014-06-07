// CV Initilization
$(function(){
	
	animateNavigation();

	if ($(window).width() >= 700) {
		skillsetChart(skillset.general);
		changeSkillSet();
		animateSections();
	}
	
});


function animateSections() {
	var sections = $('.section'),
		positionTrigger = $(window).height()*0.6;

	sections.addClass('inactive');

	$(window).scroll(function(){

		if ( sections.length ) {
			sections.each(function(){			
				if ( $(window).scrollTop() > ($(this).offset().top - positionTrigger) ) {
					$(this).removeClass('inactive');
				}
			});
			sections = $('.inactive');			

		} else {
			$(window).off('scroll');
		}

	})
}

function animateNavigation() {	
	$('a').click(function() {
		var destination = $(this).attr('href');

		if ( destination && destination[0] == "#" ) {
			event.preventDefault();
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


