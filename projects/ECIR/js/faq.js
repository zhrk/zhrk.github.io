$(".faq__card-title").each(function() {
  $(this).click(function() {
    $(this).toggleClass("faq__card-title--visible");
    $(this).next().toggleClass("faq__info--visible");
  });
});

$('body').scrollspy({target: "#spy", offset: 250});

var startNavOffset = $(".faq__nav").offset()['top'];

$(window).scroll(function() {
  if ($(window).width() > 1279) {
    if($(window).scrollTop() > startNavOffset) {
      $(".faq__nav").addClass("faq__nav--fixed");
      $(".faq__list").addClass("faq__list--fixed");
    } else {
      $(".faq__nav").removeClass("faq__nav--fixed");
      $(".faq__list").removeClass("faq__list--fixed");
    }
  }
});