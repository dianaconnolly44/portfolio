var ballX = 200;
var ballY = 200;
var dir = 1;
var speed = 5;
var sizeDir = 1;

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

  //BALL SIZE
  ballSize += sizeDir * 5; //ball is increasing in size by 5
  if (ballSize > 400) {
    sizeDir = -sizeDir; //when ball is max size, start shrinking
  }
  if (ballSize <= 0) {
    sizeDir = -sizeDir; //when ball is min size, start growing
  }

  checkCollisions(); //checks to see if the ball has hit a wall or paddle
}

function ballMove() {
  //ballY += dir * 0;
  ballX += dir * speed;
}


function checkCollisions() {
  //if ball hits right or left wall
  if (ballX >= (width - (ballSize / 2)) || ballX <= (ballSize / 2)) {
    dir = -dir;
    ballMove();
  }
}