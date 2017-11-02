var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger'),
		backBtn = document.querySelector('.btn__back');

var labels = document.querySelectorAll('.form-style__inner');

function changeMenuBtn() {
	'use strict';
	hamburger.classList.toggle('hamburger--active');
	document.querySelector('.menu-btn>span').classList.toggle('menu-btn__text--active');
}

function blurBG() {
	'use strict';
	main.classList.toggle('modal-blur');
	footer.classList.toggle('modal-blur');
	document.querySelector('.header__info').classList.toggle('modal-blur');
	document.querySelector('.header__logo--desktop').classList.toggle('modal-blur');
	document.querySelector('.header__logo--mobile').classList.toggle('modal-blur');
	document.querySelector('.header__call').classList.toggle('modal-blur');
}

function openModal() {
	'use strict';
	if (document.querySelector('.modal').classList.contains('modal--active-consl')) {
		document.querySelector('.modal').classList.remove('modal--active-consl');
		changeMenuBtn();
		blurBG();
		body.classList.toggle('body--noscroll');
	} else {
		modal.classList.toggle('modal--active');
		changeMenuBtn();
		blurBG();
		body.classList.toggle('body--noscroll');
	}
	
}

function openModalConsl() {
	'use strict';
	modal.classList.toggle('modal--active-consl');
	changeMenuBtn();
	blurBG();
	body.classList.toggle('body--noscroll');
}


document.querySelector('.menu-btn').addEventListener('click', openModal);
document.querySelector('.header__consultation').addEventListener('click', openModalConsl);
document.querySelector('.catalogI__consl-btn').addEventListener('click', openModalConsl);

function changeInputLabel(event) {
	'use strict';
	let target = event.target;

	if (target.classList.contains('form-style__input')) {

		if (target.value === '') {
			target.previousElementSibling.classList.toggle('form-style__label--active');
		}
	}
}

for (var i = 0; i < labels.length; i++) {
	labels[i].addEventListener('focusin', changeInputLabel);
	labels[i].addEventListener('focusout', changeInputLabel);
}


var tableLists = document.querySelectorAll('.catalogI__table-list');





function changeTitle(event) {
	'use strict';
	for (var i = 0; i < tableTitle.length; i++) {
		tableTitle[i].classList.remove('catalogI__table-title--active');
	}
	event.target.classList.add('catalogI__table-title--active');

	for (var i = 0; i < tableLists.length; i++) {
		tableLists[i].classList.remove('catalogI__table-list--active');
	}

	switch(event.target.classList[1]) {
		case 'catalogI__table-headline-1':
		document.querySelector('.catalogI__table-list-1').classList.add('catalogI__table-list--active');
		break;

		case 'catalogI__table-headline-2':
		document.querySelector('.catalogI__table-list-2').classList.add('catalogI__table-list--active');
		break;

		case 'catalogI__table-headline-3':
		document.querySelector('.catalogI__table-list-3').classList.add('catalogI__table-list--active');
		break;
	}
}



var tableTitle = document.querySelectorAll('.catalogI__table-headline');

for (var i = 0; i < tableTitle.length; i++) {
	tableTitle[i].addEventListener('click', changeTitle);
}

function openMobileCat(event) {
	'use strict';
	event.target.nextElementSibling.classList.toggle('open-mobile-cat');
	event.target.classList.toggle('catalogI__img-title--active');
}

(function () {
    if (window.innerWidth < 1280) {

	  	for (var i = 0; i < tableTitle.length; i++) {
				tableTitle[i].removeEventListener('click', changeTitle);
			}

			var mobileTitleCat = document.querySelectorAll('.catalogI__table-headline');

			for (var i = 0; i < mobileTitleCat.length; i++) {
				mobileTitleCat[i].addEventListener('click', openMobileCat);
			}


			document.querySelector('.catalogI__table-headline-1').classList.remove('catalogI__table-title--active');
			document.querySelector('.catalogI__table-title').insertBefore(document.querySelector('.catalogI__table-list-1'), document.querySelector('.catalogI__table-headline-2'));
			document.querySelector('.catalogI__table-title').insertBefore(document.querySelector('.catalogI__table-list-2'), document.querySelector('.catalogI__table-headline-3'));
			document.querySelector('.catalogI__table-title').appendChild(document.querySelector('.catalogI__table-list-3'));

	}
}());

document.querySelector('.catalogI__showmore').addEventListener('click', function(event) {
	event.target.previousElementSibling.style.height = 'auto';
	event.target.style.display = 'none';
})



function openCatalog(event){
	'use strict';
	document.querySelector('.catalogI-big').classList.toggle('catalogI-big--active');
	event.target.classList.toggle('catalogI-big__inner-title--active');
}



document.querySelector('.catalogS__title-btn').addEventListener('click', openCatalog);