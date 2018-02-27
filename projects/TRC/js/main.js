function mainMobile() {
	if (window.innerWidth < 767) {

    $('.welcome-mobile').slick({
      infinite: false,
      arrows: false,
      dots: true,
      touchMove: true
    });

		$('.ads__actual').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  centerMode: true,
		  centerPadding: (window.innerWidth - 320) / 2 + 'px'
		});

		$('.adv__tiles').slick({
		  infinite: false,
		  arrows: false,
		  dots: true,
		  touchMove: true,
		  fade: true,
      autoplay: true
		});

		$('.pop__brands').slick({
		  infinite: false,
		  arrows: false,
		  dots: false,
		  touchMove: true,
		  centerMode: true,
		  centerPadding: (window.innerWidth - 270) / 2 + 'px',
      initialSlide: 1
		});

	} else {

    $('.welcome').on('init', function (event, slick, direction) {
      if (!($('.welcome .slick-slide').length > 1)) {
        $('.slick-dots').hide();
      }
    });

    $('.welcome').slick({
      infinite: false,
      arrows: false,
      dots: true,
      touchMove: true
    });

  }
}

$(document).ready(function() {

  $('.ads__actual-2').slick({
    infinite: false,
    arrows: false,
    dots: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: (window.innerWidth - 450) / 2 + 'px'
        }
      }
    ]
  });

  $('.trends').slick({
    infinite: false,
    arrows: false,
    dots: true,
    touchMove: false
  });

  $('.movie__list').slick({
    infinite: false,
    arrows: true,
    touchMove: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          touchMove: true,
          arrows: false,
          centerMode: true,
          centerPadding: (window.innerWidth - 225) / 2 + 'px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  mainMobile();
  
});






function paralax() {
  var x = (event.clientX - window.innerWidth) / 15;
  var y = (event.clientY - window.innerHeight) / 15;

  document.querySelector('.ads').style.backgroundPosition = x + 'px' + ' ' + y + 'px';
  document.querySelector('.emerald').style.transform = 'translate(' + x + 'px' + ',' + y + 'px)';
}

document.querySelector('body').addEventListener('mousemove', paralax);

var slideNumber;

var typed = new Typed(".about__video-text", {
  strings: ["Попить кофе <br> и перекусить", "Отдохнуть <br> с детьми", "Приятные эмоции <br> от шопинга", "Заглянуть в <br/> салон красоты"],
  showCursor: false,
  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
  preStringTyped: (arrayPos, self) => {

    switch (arrayPos) {
      case 0:
      document.querySelector('.about__video-img').innerHTML = '<img src="img/icons/cake.png">';
      break;

      case 1:
      document.querySelector('.about__video-img').innerHTML = '<img src="img/icons/train.png">';
      break;

      case 2:
      document.querySelector('.about__video-img').innerHTML = '<img src="img/icons/bag-about.png">';
      break;

      case 3:
      document.querySelector('.about__video-img').innerHTML = '<img src="img/icons/fen-about.png">';
      break;
    }

  }
});

if ($(window).innerWidth()>=767){ 
  $(".about__video > video").each(function(){ 
    $(this).attr("src", $(this).attr("src-desktop")); 
  });
}