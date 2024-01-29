const searchRequest = document.querySelector(".searchBar");
const downloads =  fetch("../downloads/pages.json");
const pages = downloads.then(response => response.json());
