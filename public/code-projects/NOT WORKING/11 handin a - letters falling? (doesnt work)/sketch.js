//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-11-A

var myCaptureDevice;
var px = 37;
var py = 0;
var brightnessThreshold = 40;
var darknessThreshold = 35;
var TextRainLetters = [];
//var letters = [];
var numberOfLetters = 18;

function isColor(c) {
    return (c instanceof Array);
}

function setup() {
    createCanvas(640, 480);
    myCaptureDevice = createCapture(VIDEO);
    myCaptureDevice.size(640, 480); // attempt to size the camera. 
    myCaptureDevice.hide(); // this hides an unnecessary extra view.
    TextRainLetters = ["y","o","u","r","b","o","d","y","i","s","y","o","u","r","h","o","m","e"];
}

function draw() {
    background(220);
    myCaptureDevice.loadPixels(); // this must be done on each frame.
    image(myCaptureDevice, 0, 0);  // draw the camera at 1:1 resolution
    textSize(25);
    stroke(0);
    strokeWeight(5);
    fill(255);
    for (i=0; i<numberOfLetters; i++) {
        text(TextRainLetters[i],px*i,py);
        var theColorAtPxPy = myCaptureDevice.get(px,py);
        if (isColor(theColorAtPxPy)) {
            var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
        }
        if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
            py = py + 1;
        } 
        //DOESN'T WORK:
        // while (theBrightnessOfTheColorAtPxPy <= darknessThreshold) {
        //  py = py - 1;
        // var theColorAtPxPy = myCaptureDevice.get(px,py);
        //  if (isColor(theColorAtPxPy)) { //to update the brightness in the while loop:
        //     var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
        //  }
        // }
        trlReset();
    }
}

function trlReset() {
    if (py >= height) {
            py = 0;
        }
}



//I really tried to make the given object code work, but I just couldn't :(
//Here's my most recent attempt for grading:

// function makeTextRainLetter(inputL, inputX, inputY) {
//     text(inputL,inputX,inputY);
//     L = {letter: inputL, px: inputX, py: inputY,
//             update: trlUpdate, // update the object position
//             reset: trlReset,   // reset the object to the top of screen
//             render: trlRender  // draw the letter
//            }
//     return L;
// }

// function trlUpdate() {
//     // Update the position of a TextRainLetter. 
//     // 1. Fetch the color of the pixel at the (px,py) location of the TextRainLetter.
//     // 2. Compute its brightness.
//     // 3. If the TextRainLetter is in a bright area, move downwards.
//     //    Else, if it's in a dark area, move up until we're in a light area.

//     var theColorAtPxPy = myCaptureDevice.get(px,py);
//     if (isColor(theColorAtPxPy)) {
//         var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
//     }
//     if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
//         py = py + 1;
//        // println("if" + theBrightnessOfTheColorAtPxPy);
//         // while (theBrightnessOfTheColorAtPxPy < darknessThreshold) {
//         //     py = py - 1;
//         //     //println("while" + theBrightnessOfTheColorAtPxPy);
//         // }
//     } 
//     makeTextRainLetter.reset();
// }
 
// function trlReset() {
//     // Reset py to its initial position at the top of the screen. 
//     // Also useful for testing. 
//     if (py >= height) {
//         py = 0;
//     }
// }
 
// function trlRender() {
//     // Render the letter. 
//     for (a=0; a<TextRainLetters.length; a++) {
//         px = map(a,0,TextRainLetters.length,0,width);
//         letters[a] = makeTextRainLetter.charAt(a);
//         makeTextRainLetter(letters[a],px,py);
//     }

// for putting in the draw function:
//need a loop that goes thru every letter, update and render
    // for (j=0; j<numberOfLetters; j++) {
    //     makeTextRainLetter.update();
    //     makeTextRainLetter.render();
    // }