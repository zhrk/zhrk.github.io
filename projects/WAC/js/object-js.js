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

	if (event.target.classList.contains('header__consultation') || event.target.classList.contains('objects__btn')) {
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

var objectBtns =  document.querySelectorAll('.objects__btn');

for (var i = 0; i < objectBtns.length; i++) {
	objectBtns[i].addEventListener('click', openModal);
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
	dots: true,
	mouseDrag: false
});

var slider2 = Peppermint(document.getElementById('peppermint2'), {
	dots: true,
	mouseDrag: false
});

var slider3 = Peppermint(document.getElementById('peppermint3'), {
	dots: true,
	mouseDrag: false
});












/*;(function(){
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
})();*/





objectsZoomBtns = document.querySelectorAll('.objects__img');


function zoomImgD(event) {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.add('catalogI__img-subj-popup--active');
	document.querySelector('.catalogI__img-subj-popup').innerHTML = event.target.parentNode.innerHTML;
}

for (var i = 0; i < objectsZoomBtns.length; i++) {
	objectsZoomBtns[i].addEventListener('click', zoomImgD);
}

document.querySelector('.catalogI__img-subj-popup').addEventListener('click', function() {
	'use strict';
	document.querySelector('.catalogI__img-subj-popup').classList.remove('catalogI__img-subj-popup--active');
})