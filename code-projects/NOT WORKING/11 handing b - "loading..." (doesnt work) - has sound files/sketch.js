//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-11-B


// create a ball object
var ball = {x: 300, dx: 3, y: 100, dy: 4.1};
 
var boing; // declare sound variables globally
var boom;
var crash;
var boop;
 
function preload() {
    // load sound files here
    boing = loadSound("boiing.wav");
    boom = loadSound("boom.wav");
    crash = loadSound("crash.wav");
    boop = loadSound("boop.wav");
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
        boing.play(0,1,2);
    } else if (ball.x < 25) {
        ball.dx = abs(ball.dx);
        boom.play(0,1,2);
    }
    ball.x += ball.dx;
 
    if (ball.y > height - 25) {
        ball.dy = -abs(ball.dy);
        crash.play(0,1,2);
    } else if (ball.y < 25) {
        ball.dy = abs(ball.dy);
        boop.play(0,1,2);
    }
    ball.y += ball.dy;
}