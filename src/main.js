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
const iconEl = document.querySelector('.img__weather');
const iconPar = document.querySelector('.wha');

// window.addEventListener('load', function () {
//   weather();
// });
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
  let city = 'New York';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );
  const data = await response.json();
  const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
  // textcontent
  // console.log(data); // data for weather now

  const [weatherEl] = data.weather;
  // console.log(weatherEl); // dat for inormation weather
  const wearherCode = weatherEl.id;
  // console.log(wearherCode); // 701
  // <img
  // <img src="" alt="" class="img__weather"/>
  const icons = weatherEl.icon;
  // const iconPath = `../images/icons/04d.png`;
  //   const imgElement = document.getElementById('img__weather');
  // iconEl.src = `../images/icons/01d.png`
  // iconPar.innerHTML = `<img src="../images/icons/01d.png" alt="" class="img__weather"/>`
  // if (wearherCode >= 701 && wearherCode < 783) {

  //   console.log(imgElement);
  // }
  // const {el} = data.weather;
  // console.log(el); cl
  // console.log();
  const el3 = data.weather[0].icon;
  console.log(el3);
  // iconEl.src = 
  iconPar.innerHTML = `<img  src ="../images/icons/${el3}.png ">`;;
  const wetaherClear = weatherEl.main;
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
  // console.log(date.getDay());
  // const listArr = Object.values(list);

  // listArr.forEach(list => {
  //   const dayList = list.dt_txt;
  //   const data1 = dayList.split(' ')[0];
  //   const date = new Date(data1);
  //   const day = date.getDay();
  //   const weeek = dayWeek[day];
  //   console.log(weeek);
  //   days.forEach(day => {
  //     // day.textContent = weeek;
  //     // console.log(day.textContent = weeek);
  //   });
  // });

  let elmentOfpop = list.pop;
  rainEl.textContent = elmentOfpop;
  // const listaRR = data.list;
  // // console.log(listaRR.filter(el => console.log(el.main.temp)));
  // console.log(data);
}

weather();

// searchWeather.addEventListener('click', function () {
//   let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
//   let monthNames = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const dayNames = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'saturday',
//   ];
//   const dayWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat'];
//   const cityel = inputCityWeather.value;
//   const el2 = cityel
//     .split(' ')
//     .map(el => el[0].toUpperCase() + el.slice(1))
//     .join();
//   textCity.textContent = el2;

//   let city = el2;

//   async function weather() {
//     const response = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//     );
//     // console.log(response);
//     const data = await response.json();
//     const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
//     weatherTemperature.textContent = temperature;

//     const [weatherEl] = data.weather;
//     const wetaherClear = weatherEl.main;
//     const wind = data.wind.speed;
//     const humidity = data.main.humidity;
//     const lat = data.coord.lat;
//     const lon = data.coord.lon;
//     const cloudy = data.clouds.all;

//     cloundyEl.textContent = cloudy;
//     clear.textContent = wetaherClear;
//     windEl.textContent = wind;
//     humidityEl.textContent = humidity;
//     const date = new Date();
//     const month = date.getMonth();
//     const mountName = monthNames[month];

//     const day = date.getDate();
//     const whatDay = date.getDay();
//     const currentDay = dayNames[whatDay];
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     const year = date.getFullYear();
//     const dateFullEl = document.querySelector('.weather__date');
//     dateFullEl.textContent = `${hour}:${minute} - ${currentDay}, ${day} ${mountName} ${year}`;

//     getAllweather(lat, lon);
//   }
//   // https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&cnt=5&units=metric
//   async function getAllweather(lat, lon) {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
//     );
//     const data = await res.json();
//     console.log(data);
//     const list = data.list;
//     const date = new Date();
//     // console.log(date.getDay());
//     const listArr = Object.values(list);

//     listArr.forEach(list => {
//       const dayList = list.dt_txt;
//       const data1 = dayList.split(' ')[0];
//       const date = new Date(data1);
//       const day = date.getDay();
//       const weeek = dayWeek[day];
//       console.log(weeek);
//       days.forEach(day => {
//         // day.textContent = weeek;
//         // console.log(day.textContent = weeek);
//       });
//     });

//     const elmentOfpop = list.pop;
//     rainEl.textContent = elmentOfpop;
//     // const listaRR = data.list;
//     // // console.log(listaRR.filter(el => console.log(el.main.temp)));
//     // console.log(data);
//   }

//   weather();
// });
