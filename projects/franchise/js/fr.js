$('*[data-popup="feedback"]').each(function(index) {
  $(this).click(function() {
    $(".popup-feedback").addClass("popup-feedback--visible");
  });
});

$('*[data-popup="feedback-close"]').each(function(index) {
  $(this).click(function() {
    $(".popup-feedback").removeClass("popup-feedback--visible");
  });
});

$('.popup-feedback > form').click(function(e){
   e.stopPropagation();
}); 




$('#calc2_btn').click(function() {
  $(".calc2").addClass("calc2--visible");
  $(".franchise-info__cards").addClass("franchise-info__cards--hidden");
});

$('#calc2_btn').hover(function() {
  $(".calc2").toggleClass("calc2--preview");
});

$('.calc2__close').click(function() {
  $(".calc2").removeClass("calc2--visible");
  $(".franchise-info__cards").removeClass("franchise-info__cards--hidden");
});

$('#calc2_close').click(function() {
  $(".calc2").removeClass("calc2--visible");
  $(".franchise-info__cards").removeClass("franchise-info__cards--hidden");
});







var currentRate = 150000;
var itemPrice = 100;
var daySales = 100;
var adv = 5000;
var months = 12;
var ec = 7;
var advPrice = 60000;
var markup = 1.2;
var itemsCount = 100;




document.getElementById('itemPrice').addEventListener('input', function(event) {

  itemPrice = event.target.value;

  document.getElementById('buyPrice').innerHTML = (markup * itemPrice).toFixed();

  document.getElementById('soldPrice').innerHTML = (markup * itemPrice * ec).toFixed();

  document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

  console.log(itemPrice);
  
});

document.getElementById('daySales').addEventListener('input', function(event) {

  daySales = event.target.value;

  document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

  console.log(daySales);
  
});











document.getElementById('start').addEventListener('click', function(event) {


  $('.calc2__select-circle').each(function(index) {
    $(this).removeClass('calc2__select-circle--active');
  });

  event.target.children[2].classList.add('calc2__select-circle--active');

  currentRate = 50000;

  markup = 1.4;

  document.getElementById('frPrice').innerHTML = currentRate.toFixed();

  document.getElementById('buyPrice').innerHTML = (markup * itemPrice).toFixed();

  document.getElementById('soldPrice').innerHTML = (markup * itemPrice * ec).toFixed();

  document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

  console.log(currentRate);
  console.log(markup);
  


});

document.getElementById('business').addEventListener('click', function(event) {


  $('.calc2__select-circle').each(function(index) {
    $(this).removeClass('calc2__select-circle--active');
  });

  event.target.children[2].classList.add('calc2__select-circle--active');

  currentRate = 80000;

  markup = 1.3;

  document.getElementById('frPrice').innerHTML = currentRate.toFixed();

  document.getElementById('buyPrice').innerHTML = (markup * itemPrice).toFixed();

  document.getElementById('soldPrice').innerHTML = (markup * itemPrice * ec).toFixed();

  document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

  console.log(currentRate);
  console.log(markup);
  


});

document.getElementById('pro').addEventListener('click', function(event) {


  $('.calc2__select-circle').each(function(index) {
    $(this).removeClass('calc2__select-circle--active');
  });

  event.target.children[2].classList.add('calc2__select-circle--active');

  currentRate = 150000;

  markup = 1.2;

  document.getElementById('frPrice').innerHTML = currentRate.toFixed();

  document.getElementById('buyPrice').innerHTML = (markup * itemPrice).toFixed();

  document.getElementById('soldPrice').innerHTML = (markup * itemPrice * ec).toFixed();

  document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

  console.log(currentRate);
  console.log(markup);
  


});







function refreshAdvPrice() {
  document.getElementById('advPrice').innerHTML = (months * adv).toFixed();
}



$('#adv').rangeslider({

  polyfill: false,

  onSlide: function(position, value) {
    document.querySelector('.calc2__bauble--adv').style.left = position + 'px';

    document.querySelector('.calc2__bauble--adv>span').innerHTML = value;

    adv = value;

    refreshAdvPrice();

    document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

    console.log(adv);

  }

});

$('#months').rangeslider({

  polyfill: false,

  onSlide: function(position, value) {
    document.querySelector('.calc2__bauble--months').style.left = position + 'px';

    document.querySelector('.calc2__bauble--months>span').innerHTML = value;

    months = value;

    refreshAdvPrice();

    document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

    document.getElementById('monthsPrice').innerHTML = value.toFixed();

    console.log(months);

  }

});

$('#ec').rangeslider({

  polyfill: false,

  onSlide: function(position, value) {

    document.querySelector('.calc2__bauble--ec').style.left = position + 'px';

    document.querySelector('.calc2__bauble--ec>span').innerHTML = value;

    ec = value;

    document.getElementById('soldPrice').innerHTML = (markup * itemPrice * ec).toFixed();

    document.getElementById('cleanPrice').innerHTML = (months * (((itemPrice * markup * ec) - (itemPrice * markup)) * daySales) - (currentRate + (adv * months))).toFixed();

    console.log(ec);


  }

});