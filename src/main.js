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

// <span class="clock-hour">12</span>:<span class="clock-minute">30</span> - <span class="clock-day">Thursday </span><span class="clock-date">22</span>, <span class="clock-month">06</span>  <span class="clock-year">2021</span>

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
  const cityel = inputCityWeather.value;
  const el2 = cityel
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join();
  textCity.textContent = el2;

  let city = el2;

  async function weather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    console.log(response);
    const data = await response.json();
    const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
    weatherTemperature.textContent = temperature;
    console.log(temperature);
    console.log(data.weather);
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
    dateFullEl.textContent = `${hour}:${minute} - ${currentDay}, ${day} ${mountName} ${year}`
   
    getAllweather(lat, lon);
  }
  async function getAllweather(lat, lon) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
    );
    const data = await res.json();
    const [list] = data.list;
    const elmentOfpop = list.pop;
    rainEl.textContent = elmentOfpop;
  }

  weather();
});

// const weather = async function () {
//   let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
//   let city = 'tehran';

//   const response = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//   );
//   if (response.ok) {
//     const data = await response.json();
//     const lat = data.coord.lat;
//     const lon = data.coord.lon;
//     const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
//     // console.log(temperature);
//     // console.log(data);
//     // console.log(data.main);
//     const [cloudyPer] = Object.values(data.clouds);
//     // console.log(data);
//     getAllweather(lat, lon);
//   }
// };
// weather();
// // for next days
// const getAllweather = async function (lat, lon) {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
//   );
//   const data = await res.json();
//   // console.log(data.list);
//   const [list] = data.list;
//   // console.log(data);
//   const elmentOfpop = list.pop;
//   // console.log(elmentOfpop);
// };
