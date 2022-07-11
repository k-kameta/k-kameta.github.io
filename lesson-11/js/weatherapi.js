// OpenWeatherMap API

// units=metric(C), imperial(F), default (K=C+273.15)
// Preston id= 5604473
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ef7f0ce0a44726e7d57c9356d2d75387&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    });

  // =============
