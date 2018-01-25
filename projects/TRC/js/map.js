/*function initMap() {
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
		var destPath = '56.481799, 84.981671';
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

  var params_p27 = function() {
		var originPath = '56.415251, 85.041171';
		var destPath = '56.516335, 85.044930';
		var path = [{
		location : new google.maps.LatLng(56.414235, 85.039130),
		location : new google.maps.LatLng(56.424171, 85.019328),
		location : new google.maps.LatLng(56.424171, 85.019328),
		location : new google.maps.LatLng(56.425479, 85.018282),
		location : new google.maps.LatLng(56.432026, 85.007258),
		location : new google.maps.LatLng(56.436202, 84.995214),
		location : new google.maps.LatLng(56.452225, 84.980720),
		location : new google.maps.LatLng(56.455384, 84.976025),
		location : new google.maps.LatLng(56.461250, 84.988069),
		location : new google.maps.LatLng(56.460460, 84.990314),
		location : new google.maps.LatLng(56.465733, 84.982640),
		location : new google.maps.LatLng(56.482873, 84.981705),
		location : new google.maps.LatLng(56.486539, 84.980983)
  }];
  
    calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath, path);
  };

  var params_p29 = function() {
		var originPath = '56.509527, 84.934944';
		var destPath = '56.526120, 85.033843';
		var path = [{
		location : new google.maps.LatLng(56.503900, 84.940103),
		location : new google.maps.LatLng(56.504335, 84.942530),
		location : new google.maps.LatLng(56.504201, 84.947568),
		location : new google.maps.LatLng(56.500751, 84.946293),
		location : new google.maps.LatLng(56.500584, 84.948417),
		location : new google.maps.LatLng(56.488355, 84.947871),
		location : new google.maps.LatLng(56.488221, 84.949146),
		location : new google.maps.LatLng(56.481653, 84.949267),
		location : new google.maps.LatLng(56.481514, 84.944868),
		location : new google.maps.LatLng(56.475808, 84.945051),
		location : new google.maps.LatLng(56.474668, 84.942988),
		location : new google.maps.LatLng(56.473461, 84.945051),
		location : new google.maps.LatLng(56.471618, 84.942017),
		location : new google.maps.LatLng(56.459011, 84.938497),
		location : new google.maps.LatLng(56.459045, 84.971088),
		location : new google.maps.LatLng(56.455557, 84.975154),
		location : new google.maps.LatLng(56.461895, 84.988385),
		location : new google.maps.LatLng(56.466220, 84.980981),
		location : new google.maps.LatLng(56.482377, 84.981648),
		location : new google.maps.LatLng(56.486231, 84.980677),
		location : new google.maps.LatLng(56.494541, 84.980252),
		location : new google.maps.LatLng(56.501374, 84.982437),
		location : new google.maps.LatLng(56.500571, 84.981405),
		location : new google.maps.LatLng(56.500035, 84.996032),
		location : new google.maps.LatLng(56.511221, 85.038941),
		location : new google.maps.LatLng(56.520864, 85.030748),
		location : new google.maps.LatLng(56.519726, 85.026560),
		location : new google.maps.LatLng(56.523844, 85.033418)

		
  }];
  
    calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath, path);
  };

  var params_p401 = function() {
		var originPath = '56.415251, 85.041171';
		var destPath = '56.568402, 84.965785';
		var path = [{
		location : new google.maps.LatLng(56.414235, 85.039130),
		location : new google.maps.LatLng(56.424171, 85.019328),
		location : new google.maps.LatLng(56.424171, 85.019328),
		location : new google.maps.LatLng(56.425479, 85.018282),
		location : new google.maps.LatLng(56.432026, 85.007258),
		location : new google.maps.LatLng(56.436202, 84.995214),
		location : new google.maps.LatLng(56.452225, 84.980720),
		location : new google.maps.LatLng(56.455384, 84.976025),
		location : new google.maps.LatLng(56.461250, 84.988069),
		location : new google.maps.LatLng(56.460460, 84.990314),
		location : new google.maps.LatLng(56.465733, 84.982640),
		location : new google.maps.LatLng(56.482873, 84.981705),
		location : new google.maps.LatLng(56.486539, 84.980983),
		location : new google.maps.LatLng(56.494215, 84.980361),
		location : new google.maps.LatLng(56.500412, 84.981892),
		location : new google.maps.LatLng(56.508242, 84.983168),
		location : new google.maps.LatLng(56.508862, 84.982607),
		location : new google.maps.LatLng(56.512687, 84.973384),
		location : new google.maps.LatLng(56.517071, 84.979314),
		location : new google.maps.LatLng(56.525686, 84.978701),
		location : new google.maps.LatLng(56.528332, 84.980232),
		location : new google.maps.LatLng(56.531287, 84.968137),
		location : new google.maps.LatLng(56.537113, 84.965381),
		location : new google.maps.LatLng(56.552840, 84.972220)
  }];
  
    calculateAndDisplayRoute(directionsService, directionsDisplay, originPath, destPath, path);
  };

	document.getElementById('p3').addEventListener('click', params_p3);
	document.getElementById('p27').addEventListener('click', params_p27);
	document.getElementById('p29').addEventListener('click', params_p29);
	document.getElementById('p401').addEventListener('click', params_p401);

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
  this.travelMode = 'WALKING';
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

document.querySelector('.map__top').addEventListener('click', openOptions);*/

ymaps.ready(init);
var myMap;

function init(){     
  myMap = new ymaps.Map("map", {
      center: [56.481799, 84.981671],
      zoom: 15,
      controls: []
  });
}




function selectP3() {
	var multiRoute = new ymaps.multiRouter.MultiRoute({
	    referencePoints: [
	      [56.521796, 85.059263],
	      [56.499459, 84.970136],
				[56.519286, 85.049478],
				[56.520896, 85.047418],
				[56.513344, 85.023128],
				[56.509483, 85.013365],
				[56.508415, 85.006842],
				[56.502051, 85.004822],
				[56.500007, 84.996489],
				[56.500518, 84.975405],
				[56.496105, 84.958319],
				[56.496151, 84.956761],
				[56.493665, 84.952890],
				[56.493503, 84.948050],
				[56.466799, 84.950369],
				[56.466569, 84.969176],
				[56.466174, 84.970783],
				[56.466240, 84.976139],
				[56.466372, 84.977092],
				[56.466372, 84.977092],
				[56.465977, 84.981496],
				[56.466766, 84.981912],
				[56.468194, 84.950316],
				[56.481799, 84.981671]

	    ],
	    params: {
	      routingMode: 'masstransit'
	    }
		}, {
    boundsAutoApply: true
	});
	myMap.geoObjects.add(multiRoute);
}






document.getElementById('p3').addEventListener('click', selectP3);