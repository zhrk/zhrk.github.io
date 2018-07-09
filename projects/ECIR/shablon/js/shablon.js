$(function() {
  $('#rate').barrating({
    theme: 'css-stars'
  });
});

$(".rws__card-rate-bar").each(function(index) {
  $(this).barrating({
    theme: 'fontawesome-stars'
  });
});

$('body').scrollspy({target: "#spy", offset: 250});

var startNavOffset = $(".faq__nav").offset()['top'];
var endNavOffset = $(".shablon__card-more").offset()['top'];

$(window).scroll(function() {
  if ($(window).width() > 1279) {
    if($(window).scrollTop() > startNavOffset) {
      $(".faq__nav").addClass("faq__nav--fixed");
      /*$(".faq__list").addClass("faq__list--fixed");*/
    } else {
      $(".faq__nav").removeClass("faq__nav--fixed");
     /* $(".faq__list").removeClass("faq__list--fixed");*/
    }

    if($(window).scrollTop() > endNavOffset - 500) {
      $(".faq__nav").addClass("faq__nav--hidden");
    } else {
      $(".faq__nav").removeClass("faq__nav--hidden");
    }

  }
});