var img;

function preaload() {
	img = loadImage("http://i.imgur.com/42yPzTJ.png");
}

function setup() {
	createCanvas(400,400);
	frameRate(10);
}

function draw() {
	background(100);
	var scaleX = max(1, mouseX) / width;
	var scaleY = max(1, mouseY) / height;
	image(img, 10, 10, img.width / 3, img.height / 3);

	var x = constrain(mouseX, 0, img.width-1);
	var y = constrain(mouseY, 0, img.height-1);
	var smaller = img.get(x,y,100,100);
	image(smaller,10,200,180,180);
}