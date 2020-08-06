//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-10-B

function setup() {
    createCanvas(600,400);
    background(0);
    drawSeeds(); //calls the below function
}

function drawSeeds() {
    var cy = height/2; //center y
    var cx = width/2; //center x
    var goldenAngle = 137.5077640; //golden angle

    var turtle2 = makeTurtle(cx,cy); //a turtle to determine seed location
    turtle2.penUp(); //needed to not draw all of turtle2's path

    for (var i = 0; i < 200; i++) { //draws 200 seeds
      turtle2.forward(i*1.7); //steps forward by increasing distances
      turtle2.left(goldenAngle); //each seed is drawn at a rotation of the golden angle
      draw1Seed(turtle2.x, turtle2.y); //draws a seed at each of turtle2's locations
    }
}

function draw1Seed(x,y) {
    strokeJoin(MITER);
    strokeCap(PROJECT);

    var turtle = makeTurtle(x, y); //sets up drawing for 1 seed
    turtle.penDown(); //puts down pen to start drawing a seed
    turtle.setColor("yellow");

    for (var i = 0; i < 6; i++) { //draws hexagonal seed
      turtle.left(60);
      turtle.forward(4);
    }
    turtle.penUp(); //picks up pen in order to move on to next seed
}








//-------------------------------------------------------------
//GIVEN CODE:

function turtleLeft(d) {
    this.angle -= d;
}
 
 
function turtleRight(d) {
    this.angle += d;
}
 
 
function turtleForward(p) {
    var rad = radians(this.angle);
    var newx = this.x + cos(rad) * p;
    var newy = this.y + sin(rad) * p;
    this.goto(newx, newy);
}
 
 
function turtleBack(p) {
    this.forward(-p);
}
 
 
function turtlePenDown() {
    this.penIsDown = true;
}
 
 
function turtlePenUp() {
    this.penIsDown = false;
}
 
 
function turtleGoTo(x, y) {
    if (this.penIsDown) {
      stroke(this.color);
      strokeWeight(this.weight);
      line(this.x, this.y, x, y);
    }
    this.x = x;
    this.y = y;
}
 
 
function turtleDistTo(x, y) {
    return sqrt(sq(this.x - x) + sq(this.y - y));
}
 
 
function turtleAngleTo(x, y) {
    var absAngle = degrees(atan2(y - this.y, x - this.x));
    var angle = ((absAngle - this.angle) + 360) % 360.0;
    return angle;
}
 
 
function turtleTurnToward(x, y, d) {
    var angle = this.angleTo(x, y);
    if (angle < 180) {
        this.angle += d;
    } else {
        this.angle -= d;
    }
}
 
 
function turtleSetColor(c) {
    this.color = c;
}
 
 
function turtleSetWeight(w) {
    this.weight = w;
}
 
 
function turtleFace(angle) {
    this.angle = angle;
}
 
 
function makeTurtle(tx, ty) {
    var turtle = {x: tx, y: ty,
                  angle: 0.0, 
                  penIsDown: true,
                  color: color(128),
                  weight: 1,
                  left: turtleLeft, right: turtleRight,
                  forward: turtleForward, back: turtleBack,
                  penDown: turtlePenDown, penUp: turtlePenUp,
                  goto: turtleGoTo, angleto: turtleAngleTo,
                  turnToward: turtleTurnToward,
                  distanceTo: turtleDistTo, angleTo: turtleAngleTo,
                  setColor: turtleSetColor, setWeight: turtleSetWeight,
                  face: turtleFace};
    return turtle;
}