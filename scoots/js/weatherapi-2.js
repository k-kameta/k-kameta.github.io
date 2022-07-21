// OpenWeatherMap API

// units=metric(C), imperial(F), default (K=C+273.15)
// Preston id= 56044730

// let city = document.querySelector(".city").textContent;
// let city = "Preston, Idaho";
let city = document.getElementById('city').outerText;
console.log("city = " + city);

if (city == "Preston, Idaho") {placeID = "5604473";}
else if (city == "Soda Springs, Idaho") {placeID = "5607916";}
else if (city == "Fish Haven, Idaho") {placeID = "5585010";}
console.log("placeID = " + placeID);

placeID = ""

// const placeID = 5604473
const apikey = "ef7f0ce0a44726e7d57c9356d2d75387"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+placeID+"&APPID="+apikey+"&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log('1 day data')
    console.log(jsObject);

    document.getElementById('cover').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    let desc = jsObject.weather[0].description;  // note how we reference the weather array

    //
    // Wind speed to Wind chill conversion
    //
    temp = Number(jsObject.main.temp);
    windSpeed = Number(jsObject.wind.speed);
    
    // check the values taken from html
    console.log("wheather = " + desc);
    console.log("temp = "+ temp); 
    console.log("windSpeed = " + windSpeed);

    var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));
    // var windChill=(0.0817*(3.71*(Math.pow(windSpeed, 0.5))+5.81-0.25*windSpeed)*(temp-91.4)+91.4);

    var windChill = Math.round(windChill);

    document.getElementById("windChill").innerHTML = windChill;
    console.log("windChill = " + windChill);
 
  });

  // =============


// const placeID2 = 5604473
const apikey2 = "ef7f0ce0a44726e7d57c9356d2d75387"
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id="+placeID+"&APPID="+apikey2+"&units=imperial";
  
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log('5 day data')
    console.log(jsObject);

    jsObject.list.filter((value) => {
    if (value.dt_txt.includes("18:00:00")) {
      console.log('filtered')
      console.log(value);

        const forcastContainer = document.querySelector(".forecast-container");
        const div_forecast = document.createElement("div");
        const p_day = document.createElement("p");
        const p_image = document.createElement("img");
        const p_temp = document.createElement("p");

        // weather icon
        const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

        const desc = value.weather[0].description;
        const temp = value.main.temp.toString().slice(0, 4);
        const currentDay = value.dt_txt.slice(0, 10);

        // date and day
        const currentDate = new Date(currentDay).toUTCString();
        console.log(currentDate);
        console.log(currentDay);

        // add units 
        p_day.textContent = currentDate.slice(0, 3);
        // p_day.textContent = currentDate.slice(0, 7);
        p_temp.textContent = `${temp} °F`;
        p_day.classList.add("forecast-p");
        p_temp.classList.add("forecast-p");

        p_image.setAttribute("src", imagesrc);
        p_image.setAttribute("alt", desc);

        div_forecast.appendChild(p_day);
        div_forecast.appendChild(p_image);
        div_forecast.appendChild(p_temp);
        div_forecast.classList.add("forecast-day");

        forcastContainer.appendChild(div_forecast);
      }

  });
})

