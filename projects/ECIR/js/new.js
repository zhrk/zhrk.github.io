$.ionTabs("#tabs_1", {
  type: "none"
});

$.ionTabs("#tabs_2", {
  type: "none"
});

$('#theme').niceSelect();
$('#lang').niceSelect();
$('#country').niceSelect();
$('#city').niceSelect();




$(".new__live-more").click(function() {
  $(".new__live-dop").toggleClass("new__live-dop--visible");
});

$(".ionTabs__tab--bots").click(function() {
  $(".new__live").removeClass("new__live--visible");
  $(".add__list").addClass("add__list--visible");
});

$(".ionTabs__tab--peoples").click(function() {
  $(".add__list").removeClass("add__list--visible");
  $(".new__live").addClass("new__live--visible");
});




$(".new__live-top-btn--rules").click(function() {
  $(".new__live-details").removeClass("new__live-details--visible");
  $(".new__live-rules").toggleClass("new__live-rules--visible");
});

$(".new__live-top-btn--details").click(function() {
  $(".new__live-rules").removeClass("new__live-rules--visible");
  $(".new__live-details").toggleClass("new__live-details--visible");
});