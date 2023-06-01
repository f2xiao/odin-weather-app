import WeatherData from "./WeatherData.js"

const weatherDataEle = document.querySelector('weather-data');
weatherDataEle.input.value = 'Waterloo';
weatherDataEle.button.click()
weatherDataEle.input.value = ''; 
