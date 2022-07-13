// event information

// let city = document.getElementById('city').outerText;
city = document.getElementById('city').outerText;
console.log("city = " + city);

if (city == "Preston, Idaho") {place = "Preston";}
else if (city == "Soda Springs, Idaho") {place = "Soda Springs";}
else if (city == "Fish Haven, Idaho") {place = "Fish Haven";}
console.log("place = " + place);

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
     console.log(jsonObject)

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == place) {
        let localEvent = document.createElement("div");
        let header = document.createElement("h3");
        header.textContent = `Upcoming Event in ${place}`;
        localEvent.appendChild(header);
 
        for (let j = 0; j < towns[i].events.length; j++) {
          let p = document.createElement("p");
          p.textContent = "- " + towns[i].events[j];
          localEvent.appendChild(p);
          document.querySelector(".EventInfo").appendChild(localEvent);
        }
      }
    }
  });
