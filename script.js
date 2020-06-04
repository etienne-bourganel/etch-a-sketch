
const container = document.querySelector("#container");
let squareNumber = 16;
let containerSize = 1000;
let wrapBreak = 1/squareNumber*100;
let sizeRatio = containerSize/squareNumber;

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

container.style.borderStyle = "solid";

function createSquare (x){
    const square = document.createElement("div");
    square.style.backgroundColor = "cyan";
    square.style.width = `${sizeRatio-1}px`;
    square.style.height = `${sizeRatio-1}px`;
    square.style.borderStyle = "solid";
    square.style.borderColor = "black";
    square.style.borderWidth = "0px";
    square.textContent = x;
    square.style.flexBasis = `${wrapBreak}%`;
    square.style.display = "flex";
    container.appendChild(square); 
};

function createLine(){
    for (let i=1; i<=squareNumber; i++){
        createSquare(i);
    };
};

function createGrid(){
    for (let i=1; i<=squareNumber; i++){
        createLine();
    };
};