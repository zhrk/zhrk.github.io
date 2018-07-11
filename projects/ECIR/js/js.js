/*$('a[href*="#"]')
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
});*/


//menu open on click
  $(".header__link").each(function(index) {

    

    $(this).click(function(event) {


      $(".header__link").each(function() {
        $(this).removeClass("header__link--visible");
        $(this).children().eq(2).removeClass("header__drop--visible");
      });



      $(this).children().eq(2).addClass("header__drop--visible");
      $(this).addClass("header__link--visible");

    });
  });

  $(document).click(function() {
    $(".header__link").each(function() {
      $(this).removeClass("header__link--visible");
      $(this).children().eq(2).removeClass("header__drop--visible");
    });
  });

  $('.header__drop').click(function(e){
     e.stopPropagation();
  });

  $('.header__link').click(function(e){
     e.stopPropagation();
  });