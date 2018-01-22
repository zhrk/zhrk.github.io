$(document).ready(function() {
  $('.feedback__select').niceSelect();
});

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(element, maskOptions);