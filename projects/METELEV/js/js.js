function moveCircle(event) {

  var rect = event.target.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  document.querySelector('.welcome__circle').style.transform = 'translate(' + (x - 2000) + 'px' + ',' + (y - 2000) + 'px)';

}

document.querySelector('.welcome__text-3').addEventListener('mousemove', moveCircle);

var app = new Vue({
  el: '#app',
  data: {
    year: 2012,
    month: 'aug',
    mapCircleId: [15],
    currentLogo: 'ITLX',
    currentCountries: 1,
    currentUsers: 200,
    currentEmployees: 2,
    tweenedCountries: 1,
    tweenedUsers: 200,
    tweenedEmployees: 2,
    totalCountries: 1,
    totalUsers: 200,
    totalEmployees: 2,
    language: 'RU',
    months: {
      'RU': {
        'jan': 'Янв',
        'feb': 'Фев',
        'mar': 'Март',
        'apr': 'Апр',
        'may': 'Май',
        'jun': 'Июн',
        'jul': 'Июл',
        'aug': 'Авг',
        'sep': 'Сен',
        'oct': 'Окт',
        'nov': 'Нбр',
        'dec': 'Дек'
      },
      'EN': {
        'jan': 'Jav',
        'feb': 'Feb',
        'mar': 'Mar',
        'apr': 'Apr',
        'may': 'Май',
        'jun': 'Jun',
        'jul': 'Jul',
        'aug': 'Aug',
        'sep': 'Sep',
        'oct': 'Oct',
        'nov': 'Nov',
        'dec': 'Dec'
      },
      'NUMBERS': {
        'jan': '01',
        'feb': '02',
        'mar': '03',
        'apr': '04',
        'may': '05',
        'jun': '06',
        'jul': '07',
        'aug': '08',
        'sep': '09',
        'oct': '10',
        'nov': '11',
        'dec': '12'
      }
    },
    projects: [
      {
        'year': 2012,
        'month': 'aug',
        'countries': 1,
        'users': 200,
        'employees': 2,
        'mapCircleId': [15],
        'currentLogo': 'ITLX',
        'titleRU': '<a target="_blank" href="https://instalex.ru">Инсталекс.рф</a>',
        'titleEN': '<a target="_blank" href="https://instalex.ru">Инсталекс.рф</a>',
        'descriptionRU': '<p>Первая версия нашего будущего сервиса для автоматизации работы с Instagram аккаунтами, в виде скрипта для работ с 1 аккаунтом</p><p>и минимальным набором функционала: массфоловинг и масслайкинг без критериев и фильтров.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2013,
        'month': 'oct',
        'countries': 1,
        'users': 200,
        'employees': 2,
        'mapCircleId': [15],
        'currentLogo': 'ITLX',
        'titleRU': '<a target="_blank" href="https://instalex.ru">instalex.ru</a>',
        'titleEN': '<a target="_blank" href="https://instalex.ru">instalex.ru</a>',
        'descriptionRU': '<p>Полный ребрендинг платформы инсталекс.рф и запуск полноценной облачной платформы Instalex.ru для автоматизации работы</p><p>с Instagram аккаунтами в неограниченном количестве. Открыли офис для разработчиков.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2014,
        'month': 'may',
        'countries': 2,
        'users': 15000,
        'employees': 3,
        'mapCircleId': [15, 3],
        'currentLogo': 'ITFR',
        'titleRU': 'Франшиза <a target="_blank" href="http://instalex.ru/franchise">Instalex</a>',
        'titleEN': 'Франшиза <a target="_blank" href="http://instalex.ru/franchise">Instalex</a>',
        'descriptionRU': '<p>Начало масштабирования платформы Instalex путем запуска международных дилеров-партнеров в других странах.</p><p>Начало масштабирования платформы Instalex путем запуска международных дилеров-партнеров в других странах.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2015,
        'month': 'oct',
        'countries': 5,
        'users': 70000,
        'employees': 3,
        'mapCircleId': [15, 3, 22, 21, 1],
        'currentLogo': 'ITFR',
        'titleRU': 'Франшиза <a target="_blank" href="http://instalex.ru/franchise">Instalex</a>',
        'titleEN': 'Франшиза <a target="_blank" href="http://instalex.ru/franchise">Instalex</a>',
        'descriptionRU': '<p>Усиление позиций платформы Instalex на международном рынке, запуск новых дилеров и привлечения еще большего количества </p><p>пользователей и подключение новых франшиз в новых для нас странах</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2016,
        'month': 'aug',
        'countries': 9,
        'users': 300000,
        'employees': 6,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16],
        'currentLogo': 'ADFX',
        'titleRU': 'Рекламное агентство <a target="_blank" href="https://adfixed.com/">ADFixed</a>',
        'titleEN': 'Рекламное агентство <a target="_blank" href="https://adfixed.com/">ADFixed</a>',
        'descriptionRU': '<p>Запуск рекламного агентства полного цикла по созданию сайтов и настройке рекламных каналов для привлечения трафика.</p><p>Разработка проекта и подготовка всех материалов для начала работы заняла более полугода. </p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2017,
        'month': 'feb',
        'countries': 13,
        'users': 530000,
        'employees': 11,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17],
        'currentLogo': 'ECIR',
        'titleRU': '<a target="_blank" href="https://ecir.ru">ecir.ru</a>',
        'titleEN': '<a target="_blank" href="https://ecir.ru">ecir.ru</a>',
        'descriptionRU': '<p>Запуск магазина цифровых товаров для социальных сетей. Разработка системы и запуск первого рекламного канала занял у нас около 2 недель.</p><p>Первая версия системы понравилась пользователям, но требовала серьезной доработки в плане интерфейса и качества товаров.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2017,
        'month': 'may',
        'countries': 16,
        'users': 790000,
        'employees': 13,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4],
        'currentLogo': 'ITLX',
        'titleRU': '<a target="_blank" href="https://instalex.pro">instalex.pro</a>',
        'titleEN': '<a target="_blank" href="https://instalex.pro">instalex.pro</a>',
        'descriptionRU': '<p>Запуск англоязычной версии сервиса Instalex.ru для зарубежных пользователей. Мы получили больше 50 тысяч регистраций, всего за первый месяц работы.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2017,
        'month': 'aug',
        'countries': 20,
        'users': 1100000,
        'employees': 15,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19],
        'currentLogo': 'BOOK',
        'titleRU': 'Книга <a target="_blank" href="http://instalex.co">instalex.co</a>',
        'titleEN': 'Книга <a target="_blank" href="http://instalex.co">instalex.co</a>',
        'descriptionRU': '<p>Наша лаборатория выпустила книгу «Стань Звездой Instagram» на русском языке.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2017,
        'month': 'nov',
        'countries': 20,
        'users': 1420000,
        'employees': 16,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19],
        'currentLogo': 'BOOK',
        'titleRU': '<a target="_blank" href="https://instalex.co">instalex.co</a> на английском',
        'titleEN': '<a target="_blank" href="https://instalex.co">instalex.co</a> на английском',
        'descriptionRU': '<p>Перевели всю книгу «Стань Звездой Instagram» на английский язык и  получили больше 2000 скачиваний книги в первый месяц продаж.</p> ',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2017,
        'month': 'dec',
        'countries': 20,
        'users': 1580000,
        'employees': 16,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19],
        'currentLogo': 'CRME',
        'titleRU': ' СrownMedia <a target="_blank" href="https://t.me/crownmedia">телеграм канал</a>',
        'titleEN': ' СrownMedia <a target="_blank" href="https://t.me/crownmedia">телеграм канал</a>',
        'descriptionRU': '<p>Запустили авторский телеграм канал Александра Метелева. За первый месяц собрали больше 1000 активных подписчиков для блога и вложили 5000$</p><p>в рекламу этого канала на популярных Telegram площадках в СНГ.</p> ',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2018,
        'month': 'feb',
        'countries': 21,
        'users': 1700000,
        'employees': 17,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12],
        'currentLogo': 'SCMA',
        'titleRU': '<a target="_blank" href="https://test.scoma.io">Scoma.io</a>',
        'titleEN': '<a target="_blank" href="https://test.scoma.io">Scoma.io</a>',
        'descriptionRU': '<p>Запустили в открытом бета-тесте образовательную платформу test.scoma.io и начали запись более 20 онлайн-курсов на различную тематику.</p> ',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2018,
        'month': 'mar',
        'countries': 22,
        'users': 1820000,
        'employees': 18,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'CRME',
        'titleRU': 'Английский канал <a target="_blank" href="http://t.me/crownmediaeng">CrownMedia</a>',
        'titleEN': 'Английский канал <a target="_blank" href="http://t.me/crownmediaeng">CrownMedia</a>',
        'descriptionRU': '<p>Начали выпуск контента на английском языке для нашего Telegram канала CrownMedia</p> ',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2018,
        'month': 'apr',
        'countries': 22,
        'users': 1920000,
        'employees': 19,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'WBNRBLOG',
        'titleRU': '<a target="_blank" href="http://crownmedia.su/">Вебинар</a> + <a target="_blank" href="http://t.me/crownmediaeng">Блог</a>',
        'titleEN': '<a target="_blank" href="https://blog.crownmedia.su/">Вебинар</a> + <a target="_blank" href="http://t.me/crownmediaeng">Блог</a>',
        'descriptionRU': '<p>Отсняли и смонтировали наш первый вебинар на тему создания собственного онлайн-бизнеса и получили больше 17000 просмотров</p> <p>Также в этом месяце запустили блог для каналов CrownMedia для получения дополнительного трафика на наши Telegram каналы.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
      {
        'year': 2018,
        'month': 'may',
        'countries': 22,
        'users': 2050000,
        'employees': 19,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'ECIR',
        'titleRU': '<a target="_blank" href="https://ecir.pro">Ecir.pro</a>',
        'titleEN': '<a target="_blank" href="https://ecir.pro">Ecir.pro</a>',
        'descriptionRU': '<p>Запустили английскую версию систему ECIR для иностранных пользователей.</p>',
        'descriptionEN': '<p>en</p><p>text</p>'
      },
    ],
    slides: [
      {
        logo: 'instalex.svg',
        link: 'https://instalex.ru',
        titleRU: 'Instalex.ru',
        titleEN: 'Instalex.ru',
        descriptionRU: '<p>Многофункциональный онлайн-сервис для упрвавления своими Instagram аккаунтами для личного и коммерческого использования.</p><p>Подробная статистика и аналитика продвижения. Инструменты для автоматизации работы с Instagram.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'ecir.svg',
        link: 'https://ecir.ru',
        titleRU: 'Ecir.ru',
        titleEN: 'Ecir.ru',
        descriptionRU: '<p>Магазин цифровых товаров для социальных сетей. Маркетплейс для продвижения своих аккаунтов и групп в социальных сетях. Мультиязычная платформа для брендов, представителей бизнеса и малого бизнеса.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'adfixed.svg',
        link: 'https://adfixed.com',
        titleRU: 'ADFixed.com',
        titleEN: 'ADFixed.com',
        descriptionRU: '<p>Digital агентство полного цикла. Создание продающих сайтов, лендингов, сервис и сложных Saas проектов. Настройка контекстной рекламы и SEO аудит для сайтов.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'kepr.svg',
        link: 'https://onthebackgroundofcarpet.cc',
        titleRU: 'onthebackgroundofcarpet.cc',
        titleEN: 'onthebackgroundofcarpet.cc',
        descriptionRU: '<p>Разработка видео-роликов под ключ, создание бренда и видео-логотипов, озвучка и монтаж видеороликов, выездная съемка мероприятий в Москве и любая работа с 2D и 3D видео-анимацией.</p><p>Запуск проекта намечен на конец 2018 года.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'scoma.svg',
        link: 'https://test.scoma.io',
        titleRU: 'test.scoma.io',
        titleEN: 'test.scoma.io',
        descriptionRU: '<p>Образовательная платформа нового поколения. Профессиональный инструмент для получения дополнительного профильного образования онлайн</p>',
        descriptionEN: '3'
      },
      {
        logo: 'crownmedia.svg',
        link: 'https://t.me/crownmedia',
        titleRU: 't.me/crownmedia',
        titleEN: 't.me/crownmedia',
        descriptionRU: '<p>Авторский Telegram канал Александра Метелева на тему бизнеса в России. Рассказы об успешных, и не очень, стартапах, истории успеха людей из списка Форбс и обзоры на различный онлайн-сервисы.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'crownmedia-blog.svg',
        link: 'https://blog.crownmedia.su',
        titleRU: 'blog.crownmedia.su',
        titleEN: 'blog.crownmedia.su',
        descriptionRU: '<p>Авторский блог Александра Метелева для тех, кто не привык читать большие посты в мессенджере и остается любителем классической разметки статей на большом экране.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'wbnr.svg',
        link: 'http://crownmedia.su',
        titleRU: 'crownmedia.su',
        titleEN: 'crownmedia.su',
        descriptionRU: '<p>Большой вебинар на тему запуска собственного онлайн-бизнеса в 2018 году. Разбор кейсов и сравнение с сетевым бизнесом и работе по программе франшизы.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'instalex.svg',
        link: 'http://instalex.ru/franchise',
        titleRU: 'Instalex франшизы',
        titleEN: 'Instalex франшизы',
        descriptionRU: '<p>Франшиза готового бизнеса, работающая на основе аренды системы instalex.ru.Более 170 запущенных дилеров по всему миру.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'ecir.svg',
        link: 'https://ecir.ru/site/franchise',
        titleRU: 'Ecir франшизы',
        titleEN: 'Ecir франшизы',
        descriptionRU: '<p>Франшизы онлайн-платформы ecir.ru. Готовый бизнес с запуском собственного магазина товаров для социальных сетей за 5 рабочих дней.</p>',
        descriptionEN: '3'
      },
      {
        logo: 'book.svg',
        link: 'https://instalex.co',
        titleRU: 'Instalex.co',
        titleEN: 'Instalex.co',
        descriptionRU: '<p>Книга “Стань Звездой Instagram” бестселлер 2017 года. Более 15000 продаж. 117 секретов и кейсов продвижения своего аккаунта в Instagram и привлечение живой и активной аудитории для своего профиля.</p>',
        descriptionEN: '3'
      }
    ]
  },
  methods: {
    selectYear: function (year) {
      if (this.year !== year) {
        document.querySelector('.history__left-col').classList.add('history__left-col--animate');
        setTimeout(function() {
          for (var i = 0; i < app.projects.length; i++) {
            if(app.projects[i].year === year) {
              app.month = app.projects[i].month;
              app.year = year;
              app.mapCircleId = app.projects[i].mapCircleId;
              app.currentLogo = app.projects[i].currentLogo;
              app.currentCountries = app.projects[i].countries;
              app.currentUsers = app.projects[i].users;
              app.currentEmployees = app.projects[i].employees;
              break;
            }
          };
          document.querySelector('.history__left-col').classList.remove('history__left-col--animate');
        }, 800);
      }
    },
    selectMonth: function (month, mapCircleId, currentLogo, currentCountries, currentUsers, currentEmployees) {
      if (this.month !== month) {
        document.querySelector('.history__left-col').classList.add('history__left-col--animate');
        setTimeout(function() {
          app.month = month;
          app.mapCircleId = mapCircleId;
          app.currentLogo = currentLogo;
          app.currentCountries = currentCountries;
          app.currentUsers = currentUsers;
          app.currentEmployees = currentEmployees;
          document.querySelector('.history__left-col').classList.remove('history__left-col--animate');
        }, 800);
      }
    },
    translateMonth: function (language, month) {
      return this.months[language][month];
    },
    renderString: function (year, month, language, string) {
      for (var i = 0; i < this.projects.length; i++) {
        if (this.projects[i].year === year && this.projects[i].month === month) {
          return this.projects[i][string + language];
        }
      }
    },
    renderDate: function (year, month) {
      var dateString = year + '’' + this.months['NUMBERS'][month];
      return dateString;
    },
    renderBar: function (now, full) {
      var onePercent = 100 / full;
      var currentPercent = onePercent * now;
      var stringPercent = currentPercent + '%';
      return stringPercent;
    },
    isCurrentYear: function (year) {
      if (year === this.year) {
        return true;
      }
    },
    isCurrentMonth: function (month) {
      if (month === this.month) {
        return true;
      }
    },
    isCurrentCircle: function (mapCircleId) {
      for (var i = 0; i < this.mapCircleId.length; i++) {
        if (mapCircleId === this.mapCircleId[i]) {
          return true;
        }
      }
    },
    isCurrentLogo: function (currentLogo) {
      if (currentLogo === this.currentLogo) {
        return true;
      }
    },
    preShowSlides: function () {
      document.querySelector('.history__slides').classList.add('history__slides--preshow');
    },
    hidePreShowSlides: function () {
      document.querySelector('.history__slides').classList.remove('history__slides--preshow');
    },
    showSlides: function () {
      document.querySelector('.history__inner').classList.add('history__inner--hidden');
      document.querySelector('.history__slides').classList.add('history__slides--active');
    },
    hideSlides: function () {
      document.querySelector('.history__inner').classList.remove('history__inner--hidden');
      document.querySelector('.history__slides').classList.remove('history__slides--active');
    },
    renderSlideString: function (string, language, index) {
      return this.slides[index][string + language];
    }
  },
  mounted: function () {

    var projectsCount = 0;

    for (var i = 0; i < this.projects.length; i++) {
      projectsCount = projectsCount + 1;
    }

    this.totalCountries = this.projects[projectsCount-1].countries;
    this.totalUsers = this.projects[projectsCount-1].users;
    this.totalEmployees = this.projects[projectsCount-1].employees;

  },
  computed: {
    animatedCountries: function() {
      return this.tweenedCountries.toFixed(0);
    },
    animatedUsers: function() {
      return this.tweenedUsers.toFixed(0);
    },
    animatedEmployees: function() {
      return this.tweenedEmployees.toFixed(0);
    }
  },
  watch: {
    currentCountries: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedCountries: newValue });
    },
    currentUsers: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedUsers: newValue });
    },
    currentEmployees: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedEmployees: newValue });
    }
  },
});

var os = new OnScreen();

$(document).ready(function(){
  $('.history__slides-list').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    appendArrows: $(".history__slides-nav"),
    prevArrow: '<div class="history__slides-prev"><img src="img/icons/history-slide-prev.svg" alt="prev"><span>Назад</span></div>',
    nextArrow: '<div class="history__slides-next"><span>Далее</span><img src="img/icons/history-slide-next.svg" alt="next"></div>',
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
      breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  });

  os.on('enter', '.mission__title', (element, event) => {
    element.classList.add('mission__title--active');
  });

  var todayChecked = false;

  os.on('enter', '.today__h1', (element, event) => {
    element.classList.add('today__h1--active');

    if (todayChecked === false) {
      $('.today__item--projects').animateNumber({ number: 16 });
      $('.today__item--fr').animateNumber({ number: 190 });
      $('.today__item--years').animateNumber({ number: 6 });
      $('.today__item--users').animateNumber({ number: 2 });
      $('.today__item--contry').animateNumber({ number: 22 });
      $('.today__item--emp').animateNumber({ number: 19 });
      todayChecked = true;
    }

  });

  os.on('enter', '.history__title-span', (element, event) => {
    element.classList.add('history__title-span--active');
  });

  os.on('enter', '.work__headline', (element, event) => {
    element.classList.add('work__headline--active');
  });

  os.on('enter', '.contacts__headline', (element, event) => {
    element.classList.add('contacts__headline--active');
  });


});