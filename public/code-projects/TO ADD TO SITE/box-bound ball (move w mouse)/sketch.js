function setup() {
    createCanvas(200, 200);
    frameRate(10);
}

function draw() {
    background(200);
    fill(255); // white
    rect(50, 50, 100, 100); // just for reference
    fill(0); // black
    var x = max(min(mouseX, 135), 65); // upper limit of x is 150
    var y = max(min(mouseY, 135), 65);
    ellipse(x, y, 30, 30);

    println(mouseX.toString() + " " + mouseY.toString());

}