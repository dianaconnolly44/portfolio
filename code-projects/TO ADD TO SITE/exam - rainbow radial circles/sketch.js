// Lab Exam 2, Problem A
// dconnoll@andrew.cmu.edu


function setup() {
    createCanvas(640,480);
    background(210);
}

function draw() {
    //NOTE:
    //I tried to make a for loop that would draw all 4 of the rings of circles at once, but it didn't work:

    // push();
    // translate(width/2, height/2);
    // rotate(radians(45));
    // for (a=0; a<9; a++) {
    //  var hue = 360 - 45*a;
    //  var saturation = 100 - 70 + 20*a;
    //  hsCircle(30+25*a, 30+25*a, 20-5*a, hue, saturation);
    // }
    // pop();

    //NOTE:
    //I instead just made 4 different for loops for each ring of circles, within the "drawCircles" function.
    for(i=0; i<9; i++) {
        drawCircles();
    }
    noLoop();
}

function hsCircle(x, y, d, h, s) {
    colorMode(HSB); 
    fill(h, s, 90);
    ellipse(x, y, d, d);
}



function drawCircles() {
    push(); //inner ring of circles
    translate(width/2, height/2);
    for(m=0; m<9; m++) {
        rotate(radians(45*i));
        var x = 30;
        var y = 30;
        var d = 20;
        var hue = 360 - 45*m;
        var saturation = 100 - 70;
        hsCircle(x, y, d, hue, saturation);
    }
    pop();

    push(); //second ring of circles
    translate(width/2, height/2);
    for(j=0; j<9; j++) {
        rotate(radians(45*i));
        var x = 55;
        var y = 55;
        var d = 15;
        var hue = 360 - 45*j;
        var saturation = 100 - 50;
        hsCircle(x, y, d, hue, saturation);
    }
    pop();
    
    push(); //third ring of circles
    translate(width/2, height/2);
    for(k=0; k<9; k++) {
        rotate(radians(45*i));
        var x = 80;
        var y = 80;
        var d = 10;
        var hue = 360 - 45*k;
        var saturation = 100 - 30;
        hsCircle(x, y, d, hue, saturation);
    }
    pop();

    push(); //outer ring of circles
    translate(width/2, height/2);
    for(l=0; l<9; l++) {
        rotate(radians(45*i));
        var x = 105;
        var y = 105;
        var d = 5;
        var hue = 360 - 45*l;
        var saturation = 100;
        hsCircle(x, y, d, hue, saturation);
    }
    pop();
}
