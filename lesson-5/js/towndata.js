// WD230-W05 
// 
// "towns": [
//     {
//       "name": "Soda Springs",
//       "photo": "sodasprings.jpg",
//       "motto": "Historic Oregon Trail Oasis. The Soda is on Us.",
//       "yearFounded": 1858,
//       "currentPopulation": 2985,
//       "averageRainfall": 15.75,
//       "events": [
//         "February 29: Geyser Song Day",
//         "May 1-6: Days of May Celebration",
//         "October 15-16: Octoberfest"
//       ]
//     },
// Display ---  the motto, year founded, population, and annual rainfall. 

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
            console.i; // checking i
            // (how would you do this with a foreach method?)

            if (towns[i].name == "Preston" || 
                      towns[i].name == "Soda Springs" || 
                      towns[i].name == "Fish Haven") {

                let card = document.createElement('section');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');

                let h2 = document.createElement('h2');
                let motto = document.createElement('motto');
                let yearFounded = document.createElement('yearFounded');
                let currentPopulation = document.createElement('currentPopulation');
                let averageRainfall = document.createElement('averageRainfall');
                let photo = document.createElement('img');

                h2.textContent = towns[i].name;
                motto.textContent = `Motto: ${towns[i].motto}`;
                yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
                currentPopulation.textContent = `Population: ${towns[i].currentPopulation}`;
                averageRainfall.textContent = `Annual Rainfall: ${towns[i].averageRainfall}`;
                photo.setAttribute("alt", `Image of ${towns[i].name}`);
                // photo.setAttribute('src', towns[i].imageurl);
                if (towns[i].name == "Preston") {
                    photo.setAttribute('src', "images/wdd230_image_franklinOriginal.jpeg");
                }
                else if (towns[i].name == "Soda Springs") {
                    photo.setAttribute('src', "images/soda-springs-gc4fef8b4b_640.jpg");
                }
                else if (towns[i].name == "Fish Haven") {
                    photo.setAttribute('src', "images/FishHaven-dreamstime_s_85958730.jpg");
                };
                
                div1.classList.add("townInfo");
                div1.appendChild(h2);
                div1.appendChild(motto);
                div1.appendChild(yearFounded);
                div1.appendChild(currentPopulation);
                div1.appendChild(averageRainfall);
            
                div2.classList.add("townPhoto");
                div2.appendChild(photo);
        
                card.appendChild(div1);
                card.appendChild(div2);
                document.querySelector('div.cards').appendChild(card);
                        
                }

        }
    });

    // function Settown(){
    //     var towns = ["Soda Spring", "Preston", "Fish Haven"] ;  
    //     document.getElementById(towns[i]).style.display="block";     
    
    //     // console.log(today); 
    //     // console.log(weekday[today.getDay()]);
    // }
    
