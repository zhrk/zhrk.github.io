var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger'),
		backBtn = document.querySelector('.btn__back');

var labels = document.querySelectorAll('.form-style__inner');

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

	if (event.target.classList.contains('header__consultation') || event.target.classList.contains('catalogI__consl-btn')) {
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
document.querySelector('.catalogI__consl-btn').addEventListener('click', openModal);

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


var tableLists = document.querySelectorAll('.catalogI__table-list');





function changeTitle(event) {
	'use strict';
	for (var i = 0; i < tableTitle.length; i++) {
		tableTitle[i].classList.remove('catalogI__table-title--active');
	}
	event.target.classList.add('catalogI__table-title--active');

	for (var i = 0; i < tableLists.length; i++) {
		tableLists[i].classList.remove('catalogI__table-list--active');
	}

	switch(event.target.classList[1]) {
		case 'catalogI__table-headline-1':
		document.querySelector('.catalogI__table-list-1').classList.add('catalogI__table-list--active');
		break;

		case 'catalogI__table-headline-2':
		document.querySelector('.catalogI__table-list-2').classList.add('catalogI__table-list--active');
		break;

		case 'catalogI__table-headline-3':
		document.querySelector('.catalogI__table-list-3').classList.add('catalogI__table-list--active');
		break;
	}
}



var tableTitle = document.querySelectorAll('.catalogI__table-headline');

for (var i = 0; i < tableTitle.length; i++) {
	tableTitle[i].addEventListener('click', changeTitle);
}

function openMobileCat(event) {
	'use strict';
	event.target.nextElementSibling.classList.toggle('open-mobile-cat');
	event.target.classList.toggle('catalogI__img-title--active');
}

(function () {
    if (window.innerWidth < 1280) {

	  	for (var i = 0; i < tableTitle.length; i++) {
				tableTitle[i].removeEventListener('click', changeTitle);
			}

			var mobileTitleCat = document.querySelectorAll('.catalogI__table-headline');

			for (var i = 0; i < mobileTitleCat.length; i++) {
				mobileTitleCat[i].addEventListener('click', openMobileCat);
			}


			document.querySelector('.catalogI__table-headline-1').classList.remove('catalogI__table-title--active');
			document.querySelector('.catalogI__table-title').insertBefore(document.querySelector('.catalogI__table-list-1'), document.querySelector('.catalogI__table-headline-2'));
			document.querySelector('.catalogI__table-title').insertBefore(document.querySelector('.catalogI__table-list-2'), document.querySelector('.catalogI__table-headline-3'));
			document.querySelector('.catalogI__table-title').appendChild(document.querySelector('.catalogI__table-list-3'));

	}
}());

document.querySelector('.catalogI__showmore').addEventListener('click', function(event) {
	event.target.previousElementSibling.style.height = 'auto';
	event.target.style.display = 'none';
})



function openCatalog(event){
	'use strict';
	document.querySelector('.catalogI-big').classList.toggle('catalogI-big--active');
	event.target.classList.add('catalogI-big__inner-title--active');
}

function closeCatalog(event){
	'use strict';
		document.querySelector('.catalogI-big').classList.remove('catalogI-big--active');
		document.querySelector('.catalogS__title-btn').classList.remove('catalogI-big__inner-title--active');
}


document.querySelector('.catalogS__title-btn').addEventListener('mouseover', openCatalog);

$(".catalogI-big").on( {
   'mouseleave':function() { closeCatalog() }
});



function changeNavImg(event) {
	'use strict';
	document.querySelector('.catalogI__img-subj').innerHTML = event.target.parentNode.innerHTML;
	document.querySelector('.catalogI__img-subj-popup').innerHTML = event.target.parentNode.innerHTML;
}


var catalogNavBtns =  document.querySelectorAll('.catalogI__img-nav>div');

for (var i = 0; i < catalogNavBtns.length; i++) {
	catalogNavBtns[i].addEventListener('click', changeNavImg);
}


function zoomImg() {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.add('catalogI__img-subj-popup--active');
	body.classList.toggle('body--noscroll');
}

document.querySelector('.catalogI__img-subj').addEventListener('click', zoomImg);

document.querySelector('.catalogI__img-subj-popup').addEventListener('click', function() {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.remove('catalogI__img-subj-popup--active');
	body.classList.toggle('body--noscroll');
})