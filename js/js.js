var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true
});

var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal');





var openModal = () => {
	'use strict';
	modal.classList.toggle('modal--active');
	document.querySelector('.hamburger').classList.toggle('hamburger--active');
	document.querySelector('body').classList.toggle('body--noscroll');
	document.querySelector('main').classList.toggle('modal-blur');
	document.querySelector('footer').classList.toggle('modal-blur');
	document.querySelector('.header__info').classList.toggle('modal-blur');
	document.querySelector('.menu-btn__text').classList.toggle('menu-btn__text--active');
}








var changeInputLabel = (event) => {
	'use strict';
	let target = event.target;

	if (target.classList.contains('form-style__input')) {

		if (target.value === '') {
			target.previousElementSibling.classList.toggle('form-style__label--active');
		}
	}
}



var showSharesBtn1 = () => {
	'use strict';
	document.querySelector('.shares__link--1').classList.toggle('shares__link--active');
}

var showSharesBtn2 = () => {
	'use strict';
	document.querySelector('.shares__link--2').classList.toggle('shares__link--active');
}

var showSharesBtn3 = () => {
	'use strict';
	document.querySelector('.shares__link--3').classList.toggle('shares__link--active');
}

var showSharesBtn4 = () => {
	'use strict';
	document.querySelector('.shares__link--4').classList.toggle('shares__link--active');
}





menuBtn.addEventListener('click', openModal);
document.querySelector('.form-style__inner').addEventListener('focusin', changeInputLabel);
document.querySelector('.form-style__inner').addEventListener('focusout', changeInputLabel);
document.querySelector('.shares__bg--1').addEventListener('mouseover', showSharesBtn1);
document.querySelector('.shares__bg--1').addEventListener('mouseout', showSharesBtn1);
document.querySelector('.shares__bg--2').addEventListener('mouseover', showSharesBtn2);
document.querySelector('.shares__bg--2').addEventListener('mouseout', showSharesBtn2);
document.querySelector('.shares__bg--3').addEventListener('mouseover', showSharesBtn3);
document.querySelector('.shares__bg--3').addEventListener('mouseout', showSharesBtn3);
document.querySelector('.shares__bg--4').addEventListener('mouseover', showSharesBtn4);
document.querySelector('.shares__bg--4').addEventListener('mouseout', showSharesBtn4);