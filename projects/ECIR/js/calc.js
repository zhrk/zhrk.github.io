var priceInput = document.getElementById('price');
var price = priceInput.value;

var priceDillerLabel = document.getElementById('price-diller');
var priceDiller;

var priceMultiplier = 1.1;

var multiply1 = document.getElementById('p1');
var multiply2 = document.getElementById('p2');
var multiply3 = document.getElementById('p3');

var ecInput = document.getElementById('ec');
var ecLabel = document.getElementById('ec-label');

var ec = ecInput.value;

var priceEcLabel = document.getElementById('price-ec');
var priceEc;

var rekInput = document.getElementById('rek');
var rekLabel = document.getElementById('rek-label');
var rek;

var priceClean;
var priceClean2;
var priceCleanLabel = document.getElementById('price-clean');
var priceCleanLabel2 = document.getElementById('price-clean2');

var month;
var monthInput = document.getElementById('month');
var monthLabel = document.getElementById('month-label');

var priceMonth;
var priceMonth2;
var priceMonthLabel = document.getElementById('price-month');
var priceMonthLabel2 = document.getElementById('price-month2');



function changePrice() {
	price = priceInput.value;
	changePriceDiller();
	changePriceEc();
	changePriceClean();
	changePriceClean2();
	changePriceMonth();
}

function changePriceDiller() {
	priceDiller = (price * priceMultiplier).toFixed();
	priceDillerLabel.innerHTML = priceDiller;
}

function changeEc() {
	ecLabel.innerHTML = ecInput.value;
	ec = ecInput.value;
}

function changePriceEc() {
	priceEc = price * ec;
	priceEcLabel.innerHTML = priceEc;
}

function changeRek() {
	rek = rekInput.value;
	rekLabel.innerHTML = rek;
}

function changePriceClean() {
	priceClean = priceEc - price;
	priceCleanLabel.innerHTML = priceClean;
}

function changePriceClean2() {
	priceClean2 = priceEc - priceDiller;
	priceCleanLabel2.innerHTML = priceClean2;
}

function changeMonth() {
	month = monthInput.value;
	monthLabel.innerHTML = month;
}

function changePriceMonth() {
	priceMonth = month * priceClean;
	priceMonth2 = month * priceClean2;
	priceMonthLabel.innerHTML = priceMonth;
	priceMonthLabel2.innerHTML = priceMonth2;
}


//multiply functions

function changeMultiply1() {
	priceMultiplier = multiply1.value;
	changePriceDiller();
	changePriceClean2();
}

function changeMultiply2() {
	priceMultiplier = multiply2.value;
	changePriceDiller();
	changePriceClean2();
}

function changeMultiply3() {
	priceMultiplier = multiply3.value;
	changePriceDiller();
	changePriceClean2();
}





//init functions

changePriceDiller();
changeRek();
changeEc();
changePriceEc();
changePriceClean();
changePriceClean2();
changeMonth();
changePriceMonth();





priceInput.addEventListener('input', changePrice);

rekInput.addEventListener('input', changeRek);

ecInput.addEventListener('input', changeEc);

ecInput.addEventListener('input', changePriceEc);

ecInput.addEventListener('input', changePriceClean);

ecInput.addEventListener('input', changePriceClean2);

ecInput.addEventListener('input', changePriceClean2);

ecInput.addEventListener('input', changePriceMonth);

monthInput.addEventListener('input', changeMonth);

monthInput.addEventListener('input', changePriceMonth);

multiply1.addEventListener('change', changeMultiply1);
multiply2.addEventListener('change', changeMultiply2);
multiply3.addEventListener('change', changeMultiply3);