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


(function () {
  if (window.innerWidth < 1280) {

  	var imgDisable =  document.querySelectorAll('.catalogP__img');

  	for (var i = 0; i < imgDisable.length; i++) {
  		imgDisable[i].removeAttribute('href');
  	}

	}
}());



var back = () => {
	'use strict';
	document.querySelector('body').removeChild(document.body.children[3]);
	document.querySelector('main').style.height = 'auto';
	document.querySelector('main').style.overflow = 'auto';
	backBtn.style.display = 'none';
}

var selectCategory = () => {
	'use strict';
	var target = event.target.parentNode,
			clonedDiv = target.cloneNode(true);


	clonedDiv.classList.add('catalogP__block--selected');
	document.querySelector('main').style.height = '0';
	document.querySelector('main').style.overflow = 'hidden';
	backBtn.style.display = 'flex';
	document.querySelector('body').insertBefore(clonedDiv, document.querySelector('footer'));
}


backBtn.addEventListener('click', back);
document.querySelector('.catalogP').addEventListener('click', selectCategory);