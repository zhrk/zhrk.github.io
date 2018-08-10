$('.product__info-slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".rws__card-rate-bar").each(function(index) {
  $(this).barrating({
    theme: 'fontawesome-stars'
  });
});

if (window.innerWidth < 1208) {

  $('.catalog__list-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
  
}