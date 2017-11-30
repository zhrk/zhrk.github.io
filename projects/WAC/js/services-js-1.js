$(function(){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 50}, 300);
		return false; 
	}); 
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

var offsetY = window.pageYOffset;

function openModal() {
	'use strict';
	offsetY = window.pageYOffset;

	if (event.target.classList.contains('header__consultation')) {
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
document.querySelector('.header__consultation').addEventListener('click', openModal);



var labels = document.querySelectorAll('.form-style__inner');

function changeInputLabel(event) {
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

function navFixed() {
	'use strict';
	var
		navOffsetTop = - + body.getBoundingClientRect().top,
		wHeight = $( body ).height() - 1110;
	
	if (navOffsetTop > 230) {
		document.querySelector('.ourservices__nav').classList.add('ourservices__nav--fixed');
		if (navOffsetTop >= wHeight) {
			document.querySelector('.ourservices__nav').classList.remove('ourservices__nav--fixed');
			document.querySelector('.ourservices__nav').style.position = 'absolute';
			document.querySelector('.ourservices__nav').style.top = wHeight - 210 + 'px';
		} else {
			document.querySelector('.ourservices__nav').removeAttribute('style');
			document.querySelector('.ourservices__nav').classList.add('ourservices__nav--fixed');
		}
	} else {
		document.querySelector('.ourservices__nav').classList.remove('ourservices__nav--fixed');
	}
}



window.addEventListener('scroll', navFixed);


(function () {

		 if (window.innerWidth < 1280) {

		 	window.removeEventListener('scroll', navFixed);


			document.querySelector('.ourservices__title-list-1').insertBefore(document.querySelector('.ourservices__block-1'), document.querySelector('.ourservices__nav-a-2'));
			document.querySelector('.ourservices__title-list-1').insertBefore(document.querySelector('.ourservices__block-2'), document.querySelector('.ourservices__nav-a-3'));
			document.querySelector('.ourservices__title-list-1').appendChild(document.querySelector('.ourservices__block-3'));

			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-list-2'));
			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-1'));
			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-2'));
			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-3'));
			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-4'));
			document.querySelector('.ourservices__nav').removeChild(document.querySelector('.ourservices__title-5'));
			document.querySelector('main').removeChild(document.querySelector('.ourservices__headline'));

	    document.querySelector('.ourservices__title-list').classList.remove('opensnav');

	    var navLinks = document.querySelectorAll('.ourservices__nav-a');


	    function openNav() {
	    	'use strict';
	    	event.target.nextElementSibling.classList.toggle('opensnav');
	    }


	    for (var i = 0; i < navLinks.length; i++) {
	    	navLinks[i].addEventListener('click', openNav);
	    }

  }
}());