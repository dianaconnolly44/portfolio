var imloc = "http://i.imgur.com/qR0I6iF.png";
var myImage;

function preload() {
	myImage = loadImage(imloc);
}

function setup() {
	createCanvas(300,300);
	frameRate(10);
	myImage.loadPixels();
}

function draw() {
	background(230);
	image(myImage, 0,0);
	var c = myImage.get(mouseX, mouseY);
	var b = brightness(c);
	fill(0);
	text(b.toString(), 10,200);
	fill(c);
	rect(200,200,b,100);

	// if (b==100) {
	// 	line()
	// }

	for (x=0; x<width; x++) {
		for (y=0; y<height; y++) {
			if (b==100) {
				??
			}
		}
	}
}

//for every pixel, see if that's the brightest pixel so far
//for
	//for
		//image.get(x,y)
//if (brightness(c) > brightest so far) = brightest pixel!


//use brightness of pixel color to scale size of rect
//write loop over image to find brightest point