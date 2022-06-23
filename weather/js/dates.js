
// set current year in footer
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last updated: ${document.lastModified}`;

const today = document.querySelector('#currentdate');
today.innerHTML = `Current date: ${currentDate}`;

function Settoday(){
    var today = new Date() ;
    var weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ] ;  
    document.getElementById(weekday[today.getDay()]).style.display="block";
}

