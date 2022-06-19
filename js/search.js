const articles = Array.from(document.getElementsByClassName("downloadbox"));
const searchBar = document.getElementById("searchBar");

let downloadBoxes = [];

downloadBoxes = articles.map((element) => {
  return {
    heading: element.dataset.searchheading,
    description: element.dataset.searchdescription,
    element: element,
  };
});

searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  downloadBoxes.map((element) => {
    const matched =
      element.heading.toLowerCase().includes(value) ||
      element.description.toLowerCase().includes(value);
    element.element.classList.toggle("hide", !matched);
  });
});
