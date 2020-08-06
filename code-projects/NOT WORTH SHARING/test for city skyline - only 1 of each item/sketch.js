var backgroundImage;
var cloudX = 0;
var car = {x: 500, y: 340};
var airplane = {x: 30, y: 30, w: 40, h: 10};

function preload() {
    backgroundImage = loadImage("http://i.imgur.com/7BBjulp.png")
}

function setup() {
    createCanvas(600,400);
}

function draw() {
    noStroke();
    image(backgroundImage,0,0, width, height); //background image

    //PLANE
    fill(0);
    ellipse(airplane.x, airplane.y, airplane.w, airplane.h); //body
    triangle(airplane.x-24,airplane.y-10, airplane.x-20,airplane.y, airplane.x-5,airplane.y); //tail
    ellipse(airplane.x+8,airplane.y+1,airplane.w-10,7); //nose
    triangle(airplane.x-3,airplane.y+10, airplane.x-6,airplane.y+5, airplane.x+5,airplane.y+5); //wing
    fill("yellow");
    ellipse(airplane.x+15,airplane.y-2,airplane.w/8,airplane.h-7); //eye
    airplane.x +=1;
    if (airplane.x >= 650) {
        airplane.x = -30;
    }

    //CLOUD
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

    //Back Left house
    fill("lightBlue");
    quad(20,155, 105,155, 101,230, 23,230);

    //FIRST HOUSE
    fill("lightGreen");
    quad(0,200, 80,200, 76, 345, 0,345); //body
    fill("brown");
    quad(0,188, 87,185, 90,203, 0,203); //roof
    fill("yellow");
    quad(0,225, 15,227, 13,267, 0,267); //L window
    quad(35,228, 65,225, 63,267, 34,267); //R window
    quad(0,300, 15,302, 15,340, 0,340);

    noFill();
    stroke(100);
    strokeWeight(4);
    quad(-10,225, 15,227, 13,267, -10,267); //L window outline
    quad(35,228, 65,225, 63,267, 34,267); //R window outline
    noStroke();

    //SECOND HOUSE
    fill("lightPink");
    quad(79,230, 140,230, 140,345, 70,345);



    //CAR
    fill(0);
    
    ellipse(car.x+2,car.y+25,15,15); //front wheel
    ellipse(car.x+45,car.y+25,15,15); //back wheel
    fill(0,0,255); //blue
    rect(car.x,car.y-5, 50,30,15,15,10,10); //top
    rect(car.x-18,car.y+10, 80,15,10); //body
    fill("lightBlue");
    rect(car.x+6,car.y,10,10,5,2,2,2); //front window
    rect(car.x+20,car.y,10,10,2,2,2,2); //middle window
    rect(car.x+34,car.y,10,10,2,5,2,2); //back window
    fill(255,255,0); //yellow
    rect(car.x-20,car.y+13,5,7,5,1,1,5); //headlight
    fill(255,255,0,75); //yellow haze
    triangle(car.x-40,car.y+10, car.x-20,car.y+17, car.x-40,car.y+26);
    car.x -=3;
    if (car.x <= -200) {
        car.x = 800;
    }


}
