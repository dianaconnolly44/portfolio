var eyeHeight = 90;

function setup() {
    createCanvas(480, 640);
}

function draw() {
   // Background color changes from orange to purple as moving mouse vertical
     colR = map(mouseY, 0, height, 243, 44);
    colG = map(mouseY, 0, height, 135, 17);
    colB = map(mouseY, 0, height, 107, 106);
    background(colR, colG, colB);

    //Eye Shapes
    eyeHeight = map(mouseY, 0, height, 90, 0); // Maps mouse placement to eye height
    noStroke();
    fill(255);
    ellipse(width/4, height/2, 160, eyeHeight); // Left eye will close (height decrease) as mouse moves down
    ellipse(3*width/4, height/2, 160, eyeHeight); // Right eye will close (height decrease) as mouse moves down
    
    //Left Iris
    fill("LightBlue");
    ellipse(width/4, height/2, 90, eyeHeight);
    
    //Left Pupil
    noStroke();
    fill(0);
    ellipse(width/4, height/2, eyeHeight/2, eyeHeight/2); //Pupil dilates (ellipse size increases) with mouse moving up

    //Right Iris
    fill("LightBlue");
    ellipse(3*width/4, height/2, 90, eyeHeight);
    
    //Right Pupil
    noStroke();
    fill(0);
    ellipse(3*width/4, height/2, eyeHeight/2, eyeHeight/2); //Pupil dilates (ellipse size increases) with mouse moving up

    //Sun - using mouseY will make sun go up as mouse goes up
    fill("yellow");
    ellipse(width/2, mouseY, 42, 42); //Center circle
    //Spikes
    triangle(width/2 + 10, mouseY, width/2, mouseY-35, width/2 - 10, mouseY);//Top spike
    triangle(width/2 + 10, mouseY, width/2, mouseY+35, width/2 - 10, mouseY);//Bottom spike
    triangle(width/2, mouseY + 10, width/2 - 35, mouseY, width/2, mouseY - 10);//Left spike
    triangle(width/2, mouseY + 10, width/2 + 35, mouseY, width/2, mouseY - 10);//Right spike
    triangle(width/2 + 5, mouseY + 15, width/2 + 25, mouseY + 28, width/2 +5, mouseY - 15);//Bottom right spike
    triangle(width/2 + 5, mouseY - 15, width/2 + 25, mouseY - 28, width/2 +5, mouseY + 15);//Top right spike
    triangle(width/2 - 5, mouseY + 15, width/2 - 25, mouseY + 28, width/2 -5, mouseY - 15);//Bottom left spike
    triangle(width/2 - 5, mouseY - 15, width/2 - 25, mouseY - 28, width/2 -5, mouseY + 15);//Top right spike

    //Moon - using height-mouseY will make moon go down as mouse goes up
    fill(112, 120, 195);
    ellipse(width/2, height-mouseY, 50, 50);//Moon circle
    //Craters
    fill(120, 70, 225, 99);
    ellipse(width/2 - 7, height-mouseY + 7, 11, 12);
    ellipse(width/2 + 3, height-mouseY - 2, 6, 7);
    ellipse(width/2 + 11, height-mouseY - 14, 8, 8);
    ellipse(width/2 -13, height-mouseY - 9, 5, 6);
    ellipse(width/2 +2, height-mouseY + 16, 5, 6);
    
    if (mouseIsPressed) {
    fill(colR, colG, colB);
    ellipse(width/4, height/2, 160, 90);//Ellipse covers left eye  
    ellipse(3*width/4, height/2, 160, 90);//Ellipse covers right eye
    stroke(0);
    noFill();
    strokeWeight(3);
    arc(width/4, height/2, 155, eyeHeight, TWO_PI, PI); // Left closed eye
    arc(3*width/4, height/2, 155, eyeHeight, TWO_PI, PI); // Right closed eye
    }
}