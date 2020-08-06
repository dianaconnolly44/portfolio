//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-08-B


// these three arrays, bodyLinks, feetLinks, and headLinks can be
// used to access images for Assignment 8B
var headLinks = [
    "http://i.imgur.com/gBCZVuM.jpg",
    "http://i.imgur.com/YLOXAdH.jpg",
    "http://i.imgur.com/my3TqY7.jpg",
    "http://i.imgur.com/lvtIB9s.jpg",
    "http://i.imgur.com/gvDBfhO.jpg",
    "http://i.imgur.com/JEuJ2ER.jpg",
    "http://i.imgur.com/SbBOG1V.jpg",
    "http://i.imgur.com/cuJ5Ao1.jpg",
    "http://i.imgur.com/dqHjjig.jpg",
    "http://i.imgur.com/mcFUcHf.jpg",
    "http://i.imgur.com/0XKU9Dx.jpg",
    "http://i.imgur.com/sD1ArAR.jpg"]

var bodyLinks = [
    "http://i.imgur.com/5YM2aPE.jpg",
    "http://i.imgur.com/oKtGXfd.jpg",
    "http://i.imgur.com/Kvg75bG.jpg",
    "http://i.imgur.com/0FGzErn.jpg",
    "http://i.imgur.com/MJmlPt5.jpg",
    "http://i.imgur.com/VvX0k8e.jpg",
    "http://i.imgur.com/rLIOBoG.jpg",
    "http://i.imgur.com/q03Gko3.jpg",
    "http://i.imgur.com/BWpN5SP.jpg",
    "http://i.imgur.com/ft10TV3.jpg",
    "http://i.imgur.com/CGCZliN.jpg",
    "http://i.imgur.com/qrlc4dK.jpg"]
    
var feetLinks = [
    "http://i.imgur.com/oNSO0T6.jpg",
    "http://i.imgur.com/OWGETX7.jpg",
    "http://i.imgur.com/Zp29aVg.jpg",
    "http://i.imgur.com/AXLWZRR.jpg",
    "http://i.imgur.com/wgZq717.jpg",
    "http://i.imgur.com/sGVMEMw.jpg",
    "http://i.imgur.com/hfbrynH.jpg",
    "http://i.imgur.com/OOASUMM.jpg",
    "http://i.imgur.com/aqtIXi0.jpg",
    "http://i.imgur.com/Eu6ruPo.jpg",
    "http://i.imgur.com/mTSipwg.jpg",
    "http://i.imgur.com/1GzC4Zz.jpg"]

var heads = [];
var bodies = [];
var feet = [];
var headIndex = 0;
var bodyIndex = 0;
var feetIndex = 0;

function preload() { //goes through all of the arrays and loads each image
for (i=0; i<headLinks.length; i++) {
    heads.push(loadImage(headLinks[i]));
    bodies.push(loadImage(bodyLinks[i]));
    feet.push(loadImage(feetLinks[i]));
    }
}

function setup() {
    createCanvas(280,540);
}

function draw() {
    image(heads[headIndex], 0,0); //draws initial head
    image(bodies[bodyIndex], 0,180); //draws initial body
    image(feet[feetIndex], 0,360); //draws initial feet
}

function mousePressed() {
    if (mouseY<180 && mouseY>0 && mouseX<280 && mouseX>0){
        var prevIndex = headIndex;
        while(headIndex == prevIndex){ //checks for repeated head cards
        headIndex = floor(random(0,12));}
        image(heads[headIndex], 0,0); //draws new head card upon click
    } else if (mouseY < 360 && mouseY >180 && mouseX<280 && mouseX>0){
        var prevIndex = bodyIndex;
        while(bodyIndex == prevIndex){ //checks for repeated body cards
        bodyIndex = floor(random(0,12));}       
        image(bodies[bodyIndex], 0,180); //draws new body card upon click
    } else if (mouseY < 540 && mouseY > 360 && mouseX<280 && mouseX>0){
        var prevIndex = feetIndex;
        while(feetIndex == prevIndex){ //checks for repeated feet cards
        feetIndex = floor(random(0,12));}
        image(feet[feetIndex], 0,360); //draws new foot card upon click
    }
}