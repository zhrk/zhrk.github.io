var
	i = 0,
	j = 0,
	k = 0,
	n = 0,
	l = 0,
	p = 0,
	z = 0,
	smItems = document.querySelectorAll('.sm-item>div:first-child'),
	programItems = document.querySelectorAll('.prgm-itm'),
	selectAvatar = document.querySelectorAll('.avatar-select>div'),
	selectProgramm = document.querySelectorAll('.prgm-itm'),
	header  = document.querySelector('header'),
	firstH = document.getElementById('h-1'),
	secondH = document.getElementById('h-2'),
	thirdH = document.getElementById('h-3'),
	fourH = document.getElementById('h-4'),
	menuBtn = document.querySelector('.btn-menu'),
	currentSlide = 1,
	currentSlideM = 1;


$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if(month < 10) 
        month = "0" + month;
    if(day < 10) 
        day = "0" + day;
    var today = day + '.' + month + '.' + now.getFullYear();
    $('#datePickerSince').val(today);
});

$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if(month < 10) 
        month = "0" + month;
    if(day < 10) 
        day = "0" + day;
    var today = day + '.' + month + '.' + now.getFullYear();
    $('#datePickerSince2').val(today);
});

function fun_AllowOnlyAmountAndDot(txt)
        {
            if(event.keyCode > 47 && event.keyCode < 58 || event.keyCode == 46)
            {
               var txtbx=document.getElementById(txt);
               var amount = document.getElementById(txt).value;
               var present=0;
               var count=0;

               if(amount.indexOf(".",present)||amount.indexOf(".",present+1));
               {
              // alert('0');
               }

              /*if(amount.length==2)
              {
                if(event.keyCode != 46)
                return false;
              }*/
               do
               {
               present=amount.indexOf(".",present);
               if(present!=-1)
                {
                 count++;
                 present++;
                 }
               }
               while(present!=-1);
               if(present==-1 && amount.length==0 && event.keyCode == 46)
               {
                    event.keyCode=0;
                    //alert("Wrong position of decimal point not  allowed !!");
                    return false;
               }

               if(count>=1 && event.keyCode == 46)
               {

                    event.keyCode=0;
                    //alert("Only one decimal point is allowed !!");
                    return false;
               }
               if(count==1)
               {
                var lastdigits=amount.substring(amount.indexOf(".")+1,amount.length);
                if(lastdigits.length>=2)
                            {
                              //alert("Two decimal places only allowed");
                              event.keyCode=0;
                              return false;
                              }
               }
                    return true;
            }
            else
            {
                    event.keyCode=0;
                    //alert("Only Numbers with dot allowed !!");
                    return false;
            }

        }


function fixedHeaderBg() {
	'use strict';
	var
		headerPosition = document.querySelector('body').getBoundingClientRect().top;
	
	if (headerPosition < 0) {
		header.classList.add('fixed-header');
	} else {
		header.classList.remove('fixed-header');
	}
}

window.addEventListener('scroll', fixedHeaderBg);


function changeBtn() {
	'use strict';
	if (document.querySelector('.btn-menu>span').innerHTML === 'Меню') {
		document.querySelector('.btn-menu>span').innerHTML = 'Закрыть';
		document.querySelector('.hamburger').classList.toggle('hamburger-active');
		document.querySelector('.btn-menu').classList.toggle('btn-menu-activate');
		document.querySelector('body').classList.toggle('body-overflow');
	} else {
		document.querySelector('.btn-menu>span').innerHTML = 'Меню';
		document.querySelector('.hamburger').classList.toggle('hamburger-active');
		document.querySelector('.btn-menu').classList.toggle('btn-menu-activate');
		document.querySelector('body').classList.toggle('body-overflow');
	}
}


function openHeader() {
	'use strict';
	if (header.classList.contains('guest-a')) {
		document.querySelector('.guest-form').classList.toggle('guest-form-active');
		header.classList.remove('guest-a');
		header.classList.toggle('header-open');
		changeBtn();
	} else if (header.classList.contains('freeze-a')) {
		document.querySelector('.freeze-form').classList.toggle('freeze-form-active');
		document.querySelector('.menu').classList.toggle('menu-active');
		header.classList.remove('freeze-a');
	} else {
		header.classList.toggle('header-open');
		document.querySelector('.menu').classList.toggle('menu-active');
		changeBtn();
	}
	
	
}

function openGuest() {
	'use strict';
	header.classList.toggle('header-open');
	document.querySelector('.guest-form').classList.toggle('guest-form-active');
	header.classList.add('guest-a');
	changeBtn();
}

function openFreeze() {
	'use strict';
	document.querySelector('.freeze-form').classList.toggle('freeze-form-active');
	document.querySelector('.menu').classList.toggle('menu-active');
	header.classList.add('freeze-a');
}

menuBtn.addEventListener('click', openHeader);
document.getElementById('guest').addEventListener('click', openGuest);
document.getElementById('guest2').addEventListener('click', openGuest);
document.getElementById('guest3').addEventListener('click', openGuest);
document.getElementById('freeze-card').addEventListener('click', openFreeze);


function openSm() {
	'use strict';
	event.currentTarget.nextElementSibling.classList.toggle('opensm');
	event.currentTarget.childNodes[3].classList.toggle('arrow-open');
}

for (i; i < smItems.length; i++) {
	smItems[i].addEventListener('click', openSm);
}

function selectP() {
	'use strict';
	for (k; k < programItems.length; k++) {
		programItems[k].classList.remove('program-active');
	}
	k = 0;
	event.currentTarget.classList.toggle('program-active');
	
}

for (j; j < programItems.length; j++) {
	programItems[j].addEventListener('click', selectP);
}

function selectA() {
	'use strict';
	for (n; n < selectAvatar.length; n++) {
		selectAvatar[n].classList.remove('a-selected');
	}
	n = 0;
	event.currentTarget.classList.toggle('a-selected');
	if (event.currentTarget.getAttribute('id') === 'a1') {
		document.querySelector('.reviews-img').innerHTML = '<img src="img/jashankin.png">';
		document.querySelector('.avatar-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.avatar-name').innerHTML = 'Дмитрий <span>Яшанькин';
	} else if (event.currentTarget.getAttribute('id') === 'a2') {
		document.querySelector('.reviews-img').innerHTML = '<img src="img/koklyaev.png">';
		document.querySelector('.avatar-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.avatar-name').innerHTML = 'Дмитрий <span>Кокляев';
	} else if (event.currentTarget.getAttribute('id') === 'a3') {
		document.querySelector('.reviews-img').innerHTML = '<img src="img/pytrova.png">';
		document.querySelector('.avatar-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.avatar-name').innerHTML = 'Ольга <span>Путрова';
	} else if (event.currentTarget.getAttribute('id') === 'a4') {
		document.querySelector('.reviews-img').innerHTML = '<img src="img/lindrover.png">';
		document.querySelector('.avatar-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.avatar-name').innerHTML = 'Станислав <span>Линдровер';
	} else if (event.currentTarget.getAttribute('id') === 'a5') {
		document.querySelector('.reviews-img').innerHTML = '<img src="img/jashankinB.png">';
		document.querySelector('.avatar-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.avatar-name').innerHTML = 'Александр <span>Яшанькин';
	}
}

for (l; l < selectAvatar.length; l++) {
	selectAvatar[l].addEventListener('click', selectA);
}

function slideLeft() {
	'use strict';
	currentSlide -= 1;
	if (currentSlide === 0) {
		currentSlide = 5;
	}
	if (currentSlide === 1) {
		document.querySelector('.s-img').style.background = 'url(img/jashankin-preview.jpg)';
	}
	if (currentSlide === 2) {
		document.querySelector('.s-img').style.background = 'url(img/koklyaev-preview.jpg)';
	}
	if (currentSlide === 3) {
		document.querySelector('.s-img').style.background = 'url(img/pytrova-preview.jpg)';
	}
	if (currentSlide === 4) {
		document.querySelector('.s-img').style.background = 'url(img/lindrover-preview.jpg)';
	}
	if (currentSlide === 5) {
		document.querySelector('.s-img').style.background = 'url(img/jashankinB-preview.jpg)';
	}
}

function slideRight() {
	'use strict';
	currentSlide += 1;
	if (currentSlide === 6) {
		currentSlide = 1;
	}
	if (currentSlide === 1) {
		document.querySelector('.s-img').style.background = 'url(img/jashankin-preview.jpg)';
	}
	if (currentSlide === 2) {
		document.querySelector('.s-img').style.background = 'url(img/koklyaev-preview.jpg)';
	}
	if (currentSlide === 3) {
		document.querySelector('.s-img').style.background = 'url(img/pytrova-preview.jpg)';
	}
	if (currentSlide === 4) {
		document.querySelector('.s-img').style.background = 'url(img/lindrover-preview.jpg)';
	}
	if (currentSlide === 5) {
		document.querySelector('.s-img').style.background = 'url(img/jashankinB-preview.jpg)';
	}
}

document.getElementById('s-left').addEventListener('click', slideLeft);
document.getElementById('s-right').addEventListener('click', slideRight);

function slideLeftM() {
	'use strict';
	currentSlideM -= 1;
	if (currentSlideM === 0) {
		currentSlideM = 5;
	}
	if (currentSlideM === 1) {
		document.querySelector('.rm-img').style.background = 'url(img/jashankin-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Дмитрий <span>Яшанькин';
	}
	if (currentSlideM === 2) {
		document.querySelector('.rm-img').style.background = 'url(img/koklyaev-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.rm-name').innerHTML = 'Дмитрий <span>Кокляев';
	}
	if (currentSlideM === 3) {
		document.querySelector('.rm-img').style.background = 'url(img/pytrova-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Ольга <span>Путрова';
	}
	if (currentSlideM === 4) {
		document.querySelector('.rm-img').style.background = 'url(img/lindrover-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.rm-name').innerHTML = 'Станислав <span>Линдровер';
	}
	if (currentSlideM === 5) {
		document.querySelector('.rm-img').style.background = 'url(img/jashankinB-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Александр <span>Яшанькин';
	}
}

function slideRightM() {
	'use strict';
	currentSlideM += 1;
	if (currentSlideM === 6) {
		currentSlideM = 1;
	}
	if (currentSlideM === 1) {
		document.querySelector('.rm-img').style.background = 'url(img/jashankin-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Дмитрий <span>Яшанькин';
	}
	if (currentSlideM === 2) {
		document.querySelector('.rm-img').style.background = 'url(img/koklyaev-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.rm-name').innerHTML = 'Дмитрий <span>Кокляев';
	}
	if (currentSlideM === 3) {
		document.querySelector('.rm-img').style.background = 'url(img/pytrova-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Ольга <span>Путрова';
	}
	if (currentSlideM === 4) {
		document.querySelector('.rm-img').style.background = 'url(img/lindrover-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Таким образом, постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки экономической';
		document.querySelector('.rm-name').innerHTML = 'Станислав <span>Линдровер';
	}
	if (currentSlideM === 5) {
		document.querySelector('.rm-img').style.background = 'url(img/jashankinB-preview.jpg)';
		document.querySelector('.rm-info').innerHTML = 'Действующий вулкан Катмаи надкусывает уличный очаг многовекового орошаемого земледелия. Когда из храма с шумом выбегают мужчины в костюмах.';
		document.querySelector('.rm-name').innerHTML = 'Александр <span>Яшанькин';
	}
}

document.getElementById('rm-left').addEventListener('click', slideLeftM);
document.getElementById('rm-right').addEventListener('click', slideRightM);

function wrongNumber() {
	'use strict';
	var currentNum = document.querySelector('.tel').value;
	if (currentNum.length < 11) {
		document.querySelector('.tel').classList.add('wrongnumber');
		document.querySelector('.wrongnumber-text').classList.add('wrongnumber-text-active');
	} else {
		document.querySelector('.tel').classList.remove('wrongnumber');
		document.querySelector('.wrongnumber-text').classList.remove('wrongnumber-text-active');
		document.querySelector('.guest-form .modal-form>button').classList.remove('btn-inactive');
	}
}

function wrongNumber2() {
	'use strict';
	var currentNum = document.querySelector('.tel2').value;
	if (currentNum.length < 11) {
		document.querySelector('.tel2').classList.add('wrongnumber');
		document.querySelector('.wrnt2').classList.add('wrongnumber-text-active');
	} else {
		document.querySelector('.tel2').classList.remove('wrongnumber');
		document.querySelector('.wrnt2').classList.remove('wrongnumber-text-active');
	}
}

function wrongNumber3() {
	'use strict';
	var currentNum = document.querySelector('.tel3').value;
	if (currentNum.length < 11) {
		document.querySelector('.tel2').classList.add('wrongnumber');
		document.querySelector('.wrnt3').classList.add('wrongnumber-text-active');
	} else {
		document.querySelector('.tel3').classList.remove('wrongnumber');
		document.querySelector('.wrnt3').classList.remove('wrongnumber-text-active');
	}
}

document.querySelector('.tel').addEventListener('focusout', wrongNumber);
document.querySelector('.tel2').addEventListener('focusout', wrongNumber2);
document.querySelector('.tel3').addEventListener('focusout', wrongNumber3);

/*parentWidth = document.querySelector('.floating-1').clientWidth / 100;*/
function moveH() {
	'use strict';
	var
		elOffset = firstH.getBoundingClientRect().top,
		elOffset2 = secondH.getBoundingClientRect().top,
		elOffset3 = thirdH.getBoundingClientRect().top,
		elOffset4 = fourH.getBoundingClientRect().top,
		parentWidth = document.querySelector('.floating-1').getBoundingClientRect(),
		firstMove,
		secondMove,
		thirdMove,
		fourMove;
	
	elOffset = firstH.getBoundingClientRect().top / 100;
	elOffset2 = secondH.getBoundingClientRect().top / 100;
	elOffset3 = thirdH.getBoundingClientRect().top / 100;
	elOffset4 = fourH.getBoundingClientRect().top / 100;
	parentWidth = parentWidth.right / 100;
	
	firstMove = elOffset * parentWidth;
	firstMove = firstMove * 0.5;
	firstMove = firstMove + '%';
	
	secondMove = elOffset2 * parentWidth;
	secondMove = secondMove * 0.5;
	secondMove = secondMove + '%';
	
	thirdMove = elOffset3 * parentWidth;
	thirdMove = thirdMove * 0.5;
	thirdMove = thirdMove + '%';
	
	fourMove = elOffset4 * parentWidth;
	fourMove = fourMove * 0.5;
	fourMove = fourMove + '%';
	
	
	firstH.style.left = firstMove;
	secondH.style.left = secondMove;
	thirdH.style.left = thirdMove;
	fourH.style.left = fourMove;
}

window.addEventListener('scroll', moveH);

function selectP() {
	'use strict';
	for (p; p < selectAvatar.length; p++) {
		selectProgramm[p].classList.remove('program-active');
	}
	p = 0;
	event.currentTarget.classList.toggle('program-active');
	if (event.currentTarget.getAttribute('id') === 'p-1') {
		document.querySelector('.pTitle').innerHTML = 'Anti-Gravity Yoga';
		document.querySelector('.pInfo').innerHTML = 'Асаны хатха-йоги выполняются с помощью подвесного оборудования — йога-гамака. Вхождение в асаны осуществляется за счет естественного веса тела, что облегчает возможность правильного выстраивания многих поз. Во время занятий расширяются границы тренировочного процесса уже привычного для вашего тела.';
		document.querySelector('.programs').style.backgroundImage = 'url(img/programs-bg.png)';
	} else if (event.currentTarget.getAttribute('id') === 'p-2') {
		document.querySelector('.pTitle').innerHTML = 'Hot Iron';
		document.querySelector('.pInfo').innerHTML = 'Это самые популярные фитнес-программы в мире. Hot Iron, Body Pump — это целостные системы низко-ударных тренировок с использованием облегченной штанги. Благодаря Hot Iron, Body Pump прорабатываются, укрепляются и приводятся в тонус все мышцы тела.';
		document.querySelector('.programs').style.backgroundImage = 'url(img/programs2-bg.jpg)';
		document.querySelector('.programs').style.backgroundPosition = '20%';
	} else if (event.currentTarget.getAttribute('id') === 'p-3') {
		document.querySelector('.pTitle').innerHTML = 'Stretching';
		document.querySelector('.pInfo').innerHTML = 'Увлекательный вид фитнеса , в котором есть комплексы упражнений, предназначенные для растягивания связок и сухожилий. Ведь хорошая гибкость дает возможность эффективнее выполнять упражнения и сохранять осанку.';
		document.querySelector('.programs').style.backgroundImage = 'url(img/programs3-bg.jpg)';
	} else if (event.currentTarget.getAttribute('id') === 'p-4') {
		document.querySelector('.pTitle').innerHTML = 'F-training';
		document.querySelector('.pInfo').innerHTML = 'Одно из самых энергоемких занятий, развивающих все основные двигательные качества человека. Во время тренировки прорабатываются мышцы - стабилизаторы, которые мы используем в повседневной жизни. Способствует укреплению мышечных групп и связок, улучшает координацию движений, физическую форму и выносливость.';
		document.querySelector('.programs').style.backgroundImage = 'url(img/programs5-bg.jpg)';
		document.querySelector('.programs').style.backgroundPosition = '40%';
	} else if (event.currentTarget.getAttribute('id') === 'p-5') {
		document.querySelector('.pTitle').innerHTML = 'Kids CrossFit';
		document.querySelector('.pInfo').innerHTML = 'Это специально масштабированная версия нагрузки для детей, построенная на основе принципов механики, последовательности интенсивности. CrossFit Kids помогает освоить правильную технику движений с самого детства и заложить отличный фундамент общей физической подготовленности на долгие годы и снижает вероятность травм опорно-двигательного аппарата в будущем.';
		document.querySelector('.programs').style.backgroundImage = 'url(img/programs4-bg.jpg)';
		document.querySelector('.programs').style.backgroundPosition = '80% top';
	}
}