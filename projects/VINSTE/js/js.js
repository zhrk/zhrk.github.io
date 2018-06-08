$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});

function initMobile() {
  if (window.innerWidth < 1179) {

    $('.features__list').slick({
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    if (window.innerWidth < 1023) {

      $('.price__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
      });

    }

  }
}

initMobile();