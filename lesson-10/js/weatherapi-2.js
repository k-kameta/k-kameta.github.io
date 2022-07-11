// OpenWeatherMap API

// units=metric(C), imperial(F), default (K=C+273.15)
// Preston id= 5604473

const placeID = 5604473
const apikey = "ef7f0ce0a44726e7d57c9356d2d75387"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id="+placeID+"&APPID="+apikey+"&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log('1 day data')
    console.log(jsObject);


    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array

  });

  // =============


const placeID2 = 5604473
const apikey2 = "ef7f0ce0a44726e7d57c9356d2d75387"
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id="+placeID2+"&APPID="+apikey2+"&units=imperial";
  
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

