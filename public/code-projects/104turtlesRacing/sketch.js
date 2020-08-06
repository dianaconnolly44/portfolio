// 15-104 Fall 2016 Lab Exam 3
// Part A (template)
//diana connolly

var N = 4; // number of turtles
var start = 20;
var finish;
var started = false; // has the race started yet?
// more global variables here (?)
var turtle1;
var turtle2;
var turtle3;
var turtle4;
var turtles = [turtle1, turtle2, turtle3, turtle4];


function setup() {
    createCanvas(640, 300);
    // initialize finish now that we know width
    finish = width - start;
    // create N turtles here (initially, develop solution with just 1 turtle)
    
    for (j=0; j<4; j++) {
        turtles[j] = makeTurtle(start,50+50*j);
        turtles[j].penDown();
    }
}


// define the function raceFinish() here ...
//     raceFinish() should:
//        print the winning turtle number, e.g. "Turtle number 0 won the race."
//        call noLoop() to stop drawing
function raceFinish() { //I don't know why a weird shape is made behind the text?
    if (turtles[0].x > finish) {
        fill(0);
        rect(300,290,100,100);
        text("Turtle " + 1 + " won the race", 300,290);
        noLoop();
    } else if (turtles[1].x > finish) {
        fill(0);
        rect(300,290,100,100);
        text("Turtle " + 2 + " won the race", 300,290);
        noLoop();
    } else if (turtles[2].x > finish) {
        fill(0);
        rect(300,290,100,100);
        text("Turtle " + 3 + " won the race", 300,290);
        noLoop();
    } else if (turtles[3].x > finish) {
        fill(0);
        rect(300,290,100,100);
        text("Turtle " + 4 + " won the race", 300,290);
        noLoop();
    }
}


function keyPressed() {
    // start the race
    started = true;
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    // starting line
    line(start, 0, start, height);
    // finish line
    strokeWeight(5);
    line(finish, 0, finish, height);
    // for each turtle...
    //     move the turtle forward a random amount (if the race has started)
    if (started == true) {
        for (i=0; i<4; i++) {
            turtles[i].penUp();
        }
    } else if (started == false) { //don't know why the race automatically starts even though started is initialized to false ?
        for (i=0; i<4; i++) {
            turtles[i].point(start, 50+50*i);
        }
    }
    //     draw the turtle
    for (i=0; i<4; i++) {
        turtles[i].point();
        turtles[i].forward(random(2));
    }

    //     if the turtle won the race, do something 
    // if there is a winner, call raceFinish()
    raceFinish();
}

// THE TURTLE API IS HERE. THESE ARE ALL THE TURTLE METHODS YOU MIGHT NEED
//
// makeTurtle(x, y) -- make a turtle at x, y, facing right, pen down
// turtle.x, turtle.y -- these properties hold the location of the turtle
// left(d) -- turn left by d degrees
// right(d) -- turn right by d degrees
// forward(p) -- move forward by p pixels
// back(p) -- move back by p pixels
// penDown() -- pen down
// penUp() -- pen up
// setColor(color) -- set the drawing color
// setWeight(w) -- set line width to w
// face(d) -- turn to this absolute direction in degrees
// distanceTo(x, y) -- how far is it to location x, y?
// point() -- mark a filled circle at current location

// !!!DO NOT CHANGE OR EVEN READ THE FOLLOWING!!!
function turtleLeft(d){this.angle-=d;}function turtleRight(d){this.angle+=d;}
function turtleForward(p){var rad=radians(this.angle);var newx=this.x+cos(rad)*p;
var newy=this.y+sin(rad)*p;this.goto(newx,newy);}function turtleBack(p){
this.forward(-p);}function turtlePenDown(){this.penIsDown=true;}
var tco=["red","green","blue","yellow","white","orange"];var tcnt=0;
function turtlePenUp(){this.penIsDown = false;}function turtleGoTo(x,y){
if(this.penIsDown){stroke(this.color);strokeWeight(this.weight);
line(this.x,this.y,x,y);}this.x = x;this.y = y;}function turtleDistTo(x,y){
return sqrt(sq(this.x-x)+sq(this.y-y));}function turtleAngleTo(x,y){
var absAngle=degrees(atan2(y-this.y,x-this.x));
var angle=((absAngle-this.angle)+360)%360.0;return angle;}
function turtleTurnToward(x,y,d){var angle = this.angleTo(x,y);if(angle< 180){
this.angle+=d;}else{this.angle-=d;}}function turtleSetColor(c){this.color=c;}
function turtleSetWeight(w){this.weight=w;}function turtleFace(angle){
this.angle = angle;}function turtlePoint(){stroke(this.color),strokeWeight
(this.weight);point(this.x,this.y);}function makeTurtle(tx,ty){var turtle={x:tx,
y:ty,angle:0.0,penIsDown:true,color:tco[tcnt%tco.length],weight:20,
left:turtleLeft,right:turtleRight,forward:turtleForward,back:turtleBack,
penDown:turtlePenDown,penUp:turtlePenUp,goto:turtleGoTo,angleto:turtleAngleTo,
point:turtlePoint,turnToward:turtleTurnToward,distanceTo:turtleDistTo
,angleTo:turtleAngleTo,setColor:turtleSetColor,setWeight:turtleSetWeight,
face:turtleFace};tcnt++;return turtle;}
