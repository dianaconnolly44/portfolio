var myCaptureDevice;

function setup() {
    createCanvas(640, 550);
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
    
    // Fetch the color at the mouse, and display it. 
    var theColorAtTheMouse = myCaptureDevice.get(mouseX, mouseY);
    if (isColor(theColorAtTheMouse)) {
        fill(theColorAtTheMouse);
        rect(10,490,50,50);
        fill(0);
        text("The color at the mouse is (" + theColorAtTheMouse + ")", 70, 520); 
    }
}