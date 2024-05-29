const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
const forecastContainer = document.querySelector('#forecast');

const apiKey = '0e42d04458fcaa43bd139cacc3fb1c41';
const lat = 43.54; // Latitude for Nampa, Idaho
const lon = -116.56; // Longitude for Nampa, Idaho
const units = 'imperial'; 

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const [currentWeatherResponse, forecastResponse] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastUrl)
    ]);

    if (currentWeatherResponse.ok && forecastResponse.ok) {
      const currentWeatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();
      console.log(currentWeatherData);
      console.log(forecastData);
      displayResults(currentWeatherData, forecastData); 
    } else {
      throw Error('Failed to fetch data');
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(currentWeatherData, forecastData) {
  currentTemp.innerHTML = `Temperature: ${currentWeatherData.main.temp.toFixed(1)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`;
  let desc = currentWeatherData.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `Condition: ${desc}`;

  const dailyForecasts = forecastData.list.filter((forecast, index) => index % 8 === 0).slice(0, 3);
  forecastContainer.innerHTML = dailyForecasts.map(forecast => `
    <div class="forecast-item">
      <p>${new Date(forecast.dt_txt).toDateString()}</p>
      <p>Temp: ${forecast.main.temp.toFixed(1)}&deg;F</p>
      <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}">
      <p>${forecast.weather[0].description}</p>
    </div>
  `).join('');
}
