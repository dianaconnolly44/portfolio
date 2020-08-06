var x = [];
var y = [];
var ox;
var oy;
var cx = mouseX;
var cy = mouseY;

function setup() {
	createCanvas(300,300);
	background(210);
	strokeWeight(9);
	stroke(255);
}

function draw() {
if(mouseIsPressed) {
	for(i=0; i<x.length-1; i++) {
        snake();
    }
    ox = mouseX;
    oy = mouseY;
	x.push(ox);
	y.push(oy);
}
}


function snake() {
  line(mouseX, mouseY, x, y);
}

// function mousePressed() {
// 	push();
// 	translate(x,y);
// 	snake(0, mouseX, mouseY);
// }