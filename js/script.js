$(document).ready(function() {
	var carouselList = $("#carousel ul");
	var interval = setInterval(changeSlide, 5000);
	
	function changeSlide () {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	}
	$('#prev').click(function() {
		carouselList.animate({'marginLeft': 400}, 500, moveLastSlide);
	});
	$('#next').click(function() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	});
});
