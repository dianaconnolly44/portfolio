// Diana Connolly
// Section A, Tuesdays at 9:00AM
// dconnoll@andrew.cmu.edu
// Assignment-03-A

function setup() {
    createCanvas(600, 300);
}
 
function draw() {
    background(170, 190, 200);
    noStroke();
 
    var fixme = 600-mouseX;
 
    fill(255);
    ellipse(mouseX, 100, 60, 60);
 
    fill(0);
    ellipse(fixme, 200, 60, 60);
}

























	//fill(255, 255, 0);
    // // restrict mouseX to 0-400
    // var m = max(min(mouseX, 400), 0);
    // var size = m * 350.0 / 400.0;
    // rect(10 + m * 190.0 / 400.0, 200.0,
    //      size, size);
    // fill(0, 0, 255);
    // size = 350 - size;
    // rect(200 + m * 190.0 / 400.0, 200.0,
    //      size, size);