$('#category').niceSelect();
$('#sort').niceSelect();

$(".catalog__title-filter").click(function(event) {
  event.target.classList.toggle('active');
  $(".catalog__sort-filter").toggleClass("catalog__sort-filter--visible");
  $(".catalog__sort-sort").toggleClass("catalog__sort-sort--visible");
});

$(".catalog__title-search").click(function(event) {
  event.target.classList.toggle('active');
  $(".catalog__sort-search").toggleClass("catalog__sort-search--visible");
});