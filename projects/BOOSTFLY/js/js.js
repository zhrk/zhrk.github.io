$(".header__menu").on('click', function(){
  $(".header__nav-container").addClass("header__nav-container--active");
})

$(".header__close").on('click', function(){
  $(".header__nav-container").removeClass("header__nav-container--active");
})