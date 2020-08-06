// Diana Connolly
// Section A, Tuesdays at 9:00AM
// dconnoll@andrew.cmu.edu
// Assignment-03-B

var ballX = 200;
var ballY = 200;
var dir = 1;
var horizontalV = 0;
var verticalV = 2;
var paddleWidth = 100;
var ballSize = 30;


function setup() {
    createCanvas(400, 400);
}

function draw() {
	background("LightGreen");
	
	//The ball
	fill("red");
	ellipse(ballX, ballY, ballSize, ballSize);
	
	//The paddle
	fill(0);
	rect(mouseX-paddleWidth/2, 350 , paddleWidth, 10);
	
  ballMove(); //makes the ball move
  checkCollisions(); //checks to see if the ball has hit a wall or paddle
}

function ballMove() {
    ballY -= dir*verticalV;
    ballX += dir*horizontalV;
}

function checkCollisions() {
  if (ballY < 400 + ballSize/2) //if ball is on the screen
  {
  //if ball hits top wall
    if (ballY < ballSize/2) {
        dir = -dir;
        horizontalV = random(-5,5);
    } 

  //if ball hits right or left wall
    if (ballX > width - ballSize/2 || ballX<(ballSize/2) && ballY < 400){
        dir = -dir;
        verticalV = random(-5,5);
    }

  //if ball hits paddle
    if (ballY + ballSize/2 >=350 && ballY + ballSize/2 < 360 && ballX>=mouseX-paddleWidth/2 && ballX<=mouseX+paddleWidth/2) {
        dir = -dir;
        horizontalV = random(-5,5);
    }
  }
  
//Reset to beginning once ball goes off the screen
    if (ballY > 580) {
        ballX = 200;
        ballY = 200;
        dir = 1;
        horizontalV = 0;
        verticalV = 2; 
    }
}

