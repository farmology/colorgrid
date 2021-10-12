const gridContainer = document.querySelector(".gridcontainer");
const squareContainer = document.querySelector(".squarecontainer");
const cell = document.createElement("div");
cell.classList.add('cell');
cell.textContent = "test";

for (let i = 0; i < 256; i++) {
    squareContainer.appendChild(cell.cloneNode(true));
};

// center a square in the center of the page
// square is a flexbox? and the contents will be CSS Grid
// style for default, style for hovered over
// add event listener for "hover" for every cell
// when hovered, add class/style for hovered over


