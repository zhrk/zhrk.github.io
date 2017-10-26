var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal');

var openModal = () => {
	'use strict';
	modal.classList.toggle('modal--active');
	document.querySelector('.hamburger').classList.toggle('hamburger--active');
	document.querySelector('.menu-btn__text').classList.toggle('menu-btn__text--active');
	document.querySelector('body').classList.toggle('body--noscroll');
	document.querySelector('main').classList.toggle('modal-blur');
	document.querySelector('footer').classList.toggle('modal-blur');
	document.querySelector('.header__info').classList.toggle('modal-blur');
	document.querySelector('.header__logo--desktop').classList.toggle('modal-blur');
	document.querySelector('.header__logo--mobile').classList.toggle('modal-blur');
	document.querySelector('.header__call').classList.toggle('modal-blur');
}



menuBtn.addEventListener('click', openModal);