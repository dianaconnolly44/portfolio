var angle = 0;

function setup() {
    createCanvas(300, 300);
    frameRate(5);
}

function draw() {
    background(200);
    push();

    translate(width / 3, height / 2);
    fill(0, 200, 0);
    rotate(radians(angle * 0.5));
    rectMode(CENTER);
    rect(0, 0, 100, 100);
    pop();

    push();
    translate(2*width / 3, height / 2);
    fill(0, 0, 200);
    rotate(radians(angle));
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    pop();

    angle = angle + 4;
}