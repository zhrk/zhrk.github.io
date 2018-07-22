var isOpen = false;

function showMoreText() {
	if (isOpen === false) {
		isOpen = true;
		document.querySelector('.add__info-show').classList.add('add__info-show--active');
		document.querySelector('.add__info-show').innerHTML = 'Скрыть описание услуги';
		document.querySelector('.add__info-text').classList.add('add__info-text--active');
	} else {
		isOpen = false;
		document.querySelector('.add__info-show').classList.remove('add__info-show--active');
		document.querySelector('.add__info-show').innerHTML = 'Показать описание услуги';
		document.querySelector('.add__info-text').classList.remove('add__info-text--active');
	}

}


$('#social').niceSelect();
$('#service').niceSelect();





document.querySelector('.add__info-show').addEventListener('click', showMoreText);