var leftX = 60, rightX = 140;
var leftY = 50, rightY = 50;
var gdf;
var noiseParam = 0;
var noiseStep = 1;

function ball(x, y) {
    var offset = noise(noiseParam);
    // map offset from 0-1 into -20 to +20
    offset = map(offset, 0, 1, -20, 20);
    fill(0, 222, 0);
    ellipse(x + offset, y, 50, 50);
}
        
function setup() {
    createCanvas(200,200);frameRate(10);
    frameRate(10);
}

function draw() {
    background(255,250,180);
    fill(100);
    ellipse(100, 80, 200, 200);
    ball(leftX, leftY);
    ball(rightX, rightY);
    noiseParam += noiseStep;
};