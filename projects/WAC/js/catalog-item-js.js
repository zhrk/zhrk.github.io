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

var slider = document.getElementById('range');

noUiSlider.create(slider, {
	start: [0, 95320],
	connect: true,
	margin: 5000,
	step: 10,
	range: {
		'min': 0,
		'max': 130000
	},
	format: wNumb({
		decimals: 0
	})
});

range.noUiSlider.on('update', function( values, handle ) {
	document.getElementById('input1').value = values[0];
	document.getElementById('input2').value = values[1];
});



function resetCloud() {
	'use strict';

	var cloudsList = document.querySelectorAll('.sortCloud');

	for (var i = 0; i < cloudsList.length; i++) {
		document.querySelector('.catalogS__sort').removeChild(cloudsList[i]);
	}
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].previousElementSibling.checked = false;
	}

	if (document.querySelector('.catalogS__sort').children[0] === document.querySelector('.catalogS__reset-btn')) {
		document.querySelector('.catalogS__reset-btn').style.visibility = 'hidden';
	}

}

function hideCloud(event) {
	'use strict';
	document.querySelector('.catalogS__sort').removeChild(event.target);
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].parentNode.parentNode.childNodes[3].innerHTML === event.target.innerHTML) {
			checkboxes[i].previousElementSibling.checked = false;
		}
	}

	if (document.querySelector('.catalogS__sort').children[0] === document.querySelector('.catalogS__reset-btn')) {
		document.querySelector('.catalogS__reset-btn').style.visibility = 'hidden';
	}
}


function addCheck(event) {
	'use strict';

	var cloudsList = document.querySelectorAll('.sortCloud'),
			sortText = event.target.parentNode.parentNode.childNodes[3].innerHTML,
			newSort = document.createElement('div');

	newSort.innerHTML = sortText;
	newSort.className = 'sortCloud';
	newSort.addEventListener('click', hideCloud);
	document.querySelector('.catalogS__reset-btn').style.visibility = 'visible';

	if (event.target.previousElementSibling.checked === true) {
		for (var i = 0; i < cloudsList.length; i++) {
			if (cloudsList[i].innerHTML === sortText) {
				document.querySelector('.catalogS__sort').removeChild(cloudsList[i]);
			}
		} 
	} else {
		document.querySelector('.catalogS__sort').insertBefore(newSort, document.querySelector('.catalogS__reset-btn'));
	}
}




var checkboxes = document.querySelectorAll('.catalogS__checkbox');


for (var i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('click', addCheck);
}


function openPopUp(event) {
	'use strict';
	document.querySelector('.catalogS__popup').classList.toggle('catalogS__popup--active');
}

function popUpChange(event) {
	'use strict';
	document.querySelector('.catalogS__sort-btn-selected').innerHTML = event.target.children[0].innerHTML;
}




document.querySelector('.catalogS__reset-btn').addEventListener('click', resetCloud);
document.querySelector('.catalogS_form-reset').addEventListener('click', resetCloud);
document.querySelector('.catalogS__sort-btn-selected').addEventListener('click', openPopUp);
document.querySelector('.catalogS__popup').addEventListener('click', openPopUp);





(function () {
    if (window.innerWidth < 1280) {

	  	document.querySelector('.catalogS__popup').removeEventListener('click', openPopUp);

	}
}());



var popUpA = document.querySelectorAll('.catalogS__popup>a');


for (var i = 0; i < popUpA.length; i++) {
	popUpA[i].addEventListener('click', popUpChange);
}

var filterM = document.querySelector('.catalogS-filter-mobile');


function openFilter() {
	'use strict';
	document.querySelector('.catalogS__form').classList.toggle('catalogS__form--active');
	document.querySelector('.catalogS__sort-mobile').classList.toggle('catalogS__sort-mobile--active');
	document.querySelector('.catalogS-filter-mobile').classList.toggle('catalogS-filter-mobile--active');

}



var sortM = document.querySelector('.catalogS-sort-mobile');


function openSort() {
	'use strict';
	sortM.classList.toggle('catalogS-filter-mobile--active');
	document.querySelector('.catalogS__popup').classList.toggle('catalogS__popup-mobile--active');
}


filterM.addEventListener('click', openFilter);
sortM.addEventListener('click', openSort);
document.querySelector('.catalogS__popup-mobile-sort').addEventListener('click', openSort);




function openCatalog(event) {
	'use strict';
	document.querySelector('.catalogI-big').classList.toggle('catalogI-big--active');
	event.target.classList.toggle('catalogI-big__inner-title--active');
}

document.querySelector('.catalogS__title-btn').addEventListener('click', openCatalog);

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

$(".catalogS__popup").on( {
   'mouseleave':function() { document.querySelector('.catalogS__popup').classList.remove('catalogS__popup--active') }
});