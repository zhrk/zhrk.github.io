$(document).ready(function() {
  
  $("#lightgallery").lightGallery();
  $('.nice-select-input').niceSelect();

  var canvas = document.querySelector("canvas");
  var signaturePad = new SignaturePad(canvas);

  var signature = null;

  $('#signature__field-canvas').on('mouseup', function() {
    signature = signaturePad.toDataURL();
    document.getElementById('signature__field-input').value = signature;
  });

});