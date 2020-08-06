//Why not just put distThreshold where d is, and not create a third nearMouse parameter?
//That would work, would make it less complex without third parameter


var distThreshold = 30;

function setup() {
    createCanvas(300, 200);
    noStroke();
    frameRate(5);
}

function draw() {
    background(0);
    for (var y = 0; y < height; y += 20) {
        for (var x = 0; x < width; x += 20) {
            fill(0, 200, 0);
            if (nearMouse(x, y, distThreshold)) {
                rect(x, y, 10, 10);
            }
        }
    }
}

function nearMouse(x, y, d) {
    return dist(x, y, mouseX, mouseY) < d;
}


//put in drawRow function

// function setup() {
//     createCanvas(600, 400);
//     noStroke();
// }

// function draw() {
//     background(0);
//     for (var y = 0; y < height+25; y += 1) {
//         drawRow(y, 50);
//     }
//     noLoop();
// }

// function drawRow(thisIsY, diameter) {
// 	//var thisIsY = ...whatever got passed by the caller
// 	//var diameter = ...whatever got passed by the caller
// 	for (var x=0; x<width+25; x+=1) {
// 		fill(140);
// 		ellipse(x*50, thisIsY*50, diameter, diameter);
// 	}
// }