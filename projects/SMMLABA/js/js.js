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

$('.cases__list-1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true
});

$('.cases__list-2').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.cases__list-1',
  dots: true,
  arrows: false,
  variableWidth: true
});

$('.cases__popup-slides').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'ease'
});

$(".cases__item").each(function(index) {
  $(this).click(function() {
    var caseNumber = $(this).data("case");
    $(".cases__popup-slides").slick('slickGoTo', caseNumber - 1);
    setTimeout(function(){
      $(".cases__popup").addClass("cases__popup--visible");
    }, 100);
  });
});

$(".cases__popup-close").click(function() {
  $(".cases__popup").removeClass("cases__popup--visible");
});

$(".faq__card-title").each(function(index) {
  $(this).click(function() {
    $(this).children().eq(1).toggleClass("faq__card-img--active");
    $(this).parent().toggleClass("faq__card--active");
    $(this).next().toggleClass("faq__card-info--visible");
  });
});

$('*[data-popup="form"]').each(function(index) {
  $(this).click(function() {
    $(".popup__form").addClass("popup__form--visible");
  });
});

$(".popup__form-close").click(function() {
  $(".popup__form").removeClass("popup__form--visible");
});

$(".popup__form").click(function() {
  $(".popup__form").removeClass("popup__form--visible");
});

$('.contacts__form').click(function(e){
   e.stopPropagation();
});

$(".header__menu").click(function() {
  $(".header__nav").addClass("header__nav--visible");
});

$(".header__close").click(function() {
  $(".header__nav").removeClass("header__nav--visible");
});