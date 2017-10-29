var menuBtn = document.querySelector('.menu-btn'),
		modal = document.querySelector('.modal'),
		body = document.querySelector('body'),
		main = document.querySelector('main'),
		footer = document.querySelector('footer'),
		hamburger = document.querySelector('.hamburger'),
		backBtn = document.querySelector('.btn__back');

var labels = document.querySelectorAll('.form-style__inner');

var changeMenuBtn = () => {
	'use strict';
	hamburger.classList.toggle('hamburger--active');
	document.querySelector('.menu-btn>span').classList.toggle('menu-btn__text--active');
}

var blurBG = () => {
	'use strict';
	main.classList.toggle('modal-blur');
	footer.classList.toggle('modal-blur');
	document.querySelector('.header__info').classList.toggle('modal-blur');
	document.querySelector('.header__logo--desktop').classList.toggle('modal-blur');
	document.querySelector('.header__logo--mobile').classList.toggle('modal-blur');
	document.querySelector('.header__call').classList.toggle('modal-blur');
}

var openModal = () => {
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

var openModalConsl = () => {
	'use strict';
	modal.classList.toggle('modal--active-consl');
	changeMenuBtn();
	blurBG();
	body.classList.toggle('body--noscroll');
}


document.querySelector('.menu-btn').addEventListener('click', openModal);
document.querySelector('.header__consultation').addEventListener('click', openModalConsl);

var changeInputLabel = (event) => {
	'use strict';
	let target = event.target;

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



var resetCloud = () => {
	'use strict';

	var cloudsList = document.querySelectorAll('.sortCloud');

	for (var i = 0; i < cloudsList.length; i++) {
		document.querySelector('.catalogS__sort').removeChild(cloudsList[i]);
	}
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].previousElementSibling.checked = false;
	}

}

var hideCloud = (event) => {
	'use strict';
	document.querySelector('.catalogS__sort').removeChild(event.target);
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].parentNode.parentNode.childNodes[3].innerHTML === event.target.innerHTML) {
			console.log(checkboxes[i].previousElementSibling.checked = false);
		}
	}
}


var addCheck = (event) => {
	'use strict';

	var cloudsList = document.querySelectorAll('.sortCloud'),
			sortText = event.target.parentNode.parentNode.childNodes[3].innerHTML,
			newSort = document.createElement('div');

	newSort.innerHTML = sortText;
	newSort.className = 'sortCloud';
	newSort.addEventListener('click', hideCloud);

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


var openPopUp = (event) => {
	'use strict';
	document.querySelector('.catalogS__popup').classList.toggle('catalogS__popup--active');
}

var popUpChange = (event) => {
	'use strict';
	console.log(event.target);
	document.querySelector('.catalogS__sort-btn-selected').innerHTML = event.target.innerHTML;
}




document.querySelector('.catalogS__reset-btn').addEventListener('click', resetCloud);
document.querySelector('.catalogS_form-reset').addEventListener('click', resetCloud);
document.querySelector('.catalogS__sort-btn-selected').addEventListener('click', openPopUp);
document.querySelector('.catalogS__popup').addEventListener('click', openPopUp);



var popUpA = document.querySelectorAll('.catalogS__popup>a');


for (var i = 0; i < popUpA.length; i++) {
	popUpA[i].addEventListener('click', popUpChange);
}