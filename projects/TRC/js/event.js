function eventMobile() {
	if (window.innerWidth < 767) {
		document.querySelector('.event__inner').insertBefore(document.querySelector('.event__img'), document.querySelector('.blog-page__back'));
	}
}

eventMobile();




function openDatepicker() {
	document.querySelector('.datepicker-container').classList.add('datepicker-container--active');	
}

function closeDatepicker() {
	document.querySelector('.datepicker-container').classList.remove('datepicker-container--active');
}


function openShare() {
	document.querySelector('.dt-share').classList.toggle('dt-share--active');
	document.querySelector('.dt-btn-share').classList.toggle('dt-btn-share--active');
}

function openShareM() {
	document.querySelector('.dt-share--mobile').classList.toggle('dt-share--active');
	document.querySelector('.dt-btn-share').classList.toggle('dt-btn-share--active');
}


document.querySelector('.event__title-remind').addEventListener('click', openDatepicker);
document.querySelector('.dt-btn--gray').addEventListener('click', closeDatepicker);

document.querySelector('.dt-btn-share').addEventListener('click', openShare);
document.querySelector('.event__title-btn--mobile').addEventListener('click', openShareM);