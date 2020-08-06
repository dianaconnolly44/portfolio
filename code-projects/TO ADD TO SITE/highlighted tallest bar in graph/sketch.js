//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-07-A

var presidentHeights = [188, 170, 189, 163, 183, 171, 185, 168, 
173, 183, 173, 173, 175, 178, 183, 193, 178, 173, 174, 183, 188, 
180, 168, 180, 170, 178, 182, 180, 183, 178, 182, 188, 175, 179, 
183, 192, 182, 183, 177, 185, 188, 188, 182, 185]; //given array

function setup() {
    createCanvas(660, 300);
    noLoop();
}

function draw() {
	var barWidth = 15; //sets width of each bar
    background("LightPink");
    strokeWeight(2);
    //draws the bars of the bar chart
    for (var i = 0; i < presidentHeights.length; i++) {
        
        //Highlights the tallest president with orange fill
        if (presidentHeights[i] == max(presidentHeights)) {
        	fill("orange");
        } else { 
        	fill(255);
        }

        rect(i*barWidth, height - presidentHeights[i], barWidth, presidentHeights[i]);
    }
}
