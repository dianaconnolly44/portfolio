var myCaptureDevice;
var px = 37;
var py = 0;
var brightnessThreshold = 40;
var darknessThreshold = 35;
var letters = []; //the actual letters
var TextRainLetters = []; //filled w/ characters

function isColor(c) {
    return (c instanceof Array);
}

function textMove() {
    var theColorAtPxPy = myCaptureDevice.get(px,py);
        if (isColor(theColorAtPxPy)) {
            var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
        }
        if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
            py = py + 1;
        } else while (theBrightnessOfTheColorAtPxPy <= darknessThreshold) {
            py = py - 1;
        }
}

function trlReset() {
    if (py >= height) {
            py = 0;
        }
}

function textObject(inputL,inputX,inputY) {
    var L = {letter: inputL, x: inputX, y: inputY,
             reset: trlReset}
    return L;
}

function setup() {
    createCanvas(640, 480);
    myCaptureDevice = createCapture(VIDEO);
    myCaptureDevice.size(640, 480); // attempt to size the camera. 
    myCaptureDevice.hide(); // this hides an unnecessary extra view.
    TextRainLetters = ["y","o","u","r","b","o","d","y","i","s","y","o","u","r","h","o","m","e"];
    for (j=0;j<18;j++) {
        var L = textObject(?,?,?);
        letters.push(L);
    }
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
        text(letters[i],px*i,py);
    }
}