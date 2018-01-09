function imagesMobile() {
	if (window.innerWidth < 767) {
		$('.mag__images').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true
		});
	}
}

imagesMobile();