$(document).ready(function() {

  $(".sidebar__menu").click(function() {
    $(".sidebar__nav").addClass("sidebar__nav--visible");
  });

  $(".sidebar__nav-close").click(function() {
    $(".sidebar__nav").removeClass("sidebar__nav--visible");
  });

  function mainMobile() {
    if (window.innerWidth < 1280) {

      $('.about__list').slick({
        'arrows': false,
        'dots': true
      });

    }
  }

  mainMobile();

  $(window).resize(function() {
    mainMobile();
  });

  

  

});




