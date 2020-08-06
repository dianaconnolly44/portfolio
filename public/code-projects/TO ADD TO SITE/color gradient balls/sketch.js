function setup() {
    createCanvas(600, 400);
    noStroke();
}

function draw() {
    background(0);
    for (var y = 50; y < height+50; y += 100) {
        for (var x = 50; x < width+50; x += 100) {
            var colX = map(x, 0, 600, 0, 255);
            var colY = map(y, 0, 400, 0, 255);
            fill(colX, colY, 150);
            ellipse(x, y, 100, 100);
        }
    }
    noLoop();
}