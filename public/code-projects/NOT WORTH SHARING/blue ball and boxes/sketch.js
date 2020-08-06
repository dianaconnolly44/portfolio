function setup() {
	createCanvas(300,300);
	background(150);
}

function draw() {
  	yay();
  	house(10,10);
  	boxes(30,70);

}

function yay() {
	fill("blue");
	ellipse(100,100,50,50);
	rect(60,60,20,30);
  	rect(110,60,20,30);
}

//function house(x,y) {
// 	walls()
// 	roof()
// 	door()
// 	windo()
// }