function openSearch() {
	document.querySelector('.search').classList.remove('hide-el');
}

function closeSearch() {
	document.querySelector('.search').classList.add('hide-el');
}


document.getElementById('openSearch404').addEventListener('click', openSearch);
document.querySelector('.btn__search-close').addEventListener('click', closeSearch);