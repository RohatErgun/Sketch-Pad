// Logic of the Sketch Pad


let color = 'black';

let click = true;
function populateBoard(size){

    let board = document.querySelector(".board");

    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

// creating rows and columns
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)` ;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)` ;

    let amount = size * size;
    for(let i=0;i<amount;i++){
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend",square);
    }
}

populateBoard(16);
function changeSize(input){
    if(input >=2 && input <= 100){
        populateBoard(input);
    }
    else{
        alert("Max size is 100, user entered "+input + " !");
        console.log("Max Grid size 100");
    }
}

// change color we want to


function colorSquare() {
    if(click){
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
        }
        this.style.backgroundColor = color ;
    }
}

function changeColor(selection){
    color = selection;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');

}

document.querySelector('body').addEventListener('click',() =>{
    click = !click;
})

