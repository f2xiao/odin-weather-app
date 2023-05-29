import fetchData from "./fetchData.js";
export default async function(API_KEY, BASE_URL, cityName){
    try{
    // console.log('hello');
    // console.log(API_KEY);
    // console.log(BASE_URL);
    const url = `${BASE_URL}key=${API_KEY}&q=${cityName}&aqi=no`
    // console.log(url);
    const weather = (await fetchData(url)).current.condition;

    return weather;

    }catch(error){
        console.log(error)
    }
}
