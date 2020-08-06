function setup() {
    createCanvas(400, 400);
    frameRate(10);
}

function draw() {
    background(240);
    push();
    translate(200, 350);
    drawBranch(0, 30);
    pop();
}

function drawBranch(depth, len) {
    line(0, 0, 0, -len);
    push();
    translate(0, -len);
    drawTree(depth + 1, len);
    pop();
}

function drawTree(depth, len) {
    if (depth < 8) {
        var angle = 100 * (noise(millis() / 4000) - 0.5);
        rotate(radians(-angle));
        drawBranch(depth, len);
        rotate(radians(angle));
        drawBranch(depth, len);
    }
}