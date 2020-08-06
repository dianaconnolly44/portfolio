var width = 500;
var height = 500;
var lineWidth = 400;
var ballX1 = width/2;
var ballX2 = width/2;
var ballX3 = width/2;
var ballY1 = height/4;
var ballY2 = height/2;
var ballY3 = 3*height/4;
var ballNumber;

var dragging = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  var colR = (map(ballX1, 50, 450, 0, 255));
  var colG = (map(ballX2, 50, 450, 0, 255));
  var colB = (map(ballX3, 50, 450, 0, 255));
  background(colR, colG, colB);
  
  //lines
  rectMode(CENTER);
  noStroke();
  fill(255);
  rect(width/2, height/4, lineWidth, 1);
  rect(width/2, height/2, lineWidth, 1);
  rect(width/2, 3*height/4, lineWidth, 1);
  
  //balls
  fill(255);
  ellipse(ballX1, ballY1, 30, 30);
  ellipse(ballX2, ballY2, 30, 30);
  ellipse(ballX3, ballY3, 30, 30);
  
  if (dragging) {
    if (ballNumber == 1) {
    ballX1 = mouseX;
    ballY1 = height/4;
    }
    else if (ballNumber == 2) { 
    ballX2 = mouseX;
    ballY2 = height/2;
    }

    else if (ballNumber == 3) {
    ballX3 = mouseX;
    ballY3 = 3*height/4;
    }
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, ballX1, ballY1) <= 15) {
  dragging = true;
  ballNumber = 1;
  }
  if (dist(mouseX, mouseY, ballX2, ballY2) <= 15) {
  dragging = true;
  ballNumber = 2;
  }
  if (dist(mouseX, mouseY, ballX3, ballY3) <= 15) {
  dragging = true;
  ballNumber = 3;
  }
}

function mouseReleased() {
  dragging = false;
  ballNumber = 0;
}
//   if (dist(mouseX, mouseY, ballX2, ballY2) <= 15) {
//   ballX2 = mouseX;
//   ballY2 = height/2;
//   }  
//   if (dist(mouseX, mouseY, ballX3, ballY3) <= 15) {
//   ballX3 = mouseX;
//   ballY3 = 3*height/4;
//   }  
// }

//How have drag ball without needing cursor to be inside ball?


