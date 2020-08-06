//Diana Connolly
//Section A, Tuesdays 9am
//dconnoll@andrew.cmu.edu
//Assignment-06-A

//the given values:
var val0 = 0.30;
var val1 = 0.45;
var val2 = 0.15;
var val3 = 0.10;

function setup() {
    createCanvas(400, 400);
    background("LightPink");
}

function draw() {
    //defines the 4 angles:
    var angle0 = TWO_PI*val0;
    var angle1 = TWO_PI*val1;
    var angle2 = TWO_PI*val2;
    var angle3 = TWO_PI*val3;
    //defines the 4 fills:
    var fill0 = 0;
    var fill1 = 255 * val0;
    var fill2 = 255 * (val0 + val1);
    var fill3 = 255;

    //draws the 4 arcs:
    push();
    translate(width/2, height/2);
    fill(fill0);
    arc(0, 0, 300,300, 0, angle0); //black piece
    rotate(angle0);
    fill(fill1);
    arc(0,0, 300,300, 0, angle1); //dark gray piece
    rotate(angle1);
    fill(fill2);
    arc(0,0, 300,300, 0, angle2); //gray piece
    rotate(angle2);
    fill(fill3);
    arc(0,0, 300,300, 0, angle3); //white piece
    pop();
    noFill();
    ellipse(width/2, height/2, 300,300); //outline for whole pie
}
    

function mousePressed() {
    val0 = random(0.1, 0.3);
    val1 = random(0.1, 0.3);
    val2 = random(0.1, 0.3);
    val3 = 1.0-(val0+val1+val2);
}


