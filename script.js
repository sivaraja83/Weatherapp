const apiKey = 'cba6f9f37d48ca23bf21c890ac2b3c69';
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let icon = document.querySelector('.weather-icon')

async function checkweather(city){
    const response = await fetch(url + city+`&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
       document.querySelector(".error").style.display="block"
       document.querySelector(".weather").style.display="none"
    }
    else
    {
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".degree").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/hr";

        if(data.weather[0].main=='Clouds'){
            icon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=='Clear'){
            icon.src = "images/clear.png";
        }
        else if(data.weather[0].main=='Drizzle'){
            icon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main=='Rain'){
            icon.src = "images/rain.png";
        }
        else if(data.weather[0].main=='Mist'){
            icon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display='block';
        document.querySelector(".error").style.display="none "

    }


}
searchBtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
