function openVacancyInfo(event) {
	
	if (event.target.previousElementSibling.classList.contains('vacancy__info--open')) {
		event.target.previousElementSibling.classList.remove('vacancy__info--open');
		event.target.innerHTML = 'Показать информацию';
	} else {
		event.target.previousElementSibling.classList.add('vacancy__info--open');
		event.target.innerHTML = 'Свернуть информацию';
	}

}


var vacancyShowBtns = document.querySelectorAll('.vacancy__show');

for (var i = 0; i < vacancyShowBtns.length; i++) {
	vacancyShowBtns[i].addEventListener('click', openVacancyInfo);
}