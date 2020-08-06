// Diana Connolly
// Section C, Tuesdays at 1:30
// dconnoll@andrew.cmu.edu
// Project-02-A

var a = 48;


function setup() {
    createCanvas(600, 300);
    background(200, 150, 100);
    noStroke(0);
 
    fill(250); 
    ellipseMode(CORNER);
    ellipse(a, a, a, a); //Left circle
    fill(0);
    rect(a*2, a*2, a, 3*a); //Black rect
    fill(100);
    rect(a*2, a, 3*a, a); // Horizontal grey rect
    fill(250); 
    ellipseMode(CORNER);
    ellipse(a*3, a*2, 2*a, 3*a); // Vertical white ellipse
    fill(200); 
    rect(a*2 +(3*a), a, 2*a, 2*a); //Light grey square
    fill(50);
    rect(a*5, a*3, 2*a, 2*a); // Dark grey square
    fill(250); 
    triangle((a*2+a*2+a*3), a, (a*4+a*4), a*3, (a*4+a*3), a*1+a*4); // White triangle 
}

