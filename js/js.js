var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true
});

var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal');





var openModal = () => {
	'use strict';
	modal.classList.toggle('modal--active');
	document.querySelector('body').classList.toggle('body--noscroll');
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









menuBtn.addEventListener('click', openModal);
document.querySelector('.form-style__inner').addEventListener('focusin', changeInputLabel);
document.querySelector('.form-style__inner').addEventListener('focusout', changeInputLabel);