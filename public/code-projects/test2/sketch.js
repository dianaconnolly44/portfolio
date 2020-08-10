var myCaptureDevice;
var bthresh = 50;
var tooDark = 45;
var raintext = "TheWordsAreSimple";
var letters = []; // will hold textRainLetter (trl) objects

function setup() {
    createCanvas(640, 550);
    myCaptureDevice = createCapture(VIDEO);
    myCaptureDevice.size(640, 480); // attempt to size the camera. 
    myCaptureDevice.hide(); // this hides an unnecessary extra view.
    var y = 20;
    for (var i = 0; i < raintext.length; i++) {
        // note: careless code for x; should use map() to spread available
        // letters across width of canvas
        var setupTRL = makeTextRainLetter(raintext.charAt(i),
                                          30 + i * 25, y);
        letters.push(setupTRL);
    }
}

function isColor(c) {
    return (c instanceof Array);
}

//--------------------------------------------------------------------
function draw() {
    background(220);
    myCaptureDevice.loadPixels(); // this must be done on each frame.
    image(myCaptureDevice, 0, 0);  // draw the camera at 1:1 resolution
    
    // Fetch the color at the mouse, and display it. 
    for (var i = 0; i < letters.length; i++) {
        var eachLetter = letters[i];
        eachLetter.update();
        eachLetter.render();
    }
}


//================================================================
// A class to contain a single letter in the TextRain poem. 
// Basically, this is a particle that associates a position and a character.
//
function makeTextRainLetter(inputL, inputX, inputY) {
    var trl = {letter: inputL, px: inputX, py: inputY,
               update: trlUpdate,
               render: trlRender,
               reset: trlReset
              };
    return trl;
}
 
function trlUpdate() {
    // Update the position of a TextRainLetter. 
    // 1. Fetch the color of the pixel at the (px,py) location of the TextRainLetter.
    // 2. Compute its brightness.
    // 3. If the TextRainLetter is in a bright area, move downwards.
    //    Else, if it's in a dark area, move up until we're in a light area.

    // if we are in danger of going off the bottom, reset to top
    if (this.py > height - 1) {
        this.reset();
    }
    var col = myCaptureDevice.get(this.px, this.py);
    // proceed only if col is really a color
    if (isColor(col)) {
        var br = brightness(col);
        if (br > bthresh) {
            this.py = this.py + 1;
        }
        while (this.py > 0 && br < tooDark) {
            this.py = this.py - 1;
            // since we changed py, recompute the col at px,py:
            col = myCaptureDevice.get(this.px, this.py);
            // since we changed col, recompute the brightness of col:
            if (isColor(col)) {
                br = brightness(col);
            } // else br remains the same, and the while loop keeps running,
              // but eventually, py will reach 0 and the loop will exit
        }
    }
}
 
function trlReset() {
    // Reset py to its initial position at the top of the screen. 
    // Also useful for testing. 
    this.py = 0;
}
 
function trlRender() {
    // Render the letter. 
    textSize(30);
    text(this.letter, this.px, this.py);
}