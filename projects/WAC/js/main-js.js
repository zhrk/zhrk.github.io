var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true
});

var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger');


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

function changeInputLabel(event) {
	'use strict';
	var target = event.target;

	if (target.classList.contains('form-style__input')) {

		if (target.value === '') {
			target.previousElementSibling.classList.toggle('form-style__label--active');
		}
	}
}





var labels = document.querySelectorAll('.form-style__inner');


for (var i = 0; i < labels.length; i++) {
	labels[i].addEventListener('focusin', changeInputLabel);
	labels[i].addEventListener('focusout', changeInputLabel);
}


header = document.querySelector('header');



function fixedHeaderBg() {
	'use strict';
	var
		headerPosition = document.querySelector('body').getBoundingClientRect().top;
	
	if (headerPosition < 0) {
		header.classList.remove('header--main-page');
	} else {
		header.classList.add('header--main-page');
	}
}

window.addEventListener('scroll', fixedHeaderBg);

document.querySelector('main').style.padding = '0';













var offsetY = window.pageYOffset;

function openModal() {
	'use strict';
	offsetY = window.pageYOffset;

	if (event.target.classList.contains('btn--welcome') || event.target.classList.contains('header__consultation')) {
		modal.classList.add('modal--active-consl');
	} else {
		modal.classList.add('modal--active');
	}

	body.classList.add('body--noscroll');
	changeMenuBtn();
	blurBG();
	document.querySelector('.menu-btn').removeEventListener('click', openModal);
	document.querySelector('.menu-btn').addEventListener('click', closeModal);
}

function closeModal() {
	'use strict';
	body.classList.remove('body--noscroll');
	modal.classList.remove('modal--active-consl');
	modal.classList.remove('modal--active');
	changeMenuBtn();
	blurBG();
	document.querySelector('.menu-btn').removeEventListener('click', closeModal);
	document.querySelector('.menu-btn').addEventListener('click', openModal);
	window.scrollTo(0, offsetY);
}

document.querySelector('.menu-btn').addEventListener('click', openModal);
document.querySelector('.btn--welcome').addEventListener('click', openModal);
document.querySelector('.header__consultation').addEventListener('click', openModal);