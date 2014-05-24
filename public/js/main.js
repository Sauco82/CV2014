$(function(){

	// Link navigation
	$('a').click(function() {
		var destination = this.getAttribute('href');

		if ( destination && destination[0] == "#" ) {
			scrollTo(destination)
		}
	});

	// Scroll related events
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
	})
});


function scrollTo(id) {
	var scroll = $(id).offset().top;

	if (scroll > 0) scroll = scroll - 60;

	$('html, body').animate({
	    scrollTop: scroll
	 }, 600);	
}
