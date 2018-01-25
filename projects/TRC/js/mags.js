function openNav() {
	document.querySelector('.mags__nav').classList.add('mags__nav--active');
	document.querySelector('body').classList.add('body--noscroll');
}

function closeNav() {
	document.querySelector('.mags__nav').classList.remove('mags__nav--active');
	document.querySelector('body').classList.remove('body--noscroll');
}








/*document.querySelector('.mags__nav-open').addEventListener('click', openNav);
document.querySelector('.mags__nav-close').addEventListener('click', closeNav);*/