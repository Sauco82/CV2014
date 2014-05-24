$(function(){

	$('a').click(function() {
		var destination = this.getAttribute('href');

		if ( destination && destination[0] == "#" ) {
			scrollTo(destination)
		}
	});
	
});


function scrollTo(id) {
	$('html, body').animate({
	    scrollTop: $(id).offset().top
	 }, 600);
}
