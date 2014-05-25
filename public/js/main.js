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
	html: [
		{ name: "css", value: 9500 },
		{ name: "html", value: 9500 },
		{ name: "smacss", value: 8000 },
		{ name: "less", value: 9000 },
		{ name: "scss", value: 9000 },
		{ name: "architecture", value: 9000 }
	],
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
	skillsetChart(skillset.javascript);
	if ($(window).width() >= 700) {
		animateSections();
	}
	
});

function skillsetChart(skills) {	
	d3.select("#skillset g").remove() //remove any previous charts

	var margin = {top: 30, left:50, right: 10},
		width = $('#skillset').width() - margin.left - margin.right,
		height = $('#skillset').height() - margin.top*2;

	var barHeight = d3.scale.linear()
					.range([height, 0])
					.domain([0, 10000]);

	var barWidth = d3.scale.ordinal()
						.domain(skills.map(function(s){return s.name}))
						.rangeRoundBands([0,width],0.5);

	var xAxis = d3.svg.axis()
					.scale(barWidth)
					.orient("bottom");

	var yAxis = d3.svg.axis()
					.scale(barHeight)
					.orient("left");	

	// Chart
	var chart = d3.select("#skillset")
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")" );

	// X axis
	chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

	// Y axis
	chart.append("g")
			.attr("class", "y axis")
			.call(yAxis);

	// Bar containers
	var bar = chart.selectAll("g")
					.data(skills)
				.enter().append("g")
					.attr("transform", function(s, i) { return "translate(" + barWidth(s.name)  + ",0)"; });

	// Bar rectangles	
	chart.selectAll(".skillset__bar")
			.data(skills)
		.enter().append("rect")
			.attr("class", "skillset__bar")
			.attr("x", function(s) { return barWidth(s.name); })
			.attr("y", function(s) { return barHeight(s.value); })
			.attr("height", function(s) { return height - barHeight(s.value); })
			.attr("width", barWidth.rangeBand());
	  
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
