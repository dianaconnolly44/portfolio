var ballX = 200;
var ballY = 200;
var dir = 1;
var horizontalV = 5;
var verticalV = 0;
var paddleWidth = 100;
var ballSize = 30;


function setup() {
    createCanvas(600, 400);
}

function draw() {
	background(0);
	
	//The ball
	var colR = map(ballX, 0, width, 239, 139);
	var colG = map(ballX, 0, width, 133, 45);
	var colB = map(ballX, 0, width, 238, 163);
	fill(colR, colG, colB);
	ellipse(ballX, ballY, ballSize, ballSize);
	
  ballMove(); //makes the ball move
  ballGrow();
  ballShrink();
  // ballCenter();
  checkCollisions(); //checks to see if the ball has hit a wall or paddle
}

function ballMove() {
    ballY += dir*verticalV;
    ballX += dir*horizontalV;
}

function ballGrow() {
  if (ballX > width/2 && ballX < width - ballSize/2) {
    ballSize +=.6;
  }
}

function ballShrink() {
  if (ballX < width/2 && ballX > ballSize/2) {
    ballSize -= .6;
  }
}


function checkCollisions() {
  //if ball hits right or left wall
    if (ballX > width - ballSize/2 || ballX<(ballSize/2)){
        dir = -dir;
    }
  }

