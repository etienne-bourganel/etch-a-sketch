const container = document.querySelector("#container");
container.classList.add("container");
const gridSize = 64;

//let root = document.documentElement;
document.documentElement.style.setProperty("--gridSize", gridSize); 


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

function clearGrid () {
   container.innerHTML = "";
};


