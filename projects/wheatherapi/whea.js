const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "4d9c64dd9eefe84d7f6eb1e7cdf325aa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const res = await fetch(url);
    const data = await res.json();
    if(data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    console.log(data);
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`
    description.textContent = `${data.weather[0].description}`;
    wind_speed.textContent = `${data.wind.speed}Km/H`;
    humidity.textContent = `${data.main.humidity}%`

    switch(data.weather[0].main){
        case "Clear":
            weather_img.src = "img/clear.png";
            break;
        case "Clouds":
            weather_img.src = "img/cloud.png";
            break;
        case "Rain":
            weather_img.src = "img/rain.png";
            break;
        case "Snow":
            weather_img.src = "img/snow.png";
            break;
        case "mist":
            weather_img.src = "img/mist.png";
            break;
        case "Haze":
            weather_img.src = "img/hazepng.png";
            break;
        default:
            weather_img.src = "default.png";
            break;
    }

}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})