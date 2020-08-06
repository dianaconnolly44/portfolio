//Diana Connolly
//Section A, Tuesdays 9am
//dconnoll@andrew.cmu.edu
//Assignment-06-C

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background("LightPink");
    
    var h = nf(hour(), 2, 0);
    var m = nf(minute(), 2, 0);
    var s = nf(second(), 2, 0);
    if (h>12) {
        h = nf(hour()-12, 2, 0); //makes the clock reader be in 12-hours
    }
    textAlign(CENTER);
    fill(0);
    text(h+":"+m+":"+s, width/2, height/10); //clock reader - writes out time
    
    fill(255, 70);
    noStroke();
    ellipse(width/2, height/2, 225,225); //clock backing

    //1 through 12 circle markings
    push();
    translate(width/2, height/2);
    fill(0);
    ellipse(0, -100, 5,5);
    ellipse(0, 100, 5,5);
    ellipse(-100, 0, 5,5);
    ellipse(100, 0, 5,5);
    rotate(PI/6);
    ellipse(0, -100, 5,5);
    ellipse(0, 100, 5,5);
    ellipse(-100, 0, 5,5);
    ellipse(100, 0, 5,5);
    rotate(PI/6);
    ellipse(0, -100, 5,5);
    ellipse(0, 100, 5,5);
    ellipse(-100, 0, 5,5);
    ellipse(100, 0, 5,5);
    pop();

    //Seconds Hand
    push();
    translate(width/2, height/2);
    rotate(radians(second()*6));
    rectMode(CORNER);
    stroke(0);
    fill("red");
    rect(-1,-100, 2, 100);
    pop();

    //Minutes Hand
    push();
    translate(width/2, height/2);
    rotate(radians(minute() * 6));
    rectMode(CORNER);
    stroke(0);
    fill(0);
    rect(-3,-75, 6, 75);
    pop();

    //Hour Hand
    push();
    translate(width/2, height/2);
    rotate(radians(hour() * 30));
    rectMode(CORNER);
    stroke(0);
    fill(0);
    rect(-6,-50, 12, 50);
    pop();

    fill("red");
    stroke(0);
    ellipse(width/2, height/2, 15,15); //center point
}