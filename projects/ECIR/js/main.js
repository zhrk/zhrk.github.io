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
					break;
				case '2':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-2');
					break;
				case '3':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-3');
					break;
				case '4':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-4');
					break;
				case '5':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-5');
					break;
				case '6':
					clearClasses();
					document.querySelector('.nice-select').classList.add('nice-select-bg-6');
					break;
			}
		})
	}

});

$(window).scroll(function(){
  if (isScrolledIntoView('.btn--how') === true) {
  	setTimeout(function(){
  		document.querySelector('.plank--1').classList.add('plank--1-active');
  	}, 600);
  	setTimeout(function(){
  		document.querySelector('.plank--2').classList.add('plank--2-active');
  	}, 900);
  	document.querySelector('.how__inner').classList.add('how__inner--visible');
  } else {
  	document.querySelector('.plank--1').classList.remove('plank--1-active');
  	document.querySelector('.plank--2').classList.remove('plank--2-active');
  	document.querySelector('.how__inner').classList.remove('how__inner--visible');
  }
});

$(window).scroll(function(){
  if (isScrolledIntoView('.features__list') === true) {
  	console.log('123');
  	document.querySelector('.features__graph').classList.add('features__graph--active');
  } else {
  	document.querySelector('.features__graph').classList.remove('features__graph--active');
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