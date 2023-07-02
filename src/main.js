import newImage from './images/clear-night.jpg';
import iconClear from './icons/night.png';
import iconClearday from './icons/clear.png';
import iconCloudy from './icons/cloudy-weather.png';
import iconmistday from './icons/iconizer-weather.svg';
import iconRainday from './icons/rain-iconpng.png';
import iconSnowday from './icons/snow-icon.png';
import iconThunderstormday from './icons/thunderstorm-icon.png';
import bcgimgDayClear from './images/day-clear-beah.jpg';
import bcgimgDayNight from './images/clear-night.jpg';
import bcgimgDayFogy from './images/fogy=-png.jpg';
import bcgimgDayRain from './images/rain-weather.jpg';
import bcgimgDaySnow from './images/snow-cloudy.jpg';
import bcgimgDayThunderstrom from './images/Thunderstorm-weather.jpg';
import bcgimgDayCloudy from './images/cloudy-weather.png';

('use strict');
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
const img = document.querySelector('.img__weather');

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

// date
const dateToday = function () {
  const date = new Date();
  const month = date.getMonth();
  const mountName = monthNames[month];
  const day = date.getDate();
  const whatDay = date.getDay();
  const currentDay = dayNames[whatDay];
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const year = date.getFullYear();
  const dateFullEl = document.querySelector('.weather__date');
  dateFullEl.textContent = `${hour}:${minute} - ${currentDay}, ${day} ${mountName} ${year}`;
};

const weatherCondition = function (weatherEl) {
  if (weatherEl.main === 'Clear' && weatherEl.id === 800) {
    img.src = `${iconClearday}`;
    // main.style.backgroundImage = 'url(../images/day-clear-beah.jpg)';
    document.body.style.background = `url(${bcgimgDayClear})`;
    document.body.style.backgroundSize = ' cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }
  if (
    weatherEl.main === 'Clear' &&
    weatherEl.id === 800 &&
    weatherEl.icon === '01n'
  ) {
    img.src = `${iconClear}`;

    document.body.style.background = `url(${bcgimgDayNight})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }
  if (
    weatherEl.main === 'Clouds' &&
    weatherEl.id >= 801 &&
    weatherEl.id <= 804
  ) {
    img.src = `${iconCloudy}`;
    document.body.style.backgroundImage = `url(${bcgimgDayCloudy})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }

  if (weatherEl.main === 'Rain' && weatherEl.id >= 500 && weatherEl.id <= 531) {
    img.src = `${iconRainday}`;
    document.body.style.backgroundImage = `url(${bcgimgDayRain})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }
  if (
    weatherEl.main === 'Mist' ||
    weatherEl.main === 'Haze' ||
    weatherEl.main === 'Smoke' ||
    weatherEl.main === 'Dust' ||
    weatherEl.main === 'Fog' ||
    weatherEl.main === 'Ash' ||
    weatherEl.main === 'Squall' ||
    (weatherEl.main === 'Tornado' && weatherEl.id >= 701 && weatherEl.id <= 781)
  ) {
    img.src = `${iconmistday}`;
    document.body.style.backgroundImage = `url(${bcgimgDayFogy})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }

  if (weatherEl.main === 'Snow' && weatherEl.id >= 600 && weatherEl.id <= 622) {
    img.src = `${iconSnowday}`;
    document.body.style.backgroundImage = `url(${bcgimgDaySnow})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }
  if (
    weatherEl.main === 'Thunderstorm' &&
    weatherEl.id >= 200 &&
    weatherEl.id <= 232
  ) {
    img.src = `${iconThunderstormday}`;
    document.body.style.backgroundImage = `url(${bcgimgDayThunderstrom})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapet';
    document.body.style.backgroundPosition = 'center';
  }
};

// the default weather city
const informationWeather = function (weatherEl, city, data) {
  const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
  weatherTemperature.textContent = temperature;
  const lat = data.coord.lat;

  const lon = data.coord.lon;
  const [weatherElCity] = data.weather;
  const icons = weatherElCity.icon;
  const el3 = data.weather[0].icon;
  const wetaherClear = weatherEl.description;
  const wind = data.wind.speed;
  const humidity = data.main.humidity;
  const cloudy = data.clouds.all;
  cloundyEl.textContent = cloudy;
  clear.textContent = wetaherClear;
  windEl.textContent = wind;
  humidityEl.textContent = humidity;
};

async function weather(weatherEl) {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
  let city = 'Tehran';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );
  if (response.ok) {
    textCity.textContent = city;
    const data = await response.json();
    const temperature = Math.ceil((data.main.temp - 273.15).toFixed(2));
    weatherTemperature.textContent = temperature;
    const [weatherEl] = data.weather;
    const icons = weatherEl.icon;
    const el3 = data.weather[0].icon;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    informationWeather(weatherEl, city, data);
    dateToday();
    weatherCondition(weatherEl);
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
  // console.log(data.pop);
  const forecastList = data.list;
  const currentDate = new Date();
  // Filter the forecast data for the next 5 days
  const nextDays = forecastList.filter(item => {
    // pop
    rainEl.textContent = item.pop;

    const itemDate = new Date(item.dt * 1000);
    let el = new Date(itemDate);
    if (itemDate.getDate() !== currentDate.getDate()) {
      const day = new Date(itemDate);
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
          obj[newdel].max = Math.round(Math.max(obj[newdel].max, temp));
          obj[newdel].image = weather;
        }
        return itemDate.getDate();
      }
    });
  }

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
    if (el[1].image.main === 'Clear') {
      imges[i].src = `${iconClearday}`;
    }
    if (el[1].image.main === 'Clouds') {
      imges[i].src = `${iconCloudy}`;
    }
    if (el[1].image.main === 'Rain') {
      imges[i].src = `${iconRainday}`;
    }
    if (el[1].image.main === 'Snow') {
      imges[i].src = `${iconSnowday}`;
    }
    if (el[1].image.main === 'Thunderstorm') {
      imges[i].src = `${iconThunderstormday}`;
    }
    if (
      el[1].image.main === 'Mist' ||
      el[1].image.main === 'Haze' ||
      el[1].image.main === 'Smoke' ||
      el[1].image.main === 'Dust' ||
      el[1].image.main === 'Squall' ||
      el[1].image.main === 'Ash' ||
      el[1].image.main === 'Fog' ||
      el[1].image.main === 'Tornado'
    ) {
      imges[i].src = `${iconThunderstormday}`;
    }
  }
}

// When the user clicks on a search button

searchWeather.addEventListener('click', function (event) {
  let apikey = 'da13c92adcb97e26e489d8a4eccc88b9';
  const cityel = inputCityWeather.value;
  const el2 = cityel
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
  let city = el2;

  async function weather(weatherEl) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );

    try {
      if (response.ok) {
        textCity.textContent = el2;
        const data = await response.json();

        const [weatherEl] = data.weather;
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        informationWeather(weatherEl, city, data);
        dateToday();
        weatherCondition(weatherEl);
        getAllweather(lat, lon);
      } else {
        throw new Error(
          'Weather API request failed. Please try another city again!'
        );
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function getAllweather(lat, lon) {
    let YOUR_API_KEY = 'da13c92adcb97e26e489d8a4eccc88b9';
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${YOUR_API_KEY}&units=metric`
    );

    try {
      if (res.ok) {
        const data = await res.json();
        const forecastList = data.list;
        const currentDate = new Date();
        // Filter the forecast data for the next 5 days
        const nextDays = forecastList.filter(item => {
          rainEl.textContent = item.pop;
          const itemDate = new Date(item.dt * 1000);
          let el = new Date(itemDate);
          if (itemDate.getDate() !== currentDate.getDate()) {
            const day = new Date(itemDate);
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
                obj[newdel].max = Math.round(Math.max(obj[newdel].max, temp));
                obj[newdel].image = weather;
              }
              return itemDate.getDate();
            }
          });
        }

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
          if (el[1].image.main === 'Clear') {
            imges[i].src = `${iconClearday}`;
          }
          if (el[1].image.main === 'Clouds') {
            imges[i].src = `${iconCloudy}`;
          }
          if (el[1].image.main === 'Rain') {
            imges[i].src = `${iconRainday}`;
          }
          if (el[1].image.main === 'Snow') {
            imges[i].src = `${iconSnowday}`;
          }
          if (el[1].image.main === 'Thunderstorm') {
            imges[i].src = `${iconThunderstormday}`;
          }
          if (
            el[1].image.main === 'Mist' ||
            el[1].image.main === 'Haze' ||
            el[1].image.main === 'Smoke' ||
            el[1].image.main === 'Dust' ||
            el[1].image.main === 'Squall' ||
            el[1].image.main === 'Ash' ||
            el[1].image.main === 'Fog' ||
            el[1].image.main === 'Tornado'
          ) {
            imges[i].src = `${iconThunderstormday}`;
          }
        }
      }
    } catch (error) {
      alert(error.message);
    }
  }

  weather();
});

// When the user clicks on a city recommendation
citiesPrev.forEach(city => {
  city.addEventListener('click', function (e) {
    let YOUR_API_KEY = 'da13c92adcb97e26e489d8a4eccc88b9';
    const cityel = e.target.textContent;
    const el2 = cityel
      .split(' ')
      .map(el => el[0].toUpperCase() + el.slice(1))
      .join(' ');

    textCity.textContent = el2;
    let city = el2;

    async function weatherElbtn() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${YOUR_API_KEY}`
      );
      try {
        if (response.ok) {
          textCity.textContent = el2;

          const data = await response.json();
          const [weatherEl] = data.weather;

          const tempcity = Math.round(Number(data.main.temp));
          weatherTemperature.textContent = tempcity;
          const lat = data.coord.lat;
          const lon = data.coord.lon;
          // informationWeather(weatherEl, city, data);
          const [weatherElCity] = data.weather;
          const icons = weatherElCity.icon;
          const el3 = data.weather[0].icon;
          const wetaherClear = weatherEl.description;
          console.log(weatherEl);
          const wind = data.wind.speed;
          const humidity = data.main.humidity;
          const cloudy = data.clouds.all;
          cloundyEl.textContent = cloudy;
          clear.textContent = wetaherClear;
          windEl.textContent = wind;
          humidityEl.textContent = humidity;
          dateToday();
          weatherCondition(weatherEl);
          getAllweather(lat, lon);
        }
      } catch (error) {
        alert(error.message);
      }
    }

    async function getAllweather(lat, lon) {
      let YOUR_API_KEY = 'da13c92adcb97e26e489d8a4eccc88b9';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${YOUR_API_KEY}&units=metric`
      );
      try {
        if (res.ok) {
          const data = await res.json();
          const forecastList = data.list;
          const currentDate = new Date();
          // Filter the forecast data for the next 5 days
          const nextDays = forecastList.filter(item => {
            rainEl.textContent = item.pop;
            const itemDate = new Date(item.dt * 1000);
            let el = new Date(itemDate);
            if (itemDate.getDate() !== currentDate.getDate()) {
              const day = new Date(itemDate);
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
                  obj[newdel].max = Math.round(Math.max(obj[newdel].max, temp));
                  obj[newdel].image = weather;
                }
                return itemDate.getDate();
              }
            });
          }

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
            if (el[1].image.main === 'Clear') {
              imges[i].src = `${iconClearday}`;
            }
            if (el[1].image.main === 'Clouds') {
              imges[i].src = `${iconCloudy}`;
            }
            if (el[1].image.main === 'Rain') {
              imges[i].src = `${iconRainday}`;
            }
            if (el[1].image.main === 'Snow') {
              imges[i].src = `${iconSnowday}`;
            }
            if (el[1].image.main === 'Thunderstorm') {
              imges[i].src = `${iconThunderstormday}`;
            }
            if (
              el[1].image.main === 'Mist' ||
              el[1].image.main === 'Haze' ||
              el[1].image.main === 'Smoke' ||
              el[1].image.main === 'Dust' ||
              el[1].image.main === 'Squall' ||
              el[1].image.main === 'Ash' ||
              el[1].image.main === 'Fog' ||
              el[1].image.main === 'Tornado'
            ) {
              imges[i].src = `${iconThunderstormday}`;
            }
          }
        }
      } catch (error) {
        alert(error.message);
      }
    }

    weatherElbtn();
  });
});
