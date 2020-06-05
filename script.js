
let gridSize = 32;
document.documentElement.style.setProperty("--gridSize", gridSize); 

const container = document.querySelector("#container");
container.classList.add("container");

const buttonNew = document.querySelector("#new");
buttonNew.addEventListener("click",newGrid);

const buttonClear = document.querySelector("#clear");


function createCell() {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add("cell");
};

function createGrid () {
    for (let i = 1; i<= gridSize*gridSize; i++){
        createCell();
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

function drawCell(){
    cell.style.backgroundColor ="black";
}