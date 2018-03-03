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








for (var i = 0; i < showBtns.length; i++) {
	showBtns[i].addEventListener('click', showMoreText);
}