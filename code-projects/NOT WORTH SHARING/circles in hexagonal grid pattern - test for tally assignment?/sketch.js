// Diana Connolly
// Section A, Tuesdays at 9AM
// dconnoll@andrew.cmu.edu
// Assignment-05-B

function setup() {
    createCanvas(640, 360);
    background(128);
    var tw = 60;
    var th = 60 * (sqrt(3)/2); //the height of an equilateral triangle with 1-unit sides
    var oy = 50;
    var ox = 50;
    //Nested loops to draw the circles
    for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 10; x++) {
            if (y%2==1) { //for when y is odd, a.k.a. the 2nd, 4th, and 6th rows
                if(x<9) { //gets rid of the 10th circles in the shorter rows
                    drawCircles(1.5*ox,oy, x,y,th,tw); //the multiplier shifts the shorter rows over by an extra offset
                }
            } else {
                drawCircles(ox,oy,x,y,th,tw); //otherwise, the circles are drawn normally
            }
        }
    }
    noLoop();
}

function draw() {
    // draw is not called due to noLoop() in setup()
}

function drawCircles(ox,oy,x,y,th,tw) {
    var py = oy + y * th;
    var px = ox + x * tw;
    ellipse(px, py, 50, 50); //ellipse info as given to us on the assignment
}