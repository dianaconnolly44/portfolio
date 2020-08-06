//Diana Connolly
//Section A, Tuesdays 9am
//dconnoll@andrew.cmu.edu
//Assignment-06-B


var vals = [0,0.30, 0.45, 0.15, 0.10];
var nVals = vals.length;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("LightPink");    
    push();
    translate(width/2, height/2);
    //Loop to draw the arcs:
    for (i=0; i<nVals; i++) {
        var endAngle;
        var fillColor;
        endAngle = TWO_PI*vals[i];
        println(vals[i+1]);
        println(endAngle);
        fillColor = 255 * ((i+1) / vals.length);
        if (i==0) {
            fillColor = 0;
        }
        fill(fillColor);
        arc(0,0, 300,300, 0, endAngle);
        rotate(TWO_PI*vals[i]);
    }
    pop();
}

//The given code:
function mousePressed() {
    background("LightPink");
    vals = [];
    var sum = 0;
    while (sum < 1.0) {
        var v = random(0.08, 0.38);
        sum += v = ((1.0 - (sum + v)) < 0.05) ? (1.0 - sum) : min(v, 1.0 - sum);
        vals.push(v);
    }
    nVals = vals.length;
}
