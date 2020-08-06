// 
var x = [100, 110, -90, -70, 100, -120, 10, 20, -5, 7, -9];

var threshold = 50;
var i = 10;
var b = x[i];
b = abs(b); //absolute value

while (b < threshold) {
	i = i-1;
	b = x[i]; //need to update vals
	b = abs(b);
}

// 9 will always be < 50, so program will spin in loop forever