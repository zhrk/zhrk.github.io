$(document).ready(function() {

  $('#fullpage').fullpage({
    navigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.welcome__section',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
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

});