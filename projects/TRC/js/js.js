$(document).ready(function() {
	document.querySelector('.preloader').style.display = 'none';
});

var menuOpen = false;




function changeHeader() {
	if (document.querySelector('body').getBoundingClientRect().top < -130) {
		document.querySelector('.header__schedule').classList.add('hide-el');
		document.querySelector('.header__path').classList.add('hide-el');
		document.querySelector('.header__map').classList.add('hide-el');
		document.querySelector('.header__search').classList.add('hide-el');
		document.querySelector('.header__lang').classList.add('hide-el');

		if (menuOpen === false) {
			document.querySelector('.header__menu').classList.remove('hide-el');
		}

		document.querySelector('.header__path-hidden').classList.remove('hide-el');

		document.querySelector('.header__nav').classList.add('header__nav--hidden');

		document.querySelector('.header__other').classList.add('header__other--hiden');
		document.querySelector('.header__other-btn').classList.remove('header__other-btn--active');

		closeToday();
		closeFood();
		closeShops();

	} else {
		document.querySelector('.header__schedule').classList.remove('hide-el');
		document.querySelector('.header__path').classList.remove('hide-el');
		document.querySelector('.header__map').classList.remove('hide-el');
		document.querySelector('.header__search').classList.remove('hide-el');
		document.querySelector('.header__lang').classList.remove('hide-el');

		document.querySelector('.header__menu').classList.add('hide-el');
		document.querySelector('.header__path-hidden').classList.add('hide-el');

		document.querySelector('.header__nav').classList.remove('header__nav--hidden');

		if (menuOpen === true) {
			document.querySelector('.menu').classList.remove('menu--active');
			menuOpen = false;
		}
	}
}





function openOtherNav() {
	document.querySelector('.header__other').classList.toggle('header__other--hiden');
	document.querySelector('.header__other-btn').classList.toggle('header__other-btn--active');
}




var offsetY = window.pageYOffset;

function openMenu() {
	if (window.innerWidth < 767) {
		offsetY = window.pageYOffset;
		document.querySelector('body').classList.add('body--noscroll');
	}

	document.querySelector('.menu').classList.add('menu--active');
	document.querySelector('.header__menu').classList.add('hide-el');
	menuOpen = true;
}

function closeMenu() {
	if (window.innerWidth < 767) {
		document.querySelector('body').classList.remove('body--noscroll');
		window.scrollTo(0, offsetY);
	}
	document.querySelector('.menu').classList.remove('menu--active');
	document.querySelector('.header__menu').classList.remove('hide-el');
	menuOpen = false;
}






Hammer(window).on("swiperight", function() {
	 if (window.innerWidth < 767) {
		openMenu();
	}        
});

window.addEventListener('scroll', changeHeader);

document.querySelector('.header__other-btn').addEventListener('click', openOtherNav);
document.querySelector('.header__menu').addEventListener('click', openMenu);

document.querySelector('.header__menu').addEventListener('click', openMenu);
document.querySelector('.menu__close-btn').addEventListener('click', closeMenu);








function openToday() {
	document.querySelector('.header__today').classList.remove('hide-el');
	closeShops();
	closeFood();
}

function openShops() {
	document.querySelector('.header__shops').classList.remove('hide-el');
	closeToday();
	closeFood();
}

function openFood() {
	document.querySelector('.header__food').classList.remove('hide-el');
	closeToday();
	closeShops();
}

function closeToday() {
	document.querySelector('.header__today').classList.add('hide-el');
}

function closeShops() {
	document.querySelector('.header__shops').classList.add('hide-el');
}

function closeFood() {
	document.querySelector('.header__food').classList.add('hide-el');
}

function closeAll() {
	closeToday();
	closeShops();
	closeFood();
}

$(".header__today").on( {
   'mouseleave':function() { closeToday() }
});

$(".header__shops").on( {
   'mouseleave':function() { closeShops() }
});

$(".header__food").on( {
   'mouseleave':function() { closeFood() }
});






document.querySelector('.header__today-btn').addEventListener('mouseover', openToday);
document.querySelector('.header__shops-btn').addEventListener('mouseover', openShops);
document.querySelector('.header__food-btn').addEventListener('mouseover', openFood);
document.querySelector('.header__info').addEventListener('mouseover', closeAll);





function openSearch() {
	document.querySelector('.search').classList.remove('hide-el');
	document.querySelector('.header__search').classList.add('header__search--active');
}

function closeSearch() {
	document.querySelector('.search').classList.add('hide-el');
	document.querySelector('.header__search').classList.remove('header__search--active');
}



document.querySelector('.header__search').addEventListener('click', openSearch);
document.querySelector('.btn__search-close').addEventListener('click', closeSearch);





function openPath() {
	document.querySelector('.path').classList.remove('hide-el');
	/*document.querySelector('.header__search').classList.add('header__search--active');*/
}

function closePath() {
	document.querySelector('.path').classList.add('hide-el');
	/*document.querySelector('.header__search').classList.remove('header__search--active');*/
}



/*document.querySelector('.header__path').addEventListener('click', openPath);
document.querySelector('.path__close').addEventListener('click', closePath);*/



function headerMobile() {
	if (window.innerWidth < 767) {
		document.querySelector('.header__menu').classList.remove('hide-el');

		window.removeEventListener('scroll', changeHeader);
	}
}

headerMobile();