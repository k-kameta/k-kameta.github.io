// event information

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject["towns"];
    // const place = document.querySelector(".active").textContent;
    let place = "Preston" 

     console.log(jsonObject)

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == place) {
        let localEvent = document.createElement("div");
        let header = document.createElement("h3");
        header.textContent = `${place} Area Events`;
        localEvent.appendChild(header);

        for (let x = 0; x < towns[i].events.length; x++) {
          let p = document.createElement("p");
          p.textContent = towns[i].events[x];
          localEvent.appendChild(p);
          document.querySelector(".EventInfo").appendChild(localEvent);
        }
      }
    }
  });
