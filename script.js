import getWeather from "./getWeather.js";
const input = document.querySelector('.search-container>input');
const button = document.querySelector('.search-container>button');
// console.log(input);
// console.log(button);

// TODO: get user input for location
button.addEventListener('click', () => { 
    if(input.value){
        console.log(input.value);
    }
 })

// TODO: fetch weather data with weather API
getWeather();
// TODO: fetch gif data with gifpy API

// TODO: loading component with gifpy API


