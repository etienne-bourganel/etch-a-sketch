let gridSize = 32;
document.documentElement.style.setProperty("--gridSize", gridSize); 

const container = document.querySelector("#container");
container.classList.add("container");

const buttonNew = document.querySelector("#new");
buttonNew.addEventListener("click",newGrid);

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", clearGrid);

let cells;
let newCell;

function changeToBlack (e){
    e.target.classList.add("black");
};

function createCell() {
    newCell = document.createElement("div");
    container.appendChild(newCell);
    newCell.classList.add("cell");
};

function createGrid () {
    for (let i = 1; i<= gridSize*gridSize; i++){
        createCell();
        cells = Array.from(container.querySelectorAll(".cell"));
        cells.forEach(cell => cell.addEventListener("mouseenter", changeToBlack));
    };
};

function removeGrid () {
   container.innerHTML = "";
};

function newGrid(){
    gridSize = prompt("Please enter the size of the grid:", "32");
    removeGrid();
    document.documentElement.style.setProperty("--gridSize", gridSize); 
    createGrid();
};

function clearGrid(){
    cells.forEach(cell => cell.classList.remove("black"));
};