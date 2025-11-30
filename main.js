const container = document.querySelector("#container");

function gridSquareDivs(num) {
  let length = 800;
  for (i = 0; i < num * num; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.className = "squareDiv";
    squareDiv.style.width = `${length / num}px`;
    squareDiv.style.height = `${length / num}px`;
    container.append(squareDiv);
  }
}
gridSquareDivs(16);

function hoverChange(color) {
  const squareDiv = document.querySelectorAll(".squareDiv");
  squareDiv.forEach((squareDiv) => {
    squareDiv.addEventListener("mousemove", () => {
      squareDiv.style.backgroundColor = "black";
    });
  });
}
hoverChange();

const squareSizeChangeBtn = document.createElement("button");
squareSizeChangeBtn.textContent = "Change Square Number";
document.body.before(squareSizeChangeBtn, container);

function removeGrid() {
  const squareDiv = document.querySelectorAll(".squareDiv");
  squareDiv.forEach((squareDiv) => {
    squareDiv.remove();
  });
}

let newNum = 0;
function newGridNum() {
  let value = false;
  while (!value) {
    newNum = +prompt("Add new number between 1 and 100");
    if (newNum === null) {
      alert("Input cancelled. Please try again.");
      continue;
    }
    if (
      isNaN(newNum) ||
      newNum < 1 ||
      newNum >= 100 ||
      !Number.isInteger(newNum)
    ) {
      alert("Invalid input. Please try again.");
    } else {
      value = true;
    }
  }
  return newNum;
}

squareSizeChangeBtn.addEventListener("click", () => {
  newNum = newGridNum();
  removeGrid();
  gridSquareDivs(newNum);
  hoverChange();
});

const randomColorBtn = document.createElement("button");
randomColorBtn.textContent = "Randomize the square's color";
document.body.before(randomColorBtn, container);

randomColorBtn.addEventListener("click", () => {
  const squareDiv = document.querySelectorAll(".squareDiv");
  squareDiv.forEach((squareDiv) => {
    let randomNum = Math.floor(Math.random() * 7);
    let colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    squareDiv.addEventListener("mousemove", () => {
      squareDiv.style.backgroundColor = colors[randomNum];
    });
  });
});
