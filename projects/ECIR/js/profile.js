$(document).ready(function() {
  $('#myTable').DataTable({
    'searching': false,
    'filtering': false,
    'lengthChange': false,
    'info': false,
    'pageLength': 7,
    'ordering': false
  });
});

$(".profile-info--change").click(function() {
  $(".profile-change").addClass("profile-change--visible");
});

$(".profile-change").click(function() {
  $(".profile-change").removeClass("profile-change--visible");
});

$(".profile-change--close").click(function() {
  $(".profile-change").removeClass("profile-change--visible");
});

$('.profile-change__form').click(function(e){
   e.stopPropagation();
});



$(".profile-info--delete").click(function() {
  $(".profile-delete").addClass("profile-delete--visible");
});

$(".profile-delete").click(function() {
  $(".profile-delete").removeClass("profile-delete--visible");
});

$(".profile-delete--close").click(function() {
  $(".profile-delete").removeClass("profile-delete--visible");
});

$(".profile-delete--no").click(function() {
  $(".profile-delete").removeClass("profile-delete--visible");
});

$('.profile-delete__inner').click(function(e){
   e.stopPropagation();
});