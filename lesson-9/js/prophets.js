// WD230-W05 
// 

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++ ) {
            console.i; // checking i
            // (how would you do this with a foreach method?)

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthDate = document.createElement('birthDate');
            let birthPlace = document.createElement('birthPlace');
            let img = document.createElement('img');

            h2.textContent = (i+1) +'. ' + prophets[i].name + ' ' + prophets[i].lastname;
            birthDate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
			birthPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
            img.setAttribute('src', prophets[i].imageurl);
			img.setAttribute("alt", `Image of ${prophets[i].name}${prophets[i].lastname}_(${prophets[i].order})`);
            
            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);

        }
    });


