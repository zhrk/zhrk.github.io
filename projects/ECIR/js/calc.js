var itemValueInput = document.getElementById('item-value');
var itemValue = itemValueInput.value;

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
var priceCleanLabel = document.getElementById('price-clean');

var month;
var monthInput = document.getElementById('month');
var monthLabel = document.getElementById('month-label');
var monthLabel2 = document.getElementById('month-label2');

var priceMonth;
var priceMonthLabel = document.getElementById('price-month');

function changeItemValue() {
	itemValue = itemValueInput.value;
	changePriceDiller();
	changePriceEc();
	changePriceClean();
	changePriceMonth();
}

function changePrice() {
	price = priceInput.value;
	changePriceDiller();
	changePriceEc();
	changePriceClean();
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
	priceEc = price * ec * itemValue;
	priceEcLabel.innerHTML = priceEc;
}

function changeRek() {
	rek = rekInput.value;
	rekLabel.innerHTML = rek;
}

function changePriceClean() {
	priceClean = priceEc - priceDiller;
	priceCleanLabel.innerHTML = priceClean;
}

function changeMonth() {
	month = monthInput.value;
	montText = 'месяц';
	switch (month) {
		case '1':
			montText = 'месяц';
		break;
		case '2':
			montText = 'месяца';
		break;
		case '3':
			montText = 'месяца';
		break;
		case '4':
			montText = 'месяца';
		break;
		case '5':
			montText = 'месяцев';
		break;
		case '6':
			montText = 'месяцев';
		break;
		case '7':
			montText = 'месяцев';
		break;
		case '8':
			montText = 'месяцев';
		break;
		case '9':
			montText = 'месяцев';
		break;
		case '10':
			montText = 'месяцев';
		break;
		case '11':
			montText = 'месяцев';
		break;
		case '12':
			montText = 'месяцев';
		break;
	}
	monthLabel.innerHTML = month;
	monthLabel2.innerHTML = montText;
}

function changePriceMonth() {
	priceMonth = month * priceClean;
	priceMonthLabel.innerHTML = priceMonth;
}


//multiply functions

function changeMultiply1() {
	priceMultiplier = multiply1.value;
	changePriceDiller();
	changePriceClean();
}

function changeMultiply2() {
	priceMultiplier = multiply2.value;
	changePriceDiller();
	changePriceClean();
}

function changeMultiply3() {
	priceMultiplier = multiply3.value;
	changePriceDiller();
	changePriceClean();
}





//init functions

changePriceDiller();
changeRek();
changeEc();
changePriceEc();
changePriceClean();
changeMonth();
changePriceMonth();




itemValueInput.addEventListener('input', changeItemValue);

priceInput.addEventListener('input', changePrice);

rekInput.addEventListener('input', changeRek);

ecInput.addEventListener('input', changeEc);

ecInput.addEventListener('input', changePriceEc);

ecInput.addEventListener('input', changePriceClean);

ecInput.addEventListener('input', changePriceMonth);

monthInput.addEventListener('input', changeMonth);

monthInput.addEventListener('input', changePriceMonth);

multiply1.addEventListener('change', changeMultiply1);
multiply2.addEventListener('change', changeMultiply2);
multiply3.addEventListener('change', changeMultiply3);