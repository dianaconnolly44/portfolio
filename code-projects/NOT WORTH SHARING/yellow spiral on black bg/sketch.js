function setup() {
  createCanvas(600,400);
  background("black");
  strokeWeight(6);
  var turtle = makeTurtle(200,100);
  turtle.penDown();
  turtle.setColor("yellow");

  // turtle.forward(100);
  // turtle.right(90);
  // turtle.forward(200);

  for(i=0;i<1000; i++) {
    turtle.forward(3);
    turtle.right(1+i*.005);
  }
}



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