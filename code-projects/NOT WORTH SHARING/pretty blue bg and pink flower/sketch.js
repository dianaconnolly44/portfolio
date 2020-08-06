var petalW = 25;
var petalH = 90;

function setup() {
	createCanvas(400,400);
}

function draw() {
	background("lightBlue");
	
	//1
	push();
	translate(width/2, height/2-35);
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//2
	push();
	translate(width/2 + 25, height/2 - 25);
	rotate(radians(45));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//3
	push();
	translate(width/2 + 40, height/2);
	rotate(radians(90));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//4
	push();
	translate(width/2 + 25, height/2 + 25);
	rotate(radians(135));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//5
	push();
	translate(width/2, height/2+35);
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//6
	push();
	translate(width/2 - 25, height/2 + 25);
	rotate(radians(225));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//7
	push();
	translate(width/2 - 35, height/2);
	rotate(radians(270));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
	
	//8
	push();
	translate(width/2 - 25, height/2 - 25);
	rotate(radians(315));
	noStroke();
	fill("LightPink");
	ellipse(0, 0, petalW, petalH);
	pop();
}