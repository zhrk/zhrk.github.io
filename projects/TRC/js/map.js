function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;

	var uluru = {lat: 56.488671, lng: 84.978496};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		mapTypeControl: false
	});


	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: 'img/marker.png',
		mapTypeControl: false
	});

	directionsDisplay = new google.maps.DirectionsRenderer({map: map, suppressMarkers: true});

	var params_p3 = function() {
		var originPath = '56.521796, 85.059263';
		var destPath = '56.487903, 84.977014';
		var path = [{
		location : new google.maps.LatLng(56.519286, 85.049478),
		location : new google.maps.LatLng(56.520896, 85.047418),
		location : new google.maps.LatLng(56.513344, 85.023128),
		location : new google.maps.LatLng(56.509483, 85.013365),
		location : new google.maps.LatLng(56.508415, 85.006842),
		location : new google.maps.LatLng(56.502051, 85.004822),
		location : new google.maps.LatLng(56.500007, 84.996489),
		location : new google.maps.LatLng(56.500518, 84.975405),
		location : new google.maps.LatLng(56.496105, 84.958319),
		location : new google.maps.LatLng(56.496151, 84.956761),
		location : new google.maps.LatLng(56.493665, 84.952890),
		location : new google.maps.LatLng(56.493503, 84.948050),
		location : new google.maps.LatLng(56.466799, 84.950369),
		location : new google.maps.LatLng(56.466569, 84.969176),
		location : new google.maps.LatLng(56.466174, 84.970783),
		location : new google.maps.LatLng(56.466240, 84.976139),
		location : new google.maps.LatLng(56.466372, 84.977092),
		location : new google.maps.LatLng(56.466372, 84.977092),
		location : new google.maps.LatLng(56.465977, 84.981496),
		location : new google.maps.LatLng(56.466766, 84.981912),
		location : new google.maps.LatLng(56.485937, 84.980807),
		location : new google.maps.LatLng(56.489449, 84.981278),
		location : new google.maps.LatLng(56.489432, 84.977386)
  }];

    calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath, path);
  };

  var params_p27 = function() {
		var originPath = '56.521796, 85.059263';
		var destPath = '56.485937, 84.980807';
		var path = [{
		location : new google.maps.LatLng(56.499459, 84.970136),
		location : new google.maps.LatLng(56.519286, 85.049478),
		location : new google.maps.LatLng(56.520896, 85.047418),
		location : new google.maps.LatLng(56.513344, 85.023128),
		location : new google.maps.LatLng(56.509483, 85.013365),
		location : new google.maps.LatLng(56.508415, 85.006842),
		location : new google.maps.LatLng(56.502051, 85.004822),
		location : new google.maps.LatLng(56.500007, 84.996489),
		location : new google.maps.LatLng(56.500518, 84.975405),
		location : new google.maps.LatLng(56.496105, 84.958319),
		location : new google.maps.LatLng(56.496151, 84.956761),
		location : new google.maps.LatLng(56.493665, 84.952890),
		location : new google.maps.LatLng(56.493503, 84.948050),
		location : new google.maps.LatLng(56.466799, 84.950369),
		location : new google.maps.LatLng(56.466569, 84.969176),
		location : new google.maps.LatLng(56.466174, 84.970783),
		location : new google.maps.LatLng(56.466240, 84.976139),
		location : new google.maps.LatLng(56.466372, 84.977092),
		location : new google.maps.LatLng(56.466372, 84.977092),
		location : new google.maps.LatLng(56.465977, 84.981496),
		location : new google.maps.LatLng(56.466766, 84.981912),
		location : new google.maps.LatLng(56.468194, 84.950316)
  }];
  
    calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath, path);
  };



	document.getElementById('p3').addEventListener('click', params_p3);
	document.getElementById('p27').addEventListener('click', params_p27);

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

	new AutocompleteDirectionsHandler(map);

}

function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = 'ChIJqZMBVBSTJkMRT1QL2lFTa5M';
  this.travelMode = 'DRIVING';
  var originInput = document.getElementById('map__car--input');
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);

  var originAutocomplete = new google.maps.places.Autocomplete(originInput, {placeIdOnly: true});

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
}

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });

};

AutocompleteDirectionsHandler.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route({
    origin: {'placeId': this.originPlaceId},
    destination: {'placeId': this.destinationPlaceId},
    travelMode: this.travelMode
  }, function(response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};








function calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath,  path) {
	myCoords = path;
	op = originPath;
	od = destPath;

  directionsService.route({
    origin: op,
    destination: od,
    waypoints: myCoords,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}





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