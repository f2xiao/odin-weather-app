import config from "./config.js"

import getWeather from "./getWeather.js";
const input = document.querySelector('.search-container>input');
const button = document.querySelector('.search-container>button');
// console.log(input);
// console.log(button);

// TODO: get user input for location
button.addEventListener('click', async () => { 
    if(input.value){
        console.log(input.value);
        const {API_KEY, BASE_URL} = config.WEATHER;
        const data = await getWeather(API_KEY, BASE_URL, input.value);
        console.log(data);
    }
 })
console.log()
// TODO: fetch weather data with weather API

// TODO: fetch gif data with gifpy API

// TODO: loading component with gifpy API


