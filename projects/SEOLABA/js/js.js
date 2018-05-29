var TeamSlidesToShow;
var TeamSlidesToShow = Math.floor(window.innerWidth/286);



console.log();

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