$(function() {
  
	$(".background1").click(function() {
		$(".slide1").addClass("exitSlide");
		$(".background1").addClass("exitBackground");
		$(".slide2").addClass("enterSlide");
		$(".background2").addClass("enterBackground");
	});

	$(".background2").click(function() {
		$(".slide2").addClass("exitSlide");
		$(".background2").addClass("exitBackground");
		$(".slide3").addClass("enterSlide");
		$(".background3").addClass("enterBackground");
	});
	
	$(".background3").click(function() {
		$(".slide3").addClass("exitSlide");
		$(".background3").addClass("exitBackground");
		$(".slide4").addClass("enterSlide");
		$(".background4").addClass("enterBackground");
	});
	
	$(".display4-1").click(function() {
		alert("hello");
	});
	
	$(".background4").click(function() {
		$(".slide4").addClass("exitSlide");
		$(".background4").addClass("exitBackground");
		var delay = 4000;
		setTimeout(function() {
			location.reload();
		}, delay);
	});
});