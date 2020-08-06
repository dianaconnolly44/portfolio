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
             mass: 1.0, damping: 0.9,
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
  
  
// ========== THE MAIN PROGRAM ============
// Mutual repulsion, with optional gravity

var myParticles = [];
var nParticles = 400; 
 
 
function setup() {
    createCanvas(400, 400);
 
    for (var i = 0; i < nParticles; i++) {
        var rx = random(width);
        var ry = random(height);
        myParticles[i] = makeParticle(rx, ry, 0, 0);
    }
}
 
 
function keyPressed() {
    for (var i = 0; i < myParticles.length; i++) {
        myParticles[i].px = random(width);
        myParticles[i].py = random(height);
    }
}

 
function draw() {
    background(200);
 
    var gravityForcex = 0;
    var gravityForcey = 0.05;
    var mutualRepulsionAmount = 2.5;
 
 
    for (var i = 0; i < myParticles.length; i++) {
        var ithParticle = myParticles[i];
        var px = ithParticle.px;
        var py = ithParticle.py;
 
        if (mouseIsPressed) {
            ithParticle.addForce(gravityForcex, gravityForcey);
        }
 
        for (var j = 0; j < i; j++) {
            var jthParticle = myParticles[j];
            var qx = jthParticle.px;
            var qy = jthParticle.py;
 
            var dx = px - qx;
            var dy = py - qy;
            var dh = sqrt(dx * dx + dy * dy);

            if (dh > 1.0) {
                var componentInX = dx / dh;
                var componentInY = dy / dh;
                var proportionToDistanceSquared = 1.0 / (dh * dh);
                var repulsionForcex = mutualRepulsionAmount *
                    componentInX * proportionToDistanceSquared;
                var repulsionForcey = mutualRepulsionAmount *
                    componentInY * proportionToDistanceSquared;
                // add in forces
                ithParticle.addForce( repulsionForcex,  repulsionForcey);
                jthParticle.addForce(-repulsionForcex, -repulsionForcey);
            }
        }
    }
 
    for (var i = 0; i < myParticles.length; i++) {
        myParticles[i].bPeriodicBoundaries = false;
        myParticles[i].bElasticBoundaries = true;
        myParticles[i].update(); // update all locations
    }
 
    for (var i = 0; i < myParticles.length; i++) {
        myParticles[i].draw(); // draw all particles
    }
}