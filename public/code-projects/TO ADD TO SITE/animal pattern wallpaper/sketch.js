var eyeSize = 5;
var noseUnit = 5;

function setup() { 
    createCanvas(790, 550);
    noLoop(); 
}

function draw() {
    background("LightBlue"); 
    noStroke();
    //Loop sun
    for (var xSun = 135; xSun < width; xSun += 200) {
        for (var ySun = 50; ySun < height; ySun += 800) {
            drawSun(xSun, ySun);}
        }	
    //Loop bear
    for (var xBear = 50; xBear < width; xBear += 200) {
        for (var yBear = 120; yBear < height; yBear += 800) {
            bear(xBear, yBear);}
        }	
    //Loop raccoon
    for (var xRaccoon = 135; xRaccoon < width; xRaccoon += 200) {
        for (var yRaccoon = 190; yRaccoon < height; yRaccoon += 800) {
            raccoon(xRaccoon, yRaccoon);}
        }	
    //Loop tree
    for (var xTree = 50; xTree < width; xTree += 200) {
        for (var yTree = 260; yTree < height; yTree += 800) {
            tree(xTree, yTree);}
        }	
    //Loop deer
    for (var xDeer = 135; xDeer < width; xDeer += 200) {
        for (var yDeer = 360; yDeer < height; yDeer += 800) {
            deer(xDeer, yDeer);}
        }
    //Loop owl
    for (var xOwl = 50; xOwl < width; xOwl += 200) {
        for (var yOwl = 430; yOwl < height; yOwl += 800) {
            owl(xOwl, yOwl);}
        }	
    //Loop flower
    for (var xFlower = 135; xFlower < width; xFlower += 200) {
        for (var yFlower = 500; yFlower < height; yFlower += 800) {
            flower(xFlower, yFlower);}
        }
}




function drawSun(xSun, ySun) {
    fill("yellow");
    var diamSun = 29;
    ellipse(xSun, ySun, diamSun, diamSun); //Center circle
    //Sun rays:
    var rayX = 5;
    var rayY = 20;
    push();
    translate(xSun,ySun);
        triangle(rayX, -rayY, 0, -rayY*1.6, -rayX, -rayY);//Top spike
        triangle(rayX, rayY, 0, rayY*1.6, -rayX, rayY);//Bottom spike
    rotate(radians(45));
        triangle(rayX, -rayY, 0, -rayY*1.6, -rayX, -rayY);//Top spike
        triangle(rayX, rayY, 0, rayY*1.6, -rayX, rayY);//Bottom spike
    rotate(radians(45));
        triangle(rayX, -rayY, 0, -rayY*1.6, -rayX, -rayY);//Top spike
        triangle(rayX, rayY, 0, rayY*1.6, -rayX, rayY);//Bottom spike
    rotate(radians(45));
        triangle(rayX, -rayY, 0, -rayY*1.6, -rayX, -rayY);//Top spike
        triangle(rayX, rayY, 0, rayY*1.6, -rayX, rayY);//Bottom spike
    pop();
}


function bear(xBear, yBear) {
    var bearUnit = 50;
    var bearEar = 15;
    fill(126,85,38);
        ellipse(xBear,yBear,bearUnit,bearUnit); //head
        ellipse(xBear-bearUnit*.4,yBear-bearUnit*.4,bearEar,bearEar); //left ear
        ellipse(xBear+bearUnit*.4,yBear-bearUnit*.4,bearEar,bearEar); //right ear
    fill(158,111,57);
        ellipse(xBear,yBear+7,bearUnit/2.3,bearUnit/2); //snout
    fill(0);
        triangle(xBear-noseUnit,yBear+noseUnit, xBear,yBear+noseUnit*2, xBear+noseUnit,yBear+noseUnit); //nose
        ellipse(xBear-15,yBear-5, eyeSize,eyeSize); //left eye
        ellipse(xBear+15,yBear-5, eyeSize,eyeSize); //right eye
}

function raccoon (xRaccoon, yRaccoon) {
    var wRaccoon = 45;
    var hRaccoon = 40;
    var eye = 10;
    fill(150);
        ellipse(xRaccoon, yRaccoon, wRaccoon, hRaccoon); //head
        triangle(xRaccoon-wRaccoon/4,yRaccoon-wRaccoon/3, xRaccoon-wRaccoon/2,yRaccoon-hRaccoon/2, xRaccoon-wRaccoon/2.1,yRaccoon-5); //left ear
        triangle(xRaccoon+wRaccoon/4,yRaccoon-wRaccoon/3, xRaccoon+wRaccoon/2,yRaccoon-hRaccoon/2, xRaccoon+wRaccoon/2.1,yRaccoon-5); //right ear
    fill(0);
        ellipse(xRaccoon, yRaccoon+8, noseUnit*2,noseUnit); //nose
    fill(100);
        ellipse(xRaccoon-eye, yRaccoon, eye*1.5, eye); //left eye patch
        ellipse(xRaccoon+eye, yRaccoon, eye*1.5, eye); //right eye patch
    fill(0);
        ellipse(xRaccoon-eye, yRaccoon, eyeSize,eyeSize); //left eye
        ellipse(xRaccoon+eye, yRaccoon, eyeSize,eyeSize); //right eye
}

function tree (xTree, yTree) {
    var wLeaves = 70;
    var hLeaves = 90;
    var branch = 20;
    fill(28,118,108);
        ellipse(xTree, yTree, wLeaves, hLeaves); //leaves
    fill(86,58,36);
        triangle(xTree-5,yTree+hLeaves, xTree, yTree-branch, xTree+5,yTree+hLeaves); //trunk
        triangle(xTree-2,yTree+5, xTree,yTree+branch*.75, xTree-branch, yTree-branch); //left branch
        triangle(xTree+2,yTree+branch, xTree,yTree+branch*1.5, xTree+branch, yTree-5); //right branch
}

function deer(xDeer, yDeer) {
    fill(188,140,85);
        ellipse(xDeer, yDeer, 35,50); //head
        quad(xDeer-4,yDeer-18, xDeer-14,yDeer-30, xDeer-24,yDeer-32, xDeer-20, yDeer-23); //left ear
        quad(xDeer+4,yDeer-18, xDeer+14,yDeer-30, xDeer+24,yDeer-32, xDeer+20, yDeer-23); //right ear
    fill(158,111,57);
        ellipse(xDeer,yDeer-15, 12,20); //forehead patch
    fill(0);
        ellipse(xDeer-10,yDeer+2, eyeSize,eyeSize); //left eye
        ellipse(xDeer+10,yDeer+2, eyeSize,eyeSize); //right eye
        triangle(xDeer-noseUnit,yDeer+noseUnit*3, xDeer,yDeer+noseUnit*4, xDeer+noseUnit,yDeer+noseUnit*3); //nose
}

function owl(xOwl, yOwl) {
    var wOwl = 50;
    var hOwl = 40;
    var ear = 20;
    fill(80,110,132);
        ellipse(xOwl, yOwl, wOwl,hOwl);
        triangle(xOwl-ear*.7,yOwl-ear*.75, xOwl-ear,yOwl-ear, xOwl-22,yOwl-ear*.25); //left ear
        triangle(xOwl+ear*.7,yOwl-ear*.75, xOwl+ear,yOwl-ear, xOwl+22,yOwl-ear*.25); //right ear
    fill(236,236,163);
        ellipse(xOwl-10,yOwl-2, hOwl/2,hOwl/2); //left eye patch
        ellipse(xOwl+10,yOwl-2, hOwl/2,hOwl/2); //left eye patch
    fill(0);
        ellipse(xOwl-10,yOwl-2,eyeSize,eyeSize); //left eye
        ellipse(xOwl+10,yOwl-2,eyeSize,eyeSize); //right eye
    fill("orange");
        triangle(xOwl-noseUnit,yOwl+noseUnit, xOwl,yOwl+noseUnit*3, xOwl+noseUnit,yOwl+noseUnit) //beak
}

function flower(xFlower, yFlower) {
    var wPetal = 10;
    var hPetal = 20;
    var yPetal = 15;
    var rotatn = 45;
    //Petals
    push();
    fill(179,91,134);
    translate(xFlower,yFlower);
        ellipse(0,-yPetal, wPetal,hPetal);
        ellipse(0,yPetal, wPetal,hPetal);
    rotate(radians(rotatn));
        ellipse(0,-yPetal, wPetal,hPetal);
        ellipse(0,yPetal, wPetal,hPetal);
    rotate(radians(rotatn));
        ellipse(0,-yPetal, wPetal,hPetal);
        ellipse(0,yPetal, wPetal,hPetal);
    rotate(radians(rotatn));
        ellipse(0,-yPetal, wPetal,hPetal);
        ellipse(0,yPetal, wPetal,hPetal);
    pop();
    //Center of Flower
    fill("orange");
        ellipse(xFlower,yFlower, yPetal,yPetal);
}