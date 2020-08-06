// Game example, part 3, see comments starting with //3
// A platform game, horizontal scrolling

// first, let's make a generative "landscape" with platforms
// each platform will be an object with an x, y, and w parameter

//2 in part 2, we add a "mario"

//3 in part 3, we add a "jump" command. The jump will give "mario" a
//3  vertical velocity.


var platforms = [];
var marioY = 0; //2 the height of our "mario"
var marioDy = 0; //3 the vertical velocity of "mario"

// to scroll, we will increment offset. Everything is shifted left by offset
var offset = 0;

function newPlatform(px, py, pw) {
    return {x: px, y: py, w: pw};
}


function setup() {
    createCanvas(600, 300);
    platforms.push(newPlatform(600, 200, 200));
}


// compute the location of the right end of a platform
function platRight(p) {
    return p.x + p.w;
}

// return the last platform object
function platLast() {
    return platforms[platforms.length - 1];
}

function draw() {
    background("lightblue");
    fill("green");
    stroke("green");
    rect(0, height - 50, width, 50); // the ground
    
    fill(0);
    stroke(0);
    for (var i = 0; i < platforms.length; i++) {
        var p = platforms[i];
        rect(p.x - offset, p.y, p.w, 10);
    }

    // if first platform is offscreen to left, remove it
    if (platforms.length > 0 && platRight(platforms[0]) < offset) {
        platforms.shift();
    }

    // if last platform is totally within canvas, make a new one
    if (platRight(platLast()) - offset < width) {
        var p = newPlatform(platRight(platLast()), // start location
                            random(50, 225), // height of new platform
                            200); // all platforms have width 200 for now
        platforms.push(p); // add to our array of platforms
    }
    text(platforms.length.toString() + " platforms", 10, 30);

    //2 move and draw the "mario"
    //2 which platform is current? linear search (!) through platforms
    var pindex = 0;
    var marioX = width / 2;
    while (platRight(platforms[pindex]) - offset < marioX) {
        pindex += 1;
    }
    //2 now pindex is index of the platform in the middle of canvas
    //2 find the platform height
    var py = platforms[pindex].y;
    //3 show some debugging information for now
    text("pindex " + pindex + " py " + py + " Dy " + marioDy, 10, 50);
    //2 if we are above it, fall toward it, but do not go past it
    if (marioY <= py) {
        marioY = min(py, marioY + marioDy); //3 change Y by Dy
    } else { //2 if we are below it, fall to ground
        //3 if dY is negative, we could "punch through" a platform from below
        //3 to avoid this, once we are below a platform, force Dy non-negative
        if (marioDy < 0) {
            marioDy = 0;
        }
        marioY = min(height, marioY + marioDy);
    }
    //2 wrap around, "fall from sky" again if we "die"
    if (marioY >= height) {
        marioY = 0;
        marioDy = 0;
    }
    //2 draw the "mario"
    fill("brown");
    stroke("brown");
    rect(marioX, marioY - 20, 20, 20);

    // move the "landscape"
    offset += 1;
    //3 accelerate "mario" with gravity
    marioDy = marioDy + 1;
}


function mousePressed() {
}


function keyPressed() {
    marioDy = -10; //3 velocity set to up when key is pressed
}