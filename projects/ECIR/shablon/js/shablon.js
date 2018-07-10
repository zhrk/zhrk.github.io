$(".rws__card-rate-bar").each(function(index) {
  $(this).barrating({
    theme: 'fontawesome-stars'
  });
});


document.querySelector('.shablon__nav-mobile > select').addEventListener('change', function() {

  var cardList = document.querySelectorAll('.faq__list--shablon > .shablon__card-wrapper');

  for (var i = 0; i < cardList.length; i++) {
    cardList[i].classList.remove('active');
  }


  document.getElementById(this.value).classList.add('active');
})
