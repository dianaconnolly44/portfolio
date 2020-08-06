var gravity = 0.3;   // downward acceleration
var springy = 0.7; // how much velocity is retained after bounce
var drag = 0.0001;    // drag causes particles to slow down
var np = 100;      // how many particles


function particleStep() {
    this.age++;
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > width) { // bounce off right wall
        this.x = width - (this.x - width);
        this.dx = -this.dx * springy;
    } else if (this.x < 0) { // bounce off left wall
        this.x = -this.x;
        this.dx = -this.dx * springy;
    }
    if (this.y > height) { // bounce off bottom
        this.y = height - (this.y - height);
        this.dy = -this.dy * springy;
    } else if (this.y < 0) { // bounce off top
        this.y = -this.y;
        this.dy = -this.dy * springy;
    }
    this.dy = this.dy + gravity; // force of gravity
    // drag is proportional to velocity squared
    // which is the sum of the squares of dy and dy
    var vs = Math.pow(this.dx, 2) + Math.pow(this.dy, 2);
    // d is the ratio of old velocty to new velocity
    var d = vs * drag;
    // d goes up with velocity squared but can never be
    // so high that the velocity reverses, so limit d to 1
    d = min(d, 1);
    // scale dx and dy to include drag effect
    this.dx *= (1 - d);
    this.dy *= (1 - d);
}


function particleDraw() {
    this.color = stroke(random(0,255), random(0,205), random(0,255));
    this.size = strokeWeight(random(1,30));
    point(this.x, this.y);
}


// create a "Particle" object with position and velocity
function makeParticle(px, py, pdx, pdy, fill, width) {
    p = {x: px, y: py,
         dx: pdx, dy: pdy,
         age: 0,
         step: particleStep,
         draw: particleDraw,
         color: fill,
         size: width
        }
    return p;
}

var particles = [];


function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < np; i++) {
        // make a particle
        var p = makeParticle(200, 200,
                             random(-50, 50), random(-50, 50), particleDraw.color, particleDraw.size);
        // push the particle onto particles array
        particles.push(p);
    }
    frameRate(10);
}


// draw all particles in the particles array
//
function draw() {
    background(0);
    stroke(0);
    strokeWeight(10);

    if (mouseIsPressed) {
        var newp = makeParticle(mouseX, mouseY,
                                random(-10, 10), random(-10, 0));
        particles.push(newp);
    }

    // newParticles will hold all the particles that we want to
    // retain for the next call to draw() -- we will retain particles
    // if the age is < 200 (frames). Initially, newParticle is empty
    // because we have not found any "young" particles yet.
    newParticles = [];
    for (var i = 0; i < particles.length; i++) { // for each particle
        var p = particles[i];
        p.step();
        p.draw();
        // since we are "looking" at every particle in order to
        // draw it, let's use the opportunity to see if particle[i]
        // is younger than 200 frames. If so, we'll push it onto the
        // end of newParticles.
        if (p.age < 200) {
            newParticles.push(p);
        }
    }
    // now, newParticles has EVERY particle with an age < 200 frames.
    // these are the particles we want to draw next time, so assign
    // particles to this new array. The old value of particles, i.e.
    // the entire array, is simply "lost" -- Javascript will reclaim
    // and reuse the memory since that array is no longer needed.
    particles = newParticles;
}