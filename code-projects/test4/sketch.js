var topRocks = [];
var bottomRocks = [];
var count = 0; //will keep track of where on the noise curve we are
var jetPackY; //character's Y location

var img; //character image

var notPaused = false;
var gameOver = false;

var initialTime = 0;
var elapsed;

var timeAtDeath = 0;


var colR; //initial background color
var colG;
var colB;

function preload() {
	img = loadImage("http://dianaconnolly.me/assets/jetpacker.png");
}

function setup() {
    createCanvas(600, 400);
    frameRate(40);
    jetPackY = height/2;
    // pushes in noise values into top and bottom rock arrays
    while(count < width+1) {
        topRocks.push(height - noise(count * 0.01) * height/2);
        bottomRocks.push(noise(width+count * 0.01) * height/2);
        count++; 
    }
}


function draw() {
    background(colR,colG,colB);
	
	drawBottomRocks();
	drawTopRocks();

	//print text that says how long you've stayed alive
	fill(255);
	textSize(15);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Helvetica");

	//up/down motion of jetpacker
    if (notPaused && !gameOver) {
    	timeAtDeath = getElapsed();
		updateScreen();
	    if (keyIsDown(74)) {
	    	jetPackY -=5; //start moving jetPack w/ pressing "J"
	    } 
	    else {
	    	jetPackY += 3; //jetPack falls otherwise
	    }
    }

    //draw jetPack 
    var jetPackX = width/3;
    image(img, jetPackX, jetPackY, 20,30);

    var topY = topRocks[jetPackX+20];
    var bottomY = bottomRocks[jetPackX+20];

    if (!notPaused && !gameOver) {
    	fill(0);
		textSize(20);
		textStyle(BOLD);
		textAlign(CENTER);
		textFont("Helvetica");
		text("Press 'S' to start game", width/2, height/2 - 10);
		text("Hold down 'J' to move up", width/2, height/2+50);
    }

    //checks for hitting bottom rocks
    var tallestBottomPoint = bottomRocks[jetPackX];
    for (var j = jetPackX; j < jetPackX+20; j++) {
	    tallestBottomPoint = max(bottomRocks[j],tallestBottomPoint);
	}
	if (jetPackY+25 >= height-tallestBottomPoint) {
		gameOver = true;
		textAlign(CENTER);
		textSize(60);
		textFont("Helvetica");
		fill(255,0,0);
		text("GAME OVER", width/2, height/2);
		textSize(20);
		fill(0);
		text("Press 'R' to start again", width/2, height/2+40);
	}

	//checks for hitting top rocks
	var tallestTopPoint = height- topRocks[jetPackX];
    for (var k = jetPackX; k < jetPackX+20; k++) {
	    tallestTopPoint = max(height - topRocks[k],tallestTopPoint);
	}
	if (jetPackY+5 <= tallestTopPoint) {
		gameOver = true;
		textAlign(CENTER);
		textSize(60);
		textFont("Helvetica");
		fill(255,0,0);
		text("GAME OVER", width/2, height/2);
		textSize(20);
		fill(0);
		text("Press 'R' to start again", width/2, height/2+40);
	}	

	//restart game
	if (keyIsPressed) {
		if (key=='r' || key=='R') {
			jetPackY = height/2;
			notPaused = false;
			gameOver = false;
		}
	}

	//prints time alive
	fill(255);
	textSize(15);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Helvetica");

	if (notPaused == false) {
		elapsed = 0;
	} else if (gameOver == true) {
		elapsed = timeAtDeath;
	} else {
		var elapsed = getElapsed();
	}
	text("Seconds alive: " + elapsed, 15,25);

	updateBackgroundColor();
}

function keyPressed() {
	// if we press S; start and reset start time
	if (key == 's' || key == 'S') {
		initialTime = getSecondsToday();
		notPaused = true;
	}
}



// ----------------------------------------------------------------------------------------
// FUNCTIONS CALLED FROM ABOVE

function drawBottomRocks() {
	beginShape();
	noStroke();
    fill(31,19,79);
    vertex(0,height);
    for (var i = 0; i < bottomRocks.length; i++) {
        vertex(i, height - bottomRocks[i]);
    }
    vertex(width,height);
    endShape(CLOSE);
}

function drawTopRocks() {
	beginShape();
	noStroke();
    fill(31,19,79);
    vertex(0,0);
    for (var i = 0; i < topRocks.length; i++) {
        vertex(i, height - topRocks[i]);
    }
    vertex(width,0);
    endShape(CLOSE);
}

function updateScreen() {
	for(var i=0; i<5; i++) {
		bottomRocks.shift(); //deletes first value of bottom rocks
	    topRocks.shift(); //deletes first value of top rocks
	    count++; // count goes up to shift the screen over one
	    topRocks.push(height - noise(count * 0.01) * height/2); //
	    bottomRocks.push(noise(width+ count * 0.01) * height/2);
	}
}

function getSecondsToday() {
	// returns seconds since midnight today
	var h = hour();
	var m = minute();
	var s = second();
	return (s) + (m * 60) + (h * 60 * 60);
}

function getElapsed() {
	// responsible for returning seconds since game started
	return getSecondsToday() - initialTime;
}

function updateBackgroundColor() {
	colR = (elapsed, 0, 20, 255, 227);
	colG = (elapsed, 0, 20, 161, 167);
	colB = (elapsed, 0, 20, 105, 193);
}










//timer start at 0 if start game, or start over
//print highest time each time you die (from times array)
	//array for times:
	//push time
	//search for highest time
	//print highest time each time you die



//color gradiate over time
//color start over if timer = 0



