// Diana Connolly
// Section C, Tuesdays at 1:30
// dconnoll@andrew.cmu.edu
// Project-01

function setup() {
    createCanvas(600, 500);
}

function draw() {
	background(187,245,180);
	


	//Hair
	fill(102, 64, 46);  
	noStroke();  
	rect(150, 40, 300, 400, 150, 150, 0, 0);

	//Face
	fill(220, 154, 122);  
	noStroke();  
	ellipse(300, 237, 255,325);

	//Right Bang
	fill(102, 64, 46);  
	noStroke();  
	arc(450, 59, 260, 320, PI/2.0, PI, OPEN);
	fill(102, 64, 46);  
	noStroke();  
	arc(320, 180, 240, 240, PI+PI/2.2, PI/8.6, OPEN);

	//Left Bang
	fill(102, 64, 46);  
	noStroke();  
	arc(150, 59, 345, 320, 0, PI/2.0, OPEN);
	fill(102, 64, 46);  
	noStroke();  
	arc(289, 180, 240, 240, PI-PI/9.8, PI+PI/1.6, OPEN);

	//Ears
	fill(220, 154, 122);  
	noStroke();  
	ellipse(167, 245, 60,60);
	fill(220, 154, 122);  
	noStroke();  
	ellipse(432, 245, 60,60);

	//Nose
	fill(205, 138, 107);  
	noStroke();  
	ellipse(300, 257, 25,75);
	fill(205, 138, 107);  
	noStroke();  
	ellipse(300, 287, 45,23);

	//Mouth
	fill(181,83,70);
	arc(300, 330, 80, 40, TWO_PI, PI, OPEN);

	//Eyes
	fill(0);  
	noStroke();  
	ellipse(230, 237, 25,35);
	ellipse(370, 237, 25,35);




}
