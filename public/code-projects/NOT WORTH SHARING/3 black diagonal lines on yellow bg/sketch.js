function setup() {
	createCanvas(500,500);
	background("yellow");

}

function draw() {
	var x1 = 90;
 	var x2 = x1+30;
 	var y1 = 150;
 	var y2 = y1-30;
 	strokeWeight(3);

 	for (i=0; i<4; i++) {
 		line(150+10*i, 100, 20+10*i, 200);
 	}
}