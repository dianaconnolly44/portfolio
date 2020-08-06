var underlyingImage;

function preload() {
    var myImageURL = "http://i.imgur.com/HsqTrHo.jpg";
    underlyingImage = loadImage(myImageURL);
}

function setup() {
    createCanvas(800, 500);
    background(0);
    underlyingImage.loadPixels();
    frameRate(10);
}

function draw() {
    var px = random(width);
    var py = random(height);
    var ix = constrain(floor(px), 0, width-1);
    var iy = constrain(floor(py), 0, height-1);
    var theColorAtLocationXY = underlyingImage.get(ix, iy);

    noStroke();
    fill(theColorAtLocationXY);
    triangle(px, py, px+6, py-12, px+12, py);

    // var theColorAtTheMouse = underlyingImage.get(mouseX, mouseY);
    // stroke(theColorAtTheMouse);
    // line(pmouseX, pmouseY, mouseX, mouseY);
}