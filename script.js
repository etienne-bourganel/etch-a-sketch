
const container = document.querySelector("#container");
let squareNumber = 16;

container.style.display = "flex";
container.style.flexWrap = "wrap";

function createSquare (x){
    const square = document.createElement("div");
    //square.setAtrribute("id","square");
    square.style.backgroundColor = "cyan";
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.borderColor = "black";
    square.style.borderWidth = "10px";
    square.style.margin = "10px";
    square.textContent = x;
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