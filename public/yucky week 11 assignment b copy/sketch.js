var myCaptureDevice;
var px = 320;
var py = 0;
var brightnessThreshold = 40;
var darknessThreshold = 35;
var TextRainLetters = [];

function setup() {
    createCanvas(640, 480);
    myCaptureDevice = createCapture(VIDEO);
    myCaptureDevice.size(640, 480); // attempt to size the camera. 
    myCaptureDevice.hide(); // this hides an unnecessary extra view.
}

function isColor(c) {
    return (c instanceof Array);
}

//--------------------------------------------------------------------
function draw() {
    background(220);
    myCaptureDevice.loadPixels(); // this must be done on each frame.
    image(myCaptureDevice, 0, 0);  // draw the camera at 1:1 resolution

    //text(A,px,py);
    //makeTextRainLetter(A,px,py);
    TextRainLetters.push(text(A,px,py));
    trlUpdate();
    trlReset();
    trlRender();
}


//================================================================
// A class to contain a single letter in the TextRain poem. 
// Basically, this is a particle that associates a position and a character.
//
function makeTextRainLetter(inputL, inputX, inputY) {
    return {letter: inputL, px: inputX, py: inputY,
            update: trlUpdate, // update the object position
            reset: trlReset,   // reset the object to the top of screen
            render: trlRender  // draw the letter
           };
}
 
function trlUpdate() {
    // Update the position of a TextRainLetter. 
    // 1. Fetch the color of the pixel at the (px,py) location of the TextRainLetter.
    // 2. Compute its brightness.
    // 3. If the TextRainLetter is in a bright area, move downwards.
    //    Else, if it's in a dark area, move up until we're in a light area.

    var theColorAtPxPy = myCaptureDevice.get(px,py);
    if (isColor(theColorAtPxPy)) {
        var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
    }
    if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
        py = py + 1;
       // println("if" + theBrightnessOfTheColorAtPxPy);
        // while (theBrightnessOfTheColorAtPxPy < darknessThreshold) {
        //     py = py - 1;
        //     //println("while" + theBrightnessOfTheColorAtPxPy);
        // }
    } 
}
 
function trlReset() {
    // Reset py to its initial position at the top of the screen. 
    // Also useful for testing. 
    if (py >= height) {
        py = 0;
    }
}
 
function trlRender() {
    // Render the letter. 
    text(A,px,py);
    //letters.push(text(A,px,py));
    //makeTextRainLetter.render();
}