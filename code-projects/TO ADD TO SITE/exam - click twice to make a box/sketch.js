// 15-104 Fall 2016 Lab Exam 3
// Part B (template) 
//Diana Connolly

// global variables here (?)
// "Your program should in some way keep track of the number of mouse clicks."
var clickNum = 0;
// "Your program should have an array to store rectangle objects, 
//     initially empty."
var rects = [];
// other global variables may be needed
var xLocation;
var yLocation;
var boxW;
var boxH;
//var boxObj;


function setup() {
    createCanvas(400, 400);
    // insert code here (?)
}

function mousePressed() {
    clickNum ++;
    // "If the number of mouse clicks becomes odd 
    //     (hint: remember that (x % 2) is either 0 or 1), 
    //     then remember the mouse coordinates in some way"
    if (clickNum % 2 == 1) { //if click # is odd
        xLocation = mouseX;
        yLocation = mouseY;
        boxW=0;
        boxH=0;
    } 
    // "If the number of mouse clicks becomes even, 
    //     you now have 4 parameters for a rectangle: ... 
    //     Construct an object that stores these 4 parameters ...."
    if (clickNum % 2 == 0) { //if click # is even
        boxW = mouseX - xLocation;
        boxH = mouseY - yLocation;
    }

    makeBox();
    rects.push(makeBox);
    // "Take the object from part (c) above and insert it as 
    //     the new last element of your array of rectangles."
}


function keyPressed() {
    // Extra credit: When the user types R, G, or B, 
    //     set the “current color” to red, green, or blue.
    if (key == 'R') {
        fill(255,0,0);
    } else if (key == 'G') {
        fill(0,255,0);
    } else if (key = 'B') {
        fill(0,0,255);
    }
}

function makeBox() {
    // Construct a box object and return it. Be sure to initialize
    // all properties (x:, y:, w:, h:) 
    // (Implement color: for extra credit.)
    // (Implement and use draw: for extra credit.)
    return {x: xLocation, y: yLocation, w: boxW, h: boxH};
}

function draw() {
    background(220);
    // "draw the rectangles objects in the array of rectangles"
    // for (i=0; i<20; i++) {
    //     rects.push(drawBox[i]);
    // }
    rect(xLocation, yLocation, boxW, boxH);
}







function drawBox() {
    // Extra credit: Define a rectangle draw function and make sure 
    // that each rectangle object has a draw: attribute whose value
    // is your new rectangle draw function, and make sure the new
    // rectangle draw function uses “this” notation to refer to the
    // rectangle object being drawn.
    // var this.x = ?
    // rect(this.x, this.y, this.w, this.h);
}


