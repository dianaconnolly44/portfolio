
//Diana Connolly
//Section A, Tuesdays 9am
//dconnoll@andrew.cmu.edu
//Assignment-06-A

var vals = [0.30, 0.45, 0.15, 0.10];
var nVals = vals.length;

function setup() {
    createCanvas(400, 400);
    background("LightPink");
}

function draw() {
	var angle0 = TWO_PI*val0;
	var angle1 = TWO_PI*val1;
	var angle2 = TWO_PI*val2;
	var angle3 = TWO_PI*val3;
	var fill0 = 0;
	var fill1 = 255 * val0;
	var fill2 = 255 * (val0 + val1);
	var fill3 = 255;

	push();
	translate(width/2, height/2);
	fill(fill0);
	arc(0, 0, 300,300, 0, angle0); //black piece
	rotate(angle0);
	fill(fill1);
	arc(0,0, 300,300, 0, angle1); //dark gray piece
	rotate(angle1);
	fill(fill2);
	arc(0,0, 300,300, 0, angle2); //gray piece
	rotate(angle2);
	fill(fill3);
	arc(0,0, 300,300, 0, angle3); //white piece
	pop();
	noFill();
}

function mousePressed() {
    vals = [];
    var sum = 0;
    while (sum < 1.0) {
        var v = random(0.08, 0.38);
        sum += v = ((1.0 - (sum + v)) < 0.05) ? (1.0 - sum) : min(v, 1.0 - sum);
        vals.push(v);
    }
    nVals = vals.length;
}