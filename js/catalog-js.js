var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		backBtn = document.querySelector('.btn__back');


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




var back = () => {
	'use strict';
	document.querySelector('body').removeChild(document.body.children[3]);
	document.querySelector('main').style.height = 'auto';
	document.querySelector('main').style.overflow = 'auto';
	backBtn.style.display = 'none';
}


backBtn.addEventListener('click', back);



document.querySelector('.catalogP__img--1').addEventListener('click', function (event) {
	'use strict';
	var target = event.target,
			clonedDiv = target.cloneNode(true);



	document.querySelector('main').style.height = '0';
	document.querySelector('main').style.overflow = 'hidden';
	backBtn.style.display = 'flex';
	document.querySelector('body').insertBefore(clonedDiv, document.querySelector('footer'));


	console.log(target.parentNode);

});

document.querySelector('.catalogP__img--6').addEventListener('click', function (event) {
	'use strict';
	var target = event.target,
			clonedDiv = target.cloneNode(true);



	document.querySelector('main').style.height = '0';
	document.querySelector('main').style.overflow = 'hidden';
	backBtn.style.display = 'flex';
	document.querySelector('body').insertBefore(clonedDiv, document.querySelector('footer'));


	console.log(target.parentNode);

});