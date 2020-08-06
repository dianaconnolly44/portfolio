//Diana Connolly
//Section A
//dconnoll@andrew.cmu.edu
//Assignment-07-B

var terrain = [];
 
function placeFlagsOnTerrain() {
for (var i = 0; i < terrain.length-1; i++) {
    var num = terrain[i]; //each element in the array
    var numL = terrain[i-1]; //element to the left of our num
    var numR = terrain[i+1]; //element to the right of our num
    if (terrain[i] < terrain[i-1] && terrain[i] < terrain[i+1]) { //draws the flags!
    line(i, terrain[i], i, terrain[i]-10);
    triangle(i, terrain[i]-10, i, terrain[i]-15, i+5, terrain[i]-10);
    }
  }
}

//----------------------------------------------------------------------
// There should be no reason for you to modify any code below this line: 
function setup() {
  createCanvas(640, 240);
}
 
function draw() {
  background(160, 190, 255);
  calculateAndRenderTerrain();
  placeFlagsOnTerrain();
}
 
// This obfuscated function generates the terrain:
function calculateAndRenderTerrain() {
  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};
  if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}
  k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)
  {if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}
  ('c(6);b(4,6,4);9(a 3=0;3<d;3++){8[3]=e(h((3/7.0)+(g()/(7*4))),0,1,5*0.2,5);\
  f(3,8[3],3,5)}',18,18,'|||x|10|height|90|120|terrain|for|var|stroke|\
  noiseSeed|width|map|line|millis|noise'.split('|'),0,{}))
}