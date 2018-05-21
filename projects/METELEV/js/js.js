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
        'titleRU': 'Инсталекс.рф',
        'titleEN': 'Инсталекс.рф',
        'descriptionRU': '<p>Первая версия нашего будущего сервиса для автоматизации работы с Instagram аккаунтами, в виде скрипта для работ с 1 аккаунтом</p><p>и минимальным набором функционала: массфоловинг и масслайкинг без критериев и фильтров.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2013,
        'month': 'oct',
        'countries': 1,
        'users': 200,
        'employees': 2,
        'mapCircleId': [15],
        'currentLogo': 'ITLX',
        'titleRU': 'instalex.ru',
        'titleEN': 'instalex.ru',
        'descriptionRU': '<p>Полный ребрендинг платформы инсталекс.рф и запуск полноценной облачной платформы Instalex.ru для автоматизации работы</p><p>с Instagram аккаунтами в неограниченном количестве. Открыли офис для разработчиков.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2014,
        'month': 'may',
        'countries': 2,
        'users': 15000,
        'employees': 3,
        'mapCircleId': [15, 3],
        'currentLogo': 'ITFR',
        'titleRU': 'Франшиза <span>Instalex</span>',
        'titleEN': 'Франшиза <span>Instalex</span>',
        'descriptionRU': '<p>Начало масштабирования платформы Instalex путем запуска международных дилеров-партнеров в других странах.</p><p>Начало масштабирования платформы Instalex путем запуска международных дилеров-партнеров в других странах.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2015,
        'month': 'oct',
        'countries': 5,
        'users': 70000,
        'employees': 3,
        'mapCircleId': [15, 3, 22, 21, 1],
        'currentLogo': 'ITFR',
        'titleRU': 'Франшиза <span>Instalex</span>',
        'titleEN': 'Франшиза <span>Instalex</span>',
        'descriptionRU': '<p>Усиление позиций платформы Instalex на международном рынке, запуск новых дилеров и привлечения еще большего количества </p><p>пользователей и подключение новых франшиз в новых для нас странах</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2016,
        'month': 'aug',
        'countries': 9,
        'users': 300000,
        'employees': 6,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16],
        'currentLogo': 'ADFX',
        'titleRU': 'Рекламное агентство <span>ADFixed</span>',
        'titleEN': 'Рекламное агентство <span>ADFixed</span>',
        'descriptionRU': '<p>Запуск рекламного агентства полного цикла по созданию сайтов и настройке рекламных каналов для привлечения трафика.</p><p>Разработка проекта и подготовка всех материалов для начала работы заняла более полугода. </p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2017,
        'month': 'feb',
        'countries': 13,
        'users': 530000,
        'employees': 11,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17],
        'currentLogo': 'ECIR',
        'titleRU': '<span>ecir.ru</span>',
        'titleEN': '<span>ecir.ru</span>',
        'descriptionRU': '<p>Запуск магазина цифровых товаров для социальных сетей. Разработка системы и запуск первого рекламного канала занял у нас около 2 недель.</p><p>Первая версия системы понравилась пользователям, но требовала серьезной доработки в плане интерфейса и качества товаров.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2017,
        'month': 'may',
        'countries': 16,
        'users': 790000,
        'employees': 13,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4],
        'currentLogo': 'ITLX',
        'titleRU': '<span>instalex.pro</span>',
        'titleEN': '<span>instalex.pro</span>',
        'descriptionRU': '<p>Запуск англоязычной версии сервиса Instalex.ru для зарубежных пользователей. Мы получили больше 50 тысяч регистраций, всего за первый месяц работы.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2017,
        'month': 'nov',
        'countries': 20,
        'users': 1100000,
        'employees': 15,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19],
        'currentLogo': 'BOOK',
        'titleRU': 'Книга <span>instalex.co</span>',
        'titleEN': 'Книга <span>instalex.co</span>',
        'descriptionRU': '<p>Наша лаборатория выпустила книгу «Стань Звездой Instagram» на русском языке.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2017,
        'month': 'dec',
        'countries': 20,
        'users': 1580000,
        'employees': 16,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19],
        'currentLogo': 'CRME',
        'titleRU': 'СrownMedia <span>телеграм канал</span>',
        'titleEN': 'СrownMedia <span>телеграм канал</span>',
        'descriptionRU': '<p>Запустили авторский телеграм канал Александра Метелева. За первый месяц собрали больше 1000 активных подписчиков для блога и вложили 5000$</p><p>в рекламу этого канала на популярных Telegram площадках в СНГ.</p> ',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2018,
        'month': 'feb',
        'countries': 21,
        'users': 1700000,
        'employees': 17,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12],
        'currentLogo': 'SCMA',
        'titleRU': '<span>Scoma.io</span>',
        'titleEN': '<span>Scoma.io</span>',
        'descriptionRU': '<p>Запустили в открытом бета-тесте образовательную платформу test.scoma.io и начали запись более 20 онлайн-курсов на различную тематику.</p> ',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2018,
        'month': 'mar',
        'countries': 22,
        'users': 1820000,
        'employees': 18,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'CRME',
        'titleRU': 'Английский канал <span>CrownMedia</span>',
        'titleEN': 'Английский канал <span>CrownMedia</span>',
        'descriptionRU': '<p>Начали выпуск контента на английском языке для нашего Telegram канала CrownMedia</p> ',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2018,
        'month': 'apr',
        'countries': 22,
        'users': 1920000,
        'employees': 19,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'WBNRBLOG',
        'titleRU': '<span>Вебинар</span> + <span>Блог</span>',
        'titleEN': '<span>Вебинар</span> + <span>Блог</span>',
        'descriptionRU': '<p>Отсняли и смонтировали наш первый вебинар на тему создания собственного онлайн-бизнеса и получили больше 17000 просмотров</p> <p>Также в этом месяце запустили блог для каналов CrownMedia для получения дополнительного трафика на наши Telegram каналы.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
      {
        'year': 2018,
        'month': 'may',
        'countries': 22,
        'users': 2050000,
        'employees': 19,
        'mapCircleId': [15, 3, 22, 21, 1, 11, 20, 5, 16, 9, 8, 6, 17, 13, 7, 4, 2, 18, 14, 19, 12, 10],
        'currentLogo': 'ECIR',
        'titleRU': '<span>Ecir.pro</span>',
        'titleEN': '<span>Ecir.pro</span>',
        'descriptionRU': '<p>Запустили английскую версию систему ECIR для иностранных пользователей.</p>',
        'descriptionEN': '<p>en</p><p>text</p>',
        'slideLogo': '123',
        'slideLink': '1234',
        'slideDesc': '12345'
      },
    ]
  },
  methods: {
    selectYear: function (year) {
      for (var i = 0; i < this.projects.length; i++) {
        if(this.projects[i].year === year) {
          this.month = this.projects[i].month;
          this.year = year;
          this.mapCircleId = this.projects[i].mapCircleId;
          this.currentLogo = this.projects[i].currentLogo;
          this.currentCountries = this.projects[i].countries;
          this.currentUsers = this.projects[i].users;
          this.currentEmployees = this.projects[i].employees;
          break;
        }
      }
    },
    selectMonth: function (month, mapCircleId, currentLogo, currentCountries, currentUsers, currentEmployees) {
      this.month = month;
      this.mapCircleId = mapCircleId;
      this.currentLogo = currentLogo;
      this.currentCountries = currentCountries;
      this.currentUsers = currentUsers;
      this.currentEmployees = currentEmployees;
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
  }
})

$(document).ready(function(){
  $('.history__slides-list').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    appendArrows: $(".history__slides-nav"),
    prevArrow: '<div class="history__slides-prev"><img src="img/icons/history-slide-prev.svg" alt="prev"><span>Назад</span></div>',
    nextArrow: '<div class="history__slides-next"><span>Далее</span><img src="img/icons/history-slide-next.svg" alt="next"></div>'
  });
});