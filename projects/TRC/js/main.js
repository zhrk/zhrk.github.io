function mainMobile() {
	if (window.innerWidth < 767) {

		$('.ads__actual').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  centerMode: true,
		  centerPadding: (window.innerWidth - 250) / 2 + 'px'
		});

		$('.adv__tiles').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  fade: true
		});

		$('.pop__brands').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  centerMode: true,
		  centerPadding: (window.innerWidth - 270) / 2 + 'px'
		});

	}
}

$(document).ready(function() {

  $('.welcome').slick({
    infinite: false,
    arrows: false,
    dots: true,
    touchMove: true
  });

  $('.ads__actual-2').slick({
    infinite: false,
    arrows: false,
    dots: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: (window.innerWidth - 450) / 2 + 'px'
        }
      }
    ]
  });

  $('.trends').slick({
    infinite: false,
    arrows: false,
    dots: true,
    touchMove: false
  });

  $('.movie__list').slick({
    infinite: false,
    arrows: true,
    touchMove: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          touchMove: true,
          arrows: false,
          centerMode: true,
          centerPadding: (window.innerWidth - 225) / 2 + 'px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  mainMobile();
  
});