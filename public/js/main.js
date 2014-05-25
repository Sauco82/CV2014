var skillset = {
	javascript: [
		{ name:"Vainilla" , value: 9500 }, //It's over 9000!
		{ name:"Jquery" , value: 9000 },
		{ name:"Coffescript" , value: 6500 },
		{ name:"Angular" , value: 7000 },
		{ name:"Knockout" , value: 5500 },
		{ name:"Architecture" , value: 7000 },
		{ name:"Yeoman" , value: 2500 },
		{ name:"Spinejs" , value: 5000 },
		{ name:"Game engines" , value: 2500 }
	],
	html: {
		css: 9500,
		html: 9500,
		smacss: 8000,
		less: 9000,
		scss: 9000,
		architecture: 9000
	},
	backend: {
		rails: 5000,
		mysql: 3000,		
		tdd: 2000,
		nodejs: 2500,
		architecture: 5000,
		apidevelopment: 6000
	},
	design: {
		colortheory: 7000,
		layout: 6000,
		typography: 5000,
		wireframing: 7000,
		drawing: 7000,
		inkscape: 9500,
		gimp: 6500,
		photoshop: 2000,
		illustrator: 2000,
	},
	usability: {
		ux: 2000,
		gamification: 2500,
		psychology: 1000,
		affordance: 1000,
		learnability: 2000
	}
}


// CV Initilization
$(function(){
	
	animateNavigation();
	skillsetChart();
	if ($(window).width() >= 700) {
		animateSections();
	}
	
});

function skillsetChart() {
	var width = $('#skillset').width(),
		height = $('#skillset').height();

	var scale = d3.scale.linear()
				.range([0, width])
				.domain([0, d3.max(skillset.javascript, function(s) {return s.value} )]);


	d3.select("#skillset")
	  .selectAll("div")
	  	.data(skillset.javascript)
	  .enter().append("div")
    	.style("width", function(d) { return scale(d.value) + "px"; })
    	.classed("skillset__bar", true)
    	.text(function(d) { return d.name + ": " + d.value; });
	  
}

function animateSections() {
	var sections = $('.section'),
		middleOfTheScreen = $(window).height()/2;

	sections.addClass('inactive');

	$(window).scroll(function(){

		if ( sections.length ) {
			sections.each(function(){			
				if ( $(window).scrollTop() > ($(this).offset().top - middleOfTheScreen) ) {
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
