var buttonY = 290;
var colorY = 100;



function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(colorY);

    
    //Slider
    fill(255);
    ellipse(300, 300, 50, 50);
    
    push();
    translate(300,300);
    fill(0);
    rotate(PI*buttonY/100);
    ellipse(0, 10, 10, 10);
    pop();
}


function mouseDragged() {
	buttonY = max(min(mouseY, 500), 50);
	if(mouseY>=0 && mouseY<= width) {
		colorY = mouseY/height * 255;
	}
}
    
