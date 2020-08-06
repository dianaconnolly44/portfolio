var myCaptureDevice;
var px = 37;
var py = 0;
var brightnessThreshold = 40;
var darknessThreshold = 35;
var TextRainLetters = []; //filled with characters
//var letters = []; //filled with object letters
var numberOfLetters = 18;

function isColor(c) {
    return (c instanceof Array);
}

// function trlUpdate() {
//     var theColorAtPxPy = myCaptureDevice.get(px,py);
//         if (isColor(theColorAtPxPy)) {
//             var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
//         }
//         if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
//             py = py + 1;
//         } else while (theBrightnessOfTheColorAtPxPy <= darknessThreshold) {
//             py = py - 1;
//         }
// }

function trlReset() { //if text is at bottom of screen, start at top again
    if (py >= height) {
            py = 0;
        }
}

// function trlRender() {
//     // Render the letter. 
//     for (a=0; a<TextRainLetters.length; a++) {
//         px = map(a,0,TextRainLetters.length,0,width);
//         letters[a] = makeTextRainLetter.charAt(a);
//         makeTextRainLetter(letters[a],px,py);
// }

// function makeTextRainLetter(inputL,inputX,inputY) {
//     var L = {letter: inputL, x: inputX, y: inputY,
//              update: trlUpdate, 
//              reset: trlReset,
//              render: trlRender}
//     return L;
// }

function setup() {
    createCanvas(640, 480);
    myCaptureDevice = createCapture(VIDEO);
    myCaptureDevice.size(640, 480); // attempt to size the camera. 
    myCaptureDevice.hide(); // this hides an unnecessary extra view.
    TextRainLetters = ["y","o","u","r","b","o","d","y","i","s","y","o","u","r","h","o","m","e"];

    // for (j=0;j<18;j++) {
    //     var L = textObject(TextRainLetters[j],px*i,py);
    //     letters.push(L);
    // }
}

function draw() {
    background(220);
    myCaptureDevice.loadPixels(); // this must be done on each frame.
    image(myCaptureDevice, 0, 0);  // draw the camera at 1:1 resolution
    textSize(25);
    stroke(0);
    strokeWeight(5);
    fill(255);
    for (i=0; i<18; i++) {
        text(TextRainLetters[i],px*i,py); //makes the whole sentence
        var theColorAtPxPy = myCaptureDevice.get(px,py); //gets color at (px,py)
        if (isColor(theColorAtPxPy)) { //if color at (px,py) is actually a color:
            var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy); //get brightness
        }
        if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) { //if the pixel is brighter than brightness threshold, move down
            py = py + 1;
        } else while (theBrightnessOfTheColorAtPxPy <= darknessThreshold) { //if the pixel is darker than darkness threshold, move up
        	py = py - 1;
        }
        trlReset();
    }
}

//tried to make an object and call it, but it didn't work :(
// for (i=0; i<18; i++) {
//         text(letters[i],px*i,py);
//         makeTextRainLetter.update();
//         makeTextRainLetter.render();
//         L.inputY += 1;??
//     }

// function trlReset() {
//     if (py >= height) {
//             py = 0;
//         }
// }