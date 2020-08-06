var stocks = [];

function setup() {
    createCanvas(400, 400);
    // create some random values
    for (var i = 0; i < width; i++) {
        stocks.push(height/4 + noise(i * 0.05) * height/2);
    }
    noLoop();
}

function stockToY(s) {
    return height - s; //when stock bigger, want y to be smaller?
}

function draw() {
    background(100, 100, 100);
    strokeWeight(2);
    for (var i = 0; i < stocks.length - 1; i++) {
    //     if ((stocks[i+1] - stocks[i]) <= 0) {
    //     fill("red");
    // } else if { fill("green");}
        // draw line from i to i+1
        line(i, stockToY(stocks[i]), i + 1, stockToY(stocks[i + 1]));
    }
}