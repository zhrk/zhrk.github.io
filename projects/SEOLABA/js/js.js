$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});

var TeamSlidesToShow;
var TeamSlidesToShow = Math.floor(window.innerWidth/286);

$('.team__list').slick({
  arrows: false,
  dots: true,
  infinte: false,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});

$(".popup__form-close").click(function() {
  $(".popup__form").removeClass("popup__form--visible");
});


$('*[data-popup="form"]').each(function(index) {
  $(this).click(function() {
    $(".popup__form").addClass("popup__form--visible");
  });
});