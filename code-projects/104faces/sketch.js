var eyeSize = 15;
var faceWidth = 200;
var faceHeight = 250;
var noseWidth = 20;
var noseHeight = 20;
var mouthHeight = 80;
var skinTone = ["#dc9a7a"];
var hairTone = ["#5a372a"];
var hairStyleType = 'drawMowhawk';

function setup() {
    createCanvas(480, 640);
}

function draw() {
    background(187,245,180);
    
    //Face
    noStroke();
    ellipseMode(CENTER);
    fill(skinTone);  
    ellipse(width / 2, height / 2, faceWidth,  faceHeight);

    //Ears
    noStroke();
    ellipse(width/2+faceWidth/2, height/2, 40, 50);
    ellipse(width/2-faceWidth/2, height/2, 40, 50);
    
    //Eyes
    var eyeLX = width / 2 - faceWidth * 0.3;
    var eyeRX = width / 2 + faceWidth * 0.3;
    fill(0);
    ellipse(eyeLX, height / 2 + faceHeight*.01,  eyeSize, eyeSize*1.5);
    ellipse(eyeRX, height / 2 + faceHeight*.01,  eyeSize, eyeSize*1.5);

    hairStyle();

    //Nose
    var noseX = width/2;
    var noseY = height/2 + faceHeight/11;
    noStroke();
    fill(205, 138, 107);
    ellipse(noseX, noseY, noseWidth, noseHeight);

    //Brows
    fill(hairTone);
    quad(eyeRX - faceWidth/8, height/2 - faceHeight/10, eyeRX + faceWidth/10, height/2 - faceHeight/10, eyeRX + faceWidth/18, height/2 - faceHeight/7, eyeRX - faceWidth/8, height/2 - faceHeight/7);
    quad(eyeLX - faceWidth/8, height/2 - faceHeight/10, eyeLX + faceWidth/10, height/2 - faceHeight/10, eyeLX + faceWidth/10, height/2 - faceHeight/7, eyeLX - faceWidth/18, height/2 - faceHeight/7);

    //Mouth
    fill(159, 67, 55);
    arc(width/2, height/2 + faceHeight/5, 40, mouthHeight, TWO_PI, PI, OPEN);
    
    }

function hairStyle() {
    if (hairStyleType == 'drawPuffyHair') {
        drawPuffyHair();
    }
    else if(hairStyleType == 'drawMowhawk') {
        drawMowhawk();
    }
    else if(hairStyleType == 'drawBald') {
        drawBald();
    }
}

function drawPuffyHair() {
    //Puffy Hair
    fill(hairTone);
    ellipse(width/2-faceWidth/3, height/2-faceHeight/3, faceWidth/3, faceHeight/4);
    ellipse(width/2-faceWidth/5, height/2-faceHeight/2, faceWidth/3, faceHeight/4);
    ellipse(width/2, height/2-faceHeight/1.8, faceWidth/3, faceHeight/4);
    ellipse(width/2, height/2 - faceHeight/3, faceWidth/2, faceHeight/4);
    ellipse(width/2+faceWidth/5, height/2-faceHeight/2, faceWidth/3, faceHeight/4);
    ellipse(width/2+faceWidth/3, height/2-faceHeight/3, faceWidth/3, faceHeight/4);
}

function drawMowhawk() {
    //Mowhawk
    fill(hairTone);
    quad(width/2, height/2 - faceHeight/2.5, width/2 + 20, height/2 - faceHeight/2.05, width/2, height/2 - faceHeight/1.1, width/2 - 20, height/2 - faceHeight/2.05);
}

function drawBald() {
    //Bald
    noFill();
    stroke(255, 255, 255, 95);
    strokeWeight(15);
    arc(width/2 + faceWidth/2 - 90, (height/2 - faceHeight/2) + 65, 80, 80, PI+PI/2, 7.2*PI/4);
}


function mousePressed() {
    // when the user clicks, these variables are reassigned
    // to random values within specified ranges. For example,
    // 'faceWidth' gets a random value between 75 and 150.
    faceWidth = random(200, 250);
    faceHeight = random(200, 300);
    noseWidth = random(10, 30);
    noseHeight = random(10, 15);
    mouthHeight = random(10, 80);
    skinTone = random(["#dc9a7a", "#f3bea1", "#a66a49"]);
    hairTone = random(["#5a372a", "#bb852f", "#1e0a03"]);
    hairStyleType = random(['drawPuffyHair', 'drawMowhawk', 'drawBald']);
}
