// create a ball object
var ball = {x: 300, dx: 3, y: 100, dy: 4.1};
 
// var aSound; // declare sound variables globally
 
function preload() {
    // load sound files here
    // aSound = loadSound("aSound.wav");
}
 
 
function setup() {
    createCanvas(600, 400);
}
 
 
function draw() {
    background(70, 140, 50);
    fill(250, 250, 100);
    ellipse(ball.x, ball.y, 50, 50);
 
    if (ball.x > width - 25) {
        ball.dx = -abs(ball.dx);
    } else if (ball.x < 25) {
        ball.dx = abs(ball.dx);
    }
    ball.x += ball.dx;
 
    if (ball.y > height - 25) {
        ball.dy = -abs(ball.dy);
    } else if (ball.y < 25) {
        ball.dy = abs(ball.dy);
    }
    ball.y += ball.dy;
}