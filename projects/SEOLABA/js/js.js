var TeamSlidesToShow;
var TeamSlidesToShow = Math.floor(window.innerWidth/286);

$('.team__list').slick({
  centerMode: true,
  centerPadding: '32px',
  arrows: false,
  dots: true,
  slidesToShow: TeamSlidesToShow
});

$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});