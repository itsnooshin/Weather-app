'use strict';

// async function weather() {
//   const apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
//   let lat = ''
//   const api = await fetch(
//     `https://[api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apikey}`
//   );
//   console.log(api);
//   const data = await api.json();
//   console.log(data);
// }
// weather();

let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
let city = 'london';
// fetch(
//   `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
// )
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Error');
//   })
//   .then(data => {
//     console.log(data);
//     const temp =  Math.round((data.main.temp - 273.15).toFixed(2)) ;
//     const cityName = data.name;
//     const [cloudyPer] = Object.values(data.clouds);
//     console.log(`The current city is ${cityName} and the temperature is ${temp}`);
//   });
const weather = async function () {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );
  if (response.ok) {
    const data = await response.json();
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    console.log(lat, lon);
    console.log(data);
    getAllweather(lat, lon);
  }
};
weather();
// for next days
const getAllweather = async function (lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=da13c92adcb97e26e489d8a4eccc88b9`
  );
  const data = await res.json();
  console.log(data);
};

