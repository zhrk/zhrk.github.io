var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true
});

var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger');

document.querySelector('.advantages__show-more').addEventListener('click', function (event) {
	
	var showAdv = document.querySelectorAll('.advantages__mission>p'); 


	for (var i = 0; i < showAdv.length; i++) {
		showAdv[i].classList.remove('advantages--hidden');
	}

	event.target.style.display = 'none';

})

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


const pageS = window.pageYOffset;


function openModal() {
	'use strict';
	if (document.querySelector('.modal').classList.contains('modal--active-consl')) {
		document.querySelector('.modal').classList.remove('modal--active-consl');
		changeMenuBtn();
		blurBG();
		body.classList.toggle('body--noscroll');
	} else {
		var pageP = pageS;
		console.log(pageP);
		modal.classList.toggle('modal--active');
		changeMenuBtn();
		blurBG();
		body.classList.toggle('body--noscroll');
		/*console.log(topP);
		window.scrollTo(0, topP);*/
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













var labels = document.querySelectorAll('.form-style__inner');

function changeInputLabel (event) {
	'use strict';
	var target = event.target;

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




reviewsImg = document.querySelectorAll('.reviews__block-img>img');


function zoomImg(event) {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.add('catalogI__img-subj-popup--active');
	document.querySelector('.catalogI__img-subj-popup').innerHTML = event.target.parentNode.innerHTML;
}

for (var i = 0; i < reviewsImg.length; i++) {
	reviewsImg[i].addEventListener('click', zoomImg);
}

document.querySelector('.catalogI__img-subj-popup').addEventListener('click', function() {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.remove('catalogI__img-subj-popup--active');
})