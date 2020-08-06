var myParticles = [];
var mySprings = [];

// The index in the particle array, of the one the user has clicked.
var whichParticleIsGrabbed = -1;


// ========== PARTICLE METHODS =============

// Update the position based on force and velocity
function particleUpdate() {
    if (this.bFixed == false) {
        this.vx *= this.damping;
        this.vy *= this.damping;
  
        this.limitVelocities();
        this.handleBoundaries();
        this.px += this.vx;
        this.py += this.vy;
    }
}


// Prevent particle velocity from exceeding maxSpeed
function particleLimitVelocities() {
    if (this.bLimitVelocities) {
        var speed = sqrt(this.vx * this.vx + this.vy * this.vy);
        var maxSpeed = 10;
        if (speed > maxSpeed) {
            this.vx *= maxSpeed / speed;
            this.vy *= maxSpeed / speed;
        }
    }
}


// do boundary processing if enabled
function particleHandleBoundaries() {
    if (this.bPeriodicBoundaries) {
        if (this.px > width) this.px -= width;
        if (this.px < 0) this.px += width;
        if (this.py > height) this.py -= height;
        if (this.py < 0) this.py += height;
    } else if (this.bHardBoundaries) {
        if (this.px >= width) {
            this.vx = -abs(this.vx);
        }
        if (this.px <= 0) {
            this.vx = abs(this.vx);
        }
        if (this.py >= height) {
            this.vy = -abs(this.vy);
        }
        if (this.py <= 0) {
            this.vy = abs(this.vy);
        }
    }
}


// draw the particle as a white circle
function particleDraw() {
    fill(255);
    ellipse(this.px, this.py, 9, 9);
}


// add a force to the particle using F = mA
function particleAddForce(fx, fy) {
    var ax = fx / this.mass;
    var ay = fy / this.mass;
    this.vx += ax;
    this.vy += ay;
}


// make a new particle
function makeParticle(x, y, dx, dy) {
    var p = {px: x, py: y, vx: dx, vy: dy,
             mass: 1.0, damping: 0.96,
             bFixed: false,
             bLimitVelocities: false,
             bPeriodicBoundaries: false,
             bHardBoundaries: false,
             addForce: particleAddForce,
             update: particleUpdate,
             limitVelocities: particleLimitVelocities,
             handleBoundaries: particleHandleBoundaries,
             draw: particleDraw
            }
    return p;
}
  
  
// ============ SPRING METHODS =============

// update particles with spring force
function springUpdate() {
    var dx = this.p.px - this.q.px;
    var dy = this.p.py - this.q.py;
    var dh = dist(this.p.px, this.p.py, this.q.px, this.q.py);

    if (dh > 1) {
        var distention = dh - this.restLength;
        // computer F = -kx:
        var restorativeForce = this.springConstant * distention;
        var fx = (dx / dh) * restorativeForce;
        var fy = (dy / dh) * restorativeForce;
        this.p.addForce(-fx, -fy);
        this.q.addForce( fx,  fy);
    }
}


// draw spring as a white line
function springDraw() {
    stroke(255);
    line(this.p.px, this.p.py, this.q.px, this.q.py);
}


// make a new spring object
function makeSpring(p1, p2, k) {
    var s = {p: p1, q: p2,
             restLength: dist(p1.px, p1.py, p2.px, p2.py),
             springConstant: k,
             update: springUpdate,
             draw: springDraw
            }
    return s;
}


// ========== THE MAIN PROGRAM ============
// two particles connected by a spring

function setup() {
    createCanvas(600, 400);
    createParticles(); 
    createSpringMeshConnectingParticles(); 
    frameRate(10);
}


function createParticles(){
    var particle0 = makeParticle(250, 200, 0, 0); 
    var particle1 = makeParticle(350, 200, 0, 0); 
    var particle2 = makeParticle(150, 250, 0, 0);
  
    myParticles.push(particle0);
    myParticles.push(particle1);
    myParticles.push(particle2);
}


function createSpringMeshConnectingParticles() {
    // The spring constant. 
    var K = 0.1; 
  
    // Stitch the particles together by a spring.
    var p = myParticles[0];
    var q = myParticles[1];
    var r = myParticles[2];
    var aSpring = makeSpring(p, q, K);
    var bSpring = makeSpring(q, r, K); 
    mySprings.push(aSpring);
    mySprings.push(bSpring);
}


function mousePressed() {
    // If the mouse is pressed, 
    // find the closest particle, and store its index.
    whichParticleIsGrabbed = -1;
    var maxDist = 9999;
    for (var i = 0; i < myParticles.length; i++) {
        var dh = dist(mouseX, mouseY,
                      myParticles[i].px, myParticles[i].py)
        if (dh < maxDist) {
            maxDist = dh;
            whichParticleIsGrabbed = i;
        }
    }
}
 
 
function draw() {
    background(0);
 
    for (var i = 0; i < myParticles.length; i++) {
        myParticles[i].update(); // update all locations
    }

    if (mouseIsPressed & (whichParticleIsGrabbed > -1)) {
        // If the user is grabbing a particle, peg it to the mouse.
        myParticles[whichParticleIsGrabbed].px = mouseX;
        myParticles[whichParticleIsGrabbed].py = mouseY;
    }
 
    for (var i = 0; i < mySprings.length; i++) {
        mySprings[i].update(); // draw all springs
    }

    for (var i = 0; i < mySprings.length; i++) {
        mySprings[i].draw(); // draw all springs
    }

    for (var i = 0; i < myParticles.length; i++) {
        myParticles[i].draw(); // draw all particles
    }
  
    fill(255); 
    noStroke(); 
    text("Grab a point", 5, 20); 
}