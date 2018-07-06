$(document).ready(function() {
	
	$('#service').niceSelect();

	document.querySelector('.nice-select').classList.add('nice-select-bg-1');

	var options = document.querySelectorAll('.nice-select .option');

	for (var i = options.length - 1; i >= 0; i--) {
		options[i].addEventListener('click', function(event){
			var bgClassList = [
				'nice-select-bg-1',
				'nice-select-bg-2',
				'nice-select-bg-3',
				'nice-select-bg-4',
				'nice-select-bg-5',
				'nice-select-bg-6'
			];

			function clearClasses() {
				for (var j = bgClassList.length - 1; j >= 0; j--) {
					document.querySelector('.nice-select').classList.remove(bgClassList[j]);
				}
			}

			switch(event.target.dataset.value) {
				case '1':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-1');
					document.getElementById('value').value = 100;
					document.getElementById('price').value = 100000;
					break;
				case '2':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-2');
					document.getElementById('value').value = 101;
					document.getElementById('price').value = 100001;
					break;
				case '3':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-3');
					document.getElementById('value').value = 102;
					document.getElementById('price').value = 100002;
					break;
				case '4':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-4');
					document.getElementById('value').value = 103;
					document.getElementById('price').value = 100003;
					break;
				case '5':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-5');
					document.getElementById('value').value = 104;
					document.getElementById('price').value = 100004;
					break;
				case '6':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-6');
					document.getElementById('value').value = 105;
					document.getElementById('price').value = 100005;
					break;
			}
		})
	}

});

$(window).scroll(function(){
  if (isScrolledIntoView('.how__inner') === true) {
  	setTimeout(function(){
  		document.querySelector('.plank--1').classList.add('plank--1-active');
  	}, 600);
  	setTimeout(function(){
  		document.querySelector('.plank--2').classList.add('plank--2-active');
  	}, 900);
  	document.querySelector('.how__inner').classList.add('how__inner--visible');
  }
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



function animateNumber(el, interval) {
  setInterval(function(){
    var currentNumber = parseInt(el.innerHTML, 10);
    currentNumber = currentNumber + 1;
    el.innerHTML = currentNumber;
  }, interval);
}

animateNumber(document.querySelector('.social__img-counter-1'), 500);
animateNumber(document.querySelector('.social__img-counter-2'), 1000);
animateNumber(document.querySelector('.social__img-counter-3'), 600);
animateNumber(document.querySelector('.social__img-counter-4'), 1000);
animateNumber(document.querySelector('.social__img-counter-5'), 700);
animateNumber(document.querySelector('.social__img-counter-6'), 800);
animateNumber(document.querySelector('.social__img-counter-7'), 900);

animateNumber(document.querySelector('.social__img-counter-8'), 300);
animateNumber(document.querySelector('.social__img-counter-9'), 500);
animateNumber(document.querySelector('.social__img-counter-10'), 1000);
animateNumber(document.querySelector('.social__img-counter-11'), 2000);

animateNumber(document.querySelector('.social__img-counter-12'), 100);
animateNumber(document.querySelector('.social__img-counter-13'), 1000);
animateNumber(document.querySelector('.social__img-counter-14'), 2300);

animateNumber(document.querySelector('.social__img-counter-15'), 1000);
animateNumber(document.querySelector('.social__img-counter-16'), 2300);
animateNumber(document.querySelector('.social__img-counter-17'), 2300);

animateNumber(document.querySelector('.social__img-counter-18'), 100);
animateNumber(document.querySelector('.social__img-counter-19'), 2000);

animateNumber(document.querySelector('.social__img-counter-20'), 2000);
animateNumber(document.querySelector('.social__img-counter-21'), 2000);
animateNumber(document.querySelector('.social__img-counter-22'), 2000);
animateNumber(document.querySelector('.social__img-counter-23'), 1000);

animateNumber(document.querySelector('.social__img-counter-25'), 100);

animateNumber(document.querySelector('.social__img-counter-26'), 2000);
animateNumber(document.querySelector('.social__img-counter-27'), 2500);
animateNumber(document.querySelector('.social__img-counter-28'), 1000);
animateNumber(document.querySelector('.social__img-counter-29'), 3000);
animateNumber(document.querySelector('.social__img-counter-30'), 1000);
animateNumber(document.querySelector('.social__img-counter-31'), 2000);





