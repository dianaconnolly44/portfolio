function setup() {
	createCanvas(300,300);
	background(150);

for (var i=0; i<10; i+=1) {
	strokeWeight(2);
	fill(255-i*20);
	rect(5+i*30, 5+i*30, 20+i*8, 20);
	}
}

function draw() {
	}

//While loops
// while (i<width) {
// 	line(i,10,i,150);
// 	i +=10;
// }

//Rects going to bottom right, growing in width
// for (var i=0; i<10; i+=1) {
// 	strokeWeight(2);
// 	rect(5+i*30, 5+i*30, 20+i*8, 20);
// 	}

//Rects going to bottom right
// for (var i=0; i<10; i+=1) {
// 	strokeWeight(3);
// 	rect(5+i*30, 5+i*30, 20, 20);
// 	}

//Lines going to right wall
// for (var i=10; i<width; i+=10) {
// 	strokeWeight(3);
// 	line(i, 10, i, 100);


//Angled bowing lines
// //initialValue + i*increment
// 	var a = (15 + i*15) //10, 20, 30...
// 	var b = (17 + i*20)
// 	var c = (16 + i*17)
// 	line(a, 0, b, height/2);
// 	line(b, height/2, a, height);