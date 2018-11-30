$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});

var dCurrencyIsOpen = false;

$(".digest__currency").click(function(event) {
  $(".digest__currency-list").toggleClass("digest__currency-list--visible");
  if (dCurrencyIsOpen === false) {
    dCurrencyIsOpen = true;
    $(this).children()[1].classList.add("digest__currency--open");
    $(this).children()[0].innerHTML = 'Скрыть';
  } else {
    dCurrencyIsOpen = false;
    $(this).children()[1].classList.remove("digest__currency--open");
    $(this).children()[0].innerHTML = 'Курс валют';
  }
});

$('.recent__list').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});