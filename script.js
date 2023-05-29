import config from "./config.js"

import getWeather from "./getWeather.js";
import getGif from "./getGif.js";

const input = document.querySelector('.search-container>input');
const button = document.querySelector('.search-container>button');
const img = document.querySelector('.img-container>img');
const p = document.querySelector('.weather-container>.weather-description');

// console.log(input);
// console.log(button);
function insertIcon(url, element){
    const img = document.createElement("img");
    img.src= url;
    img.alt = 'current weather';
    element.appendChild(img);
}
// get user input for location
button.addEventListener('click', async () => { 
    if(input.value){
        // input.value = London|Shanghai|Toronto|Beijing|Seattle|California;
        console.log(input.value);
        const {WEATHER, GIFHY} = config;

        try {

            // fetch weather data with weather API
            const weatherData = await getWeather(WEATHER.API_KEY, WEATHER.BASE_URL, input.value);
            console.log(weatherData);
            const condition = weatherData.condition;
        
            // fetch gif data with gifpy API
            // const gifData = await getGif(GIFHY.API_KEY, GIFHY.BASE_URL, `weather ${condition.text}`);
            const gifData = await getGif(GIFHY.API_KEY, GIFHY.BASE_URL, `weather: freezing drizzle`);
            console.log(gifData);
            p.textContent = condition.text;

            img.src = gifData.fixed_height.url;
            // img.src = weatherData.icon;

            // create a img element and insert the icon
            insertIcon(condition.icon, p);
            
        } catch (error) {
            console.log(error);
        }

    }
 })

// TODO: loading component with gifpy API


