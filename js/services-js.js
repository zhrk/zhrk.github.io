$(function(){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 300);
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

function openModal() {
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


var titleServices = document.querySelectorAll('.ourservices__title'),
		blocksServices = document.querySelectorAll('.ourservices__block');

function selectService(event) {
	'use strict';

	for (var i = 0; i < blocksServices.length; i++) {
		blocksServices[i].style.display = 'none';
	}

	var titleList = document.querySelectorAll('.ourservices__title-list');

 	for (var i = 0; i < titleList.length; i++) {
 		titleList[i].classList.remove('opensnav')
	}

 	switch (event.target.classList[1]) {

 		case 'ourservices__title-1':
 			document.querySelector('.ourservices__block-1').style.display = 'flex';
 			document.querySelector('.ourservices__block-2').style.display = 'flex';
 			document.querySelector('.ourservices__block-3').style.display = 'flex';
 			break;

 		case 'ourservices__title-2':
 			document.querySelector('.ourservices__block-4').style.display = 'flex';
 			document.querySelector('.ourservices__block-5').style.display = 'flex';
 			document.querySelector('.ourservices__block-6').style.display = 'flex';
 			break;

 		case 'ourservices__title-3':
 			document.querySelector('.ourservices__block-7').style.display = 'flex';
 			break;

 		case 'ourservices__title-4':
 			document.querySelector('.ourservices__block-8').style.display = 'flex';
 			break;

 		case 'ourservices__title-5':
 			document.querySelector('.ourservices__block-9').style.display = 'flex';
 			break;

 		case 'ourservices__welcome-btn-1':
 			document.querySelector('.ourservices__welcome').style.display = 'none';
 			document.querySelector('.ourservices__nav').style.display = 'flex';
 			document.querySelector('.ourservices__blocks-wrapper').style.display = 'block';
 			document.querySelector('.ourservices__title-list-1').classList.add('opensnav');

 			document.querySelector('.ourservices__block-1').style.display = 'flex';
 			document.querySelector('.ourservices__block-2').style.display = 'flex';
 			document.querySelector('.ourservices__block-3').style.display = 'flex';
 			break;

 		case 'ourservices__welcome-btn-2':
 			document.querySelector('.ourservices__welcome').style.display = 'none';
 			document.querySelector('.ourservices__nav').style.display = 'flex';
 			document.querySelector('.ourservices__blocks-wrapper').style.display = 'block';
 			document.querySelector('.ourservices__title-list-2').classList.add('opensnav');

 			document.querySelector('.ourservices__block-4').style.display = 'flex';
 			document.querySelector('.ourservices__block-5').style.display = 'flex';
 			document.querySelector('.ourservices__block-6').style.display = 'flex';
 			break;

 		case 'ourservices__welcome-btn-3':
 			document.querySelector('.ourservices__welcome').style.display = 'none';
 			document.querySelector('.ourservices__nav').style.display = 'flex';
 			document.querySelector('.ourservices__blocks-wrapper').style.display = 'block';

 			document.querySelector('.ourservices__block-7').style.display = 'flex';
 			break;

 		case 'ourservices__welcome-btn-4':
 			document.querySelector('.ourservices__welcome').style.display = 'none';
 			document.querySelector('.ourservices__nav').style.display = 'flex';
 			document.querySelector('.ourservices__blocks-wrapper').style.display = 'block';

 			document.querySelector('.ourservices__block-8').style.display = 'flex';
 			break;

 		case 'ourservices__welcome-btn-5':
 			document.querySelector('.ourservices__welcome').style.display = 'none';
 			document.querySelector('.ourservices__nav').style.display = 'flex';
 			document.querySelector('.ourservices__blocks-wrapper').style.display = 'block';

 			document.querySelector('.ourservices__block-9').style.display = 'flex';
 			break;

 	}

	event.target.nextElementSibling.classList.add('opensnav');

}

var welcomeBtns = document.querySelectorAll('.ourservices__welcome-btn');


for (var i = 0; i < titleServices.length; i++) {
	titleServices[i].addEventListener('click', selectService);
}

for (var i = 0; i < welcomeBtns.length; i++) {
	welcomeBtns[i].addEventListener('click', selectService);
}



function navFixed() {
	'use strict';
	var
		navOffsetTop = body.getBoundingClientRect().top;
	
	if (navOffsetTop < -330) {
		document.querySelector('.ourservices__nav').classList.add('ourservices__nav--fixed');	
	} else {
		document.querySelector('.ourservices__nav').classList.remove('ourservices__nav--fixed');
	}
}



window.addEventListener('scroll', navFixed);




(function () {
    if (window.innerWidth < 1280) {

    	window.removeEventListener('scroll', navFixed);

    	document.querySelector('.ourservices__welcome-btn-1').innerHTML = document.querySelector('.ourservices__title-1').innerHTML;
    	document.querySelector('.ourservices__welcome-btn-2').innerHTML = document.querySelector('.ourservices__title-2').innerHTML;
    	document.querySelector('.ourservices__welcome-btn-3').innerHTML = document.querySelector('.ourservices__title-3').innerHTML;
    	document.querySelector('.ourservices__welcome-btn-4').innerHTML = document.querySelector('.ourservices__title-4').innerHTML;
    	document.querySelector('.ourservices__welcome-btn-5').innerHTML = document.querySelector('.ourservices__title-5').innerHTML;

    	for (var i = 0; i < welcomeBtns.length; i++) {
				welcomeBtns[i].removeEventListener('click', selectService);
			}

			function mWelcome(event) {
				'use strict';
				event.target.classList.toggle('open-welcome-m');
				event.target.parentNode.style.margin = '0';
				document.querySelector('.ourservices-back').style.display = 'flex';
				document.querySelector('.ourservices__blocks-wrapper').style.display = 'flex';
				event.target.removeEventListener('click', mWelcome);
				window.scrollTo(0, 0);

				for (var i = 0; i < welcomeBtns.length; i++) {
					if (event.target.classList[1] !== welcomeBtns[i].classList[1]) {
						welcomeBtns[i].parentNode.style.display = 'none';
					}
				}

				document.querySelector('.ourservices__headline').style.display = 'none';

				document.querySelector('.ourservices__nav').style.display = 'flex';
				document.querySelector('.ourservices__form').style.display = 'flex';




				switch (event.target.classList[1]) {

					case 'ourservices__welcome-btn-1':
						document.querySelector('.ourservices__title-list-1').style.maxHeight = '100%';
						break;

					case 'ourservices__welcome-btn-2':
						document.querySelector('.ourservices__title-list-2').style.maxHeight = '100%';
						break;

					case 'ourservices__welcome-btn-3':
						document.querySelector('.ourservices__block-7').style.maxHeight = '100%';
						break;

					case 'ourservices__welcome-btn-4':
						document.querySelector('.ourservices__block-8').style.maxHeight = '100%';
						break;

					case 'ourservices__welcome-btn-5':
						document.querySelector('.ourservices__block-9').style.maxHeight = '100%';
						break;
					
				}

			}





			for (var i = 0; i < welcomeBtns.length; i++) {
				welcomeBtns[i].addEventListener('click', mWelcome);
			}






			function welcomeBack() {
			'use strict';
			document.querySelector('.ourservices-back').style.display = 'none';
			document.querySelector('.ourservices__headline').style.display = 'flex';
			document.querySelector('.ourservices__form').style.display = 'none';

			for (var i = 0; i < welcomeBtns.length; i++) {
				welcomeBtns[i].parentNode.style.display = 'flex';
			}

			for (var i = 0; i < welcomeBtns.length; i++) {
				welcomeBtns[i].classList.remove('open-welcome-m');
			}

			for (var i = 0; i < welcomeBtns.length; i++) {
					welcomeBtns[i].addEventListener('click', mWelcome);
				}

			for (var i = 0; i < welcomeBtns.length; i++) {
					welcomeBtns[i].parentNode.style.margin = '0 0 40px 0';
				}

			document.querySelector('.ourservices__title-list-1').style.maxHeight = '0';
			document.querySelector('.ourservices__title-list-2').style.maxHeight = '0';
			document.querySelector('.ourservices__block-7').style.maxHeight = '0';
			document.querySelector('.ourservices__block-8').style.maxHeight = '0';
			document.querySelector('.ourservices__block-9').style.maxHeight = '0';

			}



			document.querySelector('.ourservices-back').addEventListener('click', welcomeBack);


			document.querySelector('.ourservices__title-list-1').insertBefore(document.querySelector('.ourservices__block-1'), document.querySelector('.ourservices__nav-a-2'));
			document.querySelector('.ourservices__title-list-1').insertBefore(document.querySelector('.ourservices__block-2'), document.querySelector('.ourservices__nav-a-3'));
			document.querySelector('.ourservices__title-list-1').appendChild(document.querySelector('.ourservices__block-3'));
			document.querySelector('.ourservices__title-list-2').insertBefore(document.querySelector('.ourservices__block-4'), document.querySelector('.ourservices__nav-a-5'));
			document.querySelector('.ourservices__title-list-2').insertBefore(document.querySelector('.ourservices__block-5'), document.querySelector('.ourservices__nav-a-6'));
			document.querySelector('.ourservices__title-list-2').appendChild(document.querySelector('.ourservices__block-6'));
			document.querySelector('.ourservices__nav').insertBefore(document.querySelector('.ourservices__block-7'), document.querySelector('.ourservices__title-4'));
			document.querySelector('.ourservices__nav').insertBefore(document.querySelector('.ourservices__block-8'), document.querySelector('.ourservices__title-5'));
			document.querySelector('.ourservices__nav').appendChild(document.querySelector('.ourservices__block-9'));



			function openMobileNav(event) {
			'use strict';
				event.target.nextElementSibling.classList.toggle('open-mobile-nav');
				event.target.children[0].classList.toggle('mobile-nav--active');
			}


			var mobileNav = document.querySelectorAll('.ourservices__nav-a');


			for (var i = 0; i < mobileNav.length; i++) {
				mobileNav[i].addEventListener('click', openMobileNav);
				mobileNav[i].removeAttribute('href');
			}


	}
}());