function aboutPageMobile() {
	if (window.innerWidth < 767) {
		$('.about-page__welcome-items').slick({
		  infinite: true,
		  autoplay: true,
  		autoplaySpeed: 2000,
		  arrows: false,
		  dots: false,
		  touchMove: false
		});

		$('.about-page__slides').slick({
			infinite: false,
			arrows: false,
		  dots: true,
		  touchMove: true
		});
	}
}

aboutPageMobile();