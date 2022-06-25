//
// Wind speed to Wind chill conversion
//

var temp = document.getElementById('temp').outerText;
var windSpeed = document.getElementById('windSpeed').outerText;
// temp = Number(temp);
// windSpeed = Number(windSpeed);
// check the values taken from html
console.log(temp); 
console.log(windSpeed);

var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));

var windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;
