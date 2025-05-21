`use strict`;

let showAllButton = document.querySelector(".show-all-button");
let gridContainer = document.getElementById("grid-container");

showAllButton.addEventListener("click", function () {
  showAllButton.textContent === `Show all`
    ? (showAllButton.textContent = `Show less`)
    : (showAllButton.textContent = `Show all`);
  gridContainer.classList.toggle(`shown`);
});
