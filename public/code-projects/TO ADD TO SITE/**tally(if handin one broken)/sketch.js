var gClickCount = 0;
var zCount = 0; 

function setup() {
    createCanvas(800, 100);
    strokeWeight(2);
}

function draw() {
    background("LightPink");
    for (var i = 0; i < gClickCount; i += 1) { 
    if ((i+1)%5 == 0) {
        hatchLine(); //draws the hatch lines
    } else {
        drawLines(i); //draws the vertical lines
    }
    if (keyIsPressed) { //makes the tally start back at 0 when you press a key
        gClickCount = 0;
        zCount = 0;
    }
  }
}

function mousePressed() {
    gClickCount ++; //click count increases by 1 when you press the
    if (gClickCount%5 == 0) {
          zCount ++; //increases hatch counting by 1 every 5th time mouse is pressed
    }
}

function drawLines(i) {
    var x1 = 20 + i*10;
    var x2 = x1;
    var y1 = 35;
    var y2 = 65;
    line(x1, y1, x2, y2); // the vertical lines
}

function hatchLine() {
  for (z=0; z<zCount; z++) {
    line(15+z*50, 60, 55 +z*50, 40); // the hatch lines
  }
}