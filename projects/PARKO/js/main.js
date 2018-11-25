$(document).ready(function() {

  $('#fullpage').fullpage({
    navigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.welcome__section',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'lastPage'],
    menu: '#myMenu'
  });

  $(".welcome__slider").on("init", function(event, slick, currentSlide) {
    $(this).append(
      '<div class="slick-counter">'+ parseInt(slick.currentSlide + 1, 10) +' / '+ slick.slideCount +'</div>'
    );
  });

  $(".welcome__slider").on("afterChange", function(event, slick, currentSlide) {
    $(this).find('.slick-counter').html(slick.currentSlide + 1 + ' / ' + slick.slideCount);
  });

  $('.welcome__slider').slick({
    draggable: false
  });





  $('.welcome__add-slides').slick({
    fade: true,
    speed: 0
  });



  $('.welcome__add-nav-item').on('mouseover', function(event) {
    var hoverSlide = event.target.dataset.addSlide;
    
    $('.welcome__add-slides').slick("slickGoTo", hoverSlide);

  });



  //team

  $(".welcome__team-list").on("init", function(event, slick, currentSlide) {
    $(this).append(
      '<div class="slick-counter">'+ '<span>' + 1 + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow) +'</div>'
    );
  });

  $(".welcome__team-list").on("afterChange", function(event, slick, currentSlide) {
    $(this).find('.slick-counter').html('<span>' + ( ( currentSlide / slick.options.slidesToShow ) + 1 ) + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow));
  });



  $('.welcome__team-list').slick({
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
    ]
  });



  //logo

  $(".welcome__logos").on("init", function(event, slick, currentSlide) {
    $(this).append(
      '<div class="slick-counter">'+ '<span>' + 1 + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow) +'</div>'
    );
  });

  $(".welcome__logos").on("afterChange", function(event, slick, currentSlide) {
    $(this).find('.slick-counter').html('<span>' + ( ( currentSlide / slick.options.slidesToShow ) + 1 ) + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow));
  });



  $('.welcome__logos').slick({
    draggable: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    infinite: false,
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
    ]
  });




  //news

  $(".welcome__articles").on("init", function(event, slick, currentSlide) {
    $(this).append(
      '<div class="slick-counter">'+ '<span>' + 1 + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow) +'</div>'
    );
  });

  $(".welcome__articles").on("afterChange", function(event, slick, currentSlide) {
    $(this).find('.slick-counter').html('<span>' + ( ( currentSlide / slick.options.slidesToShow ) + 1 ) + '</span> / ' + Math.ceil(slick.slideCount / slick.options.slidesToShow));
  });



  $('.welcome__articles').slick({
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ],
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });





  $('.welcome__contact-form-select').niceSelect();



  $("#header-call").click(function() {
    $(".popup__call").addClass("popup__call--visible");
  });

  $(".popup__call-close").click(function() {
    $(".popup__call").removeClass("popup__call--visible");
  });


  $("#menu").click(function() {
    $(".menu__popup").toggleClass("menu__popup--visible");
  });

});