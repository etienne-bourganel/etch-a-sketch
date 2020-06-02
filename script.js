const container = document.querySelector("#container");
let squareNumber = 16;


function createSquare (x){
    const square = document.createElement("div");
    //square.setAtrribute("id","square");
    square.style.backgroundColor = "cyan";
    square.style.width = "25px";
    square.style.height = "25px";
    square.style.borderColor = "black";
    square.style.borderWidth = "10px";
    square.style.margin = "5px";
    square.textContent = x;
    container.appendChild(square);
    
};

function createGrid(){
    for (let i=1; i<=16; i++){
        createSquare(i);
    };
};
