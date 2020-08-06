function setup() { 
	createCanvas(400, 550);
	noLoop(); 
}


function draw() {
	background("LightBlue"); 
	
	drawSun(135,50);
	bear(50,120);
	raccoon();
	tree();
	deer();
	owl();
	flower();


// for (var x = 0; x < width; x += 1) {
// 		for (var y = 0; y < height; y += 1) {
// 			bear(x, y);
// 		}
// 	}	

}


function drawSun(xSun, ySun) {
	noStroke();
	fill("yellow");
    ellipse(xSun, ySun, 29, 29); //Center circle
    //Spikes
    triangle(xSun + 5, ySun-20, xSun, ySun-33, xSun - 5, ySun-20);//Top spike
    triangle(xSun + 5, ySun+20, xSun, ySun+33, xSun - 5, ySun+20);//Bottom spike
    triangle(xSun-20, ySun + 5, xSun - 30, ySun, xSun-20, ySun - 5);//Left spike
    triangle(xSun+20, ySun + 5, xSun + 30, ySun, xSun+20, ySun - 5);//Right spike
    triangle(xSun + 12, ySun + 17, xSun + 24, ySun + 23, xSun +18, ySun + 10);//Bottom right spike
    triangle(xSun + 12, ySun - 17, xSun + 24, ySun - 23, xSun +18, ySun -10);//Top right spike
    triangle(xSun - 12, ySun + 17, xSun - 24, ySun + 23, xSun -18, ySun + 10);//Bottom left spike
    triangle(xSun - 12, ySun - 17, xSun - 24, ySun -23, xSun -18, ySun - 10);//Top left spike
}


function bear(xBear, yBear) {
	fill(126,85,38);
		ellipse(xBear,yBear,50,55); //head
		ellipse(xBear-20,yBear-20,15,15); //left ear
		ellipse(xBear+20,yBear-20,15,15); //right ear
	fill(158,111,57);
		ellipse(xBear,yBear+7,22,25); //snout
	fill(0);
		triangle(xBear-5,yBear+4, xBear,yBear+9, xBear+5,yBear+4); //nose
		ellipse(xBear-15,yBear-5, 5,5); //left eye
		ellipse(xBear+15,yBear-5, 5,5); //right eye
}

function raccoon (xRaccoon, yRaccoon) {
	var xRaccoon = 135;
	var yRacoon = 190;
	fill(150);
		ellipse(xRaccoon, yRacoon, 45, 40); //head
		triangle(xRaccoon-13,yRacoon-15, xRaccoon-22,yRacoon-20, xRaccoon-22,yRacoon-5); //left ear
		triangle(xRaccoon+13,yRacoon-15, xRaccoon+22,yRacoon-20, xRaccoon+22,yRacoon-5); //right ear
	fill(0);
		ellipse(xRaccoon, yRacoon+8, 10,5); //nose
	fill(100);
		ellipse(xRaccoon-10, yRacoon, 15, 10); //left eye patch
		ellipse(xRaccoon+10, yRacoon, 15, 10); //right eye patch
	fill(0);
		ellipse(xRaccoon-10, yRacoon, 5,5); //left eye
		ellipse(xRaccoon+10, yRacoon, 5,5); //right eye
}

function tree (xTree, yTree) {
	var xTree = 50;
	var yTree = 260;
	fill(28,118,108);
		ellipse(xTree, yTree, 70, 90); //leaves
	fill(158,111,57);
		triangle(xTree-5,yTree+90, xTree, yTree-20, xTree+5,yTree+90); //trunk
		triangle(xTree-2,yTree+5, xTree,yTree+15, xTree-20, yTree-20); //left branch
		triangle(xTree+2,yTree+20, xTree,yTree+30, xTree+20, yTree-5); //right branch
}

function deer(xDeer, yDeer) {
	var xDeer = 135;
	var yDeer = 360;
	fill(158,111,57);
		ellipse(xDeer, yDeer, 35,50); //head
		quad(xDeer-4,yDeer-18, xDeer-14,yDeer-30, xDeer-24,yDeer-32, xDeer-20, yDeer-23); //left ear
		quad(xDeer+4,yDeer-18, xDeer+14,yDeer-30, xDeer+24,yDeer-32, xDeer+20, yDeer-23); //left ear
	fill(0);
		ellipse(xDeer-10,yDeer+2, 5,5); //left eye
		ellipse(xDeer+10,yDeer+2, 5,5); //right eye
		triangle(xDeer-5,yDeer+15, xDeer,yDeer+20, xDeer+5,yDeer+15); //nose
}

function owl(xOwl, yOwl) {
	var xOwl = 50;
	var yOwl = 430;
	fill(150);
		ellipse(xOwl, yOwl, 50,40);
		triangle(xOwl-13,yOwl-15, xOwl-22,yOwl-20, xOwl-22,yOwl-5); //left ear
		triangle(xOwl+13,yOwl-15, xOwl+22,yOwl-20, xOwl+22,yOwl-5); //right ear
	fill("yellow");
		ellipse(xOwl-10,yOwl-2, 20,20); //left eye patch
		ellipse(xOwl+10,yOwl-2, 20,20); //left eye patch
	fill(0);
		ellipse(xOwl-10,yOwl-2,5,5); //left eye
		ellipse(xOwl+10,yOwl-2,5,5); //right eye
	fill("brown");
		triangle(xOwl-5,yOwl+7, xOwl,yOwl+15, xOwl+5,yOwl+7)
}

function flower(xFlower, yFlower) {
	var xFlower = 135;
	var yFlower = 500;
	var wPetal = 10;
	var hPetal = 20;
	//Petals
	push();
	fill("lightpink");
	translate(xFlower,yFlower);
		ellipse(0,-15, wPetal,hPetal);
		ellipse(0,15, wPetal,hPetal);
	rotate(radians(45));
		ellipse(0,-15, wPetal,hPetal);
		ellipse(0,15, wPetal,hPetal);
	rotate(radians(45));
		ellipse(0,-15, wPetal,hPetal);
		ellipse(0,15, wPetal,hPetal);
	rotate(radians(45));
		ellipse(0,-15, wPetal,hPetal);
		ellipse(0,15, wPetal,hPetal);
	pop();
	//Center of Flower
	fill("orange");
		ellipse(xFlower,yFlower, 15,15);
}


// function draw() {
// 	//loop cawfee function 
// 	for (var x = -150; x < width + 200; x += 100) {
// 		for (var y = 0; y < height; y += 100) {
// 			cawfee(x, y);
// 		}
// 	}	
// 	//loop bean function 
// 	for (var x = -5; x < width; x += 97) {
// 		for (var y = 20; y < height + 100; y += 100) {
// 			bean(x, y); 
// 		}
// 	}
// 	}	

// //coffee cup 
// function cawfee(x, y) {
// 	noStroke();
// 	angleMode(DEGREES); 
// 	fill(54, 40, 21);
// 	ellipse(x + 50, y + 20, 60, 8);  
// 	fill(255); 
// 	arc(x + 50, y + 20, 60, 60, 0, 180, OPEN); 
// 	noFill();
// 	stroke(255);
// 	strokeWeight(2); 
// 	arc(x + 60, y + 30, 60, 15, 315, 100, OPEN); 	
// }

// //coffee bean 
// function bean(x, y) {
// 	push();
// 	noStroke();
// 	angleMode(DEGREES); 
// 	fill(54, 40, 21); 
// 	arc(x + 20, y + 60, 15, 30, 250, 120, CHORD); 
// 	arc(x + 15, y + 60, 30, 30, 110, 250, CHORD); 
// 	pop(); 
// }