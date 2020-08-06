var gClickCount = 0;

function setup() {
    createCanvas(800, 100);
    strokeWeight(2);
}

function draw() {
    background("LightPink");
    
    if (gClickCount == 1) {
      line(20, 35, 20, 65);
    }
    
    if (gClickCount == 2) {
      line(20, 35, 20, 65);
      line(30, 35, 30, 65);
    }
    
    if (gClickCount == 3) {
      line(20, 35, 20, 65);
      line(30, 35, 30, 65);
      line(40, 35, 40, 65);
    }
    
    if (gClickCount == 4) {
      line(20, 35, 20, 65);
      line(30, 35, 30, 65);
      line(40, 35, 40, 65);
      line(50, 35, 50, 65);
    }
    
    if (gClickCount == 5) {
      line(20, 35, 20, 65);
      line(30, 35, 30, 65);
      line(40, 35, 40, 65);
      line(50, 35, 50, 65);
      line(15, 60, 55, 40);
    }
    // for (var i = 0; i < width-20; i += 10) { 
    //     line(20+ gClickCount*20, 35, 20+gClickCount*20, 65);
    // }
}

function mousePressed () {
	gClickCount ++ 
	if (keyIsPressed) {
		gClickCount = 0;
	}
}











