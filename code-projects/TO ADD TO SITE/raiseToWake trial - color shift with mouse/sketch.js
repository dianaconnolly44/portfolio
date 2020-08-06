function setup() {
	createCanvas (500, 500);
}

function draw() {
	var colR = map(mouseY, 0,height, 255, 153);
	var colG = map(mouseY, 0,height, 153, 51);
	var colB = map(mouseY, 0,height, 0, 255);


	background (colR, colG, colB);
	
}

function mousePressed() {

}