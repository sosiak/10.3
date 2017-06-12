$(document).ready(function() {
	var carouselList = $("#carousel ul");
	var changeSlide = carouselList.animate({'marginLeft':-400}, '500', moveFirstSlide);
	setInterval(changeSlide, 3000);
	var moveFirstSlide = function() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({'marginleft':0});
	};
});
