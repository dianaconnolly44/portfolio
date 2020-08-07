var nPoints = 100;
var x;
var y;


function setup() {
    createCanvas(680, 620);
}


function draw() {
    background(106,187,244); //blue background
    peach(60, 190, 100); //top left peach
    peach(80, width-200, 100); //top right peach
    peach(90, 200, height-270); //bottom left peach
    peach(70, width-190, height-240); //bottom right peach
}

//a general function that will draw a peach with given variables
function peach(a, shiftX, shiftY) {
    push();
    translate(shiftX, shiftY);
    rotate(radians(270));
    var a;
    var b = a / 2;
    var h = constrain(mouseY/8, 0, b);
    var ph = mouseX/50; 
    beginShape();
    for (var i = 0; i < nPoints; i++) {
        var t = map(i, 0, nPoints, 0, TWO_PI); 
        x = a * cos(t) * (1-cos(t)) - h * cos(ph + t * a);
        y = a * sin(t) * (1-cos(t)) - h * sin(ph + t * a);
        fill(244,148,106);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}