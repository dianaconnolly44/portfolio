var ballX = 200; //ball X coord
var ballY = 200; //ball Y coord
var ballSize = 50; //ball diameter 
var xvel;
var yvel;
var dir = 1;


function setup() {
    createCanvas(400, 400);
    xvel = random(-5,5);
    yvel = random(-5,5);
  
}
 
function draw() {
    background(240); //fills canvas with the color white

    //BALL
    fill(150,255,200); //fills ball with light green
    strokeWeight(1); //gives ball an outline of 1-pixel thick
    stroke(0,0,0); //gives ball a black outline
    ballSize = map(mouseX, 0, width, 20, 70);
    ellipse(ballX, ballY, ballSize, ballSize); //draws the ball
    
    ballMove();
    checkCollisions();
    
    
    if (mouseY > height/2) {
      yvel = random(-5,5);
      ballMove();
    }
}

function ballMove() {
    ballX += xvel*dir; //moves the ball's x coordinates based on the assigned random horizontal velocity
    ballY += yvel*dir; //moves the ball's y coordinates based on the assigned random vertical velocity
}

function checkCollisions() {
    if (ballX >= width - ballSize/2 || ballX <= ballSize/2) {
      dir = -dir;
      ballMove();
      yvel = random(-5,5);
    } else if (ballY >= height - ballSize/2 || ballY <= ballSize/2) {
      dir = -dir;
      ballMove();
      xvel = random(-5,5);
    } else {
      ballMove();
    }
}

function mousePressed() {
    ballX = width/2;
    ballY = height/2;
}



// if ball is moving fast, it can "bleed" because the walls take a second to register it has hit.




