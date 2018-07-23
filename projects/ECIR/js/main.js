$(document).ready(function() {
	
  $('#service').niceSelect();
  $('#m-social').niceSelect();
	$('#m-service').niceSelect();

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

  if (window.innerWidth < 1208) {

    $('.services__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });

    $('.social-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });

    $('.news__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });

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







animateNumber(document.querySelector('.social__insta-bubble--1 > span'), 100);
animateNumber(document.querySelector('.social__insta-bubble--2 > span'), 100);
animateNumber(document.querySelector('.social__insta-bubble--3 > span'), 100);
animateNumber(document.querySelector('.social__card-insta__likes > span'), 100);
animateNumber(document.querySelector('.social__card-insta__comments > span'), 100);
animateNumber(document.querySelector('.social__card-insta__likes--2 > span'), 100);
animateNumber(document.querySelector('.social__card-insta__comments--2 > span'), 100);

animateNumber(document.querySelector('.social__card-vk-likes > span'), 100);
animateNumber(document.querySelector('.social__card-vk-comments > span'), 100);
animateNumber(document.querySelector('.social__card-vk-shares > span'), 100);
animateNumber(document.querySelector('.social__card-vk-views > span'), 100);

animateNumber(document.querySelector('.social__card-face-emoji > span'), 100);
animateNumber(document.querySelector('.social__card-face-counter-1 > div'), 100);
animateNumber(document.querySelector('.social__card-face-counter-2 > div'), 100);

animateNumber(document.querySelector('.social__card-telega-info-count > span'), 100);
animateNumber(document.querySelector('.social__card-telega-message-views > span'), 100);
animateNumber(document.querySelector('.social__card-telega-message-views-2 > span'), 100);

animateNumber(document.querySelector('.social__card-yt-info-count > span'), 100);
animateNumber(document.querySelector('#yt-likes > span'), 100);
animateNumber(document.querySelector('#tw-flwrs > span'), 100);
animateNumber(document.querySelector('#tw-likes'), 100);
animateNumber(document.querySelector('#tw-coments'), 100);
animateNumber(document.querySelector('#tw-rt > span'), 100);
animateNumber(document.querySelector('#tw-likes > span'), 100);

animateNumber(document.querySelector('.social__card-sz-container > span > span'), 100);

animateNumber(document.querySelector('#sc-flwrs > span'), 100);
animateNumber(document.querySelector('#sc-1 > span'), 100);
animateNumber(document.querySelector('#sc-2 > span'), 100);
animateNumber(document.querySelector('#sc-3 > span'), 100);
animateNumber(document.querySelector('#sc-likes > span'), 100);
animateNumber(document.querySelector('#sc-rt > span'), 100);