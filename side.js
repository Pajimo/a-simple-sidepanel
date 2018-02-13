

// using jquery in this javascript file and it is connected to the slidepoanel.html file


alert('welcome');

$(document).ready(function() {

	$(".pull-me").click(function() {

		$(".panel").slideToggle('slow')
	});
});