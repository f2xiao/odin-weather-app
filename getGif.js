import fetchData from "./fetchData.js";
export default async function(API_KEY, BASE_URL, query){
    try{
    // console.log('hello');
    // console.log(API_KEY);
    // console.log(BASE_URL);
    const url = `${BASE_URL}api_key=${API_KEY}&q=${query}&rating=pg-13&limit=1`;
    // console.log(url);
    const gifObj = (await fetchData(url));
    console.log(gifObj);

    return gifObj.data[0].images;

    }catch(error){
        console.log(error)
    }
}