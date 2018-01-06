function switchLeft(event) {

	document.querySelector('.fav__switch-btn-left').classList.add('fav__switch-btn--active');
	document.querySelector('.fav__switch-btn-right').classList.remove('fav__switch-btn--active');

	document.querySelector('.fav__discount').classList.add('fav__discount--active');
	document.querySelector('.fav__events').classList.remove('fav__events--active');

	document.querySelector('.fav__switcher').style.width = event.target.offsetWidth + 50 + 'px';

	document.querySelector('.fav__switcher').style.left = document.querySelector('.fav__switch-btn-left').offsetLeft - 26 + 'px';

}

function switchRight(event) {

	document.querySelector('.fav__switch-btn-left').classList.remove('fav__switch-btn--active');
	document.querySelector('.fav__switch-btn-right').classList.add('fav__switch-btn--active');

	document.querySelector('.fav__events').classList.add('fav__events--active');
	document.querySelector('.fav__discount').classList.remove('fav__discount--active');


	document.querySelector('.fav__switcher').style.left = document.querySelector('.fav__switch-btn-right').offsetLeft - 24 + 'px';


	document.querySelector('.fav__switcher').style.width = event.target.offsetWidth + 50 + 'px';

}








document.querySelector('.fav__switch-btn-left').addEventListener('click', switchLeft);
document.querySelector('.fav__switch-btn-right').addEventListener('click', switchRight);