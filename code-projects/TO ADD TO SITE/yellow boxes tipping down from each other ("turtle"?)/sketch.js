function setup() {
  createCanvas(600,400);
  background("black");
  
  // for (i=0; i<5; i++) {
  //     var turtle = makeTurtle(250+200*i,20+50*i);
  //     turtle.penDown();
  //     turtle.setColor("yellow");
  //     turtle.forward(100-10*i);
  //     turtle.right(90);
  //     turtle.forward(100);
  //     turtle.right(90);
  //     turtle.forward(100);
  //     turtle.right(90);
  //     turtle.forward(100);
  //     turtle.penUp();
  // }

  var turtle = makeTurtle(250,20);
  turtle.penDown();
  turtle.setColor("yellow");
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.penUp();

  var turtle2 = makeTurtle(420,90);
  turtle2.penDown();
  turtle2.setColor("yellow");
  turtle2.right(110);
  turtle2.forward(90);
  turtle2.right(90);
  turtle2.forward(90);
  turtle2.right(90);
  turtle2.forward(90);
  turtle2.right(90);
  turtle2.forward(90);
  turtle2.penUp();

  var turtle3 = makeTurtle(460,180);
  turtle3.penDown();
  turtle3.setColor("yellow");
  turtle3.right(140);
  turtle3.forward(80);
  turtle3.right(90);
  turtle3.forward(80);
  turtle3.right(90);
  turtle3.forward(80);
  turtle3.right(90);
  turtle3.forward(80);
  turtle3.penUp();

  var turtle4 = makeTurtle(440,270);
  turtle4.penDown();
  turtle4.setColor("yellow");
  turtle4.right(170);
  turtle4.forward(70);
  turtle4.right(90);
  turtle4.forward(70);
  turtle4.right(90);
  turtle4.forward(70);
  turtle4.right(90);
  turtle4.forward(70);
  turtle4.penUp();

  var turtle5 = makeTurtle(400,320);
  turtle5.penDown();
  turtle5.setColor("yellow");
  turtle5.right(200);
  turtle5.forward(60);
  turtle5.right(90);
  turtle5.forward(60);
  turtle5.right(90);
  turtle5.forward(60);
  turtle5.right(90);
  turtle5.forward(60);
  turtle5.penUp();  
}

function draw() {
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