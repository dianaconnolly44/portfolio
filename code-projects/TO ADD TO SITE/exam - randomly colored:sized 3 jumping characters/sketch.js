// Lab Exam 2, Problem B
// dconnoll@andrew.cmu.edu

// these global variables will contain arrays that control
// x, y, width, height, and color, respectively:
var px, py, pw, ph, pc;

function drawPerson(x, y, w, h, c) {
    fill(c,c,c);
    ellipseMode(CORNER);
    ellipse(x + (w/3), y-h, 2*w/3, h/4); //head
    ellipse(x, y-(3*h/4), w, 3*h/4); //body
    fill(0);
    ellipse(x + w-10, y-h+h/10, w/10,w/10); //eye
    line(x + w-10, y-h+h/6, x+w, y-h+h/6); //mouth
}
        
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);
    animate(); // (this is magically defined for you, below)
    for (i=0; i<px.length; i++) {
    	drawPerson(px[i], py[i], pw[i], ph[i], pc[i]);
        println(px);
    }    
}

// Do not try to read this! When you call animate, this function will
// define and update arrays px, py, pw, ph, and pc.
function mA(){var nx=millis()*0.0001;if(!px){px=[];py=[];pw=[];ph=[];
pc=[];pxd=[];pxv=[];php=[];for(var i=0;i < 3;i++){px.push(30+random(width-60));
py.push(350);pw.push(myGaussian(50, 20));ph.push(myGaussian(200, 50));
pc.push(color(myGaussian(210,20),myGaussian(180,20),myGaussian(140,20)));
pxd.push(-1);pxv.push(0);php.push(0);}}else{for(var i=0;i < px.length;i++){
if(pxv[i] > 0){px[i]+=pxv[i];if(px[i]>pxd[i]){px[i]=pxd[i];pxv[i]=0;}
}else if(pxv[i] < 0){px[i]+=pxv[i];if(px[i] < pxd[i]){px[i]=pxd[i];pxv[i]=0;}
}else if(random(1000) < 5){pxd[i]=random(20,width-20);pxv[i]=random(0.1,2);
if(pxd[i] < px[i]){pxv[i]=-pxv[i];}}if(php[i] > 0){php[i]+=10;py[i]=350-sin(
radians(php[i]))*ph[i]*0.25;if(php[i] >= 180){py[i]=350;php[i]=0;}
}else if(random(1000) < 2){php[i]=0.1;}}}}var pxd,pxv,php;
function mG(mean,stdev){var x=randomGaussian(mean,stdev);
while(x < mean-stdev*2||x > mean+stdev*2){x=randomGaussian(mean,stdev);
}return x;}myGaussian=mG;animate=mA;
