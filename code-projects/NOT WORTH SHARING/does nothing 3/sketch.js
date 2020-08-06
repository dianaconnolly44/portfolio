var xpos = [];
var ypos = [];
var moving = false;

function setup() {
    createCanvas(400, 400);
    strokeWeight(5);
}


function draw() {
    background(200, 200, 200);
    for (var i = 0; i < xpos.length - 1; i++) {
        line(xpos[i], ypos[i], xpos[i + 1], ypos[i + 1])
    }
    if (xpos.length > 20) {
        xpos.shift(1);
        ypos.shift(1);
    }
}

function mouseDragged() {
    xpos.push(mouseX);
    ypos.push(mouseY);
    moving = true
}


