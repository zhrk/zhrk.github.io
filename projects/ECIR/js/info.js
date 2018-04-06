var exchangeRate = 1;
var exchangeSign = '$';
var currentfPrice = 599;
var adv = 100;
var marge = 1.1;
var ec = 1.5;
var months = 1;
var itemPrice = 100;
var itemValue = 1;
var clean = 100;

function initFTabs() {

	var fStartPrice = 599 * exchangeRate;
	var fBusinessPrice = 1000 * exchangeRate;
	var fProPrice = 2000 * exchangeRate;

	document.querySelector('#startPrice > span').innerHTML = fStartPrice;
	document.querySelector('#businessPrice > span').innerHTML = fBusinessPrice;
	document.querySelector('#proPrice > span').innerHTML = fProPrice;

	document.querySelector('.calc__bauble--adv > span').innerHTML = adv * exchangeRate;

}

initFTabs();




function initFPrice() {
	document.getElementById('fPrice').innerHTML = currentfPrice * exchangeRate;
}

initFPrice();


function initAdvInfo() {
	document.getElementById('advInfo').innerHTML = adv * exchangeRate;
}

initAdvInfo();


function initPriceInfo() {
	document.getElementById('priceInfo').innerHTML = (itemPrice * marge * exchangeRate * itemValue).toFixed();
}

initPriceInfo();

function initEcInfo() {
	document.getElementById('ecInfo').innerHTML = (itemPrice * marge * exchangeRate * itemValue * ec).toFixed();
}

initEcInfo();

function initClean() {
	document.getElementById('cleanInfo').innerHTML = ((itemPrice * marge * exchangeRate * itemValue * ec).toFixed() - (itemPrice * marge * exchangeRate * itemValue).toFixed()) * months;
}

initClean();


document.getElementById('start').addEventListener('click', function() {
	currentfPrice = 599;
	marge = 1.1;
	document.getElementById('fPrice').innerHTML = 599 * exchangeRate;

	initClean();
	initPriceInfo();
	initEcInfo();

})

document.getElementById('business').addEventListener('click', function() {
	currentfPrice = 1000;
	marge = 1.07;
	document.getElementById('fPrice').innerHTML = 1000 * exchangeRate;

	initPriceInfo();
	initEcInfo();
	initClean();

})

document.getElementById('pro').addEventListener('click', function() {
	currentfPrice = 2000;
	marge = 1.05;
	document.getElementById('fPrice').innerHTML = 2000 * exchangeRate;

	initPriceInfo();
	initEcInfo();
	initClean();

})


document.getElementById('itemPrice').addEventListener('input', function() {
	itemPrice = this.value;
	initPriceInfo();
	initEcInfo();
	initClean();
})

document.getElementById('itemValue').addEventListener('input', function() {
	itemValue = this.value;
	initPriceInfo();
	initEcInfo();
	initClean();
})









$('#adv').rangeslider({

	polyfill: false,

	onSlide: function(position, value) {

		document.querySelector('.calc__bauble--adv').style.left = position + 'px';
		document.querySelector('.calc__bauble--adv>span').innerHTML = value;

		adv = value;

		document.querySelector('.calc__bauble--adv > span').innerHTML = adv * exchangeRate;
		document.getElementById('advInfo').innerHTML = adv * exchangeRate;

	}

});

$('#ec').rangeslider({

	polyfill: false,

	onSlide: function(position, value) {
		document.querySelector('.calc__bauble--ec').style.left = position + 'px';
		document.querySelector('.calc__bauble--ec>span').innerHTML = value;

		ec = value;

		initEcInfo();
		initClean();

	}

});

$('#months').rangeslider({

	polyfill: false,

	onSlide: function(position, value) {
		document.querySelector('.calc__bauble--months').style.left = position + 'px';
		document.querySelector('.calc__bauble--months>span').innerHTML = value;

		months = value;

		document.getElementById('monthsInfo').innerHTML = months;

		initClean();

	}

});



//exchange rate tabs
function changeERSigns() {

	document.querySelector('#startPrice > div').innerHTML = exchangeSign;
	document.querySelector('#businessPrice > div').innerHTML = exchangeSign;
	document.querySelector('#proPrice > div').innerHTML = exchangeSign;

	document.querySelector('.calc__input-label > span').innerHTML = exchangeSign;

	var infoERSigns = document.querySelectorAll('.calc__info-value > span');

	for (var i = 0; i < infoERSigns.length; i++) {
		infoERSigns[i].innerHTML = exchangeSign;
	}

}

var erBtns = document.querySelectorAll('.calc__er>div');

function changeEr(event) {
	exchangeRate = event.target.dataset.er;
	exchangeSign = event.target.dataset.sign;
	for (var i = 0; i < erBtns.length; i++) {
		erBtns[i].classList.remove('calc__er--active');
	}
	event.target.classList.add('calc__er--active');
	initFTabs();
	initFPrice();
	initAdvInfo();
	initPriceInfo();
	changeERSigns();
	initEcInfo();
	initClean();
}

for (var i = 0; i < erBtns.length; i++) {
	erBtns[i].addEventListener('click', changeEr);
}

