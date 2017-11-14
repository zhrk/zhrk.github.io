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

var objectBtns =  document.querySelectorAll('.objects__btn');

for (var i = 0; i < objectBtns.length; i++) {
	objectBtns[i].addEventListener('click', openModalConsl);
}



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

var slider = Peppermint(document.getElementById('peppermint'), {
	dots: true
});

var slider2 = Peppermint(document.getElementById('peppermint2'), {
	dots: true
});

var slider3 = Peppermint(document.getElementById('peppermint3'), {
	dots: true
});












;(function(){
	if (window.innerWidth < 1280) {
		var imgList = document.querySelectorAll('.objects__slides img');
var topS = 0;



function zoomImg(event) {
	document.querySelector('.catalogI__img-subj-popup').classList.add('catalogI__img-subj-popup--active');

	var currentImgs = event.target.parentNode.children;

	for (var i = 0; i < currentImgs.length; i++) {
		document.querySelector('.o-slides-m').appendChild(currentImgs[i].parentNode.children[i].cloneNode(true));
	}

  var slider4 = Peppermint(document.getElementById('peppermint4'), {
		speed: 300
	});
	body.classList.toggle('body--noscroll');


	topS = event.target.getBoundingClientRect().top;
}

for (var i = 0; i < imgList.length; i++) {
	imgList[i].addEventListener('click', zoomImg);
}

document.querySelector('.catalogI__img-subj-popup').addEventListener('click', function() {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.remove('catalogI__img-subj-popup--active');
	document.querySelector('.o-slides-m').innerHTML = null;
	body.classList.toggle('body--noscroll');

	window.scrollTo(0, topS - 100);
})
	}
})();