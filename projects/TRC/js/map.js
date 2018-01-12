function openPath() {
	document.querySelector('.path').classList.remove('hide-el');
	document.querySelector('.header__path').classList.add('header__search--active');
}

function closePath() {
	document.querySelector('.path').classList.add('hide-el');
	document.querySelector('.header__path').classList.remove('header__search--active');
}



document.querySelector('.header__path').addEventListener('click', openPath);
document.querySelector('.path__close').addEventListener('click', closePath);