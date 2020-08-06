var ballX = 200;
var ballY = 200;
var dir = 1;
var speed = 5;
var ballSize = 30;
var sizeDir = 1;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  ellipse(ballX, ballY, ballSize, ballSize);

  ballMove();
  checkCollisions();
  
  ballSize += sizeDir*speed;
  
  changeBallSize();

}

function ballMove() {
  ballX += dir*speed;
}

function checkCollisions() {
  if (ballX > width - ballSize/2 || ballX < ballSize/2) {
    dir = -dir;
  }
}

function changeBallSize() {
  if (ballSize > 400) {
    sizeDir = -sizeDir;
    ballSize = 400;
  }
  if (ballSize <0) {
    sizeDir = -sizeDir;
    ballSize = 0;
  }
}














//   ballMove(); //makes the ball move

//   //BALL SIZE
//   ballSize += sizeDir * 5; //ball is increasing in size by 5
//   if (ballSize > 400) {
//     sizeDir = -sizeDir; //when ball is max size, start shrinking
//   }
//   if (ballSize <= 0) {
//     sizeDir = -sizeDir; //when ball is min size, start growing
//   }

//   checkCollisions(); //checks to see if the ball has hit a wall or paddle
// }

// function ballMove() {
//   //ballY += dir * 0;
//   ballX += dir * speed;
// }


// function checkCollisions() {
//   //if ball hits right or left wall
//   if (ballX >= (width - (ballSize / 2)) || ballX <= (ballSize / 2)) {
//     dir = -dir;
//     ballMove();
//   }
// }