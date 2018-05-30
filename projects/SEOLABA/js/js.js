var TeamSlidesToShow;
var TeamSlidesToShow = Math.floor(window.innerWidth/286);


window.onresize = function() { 
  location.reload(); 
}

$('.team__list').slick({
  centerMode: true,
  centerPadding: '32px',
  arrows: false,
  dots: true,
  slidesToShow: TeamSlidesToShow,
  /*responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]*/
});

$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});