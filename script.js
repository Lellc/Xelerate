`use strict`;

let showAllButton = document.querySelector(".show-all-button");
let showAllText = document.querySelector(".show-all-text");
let showAllIcon = document.querySelector(".show-all-icon");
let gridContainer = document.getElementById("grid-container");

showAllButton.addEventListener("click", function () {
  showAllText.textContent === `Show all`
    ? (showAllText.textContent = `Show less`)
    : (showAllText.textContent = `Show all`);
  gridContainer.classList.toggle(`shown`);
  showAllIcon.classList.toggle(`ph-caret-down`);
  showAllIcon.classList.toggle(`flip`);
});
