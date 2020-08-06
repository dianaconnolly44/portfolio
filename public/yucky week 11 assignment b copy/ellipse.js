var myCaptureDevice;
var px = 320;
var py = 0;
var brightnessThreshold = 40;
var darknessThreshold = 35;
var letters = [];

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

    ellipse(px, py, 10, 10);

    var theColorAtPxPy = myCaptureDevice.get(px,py);
    
    //if the current pixel is a color, then brightness is defined
    if (isColor(theColorAtPxPy)) {
      var theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy); //get the brightness 

      //while brightness does'nt meet threshold, we change py
      while (theBrightnessOfTheColorAtPxPy > brightnessThreshold || theBrightnessOfTheColorAtPxPy <= darknessThreshold ) {
        // if it's above the bright threshold, move it down
        if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
            py += 1;
        } 
        // if it's below the dark threshold, move it up
        if (theBrightnessOfTheColorAtPxPy <= darknessThreshold) {
            py -= 1;
        }

      }

    } 
    
    trlReset();
}

function trlReset() {
    // Reset py to its initial position at the top of the screen.
    // Also useful for testing.
    if (py >= height) {
        py = 0;
    }
}
