const apikey = "ecd7555264cec88f5acfe114865c08cc";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let search = document.getElementById("search");
let searchbtn = document.getElementById("btn");
let weathericon = document.querySelector(".climate");



async function getweather(cityname) {
    const response = await fetch(apiurl + cityname + `&appid=${apikey}`);
    var data = await response.json()
    console.log(data)

    document.querySelector(".cityname").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity2").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind2").innerHTML = data.wind.speed + "Km/h";

    
    if (data.weather[0].main == "Clouds")  {
        weathericon.src ="/Weather-App/images/clouds.png"
    }
    else if (data.weather[0].main == "Clear")  {
        weathericon.src ="/Weather-App/images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle")  {
        weathericon.src ="/Weather-App/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist")  {
        weathericon.src ="/Weather-App/images/mist.png"
    }
    else if (data.weather[0].main == "Rain")  {
        weathericon.src ="/Weather-App/images/rain.png"
    }
    else if (data.weather[0].main == "Snow")  {
        weathericon.src ="/Weather-App/images/snow.png"
    }
    
    
}
searchbtn.addEventListener("click", () => {
    console.log("clicked")
    getweather(search.value);

})




