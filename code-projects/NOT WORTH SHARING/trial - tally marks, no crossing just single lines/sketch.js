var gClickCount = 0;
var hatchCount = 0;

function setup() {
    createCanvas(800, 200);
    background("lightPink");
}

function draw() {
	for (i=0; i<gClickCount; i++) {
		strokeWeight(2);
		line(10+10*i, 100, 10+10*i,150);
		if (gClickCount%5==0) {
			for (j=0; j<hatchCount; j++) {
				line(20,20, 30,30);
			}
		}
	}
}

function mousePressed() {
	gClickCount ++;
}
