var buttonX = 50;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(200, 150, 100);
    
    //Slider
    fill(255);
    rect(50, 500, 500, 50); //Big rect
    fill(0);
    rect(buttonX, 500, 30, 50); //Moving button

    fill(255);
    ellipse(width/2, height/2.5, buttonX/2, buttonX/2);

}


function mouseDragged() {
	buttonX = max(min(mouseX, 520), 50);
}
    
