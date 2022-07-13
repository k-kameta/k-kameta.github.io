// event information

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject["towns"];
    let place = "Preston" 

     console.log(jsonObject)

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == place) {
        let localEvent = document.createElement("div");
        let header = document.createElement("h3");
        header.textContent = `${place} Area Events`;
        localEvent.appendChild(header);

        for (let j = 0; j < towns[i].events.length; j++) {
          let p = document.createElement("p");
          p.textContent = towns[i].events[j];
          localEvent.appendChild(p);
          document.querySelector(".EventInfo").appendChild(localEvent);
        }
      }
    }
  });
