function productsMobile() {
	if (window.innerWidth < 767) {
		$('.blog-page__products').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  centerMode: true,
		  centerPadding: (window.innerWidth - 240) / 2 + 'px'
		});
	}
}

productsMobile();