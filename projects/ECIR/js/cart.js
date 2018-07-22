var showBtns = document.querySelectorAll('.add__info-show');

function showMoreText(event) {
	event.target.classList.toggle('add__info-show--active');
	event.target.parentNode.parentNode.nextElementSibling.classList.toggle('cart__item-info-add--active');

	if (event.target.innerHTML === 'Показать детали') {
		event.target.innerHTML = 'Скрыть детали'
	} else {
		event.target.innerHTML = 'Показать детали'
	}

}



$('.cart-m__list-item-info-change').each(function(index) {
  $(this).click(function() {
    $(this).parent().parent().addClass("cart-m__list-item-info-wrap--visible");
    $(this).parent().parent().parent().parent().next().addClass("cart-m__list-item-top-bottom--visible");
  });
});

$('.btn--cart-close').each(function(index) {
  $(this).click(function() {
    $(this).parent().parent().parent().children().children().children()[2].classList.remove("cart-m__list-item-info-wrap--visible");
    $(this).parent().parent().removeClass("cart-m__list-item-top-bottom--visible");
  });
});








for (var i = 0; i < showBtns.length; i++) {
	showBtns[i].addEventListener('click', showMoreText);
}