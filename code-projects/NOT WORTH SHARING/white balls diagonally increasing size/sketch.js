function setup() {
    createCanvas(600, 200);
}

function draw() {
    background(0);
    for (var y = 32; y <= height; y += 8) {
        for (var x = 12; x <= width; x += 8) {
            ellipse(x + y, y, 2 - y/10.0, 2 - y/10.0);
        }
    }
    noLoop(); // save computation -- no animation
}



// Grid of circles
// function setup() {
//     createCanvas(600, 400);
//     noStroke();
// }

// function draw() {
//     background(0);
//     for (var y = 0; y < height+25; y += 1) {
//         for (var x = 0; x < width+25; x += 1) {
//             fill(255, 140);
//             ellipse(x*50, y*50, 50, 50);
//         }
//     }
//     noLoop();
// }