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
document.getElementById('freeze-card').addEventListener('click', openFreeze);

function wrongNumber() {
	'use strict';
	var currentNum = document.querySelector('.tel1').value;
	if (currentNum.length < 11) {
		document.querySelector('.tel1').classList.add('wrongnumber');
		document.querySelector('.wrnt1').classList.add('wrongnumber-text-active');
	} else {
		document.querySelector('.tel1').classList.remove('wrongnumber');
		document.querySelector('.wrnt1').classList.remove('wrongnumber-text-active');
		document.querySelector('.ems-form__inner > .modal-form>button').classList.remove('btn-inactive');
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

document.querySelector('.tel').addEventListener('focusout', wrongNumber2);
document.querySelector('.tel1').addEventListener('focusout', wrongNumber);



function openQList(event) {
	'use strict';
	event.target.nextElementSibling.classList.toggle('ems-q__list-hidden--active');

	if (event.target.children[1].innerHTML === '+') {
		event.target.children[1].innerHTML = '-';
	} else {
		event.target.children[1].innerHTML = '+';
	}
} 



qBtn = document.querySelectorAll('.ems-q__list-block');

for (var i = 0; i < qBtn.length; i++) {
	qBtn[i].addEventListener('click', openQList);
}



function initWelcomeHeight() {
	'use strict';
	document.querySelector('.slogan-ems').style.height = window.innerHeight + 'px';
	document.querySelector('.ems-video').style.height = window.innerHeight + 'px';
	document.querySelector('.ems-video>video').style.height = window.innerHeight + 'px';
	document.querySelector('main').style.top = 0;
}




window.addEventListener('resize', initWelcomeHeight);
initWelcomeHeight();

var typed = new Typed(".slogan-ems__text2", {
  strings: ["ПЕРЕДОВАЯ РАЗРАБОТКА В СФЕРЕ ФИТНЕСА И СПОРТА", "Программы основаны на научных исследований", "Реабилитация после травм и операций"],
  showCursor: false,
  typeSpeed: 10,
  backSpeed: 10,
  loop: true
});