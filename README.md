# Sketch-Pad

## About:
<br>
* Web based Sketch Pad using javascript , html and css.

## Usage:
* Allows to colorbackground where the curser moves.
* Options to choose: black coloring , eraser button and random coloring button.

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


