'use strict';
const weatherTemperature = document.querySelector('.temp');
const inputCityWeather = document.querySelector('.input__text');
const searchWeather = document.querySelector('.form__button');
const textCity = document.querySelector('.weather__city');

function cityWeather() {
  // const cityel = inputCityWeather.value;
  // const el2 = cityel.split(' ').map(el => el[0].toUpperCase() + el.slice(1));
  // textCity.textContent = el2;
}

// inputCityWeather.addEventListener('input', cityWeather);

searchWeather.addEventListener('click', function () {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
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
    // weatherTemperature.textContent = temperature ;
    weatherTemperature.textContent  = temperature;
    console.log(temperature);
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
