function setup() {
	createCanvas (480, 270);
}
	
function draw() {
background (150);

stroke(0);
fill(255);
var x = 20;
var y = 0;
var spacing = 26;
var len = 100;

for(var i = 20; i<300; i += 20){
	strokeWeight(3);
	line(x, y, x*1.8, y + len);
	x = x+spacing;
	}
}
	
