const downloads = Array.from(document.querySelectorAll(".hide"));
const input = document.querySelector(".searchBar");

const array = downloads.map((element) => {
  return {
    title: element.dataset.title,
    description: element.dataset.desc,
    element,
  };
});

console.log(array);

input.addEventListener("input", (e) => {
  const query =
    e.target.value.toLowerCase() || "UDHUEHUYWSGHCFUSDGJAGFRERGDGHDFJUYH"; // dont question
  array.map((element) => {
    const matches =
      element.title.toLowerCase().includes(query) ||
      element.description.toLowerCase().includes(query);

    element.element.classList.toggle("hide", !matches);
  });
});
