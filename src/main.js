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
const maxTemp = document.querySelectorAll('.tem__max');
const minTemp = document.querySelectorAll('.tem__min');
const week = document.querySelector('.weather__week-info');
const imges = document.querySelectorAll('.img__weather-week');

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
const dayWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat'];
// https://api.openweathermap.org/data/2.5/onecall?lat=tehran&lon=${cityLon}&exclude=minutely,hourly,current&units=metric&appid=da13c92adcb97e26e489d8a4eccc88b9
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
    if (weatherEl.main === 'Clear' && weatherEl.id === 800) {
      const img = document.querySelector('.img__weather');
      img.src = '/clear.629910ed.png';
      document.body.style.backgroundImage = 'url(/day-clear-beah.8755332a.jpg)';
    }
    if (
      weatherEl.main === 'Clear' &&
      weatherEl.id === 800 &&
      weatherEl.icon === '01n'
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
      weatherEl.main === 'Mist' ||
      weatherEl.main === 'Haze' ||
      weatherEl.main === 'Smoke' ||
      weatherEl.main === 'Dust' ||
      weatherEl.main === 'Fog' ||
      weatherEl.main === 'Ash' ||
      weatherEl.main === 'Squall' ||
      (weatherEl.main === 'Tornado' &&
        weatherEl.id >= 701 &&
        weatherEl.id <= 781)
    ) {
      // console.log('k');
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
}

weather();

async function getAllweather(lat, lon) {
  let YOUR_API_KEY = 'da13c92adcb97e26e489d8a4eccc88b9';
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${YOUR_API_KEY}&units=metric`
  );
  const data = await res.json();
  console.log(data);
  const forecastList = data.list;
  const currentDate = new Date();
  // Filter the forecast data for the next 5 days
  const nextDays = forecastList.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    let el = new Date(itemDate);
    // console.log(el);
    //  console.log(el);
    if (itemDate.getDate() !== currentDate.getDate()) {
      const day = new Date(itemDate);
      // console.log(itemDate.getDate(), currentDate.getDate());
      return itemDate.getDate();
    }
  });

  nextDays.forEach(item => {
    const itemdate = new Date(item.dt * 1000);

    const newdel = itemdate.toString().slice(0, 15);
  });

  const obj = {};

  for (const [key, value] of Object.entries(forecastList)) {
    const nextDays = forecastList.filter(item => {
      // console.log(item.weather);
      const itemDate = new Date(item.dt * 1000);
      const newdel = itemDate.toString().slice(0, 15);
      let temp = item.main.temp;

      if (itemDate.getDate() !== currentDate.getDate()) {
        let weather = item.weather[0];

        if (!obj[newdel]) {
          obj[newdel] = {
            min: temp,
            max: temp,
            image: weather,
          };
        } else {
          obj[newdel].min = Math.round(Math.min(obj[newdel].min, temp));
          // console.log(temp, itemDate);
          obj[newdel].max = Math.round(Math.max(obj[newdel].max, temp));
          obj[newdel].image = weather;
        }
        return itemDate.getDate();
      }
    });
  }

  console.log(obj);
  const element = Object.entries(obj);

  for (let i = 0; i < element.length; i++) {
    const el = element[i];
    const day = days[i];
    const newel = new Date(el[0]);
    const option = { weekday: 'short' };
    const wwkOfday = newel.toLocaleDateString('en-US', option);
    const mint = minTemp[i];
    const maxt = maxTemp[i];
    mint.textContent = el[1].min;
    maxt.textContent = el[1].max;
    day.textContent = wwkOfday;
    // console.log(el, el[1].image);
    // console.log(el[1].image.main);
    // console.log(imges[i].src);
    if (el[1].image.main === 'Clear') {
      imges[i].src = '/clear.629910ed.png';
    }
    if (el[1].image.main === 'Clouds') {
      imges[i].src = '/cloudy-weather.ea7810a0.png';
    }
    if (el[1].image.main === 'Rain') {
      console.log(imges[i]);
      imges[i].src = '/rain-iconpng.0d69055a.png';
    }

    // 'Clouds' , 'Rain' , 'Rain' , Clear
  }
}

searchWeather.addEventListener('click', function () {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
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

    if (weatherEl.main === 'Clear' && weatherEl.id === 800) {
      const img = document.querySelector('.img__weather');
      img.src = '/clear.629910ed.png';
      document.body.style.backgroundImage = 'url(/day-clear-beah.8755332a.jpg)';
    }
    if (
      weatherEl.main === 'Clear' &&
      weatherEl.id === 800 &&
      weatherEl.icon === '01n'
    ) {
      const img = document.querySelector('.img__weather');
      img.src = '/night.422c4a31.png';
      document.body.style.backgroundImage = 'url(/clear-night.474935b4.jpg)';
      // console.log();
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
      weatherEl.main === 'Mist' ||
      weatherEl.main === 'Smoke' ||
      weatherEl.main === 'Haze'
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
    // console.log(data);
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
    });

    const elmentOfpop = list.pop;
  }

  weather();
});
