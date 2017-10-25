var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true
});



document.querySelector('.advantages__show-more').addEventListener('click', function (event) {
	
	var showAdv = document.querySelectorAll('.advantages__mission>p'); 


	for (var i = 0; i < showAdv.length; i++) {
		showAdv[i].classList.remove('advantages--hidden');
	}

	event.target.style.display = 'none';

})













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