'use strict';
const weatherTemperature = document.querySelector('.temp');
const inputCityWeather = document.querySelector('.input__text');
const searchWeather = document.querySelector('.form__button');
const textCity = document.querySelector('.weather__city');
const clear = document.querySelector('.weather__title--type');
const humidityEl = document.querySelector('.numer-hum');
const cloundyEl = document.querySelector('.cloud-num');
const windEl = document.querySelector('.wind-num');
const rainEl = document.querySelector('.rain-num');
const days = document.querySelectorAll('.day');
const citiesPrev = document.querySelectorAll('.title__cities');

let monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'saturday',
];

async function weather() {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
  let city = 'Tehran';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );
  if (response.ok) {
    const data = await response.json();
    const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));

    const [weatherEl] = data.weather;

    const icons = weatherEl.icon;

    const el3 = data.weather[0].icon;
    const wetaherClear = weatherEl.description;

    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const cloudy = data.clouds.all;
    weatherTemperature.textContent = temperature;
    textCity.textContent = city;
    cloundyEl.textContent = cloudy;
    clear.textContent = wetaherClear;
    windEl.textContent = wind;
    humidityEl.textContent = humidity;
    //  date display in background
    const date = new Date();
    const month = date.getMonth();
    const mountName = monthNames[month];
    const day = date.getDate();
    const whatDay = date.getDay();
    const currentDay = dayNames[whatDay];
    const hour = date.getHours();
    const minute = date.getMinutes();
    const year = date.getFullYear();
    const dateFullEl = document.querySelector('.weather__date');
    dateFullEl.textContent = `${hour}:${minute} - ${currentDay}, ${day} ${mountName} ${year}`;
    console.log(weatherEl);
    if (weatherEl.main === 'Clear' && weatherEl.id === 800) {
      const img = document.querySelector('.img__weather');
      img.src = '/clear.629910ed.png';
      document.body.style.backgroundImage = 'url(/day-clear-beah.8755332a.jpg)';
    }
    if (
      weatherEl.main === 'Clear' &&
      weatherEl.id === 800 &&
      weatherEl.iocn === '01n'
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/night.422c4a31.png';
      document.body.style.backgroundImage = 'url(/clear-night.474935b4.jpg)';
    }
    if (
      weatherEl.main === 'Clouds' &&
      weatherEl.id >= 801 &&
      weatherEl.id <= 804
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/cloudy-weather.ea7810a0.png';
    }

    if (
      weatherEl.main === 'Rain' &&
      weatherEl.id >= 500 &&
      weatherEl.id <= 531
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/rain-iconpng.0d69055a.png';
      document.body.style.backgroundImage = 'url(/rain-weather.cd3a6594.jpg)';
    }
    if (
      weatherEl.main === 'Mist' &&
      weatherEl.id >= 701 &&
      weatherEl.id <= 781
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/iconizer-weather.f6570355.svg';
      document.body.style.backgroundImage = 'url(/foggy-forest-4.6d264000.jpg)';
    }
    if (
      weatherEl.main === 'Snow' &&
      weatherEl.id >= 600 &&
      weatherEl.id <= 622
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/snow-icon-color.2f365575.png';
      // document.body.style.backgroundImage = 'url(/)';
      document.body.style.backgroundImage =
        'url(/nature-dark-snow-water-wallpaper.736d400a.jpg)';
    }
    if (
      weatherEl.main === 'Thunderstorm' &&
      weatherEl.id >= 200 &&
      weatherEl.id <= 232
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/thunderstorm-icon.2dd16e4c.png';
      document.body.style.backgroundImage =
        'url(/Thunderstorm-weather.4c552d96.jpg)';
    }
    getAllweather(lat, lon);
  }

  // console.log(data); // data for weather now
  //  snow , rain , Drizzle , Thunderstorm , Clear	, Clouds
}

weather();

async function getAllweather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
  );
  const data = await res.json();
  console.log(data);
  const [list] = data.list;
  const date = new Date();

  let elmentOfpop = list.pop;
  console.log(elmentOfpop);
  rainEl.textContent = elmentOfpop;
}

weather();

searchWeather.addEventListener('click', function () {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'saturday',
  ];
  const dayWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat'];
  const cityel = inputCityWeather.value;
  const el2 = cityel
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
  textCity.textContent = el2;

  let city = el2;

  async function weather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    // console.log(response);
    const data = await response.json();
    const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
    weatherTemperature.textContent = temperature;

    const [weatherEl] = data.weather;
    const wetaherClear = weatherEl.main;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const cloudy = data.clouds.all;

    cloundyEl.textContent = cloudy;
    clear.textContent = wetaherClear;
    windEl.textContent = wind;
    humidityEl.textContent = humidity;
    const date = new Date();
    const month = date.getMonth();
    const mountName = monthNames[month];

    const day = date.getDate();
    const whatDay = date.getDay();
    const currentDay = dayNames[whatDay];
    const hour = date.getHours();
    const minute = date.getMinutes();
    const year = date.getFullYear();
    const dateFullEl = document.querySelector('.weather__date');
    dateFullEl.textContent = `${hour}:${minute} - ${currentDay}, ${day} ${mountName} ${year}`;
    console.log(weatherEl);

    if (weatherEl.main === 'Clear' && weatherEl.id === 800) {
      const img = document.querySelector('.img__weather');
      img.src = '/clear.629910ed.png';
      document.body.style.backgroundImage = 'url(/day-clear-beah.8755332a.jpg)';
    }
    if (
      weatherEl.main === 'Clear' &&
      weatherEl.id === 800 &&
      weatherEl.iocn === '01n'
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/night.422c4a31.png';
      document.body.style.backgroundImage = 'url(/clear-night.474935b4.jpg)';
    }
    if (
      weatherEl.main === 'Clouds' &&
      weatherEl.id >= 801 &&
      weatherEl.id <= 804
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/cloudy-weather.ea7810a0.png';
      document.body.style.backgroundImage = 'url(/cloudy-weather.38153706.png)';
    }

    if (
      weatherEl.main === 'Rain' &&
      weatherEl.id >= 500 &&
      weatherEl.id <= 531
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/rain-iconpng.0d69055a.png';
      document.body.style.backgroundImage = 'url(/rain-weather.cd3a6594.jpg)';
    }
    if (
      weatherEl.main === 'Mist' &&
      weatherEl.id >= 701 &&
      weatherEl.id <= 781
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/iconizer-weather.f6570355.svg';
      document.body.style.backgroundImage = 'url(/foggy-forest-4.6d264000.jpg)';
    }
    if (
      weatherEl.main === 'Snow' &&
      weatherEl.id >= 600 &&
      weatherEl.id <= 622
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/snow-icon-color.2f365575.png';
      // document.body.style.backgroundImage = 'url(/)';
      document.body.style.backgroundImage =
        'url(/nature-dark-snow-water-wallpaper.736d400a.jpg)';
    }
    if (
      weatherEl.main === 'Thunderstorm' &&
      weatherEl.id >= 200 &&
      weatherEl.id <= 232
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/thunderstorm-icon.2dd16e4c.png';
      document.body.style.backgroundImage =
        'url(/Thunderstorm-weather.4c552d96.jpg)';
    }

    getAllweather(lat, lon);
  }
  // https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&cnt=5&units=metric
  async function getAllweather(lat, lon) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
    );
    const data = await res.json();
    console.log(data);
    const list = data.list;
    const date = new Date();
    // console.log(date.getDay());
    const listArr = Object.values(list);

    listArr.forEach(list => {
      const dayList = list.dt_txt;
      const data1 = dayList.split(' ')[0];
      const date = new Date(data1);
      const day = date.getDay();
      const weeek = dayWeek[day];
      // console.log(weeek);
      days.forEach(day => {
        // day.textContent = weeek;
        // console.log(day.textContent = weeek);
      });
    });

    const elmentOfpop = list.pop;
    // rainEl.textContent = elmentOfpop;
    // const listaRR = data.list;
    // // console.log(listaRR.filter(el => console.log(el.main.temp)));
    // console.log(data);
    // console.log(object.value(list));
  }

  weather();
});

citiesPrev.forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log(btn.textContent);
  });
});
