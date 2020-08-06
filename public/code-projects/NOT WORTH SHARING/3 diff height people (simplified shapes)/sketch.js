//Diana Connolly
//Section C, 1:30pm
//dconnoll@andrew.cmu.edu
//Assignment-02-B

var inch = 5;
var headAdult = inch*9;
var heightAdult = headAdult*7;
var head5 = inch*7;
var height5 = head5*5;
var head1 = inch*6;
var height1 = head1*3;

function setup() {
    createCanvas(350, 450);
    background(220);
}

function draw() {
    ellipseMode(CORNER);
    ellipse(50, 50, headAdult, headAdult); //Adult head
    ellipse(50, 95, headAdult, heightAdult); //Adult body
    ellipse(150, 200, head5, head5); //5 year old head
    ellipse(150, 235, head5, height5); // 5 year old body
    ellipse(250, 290, head1, head1); // 1 year old head
    ellipse(250, 320, head1, height1); // 1 year old body
}
