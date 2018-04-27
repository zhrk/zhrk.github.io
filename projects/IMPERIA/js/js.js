$('.welcome__slides').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false
});

$('.about__slides').slick({
	autoplay: true,
	autoplaySpeed: 3000
});

$('.numbers__modal-slides').slick();

$('.datepicker-here1').datepicker({
	autoClose: true
});

$('.datepicker-here2').datepicker({
	autoClose: true
})

$(".numbers__item").each(function() {
	$(this).bind('click', function() {
		$(".numbers__modal").addClass("numbers__modal--active");
		$("body").addClass("body--noscroll");
	});
});

$(".numbers__modal").bind('click', function() {
	$(".numbers__modal").removeClass("numbers__modal--active");
	$("body").removeClass("body--noscroll");
});

$(".numbers__modal-container").click(function(event){
	event.stopPropagation();
});

$(".numbers__modal-close").each(function() {
	$(this).bind('click', function() {
		$(".numbers__modal").removeClass("numbers__modal--active");
		$("body").removeClass("body--noscroll");
	});
});

$('.galery__images').lightGallery();

$(".header__mobile-btn").bind('click', function() {
	$(".header__menu").addClass("header__menu--active");
	$("body").addClass("body--noscroll");
});

$(".header__menu-close").bind('click', function() {
	$(".header__menu").removeClass("header__menu--active");
	$("body").removeClass("body--noscroll");
});