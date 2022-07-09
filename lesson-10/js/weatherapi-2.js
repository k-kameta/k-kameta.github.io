// OpenWeatherMap API

// units=metric(C), imperial(F), default (K=C+273.15)
// Preston id= 5604473
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ef7f0ce0a44726e7d57c9356d2d75387&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    // document.getElementById('current-temp').textContent = jsObject.main.temp;
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);

    console.log(jsObject);

    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array

    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);

  });

  // =============

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    jsObject.list.filter((value) => {
    if (value.dt_txt.includes("18:00:00")) {
        console.log(value);

        const forcastFlex = document.querySelector(".forecast-flex");
        const divForecast = document.createElement("div");
        const pDay = document.createElement("p");
        const pIcon = document.createElement("img");
        const ptemp = document.createElement("p");

        // OBTAINING THE LINK OF ICON
        const imagesrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;

        const desc = value.weather[0].description;
        const temp = value.main.temp;

        //GET THE DATE FROM THE API
        const currentDay = value.dt_txt.slice(0, 10);

        // CONVERTING THE STRING TO DATE OBJECT AND SET UTC TIME
        const currentDate = new Date(currentDay).toUTCString();
        // console.log(currentDate);
        // console.log(currentDay);

        // PASSING THE DATE AND THE TEMPERATURE
        pDay.textContent = currentDate.slice(0, 3);
        ptemp.textContent = `${temp} °F`;

        // SET THE ICON'S ATTRIBUTES
        pIcon.setAttribute("alt", desc);
        pIcon.setAttribute("src", imagesrc);

        divForecast.appendChild(pDay);
        divForecast.appendChild(pIcon);
        divForecast.appendChild(ptemp);
        divForecast.classList.add("forecast-box");

        forcastFlex.appendChild(divForecast);
      }
    })
  });
