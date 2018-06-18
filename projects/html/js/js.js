$(function() {
  $('#rate').barrating({
    theme: 'css-stars'
  });
});

$(".rws__card-reply-btn").each(function(index) {
  $(this).click(function() {
    $(this).toggleClass("rws__card-reply-btn--active");
    $(this).parent().next().toggleClass("rws__card-form--visible")
  });
});

$(".rws__card-rate-bar").each(function(index) {
  $(this).barrating({
    theme: 'fontawesome-stars'
  });
});