
// set current year in footer
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last updated: ${document.lastModified}`;

