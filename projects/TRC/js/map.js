if (window.innerWidth < 767) {
	document.querySelector('footer').style.display = 'none';
	document.getElementById('mpath').classList.add('map__item--active');
	document.getElementById('btnP').classList.add('map__btn--active');
	document.querySelector('.map__ui').classList.add('map__ui--hidden');
	document.querySelector('html').style.overflow = 'hidden';
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

function selectP3() {
	deselectAll();
	document.getElementById('p3').classList.add('map__btn--active');
}

function selectP27() {
	deselectAll();
	document.getElementById('p27').classList.add('map__btn--active');
}

function selectP29() {
	deselectAll();
	document.getElementById('p29').classList.add('map__btn--active');
}

function selectP401() {
	deselectAll();
	document.getElementById('p401').classList.add('map__btn--active');
}

function selectP7() {
	deselectAll();
	document.getElementById('p7').classList.add('map__btn--active');
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

































function initMap() {
  var uluru = {lat: 56.488671, lng: 84.978496};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    scrollwheel: false,
    mapTypeControl: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'img/marker.png',
    mapTypeControl: false
  });

  var styles = [
	  {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00ffbc"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
	]

  map.setOptions({styles: styles});

}