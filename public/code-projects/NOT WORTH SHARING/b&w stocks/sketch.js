var x = 0;
var cloudX = 0;

function setup() {
    createCanvas(600, 350);
}

function draw() {
    noStroke();
    if (hour() >= 12) { //makes background go from dark blue to orange every other half cycle
        var colors1 = nigth2day();
        background(colors1[0], colors1[1], colors1[2]);
    } else if (hour() < 12) { //makes background go from orange to dark blue every other half cycle
        var colors2 = day2night();
        background(colors2[0], colors2[1], colors2[2]);
    }
    theSun(); //calls sun function
    theMoon(); //calls moon function
    ground(); //calls ground function
    mountains(); //calls mountain function
    shootingStar();
    cloud();
}


//SHAPES:
function theSun() {
    push();
    translate(width/2, height);
    rotate(radians(hour()*15)); //rotates sun from 180˚ starting point, in a full circle every day
    fill("yellow");
    ellipse(0, height-50, 60,60); //sun rotates in a circle of diam=height-50
    pop();
}

function theMoon() {
    push();
    translate(width/2, height);
    rotate(radians(180+hour()*15)); //rotates moon from 0˚ starting point, in a full circle every day
    fill("lightBlue");
    ellipse(0, height-50, 60,60); //moon rotates in a circle of diam=height-50
    pop();
}

function shootingStar() {
    push();
    frameRate(width);
    if (second() <= 60) { //makes the shooting star go across screen per second
        x = x+10;
    }
    if (x>=width) { //makes shooting star start over again
        x = 0;
    }
    fill(255);
    ellipse(x, 30, 10,10);
    pop();

}

function cloud() {
    push();
    frameRate(width);
    if (minute() <= 60) { //makes cloud go across screen per minute
        cloudX = cloudX+(10/60);
    }
    if (cloudX>=width) { //makes cloud start over again
        cloudX = 0;
    }
    fill(255, 80);
    ellipse(cloudX-15, 110, 50,20);
    ellipse(cloudX, 100, 30,20);
    ellipse(cloudX+25, 107, 40,25);
    ellipse(cloudX+35, 115, 30,20);
    ellipse(cloudX+45, 110, 40,20);
    ellipse(cloudX, 110, 40,20);
    pop();

}

function ground() {
    if (hour() >= 12) { //makes ground go from purple to pink every other half cycle
        var colors3 = purple2pink();
        fill(colors3[0], colors3[1], colors3[2]);
    } else if (hour() < 12) { //makes ground go from pink to purple every other half cycle
        var colors4 = pink2purple();
        fill(colors4[0], colors4[1], colors4[2]);
    }
    rect(0, height/2 + 72, width, height/3);
}

function mountains() {
    //Middle mountain
    beginShape();
    fill(150);
    vertex(50, height/2+100);
    vertex(240, 130);
    vertex(width-60, height/2+100);
    endShape(CLOSE);

    //Right mountain
    beginShape();
    fill(225);
    vertex(width, height/2+35);
    vertex(width-30, height/2+10);
    vertex(width-50, height/2+20);
    vertex(width-88, 130);
    vertex(width-125, 170);
    vertex(width-140, 160);
    vertex(width/2-70, height-65);
    vertex(width, height-65);
    endShape(CLOSE);

    //Left mountain
    beginShape();
    fill(0);
    vertex(0, height/2+70);
    vertex(80, height/2);
    vertex(95, height/2+10);
    vertex(120, height/2-10);
    vertex(width/2+50, height-40);
    vertex(0, height-40);
    endShape(CLOSE);
}


//FILLS:
function nigth2day() { //dark blue to orange color gradient
    var colR1 = map(hour(), 0,12, 243, 44);
    var colG1 = map(hour(), 0,12, 135, 17);
    var colB1 = map(hour(), 0,12, 107,106);
    return [colR1, colG1, colB1];
}

function day2night() { //orange to dark blue color gradient
    var colR2 = map(hour(), 12,24, 44, 243);
    var colG2 = map(hour(), 12,24, 17, 135);
    var colB2 = map(hour(), 12,24, 106, 107);
    return [colR2, colG2, colB2];
}

function purple2pink() { //purple to pink color gradient
    var colR3 = map(hour(), 0,12, 192, 46);
    var colG3 = map(hour(), 0,12, 82, 73);
    var colB3 = map(hour(), 0,12, 105, 104);
    return [colR3, colG3, colB3];
}

function pink2purple() { //pink to purple color gradient
    var colR4 = map(hour(), 12,24, 46, 192);
    var colG4 = map(hour(), 12,24, 73, 82);
    var colB4 = map(hour(), 12,24, 104, 105);
    return [colR4, colG4, colB4];
}