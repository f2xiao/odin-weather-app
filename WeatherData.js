import config from "./config.js"

import getWeather from "./getWeather.js";

const template = document.createElement('template');
template.innerHTML = `
<div id="weather-container">
    <div class="weather-description">
    </div>
    <div class="search-container">
        <input type="search" name="location" id="location" placeholder="Search for weather">
        <button type="submit">GO</button>
    </div>
</div>
`
async function fetchWeather(city="Waterloo") { 
    const {WEATHER, GIFHY} = config;

        try {
            // fetch weather data with weather API
            const weatherData = await getWeather(WEATHER.API_KEY, WEATHER.BASE_URL, city);
            // process the weather data
            const {location, current} = weatherData;
            let condition = {
                text: current.condition.text,
                location: location.name,
                time: current.last_updated
            };
        
            let temp = {
                c: current.feelslike_c,
                f: current.feelslike_f,
            }
            
            // console.log(condition, temp);
            return {
                condition, temp
            }

        
            
        } catch (error) {
            console.log(error);
        }

    
}

function addButtonClickHandler(elem){
    const {button, input} = elem;
    // get user input for location
    button.addEventListener('click', async (e) => { 
        e.preventDefault();
        // console.log(input);
        if(input.value){
            // input.value = Waterloo|Auckland|London|Shanghai|Toronto|Beijing|Seattle|California;
            const city = input.value;
            const data = await fetchWeather(city);
            // console.log(data)
            renderData(elem, data);
        }
     });
}

function renderData(elem, data){
    const descriptionEle = elem.descriptionEle;
    // clear the description first
    descriptionEle.textContent = '';
    const {condition, temp} = data;

    descriptionEle.innerHTML = `
    <h1 class='text'>${condition.text}</h1>
    <p class='location'>${condition.location}</p>
    <p class='time'>${condition.time}</p>
    `
}

export default class WeatherData extends HTMLElement{
    constructor(){
        super();

        const shadowRoot = this.attachShadow({mode:"open"});
        // append a copy of the template node to the element's shadow root
        shadowRoot.appendChild(template.content.cloneNode(true)); 

        this.button = shadowRoot.querySelector(".search-container>button");
        this.input = shadowRoot.querySelector(".search-container>input");
        this.descriptionEle = shadowRoot.querySelector(".weather-description");
       
    }

    connectedCallback(){
       addButtonClickHandler(this);
    } 

}


// register with the DOM
customElements.define('weather-data', WeatherData);


