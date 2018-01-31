document.querySelector('footer').style.display = 'none';

if (window.innerWidth < 767) {
	document.getElementById('mpath').classList.add('map__item--active');
	document.getElementById('btnP').classList.add('map__btn--active');
	document.querySelector('.map__ui').classList.add('map__ui--hidden');
	document.querySelector('main').style.overflow = 'hidden';
	document.querySelector('main').style.marginTop = '0';
	document.querySelector('main').style.height = '100vh';
	document.querySelector('main').style.position = 'relative';
}

function openPath() {
	document.querySelector('.path').classList.remove('hide-el');
}

function closePath() {
	document.querySelector('.path').classList.add('hide-el');
}



document.querySelector('.map__btn--path').addEventListener('click', openPath);
document.querySelector('.path__close').addEventListener('click', closePath);


function deselectAll() {
	document.getElementById('p3').classList.remove('map__btn--active');
	document.getElementById('p27').classList.remove('map__btn--active');
	document.getElementById('p29').classList.remove('map__btn--active');
	document.getElementById('p401').classList.remove('map__btn--active');	
	document.getElementById('p7').classList.remove('map__btn--active');	
}

function deselectAllM() {
	document.getElementById('car').classList.remove('map__item--active');
	document.getElementById('mtaxi').classList.remove('map__item--active');
	document.getElementById('mtrol').classList.remove('map__item--active');
	document.getElementById('mpath').classList.remove('map__item--active');
}

function deselectAllMBtns() {
	document.getElementById('btnC').classList.remove('map__btn--active');
	document.getElementById('btnM').classList.remove('map__btn--active');
	document.getElementById('btnT').classList.remove('map__btn--active');
	document.getElementById('btnP').classList.remove('map__btn--active');
}


function selectC() {
	deselectAllMBtns();
	deselectAllM();
	document.getElementById('car').classList.add('map__item--active');
	document.getElementById('btnC').classList.add('map__btn--active');
}

function selectM() {
	deselectAllMBtns();
	deselectAllM();
	document.getElementById('mtaxi').classList.add('map__item--active');
	document.getElementById('btnM').classList.add('map__btn--active');
}

function selectT() {
	deselectAllMBtns();
	deselectAllM();
	document.getElementById('mtrol').classList.add('map__item--active');
	document.getElementById('btnT').classList.add('map__btn--active');
}

function selectP() {
	deselectAllMBtns();
	deselectAllM();
	document.getElementById('mpath').classList.add('map__item--active');
	document.getElementById('btnP').classList.add('map__btn--active');
}

function openOptions() {
	document.querySelector('.map__ui').classList.toggle('map__ui--hidden');
	document.querySelector('.map__arrow').classList.toggle('map__arrow--active');
}









document.getElementById('p3').addEventListener('click', selectP3);
document.getElementById('p27').addEventListener('click', selectP27);
document.getElementById('p29').addEventListener('click', selectP29);
document.getElementById('p401').addEventListener('click', selectP401);
document.getElementById('p7').addEventListener('click', selectP7);

document.getElementById('btnC').addEventListener('click', selectC);
document.getElementById('btnM').addEventListener('click', selectM);
document.getElementById('btnT').addEventListener('click', selectT);
document.getElementById('btnP').addEventListener('click', selectP);

document.getElementById('map__car--input').addEventListener('focus', deselectAll);

document.querySelector('.map__top').addEventListener('click', openOptions);







ymaps.ready(init);
var myMap;

function init() {
  myMap = new ymaps.Map("map", {
      center: [56.489925, 84.977457],
      zoom: 15,
      controls: []
  });

  var zoomControl = new ymaps.control.ZoomControl({options: { position: { right: 20, bottom: 50 }}}); 

	myMap.controls.add(zoomControl);

  var suggestView = new ymaps.SuggestView(document.getElementById('map__car--input'));

  suggestView.events.add('select', function (event) {

	  var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[event.get('item').value],
				[56.488487, 84.978049]
	    ],
		}, {
    	boundsAutoApply: true
		});

		myMap.geoObjects.removeAll();
		myMap.geoObjects.add(multiRoute);

		var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);

	});

  var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);

}

function selectP3() {
	deselectAll();
	document.getElementById('p3').classList.add('map__btn--active');

	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[56.540739, 85.056874],
				[56.521298, 85.047588],
				[56.522332, 85.061498],
				[56.520819, 85.046858],
				[56.508491, 85.006917],
				[56.501870, 85.003927],
				[56.492341, 84.950812],
				[56.466774, 84.950633],
				[56.466793, 84.981695],
				[56.481994, 84.981727],
				[56.487926, 84.976963]
	    ],
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.removeAll();
	myMap.geoObjects.add(multiRoute);

	var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);
}

function selectP27() {
	deselectAll();
	document.getElementById('p27').classList.add('map__btn--active');

	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[56.415675, 85.041022],
				[56.426759, 85.022314],
				[56.454414, 84.976583],
				[56.460661, 84.989846],
				[56.467133, 84.981685],
				[56.482400, 84.981602],
				[56.500207, 84.987379],
				[56.507829, 85.026701],
				[56.503713, 85.031941],
				[56.500745, 85.040804],
				[56.505630, 85.035446],
				[56.516314, 85.044910]
	    ],
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.removeAll();
	myMap.geoObjects.add(multiRoute);

	var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);
}

function selectP29() {
	deselectAll();
	document.getElementById('p29').classList.add('map__btn--active');

	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[56.509394, 84.934961],
				[56.503846, 84.940324],
				[56.504090, 84.947591],
				[56.500652, 84.946395],
				[56.500476, 84.948458],
				[56.481923, 84.949292],
				[56.481631, 84.948936],
				[56.458954, 84.938785],
				[56.458916, 84.971123],
				[56.456053, 84.977172],
				[56.462591, 84.987471],
				[56.482306, 84.981737],
				[56.500165, 84.987368],
				[56.512419, 85.038872],
				[56.520841, 85.030193],
				[56.528815, 85.033577]
	    ],
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.removeAll();
	myMap.geoObjects.add(multiRoute);

	var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);
}

function selectP401() {
	deselectAll();
	document.getElementById('p401').classList.add('map__btn--active');

	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[56.415675, 85.041022],
				[56.426759, 85.022314],
				[56.454414, 84.976583],
				[56.460661, 84.989846],
				[56.467133, 84.981685],
				[56.482400, 84.981602],
				[56.508915, 84.982423],
				[56.512754, 84.973814],
				[56.528611, 84.979622],
				[56.537772, 84.965455],
				[56.569128, 84.965540]
	    ],
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.removeAll();
	myMap.geoObjects.add(multiRoute);

	var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);
}

function selectP7() {
	deselectAll();
	document.getElementById('p7').classList.add('map__btn--active');

	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
				[56.461316, 84.989816],
				[56.467139, 84.981664],
				[56.500186, 84.987349],
				[56.517361, 85.064998],
				[56.518569, 85.106260]
	    ],
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.removeAll();
	myMap.geoObjects.add(multiRoute);

	var placemark = new ymaps.Placemark([56.488487, 84.978049], {
    	balloonContent: ''
		}, {
			iconLayout: 'default#image',
      iconImageHref: 'img/marker.png',
      iconImageSize: [87, 87],
	    preset: "twirl#yellowStretchyIcon",
	    balloonCloseButton: false,
	    hideIconOnBalloonOpen: false
	});

   myMap.geoObjects.add(placemark);
}




document.getElementById('p3').addEventListener('click', selectP3);
document.getElementById('p27').addEventListener('click', selectP27);
document.getElementById('p29').addEventListener('click', selectP29);
document.getElementById('p401').addEventListener('click', selectP401);
document.getElementById('p7').addEventListener('click', selectP7);