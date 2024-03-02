# Sketch-Pad

## About:
* Web based Sketch Pad using javascript , html and css.
* Using Mainly Dom manuplation and javascript.

## Usage:
* Allows to colorbackground where the curser moves.
* Options to choose: black coloring , eraser button , random coloring button and easing whole board.
* Allows to do or change actions on click for better drawing.
* Setting size of the board between 2 and 100 grids.

**Function I used for applying random color on curser move:**
```js
function colorSquare(){
    if(click){
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
        }
        this.style.backgroundColor = color ;
    }
    }
}
```

## Exmample Video:
https://github.com/RohatErgun/Sketch-Pad/assets/123872606/3c7d5033-6b1f-4fb8-a00c-1569a7822349



