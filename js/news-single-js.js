var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger');

var changeMenuBtn = () => {
	'use strict';
	hamburger.classList.toggle('hamburger--active');
	document.querySelector('.menu-btn>span').classList.toggle('menu-btn__text--active');
}

var blurBG = () => {
	'use strict';
	main.classList.toggle('modal-blur');
	footer.classList.toggle('modal-blur');
	document.querySelector('.header__info').classList.toggle('modal-blur');
	document.querySelector('.header__logo--desktop').classList.toggle('modal-blur');
	document.querySelector('.header__logo--mobile').classList.toggle('modal-blur');
	document.querySelector('.header__call').classList.toggle('modal-blur');
}

var openModal = () => {
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

var openModalConsl = () => {
	'use strict';
	modal.classList.toggle('modal--active-consl');
	changeMenuBtn();
	blurBG();
	body.classList.toggle('body--noscroll');
}


document.querySelector('.menu-btn').addEventListener('click', openModal);
document.querySelector('.header__consultation').addEventListener('click', openModalConsl);



var labels = document.querySelectorAll('.form-style__inner');

var changeInputLabel = (event) => {
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