//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-09

var frames = []; // An array to store the images
var characterX;  // The X location of the character
var characterY;  // The Y location of the character
var targetX;     // The X goal, from the user's click
var targetY;     // The Y goal, from the user's click
var exampleImgOnly; 
var framesIndex = 0;


var filenames = [
    "http://i.imgur.com/svA3cqA.png",
    "http://i.imgur.com/jV3FsVQ.png",
    "http://i.imgur.com/IgQDmRK.png",
    "http://i.imgur.com/kmVGuo9.png",
    "http://i.imgur.com/jcMNeGq.png",
    "http://i.imgur.com/ttJGwkt.png",
    "http://i.imgur.com/9tL5TRr.png",
    "http://i.imgur.com/IYn7mIB.png"]
 
//---------------------------------------
function preload(){
    //LOADS THE IMAGES INTO THE frames ARRAY
    for (i=0; i<filenames.length; i++) {
    frames.push(loadImage(filenames[i]));
    }
}
 
//---------------------------------------
function draw() {
    background(222);
  
//MOVES THE CHARACTER TOWARDS THE TARGET.
    var dx = targetX - characterX;
    var dy = targetY - characterY;
    var distanceFromCharacterToTarget = sqrt(dx*dx + dy*dy);
    if (dx > 0) { //move to the right
        var incrementX = dx/5;
        characterX = characterX + incrementX;
        var incrementY = dy/5;
        characterY = characterY + incrementY;
    } else if (dx < 0) { //move to the left
        incrementX = dx/5;
        characterX = characterX + incrementX;
        incrementY = dy/5;
        characterY = characterY + incrementY;
    }
  
    //displays character, cycles through frames    
    framesIndex ++;
    if (framesIndex == 8) {
        framesIndex = 0;
    } 
    // FLIP THE IMAGE IF THE CHARACTER'S HEADING LEFT. 
    if (characterX <= targetX) {
        image(frames[framesIndex], characterX, characterY);
    } else {
        push();
        scale(-1,1);
        image(frames[framesIndex], -characterX, characterY);
        pop();
    }
  
 
    // Don't touch this:
    // Draws a spot at the target, colored based on the character's proximity. 
    drawTargetEllipse (distanceFromCharacterToTarget);
}
 
 
//=======================================================
// PROBABLY NO REASON TO CHANGE ANYTHING BELOW THIS LINE. 
function setup() {
    createCanvas(800, 480);
    imageMode(CENTER);
    frameRate(12);
  
    // Initialize the character and target positions. 
    characterX = width / 2; 
    characterY = height / 2; 
    targetX = characterX;
    targetY = characterY;
}
 
function drawTargetEllipse(distanceFromCharacterToTarget){
    if (distanceFromCharacterToTarget < 80){
        fill(0,200,0, 40); // Green if we're nearby
    } else {
        fill(255,0,0, 40); // Red if we're far away
    }
    noStroke();
    ellipse(targetX, targetY, 160,160); 
}
 
function mousePressed() {
    targetX = mouseX;
    targetY = mouseY;
}