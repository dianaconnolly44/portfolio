var stocks = [];

function setup() {
    createCanvas(400, 400);
    // create some random values
    for (var i = 0; i < width; i++) {
        stocks.push(height/4 + noise(i * 0.05) * height/2);
    }
    noLoop();
}

function draw() {
    background(100, 100, 100);
    strokeWeight(2);
    for (var i = 0; i < stocks.length - 1; i++) {
        if (stocks[i+1] > stocks[i]) {
            stroke(0,255,0);
        } else {
            stroke(255,0,0);
        }
        if (i>0 && stocks[i] > stocks[i+1] && stocks[i] > stocks[i-1]) {
            ellipse(i, height-stocks[i], 5,5);
        }
        // draw line from i to i+1
        line(i, height - stocks[i], i + 1, height - stocks[i + 1]);
    }
}


//var flower = {x: 100, y:200}, can call flower.x, flower.y
//drawFlower(flowerbed[i]) = BAD!!
//flowerbed[i].draw() = YES!!
//objects good bc each object knows how to draw itself
//functions to initialize objects and give them function properties
