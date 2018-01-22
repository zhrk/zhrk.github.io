function eventMobile() {
	if (window.innerWidth < 767) {
		document.querySelector('.event__inner').insertBefore(document.getElementById('event-img'), document.querySelector('.blog-page__back'));
	}
}

eventMobile();




function openDatepicker() {
	document.querySelector('.datepicker-container').classList.toggle('datepicker-container--active');	
}

function closeDatepicker(event) {
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



var isOpen = false;
var isOpenD = false;

$("body").click(function(event){

	if (isOpen === true) {

		if (isOpenD === true) {
			isOpenD = false;
		} else {
			document.querySelector('.datepicker-container').classList.remove('datepicker-container--active');
		}
		
	}

});

$(".event__title-remind").click(function(e){
	isOpen = true;
  e.stopPropagation();
});

$(".datepicker-container").click(function(e){

	if (e.target === document.getElementById('datepicker')) {
		isOpenD = true;
		console.log('isopenD= ' + isOpenD);
	}

  e.stopPropagation();
});

$('#datepicker').datepicker({
	autoClose: true,
})


$("body").click(function(){

	if (event.target !== document.querySelector('.dt-btn-share')) { 
		document.querySelector('.dt-share').classList.remove('dt-share--active');
		document.querySelector('.dt-btn-share').classList.remove('dt-btn-share--active');
	}

});

$(".dt-share").click(function(e){
  e.stopPropagation();
});




var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = new IMask(element, maskOptions);