'use strict';
$(function onStart() {

	/* LOAD PROJECTS */
	d3.json('projects.json', function(error, data) {
		if (error) {
			console.log("Error loading projects ... " + error);
			return;
		}
		let projects = data;
		let articles = d3.select('.main').selectAll('.article').data(projects)
		.enter().append('div');
		articles.classed('article', true);

		articles.append('div')
			.classed('media', true)
			.html((d)=>('<img src="' + d.media + '">'))
			.append('a')
			.attr('href', (d)=>(d.url))
			.append('div')
			.classed('articletitle', true)
			.style('background-color', (d)=>(d.background))
			.html((d)=>('<b>' + d.title + '</b>'));


		$($('.article a')[1]).css('cursor', 'default'); // disable link cursor for 6 DOF
	});


	$('.iconLink').hover(
		function mouseEnterIconLink() {
			$(this).parent().children('.iconLegend').addClass('hover');
		},
		function mouseLeaveIconLink() {
			$(this).parent().children('.iconLegend').removeClass('hover');
		});

});